function centerVertical(id)
{
  wH = $(window).height();
  eH = $("#"+id).innerHeight();

  margin = ( wH - eH ) / 2;

  console.log(id + "<- element | " + wH + " | " + eH + " | " + margin);

  $("#"+id).css({"margin-top":margin+"px"});
}
