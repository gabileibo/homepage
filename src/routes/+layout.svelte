<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Gabi's Page</title>
	<meta name="description" content="Gabi's Page - Working on all things Cloud, DevOps, AI and Security">
</svelte:head>

{@render children()}
