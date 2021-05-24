import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-genre',
  templateUrl: './show-genre.component.html',
  styleUrls: ['./show-genre.component.css']
})
export class ShowGenreComponent implements OnInit {

  constructor(private service:SharedService) { }

  GenreList:any=[];

  ModalTitle!: string;
  ActivateAddEditGenComp:boolean=false;
  gen:any;

  ngOnInit(): void {
    this.refreshGenList();
  }

  addClick(){
    this.gen={
      id_genre:0,
      genre:""
    }
    this.ModalTitle="Add Genre";
    this.ActivateAddEditGenComp=true;
  }


  editClick(item: any){
      this.gen=item;
      this.ModalTitle="Edytuj";
      this.ActivateAddEditGenComp=true;
}


deleteClick(item:any){
  if(confirm('Na pewno chcesz usunąć?')){
    this.service.deleteGenre(item.id_genre).subscribe(data=>{
      alert(data.toString());
      this.refreshGenList();
    });
  }
}


  closeClick(){
    this.ActivateAddEditGenComp=false;
    this.refreshGenList();
  }

  refreshGenList(){
    this.service.getGenList().subscribe(data=>{
      this.GenreList=data;
    });
  }

}
