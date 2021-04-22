<script>
	import Box from './Box.svelte';
	export let points = 0;
	export let color = 'red';
	let boxes = [];
	let buenas = false;
	$: {
		boxes = new Array(Math.ceil(points / 5));
		buenas = points > 15;
	}

	const calculateNumber = (index) => {
		const rest = points - index * 5;
		if (rest >= 5) {
			return 5;
		} else {
			return rest;
		}
	};
</script>

<div class="board">
	{#if buenas}
		<div class="buenas">Buenas</div>
	{/if}
	{#each boxes as box, index (index)}
		{#if index > 0}
			<div class="spacer" />
		{/if}
		<div class:hidden={buenas && index < 3}>
			<Box number={calculateNumber(index)} {color} />
		</div>
	{/each}
</div>

<style lang="scss">
	.board {
		.spacer {
			width: 100%;
			margin-bottom: 1em;
		}

		.buenas {
			text-align: center;
			color: blue;
			font-weight: 800;
		}

		.hidden {
			display: none;
		}
	}
</style>
