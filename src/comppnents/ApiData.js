import React, { useEffect, useState } from 'react';

export default function ApiData(props) {
    const [data, setData] = useState([]);
    const { disclamer, BPI, USD, GBP, EUR } = data  || [];

    const response = async () => {
        const records = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const res = await records.json();
        setData(res);
    }

    useEffect(() => {
        response()
    }, []);

    console.log('After Records fetching :', data.bpi);
   

    return (
        <div>
          
        </div>
    );
}
