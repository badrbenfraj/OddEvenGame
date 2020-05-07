import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number>= [];
  evenNumbers : Array<number>= [];
  count;

  onStartGame(counter: number) {
    // this.count = counter;
    if(counter%2 === 0 ){
      this.evenNumbers.push(counter);
      console.log('even:', this.evenNumbers)
      //this.count = counter;
    }else{
      this.oddNumbers.push(counter);
      console.log('odd:', this.oddNumbers) 
    }
  }

  onResetGame(counter : number){
    this.oddNumbers=[];
    this.evenNumbers=[];
    this.count = counter;
  }
}
