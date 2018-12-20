class Restaurant {

    constructor (props) {
        this.name = props.name
        this.address = props.address
        this.hourOpen = props.hourOpen
        this.hourClosed = props.hourClosed
        this.comboDiscount = props.discount
        this.menu = {}
        this._combo = {}
    }

    setMenu (menuItems) {
        for (const item in menuItems) {
            this.menu[item] = Number(menuItems[item])
        }
    }


    set combo (items) {
        this._combo = items;
    }


    get comboPrice () {
        let comboPrice = 0;
        for (const item in this._combo) {
            let value = this._combo[item];
            comboPrice += value;
        }
        return `$${(comboPrice * this.comboDiscount).toFixed(2)}`
    }

}

const bobsBurgers = new Restaurant({
    name: "Bob's Burgers",
    address: "123 Main Street",
    hourOpen: "11:00 a.m.",
    hourClosed: "11:00 p.m.",
    discount: 0.85,
})

bobsBurgers.setMenu({
    fries: 1.29,
    burger: 3.69,
    drink: 1.75,
    dessert: 2.50
})

bobsBurgers.combo = {fries: 1.29, burger: 3.69, drink: 1.75};
console.log(bobsBurgers._combo);
console.log(bobsBurgers.comboPrice);