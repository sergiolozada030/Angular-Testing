import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../interface';

@Component({
  selector: 'app-father-song',
  templateUrl: './father-song.component.html',
  styleUrls: ['./father-song.component.scss'],
})
export class FatherSongComponent implements OnInit {
  @Input() cliente?: Client;
  @Output() deleteCliente = new EventEmitter();
  @Output() updateCliente = new EventEmitter<Client>();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.cliente = undefined;
    this.deleteCliente.emit();
  }

  onUpdate(id: number) {
    if (!this.cliente) {
      return;
    }

    this.cliente = { ...this.cliente, id };
    this.updateCliente.emit(this.cliente);
  }
}
