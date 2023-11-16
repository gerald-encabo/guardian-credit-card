<<<<<<< HEAD
import React from 'react';
import './Button.scss';

const styles = ['btn-primary', 'btn-secondary']
const size = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide']
const color = ['primary', 'blue', 'dark']

const Button = ({
    children, buttonStyle, buttonSize, buttonColor
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]
    const checkButtonColor = color.includes(buttonColor) ? buttonColor : color[null]

    return (
        <button className=
           {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} onClick={onClick} type={type}`}>
           {children}
        </button>
    )
};

=======
import React from 'react';
import './Button.scss';

const styles = ['btn-primary', 'btn-secondary']
const size = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide']
const color = ['primary', 'blue', 'dark']

const Button = ({
    children, buttonStyle, buttonSize, buttonColor
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]
    const checkButtonColor = color.includes(buttonColor) ? buttonColor : color[null]

    return (
        <button className=
           {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} onClick={onClick} type={type} aria-label="${children}"`}
        >
           {children}
        </button>
    )
};

>>>>>>> 91db7676131ab5480e1325f7f50bf3e7184f67b6
export default Button