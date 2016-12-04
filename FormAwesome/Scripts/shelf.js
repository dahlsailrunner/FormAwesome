var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MediaLibraryClasses;
(function (MediaLibraryClasses) {
    var Shelf = (function (_super) {
        __extends(Shelf, _super);
        function Shelf(type) {
            _super.call(this);
            _super.prototype.init.call(this, this);
            this.set("shelfType", type);
            this.set("shelfName", "");
            this.set("shelfContents", new kendo.data.ObservableArray([]));
            this.set("shelfVisible", true);
            switch (this.shelfType) {
                case "Comics":
                    this.set("shelfItemOptions", this.getComicsItemOptions());
                    break;
                case "Books":
                    this.set("shelfItemOptions", this.getBookItemOptions());
                    break;
                case "Movies":
                    this.set("shelfItemOptions", this.getMovieItemOptions());
                    break;
                case "TV Shows":
                    this.set("shelfItemOptions", this.getTvItemOptions());
                    break;
                case "Music":
                    this.set("shelfItemOptions", this.getMusicItemOptions());
                    break;
            }
        }
        Shelf.prototype.toggleShelf = function (e) {
            this.set("shelfVisible", !this.shelfVisible);
            var newClass = this.shelfVisible ? "fa fa-chevron-up" : "fa fa-chevron-down";
            e.currentTarget.className = newClass;
        };
        Shelf.prototype.getComicsItemOptions = function () {
            return [
                "Series",
                "Graphic Novel"
            ];
        };
        Shelf.prototype.getBookItemOptions = function () {
            return [
                "Paperback",
                "Hardcover",
                "eBook",
                "Audiobook"
            ];
        };
        Shelf.prototype.getMovieItemOptions = function () {
            return [
                "DVD",
                "BlueRay",
                "Digital"
            ];
        };
        Shelf.prototype.getTvItemOptions = function () {
            return [
                "Series",
                "Special",
                "Sporting Event"
            ];
        };
        Shelf.prototype.getMusicItemOptions = function () {
            return [
                "Vinyl",
                "Disc",
                "Digital"
            ];
        };
        Shelf.prototype.addNewItem = function (e) {
            alert("adding");
            this.shelfContents.push(new ShelfItem("made-up"));
        };
        return Shelf;
    }(kendo.data.ObservableObject));
    MediaLibraryClasses.Shelf = Shelf;
    var ShelfItem = (function (_super) {
        __extends(ShelfItem, _super);
        function ShelfItem(type) {
            _super.call(this);
            _super.prototype.init.call(this, this);
            this.set("itemType", type);
        }
        return ShelfItem;
    }(kendo.data.ObservableObject));
    MediaLibraryClasses.ShelfItem = ShelfItem;
})(MediaLibraryClasses || (MediaLibraryClasses = {}));
//# sourceMappingURL=shelf.js.map