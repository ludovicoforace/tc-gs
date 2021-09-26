import styled from "styled-components"
import { darken } from "polished"

export default styled.a`
display: block;
color: ${({theme}) => theme.colors.text};
background-color: ${({theme}) => theme.bgs.purple};
border-style: solid;
border-width: 0 0 3px;
border-color: ${({theme}) => darken(0.2, theme.bgs.purple)};
border-radius: 3px;
line-height: normal;
padding: 15px 40px;
text-decoration: none;
`
