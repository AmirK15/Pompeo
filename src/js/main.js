let btnStore = document.querySelector('.store-btn')
let storeCard = document.getElementsByClassName('store__card-hide')
// let storeCardNode = document.querySelectorAll('.hide-card')

if (btnStore) {
    btnStore.addEventListener('click', function () {
        Array.from(storeCard).map((e) => e.style.display = 'block', btnStore.style.display = 'none')
    })
}