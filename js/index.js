// BEHAVIOR
// * JQUERY : https://api.jquery.com/
// * Draggable : https://greensock.com/docs/Utilities/Draggable

let itemsFound = 0;

Draggable.create(".draggable1", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.7, maxX:58, maxY:this.x / 1.7});
	}
});

Draggable.create(".draggable2", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.7, maxX:58, maxY:this.x / 1.7});
	}
});

Draggable.create(".draggable3", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.8, maxX:58, maxY:this.x / 1.8});
	}
});

Draggable.create(".draggable4", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.7, maxX:56, maxY:this.x / 1.7});
	}
});

Draggable.create(".draggable5", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.7, maxX:56, maxY:this.x / 1.7});
	}
});

Draggable.create(".draggable6", {
	onDrag : function() {
		this.applyBounds({minX:0, minY:this.x / 1.7, maxX:56, maxY:this.x / 1.7});
	}
});

Draggable.create(".draggable7");

Draggable.create(".draggable8");

Draggable.create(".draggable9", {
	onDrag : function() {
		this.applyBounds({minX:-120, minY:this.x / 1.75, maxX:0, maxY:this.x / 1.75});
	}
});

Draggable.create(".draggable10");

function winner() {
	setTimeout(function() {
		$("#winner").removeClass("false");
	}, 1500);
}

$('.screen').click(function(e) {
	$('.screen').toggleClass('invisible');
	let item = document.querySelector("#cat");
	if (item.classList.contains("found")){
		return;
	}
	itemsFound++;
	setTimeout(function() {
		item.classList.add("found");
	}, 500);
	setTimeout(function() {
		$(`.${item.getAttribute("id")}`).addClass("found");
	}, 1000);
	if (itemsFound == 7)	{
		winner();
	}
});

$('.object').click(function(e) {
	let item = e.currentTarget;
	if (item.classList.contains("found")){
		return;
	}
	itemsFound++;
	item.classList.add("found");
	setTimeout(function() {
		$(`.${item.getAttribute("id")}`).addClass("found");
	}, 500);
	if (itemsFound == 7)	{
		winner();
	}
});

$('.replay').click(function() {
	window.location.href = window.location.href;
});