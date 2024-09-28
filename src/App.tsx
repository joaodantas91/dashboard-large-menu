import { useEffect, useState } from 'react';
import './App.css'
import { List } from './components/List';
import { Item } from './types/item';
import { Detail } from './components/Detail';

function App () {
  const isDevelopment = import.meta.env.VITE_ENV === 'development';
  const apiBaseUrl = isDevelopment ? '/api/' : '/.netlify/functions/fetchData?endpoint=';

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  useEffect(() => {
    fetch(`${apiBaseUrl}senior-fe-menu-challenge.json`)
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
