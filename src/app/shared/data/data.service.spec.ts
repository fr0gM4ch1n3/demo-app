import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject, async  } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          DataService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
    });
  });

  it('should return an Observable when get called', async(() => {
    expect(TestBed.get(DataService).getUsers()).toEqual(jasmine.any(Observable));
  }));

  it('should resolve to list of users when get called', async(() => {
    const dataService = TestBed.get(DataService);
    const mockBackend = TestBed.get(MockBackend);
    const testData = JSON.parse('[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz\
      ","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81\
      .1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered \
      client-server neural-net","bs":"harness real-time e-markets"}}]');

    mockBackend.connections.subscribe((c: any) => {
      c.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(testData) })));
    });

    dataService.getUsers().subscribe((data: any) => {
      expect(data).toEqual(
        testData
      );
    });
  }));
});
