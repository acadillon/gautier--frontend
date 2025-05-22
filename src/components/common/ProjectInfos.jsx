import { } from 'react';


const ProjectInfos = ({ data }) => {

    // Render
    return (
        <>
            <div className="project--infos">
                {data.typologie?.name && (
                    <p>
                        Type : {data.typologie.name}
                    </p>
                )}
                {data.city && (
                    <p>
                        Ville : {data.city}
                    </p>
                )}
                {data.area && (
                    <p>
                        Surface : {data.area}m²
                    </p>
                )}
                {data.year && (
                    <p>
                        Année : {data.year}
                    </p>
                )}
            </div>

        </>
    );
};

export default ProjectInfos;