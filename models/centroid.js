class Centroid {
    constructor(assignedID, minMax) {
        this.id = assignedID;
        this.data = [];
        this.keys = [];

        for (var key in minMax) {
            let value = parseInt(minMax[key]) + 1;
            this.data.push(Math.floor(Math.random() * value));
            this.keys.push(key);
        }
    }
}

module.exports = Centroid