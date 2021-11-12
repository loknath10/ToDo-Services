import { Component, OnInit } from '@angular/core';

import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class TodoListComponent implements OnInit {
  studentlist:any=[]

  constructor(private stu:TodoServiceService) { }

  ngOnInit(): void {
  this.studentlist=this.stu.getdetails()
  }

}
