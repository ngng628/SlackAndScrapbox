$(function() {
    chrome.tabs.getSelected(null, function(tab) {
		// 正規表現がわからなかった……あとでなおします
		var tabURL = tab.url;
		var scrapboxTitle = tabURL.split ('/');
		if (scrapboxTitle[2] === "scrapbox.io")
		{
			var requestURL = localStorage.getItem('request_url');
			
			var channel    = localStorage.getItem('channel');
			var username   = localStorage.getItem('username');
			var scrapboxProjectName = localStorage.getItem('project_name');
			var text = '';
			
			
			if (scrapboxTitle[4] === '')
			{
				text = scrapboxTitle[3] + "  top-page\n" + tab.url;
			}
			else
			{
				text = scrapboxTitle[4] + '\n' + tab.url;
			}
			
			$.ajax ({
				url: requestURL,
				type: 'post',
				data: 'payload=' + JSON.stringify({
					"channel": channel,
					"username": username,
					"text": text,
				}),
				success: function() {
					console.log('success');
				},
				error: function() {
					console.log('fail');
				}
			});
		}

    });
});
