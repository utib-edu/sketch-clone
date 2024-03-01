import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SampleService } from './services/sample.service';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './interceptor/log.interceptor';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [DateFormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DateFormatPipe,
    ComponentsModule
  ],
  providers: [
    HttpService,
    SampleService,
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    DateFormatPipe
  ],
})
export class CoreModule { }
