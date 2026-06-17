import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function generateArticle(keyword){

    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: `
Write a high quality SEO article for:

Keyword: "${keyword}"

Include:
- SEO title
- meta description
- introduction
- headings (H2, H3)
- UK focused content
- conclusion

Return in JSON format:
{
  "title": "",
  "description": "",
  "content": ""
}
                `
            }
        ]
    });

    return JSON.parse(response.choices[0].message.content);
}