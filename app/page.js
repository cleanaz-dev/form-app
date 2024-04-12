import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../public/hero.svg";
import Nabvar from "@/components/Nabvar";

const HomePage = () => {
	return (
		<>
			<Nabvar />
			<div className="flex flex-col items-center justify-center bg-background h-[90vh] bg-gradient-to-b from-slate-200/50 to-emerald-400/50">
				<Image
					width={400}
					height={400}
					src={heroImage}
					className="object-cover"
				/>
				<div className="max-w-2xl px-8 bg-slate-50/50 py-10 rounded-md border-8 border-white/35 mt-6">
					<div className="">
						<h1 className="text-4xl font-extrabold mb-4">
							Transform Forms into Polished PDFs Effortlessly!
						</h1>
						<p className="text-muted-foreground">
							Welcome to our revolutionary form to PDF conversion platform! Say
							goodbye to tedious paperwork and hello to streamlined efficiency.
							Whether it's contracts, applications, or surveys, we've got you
							covered. Experience the ease of converting your forms into
							professional PDFs in just a few clicks. Simplify your workflow and
							elevate your document management experience today!
						</p>
					</div>
					<div className="flex justify-center mt-10 gap-x-8">
						<Link href="/">
							<Button size="lg" className="w-40 bg-emerald-400">
								Sign Up for Free
							</Button>
						</Link>
						<Link href="/form">
							<Button size="lg" className="w-40 bg-emerald-400">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
