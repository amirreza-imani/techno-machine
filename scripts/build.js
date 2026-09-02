import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import { mkdir, cp } from 'node:fs/promises';
import { rimraf } from 'rimraf';

const execAsync = promisify(exec);
async function build() {
	try {
		await rimraf('build');
		await rimraf('.next/standalone');
		await rimraf('.next/static');

		await execAsync('next build', async (error, stdout, stderr) => {
			if (error) {
				console.error('\x1b[31m', `Error during build: ${error.message}`);
			}
			if (stderr) {
				console.error(`Build stderr: ${stderr}`);
			}
			console.log(`Build stdout: ${stdout}`);

			await mkdir('build');

			await cp('public', 'build/public', { recursive: true });
			await cp('.next/standalone', 'build', { recursive: true, filter: (src) => !src.includes('node_modules') });
			await cp('.next/static', 'build/.next/static', { recursive: true });

			console.log('\x1b[34m', 'Build completed successfully.');
		});
	} catch (error) {
		console.error('\x1b[31m', 'Error cleaning up directories:', error);
	}
}

build();
