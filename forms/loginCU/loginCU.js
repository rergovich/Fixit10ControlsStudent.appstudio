
req1 = Aja("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + txtNetID.value + "&j_password=" + pswdPassword.value)


btnShortcutTofavFoods.onclick=function(){
  ChangeForm(favFoods)
}


btnLogin.onclick=function(){
  if (req1.status == 200) {
    lblResponse.hidden = false
    lblResponse.value = `Your LDAP return code was ${req1.responseText}`
    ChangeForm(favFoods)
  } else {
      lblResponse.hidden = false
      lblResponse.value = `Error: ${req1.status}`
      inptNetID.value = ''
      NSB.MsgBox('Please try again, your login was not valid.')
  }
}
