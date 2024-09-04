export const convertGenderAgeDistributionData = (data) => {
  // Mapping categories to more readable age ranges
  const ageRanges = {
    "0_18": "11 to 18",
    "18_21": "18 to 25",
    "21_24": "18 to 25",
    "24_27": "18 to 25",
    "27_30": "18 to 25",
    "30_35": "25 to 35",
    "35_45": "35 to 50",
    "45_100": "above 50"
  };

  // Initialize the result array with the header
  const result = [["Ages", "Male", "Female"]];

  // Check if data is null or undefined
  if (!data) {
    // If data is null, return 0 for all age ranges
    const uniqueAgeRanges = Array.from(new Set(Object.values(ageRanges)));
    uniqueAgeRanges.forEach((range) => {
      result.push([range, 0, 0]);
    });
    return result;
  }

  // Grouping by age ranges and summing the values
  const groupedData = {};

  data.forEach(({ category, m, f }) => {
    const ageRange = ageRanges[category];
    if (!groupedData[ageRange]) {
      groupedData[ageRange] = { male: 0, female: 0 };
    }
    groupedData[ageRange].male += m;
    groupedData[ageRange].female += f;
  });

  // Converting percentages to integers
  for (const [ageRange, { male, female }] of Object.entries(groupedData)) {
    result.push([
      ageRange,
      Math.round(male * 100),
      Math.round(female * 100),
    ]);
  }

  return result;
};