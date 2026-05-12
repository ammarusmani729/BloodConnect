/**
 * Normalize blood group values to a standard format
 * Handles both display formats: "O+" and "O Positive"
 */
export const normalizeBloodGroup = (bloodGroup) => {
  if (!bloodGroup) return '';
  
  const normalized = bloodGroup
    .toUpperCase()
    .trim()
    .replace(/\s+/g, ' ') // normalize spaces
    .replace(/O NEGATIVE|O-/gi, 'O-')
    .replace(/O POSITIVE|O\+/gi, 'O+')
    .replace(/A NEGATIVE|A-/gi, 'A-')
    .replace(/A POSITIVE|A\+/gi, 'A+')
    .replace(/B NEGATIVE|B-/gi, 'B-')
    .replace(/B POSITIVE|B\+/gi, 'B+')
    .replace(/AB NEGATIVE|AB-/gi, 'AB-')
    .replace(/AB POSITIVE|AB\+/gi, 'AB+')
    .replace(/\(EMERGENCY UNIVERSAL\)/gi, '') // remove extra text
    .trim();
  
  return normalized;
};
