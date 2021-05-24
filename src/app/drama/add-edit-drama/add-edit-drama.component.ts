import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-drama',
  templateUrl: './add-edit-drama.component.html',
  styleUrls: ['./add-edit-drama.component.css']
})
export class AddEditDramaComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dr:any;
  id_drama: string | undefined ;
  title:string | undefined ;
  episodes: string | undefined ;
  country: string | undefined;
  genre: string | undefined;
  premiere: string | undefined;
  Poster:string | undefined;
  PosterPath:string | undefined;

  GenreList:any=[];


  ngOnInit(): void {
    this.LoadGenreList();

  }

  LoadGenreList(){
    this.service.getAllGenres().subscribe((data:any)=>{
        this.GenreList=data;

        this.id_drama=this.dr.id_drama;
        this.title=this.dr.title;
        this.episodes=this.dr.episodes;
        this.country=this.dr.coutry;
        this.genre=this.dr.genre;
        this.premiere=this.dr.premiere;
        this.Poster=this.dr.Poster;
        this.PosterPath=this.service.PhotoUrl+this.Poster;
    });
  }


  addDrama(){
    var val = {id_drama:this.id_drama,
              title:this.title,
              episodes:this.episodes,
              country:this.country,
              genre:this.genre,
              premiere:this.premiere,
              Poster:this.Poster
              };
    this.service.addDrama(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDrama(){
    var val = {id_drama:this.id_drama,
      title:this.title,
      episodes:this.episodes,
      country:this.country,
      genre:this.genre,
      premiere:this.premiere,
      Poster:this.Poster
      };
this.service.updateDrama(val).subscribe(res=>{
alert(res.toString());
});
  }



uploadPoster(event:any){
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);

  this.service.UploadPhoto(formData).subscribe((data:any)=>{
    this.Poster=data.toString();
    this.PosterPath=this.service.PhotoUrl+this.Poster;
  })
}


}

