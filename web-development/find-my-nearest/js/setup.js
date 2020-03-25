var notification = {
    //
    init: function() {
        $(document.body).on('click', '.osel-notification-close', function() {
            $(this).parent().remove();
        });
    },
    //
    show: function(type, content, fadeOut = true) {
        var id = Date.now();

        var notification = '\
            <div class="osel-toast-notification ' + type + '" data-id="' + id + '">\
                <div class="osel-notification-icon"></div>\
                <div class="osel-notification-text">' + content + '</div>\
                <div class="osel-notification-close"><i class="material-icons" aria-label="Close message">close</i></div>\
            </div>\
        ';

        var parent = $('.osel-notification-holder').length ? $('.osel-notification-holder') : $(document.body);
        parent.append(notification);

        if( fadeOut ) {
            setTimeout(function() {
                $(".osel-toast-notification[data-id='" + id + "']").fadeOut(function() {
                    $(this).remove();
                });
            }, 3000);
        }
    },
    //
    remove: function() {
        $(".osel-toast-notification").remove();
    }
}

notification.init();

var osColours = {
	"qualitative": {
		"lookup": {
			"1": "#FF1F5B",
			"2": "#00CD6C",
			"3": "#009ADE",
			"4": "#AF58BA",
			"5": "#FFC61E",
			"6": "#F28522",
			"7": "#A0B1BA",
			"8": "#A6761D",
			"9": "#E9002D",
			"10": "#FFAA00",
			"11": "#00B000"
		},
		"groups": {
			"6a": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"5a": [
				1,
				3,
				4,
				5,
				6
			],
			"4a": [
				1,
				3,
				4,
				5
			],
			"4b": [
				2,
				3,
				4,
				5
			],
			"3a": [
				1,
				3,
				5
			],
			"3b": [
				2,
				4,
				5
			],
			"2a": [
				1,
				3
			],
			"2b": [
				2,
				4
			],
			"rag": [
				9,
				10,
				11
			]
		}
	},
	"sequential": {
		"s1": [
			"#E4F1F7",
			"#C5E1EF",
			"#9EC9E2",
			"#6CB0D6",
			"#3C93C2",
			"#226E9C",
			"#0D4A70"
		],
		"s2": [
			"#E1F2E3",
			"#CDE5D2",
			"#9CCEA7",
			"#6CBA7D",
			"#40AD5A",
			"#228B3B",
			"#06592A"
		],
		"s3": [
			"#F9D8E6",
			"#F2ACCA",
			"#ED85B0",
			"#E95694",
			"#E32977",
			"#C40F5B",
			"#8F003B"
		],
		"m1": [
			"#B7E6A5",
			"#7CCBA2",
			"#46AEA0",
			"#089099",
			"#00718B",
			"#045275",
			"#003147"
		],
		"m2": [
			"#FCE1A4",
			"#FABF7B",
			"#F08F6E",
			"#E05C5C",
			"#D12959",
			"#AB1866",
			"#6E005F"
		],
		"m3": [
			"#FFF3B2",
			"#FED976",
			"#FEB24C",
			"#FD8D3C",
			"#FC4E2A",
			"#E31A1C",
			"#B10026"
		]
	},
	"diverging": {
		"d1": [
			"#009392",
			"#39B185",
			"#9CCB86",
			"#E9E29C",
			"#EEB479",
			"#E88471",
			"#CF597E"
		],
		"d2": [
			"#045275",
			"#089099",
			"#7CCBA2",
			"#FCDE9C",
			"#F0746E",
			"#DC3977",
			"#7C1D6F"
		]
	},
	"projects": {
		"moon_map": [
			"#FDFCE8",
			"#F1F3E5",
			"#E4E9E2",
			"#D7DFDF",
			"#CAD5DB",
			"#BDCBD8",
			"#B1C2D5",
			"#A4B8D2",
			"#97AECF",
			"#8AA4CB"
		],
		"mars_map": [
			"#E6F1E9",
			"#EAF3E8",
			"#F0F4E6",
			"#F7F6E6",
			"#F5F2DF",
			"#F7E8D5",
			"#EDD5C5",
			"#DCBEB0",
			"#B59790",
			"#D6C2C0"
		]
	}
}