import { Question } from "../models/question.model";

export interface AppModel{
    readonly questions: Question[];
    readonly answers: number[];
}

export const initialAppModel: AppModel = {
    questions: [
        {
            caption: "1 + 1 = ?",
            answers: ['0','1','2','3'],
            correctAnswer: 2
        },
        {
            caption: "1 + 2 = ?",
            answers: ['0','1','2','3'],
            correctAnswer: 3
        },
        {
            caption: "0 + 1 = ?",
            answers: ['0','1','2','3'],
            correctAnswer: 1
        },
    ],

    answers: []
}