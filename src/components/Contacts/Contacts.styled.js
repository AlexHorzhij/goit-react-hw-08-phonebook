import styled from "styled-components";

export const Section = styled.section`
    width: 900px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${p=>p.theme.space[5]};
`
export const Title = styled.h2`
    font-size: ${p=>p.theme.fontSize.xxl};
    margin-bottom: ${p=>p.theme.space[4]};
`
export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
`
export const Message = styled.div`
    font-size: ${p=>p.theme.fontSize.l}; 
`
export const ContactsCount = styled.p`
    font-size: ${p => p.theme.fontSize.l};
    font-weight: ${p => p.theme.fontWeight.bolt};
    padding-bottom: ${p => p.theme.space[3]};
    margin-bottom: ${p => p.theme.space[4]};    
    border-bottom: 1px solid ${p => p.theme.colors.text};
`