import { Observable } from "data/observable"
import { ObservableArray } from "data/observable-array"
import { ObservableProperty } from "../../shared/observable-property-decorator"
import { View } from "tns-core-modules/ui/page/page"
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http"
import { List } from "../../shared/List"
import { EncounterFilterController } from "~/home/encounter-page/EncounterFilterController"
import { AnimationCurve } from "tns-core-modules/ui/enums"

/*export class Action {

    damageBonus: Number
    damageDice: string
    attackBonus: Number
    desc: string
    name: string

    constructor(name: string, desc: string, attacBonus: Number = 0, damageDice: string = "", damageBonus: Number = 0) {
        this.name = name
        this.desc = desc
        this.attackBonus = attacBonus
        this.damageDice = damageDice
        this.damageBonus = damageBonus
    }
}*/

interface Action {
    damage_bonus: Number
    damage_dice: string
    attack_bonus: Number
    desc: string
    name: string
}




const baseUrl = 'http://www.dnd5eapi.co/api/monsters/';
const size = 325

let encounterView: View
export class EncounterPageController extends Observable {

    @ObservableProperty() encounterName: string
    @ObservableProperty() encounterSize: string
    @ObservableProperty() encounterType: string
    @ObservableProperty() encounterSubtype: string
    @ObservableProperty() encounterAlignment: string

    @ObservableProperty() encounterArmorClass: string
    @ObservableProperty() encounterHitPoints: string
    @ObservableProperty() encounterChallengeRating: string
    @ObservableProperty() encounterSpeed: string

    @ObservableProperty() encounterStrength: string
    @ObservableProperty() encounterDexterity: string
    @ObservableProperty() encounterConstitution: string
    @ObservableProperty() encounterIntelligence: string
    @ObservableProperty() encounterWisdom: string
    @ObservableProperty() encounterCharisma: string

    @ObservableProperty() encounterSaveConstitution: string
    @ObservableProperty() encounterSaveIntelligence: string
    @ObservableProperty() encounterSaveWisdom: string

    //@ObservableProperty() encounterSkills: string
    @ObservableProperty() encounterSenses: string
    @ObservableProperty() encounterLanguajes: string

    @ObservableProperty() specialAbilitiesItems = new ObservableArray<Action>()
    @ObservableProperty() actionsItems = new ObservableArray<Action>()
    @ObservableProperty() legendaryActionsItems = new ObservableArray<Action>()


    /******* Filter Page *******/

    @ObservableProperty() dropDownChallenge = new ObservableArray<string>(["-","Easy","Medium","Hard", "Deadly"])
    @ObservableProperty() dropDownBioma = new ObservableArray<string>(
        ["-","Plains","Forest","Hills", "Mountains", "Marsh", "Desert", "Underground",
         "Aquatic", "Underdark", "Abyss", "Nine Hells", "Gehenna"
        ])


    encounterFilterController: EncounterFilterController = null
    encounterFilterPage: View
    encounterFilterBackground: View
    
    pageWidth = 0

    constructor(encounterPage: View, pageWidth: number) {
        super()
        this.pageWidth = pageWidth
        encounterView = encounterPage
        this.encounterFilterPage = encounterPage.getViewById("filter-page")
        this.encounterFilterBackground = encounterPage.getViewById("filter-background")
        
        this.encounterFilterController = new EncounterFilterController(this.encounterFilterPage)
        
        this.tapRandomize()
        encounterView.bindingContext = this
    }

    @ObservableProperty() public tapRandomize() {

        const randomEntry = Math.floor(Math.random() * 325);
        var options = {
            uri: baseUrl + randomEntry,
        };

        request({
            url: options.uri,
            method: "GET"
        }).then((response) => {
            //console.log(response.content)
            const resultJson = response.content.toJSON()
            
            this.encounterName = resultJson.name
            this.encounterSize = resultJson.size + " "
            this.encounterType = resultJson.type
            this.encounterSubtype = resultJson.subtype != "" ? ", " + resultJson.subtype : ""
            this.encounterAlignment = resultJson.alignment

            this.encounterArmorClass = resultJson.armor_class
            this.encounterHitPoints = resultJson.hit_points
            this.encounterChallengeRating = resultJson.challenge_rating != null ? resultJson.challenge_rating : "-"
            this.encounterSpeed = resultJson.speed

            this.encounterStrength = resultJson.strength
            this.encounterDexterity = resultJson.dexterity
            this.encounterConstitution = resultJson.constitution
            this.encounterIntelligence = resultJson.intelligence
            this.encounterWisdom = resultJson.wisdom

            this.encounterSaveConstitution = resultJson.constitution_save != null ? "CON +" + resultJson.constitution_save : "-"
            this.encounterSaveIntelligence = resultJson.intelligence_save != null ? "INT +" + resultJson.intelligence_save : "-"
            this.encounterSaveWisdom = resultJson.wisdom_save != null ? "WIS +" + resultJson.wisdom_save : "-"

                //@ObservableProperty() encounterSkills= resultJson.
            this.encounterSenses = resultJson.senses
            this.encounterLanguajes = resultJson.languages != null ? resultJson.languages : "-"

            this.specialAbilitiesItems = resultJson.special_abilities
            this.actionsItems = resultJson.actions
            this.legendaryActionsItems = resultJson.legendary_actions

            encounterView.bindingContext = this

        }, (error) => {
            console.log("EncounterPage - Request error")
        })
    }

    @ObservableProperty() public openFilterPage() {
        this.encounterFilterPage.translateX = -this.pageWidth 
        this.encounterFilterBackground.opacity = 0

        this.encounterFilterPage.visibility = "visible"
        this.encounterFilterBackground.visibility = "visible"

        this.encounterFilterPage.animate({translate: { x: 0, y: 0}, duration: 300, curve: AnimationCurve.easeIn})
        this.encounterFilterBackground.animate({opacity: 0.4, duration: 300, curve: AnimationCurve.easeIn})
    }

    @ObservableProperty() public closeFilterPage() {
       const finalPosition = -this.pageWidth 
       this.encounterFilterBackground.opacity = 0.4
       this.encounterFilterPage.animate({translate: { x: finalPosition, y: 0}, duration: 300, curve: AnimationCurve.easeIn})
       this.encounterFilterBackground.animate({opacity: 0, duration: 300, curve: AnimationCurve.easeIn}).then(() => {
        this.encounterFilterPage.visibility = "collapse"
        this.encounterFilterBackground.visibility = "collapse"
       })
    } 
}
