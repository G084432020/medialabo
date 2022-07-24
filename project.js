let b = document.querySelectorAll(".city");
b.forEach(function(e){
	e.addEventListener('click', setInformation)
});

function setInformation(e) {
	// URL を設定
	let url;
	switch (e.target.id) {
		case "Tokyo": url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';
			break;
		case "Moscow": url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json';
			break;
		case "New-York": url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';
			break;
		case "Sydney": url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';
			break;
		case "London": url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
			break;
		default:
			break;
	}
	// 通信開始
	axios.get(url)
		.then(resp => showResult(resp,e.target.id))
		.catch(showError)
		.then(finish);

}

// 通信が成功した時の処理
function showResult(resp,cityId) {
	// サーバから送られてきたデータを出力
	let data = resp.data;
	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
	
	let weatherTdId = "td#weather"+cityId;
	let maxTdId = "td#max"+cityId;
	let minTdId = "td#min"+cityId;
	

	document.querySelector(weatherTdId).textContent = data.weather[0].description;
	document.querySelector(maxTdId).textContent = data.main.temp_max;
	document.querySelector(minTdId).textContent = data.main.temp_min;

}
function showError(err) {
	console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
