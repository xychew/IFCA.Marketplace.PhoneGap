module Marketplace {

    export module Model {
        export class Area {
            _AreaID: number;
            _Area: string;
            _CityName: string;
            _CityID: number;
            _Postcode: string;
            _StateCode: string;
            _City:City;

            constructor() {
              this._City = new City();
            }

        }
    }

}  