import { Component, OnInit } from '@angular/core';
import { Client } from '../interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
})
export class FatherComponent implements OnInit {
  public cliente?: Client;

  constructor() {}

  ngOnInit(): void {}

  onSetClient(name: string) {
    this.cliente = { id: 1, name };
  }
}
