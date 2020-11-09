import { Choice } from './model.choice';

export class Quiz {

    constructor(
        public id: number,
        public question: string,
        public choices: Choice[],
    ) {};
}