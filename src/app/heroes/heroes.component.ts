import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.heroService.getHeroes()
    // .then(data => this.heroes = data);
    this.heroService.getHeroes()
    .subscribe(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
