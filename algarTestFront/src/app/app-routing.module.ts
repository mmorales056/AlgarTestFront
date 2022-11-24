import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './body/clientes/clientes.component';
import { ProductosComponent } from './body/productos/productos.component';
import { VentaComponent } from './body/venta/venta.component';

const routes: Routes = [
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
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
