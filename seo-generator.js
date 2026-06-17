function generateKeywords(){

    const base = [
        "vat calculator",
        "bmi calculator",
        "loan calculator",
        "age calculator",
        "percentage calculator"
    ];

    const modifiers = [
        "uk",
        "free",
        "online",
        "2026",
        "instant",
        "simple",
        "fast",
        "easy"
    ];

    let keywords = [];

    base.forEach(b => {
        modifiers.forEach(m => {
            keywords.push(`${b} ${m}`);
        });
    });

    return keywords;
}