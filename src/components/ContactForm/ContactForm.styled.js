import styled from "styled-components";

export const Form = styled.form`
    background-color: ${p=>p.theme.colors.white};
    display: flex;
    flex-direction: column;
    font-size: ${p=>p.theme.fontSize.l};
    padding: ${p=>p.theme.space[4]} ${p=>p.theme.space[3]};
    border: 1px solid black;        
`

export const FormTitle = styled.h3`
    margin: ${p=>p.theme.space[0]};
    font-size: ${p=>p.theme.fontSize.l};
    margin-bottom: ${p=>p.theme.space[3]};
    line-height: 1.0;
`
export const FormInput = styled.input`
    width: 300px;
    padding: ${p=>p.theme.space[2]};
    margin-bottom: ${p=>p.theme.space[5]};
    border: 1px solid ${p=>p.theme.colors.hover};
`

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${p=>p.theme.colors.white};
    width: 150px;
    padding: ${p=>p.theme.space[1]};
    font-size: ${p=>p.theme.fontSize.m};
    border-radius: ${p=>p.theme.radii.normal};
    :hover, :focus{
        background-color: ${p=>p.theme.colors.hover};
        color: ${p=>p.theme.colors.white};
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p=>p.theme.space[4]};
`