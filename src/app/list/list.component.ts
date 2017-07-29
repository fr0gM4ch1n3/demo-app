import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent  implements OnInit {
  public errorMessage: string;
  public users: any[] = [];

  /**
   * Creates an instance of the ListComponent with the injected
   * DataService.
   *
   * @param {DataService} dataService - The injected DataService.
   */
  constructor(private dataService: DataService) {}

  /**
   * Get the users OnInit
   */
  ngOnInit() {
    this.getUsers();
  }

  /**
   * Handle the dataService observable
   */
  getUsers() {
    this.dataService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }
}
