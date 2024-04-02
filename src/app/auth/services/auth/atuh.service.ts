import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../../interfaces/SignUpRequest.interface';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AtuhService {

  constructor(private http: HttpClient) { }

  register(signUpRequest: SignUpRequest): Observable<any> {
    return this.http.post<any>(`${baseUrl}/api/auth/signup`, signUpRequest);
  }
}
