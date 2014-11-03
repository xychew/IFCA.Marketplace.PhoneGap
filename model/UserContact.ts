module Marketplace {

    export module Model {

        export class UserContact {

            _UserID: number;
            _ContactID: number;
            _User: User;
            _Contact: Contact;

            constructor() {
                this._User = new User();
                this._Contact = new Contact();
            }
        }
    }
} 