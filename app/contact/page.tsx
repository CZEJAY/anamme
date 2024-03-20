"use client"
import ContactForm from '@/components/Contact'
import Gradient from '@/components/Contact/Gradient'
import React from 'react'

const page = () => {
  return (
    <section className='relative flex flex-col items-center justify-center'>
      <Gradient />
      <ContactForm/>
    </section>
  )
}

export default page