var restorant = {
    restorantTitle: 'VISA PICA',
    totalTables: 8,
    reservedTables: 3,
    checkFreeSpaces: function () {
        console.log("Restorant " + this.restorantTitle + " has " + (this.totalTables - this.reservedTables) + " free tables.");
    },
    reserveTables: function (numberOfTables) {
        if (numberOfTables === undefined) {
            console.log("Please, specify number of tables to make reservation.")
        } else if (numberOfTables <= (this.totalTables - this.reservedTables)) {
            console.log("Making reservation for " + numberOfTables + " tables.")
            this.reservedTables += numberOfTables;
        } else {
            console.log("Can not reserve " + numberOfTables + " tables. There is not enough free tables left!")
        }
    },
    cancelReservation: function (numberOfTables) {
        if (numberOfTables === undefined) {
            console.log("Please specify a number of tables to cancel reservation.");
        } else if (numberOfTables <= this.reservedTables) {
            this.reservedTables -= numberOfTables;
            console.log("Canceling reservation for " + numberOfTables + " tables.");
        } else {
            console.log("Please check if you entered correct number of tables to cancel!")
        }
    }
};

restorant.checkFreeSpaces();
restorant.reserveTables(3);
restorant.checkFreeSpaces();
restorant.cancelReservation(7);
restorant.checkFreeSpaces();
