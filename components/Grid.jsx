import styles from './Grid.module.scss'
import Card from './Card'


const Grid = ({data}) => {
    
    return (
    <div className={styles.grid}>
        
        {data.map((restaurant, index) => {
            return (
                <Card view='grid' data={restaurant.node} key={index}/>
            )
            
        })}    
    </div>
  )
}

export default Grid