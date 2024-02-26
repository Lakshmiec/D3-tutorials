let fruits = ['Apple', 'Orange', 'Mango']

/*
-> d3.selectAll(".d3_fruit"): This selects all elements on the page with the class name ".d3_fruit". Make sure you have HTML elements with that class on your page where you want the fruits to be displayed.
-> .data(fruits): This binds the data from the fruits array to the selected elements. Each element will be associated with one fruit name.
-> .text((d) => d): This function iterates through each element and its associated fruit name (d). The arrow function simply returns the fruit name itself, essentially setting the text content of each element to the corresponding fruit name.
*/
d3.selectAll(".d3_fruit").data(fruits).text((d) => d);