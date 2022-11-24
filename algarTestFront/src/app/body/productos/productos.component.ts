import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { CallApiServiceService } from 'src/app/services/call-api-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = Array<Producto>();
  form:any;
  idEdit:number=0;
  constructor(private client: CallApiServiceService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      codigo: '',
      nombre: '',
      precio: 0
    });
  }

  ngOnInit() {
    this.client.getAllProducts().subscribe((response: any) => {
      this.productos = response;
    });
  }
  onSubmit(datosProducto: Producto) {
    console.log(datosProducto);
    this.client.InsertProducto(datosProducto).subscribe((response: any) => {
      this.client.getAllProducts().subscribe((response: any) => {
        this.productos = response;
        this.form.reset();
      });
    });    
  }

  onSubmitEdit(datosProducto: Producto) {
    let body={
      id:this.idEdit,
      codigo:datosProducto.codigo,
      nombre:datosProducto.nombre,
      precio:datosProducto.precio
    }

    this.client.ActualizarProducto(body).subscribe((response: any) => {
      this.client.getAllProducts().subscribe((response: any) => {
        this.productos = response;
        this.form.reset();
      });
    });
    
  }

  setForm(data:Producto){
    this.form.controls["codigo"].setValue(data.codigo);
    this.form.controls["nombre"].setValue(data.nombre);
    this.form.controls["precio"].setValue(data.precio);
    this.idEdit=data.id;
  }

}
