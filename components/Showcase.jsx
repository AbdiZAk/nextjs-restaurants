import classNames from 'classnames/bind'
import styles from './Showcase.module.scss'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Container from './Container'
import Button from './Button'

let cx = classNames.bind(styles);


const Showcase = ({
    title,
    desctiption,
    backgroundImage='/images/dishes.jpg',
    cta,
    halfHeight}) => {
        let showcaseClasses = cx({
            showcase: true,
            'half_height': halfHeight
        })
    return (
        <section className={showcaseClasses}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Container>
                {title &&   
                    <Heading level='2' marginBottom='1' >
                        {title}
                    </Heading>
                }
                {desctiption && 
                    <Paragraph marginBottom='1' >
                        {desctiption}
                    </Paragraph>
                
                }
                {cta && 
                    <Button label={cta}/>
                }
                
            </Container>
        </section>
    )
}

export default Showcase