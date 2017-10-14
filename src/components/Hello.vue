<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="terrain">
      {{terrain}}
      <div v-for="Cell in terrain">
        o
      </div>
    </div>
    <button @click="shoot">Tirer</button>
    <button @click="pass('he')">Passer</button>
    <button @click="test">JSON</button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    props:{

    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        wTerrain: 2,
        hTerrain: 3,
        terrain: Object
      }
    },
    methods: {
      shoot(){
        console.log('shoot')
      },
      pass(cible){
        cible ? console.log(cible) : console.log('choisir une cible');
      },
      dribble(){
        console.log('ballon.pos +1')
      },
      // generation du json terrain. Prend en parametre un strin position du ballon
      // un tableau de string position des joueurs du user1 + user2
      createTerrain( posBallon){
          // , posJoueursUser1, posjoueursUser2
          let jsonData = '{';
          for( let x = 1 ; x <= this.wTerrain ; x++ ){
            for( let y = 1 ; y <= this.hTerrain ; y++ ){
              //console.log(x,y);
              jsonData += '{' ;
              jsonData += '"name": "' + x.toString()+y.toString() +'",';
              (posBallon.toString() === x.toString()+y.toString()) ? jsonData+='"isBallon":"true"' : jsonData+='"isBallon":"false"' ;


              (y === this.hTerrain  && x === this.wTerrain) ? jsonData+='}' : jsonData+='},' ;
            }
          }
          jsonData += '}'
          console.log(JSON.parse(JSON.stringify(jsonData)))
          jsonData = JSON.parse(JSON.stringify(jsonData))
          this.terrain= jsonData
         // return JSON.parse(JSON.stringify(jsonData))
      },
      test(value){
        this.createTerrain('12')
        //console.log(this.terrain)
      }
    },
    mounted(){
        this.terrain = this.createTerrain('12')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .cell {
    display: block;
    width: 50px;
    float: left;
    border: 1px solid black;
  }

  .terrain {
    width: 450px;
  }
</style>
