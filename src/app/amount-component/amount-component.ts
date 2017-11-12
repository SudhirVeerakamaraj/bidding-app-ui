import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'amount-component',
    templateUrl: './amount-component.html',
    styleUrls: ['./amount-component.scss']
})

export class AmountComponent implements OnInit {
    public cents: string;
    public dollars: string;

    @Input() amount: number;

    ngOnInit() {

        if (this.amount) {
            let amountAsString: string = this.amount.toString();
            if (amountAsString.indexOf('.') > -1) {
                let splitAmount = amountAsString.split(".");
                this.dollars = splitAmount[0];
                this.cents = `.${splitAmount[1]}`;
            } else {
                this.dollars = amountAsString;
                this.cents = ".00";
            }
        } else {
            this.dollars = "00";
            this.cents = ".00";
        }

    }
}