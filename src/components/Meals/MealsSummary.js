import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food</h2>
            <p>Choose your favorite meal and enjoy a delicious lunch or dinner at home</p>
        </section>
    );
};
export default MealsSummary;