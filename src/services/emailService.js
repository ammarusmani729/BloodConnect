import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key (for browser)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

export const sendEmailAlert = (donor, request) => {
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        console.error('EmailJS configuration missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY');
        return Promise.reject(new Error('EmailJS not configured'));
    }

    const templateParams = {
        to_name: donor.name,
        to_email: donor.email,
        blood_group: request.bloodGroup,
        hospital: request.hospitalName || request.hospital,
        urgency: request.urgency
    };

    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
    );
};