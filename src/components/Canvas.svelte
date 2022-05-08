<script lang="ts">
	import * as Three from "three";
	import * as SC from "svelte-cubed";
	import { amount, background_color, intensity, smoke_color, speed } from "$lib/store";
	import { tweened } from "svelte/motion"

	const map = new Three.TextureLoader().load("/Smoke-Element.png");
	$: meshes = Array.from({ length: $amount }, () => ({ 
		z: Math.random() * 360,
		config: {
			color: new Three.Color( $smoke_color[Math.floor(Math.random() * $smoke_color.length)] ),
			transparent: true,
			map,
		}
	}))

	let shift = tweened(0, { duration: 100 })  
	const clock = new Three.Clock()
	SC.onFrame(() => {
		const delta = clock.getDelta()
		$shift += (delta * $speed)
	})
</script>

<SC.Canvas antialias background={new Three.Color($background_color)}>
	{#each meshes as mesh}
		<SC.Mesh
			geometry={new Three.PlaneGeometry(300, 300)}
			material={new Three.MeshLambertMaterial(mesh.config)}
			position={[
				Math.random() * 500 - 250,
				Math.random() * 500 - 250,
				Math.random() * 1000 - 100,
			]}
			rotation={[0, 0, mesh.z + $shift]}
		/>
	{/each}

	<SC.DirectionalLight
		color={new Three.Color(0xffffff)}
		intensity={$intensity}
		position={[-1, 0, 1]}
	/>
	<SC.PerspectiveCamera
		fov={75}
		near={1}
		far={10000}
		position={[0, 0, 1000]}
	/>
</SC.Canvas>
