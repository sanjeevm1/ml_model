import { useRef, useState } from "react"
import { generateText } from "../transformers/modelExec"
import "../style/models.css"



export function TextGen() {

    const input = useRef({})
    const [output, setOutput] = useState("")

    const handleInputChange = (event) => input["text"] = event.target.value
    const handleGenerate = async (event) => setOutput(await generateText(input.text))

    return (
        <div className="section">
            <h1 className="text" >Text Generation</h1>

            <div className="textgen-container">
                <div className="textgen-item">
                    <textarea  onChange={handleInputChange}></textarea>
                    <button className="generatebtn" onClick={handleGenerate}>Generate</button>
                </div>
                
                <div className="textgen-item">
                    <textarea value={output} onChange={handleInputChange}></textarea>
                    {/* <button onClick={handleGenerate}>Generate</button> */}
                </div>

            </div>

            


        </div>
    )
}