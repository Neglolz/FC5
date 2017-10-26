<template>
  <div class="hello">
    Joueur actuel: <h2>{{ playingPlayer }}</h2>
    <div class="terrain">
      <div class="cell" v-for="cell in terrain">
        <div v-if="cell.isBallon === 'true'">
          <img class="isBallon" src="./../assets/ball32.png">
        </div>
        <div v-else>
          {{ cell.name }}
        </div>
      </div>
    </div>
    <button @click="shoot">Tirer</button>
    <input type="number" v-model="ball.position">
    <button @click="dribble">dribble</button>
    <button @click="test">JSON</button>
    <h2>{{player1.score}} - {{player2.score}}</h2>
    journal d'évenement: <br>
    <div v-for="event in events">
      {{ event.description }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    props: {

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        wTerrain: 7,
        hTerrain: 9,
        events:[
          /*{ id:0, description: 'test' },
          { id:0, description: 'test1' },
          { id:0, description: 'test2' },*/
        ],
        event: {
          id: Number,
          description: String
        },
        ball: {
          position: 45,
          possessor: '1'
        },
        terrain: [],
        terrainTest: [],
        player1: {
          score: 0
        },
        player2: {
          score: 0
        },
        playingPlayer: 1,
      }
    },
    methods: {

      shoot() {
        this.checkIfGoal();
        /*if (this.playingPlayer === 1) {
          this.ball.position = 41
          this.player1.score++
          this.playingPlayer = 2
        } else {
          this.ball.position = 49
          this.player2.score++
          this.playingPlayer = 1
        }*/
        //(this.playingPlayer === 1) ? this.ball.position = 14: this.ball.position = 94;
        //(this.playingPlayer === 1) ? this.player1.score ++ : this.player2.score ++;
        this.createTerrain(this.ball.position)
      },

      checkIfGoal(){
        let posTarget;
        let distanceToTarget;
        ( this.playingPlayer === 1 ) ? posTarget = 41 : posTarget = 49 ;
        distanceToTarget = posTarget - this.ball.position;

        let resultShoot =  Math.abs(Math.random()*100);
        if( resultShoot >= 80 ){ // but
          if (this.playingPlayer === 1) {
            this.player1.score++

            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: 'GOOOAAAAAAL'
            }
            this.events.push(goalEvent)

            this.playingPlayer = 2
          } else {
            this.player2.score++

            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: 'GOOOAAAAAAL'
            }
            this.events.push(goalEvent)

            this.playingPlayer = 1
          }
          this.ball.position = 45

        }else if(resultShoot > 30 && resultShoot < 80){ // 6 metres
          if (this.playingPlayer === 1) {
            this.ball.position = 41

            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: '6 mètres'
            }
            this.events.push(goalEvent)

            this.playingPlayer = 2
          } else {
            this.ball.position = 49

            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: '6 mètres'
            }
            this.events.push(goalEvent)

            this.playingPlayer = 1
          }
        }else{ //corner
          if (this.playingPlayer === 1) {
            this.ball.position = 71
            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: 'Corner'
            }
            this.events.push(goalEvent)
          } else {
            this.ball.position = 19
            let goalEvent = {
              id: Math.floor(Math.random()*1000000000),
              description: 'Corner'
            }
            this.events.push(goalEvent)
          }
        }
      },

      pass(cible) {
        cible ? console.log(cible) : console.log('choisir une cible');
      },

      dribble() {
        var posBallon = this.ball.position;
        posBallon = this.checkLimiteTerrainBallon(posBallon);
        posBallon = this.tryDribble(posBallon)
        this.ball.position = posBallon
        this.createTerrain(this.ball.position)
      },

      tryDribble(posBallon){
        ( this.playingPlayer === 1 ) ? posBallon -- : posBallon ++;

        let goalEvent = {
          id: Math.floor(Math.random()*1000000000),
          description: 'Dribble réussi'
        }
        this.events.push(goalEvent)

        return posBallon
      },

      createTerrain(posBallon) {
        this.terrain = [];
        // , posJoueursUser1, posjoueursUser2
        //let jsonData = '[';
        for (let y = 1; y <= this.hTerrain; y++) {
          for (let x = 1; x <= this.wTerrain; x++) {
            //jsonData += '"'+ y.toString() + x.toString() +'":{' ;
            let jsonData = {
              name: String,
              isBallon: String
            };
            jsonData.name = '' + x.toString() + y.toString() + '';
            if (posBallon.toString() === x.toString() + y.toString()) {
              jsonData.isBallon = 'true'
            } else {
              jsonData.isBallon = 'false'
            }
            //(posBallon.toString() === x.toString() + y.toString()) ? jsonData.isballon = 'true' : jsonData.isballon = 'false' ;


            //jsonData = '{ name: "' + y.toString() + x.toString() +'",';
            //(posBallon.toString() === y.toString() + x.toString()) ? jsonData+='isBallon:true' : jsonData+='isBallon:false' ;


            //(y === this.hTerrain  && x === this.wTerrain) ? jsonData+='}' : jsonData+='},' ;
            this.terrain.push(jsonData);
          }
        }
        //jsonData += ']'
        //console.log(jsonData)
        //jsonData = JSON.parse(jsonData)
        //this.terrain = jsonData
      },

      test(value) {
        this.createTerrain(this.ball.position)
        //console.log(this.terrain)
      },

      createBallon(posBallon) {
        this.ball.position = posBallon;
      },

      checkLimiteTerrainBallon(positionBallon) {
        switch (positionBallon) {
          default :
            return positionBallon
            break;
          case 50:
            return 44
            this.changePlayingPlayer()
            break;
          case 49:
            this.shoot()
            break;
        }
      },

      changePlayingPlayer(){
        if(this.playingPlayer ===1){
          this.playingPlayer = 2
        }else{
          this.playingPlayer = 1
        }
      }
    },
    created() {
      this.createTerrain(this.ball.position);
    },
    computed: {

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
    width: 49px;
    height: 49px;
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
