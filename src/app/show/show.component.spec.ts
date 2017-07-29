import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ShowComponent } from './show.component';
import { DataService } from '../shared/data/data.service';
import { ByAlbumIdPipe } from '../shared/by-album-id/by-album-id.pipe';
import { ByUserIdPipe } from '../shared/by-user-id/by-user-id.pipe';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, RouterModule, HttpModule ],
      declarations: [ ShowComponent, ByAlbumIdPipe, ByUserIdPipe ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
