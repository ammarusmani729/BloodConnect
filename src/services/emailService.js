import emailjs from "@emailjs/browser";

export const sendEmailAlert = (donor, request) => {

    const templateParams = {

        to_name: donor.name,
        to_email: donor.email,

        blood_group: request.bloodGroup,
        hospital: request.hospital,
        urgency: request.urgency

    };

    return emailjs.send(
        "service_y2d6gj6",
        "template_9747r61",
        templateParams,
        "PFmDTW3iSsA0-YpRa"
    );
};