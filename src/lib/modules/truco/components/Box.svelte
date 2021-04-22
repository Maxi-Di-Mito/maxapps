<script>
	export let number = 0;
	export let color = 'red';
</script>

<div class="box num-{number}" style="--color: {color};" />

<style lang="scss">
	.box {
		height: 4em;
		width: 4em;
		border: 2px dotted grey;
		position: relative;

		&.num-1 {
			border-left: 3px solid var(--color);
		}
		&.num-2 {
			@extend .num-1;
			border-top: 3px solid var(--color);
		}
		&.num-3 {
			@extend .num-2;
			border-right: 3px solid var(--color);
		}
		&.num-4 {
			@extend .num-3;
			border-bottom: 3px solid var(--color);
		}
		&.num-5 {
			@extend .num-4;
			&:after {
				content: '';
				position: absolute;
				top: 30px;
				right: -14px;
				border: 2px solid var(--color);
				width: 138%;
				transform: rotate(45deg);
			}
		}
	}
</style>
