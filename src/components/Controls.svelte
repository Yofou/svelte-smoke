<script lang="ts">
	import { amount, background_color, smoke_color, speed } from "$lib/store";
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
		<label for="smoke-color">smoke color - {$smoke_color}</label>
		<input id="smoke-color" type="color" bind:value={$smoke_color}>
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
		min-height: 300px;
	}
</style>
