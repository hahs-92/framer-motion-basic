import { motion } from 'framer-motion'

const Box2 = () => {
    return(
        <article className='box-container'>
            <motion.div
                className='box'
                drag
                dragConstraints={{
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 0
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
            >
            </motion.div>
        </article>
    )
}

export default Box2