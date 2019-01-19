import { Observable } from "data/observable";
import { Page, Color, View } from "tns-core-modules/ui/page/page";
import { Image } from "ui/image";
import { AdventurePageController } from "~/controller/AdventurePageController";

export enum pageState {
    Home,
    Adventure,
    Enemy,
    Dungeon
}

export class HomeViewModel extends Observable {
    
    currentPageState: pageState = pageState.Home
    activateButton: Color = new Color(40,255,255,255);
    page: Page

    adventurePageController: AdventurePageController = null

    constructor(page: Page) {
        super();
        this.page = page;
        page.bindingContext = this;
    }
        
    public switchPage(newPageState: pageState) {
        if (newPageState != this.currentPageState) {
            
            const currentPageId: string = pageState[this.currentPageState];
            const newPageId: string = pageState[newPageState];
            this.page.getViewById<View>("btn" + currentPageId).backgroundColor = new Color("transparent");
            this.page.getViewById<View>("btn" + newPageId).backgroundColor = this.activateButton;
            //this.page.getViewById<Image>("btn"+currentPageId).backgroundColor = "blue";
            //this.page.getViewById<Image>("btn"+newPageId).backgroundColor = this.activateButton;

            switch(this.currentPageState) {
                case pageState.Home: { 
                    //statements; 
                    break; 
                 } 
                 case pageState.Adventure: { 
                    if (this.adventurePageController == null)  this.adventurePageController = new AdventurePageController;
                    break; 
                 }
                 case pageState.Enemy: { 
                    //statements; 
                    break; 
                 }
                 case pageState.Dungeon: { 
                    //statements; 
                    break; 
                 }
                 
                 default: { 
                    console.log("SwitchPage Error")
                    break; 
                 }
            }

            this.currentPageState = newPageState;
        }   
   }
}








