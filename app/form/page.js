"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";

import {
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { submitForm } from "@/lib/actions";
import { Undo2 } from "lucide-react";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { cn } from "@/lib/utils";
import { Field, Formik } from "formik";
import { Box } from "@chakra-ui/react";

const FormPage = () => {
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [physician, setPhysician] = useState();
	const [gender, setGender] = useState("");
	const [medication, setMedication] = useState();
	// Create a ref for the signature canvas
	const signatureRef = useRef(null);





	// Function to clear the signature canvas
	const clearSignature = (e) => {
		e.preventDefault(); // Prevent the default action, such as form submission
		signatureRef.current.clear(); // Clear the signature reference
	};

	const handleCheckboxChange = () => {
		setTermsAccepted(!termsAccepted);
		console.log("terms clicked"); // Toggle the state when the checkbox is clicked
	};

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};
	const signatureDataUrl = signatureRef.current
		? signatureRef.current.getTrimmedCanvas().toDataURL("image/png")
		: null;

	return (
		<div className="container mx-auto max-w-4xl ">
			<div className="flex flex-row justify-between text-center mt-6 items-center">
				<div className="rounded-lg p-3 w-1/3 bg-gradient-to-tr from-slate-50 to-emerald-50">
					logo here
				</div>
				<div className="w-1/3 p-3">
					<h1 className="text-3xl font-bold">Form Title</h1>
				</div>
				<div className=" rounded-lg p-3 w-1/3 bg-gradient-to-tr from-slate-50 to-emerald-50">
					brand here
				</div>
			</div>
			{/* <h1 className="text-center my-6 font-extrabold tracking-widest text-4xl">
				Form To <span className="text-red-500">PDF</span>
			</h1> */}
			<Form>
				<form action={submitForm}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 border rounded-lg p-4 mt-8">
						<div className="flex flex-col gap-y-2 mb-2">
							<Label>First Name</Label>
							<Input
								id="firstName"
								name="firstName"
								placeholder="First Name"
								required
							></Input>
						</div>
						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Last Name</Label>
							<Input
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								required
							></Input>
						</div>
						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Health Card Number</Label>
							<Input
								id="healthCardNumber"
								name="healthCardNumber"
								placeholder="Health Card Number"
								required
							></Input>
						</div>
						<div className="flex flex-col gap-y-4 mb-2">
							<Label>Gender</Label>
							<RadioGroup defaultValue="Prefer not to say">
								<div className="flex flex-row">
									<div className="flex items-center space-x-2 mr-2">
										<input
											type="radio"
											id="option-one"
											name="gender"
											value="Male"
											checked={gender === "Male"}
											onChange={handleGenderChange}
										/>
										<label htmlFor="option-one">Male</label>
									</div>
									<div className="flex items-center space-x-2 mr-2">
										<input
											type="radio"
											id="option-two"
											name="gender"
											value="Female"
											checked={gender === "Female"}
											onChange={handleGenderChange}
										/>
										<label htmlFor="option-two">Female</label>
									</div>
									<div className="flex items-center space-x-2 mr-2">
										<input
											type="radio"
											id="option-three"
											name="gender"
											value="Prefer not to say"
											checked={gender === "Prefer not to say"}
											onChange={handleGenderChange}
										/>
										<label htmlFor="option-three">Prefer not to say</label>
									</div>
								</div>
							</RadioGroup>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Formik>
								<Box flex="1">
									<Label>Date of Birth:</Label>
									<Field
										type="date"
										id="dateOfBirth"
										name="dateOfBirth"
										value={dateOfBirth}
										className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
										onChange={(e) => setDateOfBirth(e.target.value)}
									/>
								</Box>
							</Formik>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Phone Number</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Phone Number"
								required
							></Input>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Address</Label>
							<Input
								id="address1"
								name="address1"
								placeholder="Address"
								required
							></Input>
						</div>
						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Aparment/Unit</Label>
							<Input
								id="address2"
								name="address2"
								placeholder="Aparment/Unit"
							></Input>
						</div>
						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Province</Label>
							<Input
								id="province"
								name="province"
								placeholder="Province"
								required
							></Input>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Label>City</Label>
							<Input id="city" name="city" placeholder="City" required></Input>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Postal Code</Label>
							<Input
								id="postalCode"
								name="postalCode"
								placeholder="Postal Code"
								required
							></Input>
						</div>

						<div className="flex flex-col gap-y-2 mb-2">
							<Label>Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="Email Optional"
								type="email"
							></Input>
						</div>
						<div></div>
						<div></div>

						<div>
							<div className="mb-1">
								<Label>Please Select Physician</Label>
							</div>
							<Select
								onValueChange={physician}
								defaultValue={physician}
								name="physician"
								required
							>
								<SelectTrigger>
									<SelectValue placeholder="..." />
								</SelectTrigger>

								<SelectContent>
									<SelectItem name="physician1" value="physician1">
										physician1
									</SelectItem>
									<SelectItem name="physician2" value="physician2">
										physician2
									</SelectItem>
									<SelectItem name="physician3" value="physician3">
										physician3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<div className="mb-1">
								<Label>Please Select Medication</Label>
							</div>
							<Select
								onValueChange={medication}
								defaultValue={medication}
								name="medication"
								required
							>
								<SelectTrigger>
									<SelectValue placeholder="..." />
								</SelectTrigger>

								<SelectContent>
									<SelectItem name="medication1" value="medication1">
										medication1
									</SelectItem>
									<SelectItem name="medication2" value="medication2">
										medication2
									</SelectItem>
									<SelectItem name="medication3" value="medication3">
										medication3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="items-top flex space-x-2 mt-6">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								className="w-4 h-4"
								required
							/>
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="terms"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Accept terms and conditions
								</label>
								<p className="text-sm text-muted-foreground">
									You agree to our{" "}
									<span className="text-blue-400 font-bold cursor-pointer">
										Terms of Service and Privacy Policy.
									</span>
								</p>
							</div>
						</div>
						<div></div>
						<div></div>
						{/* Signature Canvas */}
						{signatureDataUrl && (
							<input type="hidden" name="signature" value={signatureDataUrl} />
						)}
						<div className="flex flex-col col-span-1 md:col-span-2 relative gap-y-2 mb-2 ">
							<Label>Signature</Label>
							{/* Render the signature canvas component */}
							<SignatureCanvas
								ref={signatureRef}
								canvasProps={{
									// width: 700,
									// height: 200,
									className: "sigCanvas border-2 rounded-md border-dashed",
								}}
							/>

							{/* Button to clear the signature */}
							<Button
								className="absolute bottom-0 right-0 mt-2  px-3 py-1 text-sm text-slate-300 rounded-tl-none rounded-tr-none rounded-br-md rounded-bl-none bg-transparent hover:bg-transparent hover:text-black"
								onClick={clearSignature}
							>
								<Undo2 className="mr-1 w-6 h-6 rounded-full" />
							</Button>
						</div>

						<div className="flex flex-col">
							<Button type="button" variant={"destructive"}>
								Clear Form
							</Button>
						</div>
						<div className="flex flex-col">
							<SubmitButton />
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default FormPage;
