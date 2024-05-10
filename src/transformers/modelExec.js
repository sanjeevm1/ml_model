import { getSentimentAnalysisModel, getTextGenModel } from "./model"
import weigths from "../resources/weights.json"


export const generateText = async (text)=>{

    const model = await getTextGenModel()
    let output = await model(text)
    console.log(output)

    return output[0].generated_text
}

export const analyseText = async (text)=>{

    const model = await getSentimentAnalysisModel()
    let output = await model(text)

    console.log(output);
    return output[0];
}

export const predictStudentPerformance = async (values)=>{

    const weights = JSON.parse(weigths)
   
    let res = 0
    console.log(values)

    for(let ind in values){
        res+=(values[ind]*weights[ind])
    }

    return res;
}