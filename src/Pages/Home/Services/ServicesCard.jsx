import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServicesCard = ({ services }) => {
    const { id, name, description, price, image } = services;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl border border-orange-100">
                <figure><img className="object-cover w-[450px] h-[250px] " src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p>{description} </p>
                    <p>Price: {price} </p>
                    <div className="card-actions justify-end">
                        <button className="bg-orange-500 hover:bg-orange-600 flex items-center text-white font-medium rounded p-2"><Link to={`/serviceDetails/${id}`} >View Details</Link> <FcViewDetails /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    services: PropTypes.object.isRequired
}

export default ServicesCard;