        var k = 0;
        var arr = [{
            question: "Tony stark is more famus known as?",
            answer: ['Batman', 'IronMan', 'Superman', 'Captain'],
            correct: 3
        }, {
            question: "Tony stark is2 more famus known as?",
            answer: ['Batdman', 'IroenMan', 'Sueperman', 'Capstain'],
            correct: 1
        }];
        var i = 0;
        // Display some data from the object:
        $(document).ready(function () {
            $(".question").text(arr[i].question);
            ++i;

            for (var j = 0; j < 4; j++) {
                $(".ask").text("Question " + (i) + " of 5");
                var y = j + 1;

                $("." + String.fromCharCode('a'.charCodeAt(0) + j)).text(arr[i - 1].answer[j]);
                $("." + j).attr("id", "");
            }
            $("." + arr[0].correct).attr("id", "correct");
            $(".next").click(function () {
                $(".active").css("background", "white");
                if (i < arr.length) {
                    $(".question").text(arr[i].question);
                    ++i;

                    for (var j = 0; j < 4; j++) {
                        $(".ask").text("Question " + (i) + " of 5");
                        var y = j + 1;
                        $("." + String.fromCharCode('a'.charCodeAt(0) + j)).text(arr[i - 1].answer[j]);
                        $("." + j).attr("id", "");
                    }
                    $("." + arr[i - 1].correct).attr("id", "correct");
                    $(".result").text("");
                } else {
                    alert(98);
                }
            });
            $(".active").click(function () {
                //alert($(this).attr("id"));
                $(".active").css("background", "white");
                if ($(this).attr("id") === "correct") {
                    $(".result").text("Great you give the right answer");
                    $(this).css("background", "#90ee90");
                } else {
                    $(".result").text("!Oops you give wrong answer!");
                    $(this).css("background", "#ff5a57");
                }

            });
        });