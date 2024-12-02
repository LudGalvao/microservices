import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService){}


  async encontrarJogadorPorId(id: number){
    return this.prisma.jogadores.findUnique({
      where: {
        id_jogador: id,
      },
    })
  }

}
