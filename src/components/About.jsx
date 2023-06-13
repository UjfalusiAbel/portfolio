import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/constants'
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, service}) => {
    return (
        <Tilt className="xs:w-[250px] w-full" >
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div options={{max:45, scale:1, speed:450}}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
                justify-evenly items-center flex-col'>
                    <img src={service.icon} alt={service.title}
                    className='w-16 h-16 object-contain'/>
                    <h3 className='text-white text-[20px] font-bolt text-center'>{service.title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary 
            text-[18px] max-w-3xl leading-[30px]'>
                I am a software developer student who has started working early in the industry.
                My main interests in the field are computer graphics, simulated physics, AI and game development.
                I am experienced in using the Unity game engine both for 3D webapps and games.
                I am also doing fullstack web development, frontend in JavaScript and TypeScript using
                the React framework, backen in .Net using C#. I am also familiar with mobile development in React Native.
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} service={service}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");
