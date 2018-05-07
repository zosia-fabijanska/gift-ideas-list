import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 30px;
`

const Input = styled.input`
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #AC47D3;
    font-size: 16px;
    margin-right: 30px;
`

const Button = styled.input`
    background-color: #AC47D3;
    color: #fff;
    font-size: 24px;
    border-radius: 50px;
    padding: 8px 40px;
    border: 1px solid #AC47D3;
    cursor: pointer;
    transition: ease-in-out 300ms;
    &:hover {
        background-color: #fff;
        color: #AC47D3;
    }
`

const GiftInput = () => (
    <Container>
        <form method="POST">
            <Input name="gift" type="text" value="gift..." required/>
            <Input name="name" type="text" value="for..." />
            <Button name="submit" type="submit" value="Add Gift" />
        </form>
    </Container>
);


export default GiftInput;