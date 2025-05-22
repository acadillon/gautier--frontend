import { } from 'react';


const HeaderProjet = ({ data }) => {

    // Render
    return (
        <>
            <header>
                <div className='p-margin flex justify-between md:grid md:grid-cols-3 gap-margin w-full'>
                    <div>
                        <h1 className="text-title order-1 md:order-2">{data.title}</h1>
                    </div>
                    <div className="max-md:hidden">
                        <a href="/" aria-label="Retour à la page d'accueil">
                            <h2 className='text-title order-1 md:order-2'>G-architecture</h2>
                        </a>
                    </div>
                    <div className='flex justify-end items-center'>
                        <a href="/" aria-label="Retour à la page d'accueil">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 14M13 1L1 14" stroke="black" stroke-width="2" />
                            </svg>
                        </a>
                    </div>

                </div>
            </header>
        </>
    );
};

export default HeaderProjet;