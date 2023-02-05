
const QuoteArea = document.querySelector('.quote-area');
const quoteBtn = document.querySelector('.buttons');
const Name = document.querySelector('.name')

quoteBtn.addEventListener("click", newQuote);

function newQuote(){
     fetch(`https://api.quotable.io/random`)
     .then(response=> response.json())
     .then(data =>{
        console.log(data)
        let html1 = "";
        let html2 = "";
        html1+=`
        <i class="fas fa-quote-left"></i>
                <p>${data.content}</p>
        <i class="fas fa-quote-right"></i>
        `
        html2+=
        `
        <div class="author">
                <div class="name">-${data.author}</div>
            </div>

        `
        QuoteArea.innerHTML = html1
        Name.innerHTML = html2
     })
}