import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})

export class Navbar {
  searchTerm: string = '';

  @Output() buscar = new EventEmitter<string>();

  onBuscar() {
    this.buscar.emit(this.searchTerm);
  }
  
}