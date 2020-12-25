import PapersIcon from "../images/papers.png";
import BooksIcon from "../images/books.png";
import BagPack from "../images/backpack.png";
import HandBag from "../images/handbag.png";
import Luggage from "../images/luggage.png";
import Carton from "../images/carton.png";
import CarIcon from "../images/car.png";
import BikeIcon from "../images/motorcycle.png";
import BusIcon from "../images/bus.png";
import TrainIcon from "../images/train.png";
import FlightIcon from "../images/airplane.png";
import TruckIcon from "../images/truck.png";
import TaxiIcon from "../images/taxi.png";

export const pincodeToLocationUrl = "https://api.postalpincode.in/pincode/";

export const categoryListItems = [
  //https://linearicons.com/free#cheat-sheet
  {
    categoryId: 1,
    categoryName: "Documents",
    icon: "license"
  },
  {
    categoryId: 2,
    categoryName: "Electronics",
    icon: "camera"
  },
  {
    categoryId: 3,
    categoryName: "Food Items",
    icon: "coffee-cup"
  },
  {
    categoryId: 4,
    categoryName: "Medicines",
    icon: "dice"
  },
  {
    categoryId: 5,
    categoryName: "Clothes & Shoes",
    icon: "shirt"
  },
  {
    categoryId: 6,
    categoryName: "Toys",
    icon: "magic-wand"
  },
  {
    categoryId: 7,
    categoryName: "Books & Stationery",
    icon: "book"
  },
  {
    categoryId: 8,
    categoryName: "Sports equipments",
    icon: "bicycle"
  },
  {
    categoryId: 9,
    categoryName: "Others",
    icon: "gift"
  }
];

export const weightCategories = [
  {
    name: "extraSmall",
    title: "Extra-Small",
    minWeight: "0",
    maxWeight: "0.5",
    icon: PapersIcon
  },
  {
    name: "small",
    title: "Small",
    minWeight: "0.6",
    maxWeight: "2",
    icon: BooksIcon
  },
  {
    name: "medium",
    title: "Medium",
    minWeight: "2.1",
    maxWeight: "8",
    icon: HandBag
  },
  {
    name: "large",
    title: "Large",
    minWeight: "8.1",
    maxWeight: "15",
    icon: BagPack
  },
  {
    name: "extraLarge",
    title: "Extra-Large",
    minWeight: "15.1",
    maxWeight: "20",
    icon: Luggage
  },
  {
    name: "Huge",
    title: "Huge",
    minWeight: "20.1",
    maxWeight: "100",
    icon: Carton
  }
];

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const TransportModes = [
  { id: 0, name: "Bike", icon: BikeIcon },
  { id: 1, name: "Bus", icon: BusIcon },
  { id: 2, name: "Car", icon: CarIcon },
  { id: 3, name: "Flight", icon: FlightIcon },
  { id: 4, name: "Train", icon: TrainIcon },
  { id: 5, name: "Truck", icon: TruckIcon },
  { id: 6, name: "Taxi", icon: TaxiIcon }
];
