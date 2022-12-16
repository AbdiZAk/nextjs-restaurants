import styles from './RestaurantsItem.module.scss'

const RestaurantsItem = ({ data }) => {
    const {name, category } = data;
    return (
        
        <section className={styles.restaurant}> 
            <article>
                <p>{name}</p>            
            </article>
        </section>
    );
}

export default RestaurantsItem;
