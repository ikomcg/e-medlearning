//covid news
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd43a122a3fmsh8932d0f80d906a8p110115jsn5a0b6503dac2',
		'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
	}
};
const newClass  = document.getElementsByClassName('content-news')[0]
const a = newClass.getElementsByTagName('a')
const imgs = newClass.getElementsByTagName('img');
const head4 = newClass.getElementsByTagName('h4');
const p = newClass.getElementsByTagName('p')

    fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', options)
        .then(response => response.json())
        .then(data =>  {
            for(let i = 0; i < imgs.length; i++){
                const num = Math.floor(Math.random() * 50) 
                a[i].getAttributeNode('href').value = data.articles[num].link
                imgs[i].getAttributeNode('src').value = data.articles[num].media
                head4[i].innerText = data.articles[num].title
                p[i].innerText = data.articles[num].summary
             }
    })
       .catch(err => console.error(err));

