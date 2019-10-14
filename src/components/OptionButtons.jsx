import React from 'react';

const OptionButtons = ( props ) =>  {
    const {
        setOffset, 
        offset, 
        countSquare, 
        widthSquare,
        setCountSquare,
    } = props;

    const distance = widthSquare + 30;
    

    const onPrev = () => {
        if (offset) {
            let newOffset = offset + distance;
            setOffset(newOffset)
        }
    }

    const onNext = () => {
        if (offset > (countSquare-1)*(-distance)) {
            let newOffset = offset - distance;
            setOffset(newOffset);
        }
    }

    const onAddSquare = () => {
        let newCountSquare = Number(countSquare);
        newCountSquare++;
        setCountSquare(newCountSquare);
    }
    
    return (
        <>
            <div>
                <button onClick={onAddSquare}>Add square</button>
            </div>
            <div>
                <button onClick={onPrev}>Prev</button>
                <button onClick={onNext}>Next</button>
            </div>
        </>
    );
}

export default OptionButtons