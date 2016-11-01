import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
=======
import { MyDirectiveDirective } from './directives/my-directive.directive';
>>>>>>> ac12f5e48d915cc2c2eca0d63e11f40343c4ca5a

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyPipePipe,
<<<<<<< HEAD
    LoginComponent,
    NavBarComponent
=======
    MyDirectiveDirective
>>>>>>> ac12f5e48d915cc2c2eca0d63e11f40343c4ca5a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
