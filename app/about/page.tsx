import AboutTree from '@/components/AboutTree'
import About from '@/components/about'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col justify-center">
        <About />
        <AboutTree />
    </main>

  )
}

export default page