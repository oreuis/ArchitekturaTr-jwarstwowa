import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() gen:any;
  id_genre: string | undefined;
  genre:string | undefined;

  ngOnInit(): void {
    this.id_genre=this.gen.id_genre;
    this.genre=this.gen.genre;
  }

  addGenre(){
    var val = {id_genre:this.id_genre,
                genre:this.genre};
    this.service.addGenre(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateGenre(){
    var val = {id_genre:this.id_genre,
      genre:this.genre};
this.service.updateGenre(val).subscribe(res=>{
alert(res.toString());
});
  }

}
