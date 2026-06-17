function generateSEOText(keyword){
    return {
        title: `${keyword} - Free UK Calculator Tool`,
        
        description: `Use our fast and accurate ${keyword} tool designed for UK users. Get instant results with no signup required.`,
        
        intro: `This ${keyword} calculator helps you get instant, accurate results based on UK standards. It is designed for speed, clarity, and mobile use.`,
        
        faq: [
            {
                q: `What is ${keyword}?`,
                a: `${keyword} is a calculation tool used to quickly compute accurate results for UK users.`
            },
            {
                q: `Is this free?`,
                a: `Yes, all calculators are completely free to use with no registration required.`
            }
        ]
    };
}

module.exports = { generateSEOText };