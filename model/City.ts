module Marketplace {

    export module Model {
        export class City {
            _CityID: number;
            _City: string;
            _StateCode: string;
            _Postcode: string;

            _State:Marketplace.Model.State;
            _Area: Array<Area>;

            constructor() {
                this._State =new State();

            }

        }
    }

}  