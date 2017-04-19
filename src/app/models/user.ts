export class User {
  private id: number;

  constructor(

    public fullname?: string,
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public avatar?: string,
    public accounts?: Object[]

  ) {
    this.id;
    this.fullname = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.avatar = '';
    this.accounts = [];
  }
}
