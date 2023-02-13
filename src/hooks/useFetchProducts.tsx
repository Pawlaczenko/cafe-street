import React, { useEffect, useState } from 'react'
import { iProduct, PRODUCTS } from '../data/products';

const useFetchProducts = (count : number) => {
    const [data,setData] = useState<Array<iProduct>>([]);

    useEffect(() => {
        const length = Math.min(count,PRODUCTS.length);
        setData(PRODUCTS.slice(0,length));
    }, [count]);

    return data;
}

export default useFetchProducts