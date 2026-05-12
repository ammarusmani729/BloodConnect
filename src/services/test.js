import donors from "../donors.js";
import { sendEmailAlert } from "./emailService.js";
import { findMatchingDonors } from "./matchingService.js";
import { generateWhatsAppLink } from "./notificationService.js";

// Fake hospital request
const request = {
    bloodGroup: "A+",
    area: "Karachi",
    hospital: "Civil Hospital",
    urgency: "Critical"
};

console.log("\n🚨 BLOODCONNECT TEST RUN STARTED\n");

// Step 1: Matching
const matchedDonors = findMatchingDonors(request);

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
        `is needed at ${request.hospital}. Urgency: ${request.urgency}`
    );
    console.log("----------------------");
});

console.log("\n🎉 TEST COMPLETED\n");