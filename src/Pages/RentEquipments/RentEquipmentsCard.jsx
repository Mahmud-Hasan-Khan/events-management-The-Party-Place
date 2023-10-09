import PropTypes from 'prop-types';

const RentEquipmentsCard = ({ equipmentItem }) => {
    const { name, description, price_per_day, price_per_hour, availability, max_rental_duration_hours, image_url } = equipmentItem;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border border-orange-100">
            <figure><img className="object-cover h-[250px] " src={image_url} alt="equipment" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg">{description} </p>
                <p className="text-lg">Price Per Day : ${price_per_day} </p>
                <p className="text-lg">Price Per Hour : ${price_per_hour} </p>
                <p className="text-lg">Availability : ${availability} </p>
                <p className="text-lg">Max Rental Duration : ${max_rental_duration_hours} </p>
                <div className="card-actions justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2">Rent Now</button>
                </div>
            </div>
        </div>
    );
};

RentEquipmentsCard.propTypes = {
    equipmentItem: PropTypes.object.isRequired
}

export default RentEquipmentsCard;