(new MutationObserver(() =>
	document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image')
		.forEach(e => {
			if (e.classList.contains('boss_vert')) return;
			let img = document.createElement('IMG');
			img.src = `img/Boss${Math.floor(Math.random()*19)+1}.png`;
			img.style.position = 'absolute';
			img.style.width = '100%';
			img.style.left = 0;
			img.style.bottom = 0;
			img.style.objectFit = 'contain';
			e.append(img);
			e.classList.add('boss_vert');
		})
)).observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});