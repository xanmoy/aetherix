import React from 'react'
import Image from 'next/image'
export const About = () => {
  return (
      <section id="about" className="py-14">
          <div className="container mx-auto">
              {/* About Us: Overview */}
              <div className="mb-12 text-center py-6">
                  <h2 className="text-4xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-700 dark:text-gray-300 py-5">

Aetherix is a high-performance server powered by an 11th Gen Intel i5-11400 processor with 12 cores and 16,000 MiB of RAM. It features Intel UHD Graphics and an additional NVIDIA GeForce series GPU for efficient graphical processing. Running on Linux kernel version 6.6.13-200.fc39.x86_64, Aetherix offers reliable storage with a setup of 1 TB, 1 TB, 256 GB, and 256 GB, utilizing a Btrfs filesystem. Operating on Ubuntu Server, it provides a secure and versatile platform for various server applications and services.                  </p>
                  {/* Team Image */}
                  <div className="mt-4">
                      <Image
                          src="/cover2.png" // Add your team photo URL here
                          alt="Team Photo"
                          width={800}
                          height={400}
                      />
                  </div>
                  
              </div>

              
          </div>
      </section>
  )
}


