import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alerta-producto',
  templateUrl: './alerta-producto.component.html',
  styleUrls: ['./alerta-producto.component.css']
})
export class AlertaProductoComponent implements OnInit {

  @Input() producto01;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}