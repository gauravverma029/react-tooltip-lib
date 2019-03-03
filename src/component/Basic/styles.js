import styled from 'styled-components';
import { color, width, borderRadius, space, fontSize, fontWeight } from 'styled-system';

export const TargetContainer = styled.div`
  cursor: pointer;
  width: ${props => (props.childrenProp ? '' : props.hintIconSize)};
  display: inline-block;
`;

export const TipContent = styled.div`
   ${space}
   text-trasform:${props => props.tipTextTransform}
}
`;

export const ArrowModifiers = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
}
`;

export const PopperModifiers = styled.div`
  ${color}
  ${width}
  ${borderRadius}
  ${space}
  ${fontSize}
  ${fontWeight}
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  &[data-placement^="bottom"] {
    margin-top: ${props => props.arrowSize}px;
 }
  &[data-placement^="top"] {
    margin-bottom: ${props => props.arrowSize}px;
  }
  &[data-placement^="right"] {
    margin-left: ${props => props.arrowSize}px;
  }

  &[data-placement^="left"] {
    margin-right: ${props => props.arrowSize}px;
  }

&[data-placement^="bottom"] .customeArrow {
  border-width: 0 ${props => props.arrowSize}px ${props => props.arrowSize}px ${props => props.arrowSize}px;
  border-color: transparent transparent ${props => props.bg} transparent;
  top: -${props => props.arrowSize}px;
  left: calc(50% - ${props => props.arrowSize}px);
  margin-top: 0;
  margin-bottom: 0;
}

&[data-placement^="top"] .customeArrow {
  border-width: ${props => props.arrowSize}px ${props => props.arrowSize}px 0 ${props => props.arrowSize}px;
  border-color: ${props => props.bg} transparent transparent transparent;
  bottom: -${props => props.arrowSize}px;
  left: calc(50% - ${props => props.arrowSize}px);
  margin-top: 0;
  margin-bottom: 0;
}

&[data-placement^="right"] .customeArrow {
  border-width: ${props => props.arrowSize}px ${props => props.arrowSize}px ${props => props.arrowSize}px 0;
  border-color: transparent ${props => props.bg} transparent transparent;
  left: -${props => props.arrowSize}px;
  top: calc(50% - ${props => props.arrowSize}px);
  margin-left: 0;
  margin-right: 0;
}

&[data-placement^="left"] .customeArrow {
  border-width: ${props => props.arrowSize}px 0 ${props => props.arrowSize}px ${props => props.arrowSize}px;
  border-color: transparent transparent transparent ${props => props.bg};
  right: -${props => props.arrowSize}px;
  top: calc(50% - ${props => props.arrowSize}px);
  margin-left: 0;
  margin-right: 0;
}
}
`;
