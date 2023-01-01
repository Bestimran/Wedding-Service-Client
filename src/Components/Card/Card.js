import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description.slice(0,100) + '...'}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/details/:${service.id}`}>details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Card;