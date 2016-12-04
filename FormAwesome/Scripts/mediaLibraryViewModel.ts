/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />
import StringValue = UtilityClasses.StringValue;
import Shelf = MediaLibraryClasses.Shelf;

module MediaLibrary {
    export class ViewModel extends kendo.data.ObservableObject {        
        shelfOptions: StringValue[];
        mediaShelves: kendo.data.ObservableArray;

        constructor() {
            super();
            super.init(this);     

            this.set("shelfOptions", this.getShelfOptions());
            this.set("mediaShelves", new kendo.data.ObservableArray([]));
        }        

        getShelfOptions(): StringValue[] {
            return [
                new StringValue("Comics"),
                new StringValue("Books"),
                new StringValue("Movies"),
                new StringValue("TV Shows"),
                new StringValue("Music"),
            ];
        }

        addNewShelf(e: any): void {
            var t = typeof (e);
            this.mediaShelves.push(new Shelf(e.currentTarget.innerHTML));
        }
    }    

    
}
$(function () {
    var viewModel = new MediaLibrary.ViewModel();
    kendo.bind($("#mediaContainer"), viewModel);
});