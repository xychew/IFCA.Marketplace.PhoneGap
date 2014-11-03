module Marketplace {

    export module Model {

        export class DefectPicture {

            _DefectPictureID: number;
            _DefectID: number;
            _DefectFileName: number;
            _IsDefault: boolean;
            _Defect: Defect;

            constructor() {
                this._Defect = new Defect();
            }
        }
    }
} 