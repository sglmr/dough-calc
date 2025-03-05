function calc_it() {
    var balls = parseFloat(document.getElementById('balls').value)
    var dough_weight = parseFloat(document.getElementById('dough_weight').value)
    var flour_1 = parseFloat(document.getElementById('flour_1').value)
    var water = parseFloat(document.getElementById('water').value)
    var salt = parseFloat(document.getElementById('salt').value)
    var yeast = parseFloat(document.getElementById('yeast').value)
    var oil = parseFloat(document.getElementById('oil').value)
    var sugar = parseFloat(document.getElementById('sugar').value)


    // Calculate totals
    var total_dough = balls * dough_weight
    var total_percent = flour_1 + water + salt + yeast + oil + sugar

    // Calculate ingredient weights
    var r = total_dough / total_percent
    document.getElementById('flour_1_wt').innerHTML = (flour_1 * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    document.getElementById('water_wt').innerHTML = (water * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    document.getElementById('salt_wt').innerHTML = (salt * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    document.getElementById('yeast_wt').innerHTML = (yeast * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    document.getElementById('oil_wt').innerHTML = (oil * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    document.getElementById('sugar_wt').innerHTML = (sugar * r).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}
calc_it()