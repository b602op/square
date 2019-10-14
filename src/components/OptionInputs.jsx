import React from 'react';


const OptionInputs = ( props ) =>  {
    const {
        setOffset, 
        setWidthSquare,
        setBordRadSquare
    } = props;

    const onSetWidthSquare = ( width ) => {
        let newWidth = Number(width) ? Number(width) : 230;
        setWidthSquare(newWidth);
        setOffset(0);
    }

    const onSetBordRad = ( radius ) => {
        let newBordRad = Number(radius) ? Number(radius) : 0;
        setBordRadSquare(newBordRad);
    }
    
    return (
        <>
            <div className="option_size">
                <input onChange={(evt)=>onSetWidthSquare(evt.target.value)} placeholder="Size"></input>                
            </div>
            <div className="option_radius">
                <input onChange={(evt)=>onSetBordRad(evt.target.value)} placeholder="Corner-radius"></input>
            </div>
        </>
    );
}

export default OptionInputs