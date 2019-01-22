    import {List} from "../../shared/List"
    
    export class Theme {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Goal {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Hook {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Plot {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Climax {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Reward {
        title: string
        body: string
        constructor(title: string, body: string) {
            this.title = title
            this.body = body
        }
    }

    export class Adventure {
        themes: List<Theme>
        goals: List<Goal>
        hooks: List<Hook>
        plots: List<Plot>
        climax: List<Climax>
        rewards: List<Reward>
        constructor() {
            this.themes = new List<Theme>()
            this.goals = new List<Goal>()
            this.hooks = new List<Hook>()
            this.plots = new List<Plot>()
            this.climax = new List<Climax>()
            this.rewards = new List<Reward>()
        }
    }

    export class RootObject {
        adventure: Adventure[]
        encounter: string
    }