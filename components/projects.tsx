"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
    return (
        <motion.section>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={project.title}>
                        <Project {...project}></Project>
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    )
}




