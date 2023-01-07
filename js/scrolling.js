(function()
{
  var sections = document.querySelectorAll('.panel');
  var currentLocation = 0;
  var conCount = sections.length;
  var hold = false;
  document.getElementsByClassName('dynamic-menu')[0].style.visibility = 'hidden';
  sections[currentLocation].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  console.log(conCount);
  window.addEventListener('wheel', function(e)
  {

    e.stopPropagation();
    e.preventDefault();

    if(hold)
      {
          sections[currentLocation].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
          return;
      }
		if (e.deltaY < 0)
    {

      if (currentLocation == 0)
        return;
      sections[--currentLocation].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      console.log(currentLocation);
      if(currentLocation==0)
        document.getElementsByClassName('dynamic-menu')[0].style.visibility = 'hidden';
      else
        document.getElementsByClassName('dynamic-menu')[0].style.visibility = 'visible';
      if (hold === false) {
			hold = true;
			setTimeout(function() {
				hold = false;
			}, 700);
		}
		}
		if (e.deltaY > 0)
    {
      if (currentLocation == conCount-1)
        return;
      sections[++currentLocation].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      console.log(currentLocation);
      if(currentLocation==0)
        document.getElementsByClassName('dynamic-menu')[0].style.visibility = 'hidden';
      else
        document.getElementsByClassName('dynamic-menu')[0].style.visibility = 'visible';
      if (hold === false) {
			hold = true;
			setTimeout(function() {
				hold = false;
			}, 700);
		}
		}
  })
})();
