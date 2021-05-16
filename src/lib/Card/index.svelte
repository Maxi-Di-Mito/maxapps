<script>
	export let title = '';
	export let description = '';
	export let link = '';
</script>

<a href={link}>
	<div class="card">
		<div class="img" />
		<div class="blur">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		box-shadow: 0px 2px 4px grey;

		.img {
		}
		.blur {
			padding: 1em;
		}
	}
</style>
