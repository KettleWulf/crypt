import {useState} from "react";
import {createInitialState} from "./engine/seed";
import type {GameState} from "./engine/types/game-types";

export default function App() {
	const [state, setState] = useState<GameState>(() => createInitialState());

	return (
		<main
			style={{
				padding: 24,
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			}}
		>
			<h1>CRYPT</h1>

			<section style={{marginTop: 16}}>
				<div>Step: {state.step}</div>
				<div>Status: {state.status}</div>
				<div>
					HP: {state.player.stats.health} | ATK: {state.player.stats.attack} |
					DEF: {state.player.stats.defense} | SPD: {state.player.stats.speed}
				</div>
			</section>

			<section style={{marginTop: 16}}>
				<h2 style={{fontSize: 16}}>Log</h2>
				<pre
					style={{
						background: "#111",
						color: "#ddd",
						padding: 12,
						borderRadius: 8,
					}}
				>
					{state.log.join("\n")}
				</pre>
			</section>

			<section style={{marginTop: 16, display: "flex", gap: 12}}>
				<button
					onClick={() =>
						setState((s) => ({
							...s,
							step: s.step + 1,
							player: {
								...s.player,
								stats: {...s.player.stats, health: s.player.stats.health + 1},
							},
							log: [...s.log, `Du går vidare till steg ${s.step + 1}. (+1 HP)`],
						}))
					}
				>
					Gå vidare
				</button>

				<button onClick={() => setState(createInitialState())}>
					Starta om
				</button>
			</section>
		</main>
	);
}
