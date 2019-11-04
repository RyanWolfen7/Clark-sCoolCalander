import React from 'react'
import styled, { css } from 'styled-components'

export const ContentWrapper = styled.div`
&& {
    max-width: 115rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-rows: auto 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 3rem;
    -webkit-box-align: start;
    align-items: start;
}
`

export const CalenderWrapper = styled.div`
&& {
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#1e5d84' };
}
`

export const DeliveryDateWrapper = styled.div`
&& {
    margin: 4rem 2rem 0;
    padding: 0 9rem;
    max-width: 63rem;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#f7f5f3' };
    border-radius: 0.3rem;
    height: auto;
}
&& {
    *, *::before, *::after {
        box-sizing: border-box;
    }
}
`

export const ClarkSection = styled.section`
&& {
    max-width: 45rem;
    margin: auto;
}
&& *, *::before, *::after {
    display: block;
}
`

export const TitleContainer = styled.div`
&& {
    display: flex;
    margin-bottom: 2rem;
}
&& *, *::before, *::after {
    box-sizing: border-box;
}
`

export const BoldHeader = styled.h2`
&& {
    font-size: 2.8rem;
    text-align: ${ props => props.textAlign ? props.textAlign : 'auto' };
    margin: ${ props => props.margin ? props.margin : 'auto' };
    color: ${ props => props.color ? props.color : 'black'};
    font-family: "cooperhewitt", helvetica, arial, sans-serif;
    font-weight: 900;
}
&& span {
    background-color: #e7e6e4;
    color: #1e5d84;
    border-radius: .2rem;
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "gt-pressura-regular", helvetica, arial, sans-serif;
    text-align: left;
    display: inline-block;
    padding: .2rem 1rem;
    transform: translateY(-0.3rem);
    margin: 0;
}
`

export const Button = styled.button`
&& {
    -webkit-box-align: center;
    align-items: center;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#fff' };
    box-shadow:  ${ props => props.boxShadow ? props.boxShadow : '0 0.2rem 0.4rem 0 rgba(0,0,0,0.2)' };
    border-radius: .3rem;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    overflow: hidden;
    padding: 0;
    border: ${ props => props.border ? props.border : '0.2rem solid #5d92b8' };
}
`
