export type Stats = {
	health: number;
	attack: number;
	defense: number;
	speed: number;
};

export type PlayerClass = "field_surgeon";

export type Player = {
	class: PlayerClass;
	level: number;
	xp: number;
	stats: Stats;
};
