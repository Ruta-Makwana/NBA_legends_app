import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Search from './components/Search'
import {data as initialData} from './helper/data'
import Sorting from './components/Sorting'
import CardContainer from './components/CardContainer'

function App() {

  // '' inside useSate required to define the type of search
  // beacaue we have defined the type of search in search.jsx
  const [search, setSearch] = useState('');
  const [data, setData] = useState(initialData);

  return (
    <>
      <Container className='text-center mt-4'>
        <Header/>
        <div className='d-flex justify-content-between align-items-center'>
          <Search search={search} setSearch= {setSearch}/>
          <Sorting data={data} setData={setData}/>
        </div>
        <CardContainer search={search} data={data}/>
      </Container>
    </>
  )
}

export default App;
