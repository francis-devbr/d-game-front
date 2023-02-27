import { useSelector } from "react-redux";
import styled from "styled-components";
import ProgressBar from "../../progress-bar.component";

const Root = styled.div`
  //  border: 1px solid black;
    background-size: 500px;
     position: absolute;
    background-image: url("assets/images/hud/hud_player.gif");
    background-position: top center;
    background-repeat: no-repeat;
    width: 500px;
    height: 250px;
    bottom: 0;
    right: 0;

    
    .value-life {
      height: 3em;
      width: 27.5em;
      position: absolute;
      top: 60%;
      right: 39.5%;
      font-size: 0.6em;
    }

    .shield-value {
      height: 1.5em;
      width: 3.5em;
      position: absolute;
      top: 53%;
      right: 81%;
      &.shield-value p {
        display: flex;
        flex-direction: row;
        margin: 0;
        position: absolute;
        top: 20%;
        left: 30%;
        transform: translate(-50%, -50%);
      font-size: 1em;
      color:green;
      font-weight: bold;
      font-family: sans-serif !important;
      
      }
    }
  
    .souls-value {
      display: flex;
      flex-direction: row-reverse;
      height: 1.5em;
      width: 26.5em;
      position: absolute;
      top: 72%;
      right: 37%;
      &.souls-value .mo-fire {
        margin-right: 3.5%;
        margin-top: 4%;
        transform-origin: center bottom;
        animation-name: flicker;
        animation-duration: 3ms;
        animation-delay: 200ms;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    }
  }
  .img-enemy-hud {
    
  }

   .img-shield-hud {
    width: 15px;
  }
`;

export default function PlayerHud() {

   const { player, currentPlayer } = useSelector((state) => ({
     player: state.game.players[0],
     currentPlayer: state.game.currentPlayer,
   }));

  let souls = [];
  for (let i = 0; i < player?.playerSouls; i++) {
    souls.push(i);
  }
  return (
    <Root>
      <div className="shield-value">
        <p className="">
          <img
            src="assets/images/hud/shield.svg"
            alt=""
            className="img-shield-hud"
          />
          <span>{player?.playerShield}</span>
        </p>
      </div>

      <div className="value-life">
        <ProgressBar completed={player?.playerLife} fontSize={"2em"} />
      </div>
      <div className="souls-value">
        {souls.map(() => (
          <div class="mo-fire">
            <div class="yellow flame"></div>
          </div>
        ))}
      </div>
    </Root>
  );
}
