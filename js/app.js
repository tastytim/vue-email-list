Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  data: {
    listaMail: []
  },
  methods: {
    getMailList() {
     let tempList = [];
      const url = "https://flynn.boolean.careers/exercises/api/random/mail";
      for (let i = 1; i <= 10; i++) {
        axios
          .get(url)
          .then(function (response) {
           tempList.push({ mail : response.data.response});
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      this.listaMail = tempList;
      
    },
  },
});
