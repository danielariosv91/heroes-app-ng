import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroService {

    private baseUrl: string = environments.baseUrl;

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getHeroesById(id: string): Observable<Hero | undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                /** if there is an error, return a undefined as obs */
                catchError(error => of(undefined))
            )
    }

    getSuggestions(query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`/heroes?q=${query}`)
    }
}