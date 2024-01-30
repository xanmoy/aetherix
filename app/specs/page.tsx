import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Specs() {
	return (
		<div id="4" className="container mx-auto page-section specs ">
			<div className="text-left lg:text-enter">
				<h2 className="text-4xl font-bold text-white lg:text-6xl py-3">Aetherix Server Overview:</h2>
				<br />
				<p>
					<strong>CPU:</strong> Powered by the 11th Gen Intel i5-11400 processor, the Aetherix server boasts 12 cores, delivering robust performance for a variety of computing tasks.
				</p>
				<br />
				<p>
					<strong>Memory:</strong> Equipped with 16,000 MiB of RAM, the Aetherix server ensures efficient multitasking and smooth operation, with 9,292 MiB currently in use.
				</p>
				<br />
				<p>
					<strong>Graphics:</strong> The server features two graphics processing units (GPUs) for enhanced visual capabilities. The primary GPU is the Intel RocketLake-S GT1, providing UHD Graphics. Additionally, it incorporates a secondary GPU – the NVIDIA GeForce series (610m/710m/810m/820m, GT 620m/625m/630m/720m), offering versatility in graphical processing tasks.
				</p>
				<br />
				<p>
					<strong>Kernel:</strong> Running on the Linux kernel version 6.6.13-200.fc39.x86_64, the Aetherix server benefits from the latest updates and optimizations.
				</p>
				<br />
				<p>
					<strong>Storage:</strong> With a storage configuration of 1 TB, 1 TB, 256 GB, and 256 GB, the Aetherix server ensures ample space for data storage. The Btrfs filesystem enhances reliability and supports advanced features for data management.
				</p>
				<br />
				<p>
					<strong>Operating System:</strong> The Aetherix server operates on Ubuntu Server, a secure and versatile Linux distribution known for its stability and extensive software ecosystem. Ubuntu Server provides a robust foundation for various server applications and services.
				</p>
				<br />
				<br />
			</div>
			<div className="col-span-8 col-offset-2">
				<table id="specs-table" className="table-dark table-responsive border border-collapse">
					<thead className="thead-dark">
						<tr>
							<th scope="col" className="border corner">System Specs</th>
							<th scope="col" className="border">Aetherix</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="border scoped">CPU 1</th>
							<td className="border">11th Gen Intel i5-11400 (12) @ 4. </td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">CPU 2</th>
							<td className="border">Intel 13-3110M (4) @ 2.400GHZ</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">Memory 1</th>
							<td className="border">9292MiB / 16000MiB</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">Memory 2</th>
							<td className="border">2016MiB / 4000MiB</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">GPU 1</th>
							<td className="border">Intel RocketLake-S GT1 [UHD Graphis]</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">GPU 2</th>
							<td className="border">nvidia geforce 610m/710m/810m/820m / gt 620m/625m/630m/720m</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">Hardware Model</th>
							<td className="border">Micro-Star International Co., Ltd. MS-7D23</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">Kernel</th>
							<td className="border">6.6.13-200.fc39.x86_64</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">Storage</th>
							<td className="border">1 TB, 1 TB, 256 GB, 256 GB Btrfs Filesystem</td>
						</tr>
						<tr>
							<th scope="row" className="border scoped">OS</th>
							<td className="border">Ubuntu Server</td>
						</tr>
					</tbody>
				</table>

				{/* <a data-aos="fade-up" data-aos-mirror="true" role="button" className="btn btn-lg btn-red spec-btn aos-init" href="https://www.olcf.ornl.gov/wp-content/uploads/2019/05/frontier_specsheet.pdf">Download Spec Sheet</a> */}
				{/* <button data-aos="fade-up" data-aos-mirror="true" type="button" className="btn btn-lg btn-red node-btn aos-init" data-toggle="modal" data-target="#NodeModalCenter">View Node Diagram</button> */}
			</div>
			<div className="mt-4 pt-9">
				<Image
					src="/cover2.png" // Add your team photo URL here
					alt="Team Photo"
					width={800}
					height={400}
				/>
			</div>
		</div>
	);
	
}
