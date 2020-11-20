import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuypowerRedblackComponent } from './ibuypower-redblack.component';

describe('IbuypowerRedblackComponent', () => {
  let component: IbuypowerRedblackComponent;
  let fixture: ComponentFixture<IbuypowerRedblackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuypowerRedblackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuypowerRedblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
