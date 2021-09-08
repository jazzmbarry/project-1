var ff1El = document.querySelector('#FF1')
var ff2El = document.querySelector('#FF2')
var testButton = document.querySelector('#testButton')
var toEl = document.querySelector('#to')
var fromEl = document.querySelector('#from')


var priceInfoAnytime = function(data){
    var to = toEl.textContent
    var from = fromEl.textContent
    // Get flight information
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + from + "-sky/" + to + "-sky/anytime?inboundpartialdate=anytime", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "28dfb6149emshb14acf8eab1f92fp1b43e6jsna8cc07143db7"
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        testFlightEL = document.createElement('div')
        testFlightEL.textContent = "This Test Flight is going from SLC to JFC"
        ff1El.appendChild(testFlightEL)
        for (i = 0; i < data.Quotes.length; i++){
            console.log(data.Quotes[i].MinPrice)
            var priceEl = document.createElement('div')
            priceEl.setAttribute('id', 'price' + i)
            priceEl.setAttribute('class', '#')
            priceEl.textContent = 'Flight ' + (i+1) + '= $' + data.Quotes[i].MinPrice
            ff2El.appendChild(priceEl)
        }
        testButton.remove()
        return data
    })
    .catch(err => {
        console.error(err);
    });
}

var mySearch = function(){
    var data = priceInfoAnytime(data)
    



    // console.log(data)
    // for (i = 0; i > data.Quotes.length; i++){
    // console.log(data.Quotes[i].MinPrice)}
}

var events = {
    fetchEvents: function(city) {
        fetch(
            "https://api.seatgeek.com/2/events?client_id=MjMxMzI4MDd8MTYzMTA2NzEwMy45NTIzMjE4"
        )

        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayEvents: function(data) {
        const { title } = data;
        const { city } = data.venue;
        console.log(title, city)
    }
};