import { motion } from 'framer-motion'

const Box3 = () => {

    const boxVariants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren"
            }
        }
    }

    const listVariants = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            staggerChildren: 0.2
        }
    }

    return(
        <article className='box-container'>
            <motion.div
                className='box'
                variants={boxVariants}
                animate="visible"
                initial="hidden"
            >
                { [1,2,3].map(item => (
                    <motion.li key={item} className='boxItem'
                    variants={listVariants}
                    >
                    </motion.li>
                )) }
            </motion.div>
        </article>
    )
}

export default Box3