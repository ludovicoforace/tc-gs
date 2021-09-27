import styled from "styled-components"
import { darken } from "polished"

export default styled.a`
display: block;
color: ${({theme}) => theme.colors.text};
background-color: ${({theme}) => theme.bgs.azure};
border-style: solid;
border-width: 0 0 3px;
border-color: ${({theme}) => darken(0.2, theme.bgs.azure)};
border-radius: 3px;
line-height: normal;
padding: 10px 40px;
text-decoration: none;
`
