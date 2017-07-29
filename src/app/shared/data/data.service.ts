import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class DataService {
  private endoints = {
    users: 'http://jsonplaceholder.typicode.com/users',
    albums: 'http://jsonplaceholder.typicode.com/albums',
    photos: 'http://jsonplaceholder.typicode.com/photos'
  };

  /**
   * Creates a new DataService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {any[]} The Observable for the HTTP request.
   */
  getUsers(): Observable<{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }[]> {
    return this.http.get(this.endoints.users)
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {any[]} The Observable for the HTTP request.
   */
  getAlbums(): Observable<{
    userId: number,
    id: number,
    title: string
  }[]> {
    return this.http.get(this.endoints.albums)
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {any[]} The Observable for the HTTP request.
   */
  getPhotos(): Observable<{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }[]> {
    return this.http.get(this.endoints.photos)
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
