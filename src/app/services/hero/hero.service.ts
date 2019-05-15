import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Hero } from '../../hero';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // send the message _after_ fethcing the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
