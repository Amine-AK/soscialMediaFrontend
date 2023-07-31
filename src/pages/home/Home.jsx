import React from 'react'
import StoriesGrid from '../../components/stories/StoriesGrid'
import Poste from '../../components/postes/Poste'
import CreatPost from '../../components/postes/CreatPost'

const Home = () => {

  const data = {
    id:1,
    poster:'poster Name',
    postTexe:'hbfidnb evdionemnf dn em nbqwnf c  wdvd en jmds w bd ewm nbef fdkbn window f ewdvkdcnkqw d v fnb dlnq ckb',
    img:'https://picsum.photos/200/300?random',
  }


  return (
    <div className='relative sm:w-3/5 w-full flex flex-col gap-4 pb-[200px]'>
      <StoriesGrid/>
      <CreatPost/>
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