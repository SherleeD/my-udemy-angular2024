import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrl: './practice-directives.component.css'
})

export class PracticeDirectivesComponent {
  showMagicWord = false;
  logs = [];

  onToggleDisplay()
  {
    this.showMagicWord = !this.showMagicWord;

    // this.logs.push(this.logs.length + 1);    

    this.logs.push(new Date());    
  };
  
}
