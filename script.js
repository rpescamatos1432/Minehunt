function showContent(language) {
    const portugueseContent = document.getElementById('portuguese-content');
    const englishContent = document.getElementById('english-content');
    const buttons = document.querySelectorAll('.tabs button');

    if (language === 'portuguese') {
        englishContent.classList.remove('active');
        portugueseContent.classList.add('active');

        setTimeout(() => {
            portugueseContent.style.display = 'block';
            englishContent.style.display = 'none';
        }, 500);
    } else {
        portugueseContent.classList.remove('active');
        englishContent.classList.add('active');

        setTimeout(() => {
            englishContent.style.display = 'block';
            portugueseContent.style.display = 'none';
        }, 500);
    }
}

// Inicialize o conteúdo em português como ativo
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('portuguese-content').classList.add('active');
});


