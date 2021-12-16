const logo = document.querySelector('.logo')
const estudo = document.querySelector('.estudos')
const rocket = document.querySelector('.rocket')
const carta = document.querySelector('.carta')

const animation = bodymovin.loadAnimation({
    container: rocket,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../lotties/56651-rocket-0302145678.json"
})

const animacao2 = bodymovin.loadAnimation({
    container: logo,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../lotties/45722-rocket-loader.json"
})

const animacao3 = bodymovin.loadAnimation({
    container: estudo,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../lotties/27637-welcome.json"
})

const animation4 = bodymovin.loadAnimation({
    container: carta,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../lotties/6391-email-sent.json"
})