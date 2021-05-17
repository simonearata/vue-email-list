const app = new Vue({

  el: '#app',

  data:{
    emails: [],
    loading: true
  },

  mounted(){
    // METODO 1
/*     for(let i = 0; i < 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp =>{
        console.log(resp);
        this.emails.push(resp.data.response);
        console.log(this.emails)
      })
      .catch(err =>{
        console.log(err)
      })
    } */

    // METODO 2
    this.callApi("https://flynn.boolean.careers/exercises/api/random/mail")
  },

  methods:{

    // funzione che utilizzo per chiamare API
    callApi(url){
      axios.get(url)
      .then((resp)=>{
        console.log(resp);

        // pusho all'interno dell'array emails le email generate, se l'array è minore di 10 continua a pusharle
        this.emails.push(resp.data.response);
        if(this.emails.length < 10){
          this.callApi(url)
        }
        console.log(this.emails)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  }



})