function escuchar() {
                var maxMatches = 5;
                var promptString = "Speak now"; // optional
                var language = "en-US";                     // optional
                window.plugins.speechrecognizer.startRecognize(function(result){
                    $("#resultado_calculadora").append(result);
                }, function(errorMessage){
                    $("#resultado_calculadora").append("Error message: " + errorMessage).text();
                }, maxMatches, promptString, language);
            }
