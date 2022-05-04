<script lang="ts">
	import { amount, background_color, smoke_color, speed } from "$lib/store";

	const addNewColor = () => {
		$smoke_color = [...$smoke_color, "#000"]
	}

	const removeColor = (color: string) => () => {
		$smoke_color = $smoke_color.filter( smoke => smoke != color )
	}
</script>

<form>
	<fieldset>
		<label for="amount">amount - {$amount}</label>
		<input id="amount" type="range" bind:value={$amount} step={1} min=1 max=300>
	</fieldset>

	<fieldset>
		<label for="speed">speed - {$speed}</label>
		<input id="speed" type="range" bind:value={$speed} step={0.1} min=0 max=1>
	</fieldset>

	<fieldset>
		<legend>Smoke Color(s)</legend>
		{#each $smoke_color as color}
			<input on:contextmenu|preventDefault={removeColor(color)} type="color" bind:value={color}>
		{/each}
		<button type="button" on:click={addNewColor}>Added new Color</button>
	</fieldset>

	<fieldset>
		<label for="background-color">background color - {$background_color}</label>
		<input id="background-color" type="color" bind:value={$background_color}>
	</fieldset>
</form>

<style>
	form {
		position: fixed;
		top: 0;
		left: 0;

		background: rgba(0, 0, 0, 0.4);
		width: 250px;
		color: white;
	}

	fieldset button {
		display: block;
		margin-top: 10px;
	}
</style>
