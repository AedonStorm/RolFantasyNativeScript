"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const observable_array_1 = require("tns-core-modules/data/observable-array");
const observable_property_decorator_1 = require("../shared/observable-property-decorator");
const page_1 = require("tns-core-modules/ui/page/page");
const platform_1 = require("platform");
const enums_1 = require("tns-core-modules/ui/enums");
const AdventurePageController_1 = require("~/home/adventure-page/AdventurePageController");
const EncounterPageController_1 = require("~/home/encounter-page/EncounterPageController");
var PageState;
(function (PageState) {
    PageState[PageState["Home"] = 0] = "Home";
    PageState[PageState["Adventure"] = 1] = "Adventure";
    PageState[PageState["Encounter"] = 2] = "Encounter";
    PageState[PageState["Tabern"] = 3] = "Tabern";
})(PageState = exports.PageState || (exports.PageState = {}));
let bottomBarInteraction = true;
class HomeViewModel extends observable_1.Observable {
    constructor(page) {
        super();
        this.currentPageState = PageState.Home;
        this.activateButton = new page_1.Color(40, 255, 255, 255);
        this.pageWidth = 0;
        this.adventurePageController = null;
        this.encounterageController = null;
        this.page = page;
        this.pageWidth = platform_1.screen.mainScreen.widthDIPs;
        this.adventurePage = page.getViewById("adventure-page");
        this.encounterPage = page.getViewById("encounter-page");
        this.homeListItems = new observable_array_1.ObservableArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    switchPage(nextPageState) {
        if (nextPageState != this.currentPageState && bottomBarInteraction) {
            //console.log("Current State: " + this.currentPageState.toString())
            //console.log("Next State: " + nextPageState.toString())
            bottomBarInteraction = false;
            const currentPageId = PageState[this.currentPageState];
            const newPageId = PageState[nextPageState];
            this.page.getViewById("hightlightedBtn").col = nextPageState;
            switch (nextPageState) {
                case PageState.Home: {
                    this.pageAnimationOut(this.getCurrentView(), nextPageState);
                    this.currentPageState = nextPageState;
                    bottomBarInteraction = true;
                    break;
                }
                case PageState.Adventure: {
                    if (this.adventurePageController == null)
                        this.adventurePageController = new AdventurePageController_1.AdventurePageController(this.adventurePage);
                    this.pageAnimationIn(this.adventurePage, nextPageState);
                    break;
                }
                case PageState.Encounter: {
                    if (this.encounterageController == null)
                        this.encounterageController = new EncounterPageController_1.EncounterPageController(this.encounterPage, this.pageWidth);
                    this.pageAnimationIn(this.encounterPage, nextPageState);
                    break;
                }
                case PageState.Tabern: {
                    //statements 
                    break;
                }
                default: {
                    console.log("SwitchPage Error");
                    return;
                }
            }
        }
    }
    pageAnimationIn(pageAnim, nextPageState) {
        pageAnim.translateX = nextPageState > this.currentPageState ? this.pageWidth : -this.pageWidth;
        pageAnim.visibility = "visible";
        if (this.currentPageState != PageState.Home)
            this.pageAnimationOut(this.getCurrentView(), nextPageState);
        pageAnim.animate({ translate: { x: 0, y: 0 }, duration: 200, curve: enums_1.AnimationCurve.easeIn });
        this.currentPageState = nextPageState;
        bottomBarInteraction = true;
    }
    pageAnimationOut(pageAnim, nextPageState) {
        const finalPosition = nextPageState < this.currentPageState ? this.pageWidth : -this.pageWidth;
        pageAnim.animate({ translate: { x: finalPosition, y: 0 }, duration: 200, curve: enums_1.AnimationCurve.easeIn }).then(() => {
            pageAnim.visibility = "collapse";
        });
    }
    getCurrentView() {
        switch (this.currentPageState) {
            case PageState.Home: {
                break;
            }
            case PageState.Adventure: {
                return this.adventurePage;
            }
            case PageState.Encounter: {
                return this.encounterPage;
            }
            case PageState.Tabern: {
                //statements 
                break;
            }
            default: {
                console.log("getView Error");
                return;
            }
        }
    }
}
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", observable_array_1.ObservableArray)
], HomeViewModel.prototype, "homeListItems", void 0);
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTRDO0FBQzVDLDZFQUF5RTtBQUN6RSwyRkFBNkU7QUFDN0Usd0RBQWlFO0FBQ2pFLHVDQUFpQztBQUNqQyxxREFBMEQ7QUFDMUQsMkZBQXVGO0FBQ3ZGLDJGQUF1RjtBQUV2RixJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIseUNBQUksQ0FBQTtJQUNKLG1EQUFTLENBQUE7SUFDVCxtREFBUyxDQUFBO0lBQ1QsNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUVELElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFBO0FBQy9CLG1CQUEyQixTQUFRLHVCQUFVO0lBY3pDLFlBQVksSUFBVTtRQUNsQixLQUFLLEVBQUUsQ0FBQTtRQWJYLHFCQUFnQixHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUE7UUFDNUMsbUJBQWMsR0FBVSxJQUFJLFlBQUssQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUVqRCxjQUFTLEdBQUcsQ0FBQyxDQUFBO1FBRWIsNEJBQXVCLEdBQTRCLElBQUksQ0FBQTtRQUN2RCwyQkFBc0IsR0FBNEIsSUFBSSxDQUFBO1FBUWxELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBRTVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBRXZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFB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Q0FBQTtZQUNSLENBQUM7WUFFRCxTQUFTLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQkFDNUIsTUFBTSxDQUFBO1lBQ1QsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUF6RnlCO0lBQXJCLGtEQUFrQixFQUFFOzhCQUFnQixrQ0FBZTtvREFBUTtBQVpoRSxzQ0FxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IFBhZ2UsIENvbG9yLCBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCJcbmltcG9ydCB7IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyIH0gZnJvbSBcIn4vaG9tZS9hZHZlbnR1cmUtcGFnZS9BZHZlbnR1cmVQYWdlQ29udHJvbGxlclwiXG5pbXBvcnQgeyBFbmNvdW50ZXJQYWdlQ29udHJvbGxlciB9IGZyb20gXCJ+L2hvbWUvZW5jb3VudGVyLXBhZ2UvRW5jb3VudGVyUGFnZUNvbnRyb2xsZXJcIlxuXG5leHBvcnQgZW51bSBQYWdlU3RhdGUge1xuICAgIEhvbWUsXG4gICAgQWR2ZW50dXJlLFxuICAgIEVuY291bnRlcixcbiAgICBUYWJlcm5cbn1cblxubGV0IGJvdHRvbUJhckludGVyYWN0aW9uID0gdHJ1ZVxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBcbiAgICBjdXJyZW50UGFnZVN0YXRlOiBQYWdlU3RhdGUgPSBQYWdlU3RhdGUuSG9tZVxuICAgIGFjdGl2YXRlQnV0dG9uOiBDb2xvciA9IG5ldyBDb2xvcig0MCwyNTUsMjU1LDI1NSlcbiAgICBwYWdlOiBQYWdlXG4gICAgcGFnZVdpZHRoID0gMFxuXG4gICAgYWR2ZW50dXJlUGFnZUNvbnRyb2xsZXI6IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyID0gbnVsbFxuICAgIGVuY291bnRlcmFnZUNvbnRyb2xsZXI6IEVuY291bnRlclBhZ2VDb250cm9sbGVyID0gbnVsbFxuICAgIGFkdmVudHVyZVBhZ2U6IFZpZXdcbiAgICBlbmNvdW50ZXJQYWdlOiBWaWV3XG5cbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgaG9tZUxpc3RJdGVtczogT2JzZXJ2YWJsZUFycmF5PG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlXG4gICAgICAgIHRoaXMucGFnZVdpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzXG5cbiAgICAgICAgdGhpcy5hZHZlbnR1cmVQYWdlID0gcGFnZS5nZXRWaWV3QnlJZChcImFkdmVudHVyZS1wYWdlXCIpXG4gICAgICAgIHRoaXMuZW5jb3VudGVyUGFnZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJlbmNvdW50ZXItcGFnZVwiKVxuXG4gICAgICAgIHRoaXMuaG9tZUxpc3RJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8bnVtYmVyPihbMSwyLDMsNCw1LDYsNyw4LDldKVxuICAgIH1cbiAgICAgICAgXG4gICAgcHVibGljIHN3aXRjaFBhZ2UobmV4dFBhZ2VTdGF0ZTogUGFnZVN0YXRlKSB7XG4gICAgICAgIGlmIChuZXh0UGFnZVN0YXRlICE9IHRoaXMuY3VycmVudFBhZ2VTdGF0ZSAmJiBib3R0b21CYXJJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkN1cnJlbnQgU3RhdGU6IFwiICsgdGhpcy5jdXJyZW50UGFnZVN0YXRlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTmV4dCBTdGF0ZTogXCIgKyBuZXh0UGFnZVN0YXRlLnRvU3RyaW5nKCkpXG5cbiAgICAgICAgICAgIGJvdHRvbUJhckludGVyYWN0aW9uID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlSWQ6IHN0cmluZyA9IFBhZ2VTdGF0ZVt0aGlzLmN1cnJlbnRQYWdlU3RhdGVdXG4gICAgICAgICAgICBjb25zdCBuZXdQYWdlSWQ6IHN0cmluZyA9IFBhZ2VTdGF0ZVtuZXh0UGFnZVN0YXRlXVxuICAgICAgICAgICAgdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiaGlnaHRsaWdodGVkQnRuXCIpLmNvbCA9IG5leHRQYWdlU3RhdGVcbiAgICAgICAgICAgIHN3aXRjaChuZXh0UGFnZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuSG9tZTogeyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQW5pbWF0aW9uT3V0KHRoaXMuZ2V0Q3VycmVudFZpZXcoKSwgbmV4dFBhZ2VTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZVN0YXRlID0gbmV4dFBhZ2VTdGF0ZSBcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQmFySW50ZXJhY3Rpb24gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgIGNhc2UgUGFnZVN0YXRlLkFkdmVudHVyZTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWR2ZW50dXJlUGFnZUNvbnRyb2xsZXIgPT0gbnVsbCkgIHRoaXMuYWR2ZW50dXJlUGFnZUNvbnRyb2xsZXIgPSBuZXcgQWR2ZW50dXJlUGFnZUNvbnRyb2xsZXIodGhpcy5hZHZlbnR1cmVQYWdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VBbmltYXRpb25Jbih0aGlzLmFkdmVudHVyZVBhZ2UsIG5leHRQYWdlU3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuRW5jb3VudGVyOiB7IFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmNvdW50ZXJhZ2VDb250cm9sbGVyID09IG51bGwpICB0aGlzLmVuY291bnRlcmFnZUNvbnRyb2xsZXIgPSBuZXcgRW5jb3VudGVyUGFnZUNvbnRyb2xsZXIodGhpcy5lbmNvdW50ZXJQYWdlLCB0aGlzLnBhZ2VXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQW5pbWF0aW9uSW4odGhpcy5lbmNvdW50ZXJQYWdlLCBuZXh0UGFnZVN0YXRlKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGNhc2UgUGFnZVN0YXRlLlRhYmVybjogeyBcbiAgICAgICAgICAgICAgICAgICAgLy9zdGF0ZW1lbnRzIFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN3aXRjaFBhZ2UgRXJyb3JcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIHBhZ2VBbmltYXRpb25JbihwYWdlQW5pbTogVmlldywgbmV4dFBhZ2VTdGF0ZTogUGFnZVN0YXRlKSB7XG4gICAgICAgIHBhZ2VBbmltLnRyYW5zbGF0ZVggPSBuZXh0UGFnZVN0YXRlID4gdGhpcy5jdXJyZW50UGFnZVN0YXRlID8gdGhpcy5wYWdlV2lkdGggOiAtdGhpcy5wYWdlV2lkdGggXG4gICAgICAgIHBhZ2VBbmltLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVN0YXRlICE9IFBhZ2VTdGF0ZS5Ib21lKSB0aGlzLnBhZ2VBbmltYXRpb25PdXQodGhpcy5nZXRDdXJyZW50VmlldygpLCBuZXh0UGFnZVN0YXRlKVxuICAgICAgICBwYWdlQW5pbS5hbmltYXRlKHt0cmFuc2xhdGU6IHsgeDogMCwgeTogMH0sIGR1cmF0aW9uOiAyMDAsIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW59KVxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlU3RhdGUgPSBuZXh0UGFnZVN0YXRlXG4gICAgICAgIGJvdHRvbUJhckludGVyYWN0aW9uID0gdHJ1ZVxuICAgfVxuICAgcHJpdmF0ZSBwYWdlQW5pbWF0aW9uT3V0KHBhZ2VBbmltOiBWaWV3LCBuZXh0UGFnZVN0YXRlOiBQYWdlU3RhdGUpIHtcbiAgICAgICBjb25zdCBmaW5hbFBvc2l0aW9uID0gbmV4dFBhZ2VTdGF0ZSA8IHRoaXMuY3VycmVudFBhZ2VTdGF0ZSA/IHRoaXMucGFnZVdpZHRoIDogLXRoaXMucGFnZVdpZHRoIFxuICAgICAgICBwYWdlQW5pbS5hbmltYXRlKHt0cmFuc2xhdGU6IHsgeDogZmluYWxQb3NpdGlvbiwgeTogMH0sIGR1cmF0aW9uOiAyMDAsIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW59KS50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlQW5pbS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50VmlldygpOiBWaWV3IHtcbiAgICAgICAgc3dpdGNoKHRoaXMuY3VycmVudFBhZ2VTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuSG9tZTogeyBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuQWR2ZW50dXJlOiB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkdmVudHVyZVBhZ2VcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuRW5jb3VudGVyOiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY291bnRlclBhZ2VcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgY2FzZSBQYWdlU3RhdGUuVGFiZXJuOiB7IFxuICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50cyBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBkZWZhdWx0OiB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VmlldyBFcnJvclwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=