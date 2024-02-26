// javascript
var dataset = [1, 2, 3, 4, 5];

/*
  In this example we have an array of some numbers.
What we are trying to do here is to create paragraph tags for each data item in the array.
We first of all select our body element using d3.select() method and afterwards we select all the paragraph tags inside it.
Since we do not have any paragraph tags yet, it will return an empty selection.
Now we call .data() method and pass it our dataset as an argument.
This method will put data into the waiting state for further processing.
We then call .enter() method.
This method will take data items one by one and perform further operations on them.
For each data item, we are appending a paragraph tag and binding some dummy text inside it.
*/

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p') // appends paragraph for each data element
//     .text('D3 is awesome!!')
//     .style("color", "red");

/*
We can also update the text of our paragraphs to show the value of data item by passing it a function inside the .text() method.
This function will be getting the value of data item in its parameter, which we can return from it.
*/
d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p') // appends paragraph for each data element
    //.text('D3 is awesome!!');
    .text(function (d) { return d; });
