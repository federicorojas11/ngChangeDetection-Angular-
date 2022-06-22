import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss'],
})
export class NgZoneComponent implements OnInit {
  progreso: number = 0; // valor que va a ir de 0% a 100%
  texto: string = ''; // dentro o fuera de NgZone

  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {}

  /*
    Método para incrementar el valor del progreso
    @param terminar es un callback que se ejecuta al terminar el incremento
  */
  incrementarProgreso(terminar: () => void) {
    this.progreso++; // incremento el progreso en 1
    console.log(`Progreso actual ${this.progreso}%`);

    if (this.progreso < 100) {
      window.setTimeout(() => {
        this.incrementarProgreso(terminar); // recursividad para seguir incrementando
      }, 10);
    } else {
      // ya habría terminado de incrementarse
      // asi que ejecutamos el callback
      terminar();
    }
  }

  /*
    Método que aumenta el progreso dentro del NgZone
    Esto implica que los cambios se ven en el html
  */
  aumentarDentroNgZone() {
    this.texto = 'Dentro';
    this.progreso = 0; // lo reseteamos para siguientes ejecuciones
    this.incrementarProgreso(() => {
      console.log(`${this.texto} de Angular Zone: Incremento terminado`);
    });
  }

  /*
    Método que aumenta el progreso fuera del NgZone
    Esto implica que los cambios no se van a ver
    en el html hasta que volvamos a meter al componente
    en el NgZone
  */
  aumentarFueraNgZone() {
    this.texto = 'Fuera';
    this.progreso = 0; // lo reseteamos para siguientes ejecuciones
    // Ejecutamos FUERA del Angular Zone
    this._ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        // cuando termine de incrementar es cuando
        // pasamos a ejecutar en NgZone denuevo
        // esto quiere decir, volver a reacoplar el componente
        this._ngZone.run(() => {
          console.log(`${this.texto} de Angular Zone: Incremento terminado`);
        });
      });
    });
  }
}
