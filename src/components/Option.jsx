import React from 'react';
import OptionInputs from './OptionInputs';
import OptionButtons from './OptionButtons';


const Option = ( props ) =>  {    
    return (
    <div className="option_squares">
        <div className="option__size_squares">
            <OptionInputs {...props}/>
        </div>
        <div className="option__logic_squares">
            <OptionButtons {...props}/>
        </div>
    </div>
    );
}

export default Option