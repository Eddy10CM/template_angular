export class Kpi {
	public _id: string
	public name: string
	public value: string
	public units: string
	constructor(_id: string, name: string, value: string, units: string) {
		this._id = _id
		this.name = name
		this.value = value
		this.units = units
	}
}
