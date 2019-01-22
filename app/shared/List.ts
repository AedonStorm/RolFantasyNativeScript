export class List<T> {
    private items: Array<T>

    constructor() {
        this.items = []
    }

    size(): number {
        return this.items.length
    }

    add(value: T): void {
        this.items.push(value)
    }

    get(index: number): T {
        return this.items[index]
    }

    randomItem(): T {
        return this.size() > 0 ? this.items[Math.floor(Math.random() * this.size() -1)] : null
    }
}