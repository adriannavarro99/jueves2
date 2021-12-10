import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../task/http.service';

@Component({
  selector: 'app-usergui',
  templateUrl: './usergui.component.html',
  styleUrls: ['./usergui.component.css']
})
export class UserguiComponent implements OnInit {
  @Input() task2:any = [];
  
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
  }

}
