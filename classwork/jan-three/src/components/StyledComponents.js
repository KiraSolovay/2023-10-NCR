import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;`

const Title = styled.h1`
    font-siz: 3em;
    color: red;`


export default function Styled () {
return (
    <div>
        <Title>Styled Components</Title>
        <Container>
            Hello World!
        </Container>
    </div>
)
}