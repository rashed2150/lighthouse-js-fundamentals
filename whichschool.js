const whichSchool  = function (age) {
    if (age < 13) 
      return " whichSchool For ages 1 to 12 returns Elementary School " 
    else if (age >= 13 && age <= 18)
      return "whichSchool For ages 13 to 18 returns Secondary School"
    else 
      return " whichSchool For ages 19 to let's say 100 returns Lighthouse Labs "
  } 
  
  console.log(whichSchool(40))
   
  