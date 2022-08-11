var spa = document.getElementById("result");
spa.value = "";
var sumcal = 0;
var sumfat = 0;
var sumpro = 0;

var j = 0
function flist() {
     var item = document.getElementById("item");
     var btn = document.getElementById("btn");
     var calories = document.getElementById("calories");
     var total = document.getElementById("total");
     // result.text = "ayan";
     for (var i = 0; i < item.options.length; i++) {
          if (item.options[i].selected === true) {
               if (item.options[i].text === "--SELETE ITEMS--") {
                    spa.value += "";
               }
               else {

                    spa.value += j + 1 + ".  " + item.options[i].text + " Calories: " +calories.options[i].text +" cal"+ " ,Fat: " + fat.options[i].text + " g" +  " ,Protein: " + protein.options[i].text + " g" + "<br>" + "<br>";
                    j++;
                    document.getElementById("result").innerHTML = spa.value;
                    document.getElementById("result").style.border = " 1px solid var(--light)";
                    document.getElementById("total").style.border = " 1px solid var(--pure)";
                    sumcal += Number(calories.options[i].value);
                    sumfat += parseFloat(fat.options[i].value);
                    sumpro += parseFloat(protein.options[i].value);
                
                
               }
          }
     }
     total.innerHTML = "Total Calorie : " + sumcal+" cal"+"<br>"+"Total Fat:  "+sumfat.toFixed(2)+" g"+"<br>"+"Total protein :"+sumpro.toFixed(2)+" g";

}