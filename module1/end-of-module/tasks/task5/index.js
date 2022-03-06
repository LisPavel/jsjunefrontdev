import "./index.css";

import moment from "moment";
class Donation {
  constructor(donationAmount) {
    this.amount = donationAmount;

    this.date = moment().format("MMMM Do YYYY, h:mm:ss a");
  }

  render(container) {
    // moment().format('MMMM Do YYYY, h:mm:ss a');
    //<div class="donate-item">July 6th 2021, 10:28:49 am - <b>3$</b></div>
    const donateItem = document.createElement("div");
    donateItem.className = "donate-item";
    donateItem.innerHTML= `${this.date} - <b>${this.amount}$</b>`;
    

    container.append(donateItem);
  }
}

class DonationsList {
  constructor(currentDonationsSum) {
    this.donations = document.body.querySelector(".donates-container__donates");
    this.donationsSum = currentDonationsSum;
  }

  addDonation(donationAmount) {
    const donation = new Donation(donationAmount);
    this.donationsSum += donationAmount;

    donation.render(this.donations);
  }
}

class DonationForm {
  constructor() {
    this.form = document.body.querySelector(".donate-form");
    this.input = this.form.querySelector(".donate-form__donate-input");
    this.sumOfDonations = this.form.querySelector("#total-amount");
    this.initSum = Number(this.sumOfDonations.textContent.match(/\d+/)[0]);
    this.donationList = new DonationsList(this.initSum);
    this.form.addEventListener("submit", this.#onFormSubmit.bind(this));
  }

  #onFormSubmit(event) {
    event.preventDefault();
    const donationAmount = Number(this.input.value);
    this.donationList.addDonation(donationAmount);
    this.input.value = "";
    this.sumOfDonations.textContent = `${this.donationList.donationsSum}$`;
  }
}

const donForm = new DonationForm();
