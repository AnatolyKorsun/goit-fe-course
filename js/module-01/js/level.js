const GROUP_SHARM = " Sharm ";
const GROUP_HURGADA = " Hurgada ";
const GROUP_TABA = " Taba ";

const PLACES_SHARM_TOUR = 15;
const PLACES_HURGADA_TOUR = 25;
const PLACES_TABA_TOUR = 6;

let userInput = prompt("Сколько человек будет отдыхать с Вами", "от 6 до 25");
const touristPlacaes = Number(userInput);

console.log(touristPlacaes);

const isValidInput =
  userInput !== null &&
  !Number.isNaN(touristPlacaes) &&
  userInput > 0 &&
  Number.isInteger(touristPlacaes);

console.log(isValidInput);

if (isValidInput) {
  let leftPlacesTabaTour;
  let leftPlacesSharmTour;
  let leftPlacesHurgadaTour;

  if (touristPlacaes <= PLACES_TABA_TOUR) {
    if (
      window.confirm(
        `Есть места в группе ${GROUP_TABA}, ви согласны быть в этой группе?`
      )
    ) {
      leftPlacesTabaTour = PLACES_TABA_TOUR - touristPlacaes;
      window.alert(
        `Приятного путешествия в группе ${GROUP_TABA}, остаток мест по туру ${leftPlacesTabaTour}`
      );
      touristPlacaes = false;
    }
  }

  if (touristPlacaes <= PLACES_SHARM_TOUR) {
    if (
      window.confirm(
        `Есть места в группе ${GROUP_SHARM}, ви согласны быть в этой группе?`
      )
    ) {
      leftPlacesSharmTour = PLACES_SHARM_TOUR - touristPlacaes;
      window.alert(
        `Приятного путешествия в группе ${GROUP_SHARM}, остаток мест по туру ${leftPlacesSharmTour}`
      );
      touristPlacaes = false;
    }
  }

  if (touristPlacaes <= PLACES_HURGADA_TOUR) {
    if (
      window.confirm(
        `Есть места в группе ${GROUP_HURGADA}, ви согласны быть в этой группе?`
      )
    ) {
      leftPlacesHurgadaTour = PLACES_HURGADA_TOUR - touristPlacaes;
      window.alert(
        `Приятного путешествия в группе ${GROUP_HURGADA}, остаток мест по туру ${leftPlacesHurgadaTour}`
      );
      touristPlacaes = false;
      
    }
  }

 if (touristPlacaes){ window.alert(`Извените мест нет.`);}
} else window.alert("Ошибка ввода");
