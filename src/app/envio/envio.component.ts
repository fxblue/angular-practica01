import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  costoenvio;

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.costoenvio = this.carritoService.getShippingPrices()
  }

}