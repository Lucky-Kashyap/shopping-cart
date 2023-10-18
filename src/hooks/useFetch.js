import { useEffect, useState } from 'react'

export const useFetch = (URL) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(URL);
            const data = await res.json();

            setData(data);
        }
        fetchData();
    })

  return {data}
}

