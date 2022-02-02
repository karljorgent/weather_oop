class Weather{
	constructor(city){
		this.key = '0fd874536e2307b36f26810f8b97d7f6';
		this.city = city;
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
}