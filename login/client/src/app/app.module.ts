import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { customHttpProvider } from './http/custom-http';
import { AlertComponent } from './directives/alert.component';
// import { AuthGuard } from './_guards/index';
import { AlertService, UserService } from './services/index';
// import { HomeComponent } from './home/index';
// import { LoginComponent } from './login/index';
import { RegisterComponent} from './register/register.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent
    // HomeComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    customHttpProvider,
    // AuthGuard,
    AlertService,
    // AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
