import React from 'react';


function InputField  ({id, type, register, name, validation, children })  {
    return (
        <div>
            <lebel htmlForm={id} >
                {children()}
                <input
                 type={type}
                 id={id}   {...register(name, validation)}

                />
            </lebel>

        </div>
    );
}

export default InputField;