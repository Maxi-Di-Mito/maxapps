<script>
	import Board from './components/Board.svelte';
	import store from './store/store';
</script>

<div class="content">
	<div class="field us card">
		<h3>Nosotros</h3>
		<h2>{$store.points.us}</h2>
		<button on:click={store.addUs} disabled={$store.winner}>Sumar</button>
		<div class="spacer" />
		<Board points={$store.points.us} color="red" />
		<div class="spacer" />
	</div>

	<div class="field them card">
		<h3>Ellos</h3>
		<h2>{$store.points.them}</h2>
		<button on:click={store.addThem} disabled={$store.winner}>Sumar</button>
		<div class="spacer" />
		<Board points={$store.points.them} color="blue" />
		<div class="spacer" />
	</div>
	<div class="toggles full-grid card">
		<button on:click={store.reset}>Reset</button>
		<h3>Hasta {$store.mode}</h3>
		<button on:click={store.switchMode}>Modo</button>
	</div>
</div>

<style lang="scss">
	button {
		margin: 0;
	}

	.content {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		max-width: 600px;

		@media (max-width: 700px) {
			max-width: 100%;
		}

		.full-grid {
			grid-column: 1/3;
		}

		.card {
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			border-radius: 8px;
		}

		.field {
			display: flex;
			flex-direction: column;
			align-items: center;

			h3 {
				text-align: center;
			}
		}

		.spacer {
			width: 100%;
			margin-bottom: 1em;
		}

		.toggles {
			width: 100%;
			display: flex;
			justify-content: space-around;
			padding: 1em;
		}
	}
</style>
