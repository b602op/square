
import React from 'react';

const Square = ( props ) =>  {
    const { count, offset, images, widthSquare, bordRadSquare } = props;

    const arrSquare = new Array( Number(count) )
        .fill( '' )
        // the next line is not readable - i'm sorry
        .map(( _ , i) => ({ id: i, src: images[i] ? images[i].url : (images[Number(String(i).match(/[0-9]$/)[0])] ? images[Number(String(i).match(/[0-9]$/)[0])].url : null)})) 
        .reverse();

    
    
    return (
        <div className="square__table">
            <div className="square__array" style={{transform: `translate(${offset}px, 0)`}}>
                {
                    arrSquare.map( (x, index) => (
                        <img key={x.id} className='square' style={{borderRadius: `${bordRadSquare}px`}} width={`${widthSquare}px`} height={`${widthSquare}px`} loading="lazy" src={x.src} alt=":(" />
                    ))
                }   
            </div>
        </div>
    );
}

export default Square