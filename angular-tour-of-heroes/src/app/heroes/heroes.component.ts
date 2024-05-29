import { Component, OnInit } from '@angular/core';
//                      vv here we import the NgFor directive and add it to the imports array
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';
//import the mock HEROES array from mock-heroes.ts
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';
import { Router } from 'express';

@Component({
  selector: 'app-heroes',
  standalone: true,
  //                        vv we also add the import to our component here
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    FormsModule,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  //here we add the onSelect() method which assigns the clicked hero from the template to the component's selectedHero.
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
