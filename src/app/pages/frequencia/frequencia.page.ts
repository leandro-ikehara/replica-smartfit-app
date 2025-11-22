import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonProgressBar, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonProgressBar, IonLabel, IonItem, IonList]
})
export class FrequenciaPage implements OnInit, AfterViewInit {

  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  barChart: any;

  frequenciaMensal = 12; // Dias frequentados no mês
  metaMensal = 20; // Meta de dias
  progresso = this.frequenciaMensal / this.metaMensal;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
          label: 'Dias Frequentados',
          data: [3, 4, 2, 3], // Dados fictícios
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 7,
            title: {
              display: true,
              text: 'Dias'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
