import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TreinoPage implements OnInit {

  exercises = [
    {
      name: 'Supino Reto',
      sets: '3 séries de 10 repetições',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      name: 'Leg Press 45º',
      sets: '3 séries de 10 repetições',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop'
    },
    {
      name: 'Abdominal Máquina',
      sets: '3 séries de 10 repetições',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop'
    },
    {
      name: 'Bíceps Barra W',
      sets: '3 séries de 10 repetições',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop'
    },
    {
      name: 'Tríceps Graviton',
      sets: '3 séries de 10 repetições',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1474&auto=format&fit=crop'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
