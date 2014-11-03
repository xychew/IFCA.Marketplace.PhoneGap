module Marketplace {

    export module Model {

        export class Address {

            _AddressID: number;
            _StreetAddress: string;
            _CityID: number;
            _StateCode: string;
            _MapLat: number;
            _MapLng: number;
            _AddressTypeCode: string;

            _User: Array<User>;
            _Development: Array<Development>;
            _Property: Array<Property>;
            _State: State;
            _City: City;

            constructor() {
             //   this._State = new State();
               // this._City = new City();
            }
        }
    }
}