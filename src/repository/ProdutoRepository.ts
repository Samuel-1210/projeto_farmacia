import { Produto } from "../model/Produto";

// Define a interface ProdutoRepository para padronizar as operações relacionadas ao gerenciamento de produtos
export interface ProdutoRepository {
  consultaPorId(id: number): void;
  listarTodos(): void;
  criarProduto(produto: Produto): void;
  atualizarProduto(produto: Produto): void;
  deletarProduto(id: number): void;
}
