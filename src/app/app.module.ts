import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule }  from  '@angular/common/http';
import { infoProService } from './info-pro.service';
import { DetalleProfesionalComponent } from './detalle-profesional/detalle-profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DetalleProfesionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [infoProService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
