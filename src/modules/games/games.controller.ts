import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { GamesService } from './games.service';
import {
  CreateGameDto,
  UpdateGameDetailsDto,
  UpdateGamePlayerDto,
  UpdateGameTeamDto,
  UpdateGamePlayersDto,
} from '@shared/dtos';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('create')
  async createGame(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.createGame(createGameDto);
  }

  @Get(':id/details')
  async getGameDetailsById(@Param('id') id: string) {
    return this.gamesService.getGameDetailsById(id);
  }

  @Get(':id/full-data')
  async getGameFullDataById(@Param('id') id: string) {
    return this.gamesService.getGameFullDataById(id);
  }

  @Put(':id/update-details')
  async updateGameDetails(
    @Param('id') id: string,
    @Body() updateGameDetailsDto: UpdateGameDetailsDto,
  ) {
    return this.gamesService.updateGameDetails(id, updateGameDetailsDto);
  }

  @Put(':id/update-player')
  async updateGamePlayer(
    @Param('id') id: string,
    @Body() updateGamePlayerDto: UpdateGamePlayerDto,
  ) {
    return this.gamesService.updateGamePlayer(id, updateGamePlayerDto);
  }

  @Put(':id/update-team')
  async updateGameTeam(
    @Param('id') id: string,
    @Body() updateGameTeamDto: UpdateGameTeamDto,
  ) {
    return this.gamesService.updateGameTeam(id, updateGameTeamDto);
  }

  @Put(':id/update-players')
  async updateGamePlayers(
    @Param('id') id: string,
    @Body() updateGamePlayersDto: UpdateGamePlayersDto,
  ) {
    return this.gamesService.updateGamePlayers(id, updateGamePlayersDto);
  }
}
