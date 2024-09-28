import { useEffect, useState } from 'react';
import './App.css'
import { List } from './components/List';
import { Item } from './types/item';
import { Detail } from './components/Detail';

function App () {
  const isDevelopment = import.meta.env.VITE_ENV === 'development';
  console.log(import.meta.env.VITE_ENV)
  const url = isDevelopment ?
    '/api/senior-fe-menu-challenge.json' :
    'https://cors-proxy4.p.rapidapi.com/?url=https%3A%2F%2Fcdn-dev.preoday.com%2Fsenior-fe-menu-challenge.json';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'cors-proxy4.p.rapidapi.com'
    }
  };
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="wrapper">


        <List
          isLoading={isLoading}
          data={list}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        {selectedItem ?
          <Detail selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div></div>
        }


      </div>
    </div>

  )
}

export default App
