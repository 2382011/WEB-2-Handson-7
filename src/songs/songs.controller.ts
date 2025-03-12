import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create.song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.songService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createSongDTO: CreateSongDTO) {
    return this.songService.updateOne(Number(id), createSongDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songService.delete(Number(id));
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }
}