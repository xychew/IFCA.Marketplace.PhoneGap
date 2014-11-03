module Marketplace {

    export module Model {

        export class MilestonesType {

            _MilestonesTypeID: number;
            _MilestonesType: string;
            _Description: string;
            _CreatedDate: Date;
            _SequenceIndex: number;

            _Milestones: Array<Milestones>;

            constructor() {

            }

        }

    }

}          