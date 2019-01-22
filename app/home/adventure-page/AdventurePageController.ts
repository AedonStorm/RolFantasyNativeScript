import { Observable } from "data/observable"
import { ObservableProperty } from "../../shared/observable-property-decorator";
import { View } from "tns-core-modules/ui/page/page";
import * as firebase from "nativescript-plugin-firebase"

import { Adventure, Theme, Climax, Hook, Goal, Plot } from "../adventure-page/AdventureClass"

let adventureObj: Adventure = null
let adventureView: View
export class AdventurePageController extends Observable {

    @ObservableProperty() adventureType: string
    @ObservableProperty() adventureDescription: string

    @ObservableProperty() adventureClimaxTitle: string
    @ObservableProperty() adventureClimax: string

    @ObservableProperty() adventureHookTitle: string
    @ObservableProperty() adventureHook: string

    @ObservableProperty() adventurePlotTitle: string
    @ObservableProperty() adventurePlot: string

    @ObservableProperty() adventureGoalTitle: string
    @ObservableProperty() adventureGoal: string
    
    @ObservableProperty() adventureReward: string
    
    constructor(adventurePage: View) {
        super();
        adventureView = adventurePage
        if (adventureObj == null) {
            adventureObj = new Adventure()

            var onChildThemeEvent = function(result) {
                const json = JSON.parse(JSON.stringify(result.value))
                adventureObj.themes.add(new Theme(json.title, json.body))
                //console.log(JSON.stringify(result.value))
            }
            var onChildClimaxEvent = function(result) {
                const json = JSON.parse(JSON.stringify(result.value))
                adventureObj.climax.add(new Climax(json.title, json.body))
                //console.log(JSON.stringify(result.value))
            }
            var onChildHookEvent = function(result) {
                const json = JSON.parse(JSON.stringify(result.value))
                adventureObj.hooks.add(new Hook(json.title, json.body))
                //console.log(JSON.stringify(result.value))
            }
            var onChildPlotEvent = function(result) {
                const json = JSON.parse(JSON.stringify(result.value))
                adventureObj.plots.add(new Plot(json.title, json.body))
                //console.log(JSON.stringify(result.value))
            }
            var onChildGoalEvent = function(result) {
                const json = JSON.parse(JSON.stringify(result.value))
                adventureObj.goals.add(new Goal(json.title, json.body))
                //console.log(JSON.stringify(result.value))
            }
            firebase.addChildEventListener(onChildThemeEvent, "/adventure/themes")
            firebase.addChildEventListener(onChildClimaxEvent, "/adventure/climax")
            firebase.addChildEventListener(onChildHookEvent, "/adventure/hooks")
            firebase.addChildEventListener(onChildPlotEvent, "/adventure/plots")
            firebase.addChildEventListener(onChildGoalEvent, "/adventure/goals")
        }

        adventureView.bindingContext = this
        setTimeout(() => {
            this.tapRandomize()
        }, 1000)
    }

    @ObservableProperty() public tapRandomize() {

        const theme =  adventureObj.themes.randomItem()
        if (theme != null) {
            this.adventureType = theme.title
            this.adventureDescription = theme.body
        }

        const climax =  adventureObj.climax.randomItem()
        if (climax != null) {
            this.adventureClimaxTitle = climax.title
            this.adventureClimax = climax.body
        }
        const hook =  adventureObj.hooks.randomItem()
        if (hook != null) {
            this.adventureHookTitle = hook.title
            this.adventureHook = hook.body
        }
        const plot =  adventureObj.plots.randomItem()
        if (plot != null) {
            this.adventurePlotTitle = plot.title
            this.adventurePlot = plot.body
        }
        const goal =  adventureObj.goals.randomItem()
        if (goal != null) {
            this.adventureGoalTitle = goal.title
            this.adventureGoal = goal.body
        }

        adventureView.bindingContext = this
    }
}


