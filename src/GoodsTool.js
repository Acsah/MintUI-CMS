//

let storage = {

	getVal(key) {
		return JSON.parse(window.getItem(key) || '{}');
	},
	
	saveVal(key, val) {
		window.localStorage.setItem(key, JSON.stringify(val));
	}


}

export default storage
