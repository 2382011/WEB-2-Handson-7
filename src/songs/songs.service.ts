import { Injectable } from '@nestjs/common';
import { Song } from './songs.entity';
import { CreateSongDTO } from './create.song.dto';

@Injectable()
export class SongsService {
    private currentId: number = 0;
    private songs: Song[] = [];

    findAll(): Song[] {
        return this.songs;
    }

    findOne(id: number): Song[] {
      return this.songs.filter((Song) => Song.id == id);

    }

    delete(id: number) {
        this.songs = this.songs.filter((Song) => Song.id != id);
    }

    create(CreateSongDTO: CreateSongDTO) {
        const song: Song = {
            id: this.currentId,
            title: CreateSongDTO.title,
            artist: CreateSongDTO.artist
        }
        ++this.currentId;
        this.songs.push
    }

    updateOne(id: number, CreateSongDTO) {
        this.songs.forEach(Song => {
            if(Song.id == id){
                Song.artist = CreateSongDTO.artist;
                Song.title = CreateSongDTO.title;
            }
        })
    }
}
