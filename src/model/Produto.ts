import { colors } from "../util/Colors";
import { formatToBRL } from "../util/FuncoesRepetidas";

export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _tipo: number;
  private _preco: number;

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  constructor(id: number, nome: string, tipo: number, preco: number) {
    this._id = id;
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
  }

  public visualizar(): void {
    try {
      const tipos = ["Cosmetico", "Medicamento"];
      var tipo: string = "";

      switch (this._tipo) {
        case 1:
          tipo = tipos[0];
          break;
        case 2:
          tipo = tipos[1];
          break;
      }

      console.log(colors.fg.redstrong + "\n\n===========================");
      console.log("Dados do Produto");
      console.log("===========================" + colors.reset);
      console.log(colors.fg.red + "ID Do Produto " + this._id);
      console.log("Nome Produto: " + this._nome);
      console.log("Tipo Produto: " + tipo);
      console.log("Preço: " + formatToBRL(this._preco) + colors.reset);
    } catch (error) {
      console.log("Erro ao imprimir informações do Produto: ", error);
    }
  }
}
