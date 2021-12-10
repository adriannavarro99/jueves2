import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //Form ADD
  title: string = "";
  title2: string = "";
  description: string = "";

  //Form EDIT
  completed: string = "";
  newTitle: string = "";
  newDescription: string = "";

  //
  allTasks: any[] = [];
  taskByTitle: any[] = [];
  result: any;
  task: any[] = [];
  task2: any = [];

  currentTask:any = {
    title : "",
    description: "",
    completed: false
  };
  
  addTask2:any = {
    title : "",
    description: "",
    completed: false
  };

  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(): void {
    this.getTasks();

    //Form
    this.title = "";
    this.title2 = "";
    this.description = "";
    this.completed = "";
  }

  getTasks(): void {
    console.log("We are going to fetch the tasks list!");
    this._httpService.fetchTasks()
    .subscribe( (data:any) => {
      this.allTasks = data.task;
      console.log( "All TASKS: ", this.allTasks );
    });
  }

  taskInfo(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    console.log("FIND: ", this.title);
    this._httpService.fetchTasksByName(this.title)
    //this.result = this._httpService.task2;
    .subscribe( (data:any) => {
      this.task2 = data.task;
      console.log("Find by Name", this.task2 );
      console.log('QUE TIPO DE DATO?', typeof this.task2 )
    });
    //console.log("found result: ", this.result);
  }

  postNewTask(event: any):void{
    event.preventDefault();
    let isValid: boolean = true;
    this.title = event.target.addTitle.value;
    this.description = event.target.addDesc.value;
    
    if(this.title == "" || this.description == ""){
      console.log("One field is empty");
      isValid = false;
    }
    if(this.title == ""){
      console.log("Title field is empty");
      isValid = false;
    }
    if(this.description == ""){
      console.log("Description field is empty");
      isValid = false;
    }

    let addTask = {
      title : this.title,
      description :  this.description
    }

    if(isValid){
      this._httpService.addTask(addTask)
      .subscribe((data:any)=>{
        //console.log("Data request for new task: ", data);
        console.log("Succesfully added");
        
      });
      location.reload();
    }
    
  }

  editTask(event:any):void{
    let isValid: boolean = true;
    this.title2 = event.target.title2.value;
    this.title = event.target.editTitle.value;
    this.description = event.target.editDesc.value;
    this.completed = event.target.completed.value;

    if(this.title === this.title2 ){
      console.log("Title field is has the same value, it's imposible to edit");
      isValid = false;
    }
    if(this.title == "" || this.description == ""){
      console.log("One field is empty");
      isValid = false;
    }
    if(this.title == ""){
      console.log("Title field is empty");
      isValid = false;
    }
    if(this.description == ""){
      console.log("Description field is empty");
      isValid = false;
    }

    let taskEdited = {
      title : this.title,
      description :  this.description,
      completed: this.completed
    }

    console.log("This is the task updated: ",taskEdited);
    if(isValid){
      this._httpService.editTask( this.title2, taskEdited)
      .subscribe((data:any)=>{
        console.log(data);
      });
      location.reload();
    }
    
  }

  deleteTask(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    this._httpService.removeTask(this.title)
    .subscribe((data:any) => {
      this.task = data;
    });
    location.reload();
  }
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
}
