// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"

class BigScaryBird {

    constructor (props) {
        this.name = props.name
        this.height = props.height
        this.flightless = true
        this.isExtinct = props.isExtinct
        this.runningSpeed = props.runningSpeed
    }

    toString (name, height, runningSpeed) {
        console.log (`The ${name} is a big, scary bird that stands up to ${height} ft and can run up to ${runningSpeed} mph!`)
    }
}

const ostrichProperties = {

    name: "Ostrich",
    height: "9",
    flightless: true,
    isExtinct: false,
    runningSpeed: "43"
}

const greaterRheaProperties = {

    name: "Greater rhea",
    height: "4.5",
    flightless: true,
    isExtinct: false,
    runningSpeed: "40"
}

const emuProperties = {

    name: "Emu",
    height: "6",
    flightless: true,
    isExtinct: false,
    runningSpeed: "30"
}

const greaterRhea = new BigScaryBird (greaterRheaProperties);
// greaterRhea.toString(greaterRhea.name, greaterRhea.height, greaterRhea.runningSpeed);

const ostrich = new BigScaryBird (ostrichProperties);
// ostrich.toString(ostrich.name, ostrich.height, ostrich.runningSpeed);

const emu = new BigScaryBird (emuProperties);
// emu.toString(emu.name, emu.height, emu.runningSpeed);