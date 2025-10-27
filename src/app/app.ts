import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Jogador } from './shared/models/Jogador';
import { Cards } from "./components/cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FormsModule, CommonModule, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'simulado-angular';

  jogadores: Jogador[] = [
    new Jogador('Adriano', 41, 10, 'ATA', 'adriano.jpg'),
    new Jogador('Ronaldo', 45, 9, 'ATA', 'ronaldo.jpg'),
    new Jogador('C. Ronaldo', 39, 7, 'ATA', 'cr7.jpg'),
    new Jogador('Balotelli', 34, 45, 'ATA', 'balotelli.jpg'),
    new Jogador('Seedorf', 48, 10, 'MEI', 'seedorf.jpg'),
    new Jogador('Renato', 44, 8, 'MEI', 'renato.jpg'),
    new Jogador('O Bruxo', 45, 10, 'MEI', 'bruxo.jpg'),
    new Jogador('Bebeto', 59, 20, 'ATA', 'bebeto.jpg'),
    new Jogador('Freky', 27, 13, 'ATA', 'freky.avif'),
    new Jogador('Catjam', 23, 17, 'MEI', 'catjam.avif'),
    new Jogador('Hackermans', 29, 4, 'ZAG', 'hackermans.avif'),
    new Jogador('Benzema', 38, 9, 'ATA', 'benzema.jpg'),
    new Jogador('Kahn', 56, 1, 'GOL', 'kahn.jpg'),
    new Jogador('Pelé', 82, 10, 'ATA', 'rei.jpg'),
    new Jogador('Buffon', 47, 1, 'GOL', 'buffon.jpg'),
    new Jogador('Roberto Carlos', 52, 6, 'LAT', 'r6.jpg'),
    new Jogador('Taffarel', 59, 12, 'GOL', 'taffarel.jpg'),
    new Jogador('Maradona', 63, 10, 'MEI', 'maradona.jpg')

  ];

  searchTerm: string = '';
  posicaoSelecionada: string = '';

  get jogadoresFiltrados(): Jogador[] {
    if (!this.searchTerm.trim()) return this.jogadores;

    const termo = this.searchTerm.toLowerCase();
    return this.jogadores.filter(j =>
      j.nome.toLowerCase().includes(termo) ||
      j.posicao.toLowerCase().includes(termo)
    );
  }

  onBuscarJogador(termo: string) {
    this.searchTerm = termo;
  }

  jogadoresEscalados: Jogador[] = [];

  escalarJogador(jogador: Jogador) {
    if (!this.jogadoresEscalados.includes(jogador)) {
      this.jogadoresEscalados.push(jogador);
    }
    else {
      console.log('Nenhum jogador escalado!');
    }
  }

  removerJogador(jogador: Jogador) {
    this.jogadoresEscalados = this.jogadoresEscalados.filter(j => j !== jogador);
  }

  get jogadoresPosicoes(): Jogador[] {
    
    return this.jogadores.filter(j => {
      
      const nomeMatch = j.nome.toLowerCase().includes(this.searchTerm.toLowerCase());
      const posicaoMatch = this.posicaoSelecionada ? j.posicao === this.posicaoSelecionada : true;
      return nomeMatch && posicaoMatch;

    });
  }


}