async function pearson(centroid, blog) {
    let sum1 = 0;
    let sum2 = 0;
    let sum1sq = 0;
    let sum2sq = 0;
    let pSum = 0;
    let n = 0;

    for (let i = 0; i < centroid.keys.length; i++) {
        for (let j = 0; j < blog.keys.length; j++) {

            if (centroid.keys[i] === blog.keys[j]) {
                let scoreA = centroid.data[i]
                let scoreB = blog.data[j]

                sum1 += scoreA;
                sum2 += scoreB;
                sum1sq += scoreA**2;
                sum2sq += scoreB**2;
                pSum += scoreA * scoreB;
                n++;
            }
        }
    }

    if (n === 0) {
        return 0;
    } else {
        // Calculate Pearson
        let num = pSum - (sum1 * sum2 / n);
        let den = Math.sqrt((sum1sq - sum1**2 / n) * (sum2sq - sum2**2 / n));
        let result = num / den;

        // Assigns blog to centroid if it's closer than previous
        blog.setClosestCentroid(centroid.id, result);

        return result;
    }
}

module.exports = { pearson : pearson};