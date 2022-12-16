import styles from './MenueItem.module.scss'
import Image from 'next/image'
import Heading from './Heading'
import Paragraph from './Paragraph'

const MenuItem = ({data}) => {
    let {title, description, price, image} = data
    return (
        <article className={styles.menuItem}>
            <Image 
                src={image.sourceUrl}
                alt={image.alt}
                width={image.mediaDetails.width}
                height={image.mediaDetails.height}
                className={styles.image}
            />
            <div className={styles.content}>
                <Heading level="3" marginBottom="1">{title}</Heading>
                <Heading level="4" marginBottom="1">${price}</Heading>
                <Paragraph>{description}</Paragraph>
            </div>
        </article>
    )
}

export default MenuItem

