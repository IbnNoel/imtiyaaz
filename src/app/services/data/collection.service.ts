import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap, filter, find } from 'rxjs/operators';
import { Collection } from 'src/app/dataModels/collection';
import { iCollection } from 'src/app/dataModels/iCollection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  getLessons(title, author){
    return this.collection.pipe(
        map(col => col.books.find(book => book.info.title == title && book.info.author == author).lessons)
    )
  }

  get collection(){
      //todo:- manage caching windows storage
      return of({"books":[{
        "isLocked":false,
        "info":{
            "title":"Kitab at tawheed",
            "author":"Muhammed bin abdul wahaab",
            "topic":"Aqeedah",
            "length":10
        },
        "progress":{
            "isComplete":true,
            "stars":3,
            "completedLessons":5,
            "lastLesson":"2014-01-01T23:28:56.782Z"
        },
        "lessons":[{
            "score":10,
            "learningPoints":"knowing Allah",
            "isFavourite":true,
            "isDifficult":false,
            "quiz":{
                "id":19,
                "questions":[{
                    "text":"What are the 3 principles of tawheed",
                    "answerId":2,
                    "answers":[{
                        "id":1,
                        "text":"ulahiyah, rubobiyah, asma wa siffat and Hakimiyah",
                        "isCorrect":false
                    }]
                }]
            }
          }]
      },
      {
        "isLocked":true,
        "info":{
            "title":"Usool ath thalaatha",
            "author":"Muhammed bin abdul wahaab",
            "topic":"Aqeedah",
            "length":12
        },
        "progress":{
            "isComplete":false,
            "stars":2,
            "completedLessons":5,
            "lastLesson":"2014-01-01T23:28:56.782Z"
        },
        "lessons":[{
            "score":10,
            "learningPoints":"knowing Allah",
            "isFavourite":true,
            "isDifficult":false,
            "quiz":{
                "id":19,
                "questions":[{
                    "text":"What are the 3 principles of tawheed",
                    "answerId":2,
                    "answers":[{
                        "id":1,
                        "text":"ulahiyah, rubobiyah, asma wa siffat and Hakimiyah",
                        "isCorrect":false
                    }]
                }]
            }
          }]
      }
    ]}).pipe( 
      map(collection => new Collection(collection)));
  }
}
