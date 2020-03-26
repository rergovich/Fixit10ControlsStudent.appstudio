let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  lstFoods.clear()
  for (i = 0; i <= goodFoods.length - 1; i++) {
    lstFoods.addItem(goodFoods[i])
  }
}

lstFoods.onclick=function(choice){
  if (typeof(choice) == "object") {
  return
  } else {
    let text = NSB.$("lstFoods_" + choice).textContent
    NSB.MsgBox(`You picked ${text} - that is a great choice!`)
  }
}

btndessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}
