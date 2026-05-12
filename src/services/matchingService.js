import { donorService } from "./donorService.js";

export const findMatchingDonors = async (request) => {
    try {
        const matches = await donorService.getMatchingDonors(request.bloodGroup, request.area);
        return matches.documents;
    } catch (error) {
        console.error("Error finding matching donors:", error);
        return [];
    }
};