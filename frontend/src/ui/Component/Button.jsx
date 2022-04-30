import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../withStyles';

class Button extends PureComponent {
  render() {
    const {
      disabled,
      styles,
      large,
      small,
      backgroundColor,
      primary,
      secondary,
      onPress,
      label, ...props
    } = this.props;
    return (
      <button
        {...css(
          styles.default,
          small && styles.small,
          large && styles.large,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
        style={backgroundColor && { backgroundColor}}
        disabled={disabled}
        onClick={onPress}
        {...props}
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
Button.defaultProps = {
  onPress: () => {},
  small: false,
  large: false,
  secondary: false,
  primary: false,
  backgroundColor: null,
};

export default withStyles(({ color, size, unit, responsive }) => ({
  // 버튼의 기본모양을 구성한다. 패딩 크기는 unit*2 이다.
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
  },
  fullWidth: {
    width: '100%',
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.default,
  },
}))(Button);
