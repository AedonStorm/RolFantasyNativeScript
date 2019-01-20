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
        firebase.setValue(
            '/adventure',
            {foo:'bar'}
        );
      
        // to store an array of JSON objects
        firebase.setValue(
            '/adventure',
            [
              {name: 'title', text: ''},
              {name: 'type', text: ''},
              {name: 'description', text: ''},

              {name: 'context', text: ''},
              {name: 'hook', text: ''},
              {name: 'plot', text: ''},
              {name: 'goal', text: ''},
              {name: 'reward', text: ''}
            ]
        );

        firebase.getValue('/companies')
            .then(result => console.log(JSON.stringify(result)))
            .catch(error => console.log("Error: " + error));

            var onQueryEvent = function(result) {
                // note that the query returns 1 match at a time
                // in the order specified in the query
                if (!result.error) {
                    console.log("Event type: " + result.type);
                    console.log("Key: " + result.key);
                    console.log("Value: " + JSON.stringify(result.value));
                }
            };
        
            firebase.query(
                onQueryEvent,
                "/companies",
                {
                    // set this to true if you want to check if the value exists or just want the event to fire once
                    // default false, so it listens continuously.
                    // Only when true, this function will return the data in the promise as well!
                    singleEvent: true,
                    // order by company.country
                    orderBy: {
                        type: firebase.QueryOrderByType.CHILD,
                        value: 'since' // mandatory when type is 'child'
                    },
                    // but only companies 'since' a certain year (Telerik's value is 2000, which is imaginary btw)
                    // use either a 'range'
                    //range: {
                    //    type: firebase.QueryRangeType.EQUAL_TO,
                    //    value: 2000
                    ///},
                    // .. or 'chain' ranges like this:
                    ranges: [
                      {
                          type: firebase.QueryRangeType.START_AT,
                          value: 1999
                      },
                      {
                          type: firebase.QueryRangeType.END_AT,
                          value: 2000
                      }
                    ],
                    // only the first 2 matches
                    // (note that there's only 1 in this case anyway)
                    limit: {
                        type: firebase.QueryLimitType.LAST,
                        value: 2
                    }
                }
            );
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