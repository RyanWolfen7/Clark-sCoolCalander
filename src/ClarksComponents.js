import styled from 'styled-components'
import van  from './assets/icons/van.svg'

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

    *, *::before, *::after {
        box-sizing: border-box;
    
    }
}
`

export const CalenderAppWrapper = styled.div`
&& {
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#1e5d84' };

    *, *::before, *::after {
        box-sizing: border-box;
    
    }
}
`

export const CalendarWrapper = styled.div`
    && {
        padding: 1.5rem;
        background-color: #ffff;
    }
`

export const DeliveryDateWrapper = styled.div`
&& {
    margin: 15rem 2rem 0;
    padding: 0 5rem;
    max-width: 63rem;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#f7f5f3' };
    border-radius: 0.3rem;
    height: auto;

    *, *::before, *::after {
        box-sizing: border-box;
    
    }
}
`

export const ClarkSection = styled.section`
&& {
    max-width: 45rem;
    margin: auto;
    opacity: ${ props => props.opacity ? props.opacity : ''}

    *, *::before, *::after {
        display: block;
    }
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
    font-size: ${ props => props.fontSize ? props.fontSize : '2.8rem' };
    text-align: ${ props => props.textAlign ? props.textAlign : 'auto' };
    margin: ${ props => props.margin ? props.margin : 'auto' };
    color: ${ props => props.color ? props.color : 'black'};
    font-family: "cooperhewitt", helvetica, arial, sans-serif;
    font-weight: 900;

    *::before, *::after {
        box-sizing: border-box;
    }
}
&& span {
    background-color: #c9dbe8;
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

    *::before, *::after {
        box-sizing: border-box;
    }
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
    cursor: pointer;
    letter-spacing: .12rem;

    *::before, *::after {
        box-sizing: border-box;
    }
}
:hover {
    nth-child(7):hover {
        transform: scaleX(3)
    }
}
`

export const ButtonContent = styled.div`
&& {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    padding: .5rem 0 .3rem 1rem;
    z-index: 1;
}
&& p {
    color: #1e5d84;
    font-family: "gt-pressura-regular", helvetica, arial, sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    text-align: left;
    margin-right: 1rem;
}
&& span {
    ::before {
        content: '';
        display: inline-block;
        height: 1.2rem;
        width: 2.2rem;
        background: url(${van}) center no-repeat;
        background-size: contain;
        margin: auto .5rem auto 0;
    }
    background-color: #ecf4f9;
    color: #1e5d84;
    padding: .5rem;
    border-radius: .2rem;
    margin: 1.5rem -.5rem 1.5rem 1rem;
    font-family: "gt-pressura-regular", helvetica, arial, sans-serif;
    text-align: left;
    font-size: 1.6rem;
    display: -webkit-box;
    display: flex;
    margin: 0 2rem 0 0;
    padding: 0 .5rem;
    letter-spacing: 0;
}
`

export const ButtonContentDate = styled.div `
&& {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: .6rem .5rem;
    font-size: 1.6rem;
    position: relative;
}
::after {
    content: '';
    height: 14rem;
    border-bottom-left-radius: 7rem;
    border-top-left-radius: 7rem;
    width: calc(100% + 1rem);
    top: -3.6rem;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    -webkit-transform-origin: right;
    transform-origin: right;
    position: absolute;
    background-color: #c9dbe8;
}
`

export const CalanderDiv = styled.div`
&& {
    :before {
        opacity: 1;
    }
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-bottom: -1rem;
    margin-left: -2rem;
    z-index: 1;
}
&& span {
    position: absolute;
    width: 20.5px;
    height: 16.5px;
    left: 51%;
    top: 55%;
    color: #1e5d84;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1.4rem;
    background-color: #ffff;
}
&& img {
    height: 2.8rem;
    margin-bottom: .7rem;
    margin-top: .2rem;
    border-style: none;
}    
`

export const ButtonText = styled.div`
&& {
    display: -webkit-box;
    display: flex;
    padding: 0 1rem;
    -webkit-box-align: center;
    align-items: center;
} 
&& p {
    position: relative;
    white-space: nowrap;
    z-index: 1;
    color: #1e5d84;
    font-size: 1.6rem;
    background-size: 1rem;
    margin-right: .9rem;
    margin-bottom: .2rem;

    ::after {
        background-color: #1e5d84;
        bottom: 0;
        content: '';
        height: 0.2rem;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
}
&& img {
    height: 1.2rem;
    z-index: ;
}
`
export const CalendarText = styled.div`
&& {
    padding: 2rem;
    color: #1e5d84;
    font-size: 1.8rem;

    .weekDay {
        background-color: #f2c4c4;
        padding: 0 1rem;
    }
}
`
export const StyledButton = styled.button`
&& {
    margin: 2rem auto 0;
    border-color: #1e5d84;
    border-radius: .3rem;
    color: #fff;
    background-color: #1e5d84;
    padding: .5rem 2rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0,0,0,0.2);
}
`

export const DatePicker = styled.div`
&& {
    margin: 2rem auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;

    .date-picker-head {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    .date-picker-body {
        display: flex;
        flex-wrap: wrap;
    }
}
`
export const Overlay = styled.div`
&& {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(128,128,128,0.5);
    z-index: 1; 

    .modal {
            position: fixed; 
            top: 50vh;
            left: 50vw;
            transform: translate(-50%,-50%);
            background-color: white; 
            z-index: 2;
    }
}
`
export const DateCell = styled.div`
&& {
    display: flex;
    padding: .25rem;
    width: 14.2%;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
    cursor: pointer;

}
`
export const DateItem = styled.div`
&& {
    color: ${props => props.color ? props.color : '#e66c55'};
    -webkit-box-align: center;
    align-items: center;
    border-radius: .2rem;
    border: ${props => props.border ? props.border : '.05rem solid #e66c55'}
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    font-size: 1.8rem;
    opacity: ${props => props.opacity ? props.opacity : 1};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''}
    z-Index: ${props => props.zIndex ? props.zIndex : '' }
}
`
