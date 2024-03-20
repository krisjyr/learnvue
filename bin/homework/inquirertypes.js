import inquirer from "inquirer";

inquirer
  .prompt([
    { type: "input", name: "name", message: "Whats your name?" },
    {
      type: "password",
      name: "password",
      message: "Insert your password.",
      mask: true,
    },
    { type: "number", name: "phone", message: "Whats your phone number?" },
    {
      type: "list",
      name: "food",
      message: "What would you like to order?",
      choices: ["Pizza", "Burger", "Fries"],
    },
    {
      type: "rawlist",
      name: "size",
      message: "What size do you need?",
      choices: [{name: "Small", value: "small"}, {name: "Medium", value:"medium"}, {name: "Large", value:"large"},],
    },
    {
      type: "checkbox",
      name: "sodas",
      message: "What do soda do you want?",
      choices: ["Cola", "Sprite", "Fanta", "Water", "Pepsi", "7up"],
    },
    { type: "editor", name: "desc", message: "Enter description" },
    {
      type: "expand",
      name: "paymentMethod",
      message: "Choose payment method",
      default: "y",
      choices: [
        {
          key: "y",
          name: "Paypal",
          value: "paypal",
        },
        {
          key: "a",
          name: "Credit Card",
          value: "creditcard",
        },
        {
          key: "d",
          name: "Stripe",
          value: "stripe",
        },
        {
          key: "x",
          name: "Abort order",
          value: "abort",
        },
      ],
    },
    {
      type: "confirm",
      name: "confirmation",
      message: "Do you confirm your order?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
