<script lang="ts">
	import * as Three from "three";
	import * as SC from "svelte-cubed";
	import { amount, background_color, smoke_color, speed } from "$lib/store";
	import { tweened } from "svelte/motion"

	const map = new Three.TextureLoader().load("/Smoke-Element.png");
	let smokeMateral: Three.MeshBasicMaterialParameters
	$: smokeMaterial = {
		color: new Three.Color($smoke_color),
		transparent: true,
		map,
	};
	
	$: rotations = Array.from({ length: $amount }, () => Math.random() * 360)
	let shift = tweened(0, { duration: 100 })  
	const clock = new Three.Clock()
	SC.onFrame(() => {
		const delta = clock.getDelta()
		$shift += (delta * $speed)
	})
</script>

<SC.Canvas antialias background={new Three.Color($background_color)}>
	{#each rotations as zRotation}
		<SC.Mesh
			geometry={new Three.PlaneGeometry(300, 300)}
			material={new Three.MeshBasicMaterial(smokeMaterial)}
			position={[
				Math.random() * 500 - 250,
				Math.random() * 500 - 250,
				Math.random() * 1000 - 100,
			]}
			rotation={[0, 0, zRotation + $shift]}
		/>
	{/each}

	<SC.DirectionalLight
		color={new Three.Color(0xffffff)}
		intensity={0.5}
		position={[-1, 0, 1]}
	/>
	<SC.PerspectiveCamera
		fov={75}
		near={1}
		far={10000}
		position={[0, 0, 1000]}
	/>
</SC.Canvas>
