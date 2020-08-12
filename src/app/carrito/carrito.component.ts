import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.items = this.carritoService.getItems();
  }

}