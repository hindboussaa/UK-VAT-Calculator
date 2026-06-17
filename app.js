let pages = [];

function view(page){

    const content = document.getElementById("content");

    if(page === "dashboard"){
        content.innerHTML = `
            <h1>Dashboard</h1>
            <div class="card">📊 Pages: ${pages.length}</div>
            <div class="card">⚡ System: Active</div>
        `;
    }

    if(page === "calculators"){
        content.innerHTML = `
            <h1>Calculators</h1>
            <div class="card">VAT Calculator</div>
            <div class="card">BMI Calculator</div>
            <div class="card">Age Calculator</div>
        `;
    }

    if(page === "seo"){
        content.innerHTML = `
            <h1>SEO Pages</h1>
            ${pages.map(p => `
                <div class="card">
                    <b>${p.keyword}</b><br>
                    /${p.slug}
                </div>
            `).join("")}
        `;
    }

    if(page === "generator"){
        content.innerHTML = `
            <h1>AI SEO Generator</h1>
            <button onclick="runAI()">Generate 1000 Pages</button>
        `;
    }
}