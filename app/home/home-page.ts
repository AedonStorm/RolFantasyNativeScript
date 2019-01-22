/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "ui/page"
import { HomeViewModel, PageState } from "./home-view-model"
import { EventData, fromObject } from "tns-core-modules/data/observable"
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view"
import { Button } from "ui/button"
import * as firebase from "nativescript-plugin-firebase"

let page: Page
let homeViewModel: HomeViewModel

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object

    homeViewModel = new HomeViewModel(page)
    page.bindingContext = homeViewModel
    
    
    /*const listView = page.getViewById<ListView>("homeList")
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" })
    // Manually trigger the update so that the new color is shown.
    listView.refresh()*/

    firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    }).then(
        () => {
            console.log("firebase.init done")
        },
        error => {
            console.log(`firebase.init error: ${error}`)
    })

}

export function onListViewLoaded(args: EventData) {
    const listView = <ListView>args.object
}

export function onItemTap(args: ItemEventData) {
    const index = args.index
    console.log(`Second ListView item tap ${index}`)
}

export function onTapHome(args: EventData) {
    const button = <Button>args.object
    console.log("home")
    homeViewModel.switchPage(PageState.Home)
}
export function onTapAdventure(args: EventData) {
    const button = <Button>args.object
    console.log("adventure")
    homeViewModel.switchPage(PageState.Adventure)
}
export function onTapEncounter(args: EventData) {
    const button = <Button>args.object
    console.log("encounter")
    homeViewModel.switchPage(PageState.Encounter)
}
export function onTapTabern(args: EventData) {
    const button = <Button>args.object
    console.log("tabern")
    homeViewModel.switchPage(PageState.Tabern)
}