import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { FeatureModule } from './feature/feature.module';
import { CategoryListComponent } from './feature/category/category-list/category-list.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

//import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    FeatureModule,
    SharedModuleModule
    //RouterModule.forRoot([])
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
