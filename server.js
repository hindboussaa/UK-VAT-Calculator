import express from "express";
import cors from "cors";
import { generateArticle } from "./openai.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-article", async (req, res) => {

    const { keyword } = req.body;

    try {
        const article = await generateArticle(keyword);

        res.json({
            keyword,
            slug: keyword.replace(/\s+/g, "-"),
            ...article
        });

    } catch (err) {
        res.status(500).json({ error: "AI generation failed" });
    }
});

app.listen(3000, () => {
    console.log("AI SEO server running on http://localhost:3000");
});