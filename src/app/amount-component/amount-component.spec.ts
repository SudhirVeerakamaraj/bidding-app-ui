
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmountComponent } from "./amount-component";

fdescribe('Amount component', () => {
    let component: AmountComponent;
    let fixture: ComponentFixture<AmountComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AmountComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AmountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return dollars and cents from amount', () => {
        component.amount = 12.34;
        component.ngOnInit();
        expect(component.dollars).toBe("12");
        expect(component.cents).toBe(".34");
    });

    it('should return dollars and cents as 00 when there is no amount', () => {
        component.amount = 0;
        component.ngOnInit();
        expect(component.dollars).toBe("00");
        expect(component.cents).toBe(".00");
    });

    it('should return cents as 00 when there has no decimal', () => {
        component.amount = 185;
        component.ngOnInit();
        expect(component.dollars).toBe("185");
        expect(component.cents).toBe(".00");
    });

});