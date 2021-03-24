import { Component, OnInit, ElementRef, Injectable} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {HeroService} from "../hero.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  model: any;
  
  imgSrc: any;
  
  predictions: any;
  
  message: string;
  

  constructor(private elRef:ElementRef, private data: HeroService) { }

  async ngOnInit() {
    this.model = await tf.loadLayersModel('../assets/model.json');
    this.data.mushroomIdentified.subscribe(message => this.message = message);
  }
  
  newMessage(message) {
    this.data.changeMessage(message);
  }
  
  async fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        
        //document.querySelector(".findMushroom").style.visibility = "visible";
        
        //console.log(document.querySelector(".findMushroom").style);
        document.querySelector(".findMushroom").classList.add("fadeIn");
        
        this.imgSrc = res.target.result;
        document.querySelectorAll("img")[1].src = this.imgSrc;
        setTimeout(async () => {
          const imageData = tf.browser.fromPixels(this.elRef.nativeElement.querySelectorAll("img")[1], 1);
          this.predictions = await this.model.predict(imageData.expandDims(0));
          let mushroom = this.predictions.dataSync();
          if (mushroom[0] == 1) {
            this.newMessage("5fdd45b9cfa3ff7052d7168d");
          }
          if (mushroom[1] == 1) {
            this.newMessage("5fde79be79f0f102f85abc0f");
          }
          if (mushroom[2] == 1) {
            this.newMessage("5fde7b2d79f0f102f85abc10"); 
          }
        });
      };
    }
  }

}
