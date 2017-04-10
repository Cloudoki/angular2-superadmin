export class Account {
  private id: number;

  constructor(
    public type?: string,
    public name?: string,
    public slug?: string,
    public active?: number,
    public users?: number[]

  ) {
    this.id = new Date().getTime();
    this.type = '';
    this.name = '';
    this.slug = '';
    this.active = 0;
    this.users = [];
  }
}
