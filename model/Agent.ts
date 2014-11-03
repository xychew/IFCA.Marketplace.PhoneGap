module Marketplace {

    export module Model {

        export class Agent {

            _AgentID: number;
            _Name: string;
            _PromoterID: number;
            _AboutUs: string;
           
            _Promoter: Promoter;

            constructor() {
                this._Promoter = new Promoter();
            }

        }

    }

}            