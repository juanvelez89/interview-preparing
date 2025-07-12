import { Routes } from '@angular/router';
import { Question } from './components/question/question';
import { Result } from './components/result/result';

export const routes: Routes = [
  { path: '', component: Question },
  { path: 'result', component: Result },
  { path: '**', redirectTo: '' }
];
