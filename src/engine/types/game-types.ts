import type {Player} from "./player-types";

export type GameStatus = "playing" | "dead" | "victory";

export type GameState = {
	step: number;
	player: Player;
	log: string[];
	status: GameStatus;
};

export type LogEntry = {
	id: number;
	kind: 
}