import React, { useState } from 'react' 
import { TextArea, Input } from './constants/ui'

const ContentForm = () => {
    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('')
    const [body, setBody] = useState('')
  return (
    <form>
        <Input label={"Title"}  type={'text'} state={title} setState={setTitle} />
        <TextArea  label={"Description"}  type={'text'} state={discription} setState={setDiscription} />
        <TextArea label={"Body"}  type={'text'} state={body} setState={setBody} height={'300px'}/>
        <button className='btn btn-primary'> Create article</button>
    </form>
  )
}

export default ContentForm