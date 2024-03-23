import React from 'react' 
import { TextArea, Input } from './constants/ui'

const ContentForm = (formArticle) => { 
    const { title, description, body, setTitle, setDiscription, setBody, formhandler, changeform, name} = formArticle
    console.log(formArticle);
  return (
    <form onSubmit={formhandler}>
        <Input label={"Title"}  type={'text'} state={title} setState={setTitle} />
        <TextArea  label={"Description"}  type={'text'} state={description} setState={setDiscription} />
        <TextArea label={"Body"}  type={'text'} state={body} setState={setBody} height={'300px'}/>
        <button type='submit' className='btn btn-primary' onClick={changeform}>{name}</button>
    </form>
  )
}

export default ContentForm