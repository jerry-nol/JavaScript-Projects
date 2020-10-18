function dictionary() {
    var Car = {
        Make:"Subaru",
        Model:"Wrx Sti",
        Year:2016,
        Color :"Metallic Grey",
        Style :"Sedan"
    };
    delete Car.Style
    document.getElementById("Dict").innerHTML = Car.Model;
}