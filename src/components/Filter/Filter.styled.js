import styled from "styled-components";

export const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${p=>p.theme.space[4]};

`

export const SelectTitle = styled.h3`
    margin: ${p=>p.theme.space[0]};
    font-size: ${p=>p.theme.fontSize.m};
    margin-bottom: ${p=>p.theme.space[2]};
    line-height: 1.0;
`
export const SelectInput = styled.input`
    display: inline-block;
    width: 300px;
    padding: ${p=>p.theme.space[2]};
    border: 1px solid ${p=>p.theme.colors.hover};
`

export const Button = styled.button`
    height: 30px;
    background-color: transparent;
    border: transparent;
    border-radius: ${p=>p.theme.radii.normal};
    font-size: ${p=>p.theme.fontSize.l};
    font-weight: 700;
    color: ${p=>p.theme.colors.accent};
    &:hover{
        color: ${p=>p.theme.colors.white};
        background-color: ${p=>p.theme.colors.hover};
    }
`

export const Message = styled.div`
    font-size: ${p=>p.theme.fontSize.l}; 
`