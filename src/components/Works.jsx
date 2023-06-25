import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/constants'
import { SectionWrapper } from "../hoc"
import { link } from '../assets'

const ProjectCard = ({project, index}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{max:45, scale:1, speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[265px] w-full">
                <div className='relative w-full h-[220px]'>
                    <img src={project.image} alt={project.name}
                    className='w-full h-full rounded-2xl'/>
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div onClick={() => window.open(project.link, "_blank")}
                        className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                            <img src={link} alt="link" className='w-1/2 h-1/2 object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}> My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects I worked on</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p variants={fadeIn("","", 0.1, 1)}
                className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]'>
                    Following projects showcases my skills and experience in the industry through
                    real-world examples. Each one of these are projects I have taken part in or built 
                    entirely myself. They reflect my ability to solve complex problems and to work with
                    different technologies.
                </motion.p>
            </div>
            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} project={project}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "works");
