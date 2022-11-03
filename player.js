var audio = new Audio();


function play1()
{

audio.src = "allweknow.mp3";

if(audio.paused)

audio.play();

else
audio.pause();

}


function play2() 
{
audio.src = "badblood.mp3";
if(audio.paused)

audio.play();
else

audio.pause();
}


function play3()
{

audio.src = "idontcare.mp3";
if(audio.paused)

audio.play();

else
audio.pause();

}


function play4()
{
audio.src = "lovestory.mp3";
if(audio.paused)

audio.play();
else
audio.pause();

}


function play5()
{
audio.src = "neverendingstory.mp3";

if(audio.paused)
audio.play();
else
audio.pause();

}


function play6()
{

audio.src = "onmyway.mp3";

if(audio.paused)
audio.play();
else

audio.pause();

}


function play7()
{
audio.src = "pehlapyaar.mp3";

if(audio.paused)
audio.play();

else

audio.pause();

}


function play8()
{
audio.src = "seeyouagain.mp3";

if(audio.paused)
audio.play();
else

audio.pause();

}


function play9()
{
audio.src = "whatdoyoumean.mp3";

if(audio.paused)
audio.play();
else

audio.pause();

}


function pause()
{
audio.pause();

}


function popupWindow(url)
{
Mywindow = window.open(url,"MyWindow","config='toolbar=no, menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no, height=500, width=400', letf=500, top=200");

}


function closeWindow()
{
Mywindow.close()

}