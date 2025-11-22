import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonNote, IonButtons, IonBackButton } from '@ionic/angular/standalone';

interface Aula {
  time: string;
  name: string;
  duration: string;
}

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.page.html',
  styleUrls: ['./aulas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonNote, IonButtons, IonBackButton]
})
export class AulasPage implements OnInit {

  aulas: Aula[] = [];
  currentDate = new Date();
  
  private classTypes: string[] = [
    'BodyBalance', 'FitDance', 'PowerJump', 'BodyPump', 
    'BodyCombat', 'LM Dance', 'Burn', 'Squad', 
    'Funcional', 'Spinning'
  ];

  constructor() { }

  ngOnInit() {
    this.generateSchedule();
  }

  generateSchedule() {
    const startHour = 8;
    const endHour = 20;

    for (let hour = startHour; hour <= endHour; hour++) {
      const randomClassIndex = Math.floor(Math.random() * this.classTypes.length);
      const className = this.classTypes[randomClassIndex];
      
      const timeString = `${hour.toString().padStart(2, '0')}:00`;

      this.aulas.push({
        time: timeString,
        name: className,
        duration: '45 min'
      });
    }
  }

}
