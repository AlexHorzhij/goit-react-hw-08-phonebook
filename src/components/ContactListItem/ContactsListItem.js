import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    font-size: ${p=>p.theme.fontSize.m}; 
    background-color: ${p=>p.theme.colors.white};
    padding: ${p=>p.theme.space[0]} ${p=>p.theme.space[4]};
    border-radius: ${p=>p.theme.radii.normal};
    margin-left: ${p=>p.theme.space[3]};
    :hover, :focus{
        background-color: ${p=>p.theme.colors.hover};
        color: ${p=>p.theme.colors.white};
    }
`