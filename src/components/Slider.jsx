import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import Square from './Square';
import Option from './Option';
import { useData } from '../services';

const Slider = () =>  {    
    const [countSquare, setCountSquare] = useState(null);
    const [offset, setOffset] = useState(0);
    const [widthSquare, setWidthSquare] = useState(230);
    const [bordRadSquare, setBordRadSquare] = useState(0);
    const [images, setImages] = useState([]);
    const { count } = qs.parse(window.location.search);
    
    useEffect(()=> {
        let newCount= 1;
        if (window.location.pathname.match(/slider/)) {
            newCount = count.match(/[0-9]/)&&Number(count) ? Number(count) : 1;
        }
        setCountSquare(newCount);
    }, [count]);
    
    useData({ images, setImages });

    return (
    <div className='applecation'>
        <div className='spiner'>
            <Square 
                count={countSquare} 
                offset={offset} 
                images={images}
                widthSquare={widthSquare}
                bordRadSquare={bordRadSquare}
            />
        </div>
        <div className='option'>
            <Option 
                setOffset={setOffset} 
                offset={offset} 
                countSquare={countSquare} 
                widthSquare={widthSquare}
                setWidthSquare={setWidthSquare}
                setBordRadSquare={setBordRadSquare}
                setCountSquare={setCountSquare}
            />    
        </div>
    </div>
    );
}

export default Slider