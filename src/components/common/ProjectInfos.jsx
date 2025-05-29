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
                        {data.district && `, ${data.district}`}
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
                {data.peb && (
                    <p>
                        PEB : {data.peb}
                    </p>
                )}
            </div>

        </>
    );
};

export default ProjectInfos;