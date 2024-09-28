import { useEffect, useState } from 'react';
import './App.css'

function App () {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);
  return (
    <ul style={{ maxHeight: "500px", overflow: "auto" }}>
      {list.map((list: { title: string, id: number }) => (
        <li key={list.id}>{list.title}</li>
      ))}
    </ul>
  )
}

export default App
