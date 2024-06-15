document.addEventListener('DOMContentLoaded', function() {
    const currentPage = getCurrentPage(); // Function to determine current page

    switch (currentPage) {
        case 'index':
            populateArticles([
                { title: "Delicious Recipes to Try This Weekend", category: "Food", id: "recipe-weekend" },
                { title: "New Tech Gadgets for 2024 You Should Know About", category: "Tech", id: "tech-gadgets" },
                { title: "The Impact of Blogging on Social Media", category: "Blog News", id: "blog-impact" }
                // Add more articles as needed
            ]);
            break;
        case 'food':
            populateArticles([
                { title: "10 Easy Recipes to Impress Your Guests", category: "Food", id: "easy-recipes" },
                { title: "Guide to the Best Food Festivals Around the World", category: "Food", id: "food-festivals" }
            ]);
            break;
        case 'tech':
            populateArticles([
                { title: "Top 5 Programming Languages to Learn in 2024", category: "Tech", id: "programming-languages" },
                { title: "The Future of AI in Everyday Tech", category: "Tech", id: "ai-future" }
            ]);
            break;
        case 'blog-news':
            populateArticles([
                { title: "The Impact of Blogging on Social Media", category: "Blog News", id: "blog-social-media" },
                { title: "How to Write Engaging Blog Posts", category: "Blog News", id: "write-engaging-posts" }
            ]);
            break;
        default:
            console.error('Unknown page');
            break;
    }
});

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0]; // Get current page name from URL
    return page || 'index'; // Default to 'index' if page not found
}

function populateArticles(articles) {
    const articlesContainer = document.getElementById('articles');

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <h5>Category: ${article.category}</h5>
            <h3>${article.title}</h3>
            <button class="read-more-btn" data-article-id="${article.id}">Read More</button>
        `;
        articlesContainer.appendChild(articleDiv);
    });

    // Add event listener to all 'Read More' buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const articleId = button.getAttribute('data-article-id');
            // Redirect to specific article page based on articleId
            switch (articleId) {
                case 'recipe-weekend':
                    window.location.href = 'Articles/recipe-weekend.html';
                    break;
                case 'tech-gadgets':
                    window.location.href = 'Articles/tech-gadgets.html';
                    break;
                case 'blog-impact':
                    window.location.href = 'Articles/blog-impact.html';
                    break;
                case 'easy-recipes':
                    window.location.href = 'Articles/easy-recipes.html';
                    break;
                case 'food-festivals':
                    window.location.href = 'Articles/food-festivals.html';
                    break;
                case 'programming-languages':
                    window.location.href = 'Articles/programming-languages.html';
                    break;
                case 'ai-future':
                    window.location.href = 'Articles/ai-future.html';
                    break;
                case 'blog-social-media':
                    window.location.href = 'Articles/blog-social-media.html';
                    break;
                case 'write-engaging-posts':
                    window.location.href = 'Articles/write-engaging-posts.html';
                    break;
                default:
                    console.error('Unknown article ID');
                    break;
            }
        });
    });
}
