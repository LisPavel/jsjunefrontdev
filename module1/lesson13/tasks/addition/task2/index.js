class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };

  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours ?? DefaultWorkingHours;
  }

  repairCar(carName = "") {
    if (carName.length === 0) {
      return console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
    }
    console.log(
      checkCurrentTimeInRange(this.workingHours)
        ? `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`
        : `К сожалению, мы сейчас закрыты. Приходите завтра`
    );
  }
}

function checkCurrentTimeInRange({ till, from }) {
  const [tillHours] = till.split(":").map((val) => Number(val));
  const [fromHours] = from.split(":").map((val) => Number(val));

  const currentDate = new Date();

  return (
    currentDate.getHours() >= fromHours && currentDate.getHours() < tillHours
  );
}

//* TESTS

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");
