
rbtnPersonality.onclick=function(){
  NSB.MsgBox(`I would agree that you are a ${$("input[name=rbtnPersonality]:checked").prop("value").toLowerCase()} person too!`)
}

btnfavExercises.onclick=function(){
  ChangeForm(favExercises)
}
