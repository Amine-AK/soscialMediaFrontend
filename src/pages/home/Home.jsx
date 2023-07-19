import React from 'react'
import StoriesGrid from '../../components/stories/StoriesGrid'
import Poste from '../../components/postes/Poste'

const Home = () => {

  const data = {
    id:1,
    poster:'poster Name',
    postTexe:'hbfidnb evdionemnf dn em nbqwnf c  wdvd en jmds w bd ewm nbef fdkbn window f ewdvkdcnkqw d v fnb dlnq ckb',
    img:'http://localhost:5173/images/man.jpg',
  }


  return (
    <div className='relative sm:w-3/5 w-full flex flex-col gap-4 pb-[200px]'>
      <StoriesGrid/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      <Poste data={data}/>
      
    </div>
  )
}

export default Home