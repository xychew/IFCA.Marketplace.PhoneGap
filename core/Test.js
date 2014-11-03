/// <reference path="../model/contact.ts" />
/// <reference path="../model/contractor.ts" />
/// <reference path="../model/defecttype.ts" />
var Marketplace;
(function (Marketplace) {
    (function (Core) {
        var Test = (function () {
            function Test() {
                var contact = new Marketplace.Model.Contact();
            }
            return Test;
        })();
        Core.Test = Test;
    })(Marketplace.Core || (Marketplace.Core = {}));
    var Core = Marketplace.Core;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Test.js.map
