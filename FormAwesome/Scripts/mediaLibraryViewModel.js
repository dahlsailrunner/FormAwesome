var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />
var StringValue = UtilityClasses.StringValue;
var MediaLibrary;
(function (MediaLibrary) {
    var ViewModel = (function (_super) {
        __extends(ViewModel, _super);
        function ViewModel() {
            _super.call(this);
            _super.prototype.init.call(this, this);
            this.set("shelfOptions", this.getShelfOptions());
            this.set("mediaShelves", new kendo.data.ObservableArray([]));
        }
        ViewModel.prototype.getShelfOptions = function () {
            return [
                new StringValue("Comics"),
                new StringValue("Books"),
                new StringValue("Movies"),
                new StringValue("TV Shows"),
                new StringValue("Music"),
            ];
        };
        ViewModel.prototype.addNewShelf = function (e) {
            var t = typeof (e);
            this.mediaShelves.push(new Shelf(e.currentTarget.innerHTML));
        };
        return ViewModel;
    }(kendo.data.ObservableObject));
    MediaLibrary.ViewModel = ViewModel;
    var Shelf = (function (_super) {
        __extends(Shelf, _super);
        function Shelf(type) {
            _super.call(this);
            _super.prototype.init.call(this, this);
            this.set("shelfType", type);
        }
        return Shelf;
    }(kendo.data.ObservableObject));
})(MediaLibrary || (MediaLibrary = {}));
$(function () {
    var viewModel = new MediaLibrary.ViewModel();
    kendo.bind($("#mediaContainer"), viewModel);
});
//# sourceMappingURL=mediaLibraryViewModel.js.map