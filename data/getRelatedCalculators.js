export function getRelatedCalculators(currentPath) {
  const current = calculators.find((c) => c.path === currentPath);

  if (!current) return [];

  return calculators
    .filter((c) => c.path !== currentPath)
    .map((c) => {
      const sameCategory = c.category === current.category ? 3 : 0;

      const tagScore = c.tags.filter((t) => current.tags.includes(t)).length;

      return { ...c, score: sameCategory + tagScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
