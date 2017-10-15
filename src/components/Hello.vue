<template>
  <div class="hello">

    <div class="terrain">
      <div class="cell" v-for="cell in terrain">

        <div :class="{isBallon: cell.isBallon}" v-if="cell.isBallon === 'true'">
           .
        </div>

      </div>
    </div>
    <button @click="shoot">Tirer</button>
    <input type="number" v-model="ball.position">
    <button @click="dribble">dribble</button>
    <button @click="test">JSON</button>
    <h2>{{player1.score}} - {{player2.score}}</h2>
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
        wTerrain: 7,
        hTerrain: 9,
        ball: {
            position: 45,
            possessor: '1'
        },
        terrain: Object,
        player1:{
            score: 0
        },
        player2:{
            score: 0
        },
        playingPlayer: 1,
      }
    },
    methods: {
      shoot(){
          if( this.playingPlayer === 1 ){
            this.ball.position = 14
            this.player1.score ++
            this.playingPlayer ++
          }else{
            this.ball.position = 49
            this.player2.score ++
            this.playingPlayer --
          }
        //(this.playingPlayer === 1) ? this.ball.position = 14: this.ball.position = 94;
        //(this.playingPlayer === 1) ? this.player1.score ++ : this.player2.score ++;
        this.createTerrain(this.ball.position)
      },
      pass(cible){
        cible ? console.log(cible) : console.log('choisir une cible');
      },
      dribble(){
        this.ball.position ++
        this.createTerrain( this.ball.position )
      },
      createTerrain(posBallon){
          // , posJoueursUser1, posjoueursUser2
          let jsonData = '{';
          for( let x = 1 ; x <= this.wTerrain ; x++ ){
            for( let y = 1 ; y <= this.hTerrain ; y++ ){
              jsonData += '"'+ x.toString()+y.toString() +'":{' ;
              jsonData += '"name": "' + x.toString()+y.toString() +'",';
              (posBallon.toString() === x.toString()+y.toString()) ? jsonData+='"isBallon":"true"' : jsonData+='"isBallon":"false"' ;


              (y === this.hTerrain  && x === this.wTerrain) ? jsonData+='}' : jsonData+='},' ;
            }
          }
          jsonData += '}'
          jsonData = JSON.parse(jsonData)
          this.terrain= jsonData
      },
      test(value){
        this.createTerrain(this.ball.position)
        //console.log(this.terrain)
      },
      createBallon(posBallon){
          this.ball.position =  posBallon ;
      }
    },
    created(){
        this.createTerrain(this.ball.position);
    },
    watcher:{

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
    background-color: #23BF4B;
    background-repeat: no-repeat ;
    width: 50px;
    height: 50px;
    float: left;
    border: 1px solid white;
  }

  .cliquable{
    cursor: pointer;
  }

  .isBallon{
    background-image: url("./../assets/ball32.png");
  }
  .isBallon1joueur{
    background-image: url("./../assets/ball24.png");
  }
  .isBallon2joueur{
    background-image: url("./../assets/ball24.png");
  }

  .terrain {
    width: 400px;
  }
</style>
