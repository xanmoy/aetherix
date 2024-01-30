import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Tech() {
	return (
		<section className="pt-3 relative">
			<div className="lg:flex lg:items-center">
				<div className="lg:w-1/3 lg:mr-4">
					<Image
						src="/cover4.png"
						width={800}
						height={500}
						alt="Picture of the author"
						className="w-full h-auto object-cover object-center"
					/>
				</div>
<br />
				<div className="lg:w-2/3 py-4">
					<div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center">
						<h2 className="text-4xl font-bold text-white lg:text-6xl py-3">
							Technology Highlights:
						</h2>

						<p className="text-white text-lg lg:text-xl">
							Aetherix is at the forefront of technology, featuring the powerful
							11th Gen Intel i5-11400 processor with 12 cores, providing
							unmatched computational capabilities for a diverse range of tasks.
						</p>

						{/* Add other paragraphs here */}

						<p className="text-white text-lg lg:text-xl">
							With Ubuntu Server as its operating system, Aetherix offers a secure
							and adaptable platform, making it an ideal choice for a variety of
							server applications and services.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
