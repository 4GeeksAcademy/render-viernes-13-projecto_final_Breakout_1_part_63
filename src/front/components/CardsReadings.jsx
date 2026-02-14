import { Link } from "react-router-dom";
import { RandomImgLecturas } from "./RandomImgLecturas"; 

export const CardsReadings = ({
    readings

}) => {
    return (
        <div className="row">
            {readings.map((reading) => (
                <div className="col-md-4 mb-4" key={reading.id}>
                    <div className="card h-100 shadow">

                       
                            {<RandomImgLecturas/>}
                        

                        <div className="card-body text-center">

                            <h5 className="card-title mb-3">
                                {reading.title}
                            </h5>
<div className="card-footer">
                            <Link
                                to={`/reading/${reading.id}`}
                                className="btn btn-primary fs-5 pe-4 ps-4 "
                            >
                                Revisar lectura
                            </Link>
</div>
                            

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
