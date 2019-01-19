import { Observable } from "data/observable"
import { Page, Color, View } from "tns-core-modules/ui/page/page"
import { screen } from "platform"
import {AnimationCurve} from "tns-core-modules/ui/enums"
import { AdventurePageController } from "~/home/adventure-page/AdventurePageController"
import { EncounterPageController } from "~/home/encounter-page/EncounterPageController"

export enum PageState {
    Home,
    Adventure,
    Encounter,
    Tabern
}

let bottomBarInteraction = true
export class HomeViewModel extends Observable {
    
    currentPageState: PageState = PageState.Home
    activateButton: Color = new Color(40,255,255,255)
    page: Page
    pageWidth = 0

    adventurePageController: AdventurePageController = null
    encounterageController: EncounterPageController = null
    adventurePage: View
    encounterPage: View

    constructor(page: Page) {
        super()
        this.page = page
        this.pageWidth = screen.mainScreen.widthDIPs

        this.adventurePage = page.getViewById("adventure-page")
        this.encounterPage = page.getViewById("encounter-page")
        page.bindingContext = this
    }
        
    public switchPage(nextPageState: PageState) {
        if (nextPageState != this.currentPageState && bottomBarInteraction) {
            console.log("Current State: " + this.currentPageState.toString())
            console.log("Next State: " + nextPageState.toString())

            bottomBarInteraction = false
            const currentPageId: string = PageState[this.currentPageState]
            const newPageId: string = PageState[nextPageState]
            this.page.getViewById("hightlightedBtn").col = nextPageState
            switch(nextPageState) {
                case PageState.Home: { 
                    this.pageAnimationOut(this.getCurrentView(), nextPageState)
                    this.currentPageState = nextPageState 
                    bottomBarInteraction = true
                    break
                 } 
                 case PageState.Adventure: { 
                    if (this.adventurePageController == null)  this.adventurePageController = new AdventurePageController
                    this.pageAnimationIn(this.adventurePage, nextPageState)
                    break
                 }
                 case PageState.Encounter: { 
                    if (this.encounterageController == null)  this.encounterageController = new EncounterPageController
                    this.pageAnimationIn(this.encounterPage, nextPageState)
                    break
                 }
                 case PageState.Tabern: { 
                    //statements 
                    break
                 }
                 
                 default: { 
                    console.log("SwitchPage Error")
                    return
                 }
            }
        }
   }

   private pageAnimationIn(pageAnim: View, nextPageState: PageState) {
        pageAnim.translateX = nextPageState > this.currentPageState ? this.pageWidth : -this.pageWidth 
        pageAnim.visibility = "visible"
        if (this.currentPageState != PageState.Home) this.pageAnimationOut(this.getCurrentView(), nextPageState)
        pageAnim.animate({translate: { x: 0, y: 0}, duration: 200, curve: AnimationCurve.easeIn})
        this.currentPageState = nextPageState
        bottomBarInteraction = true
   }
   private pageAnimationOut(pageAnim: View, nextPageState: PageState) {
       const finalPosition = nextPageState < this.currentPageState ? this.pageWidth : -this.pageWidth 
        pageAnim.animate({translate: { x: finalPosition, y: 0}, duration: 200, curve: AnimationCurve.easeIn}).then( () => {
            pageAnim.visibility = "collapse"
        })
    }

    private getCurrentView(): View {
        switch(this.currentPageState) {
            case PageState.Home: { 
                break
             } 
             case PageState.Adventure: {
                 return this.adventurePage
             }
             case PageState.Encounter: { 
                return this.encounterPage
             }
             case PageState.Tabern: { 
                //statements 
                break
             }
             
             default: { 
                console.log("getView Error")
                return
             }
        }
    }
}