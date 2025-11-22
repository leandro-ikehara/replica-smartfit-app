import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonProgressBar, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophy, barbell, flame, musicalNotes, time, calendar, medal } from 'ionicons/icons';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  current: number;
  target: number;
  color: string;
}

@Component({
  selector: 'app-conquistas',
  templateUrl: './conquistas.page.html',
  styleUrls: ['./conquistas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonProgressBar, IonBadge]
})
export class ConquistasPage implements OnInit {

  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Primeiros Passos',
      description: 'Realizou a 1ª sessão de musculação',
      icon: 'barbell',
      unlocked: true,
      current: 1,
      target: 1,
      color: 'warning'
    },
    {
      id: 2,
      title: 'Guerreiro do Combat',
      description: 'Participou de 10 aulas de BodyCombat',
      icon: 'flame',
      unlocked: false,
      current: 3,
      target: 10,
      color: 'danger'
    },
    {
      id: 3,
      title: 'Frequência de Ouro',
      description: 'Frequentou a academia 5 dias em uma semana',
      icon: 'calendar',
      unlocked: true,
      current: 5,
      target: 5,
      color: 'success'
    },
    {
      id: 4,
      title: 'Mestre da Dança',
      description: 'Participou de 5 aulas de FitDance',
      icon: 'musical-notes',
      unlocked: false,
      current: 1,
      target: 5,
      color: 'tertiary'
    },
    {
      id: 5,
      title: 'Madrugador',
      description: 'Treinou antes das 07:00 da manhã',
      icon: 'time',
      unlocked: true,
      current: 1,
      target: 1,
      color: 'warning'
    },
    {
      id: 6,
      title: 'Lenda da Smart',
      description: 'Completou 100 treinos no ano',
      icon: 'medal',
      unlocked: false,
      current: 42,
      target: 100,
      color: 'warning'
    }
  ];

  constructor() {
    addIcons({ trophy, barbell, flame, musicalNotes, time, calendar, medal });
  }

  ngOnInit() {
  }

  getProgress(achievement: Achievement): number {
    return achievement.current / achievement.target;
  }

}
