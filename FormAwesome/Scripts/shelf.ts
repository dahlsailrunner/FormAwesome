module MediaLibraryClasses {
    export class Shelf extends kendo.data.ObservableObject {
        shelfType: string;
        shelfName: string;
        shelfContents: kendo.data.ObservableArray;
        shelfItemOptions: string[];
        shelfVisible: boolean;

        constructor(type: string) {
            super();
            super.init(this);

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

        toggleShelf(e: any): void {
            this.set("shelfVisible", !this.shelfVisible);
            const newClass = this.shelfVisible ? "fa fa-chevron-up" : "fa fa-chevron-down";
            e.currentTarget.className = newClass;
        }

        getComicsItemOptions(): string[] {
            return [
                "Series",
                "Graphic Novel"
            ];
        }

        getBookItemOptions(): string[] {
            return [
                "Paperback",
                "Hardcover",
                "eBook",
                "Audiobook"
            ];
        }

        getMovieItemOptions(): string[] {
            return [
                "DVD",
                "BlueRay",
                "Digital"
            ];
        }

        getTvItemOptions(): string[] {
            return [
                "Series",
                "Special",
                "Sporting Event"
            ];
        }

        getMusicItemOptions(): string[] {
            return [
                "Vinyl",
                "Disc",
                "Digital"
            ];
        }

        addNewItem(e: any): void {            
            this.shelfContents.push(new ShelfItem("made-up"));
        }
    }    

    export class ShelfItem extends kendo.data.ObservableObject {
        itemType: string;

        constructor(type: string) {
            super();
            super.init(this);

            this.set("itemType", type);
        }
    }
}