import { Component, OnInit } from '@angular/core';
import { Form } from '../Form';
import { Studentservice } from '../studentservice';

@Component({
  selector: 'app-studentlist',
  standalone: false,
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist implements OnInit {
students:Form[]=[];
constructor(private stuService:Studentservice){

}
 ngOnInit(): void {
     this.loadStudents();
 }
 loadStudents(){
this.stuService.fetchAllStudent().subscribe((datas)=>{
this.students=datas;
})

 }

  
}