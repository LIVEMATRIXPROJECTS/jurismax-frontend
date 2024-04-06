import React,{useState} from 'react'
import "./Files.css"

function fileUpload() {
  const [file,setFile]=useState(null);

  function handleFile(event){
    setFile(event.target.files[0])
    // console.log(event.target.files[0])
  }

  function onSubmit(e){
    e.preventDefault()
    console.log("Successfully Submitted")
  }
  function handleUpload(){
    // e.preventDefault();
    const formData=new formData()
    formData.append("file",file)
    fetch(
      "url",
      {
         method:"POST",
         body:formData
      }
    ).then((response)=>response.json())
      .then(
        (result)=>{
          console.log("sucess",result)
        }
      )
      .catch(error=>{
        console.error("Error:",error)
      })
  }
  return (
    <div className="file-card">
      <h1 className="heading2">Upload Your Documents</h1>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} className="input"/>
        <button className="button-one" type="submit" onClick={onSubmit}>Upload</button>
      </form>
    </div>
  )
}

export default fileUpload;
