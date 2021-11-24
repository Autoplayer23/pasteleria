import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pastel } from './pastel';
import {PastelService} from './pastel.service';

@Component({
  selector: 'app-form-pastel',
  templateUrl: './form-pastel.component.html',
  styleUrls: ['./form-pastel.component.css']
})
export class FormPastelComponent implements OnInit {
  public titulo:string;
  public pastel:Pastel=new Pastel(0,"","",10,"","","","","");
  constructor(private pastelService:PastelService,public router:Router,private activatedRoute:ActivatedRoute) { 
    this.titulo="Formulario Pasteleria";
  }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.activatedRoute.params.subscribe(
      e =>{
        let id = e['id'];
        if(id){
          this.pastelService.get(id).subscribe(
            es =>this.pastel=es
          )
        }

      }
    )
  }

create(): void{
  console.log(this.pastel);
  this.pastelService.create(this.pastel).subscribe(
    res => this.router.navigate(['/pastel']));
  
}

update():void{
  this.pastelService.update(this.pastel).subscribe(
    
    s =>{
      console.log("ruta")
      this.router.navigate(['/pastel'])
    }
  )
}

}
function id(id: any) {
throw new Error('Function not implemented.');
}