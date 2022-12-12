const app = new Vue({
    el : "#app",
    data() {
        return {
            name           : 'Bitcoin',
            img            : 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent  : 0,
            //prices         : [8400, 7900, 8200, 900, 9400, 10000, 10200],
            pricesWithDays : [
                {day: 'Lunes', value:8400},
                {day: 'Martes', value:7900},
                {day: 'Miércoles', value:8200},
                {day: 'Jueves', value:900},
                {day: 'Viernes', value:9400},
                {day: 'Sabado', value:10000},
                {day: 'Domimngo', value:10200}
            ],
            showPrices     : false,
        }
    },

    methods: {
        togleShowPrices() {
            this.showPrices = !this.showPrices
        }
    }
})