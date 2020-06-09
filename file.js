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
                $("." + y).text(arr[i - 1].answer[j]);
                $("." + j).attr("id", "");
            }
            $("." + arr[0].correct).attr("id", "correct");
            $(".next").click(function () {
                if (i < arr.length) {
                    $(".question").text(arr[i].question);
                    ++i;

                    for (var j = 0; j < 4; j++) {
                        $(".ask").text("Question " + (i) + " of 5");
                        var y = j + 1;
                        $("." + y).text(arr[i - 1].answer[j]);
                        $("." + j).attr("id", "");
                    }
                    $("." + arr[i - 1].correct).attr("id", "correct");
                } else {
                    alert("Congrats you ended the quiz");
                }
            });
            $(".active").click(function () {
                //alert($(this).attr("id"));
                if ($(this).attr("id") === "correct") {
                    $(".result").text("Great You Gave The Right Answer");
                } else {
                    $(".result").text("!Oops You Are Wrong!");
                }

            });
        });