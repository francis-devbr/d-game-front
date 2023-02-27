import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../Shared/Card/Card";

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0px;
  margin-top: 150px;
  position: absolute;
  top: 45vh;
  display: flex;
  left: 50%;
  transform: translate(-50%, -50%);
  --cardsCnt: ${(props) => props.cardsCnt};
  --containerMaxWidth: 55vw;
  .card-container {
    &:not(:last-of-type) {
      margin-right: calc(
        -1 * max(calc((
                  var(--cardWidth) * var(--cardsCnt) - var(--containerMaxWidth)
                ) / (var(--cardsCnt)-1)), calc(var(--cardWidth) / 15))
      );
    }
  }
`;

export default function PlayerBattleField() {
  const playerBattlefield = useSelector(
    (state) => state.game.playerBattlefield
  );
  return (
    <Root layout cardsCnt={playerBattlefield.length}>
      {playerBattlefield.map((card) => (
        <div className="card-container" key={card.layoutId}>
          <Card
            layoutId={card.layoutId}
            color={card.color}
            digit={card.digit}
            image={card.image}
            action={card.action}
            width={200}
            flip={card.flip}
            rotationY={card.rotationY}
          />
        </div>
      ))}
    </Root>
  );
}
