import { colors } from "./Colors";
import readlinesync = require("readline-sync");

// Função para formatar valores numéricos no padrão de moeda brasileira (BRL)
export function formatToBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
// Função que pausa o programa até que o usuário pressione "Enter"
export function keyPress(): void {
  console.log(colors.reset, "");
  console.log(
    colors.fg.red,
    "\nPressione enter para continuar...",
    colors.reset
  );
  readlinesync.prompt();
}
