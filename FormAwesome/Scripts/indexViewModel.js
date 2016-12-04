/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FormAwesomeIndex;
(function (FormAwesomeIndex) {
    var ViewModel = (function (_super) {
        __extends(ViewModel, _super);
        function ViewModel() {
            _super.call(this);
            _super.prototype.init.call(this, this);
            this.ddChoice = "Second Choice";
        }
        ViewModel.prototype.ddChanged = function () {
            alert("changed!! (to " + this.ddChoice + ")");
        };
        return ViewModel;
    }(kendo.data.ObservableObject));
    FormAwesomeIndex.ViewModel = ViewModel;
})(FormAwesomeIndex || (FormAwesomeIndex = {}));
$(function () {
    var viewModel = new FormAwesomeIndex.ViewModel();
    kendo.bind(document.body, viewModel);
});
//# sourceMappingURL=indexViewModel.js.map