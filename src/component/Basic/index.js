import React, { Component } from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import { Portal } from 'react-portal';

import { ReactComponent as InformationIcon } from '../../icons/information.svg';
import { TargetContainer, ArrowModifiers, PopperModifiers, TipContent } from './styles';
import ThemeDefaultProps from '../Theme';

class Basic extends Component {
  state = {
    initialVisibility: this.props.initialVisibility === 'show' ? true : false,
  };
  childNode = React.createRef();

  handleClick = () => {
    const { trigger } = this.props;
    const { initialVisibility } = this.state;
    if (trigger === 'onClick') {
      this.setState({
        initialVisibility: !initialVisibility,
      });
    }
  };

  handleMouseLeave(trigger) {
    if (trigger === 'onHover') {
      this.setState({
        initialVisibility: false,
      });
    }
  }

  handleMouseEnter(trigger) {
    if (trigger === 'onHover') {
      this.setState({
        initialVisibility: true,
      });
    }
  }

  render() {
    const { theme, tipContentWidth, tipContentPadding, tipTextTransform, trigger, tipContent, placement, iconSize, ...props } = this.props;
    const { initialVisibility } = this.state;
    let tipContentProps = { ...props };

    if (theme !== 'custom') {
      let themeObj = ThemeDefaultProps[theme];
      tipContentProps = { ...themeObj, ...tipContentProps };
    }

    return (
      <Manager>
        <Target>
          {({ targetProps }) => (
            <TargetContainer
              id="toolTipContainer"
              {...targetProps}
              hintIconSize={iconSize}
              childrenProp={props.children}
              onClick={this.handleClick}
              onMouseLeave={() => this.handleMouseLeave(trigger)}
              onBlur={() => this.handleMouseEnter(trigger)}
              onFocus={() => this.handleMouseLeave(trigger)}
              onMouseEnter={() => this.handleMouseEnter(trigger)}>
              {props.children || <InformationIcon />}
            </TargetContainer>
          )}
        </Target>
        {initialVisibility && (
          <Portal>
            <Popper placement={placement}>
              {({ popperProps }) => (
                <PopperModifiers {...popperProps} {...tipContentProps}>
                  <TipContent width={tipContentWidth} p={tipContentPadding} tipTextTransform={tipTextTransform}>
                    {tipContent}
                  </TipContent>
                  <Arrow>{({ arrowProps }) => <ArrowModifiers {...arrowProps} className="customeArrow" />}</Arrow>
                </PopperModifiers>
              )}
            </Popper>
          </Portal>
        )}
      </Manager>
    );
  }
}

Basic.defaultProps = {
  theme: 'default',
  trigger: 'onHover',
  tipContentWidth: 'auto',
  borderRadius: '2px',
  fontSize: '12px',
  fontWeight: '400',
  tipTextTransform: 'none',
  tipContentPadding: '4px',
  tipContent: 'React toolTip lib',
  arrowSize: '4',
  placement: 'auto',
  iconSize: '16px',
  initialVisibility: 'hide',
};

export default Basic;
