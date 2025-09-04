class Compound {
	units = [];
	constructor () {
	}
	add (elem, count = 1) {
		let unit = {unit: elem, count: count};
		this.units.push(unit);
		return this;
	}
	gramsPerMole () {
		let mass = 0;
		for (let unit of this.units) {
			let thisMass = 0;
			if (unit.unit instanceof Compound) {
				thisMass = unit.unit.gramsPerMole();
			} else {
				thisMass = unit.unit.molarMass;
			}
			thisMass *= unit.count;
			mass += thisMass;
		}
		return mass;
	}
}