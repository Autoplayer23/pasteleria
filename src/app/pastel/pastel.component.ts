import { Component, OnInit } from '@angular/core';
import {Pastel} from './pastel'
import { PastelService } from './pastel.service';

@Component({
  selector: 'app-pastel',
  templateUrl: './pastel.component.html',
  styleUrls: ['./pastel.component.css']
})
export class PastelComponent implements OnInit {
  titulo:string="Lista de pastel";

  pasteles!: Pastel[];

  constructor(private parteService:PastelService) { }

  ngOnInit(): void {
    this.parteService.getAll().subscribe(
      (      p: Pastel[]) =>this.pasteles=p
    );
  }

  delete(pastel:Pastel):void{
    console.log("hello form delete")
    this.parteService.delete(pastel.id).subscribe(
      res=>this.parteService.getAll().subscribe(
        response=>this.pasteles=response
        )
      )
  }

  }