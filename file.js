        var k = 0;
        var res = 0;
        var arr = [{
        		question: "Name the Maximoff Twins!",
        		answer: ['Michael and Wilma', 'Freya and Anton', 'Wanda and Pietro', 'Fiedka and Freida'],
        		correct: 3,
        		result: 0
        }, {
        		question: "Which Avenger is Wanda Maximoff?",
        		answer: ['The Black Widow', 'The Scarlet Witch', 'Jubilee', 'The Phonix'],
        		correct: 2,
        		result: 0,
        		count: 0,
        },
        	{
        		question: "What is the alter ego of Pietro Maximoff?",
        		answer: ['Quicksilver', 'Night Crawler', 'The Flash', 'Archangel'],
        		correct: 1,
        		result: 0
        }, {
        		question: "Who is the only Avenger who is able to budge Thor's hammer?",
        		answer: ['The Hulk', 'IronMan', 'Spider-Man', 'Captain America'],
        		correct: 4,
        		result: 0
        }, {
        		question: "Who does Captain America call Earth best defender?",
        		answer: ['The Hulk', 'IronMan', 'Thor', 'Black Widow'],
        		correct: 2,
        		result: 0
        }, {
        		question: "What does Thanos use to accomplish his plan?",
        		answer: ['The Soul Stone', 'The Tesseract', 'The Infinity Gauntlet', 'The Heart Stone'],
        		correct: 3,
        		result: 0
        }, {
        		question: "Which Avengers don't actually possess powers or physical alterations?",
        		answer: ['Black Widow and Hawkeye', 'Ant-Man and Spider-Man', 'Black Panther and The Falcon', 'Iron Man and Black Widow'],
        		correct: 1
        }, {
        		question: "When Iron Man is struck by Thor's lightning what happens?",
        		answer: ['It drains his suit to 0% power', 'It supercharges his armor up to 400%', 'It stunts him', 'It scrambles J.A.R.V.I.S voice'],
        		correct: 2,
        		result: 0
        }, {
        		question: "Before Thanos offed Heimdall, where did he send Hulk?",
        		answer: ['Wakanda', 'Valhalla', 'Calcutta', 'New York'],
        		correct: 4,
        		result: 0
        }, {
        		question: "What do the Avengers get at the final post-credit scene in the first film?",
        		answer: ['Falafel', 'Subs', 'Shawarma', 'Donair'],
        		correct: 3,
        		result: 0
        }, {
        		question: "Which Avenger was overseeing the Tesseract at the start of the first film?",
        		answer: ['Loki', 'The Falcon', 'The Winter Soldier', 'Hawkeye'],
        		correct: 4,
        		result: 0
        }, {
        		question: "Where is Captain America when he is first shown in the films?",
        		answer: ['Back in time', 'A gym', 'Riding his bike', 'Stuck in ice'],
        		correct: 2,
        		result: 0
        }, {
        		question: "What is the name of Hawkeye's wife?",
        		answer: ['Dana', 'Laura', 'Suzie', 'Madison'],
        		correct: 2,
        		result: 0
        }, {
        		question: "Who has a set of collector edition Captain America trading cards?",
        		answer: ['Phil Coulson', 'The Collector', 'Nick Fury', 'Paul Bettany'],
        		correct: 1,
        		result: 0
        }, {
        		question: "Who goes to retrieve Bruce Banner from his isolation?",
        		answer: ['Natasha Romanoff', 'Tony Stark', 'Steve Rogers', 'Wanda Maximoff'],
        		correct: 1,
        		result: 0
        }, {
        		question: "At the beginning of Avengers: Age of Ultron, who calls Tony out for swearing?",
        		answer: ['Hawkeye', 'Nick Fury', 'Bruce Banner', 'Captain America'],
        		correct: 4,
        		result: 0
        }, {
        		question: "Who is not a member of Thanos' Black Order in the films?",
        		answer: ['Proxima Midnight', 'Corvus Glaive', 'Supergiant', 'Ebony Maw'],
        		correct: 3,
        		result: 0
        }, {
        		question: "What is Stan Lee doing in Avengers: Infinity War?",
        		answer: ['Catching a ball at Dodgers stadium', 'Driving a bus', 'Opening a door for Avengers', 'Yelling at the Avengers'],
        		correct: 2,
        		result: 0
        }, {
        		question: "Who in Wakanda was the first person to dissolve in Avengers: Infinity War?",
        		answer: ['Bucky', 'Vision', 'Spider-Man', 'Scarlett Witch'],
        		correct: 1,
        		result: 0
        }, {
        		question: "What villain from a previous movie returns in Avengers: Infinity War?",
        		answer: ['Ebony Maw', 'The Kingpin', 'Loki', 'Red Skull'],
        		correct: 4,
        		result: 0
            }, ];
        var i = 0;
        // Display some data from the object:
        $(document).ready(function () {
        	$(".question").text(arr[i].question);
        	++i;

        	for (var j = 0; j < 4; j++) {
        		$(".num").text("Question " + (i));
        		var y = j + 1;

        		$("." + String.fromCharCode('a'.charCodeAt(0) + j)).text(arr[i - 1].answer[j]);
        		$("." + j).attr("id", "");
        	}
        	$("." + arr[0].correct).attr("id", "correct");
        	$(".pre").click(function () {
        		$(".active").css("background", "white");
        		--i;
        		if (i > 0) {
        			$(".question").text(arr[i - 1].question);

        			for (var j = 0; j < 4; j++) {
        				$(".num").text("Question " + i);
        				var y = j + 1;
        				$("." + String.fromCharCode('a'.charCodeAt(0) + j)).text(arr[i - 1].answer[j]);
        				$("." + y).attr("id", "");
        			}
        			$("." + arr[i - 1].correct).attr("id", "correct");
        			$(".result").text("");
        		} else
        			i = 1;
        	});
        	$(".next").click(function () {
        		$(".active").css("background", "white");
        		if (i < arr.length) {
        			$(".question").text(arr[i].question);
        			++i;

        			for (var j = 0; j < 4; j++) {
        				$(".num").text("Question " + i);
        				var y = j + 1;
        				$("." + String.fromCharCode('a'.charCodeAt(0) + j)).text(arr[i - 1].answer[j]);
        				$("." + y).attr("id", "");
        			}
        			$("." + arr[i - 1].correct).attr("id", "correct");
        			$(".result").text("");
        		} else {
        			for (var j = 0; j < i; j++) {
        				if (arr[j].result === 1)
        					res++;
        				arr[0].count = res * 5;
        			}
        			typeWriter();
        			$(".main").hide(2000);
        			$(".res").css("display", "block");
        			$(".hi").text("Congrats you have scored");
        		}
        	});
        	$(".active").click(function () {
        		//alert($(this).attr("id"));
        		$(".active").css("background", "white");
        		if ($(this).attr("id") === "correct") {
        			$(".result").text("Great you give the right answer");
        			$(this).css("background", "#90ee90");
        			arr[i - 1].result = 1;
        		} else {
        			$(".result").text("!Oops you give wrong answer!");
        			$(this).css("background", "#ff5a57");
        			arr[i - 1].result = 0;
        		}

        	});
        });



        var l = 0;
        var speed = 80;

        function typeWriter() {
        	if (l <= arr[0].count) {
        		document.getElementById("demo").innerHTML = l + "%";
        		l++;
        		setTimeout(typeWriter, speed);
        	}
        }