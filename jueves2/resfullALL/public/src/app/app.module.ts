import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './task/http.service';
import { HttpClientModule } from '@angular/common/http'; //for API's and more
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { UserguiComponent } from './usergui/usergui.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserguiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
