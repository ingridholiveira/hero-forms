export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public accepted: boolean,
    public email: string,
    public alterEgo?: string,
    public birthDate?: string

  ) {  }

}
