import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {MushroomService} from "../mushroom.service";
import { ActivatedRoute } from '@angular/router';
import Mushroom from '../models/mushroom.model';

@Component({
  selector: 'app-mushroom-identification',
  templateUrl: './mushroom-identification.component.html',
  styleUrls: ['./mushroom-identification.component.scss']
})
export class MushroomIdentificationComponent implements OnInit {

  message: string;
  mushroom: Mushroom = {} as Mushroom;
  
  constructor(private route: ActivatedRoute, private data: HeroService, private mushroomService: MushroomService) {
  }

  ngOnInit(): void {
    this.data.mushroomIdentified.subscribe(message => this.message = message);
    this.mushroomService.getMushroomById(this.message)
      .subscribe((mushroom: Mushroom) => {
        this.mushroom = mushroom;
        console.log(this.mushroom);
      }); 
  }

}
