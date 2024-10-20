    const books = [
        { title: "Vermelho, branco e sangue azul", author: "Casey McQuiston", image: "livro1.jpg" ,},
        { title: "A Biblioteca da Meia-Noite", author: "Matt Haig", image: "livro2.png" },
        { title: "Corte de espinhos e rosas", author: "Sarah J. Mass", image: "livro3.png" },
        { title: "Alice no país das Maravilhas", author: "Lewis Carroll", image: "livro4.png" },
        { title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", image: "livro5.png" },
        { title: "É assim que começa", author: "Colleem Hoover", image: "livro6.png" },
    ];

let currentPage = 0;
const booksPerPage = 3;

function displayBooks() {
    const container = document.getElementById('bookContainer');
    container.innerHTML = '';
    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const pageBooks = books.slice(startIndex, endIndex);

    pageBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
            </div>
        `;
        container.appendChild(bookElement);
    });

    updateNavButtons();
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * booksPerPage >= books.length;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayBooks();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if ((currentPage + 1) * booksPerPage < books.length) {
        currentPage++;
        displayBooks();
    }
});
document.getElementById("alugar1").addEventListener('click', function(){
    location.href = 'alugar.html'
})
document.getElementById("alugar2").addEventListener('click', function(){
    location.href = 'alugar.html'
})
document.getElementById("alugar3").addEventListener('click', function(){
    location.href = 'alugar.html'
})
document.getElementById("menu").addEventListener('click', function(){
    location.href = 'menu.html'
})



displayBooks();