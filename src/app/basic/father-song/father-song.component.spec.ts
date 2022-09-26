import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSongComponent } from './father-song.component';

describe('FatherSongComponent', () => {
  let component: FatherSongComponent;
  let fixture: ComponentFixture<FatherSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
