<script>
	export let packs = [];
	import store from './store/store';
	import Board from './components/Board.svelte';
	import { set_svg_attributes } from 'svelte/internal';
	let selectedPack = '';

	$: console.info('PACKS', packs);
	$: store.setPack(selectedPack || []);
</script>

<div class="container">
	{#if $store.status === 'end'}
		<h1>GANASTE</h1>
		<button on:click={() => store.restart()}>Reiniciar</button>
	{/if}

	{#if $store.status === 'play' || $store.status === 'end'}
		<Board />
	{/if}

	{#if $store.status === 'init'}
		<select bind:value={selectedPack}>
			<option disabled selected value> -- Elige un pack de tarjetas -- </option>
			{#each packs as pack (pack.name)}
				<option value={pack}>{pack.name}</option>
			{/each}
		</select>
		<button on:click={() => store.setStatus('play')}>Start</button>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
