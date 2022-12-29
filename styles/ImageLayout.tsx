import styled from "styled-components"

export const AutoHeightImageWrapper = styled.section`
  width:100%;
  position: relative;
  & > span {
    position : unset !important;
    & .autoImage {
      object-fit: contain !important;
      position : relative !important;
      height: auto !important
    }
  }
`