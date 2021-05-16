import fs from 'fs';

const files = fs.readdirSync(`./static/mario/`);

export default files.map(f => ({
    url: `/mario/${f}`,
    alt: f.replace(/\.\w\w\w\w?$/, '')
}))