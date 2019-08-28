import { iCollection } from './iCollection';

export class Collection implements iCollection{
    books: import("./iCollection").Book[];

    constructor(private _collection: iCollection){
        this.books = _collection.books;
        this.books.forEach(b => b.progress.lastLesson = new Date(b.progress.lastLesson));
    }

}