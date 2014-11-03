module Marketplace {

    export class Milestones {

        GetMilestonesList() {

            var milestonesList = [];

            var milestones1 = {
                milestonesID: "M1",
                PhaseName: "Mama Condo",
                UnitTypeCode: "A-3-1",
                CompletionLevel: "30",
                Step:
                [
                    {
                        StepID: "1",
                        Title: "Signing of the agreement",
                        Date: "15/3/2010",
                        Status: "Completed"
                    },
                    {
                        StepID: "2",
                        Title: "Foundation and Footing works",
                        Date: "21/9/2010",
                        Status: "Completed"
                    },
                    {
                        StepID: "3",
                        Title: "Reinforced Frameworks",
                        Date: "15/10/2010",
                        Status: "In progress"
                    }
                ]
            };

            var milestones2 = {
                milestonesID: "M2",
                PhaseName: "Kaka Condo",
                UnitTypeCode: "B-12-3",
                CompletionLevel: "10",
                Step:
                [
                    {
                        StepID: "1",
                        Title: "Signing of the agreement",
                        Date: "15/10/2010",
                        Status: "In Progress"
                    }
                ]
            };

            var milestones3 = {
                milestonesID: "M3",
                PhaseName: "Wawa Condo",
                UnitTypeCode: "C-11-1",
                CompletionLevel: "50",
                Step:
                [
                    {
                        StepID: "1",
                        Title: "Signing of the agreement",
                        Date: "15/10/2010",
                        Status: "In Progress"
                    },
                    {
                        StepID: "2",
                        Title: "Foundation and Footing works",
                        Date: "21/9/2010",
                        Status: "Completed"
                    },
                    {
                        StepID: "3",
                        Title: "Reinforced Frameworks",
                        Date: "15/10/2010",
                        Status: "In progress"
                    },
                    {
                        StepID: "4",
                        Title: "Walls with door and window frames placed in position",
                        Date: "15/10/2010",
                        Status: "No Started"
                    }
                ]
            };

            milestonesList.push(milestones1);
            milestonesList.push(milestones2);
            milestonesList.push(milestones3);

            return milestonesList;
        }
    }
} 