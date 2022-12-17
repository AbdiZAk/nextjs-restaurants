import styles from './Filters.module.scss'
import Select from './Select'
import Label from './Label'
import Button from './Button'
import Image from 'next/image'


const Filters = ({
        activeCategory, 
        setActiveCategory, 
        categories,
    }) => {

    const filteredOptions = categories.map((category) => {
        return category.node.name
    })
  return (
    <div className={styles.filterBar} id='filters'>
        <div>
            <Label>Filters</Label>
            <Select 
            options={filteredOptions}
            changeHandler={setActiveCategory}

            />
        </div>
      <div>
        <Image 
            src={'/images/grid.svg'}
            width={40}
            height={20}
            alt="Grid Image"
            className={styles.grid_icon}
        />
        <Image 
            src={'/images/list.svg'}
            width={20}
            height={20}
            alt="List Image"
            className={styles.list_icon}
        />
        </div>
      
    </div>
  )
}

export default Filters
