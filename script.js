let result = document.getElementById("result");
let submit = document.getElementById("submit");

const handleGetData = () => {
  let weight = document.getElementsByName("weight")[0].value;
  let height = document.getElementsByName("height")[0].value;

  return { weight, height };
};

const validateData = (data) => {
  if (data.weight != "" && data.height != "") return true;
  return false;
};

const calculationResult = (data) => {
  let value = (result.innerHTML = data.weight / (data.height / 100) ** 2);
  let roundedResult = value.toFixed(1);
  return parseFloat(roundedResult);
};

const bmiCategories = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};

const colorCategory = (category) => {
  switch (category) {
    case "Underweight":
      return "#0059ff";
    case "Normal":
      return "#15c229";
    case "Overweight":
      return "#ebe72d";
    default:
      return "#f53131";
  }
};

const handleSubmit = () => {
  if (validateData(handleGetData()) === true) {
    let bmiResult = calculationResult(handleGetData());
    let bmiCategory = bmiCategories(calculationResult(handleGetData()));
    let bmiColor = colorCategory(bmiCategory);

    return (
      (document.getElementById("card-desc").style.display = "block"),
      (document.getElementById("bmi").innerHTML = bmiResult),
      (document.getElementById("category").innerHTML = bmiCategory),
      (document.getElementById("category").style.color = bmiColor),
      (result.innerHTML = `Your BMI is ${bmiResult} which means. You are ${bmiCategory}`)
    );
  }
  return (warning.innerHTML = "Isi data Anda!");
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit();
});
