import { useLoaderData } from "react-router-dom";
import RentEquipmentsCard from "./RentEquipmentsCard";

const RentEquipments = () => {
    const RentEquipments = useLoaderData();
    // console.log(RentEquipments);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {
                RentEquipments.map(equipmentItem => <RentEquipmentsCard key={equipmentItem.id} equipmentItem={equipmentItem} ></RentEquipmentsCard>)
            }
        </div>
    );
};

export default RentEquipments;