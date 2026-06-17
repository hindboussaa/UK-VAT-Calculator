const topics = [
  "VAT guide UK 2026",
  "How VAT works in UK",
  "BMI healthy range explained",
  "How to calculate percentage increase"
];

topics.forEach(t => {

const html = `
<h1>${t}</h1>
<p>This article explains ${t} in simple terms.</p>
`;

fs.writeFileSync(`build/blog/${t.replace(/\s/g,'-')}.html`, html);

});