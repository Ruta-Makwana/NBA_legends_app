import { useState } from "react"
import PropTypes from 'prop-types'

const Sorting = ({data, setData}) => {

    // 4. sortKey can be anything from the options
    const [sortKey, setSortKey] = useState('points')

    // 6. this function will sort data
    // key is same as sortkey, just name changed
    const sortData = (data, key) => {
        // 7. index number for all key values
        // index will allow to loop over the values
        // will be used via 'key' to reach the values
        const keyIndexMap = {
            points: 0,
            rebaunds: 1,
            assists: 2,
            allStar: 3,
        }

        return data.sort((a,b) => {
            // 8. parseInt will convert string value to integer
            const aValue = parseInt(
                // 9. reaching the array of statistics inside data.js
                // split to split number and letters
                // [0] for selecting the first element, i.e. the number
                // replace will replace comma ',' inside the number will nothing i.e. it will remove the comma
                // the comma on the left side of replace is selected using regex syntax
                a.statistics[keyIndexMap[key]].split(' ')[0].replace(/,/g, '')
            )

            const bValue = parseInt(
                // 9. same as above
                b.statistics[keyIndexMap[key]].split(' ')[0].replace(/,/g, '')
            )

            return aValue - bValue;
        })
    }
    
    // 2. if anything is selected, it will assign its value to e
    const handleSort = (e) => {
        // 3. function required to assign value of options
        setSortKey(e.target.value)

        // 5. function that will filter data
        // setData will change the data
        // spread operator will give copy of data
        // key, which is one of the options
        setData(sortData([...data], e.target.value))
    }

    return(
        <div>
            <label>Sort By: </label>
            {/* 1. handlesort will be triggered when any of the options is selected*/}
            <select value={sortKey} onChange={handleSort}>
                <option value="points">Points</option>
                <option value="rebaunds">Rebounds</option>
                <option value="assists">Assists</option>
                <option value="allStar">All Star</option>
            </select>
        </div>
    )
}

//
Sorting.propTypes = {
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
}

export default Sorting;