export class Choice {

    name: string;
    isAnswer: boolean;
    
    constructor(data: any) {
        data = data || {};
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
}