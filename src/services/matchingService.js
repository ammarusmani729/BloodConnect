import donors from "../donors.js";

export const findMatchingDonors = (request) => {

    return donors.filter((donor) => {
        return (
            donor.bloodGroup === request.bloodGroup &&
            donor.area === request.area &&
            donor.available === true
        );
    });

};