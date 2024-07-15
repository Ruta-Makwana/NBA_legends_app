import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import PlayerCard from './PlayerCard'

const CardContainer = ({data, search}) => {
    return(
        <div className='container rounded-4 my-4 bg-light card-container'>
            {/* row for styling  */}
            {/* filter to search accordingly to name; will give array
            map will loop over and select one card */}
            <Row className='g-3 justify-content-center'>
             {
                data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item,index)=> (
                    <PlayerCard key={index} name={item.name} img={item.img} stat={item.statistics}/>
                ))
             }
        </Row>
        </div>
    )
}

CardContainer.propTypes = {
    data: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
}

export default CardContainer;