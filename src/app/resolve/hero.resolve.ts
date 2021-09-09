import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../hero';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../services/message/message.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardHeroResolve implements Resolve<Hero[]> {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.heroService
      .getHeroes()
      .pipe(catchError(this.handleError<Hero[]>('Resolve', [])));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
