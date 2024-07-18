import React from 'react'

const Blog = () => {
    const article = [
        {id: 1, title: "Un diagnostico a tiempo logrará una mejor calidad de vida", image: "/src/assets/article1.jpg"},
        {id: 2, title: "Un diagnostico a tiempo logrará una mejor calidad de vida", image: "/src/assets/article1.jpg"},
        {id: 3, title: "Un diagnostico a tiempo logrará una mejor calidad de vida", image: "/src/assets/article1.jpg"},
    ];
  return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4'>Titulo titulo titulo</h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatum ullam? Non nesciunt doloribus saepe aliquid commodi cum quibusdam perferendis fugit tenetur quasi, ullam dolorum alias, assumenda praesentium voluptates quos.</p>
        </div>

        { /* articles  */ }

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                article.map( article => <div key={article.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={article.image} alt=''className='hover:scale-95 transition-all duration-300' />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{article.title}</h3>
                        <div className='flex items-center justify-center grap-8'>
                            <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>
                            Texto texto texto{" "}
                            <svg 
                            xmlns='https://www.w3.or/2000/svg'
                            width="17"
                            height="11"
                            viewBox='0 0 17 11'
                            fill='none'
                            className='inline-block ml-2'
                            >
                                <path
                                d='M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905'
                                stroke='#4CAF4F'
                                />
                            </svg>
                            </a>
                        </div>
                    </div> 
                </div>) 
            }
        </div>
    </div>
  )
}

export default Blog