import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss'],
})
export class CenzorComponent {
  public newBadWord!: string;
  public allBadWords: string[] = [];
  public textArea = '';
  public text = '';

  addBadWords(): void {
    if (this.newBadWord == '') {
      alert('Please write a word!');
    } else {
      this.allBadWords.push(this.newBadWord);
      this.newBadWord = '';
    }
    this.text = this.allBadWords.join(' ');
  }

  cenzorWords(): void {
    if (this.textArea == '') {
      alert('Please write a text!');
    } else {
      let newText = this.textArea.split(' ');
      for (let i = 0; i < newText.length; i++) {
        for (let j = 0; j < this.allBadWords.length; j++) {
          if (newText[i] == this.allBadWords[j]) {
            let a: string = '';
            for (let b = 0; b < newText[i].length; b++) {
              a += '*';
            }
            newText[i] = a;
          }
        }
      }
      this.textArea = newText.join(' ');
    }
  }

  resetWords(): void {
    this.text = '';
    this.textArea = '';
    this.allBadWords = [];
  }
}
