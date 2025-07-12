import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from "./components/question/question";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
  selector: 'app-root',
  imports: [Question,HttpClientModule,CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'quiz-app';
}

