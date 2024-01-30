import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
      <section className="pt-3">
          <div className="relative">


              <Image
                  src="/cover.png"
                  width={800}
                  height={500}
                  alt="Picture of the author"
                  className="w-full h-auto lg:h-1/3 lg:w-1/3 object-cover object-center"
              />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white  justify-end">
                  AETHERIX
              </h1>
          </div>

      </section>
  )
}


