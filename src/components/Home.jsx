import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import CarData from '../carInfo.json';
console.log(CarData);
function Home() {
    return (<Container >
        {
            CarData.map((data) => <Section key={data.id} title={data.title} desc={data.description} backgroundImage={data.image} leftBtnTxt="Custom Order" rightBtnTxt="Exsiting Inventory" />)
        }
    </Container>
    )
}

export default Home
const Container = styled.div`
        height:100vh;
        `