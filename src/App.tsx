import { BoltIcon, CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import Flame from "./components/flame";
import { useRef, useState } from "react";
import Bolt from "./components/bolt";
import TeamGeaIcon from "./components/icon";
import DonutComponent from "./components/donut";

const App = () => {
	const cardsRef = useRef<HTMLElement>(null);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [mouseOnCard, setMouseOnCard] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (cardsRef.current !== null) {
			const rect = cardsRef.current.getBoundingClientRect();
			setCursor({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};
	return (
		<main
			className=" w-full h-screen flex flex-col items-center justify-center 
    ">
			{/* <section className="card" ref={cardsRef} onMouseEnter={() => setMouseOnCard(true)} onMouseLeave={() => setMouseOnCard(false)} onMouseMove={handleMouseMove}>
				<div className="flex flex-col w-2/5 justify-between">
					<div className="flex flex-col gap-5">
						<CircleStackIcon className=" w-14 rounded-lg bg-neutral-950/70 stroke-emerald-400 p-2  shadow-inner" />
						<h1 className=" font-poppins text-neutral-200 tracking-wide text-2xl">Database</h1>
						<p className="-mt-2 font-poppins text-neutral-500 tracking-wide ">Every project is a full Postgree database, the world's most trusted relational databse.</p>
					</div>
					<div className=" flex flex-col font-poppins text-neutral-200 tracking-wide">
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">100% portable</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Built-in Auth with RLS</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Easy to extend</p>
						</span>
					</div>
				</div>
				<div className=" w-3/5 flex flex-col place-items-center">
					<Flame mouseOnCard={mouseOnCard} cursor={cursor} cardRef={cardsRef} />
				</div>
			</section> */}
			{/* <section className="card" ref={cardsRef} onMouseEnter={() => setMouseOnCard(true)} onMouseLeave={() => setMouseOnCard(false)} onMouseMove={handleMouseMove}>
				<div className="flex flex-col w-2/5 justify-between">
					<div className="flex flex-col gap-5">
						<BoltIcon className=" w-14 rounded-lg bg-neutral-950/70 stroke-orange-400 p-2  shadow-inner" />
						<h1 className=" font-poppins text-neutral-200 tracking-wide text-2xl">Firebase</h1>
						<p className="-mt-2 font-poppins text-neutral-500 tracking-wide ">Every project is a full Postgree database, the world's most trusted relational databse.</p>
					</div>
					<div className=" flex flex-col font-poppins text-neutral-200 tracking-wide">
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">100% portable</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Built-in Auth with RLS</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Easy to extend</p>
						</span>
					</div>
				</div>
				<div className=" w-3/5 flex flex-col place-items-center">
					<Bolt mouseOnCard={mouseOnCard} cursor={cursor} cardRef={cardsRef} />
				</div>
			</section> */}

			<section className="card" ref={cardsRef} onMouseEnter={() => setMouseOnCard(true)} onMouseLeave={() => setMouseOnCard(false)} onMouseMove={handleMouseMove}>
				<div className="flex flex-col w-2/5 justify-between">
					<div className="flex flex-col gap-5">
						<BoltIcon className=" w-14 rounded-lg bg-neutral-950/70 stroke-orange-400 p-2  shadow-inner" />
						<h1 className=" font-poppins text-neutral-200 tracking-wide text-2xl">TeamGEA</h1>
						<p className="-mt-2 font-poppins text-neutral-500 tracking-wide ">Every project is a full Postgree database, the world's most trusted relational databse.</p>
					</div>
					<div className=" flex flex-col font-poppins text-neutral-200 tracking-wide">
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">100% portable</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Built-in Auth with RLS</p>
						</span>
						<span className=" flex flow-row gap-2">
							<CheckIcon className="w-5" />
							<p className="">Easy to extend</p>
						</span>
					</div>
				</div>
				<div className=" w-3/5 flex flex-col place-items-center">
					<TeamGeaIcon mouseOnCard={mouseOnCard} cursor={cursor} cardRef={cardsRef} />
				</div>
			</section>
			<section className="">
				<DonutComponent />
			</section>
		</main>
	);
};

export default App;
