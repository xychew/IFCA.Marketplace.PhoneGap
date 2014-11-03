module Marketplace {

    export module Model {

        export class Milestones {

            _MilestonesID: number;
            _PurchaseUnitID: number;
            _MilestonesTypeID: number;
            _StatusCode: string;
            _Date: Date;
            
            _MilestonesType: MilestonesType;
            _PurchaseUnit:PurchaseUnit;

            constructor() {
                this._MilestonesType = new MilestonesType();
                this._PurchaseUnit = new PurchaseUnit();
            }

        }

    }

}           