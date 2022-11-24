import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { CallApiServiceService } from 'src/app/services/call-api-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = Array<Cliente>();
  constructor(private client: CallApiServiceService) {
  }

  ngOnInit() {
   
  }
}
