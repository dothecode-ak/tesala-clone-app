import React from 'react'
import styled from 'styled-components'
function Section({ title, desc, leftBtnTxt, rightBtnTxt, backgroundImage }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <ItemTxt>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemTxt>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnTxt}
                    </LeftButton>
                    <RightButton>
                        {rightBtnTxt}
                    </RightButton>
                </ButtonGroup>

                <DownArrow src="/assets/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
/* background-image:url('assets/model-s.jpg'); */
background-image:${props => `url('assets/${props.bgImage}')`};
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`

const ItemTxt = styled.div`
padding-top:15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width:768px) {
    flex-direction: column;
}

`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin: 10px;
`
var RightButton = styled.div`
background-color: white;
height: 40px;
width: 256px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.65;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin: 10px;
`


const DownArrow = styled.img`
height: 40px;
animation: animationDown infinite 1.5s;
overflow: hidden;
`

const Buttons = styled.div`
text-align: center;

`;