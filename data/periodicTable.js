class PeriodicTable {
    
    static HYDROGEN = registerElem("hydrogen", "H", 1.01, );
    static HELIUM = registerElem("helium", "He", 4.00);
    static LITHIUM = registerElem("lithium", "Li", 6.968);
}
function registerElem (name, abbr, molarMass) {
    return new Element(name, abbr, molarMass);
}
class Element {
    name = "unnamed";
    abbr = "Un";
    molarMass = 1.00;
    constructor (name, abbr, molarMass) {
        this.name = name;
        this.abbr = abbr;
        this.molarMass = molarMass;
    }
}