import { vi } from 'vitest';

const vscode = {
	workspace: {
		getConfiguration: vi.fn(() => ({
			get: vi.fn(),
			has: vi.fn(),
			inspect: vi.fn(),
			update: vi.fn(),
		})),
	},
	ExtensionContext: class {},
};

export = vscode;
