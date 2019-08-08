import React from 'react';

export default props => (
    
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={props.location} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Visit</a>
    </div>
);