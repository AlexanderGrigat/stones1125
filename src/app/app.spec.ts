import { TestBed } from '@angular/core/testing';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { App } from './app';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatePipe, UpperCasePipe } from '@angular/common';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        RouterOutlet,
        RouterLink,
        DatePipe,
        UpperCasePipe,
        MatToolbarModule,
        App,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
