import styled from "styled-components";
import Image from "../Image/Image";
import { motion } from "framer-motion";
import API from "../../../api/API";

const Root = styled.div`
  --color: var(--${(props) => props.color});

  /* overflow: hidden; */
  padding-top: 141%;
  border-radius: calc(var(--cardWidth) / 10);

  box-shadow: ${(props) =>
    !props.disableShadow ? "0 0 10px #292727" : "none"};
  position: relative;
  transform-style: preserve-3d;

  cursor: ${(props) => (props.playable ? "pointer" : "inherit")};
  filter: ${(props) =>
    props.selectable && !props.playable ? "contrast(.5)" : "none"};

  .front,
  .back {
    border-radius: calc(var(--cardWidth) / 10);
    background: whitesmoke;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
  }

  .front {
    transform: translateZ(1px);
    font-family: sans-serif;

    .card-icon {
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .card-icon-image {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }

    .value-souls {
      height: 2.5em;

      width: 2.5em;
      position: absolute;
      z-index: 2;
      top: 10px;
      left: 150px;

      &.value-souls p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: var(--fontSouls);
        color: white;
        -webkit-text-stroke: black 1.5px;
        font-family: sans-serif !important;
      }
    }

    .value-power {
      height: 2em;
      width: 2em;
      position: absolute;
     
      z-index: 2;
      top: 65px;
      left: 157px;

      &.value-power p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: var(--fontPower);
        color: white;
        -webkit-text-stroke: black 1.5px;
        font-family: sans-serif !important;
      }
    }
  }

  .back {
    transform: rotateY(180deg);
  }
`;

export default function Card({
  id = "",
  color = "",
  digit,
  image,
  action = "",
  flip = false,
  rotationY = 180,
  layoutId,
  selectable,
  playable,
  disableShadow = false,
}) {
  const onClick = () => {
    if (playable) API.move(false, id);
  };

  const getFrontContent = () => {
    return (
      <>
        <Image
          src={`assets/images/cards/fr_${color}.svg`}
          ratio={590 / 418}
          zindex={1}
        />
        <img
          src={`assets/images/cards/art/${image}`}
          className="card-icon-image"
          alt=""
        />
        <div className="value-souls">
          <p className="">{digit}</p>
        </div>

        <div className="value-power">
          <p className="">{Math.floor(Math.random() * (99 - 1 + 1)) + 1}</p>
        </div>
      </>
    );
  };

  return (
    <Root
      as={motion.div}
      color={color}
      className="noselect"
      layoutId={layoutId}
      initial={{
        rotateY: flip ? Math.abs(180 - rotationY) : rotationY,
        y: 0,
      }}
      whileHover={
        playable
          ? { y: -100, transition: { duration: 0.3 } }
          : { y: 0, transition: { duration: 0.3 } }
      }
      animate={{ rotateY: rotationY, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      selectable={selectable}
      playable={playable}
      disableShadow={disableShadow}
      onClick={onClick}
    >
      <div className="front">{getFrontContent()}</div>
      <div className="back">
        <Image src={`assets/images/cards/backside.svg`} ratio={590 / 418} />
      </div>
    </Root>
  );
}
