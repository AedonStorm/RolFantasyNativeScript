"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("./home-view-model");
var observable_1 = require("tns-core-modules/data/observable");
var page;
var model;
function onNavigatingTo(args) {
    page = args.object;
    model = new home_view_model_1.HomeViewModel(page);
    page.bindingContext = loadList();
    var listView = page.getViewById("homeList");
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" });
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
}
exports.onNavigatingTo = onNavigatingTo;
function loadList() {
    return observable_1.fromObject({
        // Setting the listview binding source
        homeListItems: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
}
exports.loadList = loadList;
function onListViewLoaded(args) {
    var listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
function onItemTap(args) {
    var index = args.index;
    console.log("Second ListView item tap " + index);
}
exports.onItemTap = onItemTap;
function onTapHome(args) {
    var button = args.object;
    console.log("home");
    model.switchPage(home_view_model_1.pageState.Home);
}
exports.onTapHome = onTapHome;
function onTapAdventure(args) {
    var button = args.object;
    console.log("adventure");
    model.switchPage(home_view_model_1.pageState.Adventure);
}
exports.onTapAdventure = onTapAdventure;
function onTapEnemy(args) {
    var button = args.object;
    console.log("enemy");
    model.switchPage(home_view_model_1.pageState.Enemy);
}
exports.onTapEnemy = onTapEnemy;
function onTapDungeon(args) {
    var button = args.object;
    console.log("dungeon");
    model.switchPage(home_view_model_1.pageState.Dungeon);
}
exports.onTapDungeon = onTapDungeon;
function onTapTabern(args) {
    var button = args.object;
    console.log("tabern");
}
exports.onTapTabern = onTapTabern;
function onTapNPC(args) {
    var button = args.object;
    console.log("npc");
}
exports.onTapNPC = onTapNPC;
function onTapShop(args) {
    var button = args.object;
    console.log("shop");
}
exports.onTapShop = onTapShop;
function onTapChest(args) {
    var button = args.object;
    console.log("chest");
}
exports.onTapChest = onTapChest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLHFEQUE2RDtBQUM3RCwrREFBeUU7QUFNekUsSUFBSSxJQUFVLENBQUE7QUFDZCxJQUFJLEtBQW9CLENBQUE7QUFFeEIsd0JBQStCLElBQW1CO0lBQzlDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLEtBQUssR0FBRyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUVqQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFXLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDckUsOERBQThEO0lBQzlELFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBVEQsd0NBU0M7QUFFRDtJQUNJLE1BQU0sQ0FBQyx1QkFBVSxDQUFDO1FBQ2Qsc0NBQXNDO1FBQ3RDLGFBQWEsRUFBRTtZQUNYLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO1lBQzlCLEVBQUUsS0FBSyxFQUFFLHlDQUF5QyxFQUFFO1lBQ3BELEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtZQUMxQixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7WUFDMUIsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7WUFDM0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO1NBQzFCO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVpELDRCQVlDO0FBRUQsMEJBQWlDLElBQWU7SUFDNUMsSUFBTSxRQUFRLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxtQkFBMEIsSUFBbUI7SUFDekMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE0QixLQUFPLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBSEQsOEJBR0M7QUFFRCxtQkFBMEIsSUFBZTtJQUNyQyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3BDLENBQUM7QUFKRCw4QkFJQztBQUNELHdCQUErQixJQUFlO0lBQzFDLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLDJCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUpELHdDQUlDO0FBQ0Qsb0JBQTJCLElBQWU7SUFDdEMsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsMkJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNyQyxDQUFDO0FBSkQsZ0NBSUM7QUFDRCxzQkFBNkIsSUFBZTtJQUN4QyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3ZDLENBQUM7QUFKRCxvQ0FJQztBQUNELHFCQUE0QixJQUFlO0lBQ3ZDLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN6QixDQUFDO0FBSEQsa0NBR0M7QUFDRCxrQkFBeUIsSUFBZTtJQUNwQyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDdEIsQ0FBQztBQUhELDRCQUdDO0FBQ0QsbUJBQTBCLElBQWU7SUFDckMsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUM7QUFIRCw4QkFHQztBQUNELG9CQUEyQixJQUFlO0lBQ3RDLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN4QixDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEhvbWVWaWV3TW9kZWwsIHBhZ2VTdGF0ZSB9IGZyb20gXCIuL2hvbWUtdmlldy1tb2RlbFwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBMaXN0VmlldywgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5sZXQgcGFnZTogUGFnZVxubGV0IG1vZGVsOiBIb21lVmlld01vZGVsXG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIG1vZGVsID0gbmV3IEhvbWVWaWV3TW9kZWwocGFnZSk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGxvYWRMaXN0KCk7XG4gICAgXG4gICAgY29uc3QgbGlzdFZpZXcgPSBwYWdlLmdldFZpZXdCeUlkPExpc3RWaWV3PihcImhvbWVMaXN0XCIpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQuaG9tZUxpc3RJdGVtcy5wdXNoKHsgdGl0bGU6IFwiR2FtZSBvZiBUaHJvbmVzXCIgfSk7XG4gICAgLy8gTWFudWFsbHkgdHJpZ2dlciB0aGUgdXBkYXRlIHNvIHRoYXQgdGhlIG5ldyBjb2xvciBpcyBzaG93bi5cbiAgICBsaXN0Vmlldy5yZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTGlzdCgpIHtcbiAgICByZXR1cm4gZnJvbU9iamVjdCh7XG4gICAgICAgIC8vIFNldHRpbmcgdGhlIGxpc3R2aWV3IGJpbmRpbmcgc291cmNlXG4gICAgICAgIGhvbWVMaXN0SXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIERhIFZpbmNpIENvZGVcIiB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIiB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJUaGUgQWxjaGVtaXN0XCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEdvZGZhdGhlclwiIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkdvb2RuaWdodCBNb29uXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEhvYmJpdFwiIH1cbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25MaXN0Vmlld0xvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBsaXN0VmlldyA9IDxMaXN0Vmlldz5hcmdzLm9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwSG9tZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKVxuICAgIG1vZGVsLnN3aXRjaFBhZ2UocGFnZVN0YXRlLkhvbWUpXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBBZHZlbnR1cmUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcImFkdmVudHVyZVwiKVxuICAgIG1vZGVsLnN3aXRjaFBhZ2UocGFnZVN0YXRlLkFkdmVudHVyZSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEVuZW15KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJlbmVteVwiKVxuICAgIG1vZGVsLnN3aXRjaFBhZ2UocGFnZVN0YXRlLkVuZW15KVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwRHVuZ2VvbihhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiZHVuZ2VvblwiKVxuICAgIG1vZGVsLnN3aXRjaFBhZ2UocGFnZVN0YXRlLkR1bmdlb24pXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBUYWJlcm4oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcInRhYmVyblwiKVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwTlBDKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJucGNcIilcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcFNob3AoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcInNob3BcIilcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcENoZXN0KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJjaGVzdFwiKVxufSJdfQ==