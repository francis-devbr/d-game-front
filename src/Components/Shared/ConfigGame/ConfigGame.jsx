import styled from "styled-components";


const Root = styled.div`
    margin-right: 73px;
    margin-top: 10px;
    right: 0px;
    position: absolute;

    .btn-config{
        width:20px;
        background-color: #000;
        color: #FFF;
        font-size: 1.2em;
        height: 50px;
        border-radius: 10px;
    }
`;

export default function ConfigGame() {
 
  return (
    <Root>
      <button  className="btn-config"></button>
    </Root>
  );
}
