"use server";


import { Prisma } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import axios from "axios";
import { format } from "date-fns";


export const submitForm = async (formData) => {
	
	
	console.log(formData);

	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");
	const healthCardNumber = formData.get("healthCardNumber");
	const gender = formData.get("gender");
	const dob = formData.get("dateOfBirth");
	const address1 = formData.get("address1");
	const address2 = formData.get("address2");
	const province = formData.get("province");
	const city = formData.get("city");
	const postalCode = formData.get("postalCode");
	const email = formData.get("email");
	const physician = formData.get("physician");
	const medication = formData.get("medication");
	const signature = formData.get("signature");
	
   
	

	// try {
		// Save form data to Prisma
		await prisma.form.create({
			data: {
				firstName,
				lastName,
				healthCardNumber,
				gender,
				dob,
				address1,
				address2,
				province,
				city,
				postalCode,
				email,
				physician,
				medication,
			},
		});

		// // Create an object with the form data
		// const formDataObject = {
		// 	firstName,
		// 	lastName,
		// 	healthCardNumber,
		// 	gender,
		// 	dob,
		// 	address1,
		// 	address2,
		// 	province,
		// 	city,
		// 	postalCode,
		// 	email,
		// 	physician,
		// 	medication,
		// };

	// 	// Make a POST request to the API endpoint using axios
	// 	const response = await axios.post("API_ENDPOINT_URL", formDataObject);

	// 	// Check if the request was successful
	// 	if (response.status === 200) {
	// 		console.log("Form data sent successfully");
	// 	} else {
	// 		console.error("Failed to send form data");
	// 	}
	// } catch (error) {
	// 	console.error("Error saving form data:", error);
	// }
};