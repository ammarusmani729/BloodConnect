const generateWhatsAppLink = (
    donor,
    request
) => {
    // Clean and format phone number for WhatsApp
    // WhatsApp expects format: country_code + phone_number (e.g., 12125551234 for US)
    let phone = donor.phone.trim();
    
    // Remove all non-numeric characters except + at the start
    phone = phone.replace(/[^\d+]/g, '');
    
    // If phone doesn't start with +, assume it needs country code
    // If it has + at the start, keep it as is; WhatsApp will handle the +
    if (!phone.startsWith('+') && phone.length > 0) {
        // If phone is less than 11 digits, assume it needs country code
        // Default to +1 (US), adjust as needed for your region
        if (phone.length < 11) {
            phone = '1' + phone; // Add US country code
        }
    }

    const message =
        `🚨 Emergency Blood Needed

Blood Group: ${request.bloodGroup}
Hospital: ${request.hospitalName || request.hospital}
Urgency: ${request.urgency}

Can you donate immediately?
Reply YES if available.`;

    return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
};

export const notificationService = {
  generateWhatsAppLink
};