"use client"

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
			<>
				{pending ? (
					<Button disabled className="w-full">
						<Loader2Icon className="w-4 h-4 animate-spin" />
					</Button>
				) : (
					<Button 
					   type="submit" 
					   className="w-full bg-emerald-400"
					   
					   >
						Submit Form
					</Button>
				)}
			</>
		);

}