import { } from 'react';
import fetchApi from '../assets/scripts/lib/strapi.js';

const about = await fetchApi({
    endpoint: 'about?populate=*',
    wrappedByKey: 'data',
    locale: 'fr',
});

const About = () => {

    // Render
    return (
        <>

            <div className='p-margin pt-0 md:grid md:grid-cols-3 md:gap-margin w-full'>
                <div>
                    <a href={`mailto:${about.Email}`} target="_blank" rel="noopener noreferrer" className='text-base text-blue block'>
                        {about.Email}
                    </a>
                    <address className='text-base block not-italic'>
                        {about.Adress}
                    </address>
                    <a href={`tel:${about.Phone}`} target="_blank" rel="noopener noreferrer" className='text-base text-blue block'>
                        {about.Phone}
                    </a>
                    <a href={about.Instagram} target="_blank" rel="noopener noreferrer" className='text-base text-blue block'>
                        <p>instagram</p>
                    </a>



                </div>
                <div>
                    <p className='text-base'>
                        {about.Bio}
                    </p>
                   
                </div>
                <div>

                </div>
            </div>

        </>
    );
};

export default About;