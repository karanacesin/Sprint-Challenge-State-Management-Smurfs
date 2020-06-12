import React, {useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext'

export const Smurf = () => {

    const smurf = useContext(SmurfContext)

    return(

        <div>
            {smurf.map(person => (
                <div key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.age}</p>
                    <p>{person.height}</p>
                </div>
            ))}
        </div>

    )

}