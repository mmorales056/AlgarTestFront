import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './body/nav/nav.component';
import { ProductosComponent } from './body/productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './body/clientes/clientes.component';
import { VentaComponent } from './body/venta/venta.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavComponent,
    ProductosComponent,
    ClientesComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
