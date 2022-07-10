import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';

@Component({
  selector: 'app-agregar-quiz',
  templateUrl: './agregar-quiz.page.html',
  styleUrls: ['./agregar-quiz.page.scss'],
})
export class AgregarQuizPage implements OnInit {
  constructor(public router: Router, private api: ServiceService) {}

  ngOnInit() {

    console.log(JSON.stringify(localStorage.getItem('id_public')))
    /*this.api.getPregunta1().subscribe((resultado) => {
      this.preg1 = resultado;
    });
    this.api.getPregunta2().subscribe((resultado) => {
      this.preg2 = resultado;
    });
    this.api.getPregunta3().subscribe((resultado) => {
      this.preg3 = resultado;
    });*/
  }

  /*preg1: any;
  preg2: any;
  preg3: any;*/

  PREGUNTA1: any = {
    ID_PUBLICACION: localStorage.getItem('id_public'),
    PREGUNTA1: '',
    RESPUESTA1: '',
    RESPUESTA2: '',
    RESPUESTA3: '',
    RESPUESTACORRECTA: '',
  };
  PREGUNTA2: any = {
    ID_PUBLICACION: localStorage.getItem('id_public'),
    PREGUNTA2: '',
    RESPUESTA1: '',
    RESPUESTA2: '',
    RESPUESTA3: '',
    RESPUESTACORRECTA: '',
  };
  PREGUNTA3: any = {
    ID_PUBLICACION: localStorage.getItem('id_public'),
    PREGUNTA3: '',
    RESPUESTA1: '',
    RESPUESTA2: '',
    RESPUESTA3: '',
    RESPUESTACORRECTA: '',
  };

  terminarquiz() {
    if (this.PREGUNTA1.PREGUNTA1 == '') {
      console.log('falta la pregunta 1');
    } else if (this.PREGUNTA1.RESPUESTA1 == '') {
      console.log('falta la respuesta 1');
    } else if (this.PREGUNTA1.RESPUESTA2 == '') {
      console.log('falta la respuesta 2');
    } else if (this.PREGUNTA1.RESPUESTA3 == '') {
      console.log('falta la respuesta 3');
    } else if (this.PREGUNTA1.RESPUESTACORRECTA == '') {
      console.log('falta ingresar respuesta correcta');
    } else if (this.PREGUNTA2.PREGUNTA2 == '') {
      console.log('falta la pregunta 2');
    } else if (this.PREGUNTA2.RESPUESTA1 == '') {
      console.log('falta la respuesta 1');
    } else if (this.PREGUNTA2.RESPUESTA2 == '') {
      console.log('falta la respuesta 2');
    } else if (this.PREGUNTA2.RESPUESTA3 == '') {
      console.log('falta la respuesta 3');
    } else if (this.PREGUNTA2.RESPUESTACORRECTA == '') {
      console.log('falta ingresar respuesta correcta');
    } else if (this.PREGUNTA3.PREGUNTA3 == '') {
      console.log('falta la pregunta 3');
    } else if (this.PREGUNTA3.RESPUESTA1 == '') {
      console.log('falta la respuesta 1');
    } else if (this.PREGUNTA3.RESPUESTA2 == '') {
      console.log('falta la respuesta 2');
    } else if (this.PREGUNTA3.RESPUESTA3 == '') {
      console.log('falta la respuesta 3');
    } else if (this.PREGUNTA3.RESPUESTACORRECTA == '') {
      console.log('falta ingresar respuesta correcta');
    } else if (
      (this.PREGUNTA1.RESPUESTACORRECTA == this.PREGUNTA1.RESPUESTA1 ||
      this.PREGUNTA1.RESPUESTACORRECTA == this.PREGUNTA1.RESPUESTA2 ||
      this.PREGUNTA1.RESPUESTACORRECTA == this.PREGUNTA1.RESPUESTA3) &&
      (this.PREGUNTA2.RESPUESTACORRECTA == this.PREGUNTA2.RESPUESTA1 ||
      this.PREGUNTA2.RESPUESTACORRECTA == this.PREGUNTA2.RESPUESTA2 ||
      this.PREGUNTA2.RESPUESTACORRECTA == this.PREGUNTA2.RESPUESTA3) &&
      (this.PREGUNTA3.RESPUESTACORRECTA == this.PREGUNTA3.RESPUESTA1 ||
      this.PREGUNTA3.RESPUESTACORRECTA == this.PREGUNTA3.RESPUESTA2 ||
      this.PREGUNTA3.RESPUESTACORRECTA == this.PREGUNTA3.RESPUESTA3)) {
      this.api
        .agregarPregunta1(
          this.PREGUNTA1.PREGUNTA1,
          this.PREGUNTA1.RESPUESTA1,
          this.PREGUNTA1.RESPUESTA2,
          this.PREGUNTA1.RESPUESTA3,
          this.PREGUNTA1.RESPUESTACORRECTA,
          this.PREGUNTA1.ID_PUBLICACION
        )
        .subscribe((resultado) => {
          console.log(resultado);
        });
      this.api
        .agregarPregunta2(
          this.PREGUNTA2.PREGUNTA2,
          this.PREGUNTA2.RESPUESTA1,
          this.PREGUNTA2.RESPUESTA2,
          this.PREGUNTA2.RESPUESTA3,
          this.PREGUNTA2.RESPUESTACORRECTA,
          this.PREGUNTA2.ID_PUBLICACION
        )
        .subscribe((resultado) => {
          console.log(resultado);
        });
      this.api
        .agregarPregunta3(
          this.PREGUNTA3.PREGUNTA3,
          this.PREGUNTA3.RESPUESTA1,
          this.PREGUNTA3.RESPUESTA2,
          this.PREGUNTA3.RESPUESTA3,
          this.PREGUNTA3.RESPUESTACORRECTA,
          this.PREGUNTA3.ID_PUBLICACION
        )
        .subscribe((resultado) => {
          console.log(resultado);
        });
        this.router.navigate(['/comunidad'])

    } else {
      console.log(
        'Alguna de las respuestas correctas no es igual a algunas de las respuestas ingresadas a su pregunta respectiva'
      );
    }
  }

  cancelar() {
    this.router.navigate(['/detalle-public'])
  }
}