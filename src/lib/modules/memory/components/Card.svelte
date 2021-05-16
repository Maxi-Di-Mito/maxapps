<script>
	import { flip } from 'svelte/animate';
	import { createEventDispatcher } from 'svelte';
	//export let id = -1;
	export let index = -1;
	export let url = '';
	export let alt = '';
	export let done = false;
	export let active = false;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('clicked', index);
	};
</script>

<div class="card" class:active class:done on:click={handleClick}>
	<img src={url} {alt} />
</div>

<style lang="scss">
	.card {
		position: relative;
		border-radius: 4px;
		width: 100px;
		height: 100px;
		background-color: black;
		transition: 0.2s ease-in-out;
		cursor: pointer;

		img {
			width: 100%;
			height: 100%;

			object-fit: contain;
			display: none;
		}

		&.active {
			box-shadow: 0px 3px 8px grey;
			transform: translateY(-4px);
			img {
				display: block;
			}
		}

		&.done {
			img {
				display: block;
				filter: grayscale(100%);
			}
		}
	}
</style>
