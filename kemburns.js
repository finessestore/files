(function(){
  document.getElementById(&#39;kenburns&#39;).getElementsByTagName(&#39;img&#39;)[0].className = &quot;fx&quot;;
  window.setInterval(kenBurns, 10000);		
  var images = document.getElementById(&#39;kenburns&#39;).getElementsByTagName(&#39;img&#39;),
      numberOfImages = images.length,
      i = 1;
  function kenBurns() {
    if(i==numberOfImages){ i = 0;}
    images[i].className = &quot;fx&quot;;
    if(i===0){ images[numberOfImages-2].className = &quot;&quot;;}
    if(i===1){ images[numberOfImages-1].className = &quot;&quot;;}
    if(i&gt;1){ images[i-2].className = &quot;&quot;;}
    i++;
  }
})();
