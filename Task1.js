/**
 * Deletes every 3rd element from Gmail client letters list
 * @return undefined
 */
function removeEveryNthElement() {
    /**
     * @type number position - starter position
     * @type number inc - incremental number
     */
    var position = 2;
    var inc = 3;
    //gets table from dom model
    var table = document.getElementById(":3f");
    //gets row cont
    var rowCount = table.rows.length;
    if (rowCount < 3) {
        console.log("Message list is shortened already");
        throw new Error("Current message list is shorter than 3 elements");
    }
    // cycle for deleting unnecessary elements
    for (; rowCount > position; position += inc, rowCount--) {
        table.deleteRow(position);
        position--;
    }
    console.log("Done");
}