import { allProducts } from './products.js'


//give all images this attribute instead adding it to
// the html
const allimges = document.querySelectorAll('img');
export default allimges.forEach((values) => {
  values.setAttribute('loading', 'lazy');
  values.classList.add('active');
});

let htmlPage = document.querySelector('.products')


let renderHtml = '';
allProducts.forEach(values => {
  let html = `
          <section class="js-product-container product-container ">
        <div class="product-image-container">
          <img class="js-product-image product-image" src="${values.image}" alt="">
        </div>
        <div class="product-name">
          <p>
              ${values.name}
          </p>
        </div>
        <div class="product-rating">
          <p>${values.rating.stars}</p>
        </div>
        <div class="product-price">
          <p>$${(values.priceCents/100).toFixed(2)}</p>
        </div>
        <div class="product-quantity">
          <select class="product-amount">quantity
            <option value="1" selected>1</option>
            <option value="1" selected>2</option>
            <option value="1" selected>3</option>
            <option value="1" selected>4</option>
            <option value="1" selected>5</option>
            <option value="1" selected>6</option>
            <option value="1" selected>7</option>
            <option value="1" selected>8</option>
            <option value="1" selected>9</option>
          </select>
        </div>
        <div>
          <button class="primary-button">
            Add to cart
          </button>
        </div>
      </section>
   `
  renderHtml += html;
})

htmlPage.innerHTML = renderHtml;

