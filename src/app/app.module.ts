import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListcategoryComponent } from './pages/listcategory/listcategory.component';
import { FormsModule } from '@angular/forms';
import { FiltrePipe } from './pages/pipes/filtre.pipe';
import { HighlightDirective } from './pages/highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListcategoryComponent,
    FiltrePipe,
    HighlightDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
