export const prerender = true;

export function GET() {
	const body = `
User-agent: *
Allow: /
`.trim();

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
