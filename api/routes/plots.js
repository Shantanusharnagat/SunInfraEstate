import  express  from "express";
import { createPlot, deletePlot, getPlot, getPlots, updatePlot } from "../controllers/plot.js";
import Plot from "../models/Plot.js";
import {verifyAdmin} from "../utils/verifyToken.js"


const router=express.Router();

//create
router.post("/",verifyAdmin, createPlot);
//update
router.put("/:id",verifyAdmin, updatePlot);
//delete
router.delete("/:id",verifyAdmin, deletePlot);
//get
router.get("/:id", getPlot);
//get all
router.get("/", getPlots);

export default router