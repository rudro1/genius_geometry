//triangle_base
//calculate_triangle
///ellipse_base
//calculate_ellipse
//parallelogram_base
//calculate_parallelogram
//pentagon_base
//calculate_pentagon
//rectangle_base
//calculate_rectangle
// rhombus_base
//calculate_rhombus
// Function to calculate the area of a triangle

function calculate_triangle() {
   
// console.log(event.target.parentNode.parentNode.classList.contains("traingle"))
    // if (document.querySelector(".traingle") || document.querySelector(".traingle").classList.contains("traingle")||) {
  

    const base_value = set_data("triangle_base");

  
    const height_value = set_data("triangle_height");

    const area=0.5 * base_value * height_value;
    appendChild(" triangle", area);

    totals(area);
    }


function calculate_ellipse() {
    const base_value = set_data("ellipse_base");
    const height_value = set_data("ellipse_height");

    const area = Math.PI * base_value * height_value;
    appendChild(" ellipse", area);
       totals(area);
}

function calculate_parallelogram() {
    const base_value = set_data("parallelogram_base");
    const height_value = set_data("parallelogram_height");

    const area = base_value * height_value;
    appendChild(" parallelogram", area);
       totals(area);
}

function calculate_pentagon() {
    const base_value = set_data("pentagon_base");
    const height_value = set_data("pentagon_height");

    const area = (base_value * height_value) / 2;
    appendChild(" pentagon", area);
       totals(area);
}

function calculate_rectangle() {
    const base_value = set_data("rectangle_base");
    const height_value = set_data("rectangle_height");

    const area = base_value * height_value;
    appendChild(" rectangle", area);
       totals(area);
}

function calculate_rhombus() {
    const base_value = set_data("rhombus_base");
    const height_value = set_data("rhombus_height");

    const area = 0.5 * base_value * height_value;
    appendChild(" rhombus", area);
       totals(area);
}

function set_data(inputfield){
const inputid = document.getElementById(inputfield).value;

 const value =parseFloat(inputid);
 return value;

}
let count=0;
function appendChild(str,area)
{

  if( document.querySelector("table").classList.contains("hidden"))
    {
document.querySelector("table").classList.remove("hidden")

    };
    count=count+1;
// const parentClass=document.querySelector("td").classList;
//     const store_id=document.getElementById("store_id");
// const store_data=document.getElementById("store_area");
// store_id.innerHTML=count;

const countable=document.createElement("tr");

countable.innerHTML=`<td> `+count+`</td>`+`<td>`+str+" area is= "+area+" cm<sup>2</sup>"+`</td>`;;
// parentClass.forEach(cls => countable.classList.add(cls));

for(const nodes of countable.childNodes) {
nodes.classList.add("td");

}
document.querySelector("table").appendChild(countable);

// store.innerHTML=count +str+" area is= "+area+" cm<sup>2</sup>";

// const data=document.createElement("tr");
// data.innerHTML= 
// parentClass.forEach(cls => data.classList.add(cls));
// document.querySelector("table").appendChild(data);

// Update the total area value in the UI

}

let total=0;

function totals(area) {
if(isNaN(total)){
    total=0;
}
total=total+area;
}

function cal_total()
{
// console.log(area);




const total_area_value = document.getElementById("total_area_value");
total_area_value.innerHTML = total; 
}

function clears() {
  
   total=0;
 
  const total_area_value = document.getElementById("total_area_value");
total_area_value.innerHTML = total; 
const parentClass=document.querySelector("table").classList.add("hidden");


}