export interface Jogador{
  id_jogador: number;
  nome_jogador: string;
  posicao: string;
  id_time?: number | null;
}