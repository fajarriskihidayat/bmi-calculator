// function get data input
const handleGetData = () => {
  let weight = document.getElementsByName("weight")[0].value;
  let height = document.getElementsByName("height")[0].value;

  return { weight, height };
};

// validation
const validateData = (data) => {
  if (
    data.weight != "" &&
    data.height != "" &&
    data.weight != 0 &&
    data.height != 0 &&
    data.weight >= 0 &&
    data.height >= 0
  )
    return true;
  return false;
};

// calculation result and change type data
const calculationResult = (data) => {
  let value = (result.innerHTML = data.weight / (data.height / 100) ** 2);
  let roundedResult = value.toFixed(1);
  return parseFloat(roundedResult);
};

// validation BMI result
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

// validation color category
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

// function handle submit
const handleSubmit = () => {
  if (validateData(handleGetData()) === true) {
    let result = document.getElementById("result");
    let bmiResult = calculationResult(handleGetData());
    let bmiCategory = bmiCategories(calculationResult(handleGetData()));
    let bmiColor = colorCategory(bmiCategory);

    return (
      (document.getElementById("warning").innerHTML = ""),
      (document.getElementById("card-desc").style.display = "block"),
      (document.getElementById("bmi").innerHTML = bmiResult),
      (document.getElementById("category").innerHTML = bmiCategory),
      (document.getElementById("category").style.color = bmiColor),
      (result.innerHTML = `Your BMI is ${bmiResult} which means. You are ${bmiCategory}`)
    );
  }
  return (
    (document.getElementById("warning").innerHTML = "Isi data dengan benar!"),
    (document.getElementById("card-desc").style.display = "none")
  );
};

// function handle reset
const handleReset = () => {
  let weight = document.getElementsByName("weight")[0];
  let height = document.getElementsByName("height")[0];

  return (
    (weight.value = ""),
    (height.value = ""),
    (document.getElementById("card-desc").style.display = "none")
  );
};

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit();
});

let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  e.preventDefault();
  handleReset();
});
