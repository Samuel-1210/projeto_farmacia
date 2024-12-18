import { colors } from "../util/Colors";
import { Produto } from "./Produto";

// Classe que representa um tipo específico de produto: Cosmético
// Extende a classe Produto e adiciona a propriedade "fragância"
export class Cosmetico extends Produto {
  private _fragancia: string;

  // Construtor para inicializar as propriedades do cosmético
  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    fragancia: string
  ) {
    super(id, nome, tipo, preco); // Chama o construtor da classe base (Produto)
    this._fragancia = fragancia;
  }

  public get fragancia(): string {
    return this._fragancia;
  }

  public set fragancia(value: string) {
    this._fragancia = value;
  }
  // Método para exibir as informações do cosmético
  public visualizar() {
    try {
      super.visualizar();
      console.log(
        colors.fg.red + "Fragância: " + this._fragancia + colors.reset
      );
    } catch (error) {
      console.log("Erro ao imprimir informação de Fragância: ", error);
    }
  }
}
