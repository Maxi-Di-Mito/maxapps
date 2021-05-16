<script context="module">
	export const prerender = true;
</script>

<script>
	import Card from '../lib/Card/index.svelte';
</script>

<svelte:head>
	<title>MaxApps</title>
</svelte:head>

<section>
	<Card title="Truco" description="Un contador de truco argentino" link="/contador-truco" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
