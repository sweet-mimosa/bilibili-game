import React,{ useEffect,useState }  from 'react'
import { getReserveList } from '../../api/request';
import Banners from '../Find/Banners'
import Reserve from '../Find/Reserve'

export default function Find() {
  const [reserveData,setReserveData] = useState([]);
  useEffect(() => {
    (async () => {
      let {data} = await getReserveList();
      setReserveData(data);
    })();
  },[]);
  return (
    <div>
      <Banners />
      <Reserve reserve={reserveData}/>
    </div>
  )
}
