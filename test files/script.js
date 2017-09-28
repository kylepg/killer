rosterObj = {}; 
date = new Date();
playerCardYear = date.getFullYear();
monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


//////////
// MISC //
//////////

// Observe a specific DOM element:

function applyRedesign(){
	var rnd = Math.floor(Math.random() * 99999);
	jQuery('head').append('<link class="redesign-css" type="text/css" rel="stylesheet" href="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/css/1718-redesign.min.css?' + rnd + '" media="all"><link class="redesign-css" type="text/css" rel="stylesheet" href="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/css/1718-framework.min.css?' + rnd + '" media="all">');
	jQuery('.override-css').attr('disabled',true);
	jQuery('.navbar-brand img').attr('src','http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/media/celtics-secondary-white.svg');
	jQuery("body").addClass("new-style");
}


function percentage(decimal){
	if (typeof decimal !== "number"){
		return decimal;
	}
	else {
		var multiplied = decimal * 100;
		return multiplied.toFixed(1) + '%';
	}
}

function round(number){
	if (typeof number !== "number"){
		return number
	}
	else {
		return number.toFixed(1);
	}
}

function getTeamInfo(knownProperty) {
	var teamInfo = [{tid:1610612737,di:"Southeast",co:"East",sta:"GA",ta:"ATL",tn:"Hawks",tc:"Atlanta",ftn:"Atlanta Hawks",an:[],color:"#e13a3e",colorLight:"#e13a3e"},{tid:1610612738,di:"Atlantic",co:"East",sta:"MA",ta:"BOS",tn:"Celtics",tc:"Boston",ftn:"Boston Celtics",an:[],color:"#008348",colorLight:"#008348"},{tid:1610612739,di:"Central",co:"East",sta:"OH",ta:"CLE",tn:"Cavaliers",tc:"Cleveland",ftn:"Cleveland Cavaliers",an:["Cavs"],color:"#860038",colorLight:"#860038"},{tid:1610612740,di:"Southwest",co:"West",sta:"LA",ta:"NOP",tn:"Pelicans",tc:"New Orleans",ftn:"New Orleans Pelicans",an:["Pels","NewOrleans"],color:"#002d5c",colorLight:"#B4975A"},{tid:1610612741,di:"Central",co:"East",sta:"IL",ta:"CHI",tn:"Bulls",tc:"Chicago",ftn:"Chicago Bulls",an:[],color:"#ce1141",colorLight:"#ce1141"},{tid:1610612742,di:"Southwest",co:"West",sta:"TX",ta:"DAL",tn:"Mavericks",tc:"Dallas",ftn:"Dallas Mavericks",an:["Mavs"],color:"#006bb6",colorLight:"#006bb6"},{tid:1610612743,di:"Northwest",co:"West",sta:"CO",ta:"DEN",tn:"Nuggets",tc:"Denver",ftn:"Denver Nuggets",an:[],color:"#4d90cd",colorLight:"#4d90cd"},{tid:1610612744,di:"Pacific",co:"West",sta:"CA",ta:"GSW",tn:"Warriors",tc:"Golden State",ftn:"Golden State Warriors",an:[],color:"#0067b1",colorLight:"#FDB927"},{tid:1610612745,di:"Southwest",co:"West",sta:"TX",ta:"HOU",tn:"Rockets",tc:"Houston",ftn:"Houston Rockets",an:[],color:"#ce1141",colorLight:"#ce1141"},{tid:1610612746,di:"Pacific",co:"West",sta:"CA",ta:"LAC",tn:"Clippers",tc:"LA",ftn:"Los Angeles Clippers",an:["LA Clippers","L.A. Clippers"],color:"#ed174f",colorLight:"#ed174f"},{tid:1610612747,di:"Pacific",co:"West",sta:"CA",ta:"LAL",tn:"Lakers",tc:"Los Angeles",ftn:"Los Angeles Lakers",an:["LA Lakers","L.A. Lakers"],color:"#552582",colorLight:"#FDB927"},{tid:1610612748,di:"Southeast",co:"East",sta:"FL",ta:"MIA",tn:"Heat",tc:"Miami",ftn:"Miami Heat",an:[],color:"#98012e",colorLight:"#98012e"},{tid:1610612749,di:"Central",co:"East",sta:"WI",ta:"MIL",tn:"Bucks",tc:"Milwaukee",ftn:"Milwaukee Bucks",an:[],color:"#004812",colorLight:"#EEE1C6"},{tid:1610612750,di:"Northwest",co:"West",sta:"MN",ta:"MIN",tn:"Timberwolves",tc:"Minnesota",ftn:"Minnesota Timberwolves",an:["T-Wolves","TWolves","Wolves"],color:"#005085",colorLight:"#C4CED4"},{tid:1610612751,di:"Atlantic",co:"East",sta:"NY",ta:"BKN",tn:"Nets",tc:"Brooklyn",ftn:"Brooklyn Nets",an:[],color:"#000000",colorLight:"#FFFFFF"},{tid:1610612752,di:"Atlantic",co:"East",sta:"NY",ta:"NYK",tn:"Knicks",tc:"New York",ftn:"New York Knicks",an:[],color:"#f68428",colorLight:"#f68428"},{tid:1610612753,di:"Southeast",co:"East",sta:"FL",ta:"ORL",tn:"Magic",tc:"Orlando",ftn:"Orlando Magic",an:[],color:"#0077c0",colorLight:"#0077c0"},{tid:1610612754,di:"Central",co:"East",sta:"IN",ta:"IND",tn:"Pacers",tc:"Indiana",ftn:"Indiana Pacers",an:[],color:"#00285d",colorLight:"#FDBB30"},{tid:1610612755,di:"Atlantic",co:"East",sta:"PA",ta:"PHI",tn:"76ers",tc:"Philadelphia",ftn:"Philadelphia 76ers",an:["Sixers","Seventy Sixers","SeventySixers","Seventy-Sixers"],color:"#ed174f",colorLight:"#ed174f"},{tid:1610612756,di:"Pacific",co:"West",sta:"AZ",ta:"PHX",tn:"Suns",tc:"Phoenix",ftn:"Phoenix Suns",an:[],color:"#e56020",colorLight:"#e56020"},{tid:1610612757,di:"Northwest",co:"West",sta:"OR",ta:"POR",tn:"Trail Blazers",tc:"Portland",ftn:"Portland Trail Blazers",an:["Blazers","Trail-Blazers","TrailBlazers"],color:"#e3373d",colorLight:"#e3373d"},{tid:1610612758,di:"Pacific",co:"West",sta:"CA",ta:"SAC",tn:"Kings",tc:"Sacramento",ftn:"Sacramento Kings",an:[],color:"#393996",colorLight:"#63727A"},{tid:1610612759,di:"Southwest",co:"West",sta:"TX",ta:"SAS",tn:"Spurs",tc:"San Antonio",ftn:"San Antonio Spurs",an:[],color:"#000000",colorLight:"#c4ced4"},{tid:1610612760,di:"Northwest",co:"West",sta:"OK",ta:"OKC",tn:"Thunder",tc:"Oklahoma City",ftn:"Oklahoma City Thunder",an:[],color:"#007dc3",colorLight:"#007dc3"},{tid:1610612761,di:"Atlantic",co:"East",sta:"ON",ta:"TOR",tn:"Raptors",tc:"Toronto",ftn:"Toronto Raptors",an:["Raps"],color:"#d31245",colorLight:"#d31245"},{tid:1610612762,di:"Northwest",co:"West",sta:"UT",ta:"UTA",tn:"Jazz",tc:"Utah",ftn:"Utah Jazz",an:[],color:"#002b5c",colorLight:"#F9A01B"},{tid:1610612763,di:"Southwest",co:"West",sta:"TN",ta:"MEM",tn:"Grizzlies",tc:"Memphis",ftn:"Memphis Grizzlies",an:["Grizz"],color:"#002b5c",colorLight:"#6189B9"},{tid:1610612764,di:"Southeast",co:"East",sta:"DC",ta:"WAS",tn:"Wizards",tc:"Washington",ftn:"Washington Wizards",an:[],color:"#002a5c",colorLight:"#E31837"},{tid:1610612765,di:"Central",co:"East",sta:"MI",ta:"DET",tn:"Pistons",tc:"Detroit",ftn:"Detroit Pistons",an:[],color:"#ed174c",colorLight:"#ed174c"},{tid:1610612766,di:"Southeast",co:"East",sta:"NC",ta:"CHA",tn:"Hornets",tc:"Charlotte",ftn:"Charlotte Hornets",an:[],color:"#211646",colorLight:"#00788C"},{tid:"",di:"Northwest",co:"West",sta:"WA",ta:"SEA",tn:"SuperSonics",tc:"Seattle",ftn:"Seattle SuperSonics",an:["Sonics","Super Sonics"],color:"#005831",colorLight:"#ffc121"},{tid:"",di:"Atlantic",co:"East",sta:"NJ",ta:"NJN",tn:"Nets",tc:"New Jersey",ftn:"New Jersey Nets",an:[],color:"#15224c",colorLight:"#cd1041"},{tid:"",di:"Southeast",co:"East",sta:"NC",ta:"CHA",tn:"Bobcats",tc:"Charlotte",ftn:"Charlotte Bobcats",an:[],color:"#0c2340",colorLight:"#e35205"},{tid:"",di:"Southwest",co:"West",sta:"LA",ta:"NOH",tn:"Hornets",tc:"New Orleans",ftn:"New Orleans Hornets",an:[],color:"#1f1e5a",colorLight:"#008cc1"}];
	for (var i = 0; i < teamInfo.length; i++){
		for (var teamProperty in teamInfo[i]){
			if (teamInfo[i][teamProperty] === knownProperty){
				return teamInfo[i];
			}
		}
	}
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {
    	return null;
    }
    if (!results[2]) {
    	return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function numSuffix(i){
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "ST";
    }
    if (j === 2 && k !== 12) {
        return i + "ND";
    }
    if (j === 3 && k !== 13) {
        return i + "RD";
    }
    return i + "TH";
}

function born(dob){
	var month = "MMM";
		switch(dob.substr(5,2)){
			case "01":
				month = "JAN";
				break;
			case "02":
				month = "FEB";
				break;
			case "03":
				month = "MAR";
				break;
			case "04":
				month = "APR";
				break;
			case "05":
				month = "MAY";
				break;
			case "06":
				month = "JUN";
				break;
			case "07":
				month = "JUL";
				break;
			case "08":
				month = "AUG";
				break;
			case "09":
				month = "SEP";
				break;
			case "10":
				month = "OCT";
				break;
			case "11":
				month = "NOV";
				break;
			case "12":
				month = "DEC";
				break;	
		}
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
	        age--;
	    }
	return  month + " " +  dob.substring(8, 10) + ", " + dob.substring(0, 4) + " (AGE: " + age + ")";
}

function position(pos){
	var word = '';
	switch(pos){
		case "G":
			word = "GUARD";
			break;
		case "F":
			word = "FORWARD";
			break;
		case "C":
			word = "CENTER";
			break;
		case "G-F":
			word = "GUARD/FORWARD";
			break;
		case "F-G":
			word = "FORWARD/GUARD";
			break;
		case "F-C":
			word = "FORWARD/CENTER";
			break;
		case "C-F":
			word = "CENTER/FORWARD";
			break;	
	}
	return word;
}

function seasonSelect(selection, pid){
	console.log(selection)
	var index = ['min','pts','fgp','tpp','ftp','reb','ast','stl','blk'];
	for (i = 0; i < index.length; i++){
		if (i === 2 || i === 3 || i === 4){
			jQuery("." + pid + " .averages-season td:nth-child("+ (i + 2) +") p").html(percentage(rosterObj[pid].stats.seasonAvg[selection][index[i]]) + "<span>Career High</span>");
		}
		else {
			jQuery("." + pid + " .averages-season td:nth-child("+ (i + 2) +") p").html(round(rosterObj[pid].stats.seasonAvg[selection][index[i]])) + "<span>Career High</span>";
		}
	}
	// Check if career high
	jQuery("." + pid + " .averages-season td").addClass("career-high");
	jQuery("." + pid + " .averages-season td p").addClass("tooltips");
	var selectedSeason = rosterObj[pid].stats.seasonAvg[selection];
	for (var i=0; i < rosterObj[pid].stats.seasonAvg.length; i++){
		var currentSeasonStats = [];
		var otherSeasonStats = [];
		for (var key in selectedSeason){ 
		  if (selectedSeason.hasOwnProperty(key)) {
		    currentSeasonStats.push(selectedSeason[key]);
		  }
		}
		for (var otherKey in rosterObj[pid].stats.seasonAvg[i]){
		  if (rosterObj[pid].stats.seasonAvg[i].hasOwnProperty(otherKey)) {
		    otherSeasonStats.push(rosterObj[pid].stats.seasonAvg[i][otherKey]);
		  }
		}
		for (var x=0; x < currentSeasonStats.length; x++){
			if (currentSeasonStats[x] < otherSeasonStats[x]){ 
				jQuery("." + pid + " .stat-" + x + "").removeClass("career-high");
				jQuery("." + pid + " .stat-" + x + " p").removeClass("tooltips");
				jQuery("." + pid + " .stat-" + x + " p span").empty();
			}
		}
	}
}

function compare(a,b) {
  if (a.ln < b.ln)
    return -1;
  if (a.ln > b.ln)
    return 1;
  return 0;
}

function loadStats(pid, tableType, filters){
	console.log(pid + " " + tableType + " " + filters)
	
	// On initial load of tab, get the playerprofilev2 and info from the most recent game.
	// Afterward, use playerdashboard file for the more specific stat data.
	if (rosterObj[pid].stats.init == false){ 
		rosterObj[pid].stats.init = true;
		// Career Table. 
		// 1. Averages - Regular - Traditional
		// 2.		   - Playoffs - 
		// 3.		   - Preseason -
		// 4. Totals - Regular - 
		// 5. 		 - Playoffs -
		// 6.		 - Preseason - 
		var initFilterCombos = [
			"regularSeason-averages-traditional-allTeams-allQuarters-allLocations-allGames",
			"playoffs-averages-traditional-allTeams-allQuarters-allLocations-allGames",
			"college-averages-traditional-allTeams-allQuarters-allLocations-allGames",
			"preseason-averages-traditional-allTeams-allQuarters-allLocations-allGames"
		]
		jQuery.ajax({
			url: 'http://stats.nba.com/stats/playerprofilev2?LeagueID=00&PerMode=PerGame&PlayerID=' + pid,
			dataType: 'jsonp',
			success: function(data){
				loopIndex = [0,2,6,8]
				for ( x=0; x < initFilterCombos.length; x++){
					var seasons = data.resultSets[x].rowSet
					var boxRowHTML = '';
					var boxTableHTML = '';
					var boxHeadHTML = '';
					var boxHeadIndex = ["SEASON", "TEAM", "GP", "MIN", "PTS", "FG%", "3P%", "FT%", "REB", "AST", "STL", "BLK"];
					for (i = 0; i < boxHeadIndex.length; i++){
						boxHeadHTML += '<th class="BOS-bg">' + boxHeadIndex[i] + '</th>';
					}
					var multiTeamSeasonIndex = {
						multiTeamSeason: [],
						total: [],
						subSeason: []
					};
					var checkYear; // Check the season year, if it's the same then it means they were traded
					for (i = 0; i < seasons.length; i++){
						var teamAbbreviation = seasons[i][4];
						var seasonClass = seasons[i][1] + "-" + seasons[i][4];

						if (i > 0){
							var prevSeasonClass = seasons[i-1][1] + "-" + seasons[i-1][4];
						}

						if (i < (seasons.length - 1)){ //If there is a NEXT SEASON
							var nextSeasonClass = seasons[i+1][1] + "-" + seasons[i+1][4]
							if (seasons[i][1] == seasons[i+1][1]){ //if CURRENT SEASON year is the same as the NEXT SEASON year
								multiTeamSeasonIndex.multiTeamSeason.push(seasonClass, nextSeasonClass);
								if (seasons[i][4] !== "TOT"){
									multiTeamSeasonIndex.subSeason.push(seasonClass)
								}
							}
						}
						else if (i == (seasons.length - 1) && i > 0) { //If this is the LAST AVAILABLE SEASON
							var prevSeasonClass = seasons[i-1][1] + "-" + seasons[i-1][4]
							if (seasons[i][1] == seasons[i-1][1]){ //if LAST AVAILABLE SEASON is the same as the PREVIOUS SEASON year
								multiTeamSeasonIndex.multiTeamSeason.push(seasonClass, prevSeasonClass);
								if (seasons[i][4] !== "TOT"){
									multiTeamSeasonIndex.subSeason.push(seasonClass)
								}
							}
						}
						if (teamAbbreviation == "TOT"){
							teamAbbreviation = '---';
							multiTeamSeasonIndex.total.push(seasonClass);
						}
						boxRowHTML = '@import "../html/min/content_stats-career-sa.min.html"' + boxRowHTML;
						checkYear = seasons[i][1];
					} 
					boxTableHTML =  '<div class="box-table-wrap"><table class="active" id="' + initFilterCombos[x] + '"><thead class="BOS-bg"><tr>' + boxHeadHTML + '</tr></thead><tbody>' + boxRowHTML + '</tbody></table></div>';
					jQuery('.' + pid + ' .stats-content section[data-tabletype="career"]').append(boxTableHTML);
					jQuery('.box-table-wrap.loading').removeClass('active');

					for (var i = 0; i < multiTeamSeasonIndex.multiTeamSeason.length; i++){
						jQuery("." + pid + " .box-table-wrap tbody ."+ multiTeamSeasonIndex.multiTeamSeason[i]).addClass("multi-team-season");
					}
					for (var i = 0; i < multiTeamSeasonIndex.total.length; i++){
						jQuery("." + pid + " .box-table-wrap tbody ."+ multiTeamSeasonIndex.total[i]).addClass("total");
					}
					for (var i = 0; i < multiTeamSeasonIndex.subSeason.length; i++){
						jQuery("." + pid + " .box-table-wrap tbody ."+ multiTeamSeasonIndex.subSeason[i]).addClass("sub-season boxStatsSorter-childRow");
					}
					jQuery("." + pid + " .box-table-wrap tbody .sub-season td:first-child").html("&nbsp");
					jQuery(".box-table-wrap .loader-wrap").hide();

					jQuery('.' + pid + ' .box-table-wrap table').unbind('appendCache applyWidgetId applyWidgets sorton update updateCell').removeClass('boxStatsSorter').find('thead th').unbind('click mousedown').removeClass('header headerSortDown headerSortUp');
					jQuery('.' + pid + ' .box-table-wrap table').boxStatsSorter({
						widgets: ['staticRow'],
						headers: { 
							0: {
							    sorter:'surname'
							},
						    3: { 
						        sorter:'shooting' 
						    },
						    5: { 
						        sorter:'shooting' 
						    } ,
						    7: { 
						        sorter:'shooting' 
						    }
						} 
					});
				}
			},
			error: function(){
				console.log()
			}
		})
		// GAME TABLE
	}

	else {
		if (tableType = "career"){

		}
		var filterComboCareer = filters.career.scopeType + '-' + filters.career.seasonType + '-' + filters.career.statType + '-' + filters.career.quarters + '-' + filters.career.location + '-' + filters.career.gameRange;
/*		var filterComboGame = filters.game.gameId + '-' + filters.game.statType;*/
		console.log("YEP");
		jQuery('section[data-tabletype="' + tableType + '"] table').removeClass('active');
		if (document.getElementById(filterComboCareer)){
			jQuery("#" + filterComboCareer).addClass('active');
		}
/*		else {
			jQuery('.box-table-wrap .loader-wrap').show();

			IF CAREER, GET/LOAD
			// PLAYER DASHBOARD

			IF GAME, GET/LOAD
			// GAME INFO


			jQuery('.box-table-wrap .loader-wrap').hide();
			
		}*/
	}

}

function loadContent(pid, contentType, subType) {
	jQuery('.' + pid + ' .profile-content[data-content-type=' + contentType + '] .loader-wrap').show();
	jQuery('video').each(function() {
	    jQuery(this).get(0).pause();
	});
	switch(contentType){
		case "stats":
			loadStats(pid, "init", "init");
			break;
		case "photo":
			loadPhotos(pid);
			break;
		case "video":
			loadVideos(pid, subType);
			break;
		case "article":
			loadNews(pid);
			break;
	}
}

function loadPhotos(pid){
	console.log("loadPhotos " + pid)
	var height = ["grid-item", "grid-item--height2"];
	for (var i=0; i < 6; i++){
		$photoItem = jQuery('<a class="grid-item ' + height[Math.floor(Math.random() * height.length)] + '"></a>');
		rosterObj[pid].photo.grid.isotope('insert', $photoItem);
	}
/*    getGalleries(function(galleryData){
        var photoGalleries;
        //when we get our data, evaluate
        if (galleryData.content !== null){
            photoGalleries = galleryData.content;
            var nidArr = [];
            for (var i=0; i < photoGalleries.length; i++){ // Loop through each gallery and get its node ID. Store in array.
            	nidArr.push(galleryData.content[i].nid);
            }

            getImages(nidArr, function(imageData){
            	var images;
            	if (imageData.content !== null){
	            	images = imageData.content[0].images;
	            	for (var x=0; x < images.length; x++){
	            		if (images[x].caption.toUpperCase().includes(firstName + " " + lastName)){
	            			imgObj.push(images[x]);
	            		}
	            	}
	            } else {
	            	images = "NaN";
	            }					            
        	});
        } 
        else {
            photoGalleries = "NaN";
        }
    });*/
}

function loadVideos(pid, channels){
	jQuery('.' + pid + ' .profile-content[data-content-type="video"] .loader-wrap').show();
	var count = 9;
	var channelsQuery = '';
	if (channels == "originals"){
		channelsQuery = "Team%20Originals";
	}
	else if (channels == "highlights") {
		channelsQuery = "Team%20Highlights";
	}
	else if (channels == "community"){
		channelsQuery = "Community";
	}
	var currentContentCount = jQuery('.' + pid + ' .video-content .grid-item').length;
	var newContentCount = 0;
	var theresMore = false;
	do {
		jQuery.ajax({
			url: 'http://api.nba.net/2/celtics/video,imported_video/?count=' + count + '&players=' + pid + '&channels=' + channelsQuery + '&' + 'offset=' + (rosterObj[pid].video.offset[channels] * count),
			headers: {'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'},
			async: false, // Need to wait to see how many new items were appended, so that we know whether or not run it again. Without this, the 'while' condition will be ALWAYS be false and therefore it will only fire once.
			success: function(videoData){
				console.log(currentContentCount);
				var video = videoData.response.result;
				for (var i = 0; i < video.length; i++) {
					if (jQuery('.' + pid + ' .grid-item[data-videoId="/video/' + video[i].videoId + '"]').length == 0){
						var videoTagArr = videoTags(video[i].taxonomy);
						var backgroundImage = "http://i.cdn.turner.com/drp/nba/celtics/sites/default/files/celtics-logo-400px.png";
						if (video[i].hasOwnProperty("listImage")) {
							backgroundImage = video[i].listImage.source;
						}
						$videoItem = jQuery('<a class="grid-item all ' + videoTagArr.join(" ") + '" href="www.nba.com' + video[i].url + '" data-videoId="/video/' + video[i].videoId + '" data-category="' + videoTagArr.join(" ") + '"><div class="video-thumb" style="background-image: url(&quot ' + backgroundImage + ' &quot)"><div class="play-circle align-center"><div class="play-triangle align-center"></div></div></div><h4>' + video[i].title + '</h4></a>');
						rosterObj[pid].video.grid.isotope('insert', $videoItem);
					}
					else {
						console.log("The video already exists.")
					}
				}
				if (rosterObj[pid].video.init == false){
					videoSelect(jQuery("." + pid + " .video-content .grid-item:first-child"))
				}
				if (video.length == 0){
					jQuery("." + pid + " .loadmore." + channels).remove();
					if (rosterObj[pid].video.offset.all == 0 && rosterObj[pid].video.offset.community == 0 && rosterObj[pid].video.offset.originals == 0 && rosterObj[pid].video.offset.highlights == 0) {
						jQuery("." + pid + " .video-placeholder").hide();
						jQuery("." + pid + " .video-content").append('<p style="text-align: center">No videos yet!</p>')
					}
					theresMore = false;
				}
				else {
					theresMore = true;
				}
				rosterObj[pid].video.init = true;
				rosterObj[pid].video.offset[channels]++;
				newContentCount = jQuery('.' + pid + ' .video-content .grid-item').length
				console.log(newContentCount)
			}
		});
	}
	while ((newContentCount - currentContentCount) < 6 && theresMore) // Keep making requests if... 1. More videos exists. 2. Fewer than 6 new ones have been appended.
	jQuery('.' + pid + ' .profile-content[data-content-type="video"] .loader-wrap').hide();
}

function videoSelect(videoSelector){
	console.log("video select")
	var pid = jQuery(videoSelector).closest(".profile-wrap").attr('data-pid');
	jQuery("." + pid + " .video-content .grid .grid-item").removeClass("active");
	jQuery(videoSelector).addClass("active");
	if(jQuery(videoSelector).attr('data-videoId') !== null || jQuery(videoSelector).attr('data-videoId') !== undefined || jQuery(videoSelector).attr('data-videoId') !== '') {
	  var newTitle = '';
	  newTitle = jQuery(videoSelector).find("h4").text();
	  var newVideoUrl = jQuery(videoSelector).attr('data-videoId');
	  var videoHTML = '<div id="video-player_' + pid + '" data-team="celtics" data-videoId="' + newVideoUrl + '" data-cvp-autostart="TRUE"></div>';
	  jQuery('.' + pid + ' .video-player-wrapper').empty().append(videoHTML);
	  jQuery('.' + pid + ' .video-content h1').text(newTitle);
	  if(_nba && _nba.scout) {
	    _nba.scout.call(document.getElementById('video-player_' + pid));
	  }
	}
}

function loadNews(pid){
	var count = 6;
	jQuery.ajax({
		url: 'http://api.nba.net/2/celtics/article/?count=' + count + '&players=' + pid + '&offset=' + (rosterObj[pid].article.offset.all * count),
		headers: {'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'},
		success: function(newsData){
			console.log(newsData);
			var news = newsData.response.result;
			for (var i = 0; i < news.length; i++){
				if (rosterObj[pid].article.firstDate){
					rosterObj[pid].article.previousDate = news[i].published.substr(0,7);
					jQuery("." + pid + " .news-content .row").append('<h3 class="col-xs-12">' + monthNames[Number(news[i].published.substr(5,2))-1].toUpperCase() + ' ' + news[i].published.substr(0,4) + '</h3>');
					rosterObj[pid].article.firstDate = false;
				}
				if (news[i].published.substr(0,7) !== rosterObj[pid].article.previousDate){
					rosterObj[pid].article.previousDate = news[i].published.substr(0,7);
					jQuery("." + pid + " .news-content .row").append('<h3 class="col-xs-12">' + monthNames[Number(news[i].published.substr(5,2))-1].toUpperCase() + ' ' + news[i].published.substr(0,4) + '</h3>');
					console.log(Number(news[i].published.substr(5,2)))
				}
				jQuery("." + pid + " .news-content .row").append("<div class='news-thumb-wrap col-xs-6'><a href='" + news[i].url + "'><div class='news-thumb' style='background-image: url(&quot " + news[i].listImage.thumbnail + " &quot)'><h3>" + news[i].title + "</h3></div></a></div>");
			}
			jQuery("." + pid + " .profile-content[data-content-type='article'] .loader-wrap").hide();
			if (news.length == 0){
				jQuery("." + pid + " .loadmore").hide();
				if (rosterObj[pid].article.offset.all <= 1){
					jQuery("." + pid + " .loadmore").remove();
					jQuery("." + pid + " .news-content").append('<p style="text-align: center">No news yet!</p>')
				}
			}
		}
	});
}

function videoTags(taxonomy){
	var dataFilters = [];
	for (var i = 0; i < taxonomy.channels.length; i++){
		if (taxonomy.channels[i].value !== null){
			dataFilters.push(taxonomy.channels[i].value.toLowerCase().replace(/team/g, '').replace(/\s/g, ''));
		}
	}
	for (var i = 0; i < taxonomy.freeform.length; i++){
		if (taxonomy.freeform[i].value !== null){
			dataFilters.push(taxonomy.freeform[i].value.toLowerCase().replace(/team/g,'').replace(/\s/g, ''));
		}
	}
	return dataFilters;
}

function queryString(clicked){
	if (history.pushState) {
	    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?pid=' + clicked;
	    window.history.pushState({path:newurl},'',newurl);
	}
}

function getGalleries(callback){
    jQuery.getJSON("http://www.nba.com/celtics/api/1.1/json/?type=photo_gallery&players=" + lastName.toLowerCase() + ",+" + firstName.toLowerCase() + "&size=10&offset=" + (photoOffset) + ".json",function(data){ //Get 20 galleries that the player is in.
        callback(data);
    });
}

function getImages(nidArr, callback){
	var x = 1;
	nidArr.forEach(function(nid){ 
		jQuery.getJSON("http://www.nba.com/celtics/api/1.1/json/?nid=" + nid + ".json",function(imageData){
			callback(imageData);
			if ( x <= 10){
				jQuery(".photo-wrap").append("<a href='" + imgObj[loaded + x].raw + "' data-lightbox='lightbox'><div class='box'><div class='boxInner'><p>" + (loaded + x) + "</p><img alt='In game photo of " + firstName + " " + lastName + ".' src='" + imgObj[loaded + x].thumbnail + "'/>/div></div></a>");
			}
			x++;
		});	
	});
}

function contentStats() {
	//APPEND: STATS - CAREER
	var seasonStats = statsData.pl.ca.sa;
	var contentStats = '';
	for (i=0; i < seasonStats.length; i++){
		if (seasonStats[i].spl.length > 0){
			contentStats += '@import "../html/min/content_stats-career-sa.min.html"';
			for (x=0; x < seasonStats[i].spl.length; x++){
				contentStats += '@import "../html/min/content_stats-career-spl.min.html"';
			}
		}
		else {
			contentStats += '@import "../html/min/content_stats-career-sa.min.html"';
		}
	}
	jQuery('.career-stats table').unbind('appendCache applyWidgetId applyWidgets sorton update updateCell').removeClass('boxStatsSorter').find('thead th').unbind('click mousedown').removeClass('header headerSortDown headerSortUp');
	jQuery('.career-stats table').boxStatsSorter({
		widgets: ['staticRow'],
		headers: {},
		cssChildRow: "boxStatsSorter-childRow"
	});
}

//////////////////////
// ROSTER / PROFILE //
//////////////////////

function loadRoster(playerList){
	console.log(playerList);
	for (var i = 0; i < playerList.length; i++){
		var pid = playerList[i].pid;
		rosterObj[pid] = {
			info: {
				playerID: pid,
				firstName: '',
				lastName: '',
				number: '',
				position: '',
				height: '',
				weight: '',
				dob: 'N/A',
				draftPick: '',
				draftTeam: '',
				draftYear: '',
				preNBAType: '',
				preNBA: 'N/A',
				headshot: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/' + pid + '.png'
			},
			bio: {
				init: true,
				awards: {}
			},
			stats: {
				init: false, // has tab been opened yet?
				seasonAvg: {},
				careerAvg: {},
				careerHighs: {},
				boxStats: {
					traditional: {
						preseason: '',
						regularSeason: '',
						playoffs: ''
					},
					advanced: {
						preseason: '',
						regularSeason: '',
						playoffs: ''
					}
				}
			},
			article: {
				init: false, // has tab been opened yet?
				offset: {
					all: 0
				},
				firstDate: true,
				previousDate: ''
			},
			video: {
				init: false, // has tab been opened yet?
				offset: {
					all: 0,
					originals: 0,
					highlights: 0,
					community: 0
				},
				firstDate: true,
				previousDate: '',
				grid: '',
			},
			photo: {
				init: false, // has tab been opened yet?
				offset: {
					all: 0
				}
			}
		}
		rosterObj[pid].info.height = playerList[i].ht;
		rosterObj[pid].info.weight = playerList[i].wt;
		rosterObj[pid].info.firstName = playerList[i].fn;
		rosterObj[pid].info.lastName =  playerList[i].ln;
		rosterObj[pid].info.number = playerList[i].num;
		rosterObj[pid].info.position = position(playerList[i].pos);
		if (playerList[i].dob !== ""){
			rosterObj[pid].info.dob = born(playerList[i].dob)
		}
		rosterObj[pid].info.playerClass = playerList[i].fn.toLowerCase() + "-" + playerList[i].ln.toLowerCase();
		rosterObj[pid].info.preNBA = playerList[i].hcc;
		rosterObj[pid].info.preNBAType = "PRE-NBA"; // This JSON doesn't differentiate. 
		jQuery(".roster").append('<tr data-pid="' + playerList[i].pid + '" data-class="' + playerList[i].fn.toLowerCase() + '-' + playerList[i].ln.toLowerCase() + '"><td>' + playerList[i].num + '</td><td><span>' + playerList[i].fn.toUpperCase() + '</span> ' + playerList[i].ln.toUpperCase() + '</td><td>' + playerList[i].pos + '</td></tr>');
		jQuery(".player-select select").append('<option data-pid="' + playerList[i].pid + '" data-class="' + playerList[i].fn.toLowerCase() + '-' + playerList[i].ln.toLowerCase() + '" value="' + playerList[i].fn.toLowerCase() + '-' + playerList[i].ln.toLowerCase() + '"># ' + playerList[i].num + ' ' + playerList[i].fn.toUpperCase() + ' ' + playerList[i].ln.toUpperCase() + '</option>');
		if (window.location.href.indexOf(playerList[i].fn.toLowerCase() + "-" + playerList[i].ln.toLowerCase()) > -1){
			jQuery(".roster tr:nth-child(" + (i + 2) + ")").addClass("active");
		}
	}
	// Select a player (table)
	jQuery(".roster tr:not(:first)").on('click', function() {
		queryString(jQuery(this).attr("data-pid"));
		loadProfile(jQuery(this).attr("data-pid"));
		jQuery(".roster tr").removeClass("active"); 
		jQuery(this).addClass("active");
		jQuery(".player-select select").val(jQuery(this).attr("data-class"));
	});	
	// Select a player (dropdown)
	jQuery(".player-select select").change(function() {
		queryString(jQuery(this).attr("data-pid"));
		loadProfile(jQuery(this).attr("data-pid"));
		jQuery(".roster tr").removeClass("active");
		jQuery(this).addClass("active");
	});
	jQuery.ajax({ // Check if playercards are available for current year. If not, change the value of playerCardYear to previous year
		url: "http://data.nba.com/data/v2015/json/mobile_teams/nba/" + playerCardYear + "/players/playercard_" + playerList[0].pid + "_02.json",
		async: false,
		success: function(data){},
		error: function(e){
			console.log(playerCardYear + " PLAYERCARDS NOT YET AVAILABLE");
			playerCardYear--; 
		}	
	})
	if (getParameterByName("pid") !== null){
		loadProfile(getParameterByName("pid"));
	}
	jQuery("tr[data-pid*='" + getParameterByName("pid") + "']").addClass("active");
}

function statsNotAvailable(pid){
	rosterObj[pid].stats.careerAvg = {};
	rosterObj[pid].stats.seasonAvg = [{}];
	rosterObj[pid].stats.hasStats = false;
	var caIndex = ['gp','gs','min','fgp','tpp','ftp','oreb','dreb','reb','ast','stl','blk','tov','pf','pts','nostats'];
	var saIndex = ['tid','val','gp','gs','min','fgp','tpp','ftp','oreb','dreb','reb','ast', 'stl', 'blk', 'tov', 'pf', 'pts','spl','ta','tn','tc'];
	for (var i=0; i < saIndex.length; i++){
		rosterObj[pid].stats.seasonAvg[0][saIndex[i]] = "N/A";
		if (i === 1) {
			rosterObj[pid].stats.seasonAvg[0][saIndex[i]] = playerCardYear.toString().substr(2,2) + "-" + (playerCardYear + 1).toString().substr(2,2);
		}
		if (i === 17) {
			rosterObj[pid].stats.seasonAvg[0][saIndex[i]] = [];
		}
		if (i === 18) {
			rosterObj[pid].stats.seasonAvg[0][saIndex[i]] = 'BOS';
		}
	}
	for (var i=0; i < caIndex.length; i++){
		rosterObj[pid].stats.careerAvg[caIndex[i]] = "N/A";
		if (i === 15){
			rosterObj[pid].stats.careerAvg[caIndex[i]] = true; 
		}
	}
}

function loadHeader(pid){
	var playerCard;
	jQuery.ajax({ // Check if playercards are available for current year. If not, return previous year.
		url: "http://data.nba.com/data/v2015/json/mobile_teams/nba/" + playerCardYear + "/players/playercard_" + pid + "_02.json",
		async: false,
		success: function(data){
			playerCard = data.pl;
			rosterObj[pid].stats.hasStats = true;
			rosterObj[pid].info.draftYear = playerCard.dy;
			rosterObj[pid].stats.careerAvg = playerCard.ca;
			if(rosterObj[pid].stats.careerAvg.hasOwnProperty("sa")){
				rosterObj[pid].stats.seasonAvg = playerCard.ca.sa;
			}
			else {
				statsNotAvailable(pid);
			}
		},
		error: function(){
			statsNotAvailable(pid);
		}
	})
	var averagesDropdownFullHTML = '';
	var averagesDropdownSmallHTML = '';
	for (var i = rosterObj[pid].stats.seasonAvg.length - 1; i >= 0; i--){
		averagesDropdownFullHTML += '<option value="' + i + '" data-year="20' + rosterObj[pid].stats.seasonAvg[i].val + '">20' + rosterObj[pid].stats.seasonAvg[i].val + ' SEASON</option>'
		averagesDropdownSmallHTML += '<option value="' + i + '" data-year="20' + rosterObj[pid].stats.seasonAvg[i].val + '">' + rosterObj[pid].stats.seasonAvg[i].val + ' SEASON</option>'
	}

	//APPEND: PROFILE HTML	
	var profileHTML = '@import "../html/min/template_profile.min.html"';
	jQuery(".profile-wrap.loading").removeClass("active");
	jQuery(".profile").append(profileHTML)
	jQuery("." + pid + " .headshot").on("error", function(){
	    jQuery(this).attr('src', 'http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/media/generic-player-1040x760.png');
	});

/*	seasonSelect(0, pid); */

	rosterObj[pid].video.grid = jQuery('.' + pid + ' .video-content .grid').isotope({
	  itemSelector: '.grid-item',
	    masonry: {
		    columnWidth: 200,
		    isFitWidth: true,
		    gutter: 10
		},
	  transitionDuration: 0 
	});
	rosterObj[pid].photo.grid = jQuery('.' + pid + ' .photo-content .grid').isotope({
	  itemSelector: '.grid-item',
	    masonry: {
		    columnWidth: 200,
		    isFitWidth: true
		},
	  transitionDuration: 0 
	});
	// bind filter button click
	jQuery('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = jQuery( this ).attr('data-filter');
	  var channels = jQuery( this ).attr('data-channels');
/*	  var subType = jQuery(this).attr('data-subType');*/
	  rosterObj[pid].video.grid.isotope({ filter: filterValue });
	  if(jQuery('.' + pid + ' .video-content .grid-item.' + channels).length == 0){
	  	loadVideos(pid, channels);
	  }
	  jQuery("." + pid + ' .video-content .loadmore').hide();
	  jQuery("." + pid + ' .video-content .loadmore'+ filterValue).show();
	});
	// change is-checked class on buttons
	jQuery('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = jQuery( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    jQuery( this ).addClass('is-checked');
	  });
	});

	//APPEND: DRAFT INFO
	jQuery.getJSON("http://stats.nba.com/stats/drafthistory?College=&LeagueID=00&Season=" + rosterObj[pid].info.draftYear + "&callback=?" , function(data){
		var draftInfo = data.resultSets[0].rowSet;
		var pick = rosterObj[pid].info.draftYear + ", UNDRAFTED";
		for (i=0; i < draftInfo.length; i++){
			if (draftInfo[i][0] == rosterObj[pid].info.playerID){
				//rosterObj[pid].info.draftPick = draftYear + ", " + numSuffix(draftInfo[i][5]) + " PICK (" +  draftInfo[i][9].toUpperCase() + ")";
				rosterObj[pid].info.draftPick = numSuffix(draftInfo[i][5]);
				rosterObj[pid].info.draftTeam = draftInfo[i][9];
				rosterObj[pid].info.preNBA = draftInfo[i][10];
				if (rosterObj[pid].info.draftYear === "") {
					rosterObj[pid].info.draftYear = draftInfo[i][2];
				}
				if (draftInfo[i][11] !== "College/University"){
					rosterObj[pid].info.preNBAType = "PRE-NBA";
				}
				else {
					rosterObj[pid].info.preNBAType = "COLLEGE";
				}
				pick = rosterObj[pid].info.draftYear + ", " + rosterObj[pid].info.draftPick + " PICK (" + rosterObj[pid].info.draftTeam + ")"
			}
		}
		jQuery("." + pid + " .info-bottom li:nth-child(2) span").html(pick);
		jQuery("." + pid + " .info-bottom li:nth-child(3) h4").html(rosterObj[pid].info.preNBAType + ": <span>" +rosterObj[pid].info.preNBA.toUpperCase() + "</span>");
	});
}

function loadBio(pid){
	//APPEND: TIMELINE
	var seasonsPlayed = rosterObj[pid].stats.seasonAvg.length;
	console.log(seasonsPlayed);
	var timelineHTML = '';
	var seasonYearHTML = '';
	for (i=0; i < seasonsPlayed; i++){
		var teamAbbreviation = rosterObj[pid].stats.seasonAvg[i].ta;
		console.log(teamAbbreviation);
		var traded = rosterObj[pid].stats.seasonAvg[i].spl.length;
		var segmentInner  = "";
		var title = "";
		var	seasonYearText = rosterObj[pid].stats.seasonAvg[i].val;
		if (rosterObj[pid].stats.hasStats == false){
			seasonYearText = "";
		}
		if ( i === 0 || teamAbbreviation !== rosterObj[pid].stats.seasonAvg[i-1].ta){ // If this is a new team, start the team wrap.
			title = teamAbbreviation;
		}
		if (traded){
			for (var x=0; x < traded; x++){
				var gpTot = rosterObj[pid].stats.seasonAvg[i].gp;
				var gp = rosterObj[pid].stats.seasonAvg[i].spl[x].gp;
				var gpPercentage = Math.round((gp/gpTot) * 100);
				teamAbbreviation = rosterObj[pid].stats.seasonAvg[i].spl[x].ta;
				if ( i === 0 || teamAbbreviation !== rosterObj[pid].stats.seasonAvg[i-1].ta && teamAbbreviation !== rosterObj[pid].stats.seasonAvg[i+1].ta){ // If this is a new team, start the team wrap.
					title = teamAbbreviation;
				}
				else {
					title = "";
				}
				segmentInner += '<div data-season-year="' + seasonYearText + '" data-team="' + teamAbbreviation + '" style="" class="segment-inner ' + teamAbbreviation + '-bg"><p>' + title + '</p></div>';
			}
		}
		else {
			segmentInner = '<div data-season-year="' + seasonYearText + '" data-team="' + teamAbbreviation + '" class="segment-inner ' + teamAbbreviation + '-bg"><p>' + title + '</p></div>';
		}
		timelineHTML += '<div class="segment">' + segmentInner + '</div>';
		seasonYearHTML += '<div class="segment"><p>' + seasonYearText + '</p></div>';
	}
	jQuery("." + pid + " .timeline-wrap").html('<div class="timeline">' + timelineHTML + '</div><div class="season-year">' + seasonYearHTML + '</div>')

	// APPEND: AWARDS
	jQuery.getJSON("http://stats.nba.com/stats/playerawards?PlayerID=" + rosterObj[pid].info.playerID + "&callback=?", function(data){
		var awards = data.resultSets[0].rowSet;
		var allNba = null;
		var awardsHTML = '';
		if (awards.length === 0){
			awardsHTML = "<p class='award'>No awards yet!</p>";
		}
		else {
			for (var i = 0; i < awards.length; i++){
				var date = '';
				if (awards[i][4] in rosterObj[pid].bio.awards){
					rosterObj[pid].bio.awards[awards[i][4]].num += 1;
					if (awards[i][7] !== null){
						date = new Date(awards[i][7]);
						rosterObj[pid].bio.awards[awards[i][4]].years.push([awards[i][6] + " (" + monthNames[date.getMonth()] + ")", getTeamInfo(awards[i][3]).ta]);
					}
					else if (awards[i][8] !== null){
						date = new Date(awards[i][8]).toLocaleDateString();
						rosterObj[pid].bio.awards[awards[i][4]].years.push([awards[i][6] + " (" + date.replace(/\//g,'-') + ")", getTeamInfo(awards[i][3]).ta]);										
					}
					else {
						rosterObj[pid].bio.awards[awards[i][4]].years.push([awards[i][6], getTeamInfo(awards[i][3]).ta]);
					}
				}
				else {
					rosterObj[pid].bio.awards[awards[i][4]] = {};
					rosterObj[pid].bio.awards[awards[i][4]].num = 1;
					if (awards[i][7] !== null){
						date = new Date(awards[i][7]);
						rosterObj[pid].bio.awards[awards[i][4]].years = [[awards[i][6] + " (" + monthNames[date.getMonth()] + ")", getTeamInfo(awards[i][3]).ta]];
					}
					else if (awards[i][8] !== null){
						date = new Date(awards[i][8]).toLocaleDateString();
						rosterObj[pid].bio.awards[awards[i][4]].years = [[awards[i][6] + " (" + date.replace(/\//g,'-') + ")", getTeamInfo(awards[i][3]).ta]];										
					}
					else {
						rosterObj[pid].bio.awards[awards[i][4]].years = [[awards[i][6], getTeamInfo(awards[i][3]).ta]];
					}
				}
				if (awards[i][5] !== null){
					allNba = " (" + numSuffix(awards[i][5]).toLowerCase() + " Team)";
				}
			}

			for(var key in rosterObj[pid].bio.awards){
				var dateList = '';
				for (var x = 0; x < rosterObj[pid].bio.awards[key].years.length; x++){
					if (rosterObj[pid].bio.awards[key].years[x]){
						dateList += '<li data-season-year="' + rosterObj[pid].bio.awards[key].years[x][0].substr(2,5) + '" data-team="' + rosterObj[pid].bio.awards[key].years[x][1] + '">' + rosterObj[pid].bio.awards[key].years[x][0] + '</li>';
					}
				}
				if (key.indexOf("All") !== -1){
					awardsHTML += '<p class="award"><span>' + rosterObj[pid].bio.awards[key].num + 'x</span> ' + key + allNba + '<img class="awards-button down active" src="http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/expand-arrow-down.gif" alt="Down arrow button"/><img class="awards-button up" src="http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/expand-arrow-up.gif" alt="Up arrow button"/></p><ul>' + dateList + '</ul>';
				}
				else {
					awardsHTML += '<p class="award"><span>' + rosterObj[pid].bio.awards[key].num + 'x</span> ' + key + '<img class="awards-button down active" src="http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/expand-arrow-down.gif" alt="Down arrow button"/><img class="awards-button up" src="http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/expand-arrow-up.gif" alt="Up arrow button"/></p><ul>' + dateList + '</ul>';
				}
			}
		}
		jQuery("." + pid + " .awards").html(awardsHTML);
	});

	// APPEND: CAREER HIGHS		
	jQuery.getJSON("http://stats.nba.com/stats/playerprofilev2?LeagueID=00&PerMode=PerGame&PlayerID=" + rosterObj[pid].info.playerID + "&callback=?", function(data){
		var careerHighs = data.resultSets[13].rowSet;
		var index = ['PTS','REB','AST','STL','BLK'];
		var gameDate = '';
		var careerHighsHTML = '';
		for (var i = 0; i < careerHighs.length; i++){
			gameDate = new Date(careerHighs[i][10]).toLocaleDateString();
			if (rosterObj[pid].stats.careerHighs[careerHighs[i][7]]){
				rosterObj[pid].stats.careerHighs[careerHighs[i][7]].dates.push("(vs " + careerHighs[i][6] + " on " + gameDate.replace(/\//g,'-') + ")");
			}
			else {
				rosterObj[pid].stats.careerHighs[careerHighs[i][7]] = { val:careerHighs[i][8], dates: ["(vs " + careerHighs[i][6] + " on " + gameDate.replace(/\//g,'-') + ")"] };
			}
		}
		for (var i = 0; i < index.length; i++){
			var gameDates = ''
			if (rosterObj[pid].stats.careerHighs.hasOwnProperty(index[i])){
				for (var x = 0; x < rosterObj[pid].stats.careerHighs[index[i]].dates.length; x++){
					gameDates += '<p style="color:gray">' + rosterObj[pid].stats.careerHighs[index[i]].dates[x] + '</p>';
				}
				careerHighsHTML += '<div class="sm-twenty ' + index[i].toLowerCase() + '"><p>' + index[i] + ': <span style="font-weight: bold">' + rosterObj[pid].stats.careerHighs[index[i]].val + '</span></p></div><div class="sm-eighty ' + index[i].toLowerCase() + '">' + gameDates + '</div>'
			}
			else {
				careerHighsHTML += '<div class="sm-full ' + index[i].toLowerCase() + '"><p>' + index[i] + ': <span style="font-weight: bold">0</span></p></div>'
			}
		}
		jQuery("." + pid + " .career-highs").html(careerHighsHTML);
	});	
}

function loadProfile(pid){
	jQuery('video').each(function() {
	    jQuery(this).get(0).pause();
	});
	if (jQuery("." + pid).length){
		jQuery(".profile-wrap").removeClass("active");
		jQuery("." + pid).addClass('active');
	}
	else {
		jQuery(".profile-wrap").removeClass("active");
		jQuery(".profile-wrap.loading").addClass("active");
		loadHeader(pid);
		loadBio(pid);
	}
}

jQuery(document).ready(function(){

	//////////////////////////////
	// PLUGINS + APPLY REDESIGN //
	//////////////////////////////
	

/*	var styleTag = jQuery('link[rel=stylesheet][href~="http://z.cdn.turner.com/drp/nba/celtics/sites/default/files/cdn/css/http/css_IvK3CuEXwiKXoGgL7ZWCoaPPeEOoeAH0AW2fTu2jVp0.css"]');
	console.log(styleTag);
	var rules = new Array();
	if (styleTag.styleSheets[1].cssRules) {
	    rules = document.styleSheets[1].cssRules;
	}
	else if (styleTag.styleSheets[1].rules) {
	    rules = document.styleSheets[1].rules;
	}
	console.log(rules);*/
/*	jQuery('link[rel=stylesheet][href~="http://z.cdn.turner.com/drp/nba/celtics/sites/default/files/cdn/css/http/css_awOgGDlAN3VW8GdWGW6acHHSxyZbLTrrUMCSg5mK9eM.css"]').remove();
*/	applyRedesign();
	(function(d) {
	var config = {
	kitId: 'lke3fdc',
	scriptTimeout: 3000
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	})(document);
	///////////////////////////////
	var date = new Date();
	var rosterYear = date.getFullYear();
	var infoYear = date.getFullYear();
	// Get roster data, put it in alphaetical order, then load the table.
	// 	jQuery.ajax({ // Check if playercards are available for current year. If not, change the value of playerCardYear to previous year
	jQuery.ajax({ // Check if playercards are available for current year. If not, change the value of playerCardYear to previous year
		url: "http://data.nba.com/data/v2015/json/mobile_teams/nba/" + rosterYear + "/teams/celtics_roster.json",
		async: false,
		success: function(data){
			var playerList = data.t.pl;
			playerList.sort(compare);
			loadRoster(playerList);
		},
		error: function(){
			rosterYear--;
			jQuery.ajax({ // Check if playercards are available for current year. If not, change the value of playerCardYear to previous year
				url: "http://data.nba.com/data/v2015/json/mobile_teams/nba/" + rosterYear + "/teams/celtics_roster.json",
				async: false,
				success: function(data){
					var playerList = data.t.pl;
					playerList.sort(compare);
					loadRoster(playerList);
				}
			});
		}
	});

	//////////////////
	// INTERACTIONS //
	//////////////////
	
	// ON CLICK: VIDEO 
	jQuery(document).on('click', '.video-content .grid a' , function(e) {
		e.preventDefault();
		videoSelect(this);
	});	
	
	// ON CLICK: AWARDS EXPAND 
	jQuery(document).on('click', '.awards-button' , function() {
		jQuery(this).removeClass("active");
		jQuery(this).siblings('.awards-button').addClass("active");
		jQuery(this).parent().next('ul').toggleClass("active");
	});

	// ON HOVER: TIMELINE 
	jQuery(document).on('hover', '.segment-inner' , function() {
		var seasonClass = jQuery(this).data("season-year");
		var teamClass = jQuery(this).data("team");
		jQuery("li[data-season-year*='" + seasonClass + "'][data-team*='" + teamClass + "']").toggleClass(teamClass + " active");
	});

	// ON CHANGE: HEADER STATS SEASON SELECT 
	jQuery(document).on("change", "table.averages select", function(){
		var pid = jQuery(this).closest(".profile-wrap").attr('data-pid');
		var selection = jQuery(this).val();
		seasonSelect(selection, pid);
	});

	// ON CLICK: TAB NAVIGATION 
	jQuery(document).on("click", ".tab-btn", function(){
		var pid = jQuery(this).closest(".profile-wrap").attr('data-pid');
		var contentType = jQuery(this).attr("data-content-type");
		var id = jQuery(this).attr('href').replace("#",".");
		var hash = id + "-content"; //Was having trouble preventing the jump to the hash element, so changed the div IDs to be different than the hash
		jQuery("." + pid + " " + hash).addClass('active');
		if (jQuery(this).hasClass('tab-btn')) {
			jQuery("." + pid + " .profile-content, " + "." + pid + " " + " .tab-btn").removeClass('active');
			jQuery("." + pid + " " + hash).addClass('active');
			jQuery(this).addClass('active');
		}
		if (rosterObj[pid][contentType].init == false){
			loadContent(pid, contentType, 'default');
		}
	});

	// ON CLICK: LOAD MORE
	jQuery(document).on('click', '.loadmore' , function() {
		var pid = jQuery(this).closest(".profile-wrap").attr('data-pid');
		var contentType = jQuery(this).closest(".profile-content").attr("data-content-type");
		var subType = jQuery(this).attr("data-channels");
		loadContent(pid, contentType, subType);
	});

	// ON CLICK: TABLE 
	jQuery(document).on('click', '.more-stats .slider', function(){
		var gid = "#" + jQuery(this).closest(".playoffs-content").attr("id");
		if (jQuery(this).parent().find('input').is(':checked')){
			jQuery(gid + " .boxscore .additional-stat").addClass("inactive");
			jQuery(gid + " .boxscore table").removeClass("all-stats").addClass("standard-stats");
			jQuery(gid + " .boxscore .dnp td:nth-child(2)").attr("colspan",12);
		}
		else {
			jQuery(gid + " .boxscore").find(".additional-stat").removeClass("inactive");
			jQuery(gid + " .boxscore").find("table").addClass("all-stats").removeClass("standard-stats");
			jQuery(gid + " .boxscore").find(".dnp td:nth-child(2)").attr("colspan",17);
		}
	});

	//DROPDOWN: STAT FILTERS
	jQuery(document).on('change', '.stats-content .dropdown-filter', function() {
		var pid = jQuery(this).closest(".profile-wrap").attr('data-pid');
		var tableType = jQuery(this).closest("section").attr('data-tabletype');
		console.log(tableType);
		var filters = {
			career: {
				scopeType : jQuery('.' + pid + ' .stats-content section[data-tableType="career"] select[data-filterType="scopeType"]').val(),
				seasonType : jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="seasonType"]').val(),
				statType : jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="statType"]').val(),
				teams : jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="teams"]').val(),
				quarters : jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="quarters"]').val(),
				location : jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="location"]').val(),
				gameRange: jQuery('.' + pid + '  .stats-content section[data-tableType="career"] select[data-filterType="gameRange"]').val()

			},
			games : {
				gameId: jQuery('.' + pid + '  .stats-content section[data-tableType="games"] .dropdown-filter[data-filterType="gameId"]').val(),
				statType: jQuery('.' + pid + '  .stats-content section[data-tableType="games"] .dropdown-filter[data-filterType="statType"]').val()
			}/*,
			compare: {
				playerId: '',
				seasonType: '',
				statType: ''
			}*/
		}
		console.log(pid);
		console.log(jQuery('.' + pid + ' .box-table-wrap .dropdown-filter').val())
		console.log("Stats filtered by:")
		console.log(filters);
		loadStats(pid, tableType, filters)
	});
	
	//////////////////////////
	// PLUGIN CONFIGURATION //
	//////////////////////////
	
	jQuery.boxStatsSorter.addParser({ 
	    id: 'shooting', 
	    is: function(s) { 
	        return false; 
	    }, 
	    format: function(s) { 
	        return s.slice(0, s.indexOf("-"));
	    }, 
	    type: 'numeric' 
	}); 
	jQuery.boxStatsSorter.addParser({
        id: 'surname',
        is: function(s) {
            return false;
        },
        format: function(s) {
            var parts = s.split(" ");
            return parts[1];
        },
        type: 'text'
    });
});