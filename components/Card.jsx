import styles from './Card.module.scss'
import Heading from './Heading'
import Image from 'next/image'
import Paragraph from './Paragraph'
import Button from './Button'


const Card = ({data}) => {
    const {title, excerpt, slug, featuredImage, restaurantTypes} = data
    const restaurantTypesString = restaurantTypes.edges.map((edge) => {
        return edge.node.name;
    })


  return (
    <div className={styles.card}>
        {featuredImage &&
            <Image 
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
                className={styles.cardImage}
            />
        }
        <div className={styles.card_content}>

                {restaurantTypesString && 
                    <Heading level='4' marginBottom='1'>
                    {restaurantTypesString}
                </Heading> 
                }

                {title && 
                    <Heading level='3' marginBottom='1'>
                        {title}
                    </Heading> 
                }
                {excerpt &&
                    <Paragraph marginBottom='1'>
                        {excerpt}
                    </Paragraph>
                }

                {slug &&
                    <Button 
                        label='View Restaurant'
                        path={`/restaurants/${slug}`}
                    />    
                }
        </div>
    </div>
  )
}

export default Card

