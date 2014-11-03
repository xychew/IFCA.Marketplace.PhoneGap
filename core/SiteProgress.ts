module Marketplace {

    export class SiteProgress {

        GetSiteProgressList() {

            var siteProgressList = [];

            var siteProgress1 = {
                SiteProgressID: "SP1",
                PhaseName: "MamaCondo",
                UnitTypeCode: "A-3-1",
                CompletionLevel: "25",
                Progress:
                [
                    {
                        SiteProgressFileName: "Foundation & Footinf Works",
                        CertificationDate: "12/3/2010",
                        ProgressPicture: "images/image.png"
                    }
                ]
            };

            var siteProgress2 = {
                SiteProgressID: "SP2",
                PhaseName: "Kaka Condo",
                UnitTypeCode: "C-12-3",
                CompletionLevel: "80",
                Progress:
                [
                    {
                        SiteProgressFileName: "Foundation & Footinf Works",
                        CertificationDate: "12/3/2010",
                        ProgressPicture: "images/image.png"
                    },
                    {
                        SiteProgressFileName: "Reinforced Concrete Framework",
                        CertificationDate: "4/5/2011",
                        ProgressPicture: "images/image.png"
                    },
                    {
                        SiteProgressFileName: "Walls, Door & Window Frames",
                        CertificationDate: "21/7/2012",
                        ProgressPicture: "images/image.png"
                    },
                    {
                        SiteProgressFileName: "Roofing, Electrical Wiring & Plumbing",
                        CertificationDate: "21/7/2012",
                        ProgressPicture: "images/image.png"
                    }
                ]
            };

            var siteProgress3 = {
                SiteProgressID: "SP3",
                PhaseName: "Wawa Condo",
                UnitTypeCode: "D-11-1",
                CompletionLevel: "50",
                Progress:
                [
                    {
                        SiteProgressFileName: "Foundation & Footinf Works",
                        CertificationDate: "12/3/2010",
                        ProgressPicture: "images/image.png"
                    },
                    {
                        SiteProgressFileName: "Reinforced Concrete Framework",
                        CertificationDate: "4/5/2011",
                        ProgressPicture: "images/image.png"
                    }
                ]
            };

            siteProgressList.push(siteProgress1);
            siteProgressList.push(siteProgress2);
            siteProgressList.push(siteProgress3);

            return siteProgressList;
        }
    }
}  