const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';

        if (article.urlToImage) {
        const img = document.createElement('img');
        img.src = article.urlToImage;
        img.className = 'card-img-top';
        img.alt = 'News image';
        card.appendChild(img);
        }

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = article.title;
        cardBody.appendChild(title);

        const desc = document.createElement('p');
        desc.className = 'card-text mt-auto';
        desc.textContent = article.description || '';
        cardBody.appendChild(desc);

        card.appendChild(cardBody);
        col.appendChild(card);
        newsDiv.appendChild(col);
    }
}