"use client"

import { AddressAutofill } from "@mapbox/search-js-react";
import { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import InputMask from "react-input-mask";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
	Box,
	Flex,
	Button,
	ButtonGroup,
    ChakraProvider,
	CheckboxGroup,
	Center,
	Container,
	Fade,
	FormControl,
	FormLabel,
	// FormErrorMessage,
    HStack,
	Image,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	// Radio,
	RadioGroup,
	Select,
	Spacer,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";

export default function Form2() {
  const mapboxKey = process.env.MAPBOX_KEY

  const endOfForm = useRef(null);
  const sigCanvas = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [healthCardNumber, setHealthCardNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [medication, setMedication] = useState("");
  const [iAm, setIam] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [leaveAVoiceMail, setLeaveAVoiceMail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [otherMedication, setOtherMedication] = useState("");
  const [dateOfSignature, setDateOfSignature] = useState("");
  const [privateInsurance, setPrivateInsurance] = useState("");
  const [insurerGroupContractPlan, setInsurerGroupContractPlan] = useState("");
  const [insurerCertificate, setInsurerCertificate] = useState("");
  const [acknowledgedcheckbox, setAcknowledgedcheckbox] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vcbFrom, setVcbFrom] = useState("");
  const [showHide, setShowHide] = useState("");
  const [morning, setMorning] = useState("");
  const [noon, setNoon] = useState("");
  const [evening, setEvening] = useState("");


  const formRef = useRef(null);

  const toast = useToast();

  const currentDate = new Date().toISOString().split('T')[0];


  useEffect(() => {
    // Set the current date when the component mounts
    const currentDate = new Date().toISOString().split('T')[0];
    setDateOfSignature(currentDate);
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const handleRadioChange = (value) => {
     // Check if the radio button is selected
     const selectedValue = value === leaveAVoiceMail ? '' : value;
     // Update the state with the selected value
    setLeaveAVoiceMail(selectedValue);
  };

  const handleVcbFrom = (value) => {
    setVcbFrom(value);
  }


  const handleCheckboxChange = () => {
    setAcknowledgedcheckbox(!acknowledgedcheckbox);
  };


  const handleShowHide = (event) => {
    const getIam = event.target.value;
    setShowHide(getIam);
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

   // MAIN CODE

  const submitFormAndEmail = async () => {
    try {

      

      // Initialize an array to store the name of the empty fields
      const emptyFields = [];
      // Perform form validation
      if (!firstName) emptyFields.push('First Name');
      if (!lastName) emptyFields.push('Last Name');
      if (!healthCardNumber) emptyFields.push('Care Card Number')
      if (!gender) emptyFields.push('Gender')
      if (!address) emptyFields.push('Address')
      if (!city) emptyFields.push('City')
      if (!province) emptyFields.push('Province')
      if (!postalCode) emptyFields.push('Postal Code')
      if (!doctor) emptyFields.push('Phycisian')
      if (!acknowledgedcheckbox) emptyFields.push('Acknowledged Checkbox')
      if (!dateOfSignature) emptyFields.push('Date of Signature');
      if (sigCanvas.current.isEmpty()) emptyFields.push('Patient Signature');

      // Check if there are empty fields
      if (emptyFields.length > 0) {
        // Display toast notification for empty fields
        toast({
          title: 'Empty Fields ',
          description: `Please fill in the following required fields: \n${emptyFields.join(', ')}.`,
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
      } else {

    // Set isLoading to true
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsModalOpen(true); //
        }, 5000);
     
      const signatureDataUrl = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
      
       if (response.ok) {
        console.log("PDF emailed successfully!");
      } else {
        const data = await response.json();
        console.error("Error generating PDF:", data.error);
      }

      // Set isLoading to false after the delay
      setIsLoading(false);
      setIsModalOpen(true);
    }
  } catch (error) {
    console.error("API Error:", error);
  }
};
  
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRefresh = () => {
    // Reload the page
  window.location.reload();

  // Scroll to the top of the screen
  window.scrollTo(0, 0);
  };
  return (
		<Container
			maxW="container.md"
			border="1px"
			borderColor="gray.200"
			bg="white"
			boxShadow="base"
			p="6"
			className="patient-form"
			ref={formRef}
		>
			<Stack direction="row">
				<Image src="/" alt="TestImage" />
				<Spacer />
				<Image w="100" h="45" src='/' alt="TestImage" />
			</Stack>
			<Center>
				<Text mt="5" pb="10" as="b" fontSize="xl">
					{" "}
					VCH PATIENT CONSENT FORM
				</Text>
			</Center>
			{/* <Button onClick={handleCaptureScreenshot}>Capture Screenshot</Button> */}

			<Formik>
				<FormControl isRequired>
					<Flex>
						<HStack spacing={4} width="100%">
							<Box flex="1">
								<FormLabel fontSize="sm">First name:</FormLabel>
								<Input
									id="firstName"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</Box>

							<Box flex="1">
								<FormLabel fontSize="sm">Last Name</FormLabel>
								<Input
									id="lastName"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Box>
						</HStack>
					</Flex>
					<Flex>
						<HStack spacing={4} width="100%" mt="5">
							<Box flex="1">
								<FormLabel fontSize="sm">Care Card Number</FormLabel>
								<Input
									id="healthCardNumber"
									value={healthCardNumber}
									onChange={(e) => setHealthCardNumber(e.target.value)}
								/>
							</Box>
							<Box flex="1">
								<FormLabel fontSize="sm">Gender</FormLabel>
								<Input
									id="gender"
									value={gender}
									onChange={(e) => setGender(e.target.value)}
								/>
							</Box>
						</HStack>
					</Flex>
					<Flex>
						<HStack spacing={4} width="100%" mt="5">
							<Formik>
								<Box flex="1">
									<FormLabel fontSize="sm">Date of Birth:</FormLabel>
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

							<Box flex="1">
								<FormLabel fontSize="sm">Phone Number:</FormLabel>
								<InputMask
									mask="999-999-9999"
									maskChar={null}
									value={phoneNumber}
									onChange={handlePhoneNumberChange}
									id="phoneNumber"
								>
									{(inputProps) => <Input {...inputProps} />}
								</InputMask>
							</Box>
						</HStack>
					</Flex>
				</FormControl>
			</Formik>
			<Flex mt="5">
				<Box flex="1">
					<FormLabel fontSize="sm">Best Time to Call:</FormLabel>

					<CheckboxGroup>
						<Stack spacing={3} direction="row">
							<input
								id="Morning"
								type="checkbox"
								value="Morning"
								className="accent-green-600"
								checked={morning}
								onChange={() => setMorning("Morning")}
							/>
							<label htmlFor="Morning">Morning</label>

							<input
								id="Noon"
								type="checkbox"
								value="Noon"
								className="accent-green-600"
								checked={noon}
								onChange={() => setNoon("Noon")}
							/>
							<label htmlFor="Noon">Noon</label>

							<input
								id="Evening"
								type="checkbox"
								value="Evening"
								className="accent-green-600"
								checked={evening}
								onChange={() => setEvening("Evening")}
							/>
							<label htmlFor="Evening">Evening</label>
						</Stack>
					</CheckboxGroup>
				</Box>
				<Box flex="1">
					<FormLabel fontSize="sm">Leave a voicemail:</FormLabel>
					<RadioGroup
						onChange={handleRadioChange}
						value={leaveAVoiceMail}
						id="leaveAVoiceMail"
					>
						<Stack spacing={3} direction="row">
							<input
								type="radio"
								id="Yes"
								value="Yes"
								name="voicemail"
								className="accent-green-600"
								onChange={() => handleRadioChange("Yes")}
							/>
							<label htmlFor="Yes">Yes</label>

							<input
								type="radio"
								id="No"
								value="No"
								name="voicemail"
								className="accent-green-600"
								onChange={() => handleRadioChange("No")}
							/>
							<label htmlFor="No">No</label>
						</Stack>
					</RadioGroup>
				</Box>
			</Flex>

			<FormControl isRequired>
				{" "}
				{/* auto address here */}
				<Formik>
					<Form>
						<AddressAutofill accessToken={mapboxKey}>
							<FormLabel fontSize="sm" mt="5">
								{" "}
								Address
							</FormLabel>
							<Input
								id="address"
								placeholder="Please enter your address"
								value={address}
								autoComplete="address-line1"
								onChange={(e) => setAddress(e.target.value)}
							/>
						</AddressAutofill>
						<FormControl>
							<FormLabel fontSize="sm" mt="5">
								{" "}
								Apartment/Unit
							</FormLabel>
							<Input
								name="apartment"
								id="address2"
								placeholder="Apartment number"
								value={address2}
								type="text"
								autoComplete="address-line2"
								onChange={(e) => setAddress2(e.target.value)}
							/>
						</FormControl>

						<FormLabel fontSize="sm" mt="5">
							{" "}
							City
						</FormLabel>
						<Input
							name="city"
							id="city"
							placeholder="City"
							value={city}
							type="text"
							autoComplete="address-level2"
							onChange={(e) => setCity(e.target.value)}
						/>
						<Flex mt="5">
							<HStack spacing={4} width="100%">
								<Box flex="1">
									<FormLabel fontSize="sm"> Province</FormLabel>
									<Input
										name="state"
										id="province"
										placeholder="Province"
										value={province}
										type="text"
										autoComplete="address-level1"
										onChange={(e) => setProvince(e.target.value)}
									/>
								</Box>
								{/* <FormLabel fontSize="sm"> Country</FormLabel>
    <Input
      name="country"
      placeholder="Country"
      type="text"
      autoComplete="country"
    /> */}
								<Box flex="1">
									<FormLabel fontSize="sm"> Postal Code</FormLabel>
									<Input
										name="postcode"
										id="postalCode"
										placeholder="Postal Code"
										value={postalCode}
										type="text"
										autoComplete="postal-code"
										onChange={(e) => setPostalCode(e.target.value)}
									/>
								</Box>
							</HStack>
						</Flex>
					</Form>
				</Formik>
			</FormControl>

			<FormLabel fontSize="sm" mt="5">
				Email address:
			</FormLabel>
			<Input
				id="email"
				value={email}
				placeholder="(Optional)"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<FormControl isRequired>
				<HStack space="5" mt="5" className="page-break">
					<Center>
						<Box>
							<FormLabel as="b" fontSize="sm">
								Please select Physician:
							</FormLabel>
						</Box>
					</Center>
					<Box flex="1">
						<Select
							fontSize="md"
							variant="filled"
							id="doctor"
							value={doctor}
							placeholder="Select option"
							onChange={(e) => {
								setDoctor(e.target.value);
							}}
						>
							<option value="Dr. Ana-luiza Sayao (ID# 24217)">
								Dr. Ana-luiza Sayao (ID# 24217)
							</option>
							<option value="Dr. Alice Schabas (ID# 32711)">
								Dr. Alice Schabas (ID# 32711)
							</option>
							<option value="Dr. Anthony Traboulsee (ID# 18049)">
								Dr. Anthony Traboulsee (ID# 18049)
							</option>
						</Select>
					</Box>
				</HStack>
			</FormControl>

			<FormLabel fontSize="sm" mt="5">
				Select Medication:
			</FormLabel>
			<RadioGroup id="medication" onChange={setMedication} value={medication}>
				<div className="flex flex-col">
					<div>
						<input
							id="Tecfidera (Dimethyl Fumarate)"
							value="Tecfidera (Dimethyl Fumarate)"
							size="sm"
							type="radio"
							name="medication"
							className="mr-2 accent-green-600"
							onChange={(e) => setMedication(e.target.value)}
						/>
						<label> Tecfidera (Dimethyl Fumarate)</label>
					</div>
					<div>
						<input
							id="Tysabri (Natalizumab)"
							value="Tysabri (Natalizumab)"
							size="sm"
							type="radio"
							name="medication"
							className="mr-2 accent-green-600"
							onChange={(e) => setMedication(e.target.value)}
						/>
						<label> Tysabri (Natalizumab)</label>
					</div>
					<div>
						<input
							id="I am not on therapy for MS/NMO"
							value="I am not on therapy for MS/NMO"
							size="sm"
							type="radio"
							name="medication"
							className="mr-2 accent-green-600"
							onChange={(e) => setMedication(e.target.value)}
						/>
						<label> I am not on therapy for MS/NMO</label>
					</div>

					<div>
						<input
							id="Other"
							value="Other"
							size="sm"
							type="radio"
							name="medication"
							className="mr-2 accent-green-600"
						/>
						<label>Other</label>
						<Input
							id="othermedication"
							value={otherMedication}
							onChange={(e) => setOtherMedication(e.target.value)}
						></Input>
					</div>
				</div>
			</RadioGroup>
			<Flex mt="5">
				<FormLabel fontSize="sm" optionalIndicator>
					Name of Private Insurance Provider:
				</FormLabel>
			</Flex>
			<Input
				id="privateInsurance"
				placeholder="(Optional)"
				value={privateInsurance}
				onChange={(e) => setPrivateInsurance(e.target.value)}
			/>

			<Flex mt="5">
				<FormLabel fontSize="sm" optionalIndicator>
					Insurer Group/Contract/Plan #:
				</FormLabel>
			</Flex>
			<Input
				id="insurerGroupContractPlan"
				placeholder="(Optional)"
				value={insurerGroupContractPlan}
				onChange={(e) => setInsurerGroupContractPlan(e.target.value)}
			/>

			<Flex mt="5">
				<FormLabel fontSize="sm" as="" optionalIndicator>
					Insurer Certificate #:{" "}
				</FormLabel>
			</Flex>
			<Input
				id="insurerCertificate"
				placeholder="(Optional)"
				value={insurerCertificate}
				onChange={(e) => setInsurerCertificate(e.target.value)}
			/>

			<Center>
				<FormLabel as="b" fontSize="sm" className="p-5 page-break">
					PATIENT CONSENT TO ENROL IN AND RECEIVE SERVICES FROM SENTREX
				</FormLabel>
			</Center>
			<Text>
				Text
			</Text>
			<Formik>
				<Form>
					<FormControl isRequired>
						<div className="flex flex-row items-center  my-3">
							<div className="">
								<FormLabel>
									I acknowledge, understand, and agree to the above:
								</FormLabel>
							</div>
							<div className=" mr-3 mt-">
								<input
									type="checkbox"
									id="acknowledgedcheckbox"
									name="acknowledgedcheckbox"
									checked={acknowledgedcheckbox}
									onChange={handleCheckboxChange}
									className=" accent-green-600 h-4 w-5"
									required
								/>
							</div>
						</div>
					</FormControl>
				</Form>
			</Formik>

			<FormLabel fontSize="md" mb="5">
				PATIENT CONSENT
			</FormLabel>
			<HStack space="5">
				<Center>
					<Box>
						<Text as="b" fontSize="sm">
							I am:
						</Text>
					</Box>
				</Center>
				<Box flex="1">
					<Select
						fontSize="md"
						variant="filled"
						id="iAm"
						value={iAm}
						placeholder="Select option"
						onChange={(e) => {
							setIam(e.target.value);
							handleShowHide(e);
						}}
						onClick={() => {
							// sendDataToBackend();
							endOfForm.current?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<option value="Patient">The patient</option>
						<option value="SDM">
							The patient’s Substitute Decision Maker (SDM)
						</option>
						<option value="HCP">
							An HCP obtaining verbal consent on behalf of the patient
						</option>
					</Select>
				</Box>
			</HStack>
			{/* IF PATIENT is SELECTED */}
			{showHide === "Patient" && (
				<Fade
					in={showHide === "Patient"}
					animateOpacity
					transition={{ enter: { duration: 1 } }}
				>
					<Text fontSize="xs" mt="5">
						{" "}
						I have read this consent form and/or it has been read to me. I give
						consent.
					</Text>
					<FormControl isRequired>
						<FormLabel fontSize="md" mt="5">
							Signature of Patient:
						</FormLabel>
					</FormControl>
					<Box className="border rounded-xl signaturePad">
						<SignatureCanvas
							ref={sigCanvas}
							id="signatureCanvas"
							canvasProps={{ width: 700, height: 200, className: "sigCanvas" }}
						/>
					</Box>

					<Stack spacing={3}>
						<Button onClick={clearSignature} className="mt-4 hide-for-pdf">
							Clear Signature
						</Button>
						<FormControl isRequired>
							<Formik>
								<Flex mt="5">
									<Box>
										<FormLabel fontSize="sm" pt="2">
											Date:
										</FormLabel>
									</Box>
									<Box mb="2">
										<Field
											type="date"
											id="dateOfSignature"
											value={dateOfSignature}
											name="dateOfSignature"
											className="w-full px-1 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm font-semibold"
											onChange={(e) => setDateOfSignature(e.target.value)}
										/>
									</Box>
								</Flex>
							</Formik>
						</FormControl>
						<Button
							colorScheme="teal"
							onClick={submitFormAndEmail}
							isLoading={isLoading}
							className="generate-pdf"
						>
							Submit Form
						</Button>
						{/* Modal for showing the success message */}
						<Modal isOpen={isModalOpen} onClose={closeModal}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Submission Complete</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									The form has successfully been submitted! Submit another form?
									<Box>
										<Center>
											<ButtonGroup mt={6} spacing={4}>
												<Button colorScheme="teal" onClick={handleRefresh}>
													Yes
												</Button>
												<Button variant="outline" onClick={closeModal}>
													No
												</Button>
											</ButtonGroup>
										</Center>
									</Box>
								</ModalBody>
							</ModalContent>
						</Modal>
					</Stack>
					<div ref={endOfForm} className="wait-for-this-div"></div>
				</Fade>
			)}
		</Container>
	);
};


