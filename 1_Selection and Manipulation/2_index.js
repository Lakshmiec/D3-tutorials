// javascript
d3.select();
d3.selectAll();
//-->This part uses the d3.select method to select the first <h1> element on the page.
//It then chains the style method to apply an inline style rule setting the color to red.
d3.select('h1').style('color', 'red')
    //add a class attribute with the value "heading".
    .attr('class', 'heading')
    //update with another text
    .text("Updated h1 tag");

//append elements
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

//select all
d3.selectAll('p').style("color", "violet");