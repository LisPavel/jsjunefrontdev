const goals = [8, 1, 1, 3, 2, -1, 5];

const findMinGoalsAmount = (min, goalsAmount) =>
  goalsAmount >= 0 ? Math.min(min, goalsAmount) : min;

const findMaxGoalsAmount = (max, goalsAmount) =>
  goalsAmount >= 0 ? Math.max(max, goalsAmount) : max;

const calcGoalsSum = (sum, goalsAmount) =>
  (sum += goalsAmount >= 0 ? goalsAmount : 0);

const isAutoDefeatMatch = (goalsAmount) => goalsAmount === -1;

const ascendingSort = (match1, match2) => match1 - match2;

const showBestMatchResult = (goals = []) => {
  const maxGoals = goals.reduce(findMaxGoalsAmount, -2);
  const maxGoalsIndex = goals.findIndex(
    (goalsAmount) => goalsAmount === maxGoals
  );

  alert(
    `Самый результативный матч был под номером ${maxGoalsIndex}. В нем было ` +
      `забито ${maxGoals} гол(ов).`
  );
};

const showWorstMatches = (goals = []) => {
  const minGoals = goals.reduce(findMinGoalsAmount, Infinity);
  const worstMatches = goals.reduce((arr, goalsAmount, index) => {
    goalsAmount === minGoals && arr.push(index);
    return arr;
  }, []);

  alert(
    `Самые нерезультативные матчи были под номерами ` +
      `${worstMatches.join(", ")}. В каждом из них было забито по ` +
      `${minGoals} мячу(а).`
  );
};

const showSumOfGoalsInSeason = (goals = []) =>
  alert(`Общее количество голов за сезон равно ${goals.reduce(calcGoalsSum)}`);

const showSeasonHaveAutoDefeate = (goals = []) =>
  alert(
    `Были автоматические поражения: ${
      goals.some(isAutoDefeatMatch) ? "да" : "нет"
    }`
  );

const showAverageGoalsAmount = (goals = []) => {
  const goalsWithoutAutoDefeate = goals.filter(
    (goalsAmount) => !isAutoDefeatMatch(goalsAmount)
  );

  const avereageGoals =
    goalsWithoutAutoDefeate.reduce(calcGoalsSum) /
    goalsWithoutAutoDefeate.length;

  alert(`Среднее количество голов за матч равно ${avereageGoals}`);
};

const showAscendingSortedGoals = (goals = []) => {
  const sortedGoals = goals.slice().sort(ascendingSort);
  alert(
    `Default goals: ${goals.join(", ")}\n` +
      `Sorted goals: ${sortedGoals.join(", ")}`
  );
};

showBestMatchResult(goals);
showWorstMatches(goals);
showSumOfGoalsInSeason(goals);
showSeasonHaveAutoDefeate(goals);
showAverageGoalsAmount(goals);
showAscendingSortedGoals(goals);
