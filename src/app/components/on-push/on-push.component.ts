import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Default
})
export class OnPushComponent implements OnInit {
  /*
    Valor que se va a incrementar cada segundo en el archivo ts
    y que dependiendo de la estrategia de ChangeDetection que sus cambios
    se van a poder ver en el HTML
  */
  segundos: number = 0;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      // incremento
      this.segundos++;
      // mostrar en consola
      console.log(`Segundos transcurridos: ${this.segundos} segundos`);
    }, 1000);
  }
}
