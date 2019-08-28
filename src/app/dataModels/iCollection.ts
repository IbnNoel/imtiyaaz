export interface iCollection {
    books: Book[];
}

export interface Book {
    isLocked: boolean;
    info:     Info;
    progress: Progress;
    lessons:  Lesson[];
}

export interface Progress {
    isComplete:       boolean;
    stars:            number;
    completedLessons: number;
    lastLesson:       any;
}

export interface Info {
    title:  string;
    author: string;
    topic:  string;
    length: number;
}

export interface Lesson {
    score:          number;
    learningPoints: string;
    isFavourite:    boolean;
    isDifficult:    boolean;
    quiz:           Quiz;
}

export interface Quiz {
    id:        number;
    questions: Question[];
}

export interface Question {
    text:     string;
    answerId: number;
    answers:  Answer[];
}

export interface Answer {
    id:        number;
    text:      string;
    isCorrect: boolean;
}
