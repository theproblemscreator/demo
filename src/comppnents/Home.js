import React, { useState } from 'react';
import Counter from './Counter';

export default function Home(props) {

    return (
        <div>
            <h2> Welcome to the ReactJS Application... </h2>
            <hr></hr>
            <Counter/>

        </div>
    );
}
