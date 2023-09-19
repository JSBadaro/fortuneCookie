let texto = [];

await fetch('https://zenquotes.io/api/quotes/random')
.then((r) => r.json())
.then((json) => {
    let response = json;

    response.map((i) => {
        texto.push(i.q);
    })

    return texto;
})
.catch(() => {
    console.log('Deu errado aí padrin');
})

export default texto;