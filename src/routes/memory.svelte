<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch('/memory/packs.json');

		if (res.ok) {
			return {
				props: {
					packs: await res.json()
				}
			};
		} else {
			return {
				status: res.status,
				error: new Error(`Could not load`)
			};
		}
	}
</script>

<script>
	import MemoryModule from '$lib/modules/memory/index.svelte';
	export let packs = [];
</script>

<MemoryModule {packs} />
