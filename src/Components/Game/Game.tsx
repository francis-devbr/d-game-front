import { AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  moveCard,
  movePlayer,
  stopGame,
} from "../../stores/features/gameSlice";
import Scoreboard from "./Scoreboard/Scoreboard.jsx";
import { Player } from "../../utils/interfaces.js";
import API from "../../api/API";
import { Navigate } from "react-router";
import GameAudio from "../../utils/audio.js";

import Hud from "./Hud/Hud";

export default function Game() {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(false);
  const [playersOrder, setPlayersOrder] = useState<Player[]>([]);
  const inGame = useSelector((state) => state.game.inGame);

  useEffect(() => {
    const timeoutReady = setTimeout(() => {
      API.emitReady();
    }, 2000);
    API.onMove(({ card, draw, cardsToDraw, nxtPlayer }) => {
      dispatch(
        moveCard({
          nextPlayer: nxtPlayer,
          card,
          draw,
          cardsToDraw,
        })
      );
      if (draw) {
        GameAudio.playAudio("draw", draw);
      } else GameAudio.playAudio("play");
      setTimeout(() => dispatch(movePlayer()), 500);
    });

    API.onFinishGame((players: Player[]) => {
      setFinished(true);
      setPlayersOrder(players);
    });

    return () => {
      API.leaveServer();
      dispatch(stopGame());
      clearTimeout(timeoutReady);
    };
  }, [dispatch]);

  if (!inGame) return <Navigate replace to="/main-menu" />;

  return (
    <div
      style={{
        backgroundImage: "url(assets/images/board-arena.png)",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimateSharedLayout>
        <Hud />
      </AnimateSharedLayout>

      {finished && <Scoreboard players={playersOrder} />}
    </div>
  );
}
