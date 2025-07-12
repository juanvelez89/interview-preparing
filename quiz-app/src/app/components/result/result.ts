import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-result',
  templateUrl: './result.html',
  styleUrls: ['./result.scss'],
  imports: [CommonModule]
})
export class Result {
  questions: any[] = [];
  selectedAnswers: string[] = [];
  score: number = 0;

  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      questions: any[];
      selectedAnswers: string[];
    };

    if (state) {
      this.questions = state.questions;
      this.selectedAnswers = state.selectedAnswers;
      this.calculateScore();
    } else {
      this.router.navigate(['/']);
    }
  }

  calculateScore() {
    this.score = this.questions.reduce((acc, q, idx) => {
      return acc + (q.answer === this.selectedAnswers[idx] ? 1 : 0);
    }, 0);
  }
}
