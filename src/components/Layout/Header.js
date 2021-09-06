import React, { Fragment } from 'react';
import mealImage from '../../assets/meals.jpg';
import  classes from './Header.module.css';
import HeaderCart from './HeaderCart';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food App</h1>
                <HeaderCart onClick={props.onShowCart}></HeaderCart>
               
            </header>
            <div className={classes.main_image}> 
                <img src={mealImage} alt="Delicious Food!" />
            </div>
        </Fragment> 
    )
}
export default Header;
/*
 ---> className={['classes.main-image']} here - in name so it cant be used like classes.main-image

 */