import { writable } from "svelte/store";
import { tweened } from "svelte/motion"

export const intensity = tweened(1)
export const speed = writable(0.3)
export const smoke_color = writable(["#00dddd"])
export const background_color = writable("#000000")
export const amount = writable(150)
