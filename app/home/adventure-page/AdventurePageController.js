"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const observable_property_decorator_1 = require("../../shared/observable-property-decorator");
const firebase = require("nativescript-plugin-firebase");
const AdventureClass_1 = require("../adventure-page/AdventureClass");
let adventureObj = null;
let adventureView;
class AdventurePageController extends observable_1.Observable {
    constructor(adventurePage) {
        super();
        adventureView = adventurePage;
        if (adventureObj == null) {
            adventureObj = new AdventureClass_1.Adventure();
            var onChildThemeEvent = function (result) {
                const json = JSON.parse(JSON.stringify(result.value));
                adventureObj.themes.add(new AdventureClass_1.Theme(json.title, json.body));
                //console.log(JSON.stringify(result.value))
            };
            var onChildClimaxEvent = function (result) {
                const json = JSON.parse(JSON.stringify(result.value));
                adventureObj.climax.add(new AdventureClass_1.Climax(json.title, json.body));
                //console.log(JSON.stringify(result.value))
            };
            var onChildHookEvent = function (result) {
                const json = JSON.parse(JSON.stringify(result.value));
                adventureObj.hooks.add(new AdventureClass_1.Hook(json.title, json.body));
                //console.log(JSON.stringify(result.value))
            };
            var onChildPlotEvent = function (result) {
                const json = JSON.parse(JSON.stringify(result.value));
                adventureObj.plots.add(new AdventureClass_1.Plot(json.title, json.body));
                //console.log(JSON.stringify(result.value))
            };
            var onChildGoalEvent = function (result) {
                const json = JSON.parse(JSON.stringify(result.value));
                adventureObj.goals.add(new AdventureClass_1.Goal(json.title, json.body));
                //console.log(JSON.stringify(result.value))
            };
            firebase.addChildEventListener(onChildThemeEvent, "/adventure/themes");
            firebase.addChildEventListener(onChildClimaxEvent, "/adventure/climax");
            firebase.addChildEventListener(onChildHookEvent, "/adventure/hooks");
            firebase.addChildEventListener(onChildPlotEvent, "/adventure/plots");
            firebase.addChildEventListener(onChildGoalEvent, "/adventure/goals");
        }
        adventureView.bindingContext = this;
        setTimeout(() => {
            this.tapRandomize();
        }, 1000);
    }
    tapRandomize() {
        const theme = adventureObj.themes.randomItem();
        if (theme != null) {
            this.adventureType = theme.title;
            this.adventureDescription = theme.body;
        }
        const climax = adventureObj.climax.randomItem();
        if (climax != null) {
            this.adventureClimaxTitle = climax.title;
            this.adventureClimax = climax.body;
        }
        const hook = adventureObj.hooks.randomItem();
        if (hook != null) {
            this.adventureHookTitle = hook.title;
            this.adventureHook = hook.body;
        }
        const plot = adventureObj.plots.randomItem();
        if (plot != null) {
            this.adventurePlotTitle = plot.title;
            this.adventurePlot = plot.body;
        }
        const goal = adventureObj.goals.randomItem();
        if (goal != null) {
            this.adventureGoalTitle = goal.title;
            this.adventureGoal = goal.body;
        }
        adventureView.bindingContext = this;
    }
}
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureType", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureDescription", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureClimaxTitle", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureClimax", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureHookTitle", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureHook", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventurePlotTitle", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventurePlot", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureGoalTitle", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureGoal", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], AdventurePageController.prototype, "adventureReward", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdventurePageController.prototype, "tapRandomize", null);
exports.AdventurePageController = AdventurePageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2ZW50dXJlUGFnZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBZHZlbnR1cmVQYWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUE0QztBQUM1Qyw4RkFBZ0Y7QUFFaEYseURBQXdEO0FBRXhELHFFQUE2RjtBQUU3RixJQUFJLFlBQVksR0FBYyxJQUFJLENBQUE7QUFDbEMsSUFBSSxhQUFtQixDQUFBO0FBQ3ZCLDZCQUFxQyxTQUFRLHVCQUFVO0lBbUJuRCxZQUFZLGFBQW1CO1FBQzNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUM3QixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZLEdBQUcsSUFBSSwwQkFBUyxFQUFFLENBQUE7WUFFOUIsSUFBSSxpQkFBaUIsR0FBRyxVQUFTLE1BQU07Z0JBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtnQkFDckQsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxzQkFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELDJDQUEyQztZQUMvQyxDQUFDLENBQUE7WUFDRCxJQUFJLGtCQUFrQixHQUFHLFVBQVMsTUFBTTtnQkFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUNyRCxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHVCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQkFD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QUFyQixrREFBa0IsRUFBRTs7OzsyREE4QnBCO0FBN0ZMLDBEQThGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCJcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCJcclxuXHJcbmltcG9ydCB7IEFkdmVudHVyZSwgVGhlbWUsIENsaW1heCwgSG9vaywgR29hbCwgUGxvdCB9IGZyb20gXCIuLi9hZHZlbnR1cmUtcGFnZS9BZHZlbnR1cmVDbGFzc1wiXHJcblxyXG5sZXQgYWR2ZW50dXJlT2JqOiBBZHZlbnR1cmUgPSBudWxsXHJcbmxldCBhZHZlbnR1cmVWaWV3OiBWaWV3XHJcbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVQYWdlQ29udHJvbGxlciBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVUeXBlOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVEZXNjcmlwdGlvbjogc3RyaW5nXHJcblxyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGFkdmVudHVyZUNsaW1heFRpdGxlOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVDbGltYXg6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVIb29rVGl0bGU6IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGFkdmVudHVyZUhvb2s6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVQbG90VGl0bGU6IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGFkdmVudHVyZVBsb3Q6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBhZHZlbnR1cmVHb2FsVGl0bGU6IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGFkdmVudHVyZUdvYWw6IHN0cmluZ1xyXG4gICAgXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgYWR2ZW50dXJlUmV3YXJkOiBzdHJpbmdcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoYWR2ZW50dXJlUGFnZTogVmlldykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgYWR2ZW50dXJlVmlldyA9IGFkdmVudHVyZVBhZ2VcclxuICAgICAgICBpZiAoYWR2ZW50dXJlT2JqID09IG51bGwpIHtcclxuICAgICAgICAgICAgYWR2ZW50dXJlT2JqID0gbmV3IEFkdmVudHVyZSgpXHJcblxyXG4gICAgICAgICAgICB2YXIgb25DaGlsZFRoZW1lRXZlbnQgPSBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICBhZHZlbnR1cmVPYmoudGhlbWVzLmFkZChuZXcgVGhlbWUoanNvbi50aXRsZSwganNvbi5ib2R5KSlcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb25DaGlsZENsaW1heEV2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgYWR2ZW50dXJlT2JqLmNsaW1heC5hZGQobmV3IENsaW1heChqc29uLnRpdGxlLCBqc29uLmJvZHkpKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvbkNoaWxkSG9va0V2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgYWR2ZW50dXJlT2JqLmhvb2tzLmFkZChuZXcgSG9vayhqc29uLnRpdGxlLCBqc29uLmJvZHkpKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvbkNoaWxkUGxvdEV2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgYWR2ZW50dXJlT2JqLnBsb3RzLmFkZChuZXcgUGxvdChqc29uLnRpdGxlLCBqc29uLmJvZHkpKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvbkNoaWxkR29hbEV2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgYWR2ZW50dXJlT2JqLmdvYWxzLmFkZChuZXcgR29hbChqc29uLnRpdGxlLCBqc29uLmJvZHkpKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZENoaWxkRXZlbnRMaXN0ZW5lcihvbkNoaWxkVGhlbWVFdmVudCwgXCIvYWR2ZW50dXJlL3RoZW1lc1wiKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRDaGlsZEV2ZW50TGlzdGVuZXIob25DaGlsZENsaW1heEV2ZW50LCBcIi9hZHZlbnR1cmUvY2xpbWF4XCIpXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZENoaWxkRXZlbnRMaXN0ZW5lcihvbkNoaWxkSG9va0V2ZW50LCBcIi9hZHZlbnR1cmUvaG9va3NcIilcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkQ2hpbGRFdmVudExpc3RlbmVyKG9uQ2hpbGRQbG90RXZlbnQsIFwiL2FkdmVudHVyZS9wbG90c1wiKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRDaGlsZEV2ZW50TGlzdGVuZXIob25DaGlsZEdvYWxFdmVudCwgXCIvYWR2ZW50dXJlL2dvYWxzXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZHZlbnR1cmVWaWV3LmJpbmRpbmdDb250ZXh0ID0gdGhpc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcFJhbmRvbWl6ZSgpXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIHRhcFJhbmRvbWl6ZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSAgYWR2ZW50dXJlT2JqLnRoZW1lcy5yYW5kb21JdGVtKClcclxuICAgICAgICBpZiAodGhlbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZVR5cGUgPSB0aGVtZS50aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZURlc2NyaXB0aW9uID0gdGhlbWUuYm9keVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xpbWF4ID0gIGFkdmVudHVyZU9iai5jbGltYXgucmFuZG9tSXRlbSgpXHJcbiAgICAgICAgaWYgKGNsaW1heCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlQ2xpbWF4VGl0bGUgPSBjbGltYXgudGl0bGVcclxuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVDbGltYXggPSBjbGltYXguYm9keVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBob29rID0gIGFkdmVudHVyZU9iai5ob29rcy5yYW5kb21JdGVtKClcclxuICAgICAgICBpZiAoaG9vayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlSG9va1RpdGxlID0gaG9vay50aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUhvb2sgPSBob29rLmJvZHlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGxvdCA9ICBhZHZlbnR1cmVPYmoucGxvdHMucmFuZG9tSXRlbSgpXHJcbiAgICAgICAgaWYgKHBsb3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZVBsb3RUaXRsZSA9IHBsb3QudGl0bGVcclxuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVQbG90ID0gcGxvdC5ib2R5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdvYWwgPSAgYWR2ZW50dXJlT2JqLmdvYWxzLnJhbmRvbUl0ZW0oKVxyXG4gICAgICAgIGlmIChnb2FsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVHb2FsVGl0bGUgPSBnb2FsLnRpdGxlXHJcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR29hbCA9IGdvYWwuYm9keVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWR2ZW50dXJlVmlldy5iaW5kaW5nQ29udGV4dCA9IHRoaXNcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==