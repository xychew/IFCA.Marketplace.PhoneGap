module Marketplace {

    export module Model {

        export class Development {

            _DevelopmentID: number;
            _DevelopmentName: string;
            _DeveloperID: number;
            _PhaseName: string;
            _PromoterID: number;
            _AddressID: number;

            _Address:Marketplace.Model.Address;
            _Property: Array<Property>;
            _PurchaseUnit: Array<PurchaseUnit>;
            _SiteProgress: Array<SiteProgress>;
            _Developer: Developer;
            _Promoter: Promoter;

            constructor() {
                this._Developer = new Developer();
                this._Promoter = new Promoter();
                this._Address = new Address();
            }

        }

    }

}   