import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

// Classe responsável por gerenciar os produtos no sistema, implementando a interface ProdutoRepository
export class ProdutoController implements ProdutoRepository {
  private listaProdutos = new Array<Produto>();
  public id: number = 0;

  // Método para criar um novo produto
  criarProduto(produto: Produto): void {
    try {
      this.listaProdutos.push(produto);
      console.log("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o produto:", error);
    }
  }

  // Método para listar todos os produtos cadastrados
  listarTodos(): void {
    try {
      if (this.listaProdutos.length === 0)
        console.log("Não existe nenhum produto cadastrado!");
      else {
        for (let Produto of this.listaProdutos) {
          Produto.visualizar();
        }
      }
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
    }
  }

  // Método para consultar um produto pelo ID
  consultaPorId(id: number): void {
    const buscaProduto = this.buscaProduto(id);

    if (buscaProduto !== null) buscaProduto.visualizar();
    else console.log("Produto não encontrado!");
  }

  // Método auxiliar para buscar um produto pelo ID
  public buscaProduto(id: number): Produto | null {
    if (this.listaProdutos.length === 0) {
      console.log("Não existe nenhum produto cadastrado!");
      return null;
    } else {
      for (let produto of this.listaProdutos) {
        if (produto.id === id) return produto;
      }
      return null;
    }
  }
  // Método para atualizar um produto existente
  atualizarProduto(produto: Produto): void {
    try {
      const buscaProduto = this.buscaProduto(produto.id);
      if (buscaProduto !== null) {
        this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
        console.log("O produto foi atualizado com sucesso!");
      } else console.log("Produto não encontrado");
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  }

  // Método para deletar um produto pelo ID
  deletarProduto(id: number): void {
    try {
      const buscaProduto = this.buscaProduto(id);
      if (buscaProduto !== null) {
        this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
        console.log("O produto foi deletado com sucesso!");
      } else console.log("Produto não encontrado");
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
    }
  }
  // Método para gerar um ID único para cada produto

  public gerarID(): number {
    return ++this.id;
  }
}
