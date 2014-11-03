module Marketplace {

    export module Model {

        export class Contractor {

            _ContractorID: number;
            _ContractorName: string;
            _ContactID: number;
            _Contact: Contact;
            _DefectType : Array<DefectType>;

            constructor() {
                this._Contact = new Contact();
            }

        }

    }

}  