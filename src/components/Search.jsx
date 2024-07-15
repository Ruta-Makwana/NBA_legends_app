import {Form} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Search = ({search, setSearch}) => {

    return (
        <div className='flex-grow-1'>
            <Form.Control 
                placeholder='Search Player...'

                /* aria-label is used for increasing accessibility */
                aria-label='Search'
                type='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-50 m-auto'
            >

            </Form.Control>
        </div>
    )
}

// defining the type of the parameters/ props in 'Search'
// it will allow to prevent future problems. if it is string, eg: you cannot use object methods.
// So it makes sure that type is correct before coming as props.
// However, this PropTypes is old method and currently people are using TypeScript languages to handle types.
Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
}

export default Search;