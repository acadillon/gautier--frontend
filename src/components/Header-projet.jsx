import {} from 'react';


const HeaderProjet = () => {

    // Render
    return (
        <>
            <header>
                <div className='p-margin flex justify-between md:grid md:grid-cols-3 gap-margin w-full'>
                    <button onClick={handleClick} className="block text-left text-title order-2 md:order-1">
                        <span className='md:capitalize'>Project Name</span>
                    </button>
                    <h1 className="text-title order-1 md:order-2">G-architecture</h1>
                    Cross
                </div>
            </header>
        </>
    );
};

export default HeaderProjet;