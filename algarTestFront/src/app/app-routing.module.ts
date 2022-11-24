import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './body/productos/productos.component';
import { VentaComponent } from './body/venta/venta.component';

const routes: Routes = [
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'ventas',
    component:VentaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
