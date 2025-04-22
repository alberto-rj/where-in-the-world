import { z } from 'zod';

export const countrySchema = z.object({
	borders: z.array(z.string()).optional().default([]),
	capital: z.array(z.string()).optional().default([]),
	currencies: z.record(
		z.object({
			name: z.string(),
			symbol: z.string().optional(),
		})
	),
	flags: z.object({
		svg: z.string(),
		alt: z.string().optional(),
	}),
	languages: z.record(z.string()),
	name: z.object({
		common: z.string(),
		official: z.string(),
	}),
	population: z.number(),
	region: z.string(),
	subregion: z.string().optional(),
	tld: z.array(z.string()).optional().default([]),
});

export type Country = z.infer<typeof countrySchema>;
