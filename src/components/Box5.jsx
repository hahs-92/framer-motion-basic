import { motion, useAnimation } from 'framer-motion'

const Box5 = () => {

    const control = useAnimation()

    return(
        <article className='box-container'>
            <button onClick={
                () => {
                    control.start({
                        x: 700,
                        transition: { duration: 2 }
                    })
                }
            } className='button'>Rigth</button>

            <button onClick={
                () => {
                    control.start({
                        x: 0,
                        transition: { duration: 2 }
                    })
                }
            } className='button'>Left</button>

            <button onClick={
                () => {
                    control.start({
                       borderRadius: "50%",
                       transition: { duration: 2 }
                    })
                }
            } className='button'>Circle</button>

            <button onClick={
                () => {
                    control.start({
                        borderRadius: "0%",
                        transition: { duration: 2 }
                    })
                }
            } className='button'>Square</button>

            <button onClick={
                () => {
                    control.stop()
                }
            } className='button'>Stop</button>

            <motion.div
                className='box'
                animate={control}
            >

            </motion.div>
        </article>
    )
}

export default Box5
