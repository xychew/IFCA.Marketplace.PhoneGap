module Marketplace {

    export module Model {

        export class SiteProgress {

            _SiteProgressID: number;
            _CertificateDate: Date;
            _CertificateNo: string;
            _Description: string;
            _SiteProgressFileName: string;
            _DevelopmentID: number;
            _CreatedDate: Date;
            _CompletionLevel: any;

            _Development:Development;

            constructor() {
                this._Development = new Development();

            }

        }

    }

}          