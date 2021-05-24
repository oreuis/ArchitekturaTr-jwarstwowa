import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl="http://localhost:56245/api";
readonly PhotoUrl="http://localhost:56245/PosterPhotos";

  constructor(private http:HttpClient) { }

  getGenList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Genre');
  }

  addGenre(val:any){
    return this.http.post(this.APIUrl+'/Genre',val);
  }

  updateGenre(val:any){
    return this.http.put(this.APIUrl+'/Genre',val);
  }

  deleteGenre(val:any){
    return this.http.delete(this.APIUrl+'/Genre/'+val);
  }


  getDrList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Drama');
  }

  addDrama(val:any){
    return this.http.post(this.APIUrl+'/Drama',val);
  }

  updateDrama(val:any){
    return this.http.put(this.APIUrl+'/Drama',val);
  }

  deleteDrama(val:any){
    return this.http.delete(this.APIUrl+'/Drama/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Drama/SaveFile',val);
  }

  getAllGenres():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Drama/AllGenres');
  }

}
