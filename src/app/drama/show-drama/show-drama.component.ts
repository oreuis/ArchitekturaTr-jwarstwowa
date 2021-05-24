import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-drama',
  templateUrl: './show-drama.component.html',
  styleUrls: ['./show-drama.component.css']
})

export class ShowDramaComponent implements OnInit {

  constructor(private service:SharedService) { }

  DramaList:any=[];

  ModalTitle!: string;
  ActivateAddEditDrComp:boolean=false;
  dr:any;

  ngOnInit(): void {
    this.refreshDrList();
  }

  addClick(){
    this.dr={
      id_drama:0,
      title:"",
      episodes:"",
      country:"",
      genre:"",
      premiere:"",
      Poster:"poster.png"
    }
    this.ModalTitle="Add Drama";
    this.ActivateAddEditDrComp=true;
  }


  editClick(item: any){
      this.dr=item;
      this.ModalTitle="Edytuj";
      this.ActivateAddEditDrComp=true;
}


deleteClick(item:any){
  if(confirm('Na pewno chcesz usunąć?')){
    this.service.deleteDrama(item.id_drama).subscribe(data=>{
      alert(data.toString());
      this.refreshDrList();
    })
  }
}


  closeClick(){
    this.ActivateAddEditDrComp=false;
    this.refreshDrList();
  }

  refreshDrList(){
    this.service.getDrList().subscribe(data=>{
      this.DramaList=data;
    });
  }

}
