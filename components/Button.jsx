import React from 'react';
import classnames from 'classnames/bind'
import styles from './Button.module.scss'
import Link from 'next/link';

let cx = classnames.bind(styles)

const Button = ({
    label = "Default label",
    type,
    clickHandler,
    path
}) => {
    let buttonClasses = cx({
        btn : true,
        primary : type === 'primary',
        secondary : type === 'secondary',
    });
    
    return (
        path ? 
        <Link href={path} className={buttonClasses}>
            {label}
        </Link>
        :
        <button className={buttonClasses} onClick={clickHandler}> {label}</button>

        );
}

export default Button;
