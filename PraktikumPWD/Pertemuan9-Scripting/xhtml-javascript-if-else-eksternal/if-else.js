var iAge;
            var sMF;


            iAge = prompt("Please enter your age in years.", 0);
            sMF = prompt("Are you a (M)ale or (F)emale?", "M");

            if (iAge > 20){
                if(sMF == "M"){
                    alert("You a male over 20 years of age");
                }else{
                    alert("You a female over 20 years of age");
                }
            }else{
                if(sMF == "M"){
                    alert("You a male Under 21 years of age");
                }else{
                    alert("You a female Under 21 years of age");
                }
            }