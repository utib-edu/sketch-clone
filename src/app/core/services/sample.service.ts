import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../common/api-paths';
import { HttpService } from './http.service';

@Injectable()
export class SampleService {
    constructor(private httpService: HttpService) { }

    get(page: any = {}): Observable<any> {
        return this.httpService.get(ApiPaths.SAMPLE, page);
    }

    getById(id: any) {
        return this.httpService.get(ApiPaths.SAMPLE, {
            id: id
        });
    }

    post(payload: any) {
        return this.httpService.post(ApiPaths.SAMPLE, payload);
    }

    put(payload: any) {
        return this.httpService.put(ApiPaths.SAMPLE, payload);
    }

    detele(payload: any) {
        return this.httpService.delete(ApiPaths.SAMPLE, payload);
    }

    export(id: any) {
        return this.httpService.downloadGet(ApiPaths.SAMPLE);
    }
}
