import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://csharp-interviewer-helper-default-rtdb.firebaseio.com/questions.json';

  constructor(private http: HttpClient) {}

getQuestions(): Observable<any[]> {
  return this.http.get<{ [key: string]: any }>(this.apiUrl).pipe(
    map((data: any)=> {
      return Object.values(data).map((item: any) => {
        const options = [
          item["correct Answer"],
          item["wrong answer 1"],
          item["wrong answer 2"],
          item["wrong answer 3"]
        ];

        // Barajar opciones para que no esté siempre en la primera posición:
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }

        return {
          question: item["Question"],
          options: options,
          answer: item["correct Answer"]
        };
      });
    })
  );
}

}
