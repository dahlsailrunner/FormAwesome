/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />

module FormAwesomeIndex {
    export class ViewModel extends kendo.data.ObservableObject {
        ddChoice: string;
        helloViewModel: string;

        constructor() {
            super();
            super.init(this);

            this.ddChoice = "Second Choice";
            this.helloViewModel = "Hello from the View Model!";
        }


        ddChanged(): void {
            alert("changed!! (to " + this.ddChoice + ")");
        }
    }
}
$(function () {
    var viewModel = new FormAwesomeIndex.ViewModel();
    kendo.bind($("#mainContainer"), viewModel);
});