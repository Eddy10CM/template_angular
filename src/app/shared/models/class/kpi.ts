import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();

export class Kpi {
	_id: string
	data: string
	label: string
	units: string
	options: { key: string; value: string }[]

	constructor(options: {
		_id?: string,
		data?: string,
		label?: string,
		units?: string,
	}) {
		this._id = options._id || myuuid
		this.data = options.data || '0'
		this.label = options.label || 'Kpi'
		this.units = options.units || ''
	}
}
