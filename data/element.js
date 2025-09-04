class Element {
    static fromAbbr(abbr) {
        //debugger;
        let elem = PeriodicTable.abbrMap.get(abbr);
        if ((elem == undefined) || (!elem instanceof Element)) {console.error(`No element with abbreviation "${abbr}"`); return;}
        return elem;
    }
	name = "unnamed";
	abbr = "Un";
	molarMass = 1.00;
	constructor (name, abbr, molarMass) {
		this.name = name;
		this.abbr = abbr;
		this.molarMass = molarMass;
	}
}