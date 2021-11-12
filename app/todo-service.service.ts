import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  students=[
    {"Name":"Loknath","Roll":"1","Department":"ME","Year":2},
    {"Name":"Vivek","Roll":"2","Department":"CE","Year":3},
    {"Name":"Patel","Roll":"3","Department":"IT","Year":4},
    {"Name":"Mohit","Roll":"4","Department":"ECE","Year":3},
    {"Name":"Sreekar","Roll":"5","Department":"CSE","Year":4}
  ]
getdetails()
{
return this.students
}

  constructor() { }
}
