<template>
  <div class="hello">
    Joueur actuel: <h2>{{ playingUser }}</h2>
    <div class="terrain">
      <div class="cell" v-for="cell in terrain">
        <div v-if="cell.isBallon === 'true'">
          <img class="isBallon" src="./../assets/ball32.png">
        </div>
        <div v-else>
          {{ cell.name }}
          <div v-if="cell.user1.isPlayer == 1">
            <img src="./../assets/player32.png">
          </div>
        </div>
      </div>
    </div>
    <button @click="shoot">Tirer</button>
    <input type="number" v-model="ball.position">
    <button @click="dribble">dribble</button>
    <button @click="test">JSON</button>
    <h2>{{User1.score}} - {{User2.score}}</h2>
    journal d'évenement: <br>
    <div v-for="event in events">
      {{ event.description }}
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
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
        ball: {
          position: 45,
          possessor: '1'
        },
        terrain: [ ],
        User1: {
          score: 0,
          players:{
            player1: {
              position: 49,
              stats: {
                  atq: 10,
                  def: 90
              }
            },
            player2: {
              position: 58,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player3: {
              position: 38,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player4: {
              position: 17,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player5: {
              position: 77,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player6: {
              position: 36,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player7: {
              position: 56,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player8: {
              position: 15,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player9: {
              position: 75,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player10: {
              position: 32,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player11: {
              position: 52,
              stats: {
                atq: 10,
                def: 90
              }
            },
          }
        },
        User2: {
          score: 0,
          player:[ ]
        },
        playingUser: 1
      }
    },
    methods: {

      shoot() {
        this.checkIfGoal();
        this.createTerrain(this.ball.position)
      },

      createEvent(description){
        const event = {
          id: Math.floor(Math.random()*1000000000),
            description: description
        }
        this.events.push(event)
      },

      checkIfGoal(){
        let posTarget = this.playingUser === 1 ? 41 : 49 ;
        let distanceToTarget;
        ( this.playingUser === 1 ) ? posTarget = 41 : posTarget = 49 ;
        distanceToTarget = posTarget - this.ball.position;

        let resultShoot =  Math.abs(Math.random()*100);
        if( resultShoot >= 80 ){ // but
          if (this.playingUser === 1) {
            this.User1.score++
            this.createEvent('GOOOAAAAAL')
            this.playingUser = 2
          } else {
            this.User2.score++
            this.createEvent('GOOOAAAAAL')
            this.playingUser = 1
          }
          this.ball.position = 45

        }else if(resultShoot > 30 && resultShoot < 80){ // 6 metres
          if (this.playingUser === 1) {
            this.ball.position = 41

            this.createEvent('6 mètres')

            this.playingUser = 2
          } else {
            this.ball.position = 49
            this.createEvent('6 mètres')
            this.playingUser = 1
          }
        }else{ //corner
          if (this.playingUser === 1) {
            this.ball.position = 71
            this.createEvent('corner')
          } else {
            this.ball.position = 19
            this.createEvent('corner')
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
        ( this.playingUser === 1 ) ? posBallon -- : posBallon ++;

        let goalEvent = {
          id: Math.floor(Math.random()*1000000000),
          description: 'Dribble réussi'
        }
        this.events.push(goalEvent)

        return posBallon
      },

      createTerrain(posBallon,posJoueursUser1,posJoueursUser2) {
        this.terrain = [ ];
        for (let y = 1; y <= this.hTerrain; y++) {
          for (let x = 1; x <= this.wTerrain; x++) {

            const jsonData = {
              name: '',
              isBallon: '',
              isPlayer: '',
              user1: {
                player:{ },
                isPlayer: 0
              },
              user2:{
                player:{ },
                isPlayer: 0
              }
            };

            jsonData.name = '' + x.toString() + y.toString() + '';

            if (posBallon.toString() === x.toString() + y.toString()) {
              jsonData.isBallon = 'true'
            } else {
              jsonData.isBallon = 'false'
            }

            let numberCurrentCell = x *10 + y;

            let posJoueurUser1 = _.findKey(posJoueursUser1, { 'position': numberCurrentCell });
            let posJoueurUser2 = _.findKey(posJoueursUser2, { 'position': numberCurrentCell });

            console.log(posJoueurUser1, numberCurrentCell)

            if ( posJoueurUser1 !== undefined ){
              jsonData.user1.player = posJoueurUser1;
              jsonData.user1.isPlayer = 1;
            }

            this.terrain.push(jsonData);
          }
        }
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
            this.changeplayingUser()
            break;
          case 49:
            this.shoot()
            break;
        }
      },

      changeplayingUser(){
        if(this.playingUser ===1){
          this.playingUser = 2
        }else{
          this.playingUser = 1
        }
      }
    },
    created() {
      this.createTerrain(this.ball.position, this.User1.players,this.User2.players);
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
