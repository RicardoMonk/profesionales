// mi-servicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class infoProService {
  private apiUrl = 'https://6a6bcce9-126f-469b-b994-7273f0789d45.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  obtenerDatosPorProfesional(idProfesional: number): Observable<any> {
    const url = `${this.apiUrl}/getUserUno?idProfesional=${idProfesional}`;
    return this.http.get<Datos>(url).pipe(
      map((datos) => {
        // Filtra los datos según el idProfesional
        switch (idProfesional) {
          case 1:
            return datos.dataUno;
          case 2:
            return datos.dataDos;
          case 3:
            return datos.dataTres;
          default:
            return null;
        }
      })
    );
  }
}

export interface Datos {
  dataUno: any;  // Ajusta el tipo según la estructura real de tus datos
  dataDos: any;
  dataTres: any;
}
