"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const observable_array_1 = require("data/observable-array");
const observable_property_decorator_1 = require("../../shared/observable-property-decorator");
const http_1 = require("tns-core-modules/http");
const EncounterFilterController_1 = require("~/home/encounter-page/EncounterFilterController");
const enums_1 = require("tns-core-modules/ui/enums");
const baseUrl = 'http://www.dnd5eapi.co/api/monsters/';
const size = 325;
let encounterView;
class EncounterPageController extends observable_1.Observable {
    constructor(encounterPage, pageWidth) {
        super();
        this.specialAbilitiesItems = new observable_array_1.ObservableArray();
        this.actionsItems = new observable_array_1.ObservableArray();
        this.legendaryActionsItems = new observable_array_1.ObservableArray();
        /******* Filter Page *******/
        this.dropDownChallenge = new observable_array_1.ObservableArray(["-", "Easy", "Medium", "Hard", "Deadly"]);
        this.dropDownBioma = new observable_array_1.ObservableArray(["-", "Plains", "Forest", "Hills", "Mountains", "Marsh", "Desert", "Underground",
            "Aquatic", "Underdark", "Abyss", "Nine Hells", "Gehenna"
        ]);
        this.encounterFilterController = null;
        this.pageWidth = 0;
        this.pageWidth = pageWidth;
        encounterView = encounterPage;
        this.encounterFilterPage = encounterPage.getViewById("filter-page");
        this.encounterFilterBackground = encounterPage.getViewById("filter-background");
        this.encounterFilterController = new EncounterFilterController_1.EncounterFilterController(this.encounterFilterPage);
        this.tapRandomize();
        encounterView.bindingContext = this;
    }
    tapRandomize() {
        const randomEntry = Math.floor(Math.random() * 325);
        var options = {
            uri: baseUrl + randomEntry,
        };
        http_1.request({
            url: options.uri,
            method: "GET"
        }).then((response) => {
            //console.log(response.content)
            const resultJson = response.content.toJSON();
            this.encounterName = resultJson.name;
            this.encounterSize = resultJson.size + " ";
            this.encounterType = resultJson.type;
            this.encounterSubtype = resultJson.subtype != "" ? ", " + resultJson.subtype : "";
            this.encounterAlignment = resultJson.alignment;
            this.encounterArmorClass = resultJson.armor_class;
            this.encounterHitPoints = resultJson.hit_points;
            this.encounterChallengeRating = resultJson.challenge_rating != null ? resultJson.challenge_rating : "-";
            this.encounterSpeed = resultJson.speed;
            this.encounterStrength = resultJson.strength;
            this.encounterDexterity = resultJson.dexterity;
            this.encounterConstitution = resultJson.constitution;
            this.encounterIntelligence = resultJson.intelligence;
            this.encounterWisdom = resultJson.wisdom;
            this.encounterSaveConstitution = resultJson.constitution_save != null ? "CON +" + resultJson.constitution_save : "-";
            this.encounterSaveIntelligence = resultJson.intelligence_save != null ? "INT +" + resultJson.intelligence_save : "-";
            this.encounterSaveWisdom = resultJson.wisdom_save != null ? "WIS +" + resultJson.wisdom_save : "-";
            //@ObservableProperty() encounterSkills= resultJson.
            this.encounterSenses = resultJson.senses;
            this.encounterLanguajes = resultJson.languages != null ? resultJson.languages : "-";
            this.specialAbilitiesItems = resultJson.special_abilities;
            this.actionsItems = resultJson.actions;
            this.legendaryActionsItems = resultJson.legendary_actions;
            encounterView.bindingContext = this;
        }, (error) => {
            console.log("EncounterPage - Request error");
        });
    }
    openFilterPage() {
        this.encounterFilterPage.translateX = -this.pageWidth;
        this.encounterFilterBackground.opacity = 0;
        this.encounterFilterPage.visibility = "visible";
        this.encounterFilterBackground.visibility = "visible";
        this.encounterFilterPage.animate({ translate: { x: 0, y: 0 }, duration: 300, curve: enums_1.AnimationCurve.easeIn });
        this.encounterFilterBackground.animate({ opacity: 0.4, duration: 300, curve: enums_1.AnimationCurve.easeIn });
    }
    closeFilterPage() {
        const finalPosition = -this.pageWidth;
        this.encounterFilterBackground.opacity = 0.4;
        this.encounterFilterPage.animate({ translate: { x: finalPosition, y: 0 }, duration: 300, curve: enums_1.AnimationCurve.easeIn });
        this.encounterFilterBackground.animate({ opacity: 0, duration: 300, curve: enums_1.AnimationCurve.easeIn }).then(() => {
            this.encounterFilterPage.visibility = "collapse";
            this.encounterFilterBackground.visibility = "collapse";
        });
    }
}
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterName", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSize", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterType", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSubtype", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterAlignment", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterArmorClass", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterHitPoints", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterChallengeRating", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSpeed", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterStrength", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterDexterity", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterConstitution", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterIntelligence", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterWisdom", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterCharisma", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSaveConstitution", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSaveIntelligence", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSaveWisdom", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterSenses", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", String)
], EncounterPageController.prototype, "encounterLanguajes", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Object)
], EncounterPageController.prototype, "specialAbilitiesItems", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Object)
], EncounterPageController.prototype, "actionsItems", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Object)
], EncounterPageController.prototype, "legendaryActionsItems", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Object)
], EncounterPageController.prototype, "dropDownChallenge", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Object)
], EncounterPageController.prototype, "dropDownBioma", void 0);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EncounterPageController.prototype, "tapRandomize", null);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EncounterPageController.prototype, "openFilterPage", null);
__decorate([
    observable_property_decorator_1.ObservableProperty(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EncounterPageController.prototype, "closeFilterPage", null);
exports.EncounterPageController = EncounterPageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyUGFnZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbmNvdW50ZXJQYWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUE0QztBQUM1Qyw0REFBdUQ7QUFDdkQsOEZBQStFO0FBRS9FLGdEQUFzRjtBQUV0RiwrRkFBMkY7QUFDM0YscURBQTBEO0FBOEIxRCxNQUFNLE9BQU8sR0FBRyxzQ0FBc0MsQ0FBQztBQUN2RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUE7QUFFaEIsSUFBSSxhQUFtQixDQUFBO0FBQ3ZCLDZCQUFxQyxTQUFRLHVCQUFVO0lBZ0RuRCxZQUFZLGFBQW1CLEVBQUUsU0FBaUI7UUFDOUMsS0FBSyxFQUFFLENBQUE7UUFyQlcsMEJBQXFCLEdBQUcsSUFBSSxrQ0FBZSxFQUFVLENBQUE7UUFDckQsaUJBQVksR0FBRyxJQUFJLGtDQUFlLEVBQVUsQ0FBQTtRQUM1QywwQkFBcUIsR0FBRyxJQUFJLGtDQUFlLEVBQVUsQ0FBQTtRQUczRSw2QkFBNkI7UUFFUCxzQkFBaUIsR0FBRyxJQUFJLGtDQUFlLENBQVMsQ0FBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN2RixrQkFBYSxHQUFHLElBQUksa0NBQWUsQ0FDckQsQ0FBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYTtZQUM1RSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUztTQUN4RCxDQUFDLENBQUE7UUFHTiw4QkFBeUIsR0FBOEIsSUFBSSxDQUFBO1FBSTNELGNBQVMsR0FBRyxDQUFDLENBQUE7UUFJVCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQzdCLElB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LEVBQUU7O2tFQUEwQjtBQUN6QjtJQUFyQixrREFBa0IsRUFBRTs7bUVBQTJCO0FBQzFCO0lBQXJCLGtEQUFrQixFQUFFOztzRUFBOEI7QUFDN0I7SUFBckIsa0RBQWtCLEVBQUU7O3NFQUE4QjtBQUM3QjtJQUFyQixrREFBa0IsRUFBRTs7Z0VBQXdCO0FBQ3ZCO0lBQXJCLGtEQUFrQixFQUFFOztrRUFBMEI7QUFFekI7SUFBckIsa0RBQWtCLEVBQUU7OzBFQUFrQztBQUNqQztJQUFyQixrREFBa0IsRUFBRTs7MEVBQWtDO0FBQ2pDO0lBQXJCLGtEQUFrQixFQUFFOztvRUFBNEI7QUFHM0I7SUFBckIsa0RBQWtCLEVBQUU7O2dFQUF3QjtBQUN2QjtJQUFyQixrREFBa0IsRUFBRTs7bUVBQTJCO0FBRTFCO0lBQXJCLGtEQUFrQixFQUFFOztzRUFBc0Q7QUFDckQ7SUFBckIsa0RBQWtCLEVBQUU7OzZEQUE2QztBQUM1QztJQUFyQixrREFBa0IsRUFBRTs7c0VBQXNEO0FBS3JEO0lBQXJCLGtEQUFrQixFQUFFOztrRUFBd0Y7QUFDdkY7SUFBckIsa0RBQWtCLEVBQUU7OzhEQUdmO0FBc0JnQjtJQUFyQixrREFBa0IsRUFBRTs7OzsyREFnRHBCO0FBRXFCO0lBQXJCLGtEQUFrQixFQUFFOzs7OzZEQVNwQjtBQUVxQjtJQUFyQixrREFBa0IsRUFBRTs7Ozs4REFRcEI7QUFsSUwsMERBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIlxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCJcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiXHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIlxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiXHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0xpc3RcIlxyXG5pbXBvcnQgeyBFbmNvdW50ZXJGaWx0ZXJDb250cm9sbGVyIH0gZnJvbSBcIn4vaG9tZS9lbmNvdW50ZXItcGFnZS9FbmNvdW50ZXJGaWx0ZXJDb250cm9sbGVyXCJcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiXHJcblxyXG4vKmV4cG9ydCBjbGFzcyBBY3Rpb24ge1xyXG5cclxuICAgIGRhbWFnZUJvbnVzOiBOdW1iZXJcclxuICAgIGRhbWFnZURpY2U6IHN0cmluZ1xyXG4gICAgYXR0YWNrQm9udXM6IE51bWJlclxyXG4gICAgZGVzYzogc3RyaW5nXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgYXR0YWNCb251czogTnVtYmVyID0gMCwgZGFtYWdlRGljZTogc3RyaW5nID0gXCJcIiwgZGFtYWdlQm9udXM6IE51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzY1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQm9udXMgPSBhdHRhY0JvbnVzXHJcbiAgICAgICAgdGhpcy5kYW1hZ2VEaWNlID0gZGFtYWdlRGljZVxyXG4gICAgICAgIHRoaXMuZGFtYWdlQm9udXMgPSBkYW1hZ2VCb251c1xyXG4gICAgfVxyXG59Ki9cclxuXHJcbmludGVyZmFjZSBBY3Rpb24ge1xyXG4gICAgZGFtYWdlX2JvbnVzOiBOdW1iZXJcclxuICAgIGRhbWFnZV9kaWNlOiBzdHJpbmdcclxuICAgIGF0dGFja19ib251czogTnVtYmVyXHJcbiAgICBkZXNjOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly93d3cuZG5kNWVhcGkuY28vYXBpL21vbnN0ZXJzLyc7XHJcbmNvbnN0IHNpemUgPSAzMjVcclxuXHJcbmxldCBlbmNvdW50ZXJWaWV3OiBWaWV3XHJcbmV4cG9ydCBjbGFzcyBFbmNvdW50ZXJQYWdlQ29udHJvbGxlciBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJOYW1lOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJTaXplOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJUeXBlOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJTdWJ0eXBlOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJBbGlnbm1lbnQ6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJBcm1vckNsYXNzOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJIaXRQb2ludHM6IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlckNoYWxsZW5nZVJhdGluZzogc3RyaW5nXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZW5jb3VudGVyU3BlZWQ6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJTdHJlbmd0aDogc3RyaW5nXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZW5jb3VudGVyRGV4dGVyaXR5OiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJDb25zdGl0dXRpb246IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlckludGVsbGlnZW5jZTogc3RyaW5nXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZW5jb3VudGVyV2lzZG9tOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJDaGFyaXNtYTogc3RyaW5nXHJcblxyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlclNhdmVDb25zdGl0dXRpb246IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlclNhdmVJbnRlbGxpZ2VuY2U6IHN0cmluZ1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlclNhdmVXaXNkb206IHN0cmluZ1xyXG5cclxuICAgIC8vQE9ic2VydmFibGVQcm9wZXJ0eSgpIGVuY291bnRlclNraWxsczogc3RyaW5nXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZW5jb3VudGVyU2Vuc2VzOiBzdHJpbmdcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBlbmNvdW50ZXJMYW5ndWFqZXM6IHN0cmluZ1xyXG5cclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBzcGVjaWFsQWJpbGl0aWVzSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFjdGlvbj4oKVxyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGFjdGlvbnNJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8QWN0aW9uPigpXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgbGVnZW5kYXJ5QWN0aW9uc0l0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxBY3Rpb24+KClcclxuXHJcblxyXG4gICAgLyoqKioqKiogRmlsdGVyIFBhZ2UgKioqKioqKi9cclxuXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZHJvcERvd25DaGFsbGVuZ2UgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PHN0cmluZz4oW1wiLVwiLFwiRWFzeVwiLFwiTWVkaXVtXCIsXCJIYXJkXCIsIFwiRGVhZGx5XCJdKVxyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGRyb3BEb3duQmlvbWEgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PHN0cmluZz4oXHJcbiAgICAgICAgW1wiLVwiLFwiUGxhaW5zXCIsXCJGb3Jlc3RcIixcIkhpbGxzXCIsIFwiTW91bnRhaW5zXCIsIFwiTWFyc2hcIiwgXCJEZXNlcnRcIiwgXCJVbmRlcmdyb3VuZFwiLFxyXG4gICAgICAgICBcIkFxdWF0aWNcIiwgXCJVbmRlcmRhcmtcIiwgXCJBYnlzc1wiLCBcIk5pbmUgSGVsbHNcIiwgXCJHZWhlbm5hXCJcclxuICAgICAgICBdKVxyXG5cclxuXHJcbiAgICBlbmNvdW50ZXJGaWx0ZXJDb250cm9sbGVyOiBFbmNvdW50ZXJGaWx0ZXJDb250cm9sbGVyID0gbnVsbFxyXG4gICAgZW5jb3VudGVyRmlsdGVyUGFnZTogVmlld1xyXG4gICAgZW5jb3VudGVyRmlsdGVyQmFja2dyb3VuZDogVmlld1xyXG4gICAgXHJcbiAgICBwYWdlV2lkdGggPSAwXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5jb3VudGVyUGFnZTogVmlldywgcGFnZVdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5wYWdlV2lkdGggPSBwYWdlV2lkdGhcclxuICAgICAgICBlbmNvdW50ZXJWaWV3ID0gZW5jb3VudGVyUGFnZVxyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyUGFnZSA9IGVuY291bnRlclBhZ2UuZ2V0Vmlld0J5SWQoXCJmaWx0ZXItcGFnZVwiKVxyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyQmFja2dyb3VuZCA9IGVuY291bnRlclBhZ2UuZ2V0Vmlld0J5SWQoXCJmaWx0ZXItYmFja2dyb3VuZFwiKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyQ29udHJvbGxlciA9IG5ldyBFbmNvdW50ZXJGaWx0ZXJDb250cm9sbGVyKHRoaXMuZW5jb3VudGVyRmlsdGVyUGFnZSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRhcFJhbmRvbWl6ZSgpXHJcbiAgICAgICAgZW5jb3VudGVyVmlldy5iaW5kaW5nQ29udGV4dCA9IHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIHRhcFJhbmRvbWl6ZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tRW50cnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMjUpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB1cmk6IGJhc2VVcmwgKyByYW5kb21FbnRyeSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBvcHRpb25zLnVyaSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5jb250ZW50KVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRKc29uID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJOYW1lID0gcmVzdWx0SnNvbi5uYW1lXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyU2l6ZSA9IHJlc3VsdEpzb24uc2l6ZSArIFwiIFwiXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyVHlwZSA9IHJlc3VsdEpzb24udHlwZVxyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlclN1YnR5cGUgPSByZXN1bHRKc29uLnN1YnR5cGUgIT0gXCJcIiA/IFwiLCBcIiArIHJlc3VsdEpzb24uc3VidHlwZSA6IFwiXCJcclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJBbGlnbm1lbnQgPSByZXN1bHRKc29uLmFsaWdubWVudFxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJBcm1vckNsYXNzID0gcmVzdWx0SnNvbi5hcm1vcl9jbGFzc1xyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlckhpdFBvaW50cyA9IHJlc3VsdEpzb24uaGl0X3BvaW50c1xyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlckNoYWxsZW5nZVJhdGluZyA9IHJlc3VsdEpzb24uY2hhbGxlbmdlX3JhdGluZyAhPSBudWxsID8gcmVzdWx0SnNvbi5jaGFsbGVuZ2VfcmF0aW5nIDogXCItXCJcclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJTcGVlZCA9IHJlc3VsdEpzb24uc3BlZWRcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyU3RyZW5ndGggPSByZXN1bHRKc29uLnN0cmVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyRGV4dGVyaXR5ID0gcmVzdWx0SnNvbi5kZXh0ZXJpdHlcclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJDb25zdGl0dXRpb24gPSByZXN1bHRKc29uLmNvbnN0aXR1dGlvblxyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlckludGVsbGlnZW5jZSA9IHJlc3VsdEpzb24uaW50ZWxsaWdlbmNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyV2lzZG9tID0gcmVzdWx0SnNvbi53aXNkb21cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyU2F2ZUNvbnN0aXR1dGlvbiA9IHJlc3VsdEpzb24uY29uc3RpdHV0aW9uX3NhdmUgIT0gbnVsbCA/IFwiQ09OICtcIiArIHJlc3VsdEpzb24uY29uc3RpdHV0aW9uX3NhdmUgOiBcIi1cIlxyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlclNhdmVJbnRlbGxpZ2VuY2UgPSByZXN1bHRKc29uLmludGVsbGlnZW5jZV9zYXZlICE9IG51bGwgPyBcIklOVCArXCIgKyByZXN1bHRKc29uLmludGVsbGlnZW5jZV9zYXZlIDogXCItXCJcclxuICAgICAgICAgICAgdGhpcy5lbmNvdW50ZXJTYXZlV2lzZG9tID0gcmVzdWx0SnNvbi53aXNkb21fc2F2ZSAhPSBudWxsID8gXCJXSVMgK1wiICsgcmVzdWx0SnNvbi53aXNkb21fc2F2ZSA6IFwiLVwiXHJcblxyXG4gICAgICAgICAgICAgICAgLy9AT2JzZXJ2YWJsZVByb3BlcnR5KCkgZW5jb3VudGVyU2tpbGxzPSByZXN1bHRKc29uLlxyXG4gICAgICAgICAgICB0aGlzLmVuY291bnRlclNlbnNlcyA9IHJlc3VsdEpzb24uc2Vuc2VzXHJcbiAgICAgICAgICAgIHRoaXMuZW5jb3VudGVyTGFuZ3VhamVzID0gcmVzdWx0SnNvbi5sYW5ndWFnZXMgIT0gbnVsbCA/IHJlc3VsdEpzb24ubGFuZ3VhZ2VzIDogXCItXCJcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BlY2lhbEFiaWxpdGllc0l0ZW1zID0gcmVzdWx0SnNvbi5zcGVjaWFsX2FiaWxpdGllc1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNJdGVtcyA9IHJlc3VsdEpzb24uYWN0aW9uc1xyXG4gICAgICAgICAgICB0aGlzLmxlZ2VuZGFyeUFjdGlvbnNJdGVtcyA9IHJlc3VsdEpzb24ubGVnZW5kYXJ5X2FjdGlvbnNcclxuXHJcbiAgICAgICAgICAgIGVuY291bnRlclZpZXcuYmluZGluZ0NvbnRleHQgPSB0aGlzXHJcblxyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVuY291bnRlclBhZ2UgLSBSZXF1ZXN0IGVycm9yXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIG9wZW5GaWx0ZXJQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyUGFnZS50cmFuc2xhdGVYID0gLXRoaXMucGFnZVdpZHRoIFxyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyQmFja2dyb3VuZC5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICB0aGlzLmVuY291bnRlckZpbHRlclBhZ2UudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXHJcbiAgICAgICAgdGhpcy5lbmNvdW50ZXJGaWx0ZXJCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG5cclxuICAgICAgICB0aGlzLmVuY291bnRlckZpbHRlclBhZ2UuYW5pbWF0ZSh7dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LCBkdXJhdGlvbjogMzAwLCBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUlufSlcclxuICAgICAgICB0aGlzLmVuY291bnRlckZpbHRlckJhY2tncm91bmQuYW5pbWF0ZSh7b3BhY2l0eTogMC40LCBkdXJhdGlvbjogMzAwLCBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUlufSlcclxuICAgIH1cclxuXHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGNsb3NlRmlsdGVyUGFnZSgpIHtcclxuICAgICAgIGNvbnN0IGZpbmFsUG9zaXRpb24gPSAtdGhpcy5wYWdlV2lkdGggXHJcbiAgICAgICB0aGlzLmVuY291bnRlckZpbHRlckJhY2tncm91bmQub3BhY2l0eSA9IDAuNFxyXG4gICAgICAgdGhpcy5lbmNvdW50ZXJGaWx0ZXJQYWdlLmFuaW1hdGUoe3RyYW5zbGF0ZTogeyB4OiBmaW5hbFBvc2l0aW9uLCB5OiAwfSwgZHVyYXRpb246IDMwMCwgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbn0pXHJcbiAgICAgICB0aGlzLmVuY291bnRlckZpbHRlckJhY2tncm91bmQuYW5pbWF0ZSh7b3BhY2l0eTogMCwgZHVyYXRpb246IDMwMCwgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbn0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5jb3VudGVyRmlsdGVyUGFnZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiXHJcbiAgICAgICAgdGhpcy5lbmNvdW50ZXJGaWx0ZXJCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCJcclxuICAgICAgIH0pXHJcbiAgICB9IFxyXG59XHJcbiJdfQ==