import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './mock/in-memory-data/in-memory-data.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "." + '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AdminSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClient가 제공하는 메소드는 모두 RxJs Observable 타입을 한 번만 반환합니다.
    HttpClientModule,
    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비되면 이 부분을 제거하면 됩니다.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    LoggerModule.forRoot({
      // serverLoggingUrl: 'http://localhost:4200/',
      // serverLogLevel: NgxLoggerLevel.DEBUG,
      level: NgxLoggerLevel.TRACE,
      disableConsoleLogging: false
    }),
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
