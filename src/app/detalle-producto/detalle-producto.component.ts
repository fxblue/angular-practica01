import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CarritoService } from '../carrito.service';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto03;

  constructor(
    private route: ActivatedRoute,
    private CarritoService: CarritoService
  ) { }

   addToCart(product){
    this.CarritoService.addToCart(product)
    window.alert('Producto agregrado a Carrito')
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.producto03 = products[+params.get('productoId')];
  });
 
}

}