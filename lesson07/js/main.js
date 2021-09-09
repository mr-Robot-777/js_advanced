const API = '.';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        post(url, data = {}){
            return fetch(url,{
                    method: 'post',
                    headers: [
                        ['Content-Type', 'application/json; charset=UTF-8']
                    ],
                    body: JSON.stringify(data)
                })
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

