export const generateWhatsAppLink = (
    donor,
    request
) => {

    const message =
        `🚨 Emergency Blood Needed

Blood Group: ${request.bloodGroup}
Hospital: ${request.hospitalName || request.hospital}
Urgency: ${request.urgency}

Can you donate immediately?
Reply YES if available.`;

    return `https://wa.me/${donor.phone}?text=${encodeURIComponent(message)}`;
};