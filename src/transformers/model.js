
import { pipeline } from "@xenova/transformers"

var textGenModel = null;
var sentimentAnalysisModel = null;

export const getTextGenModel = async (modelName='Xenova/gpt2')=>{

    if(textGenModel==null)
    textGenModel = await pipeline("text-generation",modelName)

    return textGenModel
}

export const getSentimentAnalysisModel = async (modelName="")=>{

    if(sentimentAnalysisModel==null)
    sentimentAnalysisModel = await pipeline("sentiment-analysis")

    return sentimentAnalysisModel
}
