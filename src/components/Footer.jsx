import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container px-5 py-4 mx-auto flex flex-wrap items-center lg:justify-between justify-center ">
        <a className="flex items-center">
          <img src="/weather.png" alt="logo" width={50} />
          <span className="ml-2 text-xl">Silent Weather</span>
        </a>
        <p className="text-sm">
          © 2023 All right reserved —

          <a href="https://hilarious-raindrop-78baa5.netlify.app/" target='_blank' className='underline'> Praveenkumar M</a>

        </p>

      </div>
    </footer>

  )
}

export default Footer
