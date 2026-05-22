"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
              src={"/profile_picture.jpg"} alt='profile picture' width={192} height={192} quality={95} priority={true} loading='eager' />
          </motion.div>
          <motion.span
            className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
        className='text-center mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' >
        <span>{`Hi, I'm Tapusa Codrin, a passionate software developer.`}</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium'>
        <Link href={"#contact"} className='group bg-gray-900 text-white px-7 py-3 flex
        items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 transition hover:bg-gray-950 active:scale-105'>
          Contact me here
          <BsArrowRight
            className='group-hover:translate-x-1 group-hover:opacity-100 group-hover:font-bold group-hover:text-lg transition opacity-70'>
          </BsArrowRight>
        </Link>

        <a href="/CV.pdf" download={true} className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 border border-black/10'>
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 group-hover:opacity-100 group-hover:text-gray-950 transition'>
          </HiDownload>
        </a>

        <a href="https://www.linkedin.com/in/your-profile" target='_blank' className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] transition active:scale-[1.15] border border-black/10'>
          <BsLinkedin></BsLinkedin>
        </a>

        <a href="https://github.com/your-profile" target='_blank' className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] transition active:scale-[1.15] border border-black/10'>
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  )
}
