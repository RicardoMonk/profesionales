// mi-servicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class infoProService {
  private apiUrl = 'https://6a6bcce9-126f-469b-b994-7273f0789d45.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  obtenerDatosPorProfesional(idProfesional: number): Observable<any> {
    const url = `${this.apiUrl}/getUserUno?idProfesional=${idProfesional}`;
    return this.http.get(url);
  }
}
