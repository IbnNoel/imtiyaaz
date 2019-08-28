import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/dataModels/iCollection';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CollectionService } from 'src/app/services/data/collection.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute,private collectionService: CollectionService) { }

  ngOnInit() {
    this.lessons$ = this.route.paramMap.pipe(
      switchMap(params => this.collectionService.getLessons(params.get('title'),params.get('author'))),
    );
  }

}
