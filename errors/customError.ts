export class CustomError extends Error {
    statusCode: number;

    constructor(message : string) {
        super(message);
        this.statusCode =  500;
        this.name = this.constructor.name;
    }
}

export class ConflictError extends CustomError {

    constructor(message : string) {
        super(message);
        this.statusCode =  409;
        this.name = this.constructor.name;
    }
}

export class UserAlreadyExistError extends ConflictError {

    constructor() {
        super('User already exist');
        this.name = this.constructor.name;
    }
}




