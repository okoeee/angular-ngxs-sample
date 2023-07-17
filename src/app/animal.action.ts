export namespace AnimalAction {

  export class GetAll {
    static readonly type = '[Animal] GetAll';
  }

  export class Add {
    static readonly type = '[Animal] Add Animal';
    constructor(public name: string) {}
  }

}
