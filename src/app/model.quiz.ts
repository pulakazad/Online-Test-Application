import { Choice } from './model.choice';

export class Quiz {

    id: number;
    question: string;
    choices: Choice[];

    constructor(data: any) {
        if (data) {
            data = data || {};
            this.id = data.id;
            this.question = data.question;
            this.choices = [];

            if (data.choices) {
                data.choices.forEach(o => {
                    this.choices.push(new Choice(o));
                });
            }
        }

    };
}