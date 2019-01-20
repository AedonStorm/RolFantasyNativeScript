"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const home_view_model_1 = require("./home-view-model");
const firebase = require("nativescript-plugin-firebase");
let page;
let homeViewModel;
function onNavigatingTo(args) {
    page = args.object;
    homeViewModel = new home_view_model_1.HomeViewModel(page);
    page.bindingContext = homeViewModel;
    /*const listView = page.getViewById<ListView>("homeList")
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" })
    // Manually trigger the update so that the new color is shown.
    listView.refresh()*/
    firebase.init({}).then(() => {
        console.log("firebase.init done");
        firebase.setValue('/adventure', { foo: 'bar' });
        // to store an array of JSON objects
        firebase.setValue('/adventure', [
            { name: 'title', text: '' },
            { name: 'type', text: '' },
            { name: 'description', text: '' },
            { name: 'context', text: '' },
            { name: 'hook', text: '' },
            { name: 'plot', text: '' },
            { name: 'goal', text: '' },
            { name: 'reward', text: '' }
        ]);
        firebase.getValue('/companies')
            .then(result => console.log(JSON.stringify(result)))
            .catch(error => console.log("Error: " + error));
        var onQueryEvent = function (result) {
            // note that the query returns 1 match at a time
            // in the order specified in the query
            if (!result.error) {
                console.log("Event type: " + result.type);
                console.log("Key: " + result.key);
                console.log("Value: " + JSON.stringify(result.value));
            }
        };
        firebase.query(onQueryEvent, "/companies", {
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
        });
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onListViewLoaded(args) {
    const listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
function onItemTap(args) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
exports.onItemTap = onItemTap;
function onTapHome(args) {
    const button = args.object;
    console.log("home");
    homeViewModel.switchPage(home_view_model_1.PageState.Home);
}
exports.onTapHome = onTapHome;
function onTapAdventure(args) {
    const button = args.object;
    console.log("adventure");
    homeViewModel.switchPage(home_view_model_1.PageState.Adventure);
}
exports.onTapAdventure = onTapAdventure;
function onTapEncounter(args) {
    const button = args.object;
    console.log("encounter");
    homeViewModel.switchPage(home_view_model_1.PageState.Encounter);
}
exports.onTapEncounter = onTapEncounter;
function onTapTabern(args) {
    const button = args.object;
    console.log("tabern");
    homeViewModel.switchPage(home_view_model_1.PageState.Tabern);
}
exports.onTapTabern = onTapTabern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLHVEQUE0RDtBQUk1RCx5REFBd0Q7QUFFeEQsSUFBSSxJQUFVLENBQUE7QUFDZCxJQUFJLGFBQTRCLENBQUE7QUFFaEMsd0JBQStCLElBQW1CO0lBQzlDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBRXhCLGFBQWEsR0FBRyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7SUFHbkM7Ozt3QkFHb0I7SUFFcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdiLENBQUMsQ0FBQyxJQUFJLENBQ1AsR0FBRyxFQUFFO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLFFBQVEsQ0FBQyxRQUFRLENBQ2IsWUFBWSxFQUNaLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxDQUNkLENBQUM7UUFFRixvQ0FBb0M7UUFDcEMsUUFBUSxDQUFDLFFBQVEsQ0FDYixZQUFZLEVBQ1o7WUFDRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUN6QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUUvQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUMzQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUMzQixDQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLFVBQVMsTUFBTTtZQUM5QixnREFBZ0Q7WUFDaEQsc0NBQXNDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFELENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixRQUFRLENBQUMsS0FBSyxDQUNWLFlBQVksRUFDWixZQUFZLEVBQ1o7WUFDSSxnR0FBZ0c7WUFDaEcsNkNBQTZDO1lBQzdDLDZFQUE2RTtZQUM3RSxXQUFXLEVBQUUsSUFBSTtZQUNqQiwyQkFBMkI7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQ0FBaUM7YUFDbkQ7WUFDRCw4RkFBOEY7WUFDOUYsdUJBQXVCO1lBQ3ZCLFVBQVU7WUFDViw2Q0FBNkM7WUFDN0MsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTCxrQ0FBa0M7WUFDbEMsTUFBTSxFQUFFO2dCQUNOO29CQUNJLElBQUksRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVE7b0JBQ3RDLEtBQUssRUFBRSxJQUFJO2lCQUNkO2dCQUNEO29CQUNJLElBQUksRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU07b0JBQ3BDLEtBQUssRUFBRSxJQUFJO2lCQUNkO2FBQ0Y7WUFDRCwyQkFBMkI7WUFDM0IsaURBQWlEO1lBQ2pELEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNsQyxLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0osQ0FDSixDQUFDO0lBQ1YsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUM7QUFoR0Qsd0NBZ0dDO0FBRUQsMEJBQWlDLElBQWU7SUFDNUMsTUFBTSxRQUFRLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMxQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxtQkFBMEIsSUFBbUI7SUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3BELENBQUM7QUFIRCw4QkFHQztBQUVELG1CQUEwQixJQUFlO0lBQ3JDLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQixhQUFhLENBQUMsVUFBVSxDQUFDLDJCQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDNUMsQ0FBQztBQUpELDhCQUlDO0FBQ0Qsd0JBQStCLElBQWU7SUFDMUMsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hCLGFBQWEsQ0FBQyxVQUFVLENBQUMsMkJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNqRCxDQUFDO0FBSkQsd0NBSUM7QUFDRCx3QkFBK0IsSUFBZTtJQUMxQyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEIsYUFBYSxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ2pELENBQUM7QUFKRCx3Q0FJQztBQUNELHFCQUE0QixJQUFlO0lBQ3ZDLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQixhQUFhLENBQUMsVUFBVSxDQUFDLDJCQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDOUMsQ0FBQztBQUpELGtDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCJcbmltcG9ydCB7IEhvbWVWaWV3TW9kZWwsIFBhZ2VTdGF0ZSB9IGZyb20gXCIuL2hvbWUtdmlldy1tb2RlbFwiXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIlxuaW1wb3J0IHsgTGlzdFZpZXcsIEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiXG5cbmxldCBwYWdlOiBQYWdlXG5sZXQgaG9tZVZpZXdNb2RlbDogSG9tZVZpZXdNb2RlbFxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdFxuXG4gICAgaG9tZVZpZXdNb2RlbCA9IG5ldyBIb21lVmlld01vZGVsKHBhZ2UpXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGhvbWVWaWV3TW9kZWxcbiAgICBcbiAgICBcbiAgICAvKmNvbnN0IGxpc3RWaWV3ID0gcGFnZS5nZXRWaWV3QnlJZDxMaXN0Vmlldz4oXCJob21lTGlzdFwiKVxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQuaG9tZUxpc3RJdGVtcy5wdXNoKHsgdGl0bGU6IFwiR2FtZSBvZiBUaHJvbmVzXCIgfSlcbiAgICAvLyBNYW51YWxseSB0cmlnZ2VyIHRoZSB1cGRhdGUgc28gdGhhdCB0aGUgbmV3IGNvbG9yIGlzIHNob3duLlxuICAgIGxpc3RWaWV3LnJlZnJlc2goKSovXG5cbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICB9KS50aGVuKFxuICAgICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIilcbiAgICAgICAgZmlyZWJhc2Uuc2V0VmFsdWUoXG4gICAgICAgICAgICAnL2FkdmVudHVyZScsXG4gICAgICAgICAgICB7Zm9vOidiYXInfVxuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIC8vIHRvIHN0b3JlIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0c1xuICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcbiAgICAgICAgICAgICcvYWR2ZW50dXJlJyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAge25hbWU6ICd0aXRsZScsIHRleHQ6ICcnfSxcbiAgICAgICAgICAgICAge25hbWU6ICd0eXBlJywgdGV4dDogJyd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ2Rlc2NyaXB0aW9uJywgdGV4dDogJyd9LFxuXG4gICAgICAgICAgICAgIHtuYW1lOiAnY29udGV4dCcsIHRleHQ6ICcnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdob29rJywgdGV4dDogJyd9LFxuICAgICAgICAgICAgICB7bmFtZTogJ3Bsb3QnLCB0ZXh0OiAnJ30sXG4gICAgICAgICAgICAgIHtuYW1lOiAnZ29hbCcsIHRleHQ6ICcnfSxcbiAgICAgICAgICAgICAge25hbWU6ICdyZXdhcmQnLCB0ZXh0OiAnJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgKTtcblxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL2NvbXBhbmllcycpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcikpO1xuXG4gICAgICAgICAgICB2YXIgb25RdWVyeUV2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSB0aGF0IHRoZSBxdWVyeSByZXR1cm5zIDEgbWF0Y2ggYXQgYSB0aW1lXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIG9yZGVyIHNwZWNpZmllZCBpbiB0aGUgcXVlcnlcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IHR5cGU6IFwiICsgcmVzdWx0LnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktleTogXCIgKyByZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYWx1ZTogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIGZpcmViYXNlLnF1ZXJ5KFxuICAgICAgICAgICAgICAgIG9uUXVlcnlFdmVudCxcbiAgICAgICAgICAgICAgICBcIi9jb21wYW5pZXNcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgdG8gY2hlY2sgaWYgdGhlIHZhbHVlIGV4aXN0cyBvciBqdXN0IHdhbnQgdGhlIGV2ZW50IHRvIGZpcmUgb25jZVxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBzbyBpdCBsaXN0ZW5zIGNvbnRpbnVvdXNseS5cbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB3aGVuIHRydWUsIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIGRhdGEgaW4gdGhlIHByb21pc2UgYXMgd2VsbCFcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9yZGVyIGJ5IGNvbXBhbnkuY291bnRyeVxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLkNISUxELFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzaW5jZScgLy8gbWFuZGF0b3J5IHdoZW4gdHlwZSBpcyAnY2hpbGQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGNvbXBhbmllcyAnc2luY2UnIGEgY2VydGFpbiB5ZWFyIChUZWxlcmlrJ3MgdmFsdWUgaXMgMjAwMCwgd2hpY2ggaXMgaW1hZ2luYXJ5IGJ0dylcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIGVpdGhlciBhICdyYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgLy9yYW5nZToge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeVJhbmdlVHlwZS5FUVVBTF9UTyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgdmFsdWU6IDIwMDBcbiAgICAgICAgICAgICAgICAgICAgLy8vfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4gb3IgJ2NoYWluJyByYW5nZXMgbGlrZSB0aGlzOlxuICAgICAgICAgICAgICAgICAgICByYW5nZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLlF1ZXJ5UmFuZ2VUeXBlLlNUQVJUX0FULFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTk5OVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeVJhbmdlVHlwZS5FTkRfQVQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMDAwXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHRoZSBmaXJzdCAyIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gKG5vdGUgdGhhdCB0aGVyZSdzIG9ubHkgMSBpbiB0aGlzIGNhc2UgYW55d2F5KVxuICAgICAgICAgICAgICAgICAgICBsaW1pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlMaW1pdFR5cGUuTEFTVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0sXG4gICAgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGlzdFZpZXdMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgbGlzdFZpZXcgPSA8TGlzdFZpZXc+YXJncy5vYmplY3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmluZGV4XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEhvbWUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKVxuICAgIGhvbWVWaWV3TW9kZWwuc3dpdGNoUGFnZShQYWdlU3RhdGUuSG9tZSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEFkdmVudHVyZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0XG4gICAgY29uc29sZS5sb2coXCJhZHZlbnR1cmVcIilcbiAgICBob21lVmlld01vZGVsLnN3aXRjaFBhZ2UoUGFnZVN0YXRlLkFkdmVudHVyZSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEVuY291bnRlcihhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0XG4gICAgY29uc29sZS5sb2coXCJlbmNvdW50ZXJcIilcbiAgICBob21lVmlld01vZGVsLnN3aXRjaFBhZ2UoUGFnZVN0YXRlLkVuY291bnRlcilcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcFRhYmVybihhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0XG4gICAgY29uc29sZS5sb2coXCJ0YWJlcm5cIilcbiAgICBob21lVmlld01vZGVsLnN3aXRjaFBhZ2UoUGFnZVN0YXRlLlRhYmVybilcbn0iXX0=