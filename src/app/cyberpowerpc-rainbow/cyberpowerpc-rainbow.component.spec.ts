import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberpowerpcRainbowComponent } from './cyberpowerpc-rainbow.component';

describe('CyberpowerpcRainbowComponent', () => {
  let component: CyberpowerpcRainbowComponent;
  let fixture: ComponentFixture<CyberpowerpcRainbowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberpowerpcRainbowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberpowerpcRainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
