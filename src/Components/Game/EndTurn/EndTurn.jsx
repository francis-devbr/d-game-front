import styled from "styled-components";


const Root = styled.div`
    margin-right: 10px;
    margin-top: 46vh;
    right: 10px;
    position: absolute;

    .btn-end-turn{
        width: 120px;
        background-color: #000;
        color: #FFF;
        font-size: 1.2em;
        height: 50px;
        border-radius: 10px;
    }

    .btn-end-turn:hover{
        width: 120px;
        background-color: #777;
        color: #FFF;
        font-size: 1.2em;
        height: 50px;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export default function EndTurn() {
  return <Root>
    <button  className="btn-end-turn">End Turn</button>
   
  </Root>;
}
