<script lang="ts">
	// Enable static prerendering for this layout
	export const prerender = true;
	
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
