import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { predictStudentPerformance } from '../transformers/modelExec'

export default function StudentPerformance() {
  const input = useState({})
  const form = useForm()
  const fields = {"Hours Studied":"number","Previous Scores":"number","Extracurricular Activities":"boolean","Sleep Hours":"number","Sample Question Paper Practiced":"number"}
  
  function displayInputBoxes(){

     return Object.keys(fields).map((key)=>{
        if(fields[key]=="boolean") return (
            <select {...form.register(key)} required>
                <option value="">Is Involved in Extracurricular Activities ?</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
            </select>
        )
        return <input {...form.register(key)} placeholder={key} required/>
      })
  }


  return (
    <div>
        <h1 className='text'>Student Performance</h1>
        <form onSubmit={form.handleSubmit(async (data)=>{
          console.log(Object.values(data))
          alert(await predictStudentPerformance(Object.values(data).map(Number)))})}>
          {displayInputBoxes()}
          <input type="submit"/>
        </form>
    </div>
  )
}
