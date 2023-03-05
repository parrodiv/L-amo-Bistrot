import React from 'react'

const TextFragment = ({
  page,
  title,
  title1_2,
  text,
  titleFood,
  titleDrink,
}) => {
  return (
    <>
      {page === 'food' ? (
        <section className='min-h-[280px] container flex flex-col items-center justify-center w-full h-full mx-auto'>
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>{titleFood}</h2>
          </div>
        </section>
      ) : page === 'drink' ? (
        <section className='min-h-[280px] container flex flex-col items-center justify-center w-full h-full mx-auto'>
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>{titleDrink}</h2>
          </div>
        </section>
      ) : (
        <section className='min-h-[480px] container flex flex-col items-center justify-center w-full h-full mx-auto'>
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>{title}</h2>
            {title1_2 && <h2 className='my-3 h3 md:h2'>{title1_2}</h2>}
            <p className='leading-8 font-secondary'>{text}</p>
          </div>
        </section>
      )}
    </>
  )
}

export default TextFragment
