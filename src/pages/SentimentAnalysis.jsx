import { useState ,useRef} from "react"
import { analyseText } from "../transformers/modelExec"


export function SentimentAnalysis(){

    const [output,setOutput] = useState("")
    const input = useRef({})

    const handleChange = (event)=>input[event.target.name]=event.target.value
    const handleClick = async (event)=>setOutput(await analyseText(input["text"]))


    return (
        <div>
            <h1 className="text">Sentiment Analysis</h1>
            <div className="section">
             <textarea rows={50} cols={50} name="text" onChange={handleChange}/>
             <button onClick={handleClick}>Evaluate</button>
            </div>
            
            <div>
                <p>{output.label}</p>
                <p>{output.score}</p>
            </div>
        </div>
    )
}