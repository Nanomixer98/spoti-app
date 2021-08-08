import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true; 
    this.router.params.subscribe( res =>{
      this.getArtista( res['id']);
      this.getTopTracks(res['id']);
    });
  }

  getArtista( id: string ) {
    this.loading = true;
    this.spotify.getArtista(id)
                .subscribe( artista => {
                  // console.log(artista);
                  this.artista = artista;
                  this.loading = false;
                });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id)
                .subscribe( topTracks => {
                  console.log(topTracks);
                  this.topTracks = topTracks;
                });
  }

}
