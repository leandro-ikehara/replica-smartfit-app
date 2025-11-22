import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  menuItems = [
    {
      title: 'Treino',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
      icon: 'barbell-outline',
      route: '/treino'
    },
    {
      title: 'Aulas',
      image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop', // Dancing image
      icon: 'musical-notes-outline',
      route: '/aulas'
    },
    {
      title: 'Conquistas',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
      icon: 'trophy-outline',
      route: '/conquistas'
    },
    {
      title: 'Frequência',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1468&auto=format&fit=crop',
      icon: 'calendar-outline',
      route: '/frequencia'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
