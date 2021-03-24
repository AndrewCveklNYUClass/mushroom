import { Component, ElementRef } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mushroom';
  /*
  model: any;
  
  imgSrc: any;
  
  predictions: any;

  constructor(private elRef:ElementRef) { }

  async ngOnInit() {
    this.model = await mobilenet.load();
  }
  
  async fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        this.imgSrc = res.target.result;
        document.querySelectorAll("img")[1].src = this.imgSrc;
        setTimeout(async () => {
          this.predictions = await this.model.classify(this.elRef.nativeElement.querySelectorAll("img")[1]);
        });
      };
    }
  }
  */
}
