<script>
	import store from '../store/store';
	import Card from './Card.svelte';

	const handleClickedCard = (event) => {
		store.setActive(event.detail);
	};
	$: console.info('REACTIVE', $store.cards);
</script>

<div class="board">
	{#each $store.cards as card, index (index)}
		<Card {...card} on:clicked={handleClickedCard} {index} active={index === $store.active} />
	{/each}
</div>

<style lang="scss">
	.board {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1em;
		row-gap: 1em;
	}
</style>
