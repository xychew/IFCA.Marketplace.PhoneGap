module Marketplace {

    export module Model {
        export class Contact {
            _ContactID: number;
            _ContactName: string;
            _PhoneNo: string;
            _Email: string;
            _Position: string;

            _Contractor: Array<Contractor>;
            _UserContact: Array<UserContact>;
            constructor() {

            }

        }
    }

}  