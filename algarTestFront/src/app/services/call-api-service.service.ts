import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallApiServiceService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://localhost:7000/'
  }

  getAllProducts() {
    return this.httpClient.get(this.url + "productos/");
  }

  InsertProducto(body: any) {
    return this.httpClient.post(this.url + "productos", body);
  }
  ActualizarProducto(body: any) {
    return this.httpClient.put(this.url + "productos", body);
  }

  CrearOrden(body: any) {
    return this.httpClient.post(this.url + "orden/crear", body);
  }
  

  CrearOrdenProducto(body: any) {
    return this.httpClient.post(this.url + "orden/ordenProducto", body);
  }

  guardarOrden(body: any) {
    return this.httpClient.post(this.url + "orden/guardar", body);

  }

}
