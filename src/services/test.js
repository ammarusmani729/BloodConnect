// import { sendEmailAlert } from "./emailService.js";
import { findMatchingDonors } from "./matchingService.js";
import { generateWhatsAppLink } from "./notificationService.js";

// Fake hospital request matching the new Appwrite schema
const request = {
    bloodGroup: "A+",
    HospitalArea: "Karachi",
    hospitalName: "Civil Hospital",
    urgency: "Critical",
    patientName: "John Doe",
    status: "active"
};

console.log("\n🚨 BLOODCONNECT TEST RUN STARTED\n");

// Step 1: Matching
const matchedDonors = await findMatchingDonors(request);

console.log("✅ Matched Donors Found:");
console.log(matchedDonors);

// Step 2: WhatsApp Links
console.log("\n📱 WhatsApp Links:\n");

matchedDonors.forEach((donor) => {
    const link = generateWhatsAppLink(donor, request);

    console.log(`${donor.name}:`);
    console.log(link);
    console.log("----------------------");
});

console.log("\n📧 EMAIL ALERTS:\n");

matchedDonors.forEach((donor) => {
    console.log(`To: ${donor.email}`);
    console.log(`Subject: Emergency Blood Request`);
    console.log(
        `Message: Dear ${donor.name}, ` +
        `an emergency blood request for ${request.bloodGroup} ` +
        `is needed at ${request.hospitalName}. Urgency: ${request.urgency}`
    );
    // Un-comment to actually send emails via EmailJS
    // sendEmailAlert(donor, request);
    console.log("----------------------");
});

console.log("\n🎉 TEST COMPLETED\n");