// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' };
import * as $0 from './routes/_404.tsx';
import * as $1 from './routes/_500.tsx';
import * as $2 from './routes/about.tsx';
import * as $3 from './routes/api/[url].tsx';
import * as $4 from './routes/api/v1/github/[username].tsx';
import * as $5 from './routes/api/v1/greet/[name].tsx';
import * as $6 from './routes/api/v1/joke.ts';
import * as $7 from './routes/api/v1/random-uuid.ts';
import * as $8 from './routes/api/v1/theme-generator.ts';
import * as $9 from './routes/api/v1/version.ts';
import * as $10 from './routes/api/v1/wasm.ts';
import * as $11 from './routes/contact.tsx';
import * as $12 from './routes/home.tsx';
import * as $13 from './routes/index.tsx';
import * as $14 from './routes/resume.tsx';
import * as $$0 from './islands/CalendlyWidget.tsx';
import * as $$1 from './islands/GradientBackground.tsx';
import * as $$2 from './islands/SearchBar.tsx';

const manifest = {
	routes: {
		'./routes/_404.tsx': $0,
		'./routes/_500.tsx': $1,
		'./routes/about.tsx': $2,
		'./routes/api/[url].tsx': $3,
		'./routes/api/v1/github/[username].tsx': $4,
		'./routes/api/v1/greet/[name].tsx': $5,
		'./routes/api/v1/joke.ts': $6,
		'./routes/api/v1/random-uuid.ts': $7,
		'./routes/api/v1/theme-generator.ts': $8,
		'./routes/api/v1/version.ts': $9,
		'./routes/api/v1/wasm.ts': $10,
		'./routes/contact.tsx': $11,
		'./routes/home.tsx': $12,
		'./routes/index.tsx': $13,
		'./routes/resume.tsx': $14,
	},
	islands: {
		'./islands/CalendlyWidget.tsx': $$0,
		'./islands/GradientBackground.tsx': $$1,
		'./islands/SearchBar.tsx': $$2,
	},
	baseUrl: import.meta.url,
	config,
};

export default manifest;
