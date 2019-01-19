import { Observable } from "data/observable";
import { Page, Color, View } from "tns-core-modules/ui/page/page";
import { screen } from "platform";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import { AdventurePageController } from "~/home/adventure-page/AdventurePageController";

export enum pageState {
    Home,
    Adventure,
    Enemy,
    Tabern
}

let bottomBarInteraction = true;
export class HomeViewModel extends Observable {
    
    currentPageState: pageState = pageState.Home
    activateButton: Color = new Color(40,255,255,255);
    page: Page
    pageWidth = 0

    adventurePageController: AdventurePageController = null
    adventurePage: View


    constructor(page: Page) {
        super();
        this.page = page;
        this.pageWidth = screen.mainScreen.widthDIPs
        this.adventurePage = page.getViewById("adventure-page")
        page.bindingContext = this;
    }
        
    public switchPage(newPageState: pageState) {
        if (newPageState != this.currentPageState && bottomBarInteraction) {
            bottomBarInteraction = false;
            const currentPageId: string = pageState[this.currentPageState];
            const newPageId: string = pageState[newPageState];
            this.page.getViewById<View>("btn" + currentPageId).backgroundColor = new Color("transparent");
            this.page.getViewById<View>("btn" + newPageId).backgroundColor = this.activateButton;

            switch(newPageState) {
                case pageState.Home: { 
                    this.pageAnimationOut(this.getCurrentView());
                    break; 
                 } 
                 case pageState.Adventure: { 
                    if (this.adventurePageController == null)  this.adventurePageController = new AdventurePageController;
                    this.pageAnimationIn(this.adventurePage);
                    break; 
                 }
                 case pageState.Enemy: { 
                    //statements; 
                    break; 
                 }
                 case pageState.Tabern: { 
                    //statements; 
                    break; 
                 }
                 
                 default: { 
                    console.log("SwitchPage Error")
                    return; 
                 }
            }

            this.currentPageState = newPageState;
        }   
   }

   private pageAnimationIn(pageAnim: View) {
        pageAnim.translateX = this.pageWidth;
        pageAnim.visibility = "visible";
        pageAnim.animate({translate: { x: 0, y: 0}, duration: 200, curve: AnimationCurve.easeIn}).then(function (){
            bottomBarInteraction = true;
        });
   }
   private pageAnimationOut(pageAnim: View) {
        pageAnim.animate({translate: { x: -this.pageWidth, y: 0}, duration: 200, curve: AnimationCurve.easeIn}).then( function (){
            pageAnim.visibility = "collapse";
            bottomBarInteraction = true;
        });
    }

    private getCurrentView(): View {
        switch(this.currentPageState) {
            case pageState.Home: { 
                break; 
             } 
             case pageState.Adventure: {
                 return this.adventurePage;
             }
             case pageState.Enemy: { 
                //statements; 
                break; 
             }
             case pageState.Tabern: { 
                //statements; 
                break; 
             }
             
             default: { 
                console.log("getView Error")
                return; 
             }
        }
    }
}