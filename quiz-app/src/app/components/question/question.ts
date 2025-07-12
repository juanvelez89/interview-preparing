import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './question.html',
  styleUrls: ['./question.scss'],
  imports: [CommonModule]
})
export class Question implements OnInit {
  questions: any[] = [];
  currentIndex: number = 0;
  selectedAnswers: string[] = [];
  isLoading = true;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(data => {
      this.questions = data;
      this.isLoading = false;
    });
  }

  selectAnswer(answer: string) {
    this.selectedAnswers[this.currentIndex] = answer;
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.router.navigate(['/result'], {
        state: {
          questions: this.questions,
          selectedAnswers: this.selectedAnswers
        }
      });
    }
  }
}
