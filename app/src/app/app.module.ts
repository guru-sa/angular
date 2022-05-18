import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel은 이 패키지가 제공합니다.
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
