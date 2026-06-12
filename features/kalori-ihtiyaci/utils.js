export function calculateCalorieNeeds({
  gender,
  age,
  height,
  weight,
  activity,
}) {
  let bmr = 0;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const maintainCalories = bmr * activity;

  const loseCalories = maintainCalories - 400;

  const gainCalories = maintainCalories + 300;

  return {
    values: [
      {
        key: "bmr",
        label: "Bazal metabolizma",
        value: `${Math.round(bmr)} kcal`,
      },
      {
        key: "maintain",
        label: "Kilo koruma",
        value: `${Math.round(maintainCalories)} kcal`,
      },
      {
        key: "lose",
        label: "Kilo verme",
        value: `${Math.round(loseCalories)} kcal`,
      },
      {
        key: "gain",
        label: "Kilo alma",
        value: `${Math.round(gainCalories)} kcal`,
      },
    ],
  };
}
