Vue.config.devtools = true;
var app = new Vue({
    el: "#app",
    data: {
        emails: [],
        emailNumber: 10
    },
    mounted() {
        for(var i = 0; i < this.emailNumber; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.emails.push(response.data.response);
                });
        }
    }
});

