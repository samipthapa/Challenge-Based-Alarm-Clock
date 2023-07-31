function calculateHistogram(imageData) {
    var histogram = new Array(256).fill(0);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];
        var gray = Math.round(0.299 * red + 0.587 * green + 0.114 * blue);
        histogram[gray]++;
    }

    return histogram;
}

function compareHistograms(histogram1, histogram2, threshold = 0.7) {
    var sum1 = histogram1.reduce((a, b) => a + b, 0);
    var sum2 = histogram2.reduce((a, b) => a + b, 0);

    var similarity = 0;
    for (var i = 0; i < 256; i++) {
        similarity += Math.min(histogram1[i] / sum1, histogram2[i] / sum2);
    }

    var match = similarity >= threshold;
    return match;
}

function compareImages(imageData1, imageData2) {
    var histogram1 = calculateHistogram(imageData1);
    var histogram2 = calculateHistogram(imageData2);

    var similarity = compareHistograms(histogram1, histogram2);
    return similarity;
}
