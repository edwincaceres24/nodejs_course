const puppeteer = require('puppeteer');


(async ()=>{
	console.log('Init browser')	
	const browser= await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://www.npmjs.com/')

	let title1 = await page.evaluate(()=>{
			const h1	= document.querySelector('h1');
			console.log(h1.innerHTML,'Here it is')
	})
	
	console.log('Closing brower')
	//browser.close();

	console.log('Browser closed')
})();
