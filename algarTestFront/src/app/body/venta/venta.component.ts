import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Detalle } from 'src/app/models/detalle';
import { Orden } from 'src/app/models/orden';
import { Producto } from 'src/app/models/producto';
import { CallApiServiceService } from 'src/app/services/call-api-service.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  productos = Array<Producto>();
  detalle = Array<Detalle>();
  statusVenta = false;
  formDetalle;
  formGuardar;
  idOrden = 0;
  numOrden = 0
  total = 0;
  cedula: any;
  direccion: any;

  constructor(private client: CallApiServiceService, private formBuilder: FormBuilder) {
    this.formDetalle = this.formBuilder.group({
      Orden_id: this.idOrden,
      Producto_id: '',
      Cantidad: 0
    });

    this.formGuardar = this.formBuilder.group({
      NumeroOrden: this.idOrden,
      Cedula: ['',  Validators.required],
      Direccion: ['',  Validators.required],
      Total: 0
    });
  }
  ngOnInit() {
    this.client.getAllProducts().subscribe((response: any) => {
      this.productos = response;
    });
  }


  onSubmitDetalleVenta(datosOrdenProducto: any) {
    console.log(datosOrdenProducto);
    this.client.CrearOrdenProducto(datosOrdenProducto).subscribe((response: any) => {
      this.detalle = response;
      this.detalle.forEach((element) => {
        this.total += element.total;
      });
      this.formGuardar.controls['Total'].setValue(this.total);
    });
  }

  nuevoPedido() {
    let body = {
      id: 0,
      numeroOrden: 0,
      cedula: "",
      direccion: "",
      total: 0
    }

    this.client.CrearOrden(body).subscribe((response: any) => {
      this.numOrden = response[0]?.numeroOrden;
      this.idOrden=response[0]?.id;
      this.formDetalle.controls['Orden_id'].setValue(this.idOrden);
      this.formGuardar.controls['NumeroOrden'].setValue(this.numOrden);
      this.statusVenta = true;
    })


  }

  guardar(data: any) {
    console.log(data);
    this.client.guardarOrden(data).subscribe((response:any)=>{
      console.log(response);
      this.formDetalle.reset();
      this.formGuardar.reset();
      this.statusVenta=false;
      this.detalle =[];      
      this.total=0;
    });
    
  }

}
