import { donorService } from "./donorService.js";

export const findMatchingDonors = async (request) => {
    try {
        // Support both field names that may exist in requests: `area` or `hospitalArea`
        const areaToSearch = request.area || request.hospitalArea || '';
        const matches = await donorService.getMatchingDonors(request.bloodGroup, areaToSearch);
        return matches.documents;
    } catch (error) {
        console.error("Error finding matching donors:", error);
        return [];
    }
};