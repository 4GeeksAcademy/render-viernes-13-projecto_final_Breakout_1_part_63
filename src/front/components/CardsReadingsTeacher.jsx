import { Link } from "react-router-dom";
import { RandomImgLecturas } from "./RandomImgLecturas";

export const CardsReadingsTeacher = ({
    readings
}) => {
    return (
        <div className="row">
            {readings.map((reading) => (
                <div className="col-md-4 mb-4" key={reading.id}>
                    <div className="card h-100 shadow">


                        {<RandomImgLecturas />}


                        <div className="card-body text-center">

                            <h5 className="card-title mb-3">
                                {reading.title}
                            </h5>
<div className="card-footer">
                            <Link
                                to={`/reading/teacher/${reading.id}`}
                                className="btn btn-primary me-2 fs-5 "
                            >
                                Ver lectura
                            </Link>
                            <Link
                                to={`/reading/edit/${reading.id}`}
                                className="btn btn-warning ms-2 fs-5"
                            >
                                Editar lectura
                            </Link>

</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
