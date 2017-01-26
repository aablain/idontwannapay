/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundComponent } from './fund.component';

describe('FundComponent', () => {
  let component: FundComponent;
  let fixture: ComponentFixture<FundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
