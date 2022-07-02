class Blog {
    constructor(input) {
        this.keys = [];
        this.data = [];
        this.score = 0;
        this.cluster = 0;
        this.name = input["Blog"];

        delete input.Blog; // Delete name of blog
        for (var key in input) {
            //this.data[key] = parseInt(input[key]);
            this.data.push(parseInt(input[key]));
            this.keys.push(key);
        }
    }

    setClosestCentroid(centroidID, score) {
        if (score > this.score) {
            //console.log("New closest centroid: " + centroidID + " score: " + score);
            this.cluster = centroidID;
            this.score = score;
        } else {
            //console.log("Centroid is not closer: " + centroidID + " score: " + score);
        }
    }
}

module.exports = Blog