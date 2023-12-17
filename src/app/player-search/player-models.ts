export class Pitcher {
    last?: string
    first?: string
    year?: string

    constructor(player: string[]) {
        this.last = player[0].split(' ')[1]
        this.first = player[0].split(' ')[0]
        this.year = player[1]
    }
}

export class Batter {
    last?: string
    first?: string
    year?: string

    constructor(player: string[]) {
        this.last = player[0].split(' ')[1]
        this.first = player[0].split(' ')[0]
        this.year = player[1]
    }
}