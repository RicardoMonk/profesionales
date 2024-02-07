import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoProService } from '../info-pro.service';

@Component({
  selector: 'app-detalle-profesional',
  templateUrl: './detalle-profesional.component.html',
  styleUrls: ['./detalle-profesional.component.scss']
})

export class DetalleProfesionalComponent implements OnInit{
  idProfesional: number = -1; //valor inicial
  datosProfesional: any;

  constructor(private route: ActivatedRoute, private infoPro: infoProService) {}
  
  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      this.idProfesional = +params['id'];
      this.cargarDatosProfesional();
    });
    }

    cargarDatosProfesional(): void {
      this.infoPro.obtenerDatosPorProfesional(this.idProfesional).subscribe(
        (datos) => {
          console.log('Datos recibidos: ', datos);
          this.datosProfesional = datos;
        },
        (error) => {
          console.error('Error al obtener datos del profesional', error);
        }
      );
    }

}
