module Marketplace {
    export module Model {
        export class Property {
            _PropertyID: number;
            _PropertyTypeCode: string;
            _Price: number;
            _Bedroom: string;
            _BuiltUp: number;
            _LandArea: number;
            _TenureCode: string;
            _PromoterID: number;
            _CreatedDate: Date;
            _ModifiedDate: Date;
            _StatusCode: string;
            _BookingStartDate: Date;
            _BookingEndDate: Date;
            _Description: string;
            _BuildingName: string;
            _UnitNo: string;
            _DevelopmentID: number;
            _UnitTypeCode: string;
            _BlockName: string;
            _PropertyName: string;
            AddressID: number;

            _Address: Marketplace.Model.Address;
            _Development:Marketplace.Model.Development;


            constructor() {
                this._Address = new Address();
                this._Development = new Development();
            }

        }
    }

} 