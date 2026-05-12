import { donorService } from "./donorService.js";

export const findMatchingDonors = async (request) => {
    try {
        const areaToSearch = request.HospitalArea || request.area;
        const matches = await donorService.getMatchingDonors(request.bloodGroup, areaToSearch);
        return matches.documents;
    } catch (error) {
        console.error("Error finding matching donors:", error);
        return [];
    }
};