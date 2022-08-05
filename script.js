const arrayDeFilmes = document.querySelectorAll('.movie');
const botaoProximo = document.querySelector('.btn-next');
const botaoAnterior = document.querySelector('.btn-prev');
const input = document.querySelector('.input');
const highLight__Video = document.querySelector('.highlight__video');
const highLight__Title = document.querySelector('.highlight__title');
const highLight__Rating = document.querySelector('.highlight__rating');
const highLight__Genre = document.querySelector('.highlight__genres');
const highLight__Launch = document.querySelector('.highlight__launch');
const highLight__Description = document.querySelector('.highlight__description');
const highlight__VideoLink = document.querySelector('.highlight__video-link');
const modal = document.querySelector('.modal');
const modal__Title = document.querySelector('.modal__title');
const modal__Img = document.querySelector('.modal__img');
const modal__Description = document.querySelector('.modal__description');
const modal__Average = document.querySelector('.modal__average');
const modal__Genres = document.querySelector('.modal__genres');
const modal__Close = document.querySelector('.modal__close');

let contador = 5;


fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false').then((resposta) => {

    const promiseBody = resposta.json();

    promiseBody.then((body) => {

        arrayDeFilmes.forEach((divMovie, index) => {

            const img = document.createElement('img');
            img.classList.add('imagem');
            img.src = body.results[index].poster_path;

            const divMovie__Info = document.createElement('div');
            divMovie__Info.classList.add('movie__info');

            const spanMovie__Title = document.createElement('span');
            spanMovie__Title.classList.add('movie__title');
            spanMovie__Title.textContent = body.results[index].title;

            const spanID = document.createElement('span');
            spanID.classList.add('id');
            spanID.classList.add('hidden');
            spanID.textContent = body.results[index].id;

            const spanMovie__Rating = document.createElement('span');
            spanMovie__Rating.classList.add('movie__rating');

            const rating = document.createElement('span');
            rating.classList.add('movie__rating');
            rating.textContent = body.results[index].vote_average;

            const imgEstrela = document.createElement('img');
            imgEstrela.classList.add('img_rating');
            imgEstrela.src = './assets/estrela.svg';
            imgEstrela.alt = 'Estrela';

            spanMovie__Rating.append(imgEstrela, rating);
            divMovie__Info.append(spanMovie__Title, spanID, spanMovie__Rating);
            divMovie.append(img, divMovie__Info);

        });

        botaoProximo.addEventListener('click', () => {

            const ultimoTitulo = arrayDeFilmes[arrayDeFilmes.length - 1].querySelector('.movie__title');

            if (ultimoTitulo.textContent === body.results[body.results.length - 1].title) {

                let novoContador = 0;

                arrayDeFilmes.forEach((divMovie, index) => {

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index + novoContador].poster_path;
                    spanMovie__Title.textContent = body.results[index + novoContador].title;
                    spanMovie__Rating.textContent = body.results[index + novoContador].vote_average;
                    spanID.textContent = body.results[index + novoContador].id;

                });
            } else {

                arrayDeFilmes.forEach((divMovie, index) => {

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index + contador].poster_path;
                    spanMovie__Title.textContent = body.results[index + contador].title;
                    spanMovie__Rating.textContent = body.results[index + contador].vote_average;
                    spanID.textContent = body.results[index + contador].id;

                });

            }

            if (contador >= body.results.length - 5) {
                contador = 0
            } else {
                contador = contador + 5;
            }
        });

        botaoAnterior.addEventListener('click', () => {

            let novoContador = contador - 10;
            const primeiroTitulo = arrayDeFilmes[0].querySelector('.movie__title');
            const ultimoTitulo = arrayDeFilmes[arrayDeFilmes.length - 1].querySelector('.movie__title');

            if (primeiroTitulo.textContent === body.results[0].title) {

                arrayDeFilmes.forEach((divMovie, index) => {

                    novoContador = body.results.length - 5;

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index + novoContador].poster_path;
                    spanMovie__Title.textContent = body.results[index + novoContador].title;
                    spanMovie__Rating.textContent = body.results[index + novoContador].vote_average;
                    spanID.textContent = body.results[index + novoContador].id;
                });

            } else if (ultimoTitulo.textContent === body.results[body.results.length - 1].title) {

                arrayDeFilmes.forEach((divMovie, index) => {

                    novoContador = body.results.length - 10;

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index + novoContador].poster_path;
                    spanMovie__Title.textContent = body.results[index + novoContador].title;
                    spanMovie__Rating.textContent = body.results[index + novoContador].vote_average;
                    spanID.textContent = body.results[index + novoContador].id;
                });


            } else {
                arrayDeFilmes.forEach((divMovie, index) => {

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index + novoContador].poster_path;
                    spanMovie__Title.textContent = body.results[index + novoContador].title;
                    spanMovie__Rating.textContent = body.results[index + novoContador].vote_average;
                    spanID.textContent = body.results[index + novoContador].id;
                });
            }
            contador = novoContador + 5;
        });


        input.addEventListener('keydown', (event) => {

            if (event.key !== 'Enter') {
                return;
            }

            if (input.value === '') {

                arrayDeFilmes.forEach((divMovie, index) => {

                    const imagem = divMovie.querySelector('.imagem');
                    const spanMovie__Title = divMovie.querySelector('.movie__title');
                    const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                    const spanID = divMovie.querySelector('.id');

                    imagem.src = body.results[index].poster_path;
                    spanMovie__Title.textContent = body.results[index].title;
                    spanMovie__Rating.textContent = body.results[index].vote_average;
                    spanID.textContent = body.results[index].id;
                });
                return;
            }

            const promiseRespostaVideo = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`);

            promiseRespostaVideo.then((respostaVideo) => {

                const promiseBodyVideo = respostaVideo.json();

                promiseBodyVideo.then((bodyVideo) => {

                    arrayDeFilmes.forEach((divMovie, index) => {

                        const imagem = divMovie.querySelector('.imagem');
                        const spanMovie__Title = divMovie.querySelector('.movie__title');
                        const spanMovie__Rating = divMovie.querySelector('.movie__rating');
                        const spanID = divMovie.querySelector('.id');

                        imagem.src = bodyVideo.results[index].poster_path;
                        spanMovie__Title.textContent = bodyVideo.results[index].title;
                        spanMovie__Rating.textContent = bodyVideo.results[index].vote_average;
                        spanID.textContent = bodyVideo.results[index].id;
                    });

                });
            });
            input.value = '';
        });
    });
});


fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR').then((resposta) => {

    const promiseBody = resposta.json();

    promiseBody.then((body) => {

        highLight__Video.style.backgroundImage = `url(${body.backdrop_path})`;
        highLight__Video.style.backgroundSize = 'cover';
        highLight__Title.textContent = body.title;
        highLight__Rating.textContent = body.vote_average;
        highLight__Genre.textContent = `${body.genres[0].name}, ${body.genres[1].name}, ${body.genres[2].name}`;

        const dataFormatada = body.release_date;
        const dataFormatadaDOIS = new Date(dataFormatada);
        highLight__Launch.textContent = `${dataFormatadaDOIS.getDate()} do mês ${dataFormatadaDOIS.getMonth() + 1} de ${dataFormatadaDOIS.getFullYear()}`;

        highLight__Description.textContent = body.overview;
    });
});

fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR').then((resposta) => {

    const promiseBody = resposta.json();

    promiseBody.then((body) => {

        highlight__VideoLink.href = `https://www.youtube.com/watch?v=${body.results[1].key}`;

    });
});


arrayDeFilmes.forEach((divMovie) => {

    divMovie.addEventListener('click', (event) => {


        const elementoClicado = event.path[1];
        const spanDoID = elementoClicado.querySelector('.id');
        const numeroDoID = spanDoID.textContent;

        const promiseResposta = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${numeroDoID}?language=pt-BR`);

        promiseResposta.then((resposta) => {

            const promiseBody = resposta.json();

            promiseBody.then((body) => {

                modal.classList.remove('hidden');
                modal__Title.textContent = body.title;
                modal__Img.src = body.backdrop_path;
                modal__Description.textContent = body.overview;
                modal__Average.textContent = body.vote_average;

                for (let i = 0; i < body.genres.length; i++) {
                    const modal__Genre = document.createElement('span');
                    modal__Genre.classList.add('modal__genre');
                    modal__Genre.textContent = body.genres[i].name;
                    modal__Genres.append(modal__Genre);
                }
            });
        });
    });
});


modal__Close.addEventListener('click', () => {

    const arrayDeGenres = document.querySelectorAll('.modal__genre');

    for (let item of arrayDeGenres) {
        item.remove();
    }

    modal.classList.add('hidden');

});









