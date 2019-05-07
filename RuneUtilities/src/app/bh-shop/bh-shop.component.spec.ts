/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BhShopComponent } from './bh-shop.component';

describe('BhShopComponent', () => {
  let component: BhShopComponent;
  let fixture: ComponentFixture<BhShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
