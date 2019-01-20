import { Observable } from "data/observable"
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ObservableProperty } from "../../shared/observable-property-decorator";
import { Page, Color, View } from "tns-core-modules/ui/page/page";



export class AdventurePageController extends Observable {

    @ObservableProperty() adventureTitle: string
    @ObservableProperty() adventureType: string
    @ObservableProperty() adventureDescription: string

    @ObservableProperty() adventureContext: string
    @ObservableProperty() adventureHook: string
    @ObservableProperty() adventurePlot: string
    @ObservableProperty() adventureGoal: string
    @ObservableProperty() adventureReward: string
    
    constructor(adventurePage: View) {
        super();

        this.adventureTitle ="Lorem"
        this.adventureType ="Battle Royale"
        this.adventureDescription = "Ut maiores perspiciatis vero minus. Enim esse iure doloremque aliquam ut accusantium debitis voluptatem. Omnis nobis earum quos asperiores error odio molestias est. Aliquid nobis exercitationem dolor non consequatur eum."
        
        this.adventureContext = "Enim qui est consequatur necessitatibus cum ullam impedit deleniti. Voluptatem nobis molestiae fuga. Ratione ducimus suscipit aut molestias esse. Eligendi qui facere molestias voluptates asperiores et nostrum."
        this.adventureHook = "Tempore facilis quia quidem. Aut error ducimus qui impedit. Quo excepturi earum nobis velit necessitatibus magni consequatur consequatur. Iusto atque sapiente qui qui cupiditate."
        this.adventurePlot = "Ea recusandae reiciendis ea beatae est. Et et consequatur molestias totam. Nobis quos rem et suscipit qui sint delectus tenetur."
        this.adventureGoal = "Accusamus iste dolor autem. Minus culpa doloribus molestiae amet ullam veniam. Quos enim nobis omnis et repudiandae. Qui omnis aut ex laudantium. Cupiditate ut nesciunt error recusandae non voluptatibus. Ipsam facere velit earum molestiae dolorem perferendis."
        this.adventureReward = "Ut maiores perspiciatis vero minus. Enim esse iure doloremque aliquam ut accusantium debitis voluptatem. Omnis nobis earum quos asperiores error odio molestias est. Aliquid nobis exercitationem dolor non consequatur eum."
        
        adventurePage.bindingContext = this
    }
} 
