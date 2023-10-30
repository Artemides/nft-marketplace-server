import { Router } from "express";
import { getNfts } from "../controllers/nfts.controller";
const router = Router();

router.get("/", getNfts);

export default router;
