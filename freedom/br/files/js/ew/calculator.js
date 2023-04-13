var treeNames = [
    "Tenacidade",
    "Fantasma",
    "Fúria",
];
var treeOffsets = [
    0,
    data[0].length,
    data[0].length + data[1].length
];
var MAX_POINTS = 61;
var TREE_OFFSET = 301;
var HEIGHT_GAP = 12;
var BUTTON_SIZE = 55;
var state = [{}, {}, {}];
var totalPoints = 0;
var buttonClasses = ["unavailable", "available", "full"];
var rankClasses = ["num-unavailable", "num-available", "num-full"];

function drawCalculator() {
    for (var tree = 0; tree < 3; tree++)
        for (var index = 0; index < data[tree].length; index++)
            drawButton(tree, index);

    // make tooltip
    var tip, maxDims = {width: $("#calculator").parent().width(), height: $("#calculator").parent().height()};
    $("#calculator")
        .contextmenu(function(event){ event.preventDefault() })
        .append(
            $("<div>")
                .attr('id', "tooltip")
                .append($("<strong>"))
                .append(
                    $("<div>")
                        .addClass("rank")
                )
                .append(
                    $("<div>")
                        .addClass("req")
                )
                .append(
                    $("<div>")
                        .addClass("req2")
                )
                .append(
                    $("<p>")
                        .addClass("tooltip-text")
                        .addClass("first")
                )
                .append(
                    $("<p><br>")
                        .addClass("tooltip-text")
                        .addClass("second")
                        .append(
                            $("<div>")
                                .addClass("nextRank")
                                .text("Próximo nível:")
                                .append($("<br>"))
				                .append($("<br>"))
                        )
                        .append(
                            $("<div>")
                                .addClass("content")
                        )
                )
        );

    // mousemove event global since it follows tooltip visibility
    var anchor = $("#calculator");
    $(window)
        .mousemove(function(event){
            if (tip.is(":visible")) {
                // boundary checking for tooltip (right and bottom sides)
                var pos = anchor.offset();
                var offsetX = 20, offsetY = 20;
                if (event.pageX - pos.left + tip.width() > maxDims.width - 30)
                    offsetX = -tip.width() - 20;
                if (event.pageY - pos.top + tip.height() > maxDims.height )
                    offsetY = -tip.height() - 20;
                tip.css({
                    left: event.pageX - pos.left + offsetX,
                    top:  event.pageY - pos.top + offsetY,
                });
            }
        });
    tip = $("#tooltip");

    $("#points>.count").text(MAX_POINTS);
}

function drawButton(tree, index) {
    var spritePos = masterySpritePos(tree, index);
    var buttonPos = masteryButtonPosition(tree, index);
    var status = data[tree][index].index < 5 ? "available" : "unavailable";
    var rank = 0;

    // Check if we need to draw the requirement
    var parent = data[tree][index].parent;
    var parentLink = null;
    if (parent != undefined) {
        var parentPos = masteryButtonPosition(tree, parent);
        $("#calculator").append(parentLink = 
            $("<div>")
                .addClass("requirement")
                .addClass("unavailable")
                // height is one gap and button for each in between them, plus an extra gap 
                .css({
                    height: (HEIGHT_GAP + BUTTON_SIZE) * 
                            (data[tree][index].index/4 - data[tree][parent].index/4 - 1) + HEIGHT_GAP + 5,
                    left: parentPos.x + 11,
                    top: parentPos.y + BUTTON_SIZE - 5,
                })
        );
    }

    $("#calculator").append(
        $("<div>")
            .addClass("button")
            .addClass(status)
            .data("parentLink", parentLink)
            .css({
                left: buttonPos.x+"px",
                top: buttonPos.y+"px",
                // Sprite has two columns: 0px is color and -58px is black and white
                backgroundPosition: (status != "unavailable" ? 0 : -40) + "px " + 
                                    (spritePos) + "px",
            })
            .append(
                $("<div>")
                    .addClass("counter")
                    .addClass("num-"+status)
                    .text("0/" + data[tree][index].ranks)
            )
            .mouseover(function(event){
                var tooltipText = masteryTooltip(tree, index, rank);
                formatTooltip($("#tooltip").show(), tooltipText);
                $(this).data("hover", true);
                $(this).parent().mousemove();
            })
            .mouseout(function(){
                $("#tooltip").hide();
                $(this).data("hover", false);
            })
            .mousedown(function(event){
                switch (event.which) {
                    case 1:
                        // Left click
                        if (isValidState(tree, index, rank, +1)) {
                            setState(tree, index, rank, +1);
                        }
                        break;
                    case 3:
                        // Right click
                        if (isValidState(tree, index, rank, -1)) {
                            setState(tree, index, rank, -1);
                        }
                        break;
                }
            })
            .data("update", function() {
                rank = state[tree][index] || 0;
                if (rank == data[tree][index].ranks) {
                    status = "full";
                } else {
                    // check if available
                    if (masteryPointReq(tree, index) <= treePoints(tree) && masteryParentReq(tree, index))
                        status = "available";
                    else
                        status = "unavailable";

                    // check if points spent
                    if (totalPoints >= MAX_POINTS)
                        if (rank > 0)
                            status = "available";
                        else
                            status = "unavailable";
                }
                // change status class
                if ( !$(this).hasClass(status) ) {
                    $(this)
                        .removeClass(buttonClasses.join(" "))
                        .addClass(status)
                        .css({
                            backgroundPosition: (status != "unavailable" ? 0 : -40) + "px " + 
                                                (spritePos ) + "px",
                        });
                }
                // adjust counter
                var counter = $(this).find(".counter").text(rank + "/" + data[tree][index].ranks);
                if ( !counter.hasClass("num-"+status) ) {
                    counter
                        .removeClass(rankClasses.join(" "))
                        .addClass("num-"+status)
                }

                // change parent status
                var parentLink = $(this).data("parentLink");
                if (parentLink != null) {
                    if ( !parentLink.hasClass(status) ) {
                        parentLink
                            .removeClass(buttonClasses.join(" "))
                            .addClass(status);
                    }
                }
                // force tooltip redraw
                if ($(this).data("hover"))
                    $(this).mouseover();
            })
    );
}

function customTooltip(tooltip, tooltipText) {
    tooltip.addClass("custom");
    tooltip.children(":not(p.first)").hide();
    tooltip.find("p.first").text(tooltipText);
}

function formatTooltip(tooltip, tooltipText) {
    tooltip.removeClass("custom");

    var head = tooltip.find("strong").text(tooltipText.header).show();
    if ( !head.hasClass(treeNames[tooltipText.tree]) ) {
        head
            .removeClass(treeNames.join(" "))
            .addClass(treeNames[tooltipText.tree]);
    }

    var rank = tooltip.find(".rank").text(tooltipText.rank).show();
    if ( !rank.hasClass(tooltipText.rankClass) ) {
        rank
            .removeClass(rankClasses.join(" "))
            .addClass(tooltipText.rankClass)
    }

    tooltip.find(".req").text(tooltipText.req).show();
    tooltip.find(".req2").text(tooltipText.req2).show();
    tooltip.find("p.first").html(tooltipText.body);

    var second = tooltip.find("p.second");
    if (tooltipText.bodyNext == null) {
        second.hide();
    } else {
        second
            .show()
            .find(".content")
                .html(tooltipText.bodyNext);
    }
}

function masteryTooltip(tree, index, rank) {
    var mastery = data[tree][index];
    // second flags whether there are two tooltips (one for next rank)
    var showNext = !(rank < 1 || rank >= mastery.ranks);

    // parse text
    var text = {
        tree: tree,
        header: mastery.name,
        rank: "Nível: " + rank + "/" + mastery.ranks,
        rankClass: (rank < mastery.ranks ? rankClasses[1] : rankClasses[2]),
        req: masteryTooltipReq(tree, index),
        req2: masteryTooltipReq2(tree, index),
        body: masteryTooltipBody(mastery, rank),
        bodyNext: showNext ? masteryTooltipBody(mastery, rank+1) : null,
    };
	
    return text;
}

function masteryTooltipBody(mastery, rank)  {
    // Rank 1 is index 0, but Rank 0 is also index 0
    rank = Math.max(0, rank - 1);
    var desc = mastery.desc;
    desc = desc.replace(/#/, mastery.rankInfo[rank]);
    desc = desc.replace(/\n/g, "<br>");
    desc = desc.replace(/\|(.+?)\|/g, "<span class='highlight'>$1</span>");
    if (mastery.perlevel) {
        desc = desc.replace(/#/, Math.round(mastery.rankInfo[rank]*180)/10);
    }
    if (mastery.rankInfo2) {
        desc = desc.replace(/#/, mastery.rankInfo2[rank]);
    }
    if (mastery.rankInfo3) {
        desc = desc.replace(/#/, mastery.rankInfo3[rank]);
    }
    if (mastery.rankInfo4) {
        desc = desc.replace(/#/, mastery.rankInfo4[rank]);
    }
    if (mastery.rankInfo5) {
        desc = desc.replace(/#/, mastery.rankInfo5[rank]);
    }
    if (mastery.rankInfo6) {
        desc = desc.replace(/#/, mastery.rankInfo6[rank]);
    }
    if (mastery.rankInfo7) {
        desc = desc.replace(/#/, mastery.rankInfo7[rank]);
    }
    if (mastery.rankInfo8) {
        desc = desc.replace(/#/, mastery.rankInfo8[rank]);
    }
    if (mastery.rankInfo9) {
        desc = desc.replace(/#/, mastery.rankInfo9[rank]);
    }
    if (mastery.rankInfo10) {
        desc = desc.replace(/#/, mastery.rankInfo10[rank]);
    }
    return desc;
}

function masteryTooltipReq(tree, index) {
    var missing = [];
    var pointReq = masteryPointReq(tree, index)
    if (pointReq > treePoints(tree))
        missing.push("Requer " + pointReq + " pontos na árvore atual");

    return missing.join("\n");
}

function masteryTooltipReq2(tree, index) {
    var missing = [];
    var pointReq = masteryPointReq(tree, index)

    if (!masteryParentReq(tree, index)) {
        var parent = data[tree][index].parent;
        missing.push("Requer que o talento " + data[tree][parent].name + " tenha ao menos " + data[tree][parent].ranksnw + " ponto(s)");
    }

    return missing.join("\n");
}

function masteryButtonPosition(tree, index) {
    var idx = data[tree][index].index - 1;
    var ix = idx % 4;
    var iy = Math.floor(idx / 4);
    var x=0, y=0;

    // padding for tree
    x += TREE_OFFSET * tree;
    // base padding
    x += 20;
    y += 18;
    // padding for spacing
    x += ix * (BUTTON_SIZE + 15);
    y += iy * (BUTTON_SIZE + HEIGHT_GAP);

    return {x: x, y: y};
}

function masterySpritePos(tree, index) {
    return 0 - 40 * (treeOffsets[tree] + index);
}

function masteryTier(tree, index) {
    return Math.floor((data[tree][index].index-1) / 4);
}

function masteryPointReq(tree, index) {
    return masteryTier(tree, index) * 5;
}

function masteryParentReq(tree, index) {
    var parent = data[tree][index].parent;
    if (parent && (state[tree][parent] || 0) < data[tree][parent].ranksnw)
        return false;
    return true;
}

function treePoints(tree, tier) {
    var points = 0;
    for (var i in state[tree])
        if (!tier || tier > masteryTier(tree, i))
            points += state[tree][i];
    return points;
}

function isValidState(tree, index, rank, mod) {
    var mastery = data[tree][index];
    if (rank+mod < 0 || rank+mod > mastery.ranks)
        return false;

    // Incrementing
    if (mod > 0) {
        // Check max points
        if (totalPoints + mod > MAX_POINTS)
            return false;

        // Check this mastery's rank requirements: never account for current rank
        if (masteryPointReq(tree, index) > treePoints(tree) - rank)
            return false;

        // Check this mastery's parent requirements
        if (!masteryParentReq(tree, index))
            return false;
    }

    // Decrementing
    if (mod < 0) {
        // Check tree rank requirements
        for (var i in state[tree])
            if (i != index)
                // Figure out tier, multiply by 4 to get req points
                if (state[tree][i] > 0 && 
                    // Calculate points in this tree up to this tier, and
                    // subtract one if we're removing from this portion
                    masteryPointReq(tree, i) > treePoints(tree, masteryTier(tree, i)) - (masteryTier(tree, index) < masteryTier(tree, i)))
                    return false;

        // Check child requirements
        for (var i in state[tree])
            if (i != index)
                if (state[tree][i] > 0 && data[tree][i].parent == index)
                    return false;
    }

    return true;
}

function setState(tree, index, rank, mod) {
    state[tree][index] = rank + mod;
    totalPoints += mod;

    updateButtons();
    updateLabels();
    updateLink();
}

// If quiet flag is true, does not call updates
function resetStates(quiet) {
    for (var tree=0; tree<3; tree++)
        resetTree(tree);

    if (quiet != true) {
        updateButtons();
        updateLabels();
        updateLink();
    }
}

// Used in both resetStates and via panel
function resetTree(tree, update) {
    totalPoints -= treePoints(tree);
    for (var index in state[tree])
        state[tree][index] = 0;
}

function updateButtons() {
    $("#calculator .button").each(function(){
        $(this).data("update").call(this, 0);
    });
}

function updateLabels() {
    for (var tree=0; tree<3; tree++) {
        $("div[data-idx="+tree+"]").text(treePoints(tree));
        $("#points>.count").text(MAX_POINTS - totalPoints);
    }
}

function updateLink() {
    var hash = exportMasteries();
    // Do not show link for empty trees
    if (hash.length <= 3) hash = '';
    hash = '#' + hash;

    // Update link and url only if we have to
    $("#exportLink").attr("href", document.location.pathname + hash);
    if (document.location.hash != hash) {
        // Using replace() causes no change in browser history
        document.location.replace(hash);
        // Temporarily unbind change
        $(window).unbind('hashchange');
        setTimeout(function(){
            $(window).bind('hashchange', updateMasteries);
        }, 500);
    }
}

// There are max 4 points per mastery, or 3 bits each. There is a 1 bit padding
// that is a flag to determine whether the following 5 bits are a sequence of
// mastery codes or an index increase. We greedily take masteries until the next
// one would put us over capacity, at which point we flush the buffer. You will
// always flush at the end of a tree.
var maxbits = 5;
var exportChars = "WvlgUCsA7pGZ3zSjakbP2x0mTB6htH8JuKMq1yrnwEQDLY5IVNXdcioe9fF4OR_-";
var bitlen = function(tree, index) {
    if (data[tree][index] == undefined)
        return 0;
    return Math.floor(data[tree][index].ranks/2)+1;
}
// returns how many of the next masteries can fit in size bits

var bitfit = function(tree, index, bits) {
    var start = index;
    while (true) {
        var len = bitlen(tree, index);
        if (len > bits || len == 0) {
          return index - start;
				}
        bits -= len;
        index++;
    }
}

function exportMasteries() {
	var str = "";
	var bits = 0;
	var points = 0;
	var jump = -1;
	
	for (tree = 0; tree < 3; tree++ ) {
		points = 0;
		jump = -1;
		for (index = 0; index < data[tree].length; index++) {
			if (jump > 0) {
				continue;
			}
			point = state[tree][index] | 0;
			str += exportChars[index+point];
			points += point;
			if (points == treePoints(tree)) {
				str += exportChars[63];
				jump = 1;
			}
		}
	}
	return str;
}

function importMasteries(str) {
	resetStates(true);
	
	var tree = 0;
	var index = 0; 
	for (i=0; i<str.length; i++) {
		curr = importChars[str[i]];
		if (curr == 63) {
			tree++;
			index = 0;
			continue;
		}
		if (curr == index) {
			value = 0;
		}
		else {
			value = (curr - index) | 0;
		}
		state[tree][index] = value;
		totalPoints += value;
		index++;
	}
	updateButtons();
  updateLabels();
  updateLink();
}

// Because we used a random string, we need to reverse it
var importChars = {}
for (var i=0; i<exportChars.length; i++) {
    importChars[exportChars[i]] = i;
}

function updateMasteries() {
    importMasteries(document.location.hash.slice(1));
}

$(function(){
    // Calculator
    drawCalculator();

    // Panel
    $("#return").click(resetStates);
    for (var tree = 0; tree < 3; tree++) {
        $("#panel>#tree-summaries").append(
            $("<div>")
                .addClass("tree-summary")
                .addClass(treeNames[tree])
                .attr("data-idx", tree)
                .text(0)
                .css({
                    left: TREE_OFFSET * tree +260,
					top: 66,
                    cursor: "pointer",
                })
                .mouseover(function(){
                    customTooltip($("#tooltip").show(), "Clique duas vezes para repor árvore");
                })
                .mouseout(function(){
                    $("#tooltip").hide();
                })
                .dblclick(function(){
                    resetTree($(this).attr("data-idx"), true);
                    updateButtons();
                    updateLabels();
                    updateLink();
                })
        )
        .append(
            $("<div>")
        );
    }
	
    // Once set up, load if hash present
    if (document.location.hash != "")
        updateMasteries();

    // Listen for hash changes
    //$(window).bind('hashchange', updateMasteries);
});