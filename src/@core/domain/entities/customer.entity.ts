export type CustomerConstructorProps = {
  id?: string;
  cpf: string;
  name: string;
};

export class Customer {
  id: string;
  cpf: string;
  name: string;

  constructor(props: CustomerConstructorProps) {
    this.id = props.id;
    this.cpf = props.cpf;
    this.name = props.name;
  }
  static create(command: { name: string; cpf: string }): Customer {
    return new Customer(command);
  }
  toJson() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
    };
  }
}
