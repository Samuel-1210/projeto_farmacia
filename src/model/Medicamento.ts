import { colors } from "../util/Colors";
import { Produto } from "./Produto";

// Classe que representa um tipo específico de produto: Medicamento
// Extende a classe Produto e adiciona a propriedade "genérico"
export class Medicamento extends Produto {
  private _generico: string;

  // Construtor para inicializar as propriedades do medicamento
  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    generico: string
  ) {
    super(id, nome, tipo, preco); // Chama o construtor da classe base (Produto)
    this._generico = generico;
  }

  public get generico(): string {
    return this._generico;
  }

  public set generico(value: string) {
    this._generico = value;
  }
  // Método para exibir as informações do medicamento
  public visualizar() {
    try {
      super.visualizar();
      console.log(colors.fg.red + "Generico: " + this._generico + colors.reset);
    } catch (error) {
      console.log("Erro ao imprimir informação de Generico: ", error);
    }
  }
}
