import type {GameState} from "./types/game-types";

export function createInitialState(): GameState {
	return {
		step: 1,
		status: "playing",
		log: [
			"You're facing the entrance of the CRYPT - it stinks of iron and blood.",
		],
		player: {
			class: "field_surgeon",
			level: 1,
			xp: 0,
			stats: {health: 10, attack: 2, defense: 2, speed: 2},
		},
	};
}
