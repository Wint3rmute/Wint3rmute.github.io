 var frequency = 440;
 var type =  'sine';
var isPlaying = false;

 var Wave = new Pizzicato.Sound({
    source: 'wave',
    options: {
        frequency: frequency,
        type: type
    }
 });


 function refreshWave()
 {
     Wave.stop();

     Wave = new Pizzicato.Sound({
        source: 'wave',
        options: {
            frequency: frequency,
            type: type
        }
     });

     if(isPlaying)
       Wave.play();
 }

function changeF(amount)
{
  frequency = amount;
  refreshWave();
}

function changeT(newType)
{
  type = newType;
  refreshWave();

}

function play()
{
  refreshWave();
  if(isPlaying)
  {
    Wave.stop();
    $("#play").html('<i class="material-icons">volume_up</i>');
    isPlaying = false;
  }
  else {
    Wave.play();
    $("#play").html('<i class="material-icons">volume_off</i>');
    isPlaying = true;
  }
}