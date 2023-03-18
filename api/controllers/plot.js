import Plot from "../models/Plot.js"

export const createPlot =async (req, res, next)=>{
    const newPlot=new Plot(req.body)
    
    try{
        const savedPlot=await newPlot.save()
        res.status(200).json(savedPlot)
    }catch(err){
        next(err)
    }
}
export const updatePlot =async (req, res, next)=>{
    try{
        const updatedPlot=await Plot.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedPlot)
    }catch(err){
        next(err)
    }
}
export const deletePlot =async (req, res, next)=>{
    try{
        await Plot.findByIdAndDelete(req.params.id)
        res.status(200).json("PLot has been deleted")
    }catch(err){
        next(err)
    }
}
export const getPlot =async (req, res, next)=>{
    try{
        const plot=await Plot.findById(req.params.id)
        res.status(200).json(plot)
    }catch(err){
        next(err)
    }
}
export const getPlots =async (req, res, next)=>{
    try{
        const plots=await Plot.find();
        res.status(200).json(plots)
    }catch(err){
        next(err)
    }
}
