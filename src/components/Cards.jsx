import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='flex max-w-[1400px] p-4  mx-auto gap-2'>
        <Card width={"basis-2/5"} contact={false} para={true}/>
        <Card width={"basis-3/5"} contact={true} para={false} hover="true"/>
    </div>
  )
}

export default Cards