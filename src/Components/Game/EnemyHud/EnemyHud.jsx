import { useSelector } from "react-redux";
import styled from "styled-components";
import ProgressBar from "../../progress-bar.component";

const Root = styled.div`
  //  border: 1px solid black;
    background-size: 400px;
    position: relative;
    background-image: url("assets/images/hud/hud_enemy.gif");
    background-position: top center;
    background-repeat: no-repeat;
    width: 400px;
    height: 250px;
  

    
    .value-life {
      height: 2.5em;
      width: 19.5em;
      position: absolute;
      top: 50%;
      left: 39.5%;
      font-size: 0.6em;
    }

    .shield-value {
      height: 1.5em;
      width: 3.5em;
      position: absolute;
      top: 44%;
      left: 79%;
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
      flex-direction: row;
      height: 1.5em;
      width: 26.5em;
      position: absolute;
      top: 55%;
      left: 40%;
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

export default function EnemyHud() {
  const enemySouls = useSelector((state) => state.game.enemySouls);
  const enemyLife = useSelector((state) => state.game.enemyLife);
  const enemyShield = useSelector((state) => state.game.enemyShield);

  let souls = [];
  for (let i = 0; i < enemySouls; i++) {
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
            <span>{enemyShield}</span>
          </p>
        </div>
        <div className="value-life">
          <ProgressBar completed={enemyLife} fontSize={"1.3em"} />
        </div>

        <div className="souls-value">
          {souls.map(() => (
            <div class="mo-fire">
              <div class="yellow-enemy flame"></div>
            </div>
          ))}
        </div>
      
    </Root>
  );
}
