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

let page: Page
let model: HomeViewModel

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object
    model = new HomeViewModel(page)
    page.bindingContext = loadList()
    
    const listView = page.getViewById<ListView>("homeList")
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" })
    // Manually trigger the update so that the new color is shown.
    listView.refresh()
}

export function loadList() {
    return fromObject({
        // Setting the listview binding source
        homeListItems: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
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
    model.switchPage(PageState.Home)
}
export function onTapAdventure(args: EventData) {
    const button = <Button>args.object
    console.log("adventure")
    model.switchPage(PageState.Adventure)
}
export function onTapEncounter(args: EventData) {
    const button = <Button>args.object
    console.log("encounter")
    model.switchPage(PageState.Encounter)
}
export function onTapTabern(args: EventData) {
    const button = <Button>args.object
    console.log("tabern")
    model.switchPage(PageState.Tabern)
}