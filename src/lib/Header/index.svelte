<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></div>
		<div class:active={$page.path === '/contador-truco'}>
			<a sveltekit:prefetch href="/contador-truco">Truco</a>
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		padding: 1em;
		
		box-shadow: 0px 0px 15px black;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		justify-content: space-around;
	}

	div.active {
		font-weight: 800;
	}
</style>
