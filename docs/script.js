
var getFruitOrder = function (child) {
	var div = document.getElementById('imageContainer');
	var img = div.getElementsByTagName('img');
	fetch('http://localhost:3000/getFruit')
		.then((resp) => resp.json())
		.then(function (data) {
			for (var i = 0; i < 3; i += 1) {
				img[i].src=data.orderIMG[i]
			}
		})
		.catch(function (err) {
			console.error(err)
			alert('the api does not work')
		});
}

var sendFruit = function () {
	var div = document.getElementById('imageContainer');
	var img = div.getElementsByTagName('img');
	var data = []
	for (var i = 0; i < 3; i += 1) {
		data.push(img[i].src)
	}

	url = 'http://localhost:3000/updateFruit'

	data = {orderIMG:data}

	console.log(JSON.stringify(data))
	postData(url,data)

}

function postData(url, data) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON

	}
options2 = {
	group: 'share',
	animation: 100,
	onUpdate: function (evt) {
		sendFruit()
	}
}

var el = document.getElementById('imageContainer');
Sortable.create(el, options2);
getFruitOrder()