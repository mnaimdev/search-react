import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Search from './components/Search';

function App() {

  const [data, setData] = useState([]);
  const baseURL = 'https://jsonplaceholder.typicode.com/comments';
  // const baseURL = [
  //   'Apple',
  //   'Banana',
  //   'Mango',
  //   'Olive Oil',
  //   'Orange',
  //   'Sweet',
  //   'Watermelon',
  //   'Burger',
  //   'Kacchi'
  // ]

  useEffect(() => {
    axios.get(baseURL)
    .then((res) => {
      const data = res.data;
      setData(data);
    })
  }, []);

  const onSearch = (search) => {
    const searchText = search.toLowerCase();
    const filterSearch = data.filter((text) => {
      return text.name.toLowerCase().indexOf(searchText) !== -1;
    });
    
    return setData(filterSearch);
  }

  return (
    <>
     {/* <Search data={data} onSearch={onSearch} /> */}
     <Form />
    </>
  )
}

export default App
