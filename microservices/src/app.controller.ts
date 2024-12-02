import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';

import { Jogador } from './interface/consultarJogador.interface';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  logger = new Logger (AppController.name)

  @EventPattern('consulta')
  async consulta(@Payload() jogador: Jogador){
    const jogadorBanco = await this.appService.encontrarJogadorPorId(jogador.id_jogador)
    console.log(jogadorBanco)
  this.logger.log(`jogador:`+ JSON.stringify(jogadorBanco))
  }
}
