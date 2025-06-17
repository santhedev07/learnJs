// if else condition
let ticketCategory = {
    "VIP": 100000,
    "Regular": 50000,
    "Economy": 20000
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let agePermission = 18;
let visitorPerson;

rl.question("Please enter your age: ", (age) => {
    let ageVisitor = Number(age);
    if (isNaN(ageVisitor) || ageVisitor < 0) {
        console.log("Invalid age entered. Please enter a valid number.");
        rl.close();
        return;
    }
    if (ageVisitor >= agePermission) {
        console.log("You are allowed to buy a ticket.");
        rl.question("Do you want to buy a ticket? (yes/no): ", (chooseTicket) => {
            chooseTicket = chooseTicket.toLowerCase();
            if (chooseTicket === "yes") {
                rl.question("Please enter your name: ", (name) => {
                    visitorPerson = name;
                    console.log("Welcome " + visitorPerson + "! Here are the ticket categories:");
                    console.log("1. VIP - " + ticketCategory.VIP + " IDR");
                    console.log("2. Regular - " + ticketCategory.Regular + " IDR");
                    console.log("3. Economy - " + ticketCategory.Economy + " IDR");
                    rl.question("Please choose a ticket category (VIP/Regular/Economy): ", (ticketChoice) => {
                        ticketChoice = ticketChoice.toLowerCase();
                        if (ticketChoice === "vip") {
                            console.log("You have chosen VIP ticket. The price is " + ticketCategory.VIP + " IDR.");
                            rl.question("Please enter the quantity of tickets you want to buy: ", (quantity) => {
                                let ticketQuantity = Number(quantity);
                                if (isNaN(ticketQuantity) || ticketQuantity <= 0) {
                                    console.log("Invalid quantity entered. Please enter a valid number.");
                                } else {
                                    let totalPrice = ticketCategory.VIP * ticketQuantity;
                                    console.log("Total price for " + ticketQuantity + " VIP tickets is " + totalPrice + " IDR.");
                                    rl.question("Please enter your money amount: ", (money) => {
                                        let moneyAmount = Number(money);
                                        if (isNaN(moneyAmount) || moneyAmount < totalPrice) {
                                            console.log("Insufficient funds. You cannot buy the tickets.");
                                            rl.close();
                                        } else if (moneyAmount > totalPrice) {
                                            console.log("Your change is " + (moneyAmount - totalPrice) + " IDR.");
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                        else {
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                    });
                                }
                            });
                        } else if (ticketChoice === "regular") {
                            console.log("You have chosen Regular ticket. The price is " + ticketCategory.Regular + " IDR.");
                            rl.question("Please enter the quantity of tickets you want to buy: ", (quantity) => {
                                let ticketQuantity = Number(quantity);
                                if (isNaN(ticketQuantity) || ticketQuantity <= 0) {
                                    console.log("Invalid quantity entered. Please enter a valid number.");
                                } else {
                                    let totalPrice = ticketCategory.Regular * ticketQuantity;
                                    console.log("Total price for " + ticketQuantity + " Regular tickets is " + totalPrice + " IDR.");
                                    rl.question("Please enter your money amount: ", (money) => {
                                        let moneyAmount = Number(money);
                                        if (isNaN(moneyAmount) || moneyAmount < totalPrice) {
                                            console.log("Insufficient funds. You cannot buy the tickets.");
                                            rl.close();
                                        } else if (moneyAmount > totalPrice) {
                                            console.log("Your change is " + (moneyAmount - totalPrice) + " IDR.");
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                        else {
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                    });
                                }
                            });
                        } else if (ticketChoice === "economy") {
                            console.log("You have chosen Economy ticket. The price is " + ticketCategory.Economy + " IDR.");
                            rl.question("Please enter the quantity of tickets you want to buy: ", (quantity) => {
                                let ticketQuantity = Number(quantity);
                                if (isNaN(ticketQuantity) || ticketQuantity <= 0) {
                                    console.log("Invalid quantity entered. Please enter a valid number.");
                                } else {
                                    let totalPrice = ticketCategory.Economy * ticketQuantity;
                                    console.log("Total price for " + ticketQuantity + " Economy tickets is " + totalPrice + " IDR.");
                                    rl.question("Please enter your money amount: ", (money) => {
                                        let moneyAmount = Number(money);
                                        if (isNaN(moneyAmount) || moneyAmount < totalPrice) {
                                            console.log("Insufficient funds. You cannot buy the tickets.");
                                            rl.close();
                                        } else if (moneyAmount > totalPrice) {
                                            console.log("Your change is " + (moneyAmount - totalPrice) + " IDR.");
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                        else {
                                            console.log("Thank you " + visitorPerson + "! Your purchase is successful.");
                                            rl.close();
                                        }
                                    });
                                }
                            });
                        } else {
                            console.log("Invalid ticket category selected. Please try again.");
                            rl.close();
                        }
                    });
                });
            } else {
                console.log("Thank you! Have a great day!");
                rl.close();
            }
        });
    } else {
        console.log("You are not allowed to buy a ticket due to age restrictions.");
        rl.close();
    }
});
