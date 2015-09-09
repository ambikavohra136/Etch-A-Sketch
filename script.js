$(document).ready(function()
{
var squares = '<div class="square">' + "</div>";
var content = "<div class='container'>";
for(var j = 0; j < 15; j++)
{
	for (var i = 0; i < 16; i++)
	{
	content += squares; 
	}
	content += "</br>";
}

content += "</div>";

$('body').append(content);

$(document).on('mouseenter mouseleave','.square',function()
{
$(this).css("background-color","blue");
});

$(document).on('click','#button',function()
{
	$('.container').remove();
    location.reload();

});

});