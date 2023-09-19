let text = [];

await fetch('https://zenquotes.io/api/quotes/random')
.then((r) => r.json())
.then((json) => {
    let response = json;

    response.map((i) => {
        text.push(i.q);
    })

    return text;
})
.catch(() => {
    console.log('Deu errado aí padrin');
})

export default text;