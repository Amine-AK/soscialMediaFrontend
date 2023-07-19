import React from 'react'
import Section from './Section'
import Suggestion from './Suggestion'

const RightSideBar = () => {
    const styleClass = {
        
    }
  return (
    <div className='sm:flex sm:visible hidden flex-col gap-3 lg:w-1/5 w-2/5  border-l right-[5%] h-full '>
        <Section title='Suggestion for you' styleClass={styleClass}>
           <Suggestion/>
        </Section>
        <Section>
            Hello secound
        </Section>
        <Section>
            Hello threed
        </Section>
    </div>
  )
}

export default RightSideBar