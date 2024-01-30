import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
	return (
		<>
		
			<Hero />

			<About/>


		
		</>
	);
}
