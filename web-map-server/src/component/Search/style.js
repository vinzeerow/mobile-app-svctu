import styled from 'styled-components';

export const StyleInput = styled.input`
    width: 100%;
    padding-block: 10px;
    font-size: 16px;
    padding-left: 40px;
    border: transparent;
    border-radius: 8px;
    color: #000;
    background-color: #fff;
    &:focus{
        border: none;
        outline: none;
    }
`;