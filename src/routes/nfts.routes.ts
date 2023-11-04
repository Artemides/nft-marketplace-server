import { Router } from "express";
import { getNfts, getListedNfts } from "../controllers/nfts.controller";

const router = Router();

router.get("/", getNfts);
router.get("/blocks/", getListedNfts);
export default router;
