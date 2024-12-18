import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";
import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { keyPress } from "./src/util/FuncoesRepetidas";

export function main() {
  let opcao, nomeProduto, preco, fragancia, generico, tipo, id;

  // Controller dos Produtos
  const produtos = new ProdutoController();

  // Tipos Disponiveis
  const tipos = ["Cosmetico", "Medicamento"];

  // Objetos criados de exemplo
  produtos.criarProduto(
    new Medicamento(produtos.gerarID(), "Paracetamol", 2, 10.5, "Genérico")
  );

  produtos.criarProduto(
    new Medicamento(produtos.gerarID(), "Ibuprofeno", 2, 15.0, "Não Genérico")
  );

  produtos.criarProduto(
    new Cosmetico(produtos.gerarID(), "Perfume Elegante", 1, 120.0, "Lavanda")
  );

  produtos.criarProduto(
    new Cosmetico(produtos.gerarID(), "Creme Hidratante", 1, 50.0, "Baunilha")
  );

  while (true) {
    // Menu de opções do sistema

    console.log(
      colors.fg.red + "╔═════════════════════════════════════════════╗"
    );
    console.log("║           Farmacia PAG+ LEV-                ║");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("       1- Criar Produto");
    console.log("       2- Listar Todos Produtos");
    console.log("       3- Consultar Produto por ID");
    console.log("       4- Atualizar Produto");
    console.log("       5- Deletar Produto");
    console.log("       0- Sair");
    console.log("╔═════════════════════════════════════════════╗");
    console.log("║         Entre com a opção desejada          ║ ");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("", colors.reset);

    console.log(colors.fg.red, "", colors.reset);
    opcao = readlinesync.questionInt(colors.fg.red + "");

    // Encerra o programa se a opção selecionada pelo usuário for 0
    if (opcao == 0) {
      console.log(colors.fg.red, "\n Farmacia PAG+ LEV- VIVA BEM");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.redstrong, "\nCriar Produto\n", colors.reset);
        while (true) {
          console.log("Digite o nome do Produto: ");
          nomeProduto = readlinesync.question("");
          if (!nomeProduto || nomeProduto.trim() === "")
            console.log("O nome do produto não pode ser vazio!\n");
          else break;
        }

        console.log("Selecione o Tipo do Produto:");
        tipo = readlinesync.keyInSelect(tipos, "", { cancel: false }) + 1;

        // Validação de preço positivo
        while (true) {
          console.log("Digite o valor do Produto:");
          preco = readlinesync.questionFloat("");
          if (preco <= 0) console.log("O valor deve ser maior que 0!\n");
          else break;
        }
        switch (tipo) {
          case 1:
            // Validação de campo vazio
            while (true) {
              console.log("Digite a fragância do Cosmético:");
              fragancia = readlinesync.question("");
              if (!fragancia || fragancia.trim() === "")
                console.log("A fragância não pode estar vazia!\n");
              else break;
            }
            produtos.criarProduto(
              new Cosmetico(
                produtos.gerarID(),
                nomeProduto,
                tipo,
                preco,
                fragancia
              )
            );

            break;
          case 2:
            // Validação de campo vazio
            while (true) {
              console.log("Digite a marca do Medicamento:");
              generico = readlinesync.question("");
              if (!generico || generico.trim() === "")
                console.log("A marca não pode estar vazia!\n");
              else break;
            }
            produtos.criarProduto(
              new Medicamento(
                produtos.gerarID(),
                nomeProduto,
                tipo,
                preco,
                generico
              )
            );
        }
        keyPress();
        break;

      case 2:
        console.log(colors.fg.redstrong, "\nListar Produtos\n", colors.reset);
        produtos.listarTodos();

        keyPress();
        break;
      case 3:
        console.log(colors.fg.redstrong, "\nConsultar Via ID\n", colors.reset);
        console.log("Digite o ID do produto!");
        id = readlinesync.questionInt("");
        produtos.consultaPorId(id);
        keyPress();
        break;
      case 4:
        console.log(colors.fg.redstrong, "\nAtualizar Produto\n", colors.reset);
        console.log("Digite o ID do produto!");
        id = readlinesync.questionInt("");

        let produto = produtos.buscaProduto(id);
        if (produto !== null) {
          while (true) {
            console.log("Digite o nome do Produto: ");
            nomeProduto = readlinesync.question("");
            if (!nomeProduto || nomeProduto.trim() === "")
              console.log("O nome do produto não pode ser vazio!\n");
            else break;
          }
          // Validação de preço positivo
          while (true) {
            console.log("Digite o valor do Produto:");
            preco = readlinesync.questionFloat("");
            if (preco <= 0) console.log("O valor deve ser maior que 0!\n");
            else break;
          }
          console.log("O tipo atual do produto é: " + tipos[produto.tipo - 1]);
          tipo = produto.tipo;
          if (readlinesync.keyInYN("Deseja atualizar o tipo?")) {
            console.log("Selecione o Tipo do Produto:");
            tipo = readlinesync.keyInSelect(tipos, "", { cancel: false }) + 1;
          }
          switch (tipo) {
            case 1:
              while (true) {
                console.log("Digite a fragância do Cosmético:");
                fragancia = readlinesync.question("");
                if (!fragancia || fragancia.trim() === "")
                  console.log("A fragância não pode estar vazia!\n");
                else break;
              }
              produtos.atualizarProduto(
                new Cosmetico(id, nomeProduto, tipo, preco, fragancia)
              );

              break;
            case 2:
              while (true) {
                console.log("Digite a marca do Medicamento:");
                generico = readlinesync.question("");
                if (!generico || generico.trim() === "")
                  console.log("A marca não pode estar vazia!\n");
                else break;
              }
              produtos.atualizarProduto(
                new Medicamento(id, nomeProduto, tipo, preco, generico)
              );
          }
          keyPress();
          break;
        } else console.log("Produto não encontrado!");

        keyPress();
        break;
      case 5:
        console.log(colors.fg.redstrong, "\nDeletar Produto\n", colors.reset);

        console.log("Digite o ID do produto!");
        id = readlinesync.questionInt("");
        // Insere o objeto cujo ID é mencionado na variavel produtoDeletar
        let produtoDeletar = produtos.buscaProduto(id);
        // Verificação se o produto com ID inserido existe
        if (produtoDeletar == null) console.log("Produto não encontrado!");
        else {
          console.log(
            colors.fg.redstrong + produtoDeletar?.nome + colors.reset
          );

          if (
            readlinesync.keyInYN("Deseja realmente deletar o produto acima?")
          ) {
            produtos.deletarProduto(id);
          } else console.log("Operação Cancelada");
        }
        keyPress();
        break;
      default:
        console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}
export function sobre(): void {
  console.log("\n╔══════════════════════════════════════════════════╗");
  console.log("   Projeto Desenvolvido por: ");
  console.log("   Samuel Francisco - samuelf@genstudents.org");
  console.log("   https://github.com/Samuel-1210/projeto_farmacia");
  console.log("╚══════════════════════════════════════════════════╝");
}

main();
