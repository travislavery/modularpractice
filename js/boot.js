/*var people = (function(){
	var people = [];
	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();

	$button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	render();

	function render() {
		$ul.html(Mustache.render(template, {people: people}));
	}

	function addPerson() {
		people.push($input.val());
		render();
		$input.val('');
	}

	function deletePerson() {
		var $remove = $(event.target).closest('li');
		var i = $ul.find('li').index($remove);

		people.splice(i, 1);
		render();
	}
})()*/

var boxes = (function(){
	var boxes = [];
	var $bx = $('#colors');
	var $ul = $bx.find('ul');
	var $boxes = $bx.find('.box');
	var $xButton = $bx.find('.xButton');
	var $chosen;
	var active = false;
/*	var template = $bx.find('#boxes-template').html();
	var $input = $('#peopleModule').find('input');
	var $button = $('#peopleModule').find('#addPerson');
	
	$button.on({
		click: boxes.push($input.val())
	});*/
	$boxes.on({
		click: centerStage,
		mouseenter: boxIn,
		mouseleave: boxOut,
	});
	$xButton.on({
		click: xClick,
		mouseenter: boxIn,
		mouseleave: boxOut,
	})
/*	render();

	function render() {
		$ul.html(Mustache.render(template, {boxes: boxes}));
		console.log(boxes)
	}*/

	function centerStage() {
		
		$chosen = $(event.target).closest('.box');
		if (active === false) {
			showOrHide();
			active=true;
		} else {
			console.log(active);
		}
		if (!e) var e = window.event;
    	e.cancelBubble = true;
    	if (e.stopPropagation) e.stopPropagation();
		//$chosen.removeClass("box");
	}
		
	function xClick() {
		showOrHide();
		if (!e) var e = window.event;
    	e.cancelBubble = true;
    	if (e.stopPropagation) e.stopPropagation();
	}
	

	function boxIn() {
		$(this).css({"border":"dashed","border-color":"white", "border-width":"3"});
	}

	function boxOut() {
		$(this).css({"border":"solid", "border-color":"black"});
	}

	function showOrHide() {
		$chosen.toggleClass("important");
		$xButton.toggle(50);
		$boxes.toggleClass("hidden");
		active=false;
	}
})()
	/*var $green = $bx.find('#greenDiv');
	var $blue = $bx.find('#blueDiv');
	var $red = $bx.find('#redDiv');
	var $black = $bx.find('#blackDiv');*/