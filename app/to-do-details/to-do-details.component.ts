import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  studentdetails :any=[]
  constructor(private stu:TodoServiceService) { }

  ngOnInit(): void {
    this.studentdetails=this.stu.getdetails()
  }

}
