import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDebounce } from '../../../customHooks/debounce';

export default function HomeContainer() {
  const [value, setValue] = useState('')
  const [searchField, setSearchField] = useState('')
    const [listname, setListname] = useState([])
    const debouncedValue = useDebounce(value)
  useEffect(() => {
    function loadUsers(){
      let results = axios.get('https://jsonplaceholder.typicode.com/users')
    }
    loadUsers();
  },[debouncedValue])
  return (
    <div>
      <input type={`text`} value={value} onChange={(e) => {setValue(e.target.value)}}/>
      {
        listname.length > 0 && 
        listname.map((user) => {
            return <p>{user.name}</p>
        })
      }
    </div>
  )
}
