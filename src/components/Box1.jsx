import { motion } from 'framer-motion'
import { useState } from 'react'

const Box1 = () => {
    const [ isAnimating, setIsAnimating ] = useState(false)
    return(
        <article className='box-container'>
            <motion.div 
                className='box'
                animate={{
                    x: isAnimating ? 1000 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.5
                }}
                transition={{
                    type:'spring',
                    stiffness: 60,
                }}
                onClick={ () => setIsAnimating(!isAnimating)}
            >

            </motion.div>

        </article>
    )
}

export default Box1