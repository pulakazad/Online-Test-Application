import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Choice } from '../model.choice';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  public quizInfo: Quiz[];

  size: number;
  flag: boolean = true;
  count: number = 0;
  correctAnswers = new Array(0,0,0,0);

  public finalMessage: string = "";




  constructor(private quizService: QuizService) { }

  //initializes the json data from quiz
  ngOnInit(): void {
    this.flag = true;
    this.quizService.loadQuizDetails().subscribe(data => 
      { 
        if(data) {
          this.quizInfo = data;
          this.size = this.quizInfo.length;
          console.log("NUMBER OF QUESTIONS")
          console.log(this.size)
        }
          
      },
      error => console.log(error)
    )
  }


  //Checks to see if the choice is correct, if it is, then it is stored in an array
  checkAnswer(event: any, index: any) {
    if (event.target.value == 'true') {
      this.correctAnswers[index-1] = 1;
    } else {
      this.correctAnswers[index - 1] = 0;
    }
  }

  //iterates through correctAnswers array and counts the amount correct displays at bottom
  numberOfCorrect() {
    this.flag = false;
    this.count = 0;

    for (let index = 0; index < this.correctAnswers.length; index++) {
      this.count = this.count + this.correctAnswers[index];
    }

    console.log("TOTAL:")
    console.log(this.count)
    if (this.count < 0) {
      this.count = 0;
      this.finalMessage = `Number of Correct ${this.count} out of ${this.size}`;
    } else if (this.count > this.size) {
      this.count = this.size;
      this.finalMessage = `Number of Correct ${this.count} out of ${this.size}`;
    } else {
      this.finalMessage = `Number of Correct ${this.count} out of ${this.size}`;
    }
    console.log(this.finalMessage)
  }

}
