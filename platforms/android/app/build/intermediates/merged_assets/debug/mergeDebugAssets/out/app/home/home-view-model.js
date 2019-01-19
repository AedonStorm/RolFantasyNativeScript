"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var page_1 = require("tns-core-modules/ui/page/page");
var AdventurePageController_1 = require("~/controller/AdventurePageController");
var pageState;
(function (pageState) {
    pageState[pageState["Home"] = 0] = "Home";
    pageState[pageState["Adventure"] = 1] = "Adventure";
    pageState[pageState["Enemy"] = 2] = "Enemy";
    pageState[pageState["Dungeon"] = 3] = "Dungeon";
})(pageState = exports.pageState || (exports.pageState = {}));
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(page) {
        var _this = _super.call(this) || this;
        _this.currentPageState = pageState.Home;
        _this.activateButton = new page_1.Color(40, 255, 255, 255);
        _this.adventurePageController = null;
        _this.page = page;
        page.bindingContext = _this;
        return _this;
    }
    HomeViewModel.prototype.switchPage = function (newPageState) {
        if (newPageState != this.currentPageState) {
            var currentPageId = pageState[this.currentPageState];
            var newPageId = pageState[newPageState];
            this.page.getViewById("btn" + currentPageId).backgroundColor = new page_1.Color("transparent");
            this.page.getViewById("btn" + newPageId).backgroundColor = this.activateButton;
            //this.page.getViewById<Image>("btn"+currentPageId).backgroundColor = "blue";
            //this.page.getViewById<Image>("btn"+newPageId).backgroundColor = this.activateButton;
            switch (this.currentPageState) {
                case pageState.Home: {
                    //statements; 
                    break;
                }
                case pageState.Adventure: {
                    if (this.adventurePageController == null)
                        this.adventurePageController = new AdventurePageController_1.AdventurePageController;
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
                    console.log("SwitchPage Error");
                    break;
                }
            }
            this.currentPageState = newPageState;
        }
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHNEQUFrRTtBQUVsRSxnRkFBK0U7QUFFL0UsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFJLENBQUE7SUFDSixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLCtDQUFPLENBQUE7QUFDWCxDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFRDtJQUFtQyxpQ0FBVTtJQVF6Qyx1QkFBWSxJQUFVO1FBQXRCLFlBQ0ksaUJBQU8sU0FHVjtRQVZELHNCQUFnQixHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUE7UUFDNUMsb0JBQWMsR0FBVSxJQUFJLFlBQUssQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUdsRCw2QkFBdUIsR0FBNEIsSUFBSSxDQUFBO1FBSW5ELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDOztJQUMvQixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsWUFBdUI7UUFDckMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFFeEMsSUFBTSxhQUFhLEdBQVcsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9ELElBQU0sU0FBUyxHQUFXLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBTyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksWUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFPLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNyRiw2RUFBNkU7WUFDN0Usc0ZBQXNGO1lBRXRGLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQixjQUFjO29CQUNkLEtBQUssQ0FBQztnQkFDVCxDQUFDO2dCQUNELEtBQUssU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLElBQUksSUFBSSxDQUFDO3dCQUFFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixDQUFDO29CQUN0RyxLQUFLLENBQUM7Z0JBQ1QsQ0FBQztnQkFDRCxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDcEIsY0FBYztvQkFDZCxLQUFLLENBQUM7Z0JBQ1QsQ0FBQztnQkFDRCxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdEIsY0FBYztvQkFDZCxLQUFLLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxTQUFTLENBQUM7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO29CQUMvQixLQUFLLENBQUM7Z0JBQ1QsQ0FBQztZQUNOLENBQUM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1FBQ3pDLENBQUM7SUFDTixDQUFDO0lBQ0osb0JBQUM7QUFBRCxDQUFDLEFBbkRELENBQW1DLHVCQUFVLEdBbUQ1QztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlLCBDb2xvciwgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyIH0gZnJvbSBcIn4vY29udHJvbGxlci9BZHZlbnR1cmVQYWdlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZW51bSBwYWdlU3RhdGUge1xuICAgIEhvbWUsXG4gICAgQWR2ZW50dXJlLFxuICAgIEVuZW15LFxuICAgIER1bmdlb25cbn1cblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBcbiAgICBjdXJyZW50UGFnZVN0YXRlOiBwYWdlU3RhdGUgPSBwYWdlU3RhdGUuSG9tZVxuICAgIGFjdGl2YXRlQnV0dG9uOiBDb2xvciA9IG5ldyBDb2xvcig0MCwyNTUsMjU1LDI1NSk7XG4gICAgcGFnZTogUGFnZVxuXG4gICAgYWR2ZW50dXJlUGFnZUNvbnRyb2xsZXI6IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdGhpcztcbiAgICB9XG4gICAgICAgIFxuICAgIHB1YmxpYyBzd2l0Y2hQYWdlKG5ld1BhZ2VTdGF0ZTogcGFnZVN0YXRlKSB7XG4gICAgICAgIGlmIChuZXdQYWdlU3RhdGUgIT0gdGhpcy5jdXJyZW50UGFnZVN0YXRlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlSWQ6IHN0cmluZyA9IHBhZ2VTdGF0ZVt0aGlzLmN1cnJlbnRQYWdlU3RhdGVdO1xuICAgICAgICAgICAgY29uc3QgbmV3UGFnZUlkOiBzdHJpbmcgPSBwYWdlU3RhdGVbbmV3UGFnZVN0YXRlXTtcbiAgICAgICAgICAgIHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImJ0blwiICsgY3VycmVudFBhZ2VJZCkuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJidG5cIiArIG5ld1BhZ2VJZCkuYmFja2dyb3VuZENvbG9yID0gdGhpcy5hY3RpdmF0ZUJ1dHRvbjtcbiAgICAgICAgICAgIC8vdGhpcy5wYWdlLmdldFZpZXdCeUlkPEltYWdlPihcImJ0blwiK2N1cnJlbnRQYWdlSWQpLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgLy90aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8SW1hZ2U+KFwiYnRuXCIrbmV3UGFnZUlkKS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmFjdGl2YXRlQnV0dG9uO1xuXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5jdXJyZW50UGFnZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBwYWdlU3RhdGUuSG9tZTogeyBcbiAgICAgICAgICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5BZHZlbnR1cmU6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkdmVudHVyZVBhZ2VDb250cm9sbGVyID09IG51bGwpICB0aGlzLmFkdmVudHVyZVBhZ2VDb250cm9sbGVyID0gbmV3IEFkdmVudHVyZVBhZ2VDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgY2FzZSBwYWdlU3RhdGUuRW5lbXk6IHsgXG4gICAgICAgICAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBjYXNlIHBhZ2VTdGF0ZS5EdW5nZW9uOiB7IFxuICAgICAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxuICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3dpdGNoUGFnZSBFcnJvclwiKVxuICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZVN0YXRlID0gbmV3UGFnZVN0YXRlO1xuICAgICAgICB9ICAgXG4gICB9XG59XG5cblxuXG5cblxuXG5cblxuIl19