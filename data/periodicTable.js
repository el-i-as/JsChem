class PeriodicTable {
	static abbrMap = new Map();
	static initElements () {
		this.HYDROGEN = registerElem("hydrogen", "H", 1.01, );
		this.HELIUM = registerElem("helium", "He", 4.00);
		this.LITHIUM = registerElem("lithium", "Li", 6.97);
	}
}
function registerElem (name, abbr, molarMass) {
	let elem = new Element(name, abbr, molarMass);
	PeriodicTable.abbrMap.set(abbr, elem);
	return elem;
}