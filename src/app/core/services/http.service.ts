import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  get(path: string, params = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.get(`${this.getFullApiPath(path)}`, { params, headers })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, option: Object = {}): Observable<any> {
    return this.http.post(
      this.getFullApiPath(path),
      JSON.stringify(body),
      option
    ).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}, option: Object = {}): Observable<any> {
    return this.http.put(
      this.getFullApiPath(path),
      JSON.stringify(body),
      option
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string, option: Object = {}): Observable<any> {
    return this.http.delete(
      this.getFullApiPath(path),
      option
    ).pipe(catchError(this.formatErrors));
  }

  request(method: string, path: string, option: Object = {}): Observable<any> {
    return this.http.request(method,
      this.getFullApiPath(path),
      option
    ).pipe(catchError(this.formatErrors));
  }

  upload(path: string, files: any): Observable<any> {
    return this.http.post(
      this.getFullApiPath(path),
      files
    ).pipe(catchError(this.formatErrors));
  }

  downloadGet(path: string, fileName: string = "", params: HttpParams = new HttpParams()) {
    this.http.get(`${this.getFullApiPath(path)}`, {
      params,
      responseType: 'blob',
      observe: 'response'
    }).pipe(catchError(this.formatErrors))
      .subscribe(data => {
        this.downLoadFile(data.body, fileName)
      });
  }

  downloadPost(path: string, fileName: string = "", body: Object = {}) {
    return this.http.post(`${this.getFullApiPath(path)}`,
      JSON.stringify(JSON.stringify(body)),
      {
        responseType: 'blob',
        observe: 'response'
      }
    ).pipe(catchError(this.formatErrors))
      .subscribe(data => {
        this.downLoadFile(data.body, fileName)
      });;
  }

  private getFullApiPath(path: string) {
    return `${environment.apiDomain.mock}${path}`;
  }

  private formatErrors(error: any) {
    return throwError(error);
  }

  private downLoadFile(response: any, filename: string = "", headers = null) {
    const navigator: any = window.navigator;
    if (navigator?.msSaveOrOpenBlob) {
      //IE & Edge
      //msSaveBlob only available for IE & Edge
      navigator?.msSaveBlob(response, filename);
    } //Chrome & FF
    else {
      let downloadLink: any = document.createElement("a");

      downloadLink.style1 = "display: none";
      downloadLink.href = window.URL.createObjectURL(response);
      downloadLink.download = this.getFileNameFromContentDisposition(headers) || filename || "undefined";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      window.URL.revokeObjectURL(downloadLink.href);
      downloadLink.parentNode.removeChild(downloadLink);
    }
  }

  private getFileNameFromContentDisposition(headers: any) {
    if (headers) {
      let regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/i;
      let contentDisposition = headers.get('Content-Disposition');
      let regExpExecArray = regex.exec(contentDisposition);
      if (regExpExecArray && regExpExecArray.length > 2) return regExpExecArray[2];
    }

    return null;
  }
}