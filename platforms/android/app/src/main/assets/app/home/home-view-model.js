"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var page_1 = require("tns-core-modules/ui/page/page");
var platform_1 = require("platform");
var enums_1 = require("tns-core-modules/ui/enums");
var AdventurePageController_1 = require("~/home/adventure-page/AdventurePageController");
var pageState;
(function (pageState) {
    pageState[pageState["Home"] = 0] = "Home";
    pageState[pageState["Adventure"] = 1] = "Adventure";
    pageState[pageState["Enemy"] = 2] = "Enemy";
    pageState[pageState["Tabern"] = 3] = "Tabern";
})(pageState = exports.pageState || (exports.pageState = {}));
var bottomBarInteraction = true;
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(page) {
        var _this = _super.call(this) || this;
        _this.currentPageState = pageState.Home;
        _this.activateButton = new page_1.Color(40, 255, 255, 255);
        _this.pageWidth = 0;
        _this.adventurePageController = null;
        _this.page = page;
        _this.pageWidth = platform_1.screen.mainScreen.widthDIPs;
        _this.adventurePage = page.getViewById("adventure-page");
        page.bindingContext = _this;
        return _this;
    }
    HomeViewModel.prototype.switchPage = function (newPageState) {
        if (newPageState != this.currentPageState && bottomBarInteraction) {
            bottomBarInteraction = false;
            var currentPageId = pageState[this.currentPageState];
            var newPageId = pageState[newPageState];
            this.page.getViewById("btn" + currentPageId).backgroundColor = new page_1.Color("transparent");
            this.page.getViewById("btn" + newPageId).backgroundColor = this.activateButton;
            switch (newPageState) {
                case pageState.Home: {
                    this.pageAnimationOut(this.getCurrentView());
                    break;
                }
                case pageState.Adventure: {
                    if (this.adventurePageController == null)
                        this.adventurePageController = new AdventurePageController_1.AdventurePageController;
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
                    console.log("SwitchPage Error");
                    return;
                }
            }
            this.currentPageState = newPageState;
        }
    };
    HomeViewModel.prototype.pageAnimationIn = function (pageAnim) {
        pageAnim.translateX = this.pageWidth;
        pageAnim.visibility = "visible";
        pageAnim.animate({ translate: { x: 0, y: 0 }, duration: 200, curve: enums_1.AnimationCurve.easeIn }).then(function () {
            bottomBarInteraction = true;
        });
    };
    HomeViewModel.prototype.pageAnimationOut = function (pageAnim) {
        pageAnim.animate({ translate: { x: -this.pageWidth, y: 0 }, duration: 200, curve: enums_1.AnimationCurve.easeIn }).then(function () {
            pageAnim.visibility = "collapse";
            bottomBarInteraction = true;
        });
    };
    HomeViewModel.prototype.getCurrentView = function () {
        switch (this.currentPageState) {
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
                console.log("getView Error");
                return;
            }
        }
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHNEQUFrRTtBQUNsRSxxQ0FBa0M7QUFDbEMsbURBQXlEO0FBQ3pELHlGQUF3RjtBQUV4RixJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIseUNBQUksQ0FBQTtJQUNKLG1EQUFTLENBQUE7SUFDVCwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUVELElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQ2hDO0lBQW1DLGlDQUFVO0lBV3pDLHVCQUFZLElBQVU7UUFBdEIsWUFDSSxpQkFBTyxTQUtWO1FBZkQsc0JBQWdCLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQTtRQUM1QyxvQkFBYyxHQUFVLElBQUksWUFBSyxDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELGVBQVMsR0FBRyxDQUFDLENBQUE7UUFFYiw2QkFBdUIsR0FBNEIsSUFBSSxDQUFBO1FBTW5ELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBQzVDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDOztJQUMvQixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsWUFBdUI7UUFDckMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDaEUsb0JBQW9C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dkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDOUIsQ0FBQztZQUNELEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixjQUFjO2dCQUNkLEtBQUssQ0FBQztZQUNULENBQUM7WUFDRCxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsY0FBYztnQkFDZCxLQUFLLENBQUM7WUFDVCxDQUFDO1lBRUQsU0FBUyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7Z0JBQzVCLE1BQU0sQ0FBQztZQUNWLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTdGRCxDQUFtQyx1QkFBVSxHQTZGNUM7QUE3Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IsIFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyIH0gZnJvbSBcIn4vaG9tZS9hZHZlbnR1cmUtcGFnZS9BZHZlbnR1cmVQYWdlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZW51bSBwYWdlU3RhdGUge1xuICAgIEhvbWUsXG4gICAgQWR2ZW50dXJlLFxuICAgIEVuZW15LFxuICAgIFRhYmVyblxufVxuXG5sZXQgYm90dG9tQmFySW50ZXJhY3Rpb24gPSB0cnVlO1xuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBcbiAgICBjdXJyZW50UGFnZVN0YXRlOiBwYWdlU3RhdGUgPSBwYWdlU3RhdGUuSG9tZVxuICAgIGFjdGl2YXRlQnV0dG9uOiBDb2xvciA9IG5ldyBDb2xvcig0MCwyNTUsMjU1LDI1NSk7XG4gICAgcGFnZTogUGFnZVxuICAgIHBhZ2VXaWR0aCA9IDBcblxuICAgIGFkdmVudHVyZVBhZ2VDb250cm9sbGVyOiBBZHZlbnR1cmVQYWdlQ29udHJvbGxlciA9IG51bGxcbiAgICBhZHZlbnR1cmVQYWdlOiBWaWV3XG5cblxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHNcbiAgICAgICAgdGhpcy5hZHZlbnR1cmVQYWdlID0gcGFnZS5nZXRWaWV3QnlJZChcImFkdmVudHVyZS1wYWdlXCIpXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB0aGlzO1xuICAgIH1cbiAgICAgICAgXG4gICAgcHVibGljIHN3aXRjaFBhZ2UobmV3UGFnZVN0YXRlOiBwYWdlU3RhdGUpIHtcbiAgICAgICAgaWYgKG5ld1BhZ2VTdGF0ZSAhPSB0aGlzLmN1cnJlbnRQYWdlU3RhdGUgJiYgYm90dG9tQmFySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIGJvdHRvbUJhckludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZUlkOiBzdHJpbmcgPSBwYWdlU3RhdGVbdGhpcy5jdXJyZW50UGFnZVN0YXRlXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2VJZDogc3RyaW5nID0gcGFnZVN0YXRlW25ld1BhZ2VTdGF0ZV07XG4gICAgICAgICAgICB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJidG5cIiArIGN1cnJlbnRQYWdlSWQpLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiYnRuXCIgKyBuZXdQYWdlSWQpLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYWN0aXZhdGVCdXR0b247XG5cbiAgICAgICAgICAgIHN3aXRjaChuZXdQYWdlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5Ib21lOiB7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VBbmltYXRpb25PdXQodGhpcy5nZXRDdXJyZW50VmlldygpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5BZHZlbnR1cmU6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkdmVudHVyZVBhZ2VDb250cm9sbGVyID09IG51bGwpICB0aGlzLmFkdmVudHVyZVBhZ2VDb250cm9sbGVyID0gbmV3IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VBbmltYXRpb25Jbih0aGlzLmFkdmVudHVyZVBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgY2FzZSBwYWdlU3RhdGUuRW5lbXk6IHsgXG4gICAgICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5UYWJlcm46IHsgXG4gICAgICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgZGVmYXVsdDogeyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTd2l0Y2hQYWdlIEVycm9yXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZVN0YXRlID0gbmV3UGFnZVN0YXRlO1xuICAgICAgICB9ICAgXG4gICB9XG5cbiAgIHByaXZhdGUgcGFnZUFuaW1hdGlvbkluKHBhZ2VBbmltOiBWaWV3KSB7XG4gICAgICAgIHBhZ2VBbmltLnRyYW5zbGF0ZVggPSB0aGlzLnBhZ2VXaWR0aDtcbiAgICAgICAgcGFnZUFuaW0udmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBwYWdlQW5pbS5hbmltYXRlKHt0cmFuc2xhdGU6IHsgeDogMCwgeTogMH0sIGR1cmF0aW9uOiAyMDAsIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW59KS50aGVuKGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgYm90dG9tQmFySW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgIH1cbiAgIHByaXZhdGUgcGFnZUFuaW1hdGlvbk91dChwYWdlQW5pbTogVmlldykge1xuICAgICAgICBwYWdlQW5pbS5hbmltYXRlKHt0cmFuc2xhdGU6IHsgeDogLXRoaXMucGFnZVdpZHRoLCB5OiAwfSwgZHVyYXRpb246IDIwMCwgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbn0pLnRoZW4oIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgcGFnZUFuaW0udmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIGJvdHRvbUJhckludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50VmlldygpOiBWaWV3IHtcbiAgICAgICAgc3dpdGNoKHRoaXMuY3VycmVudFBhZ2VTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBwYWdlU3RhdGUuSG9tZTogeyBcbiAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5BZHZlbnR1cmU6IHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWR2ZW50dXJlUGFnZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgY2FzZSBwYWdlU3RhdGUuRW5lbXk6IHsgXG4gICAgICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcbiAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGNhc2UgcGFnZVN0YXRlLlRhYmVybjogeyBcbiAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgZGVmYXVsdDogeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFZpZXcgRXJyb3JcIilcbiAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=