import ConfigGame from "../../Shared/ConfigGame/ConfigGame.jsx";
import DrawingStack from "../DrawingStack/DrawingStack.jsx";
import EndTurn from "../EndTurn/EndTurn.jsx";
import EnemyBattleField from "../EnemyBattleField/EnemyBattleField.jsx";
import PlayerBattleField from "../PlayerBattleField/PlayerBattleField.jsx";
import PlayerHud from "../PlayerHud/PlayerHud.jsx";
import PlayerStack from "../PlayerStack/PlayerStack.jsx";

import EnemyHud from "../EnemyHud/EnemyHud.jsx";
import TopStack from "../TopStack/TopStack.jsx";

export default function Hud() {
  return (
    <>
      <EnemyHud/>
      <ConfigGame />

      <EnemyBattleField />
      <TopStack />
      <PlayerStack />
      <EndTurn />
      <PlayerBattleField />
      <PlayerHud/>

    
      <DrawingStack />
    </>
  );
}
