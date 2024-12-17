// Импортируем функцию fetchDishesList из файла getDishesList.js
// Эта функция возвращает Promise, который разрешается в массив объектов блюд
import { fetchDishesList } from "./getDishesList.js";

// Вызываем функцию fetchDishesList и обрабатываем возвращаемый Promise
fetchDishesList()
  .then(dishesList => {
    // Когда Promise разрешается, мы получаем массив dishesList
    // Выводим массив объектов блюд в консоль для проверки
    storeData = dishesList;
    renderDishesCategoryList(storeData);
    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader_hide');
    }, 500);
  })
  .catch(error => {
    // Если Promise отклоняется, выводим ошибку в консоль
    console.error('Ошибка при получении списка блюд:', error);
  });

document.querySelector('.feedBack-button').classList.add('display_none');
const VersionPro = true
if (VersionPro == false){
  document.getElementById('sendOrder').classList.add('display_none');
}else{
  document.querySelector('.annonce-block').classList.add('displayNone');
  document.querySelector('body').classList.remove('event_none');
}


document.querySelector('#annonce-block-clouse').onclick = function () {
  document.querySelector('.annonce-block').classList.add('displayNone');
  document.querySelector('body').classList.remove('event_none');
}

const lang = document.documentElement.lang;
const mainLang = 'es';
const currencySymbol = '$';
const tel = '';
const address = 'Arévalo 1506 Buenos Aires';
const addressLink = 'https://maps.app.goo.gl/StkHhp6WBcwhrJUTA';
const addressLinkA = document.querySelector('#address-link');
addressLinkA.setAttribute('href', addressLink);
addressLinkA.querySelector('span').innerText = address

const formAction = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdJ0iAudp2-h5IRq5DodCQZAXt9hJTNSZgZnda8s8t_1xX-pQ/formResponse';
const nameinputservice = 'entry.1629191978';
const nameinputfood = 'entry.1273514537';
const nameinputcomment = 'entry.358016200';

const botToken = "7722475036:AAHXV-qTFP3eOTxmg_3fiRv28xLa8DkK7E8";
const chatId = "-1002477466358";
// const botToken = "6787781737:AAGpLJ84BHUon0i6p9mxa3EecA-GPrDTgL4";
// const chatId = "-4566719816";


const words = {
  ru: {
    portion: 'порция',
    cost: 'стоимость',
    pieces: 'штуки',


    totalCost: 'Итого: ',
    yourOrder: 'Ваш заказ:',
    sendOrder: 'Отправить заказ',

    announcement: '',
    announcementText: 'Выберете желаемые блюда, затем пригласите официанта и покажите ему корзину',
    menu: 'МЕНЮ',
    leaveReviewLink: 'Оставьте отзыв',
    deletePortionMessage: 'Удалить порцию?',

    leaveReview: 'Оставить отзыв',
    thankYou: 'Спасибо! Ваш отзыв отправлен!',
    food: 'Еда:',
    service: 'Обслуживание:',
    comment: 'Ваш комментарий',
    send: 'Отправить',

    textSendOrder: 'Заказ успешно отправлен!',
    textErrorSendOrder: 'Ошибка при отправке заказа. Пожалуйста, попробуйте еще раз или принласите официанта',

    tableNumber: 'Стол № ',
    orderMessage: `⚡⚡Новый заказ!\nСписок блюд:\n`,

    IQRMenuLink: 'Заказать меню',
  },
  en: {
    portion: 'portion',
    cost: 'cost',
    pieces: 'pieces',

    totalCost: 'total cost',
    yourOrder: 'Your order:',
    sendOrder: 'Send order',

    announcement: '',
    announcementText: 'Select the desired dishes, then invite the waiter and show him the basket',
    menu: 'MENU',
    leaveReviewLink: 'Leave a review',
    deletePortionMessage: 'Delete portion?',

    leaveReview: 'Leave a review',
    thankYou: 'Thank you! Your review has been sent!',
    food: 'Food:',
    service: 'Service:',
    comment: 'Your comment',
    send: 'Send',

    textSendOrder: 'Order successfully sent!',
    textErrorSendOrder: 'Error sending order. Please try again or call the waiter',

    tableNumber: 'Table № ',
    orderMessage: '⚡⚡New order!\nList of dishes:\n',

    IQRMenuLink: 'Order menu',
  },
  es: {
    portion: 'porción',
    cost: 'costo',
    pieces: 'piezas',

    totalCost: 'Сosto total:',
    yourOrder: 'Tu pedido:',
    sendOrder: 'Enviar pedido',

    announcement: '',
    announcementText: 'Selecciona los platos deseados, luego invita al camarero y muéstrale la cesta',
    menu: 'MENÚ',
    leaveReviewLink: 'Dejar una reseña',

    leaveReview: 'Dejar una reseña',
    thankYou: '¡Gracias! Tu reseña ha sido enviada!',
    food: 'Comida:',
    service: 'Servicio:',
    comment: 'Tu comentario',
    send: 'Enviar',

    textSendOrder: '¡Pedido enviado con éxito!',
    textErrorSendOrder: 'Error al enviar el pedido. Por favor, inténtalo de nuevo o llama al camarero',
    
    tableNumber: 'Tabla nro. ',
    orderMessage: '⚡⚡¡Nuevo pedido!\nLista de platos:\n',

    IQRMenuLink: 'Menú de pedidos',
  },
  pt: {
    portion: 'porção',
    cost: 'custo',
    pieces: 'peças',

    totalCost: 'Custo total:',
    yourOrder: 'Seu pedido:',
    sendOrder: 'Enviar pedido',

    announcement: '',
    announcementText: 'Selecione os pratos desejados, em seguida, chame o garçom e mostre a cesta',
    menu: 'MENU',
    leaveReviewLink: 'Deixar uma avaliação',
    deletePortionMessage: 'Excluir porção?',

    leaveReview: 'Deixar uma avaliação',
    thankYou: 'Obrigado! Sua avaliação foi enviada!',
    food: 'Comida:',
    service: 'Serviço:',
    comment: 'Seu comentário',
    send: 'Enviar',

    textSendOrder: 'Pedido enviado com sucesso!',
    textErrorSendOrder: 'Erro ao enviar o pedido. Por favor, tente novamente ou chame o garçom',

    tableNumber: 'Tabela nº. ',
    orderMessage: '⚡⚡Novo pedido!\nLista de pratos:\n',
    

    IQRMenuLink: 'Menu de pedidos',
  }
}

function renderPage() {
  for (let key in words[lang]) {
    if (document.querySelector(`#${key}`)) {
      document.querySelector(`#${key}`).textContent = words[lang][key];
    }
  }
}
renderPage();

let currentCategory = '';
let storeData = [];
let basketList = [];

function renderDishesCategoryList(dishesList) {
  const dishesCategoryListContainer = document.getElementById('dishesCategoryList');
  const addedCategories = new Set(); // Создаем множество для отслеживания добавенных категорий

  dishesList.forEach(dishitem => {
    const category = dishitem[`${lang}Category`]; // Получаем категорию блюда

    // Проверяем, была ли категория уже добавлена
    if (!addedCategories.has(category)) {
      const dishCategoryButton = document.createElement('button');
      dishCategoryButton.innerHTML = `
              ${category}
          `;
      dishCategoryButton.addEventListener('click', () => {
        dishesCategoryListContainer.querySelector('button.button_active').classList.remove('button_active');
        dishCategoryButton.classList.add('button_active');
        renderDishesList(category);
      });
      dishesCategoryListContainer.appendChild(dishCategoryButton);
      addedCategories.add(category); // Добавляем категорию в множество
    }
  });
  dishesCategoryListContainer.querySelector('button').classList.add('button_active');
  renderDishesList(storeData[0][`${lang}Category`]);
}



function renderDishesList(category) {
  currentCategory = category;
  const dishesListContainer = document.getElementById('dishesList');
  dishesListContainer.classList.add('dishes-list_loading');
  setTimeout(() => {
    dishesListContainer.innerHTML = '';
    storeData.forEach(dishitem=> {
      if (dishitem[`${lang}Category`] === category) {
        const dishCard = document.createElement('div');
        dishCard.dataset.id = dishitem.id;
        dishCard.classList.add('dishes-card');
        dishCard.innerHTML = `
          <img src="${dishitem.img}" alt="">
          <div class="dishes-card__info">
            <div class="dishes-card__description">
              <h2>${dishitem[`${lang}DishesName`]}</h2>
              <p class="dishes-card__description-text">${dishitem[`${lang}DishesDescription`]}</p>  
            </div>
          </div>
        `;


        // Порции
        const portionsContainer = document.createElement('div');
        portionsContainer.classList.add('dishes-card__portions');
        const portionNames = [dishitem.portionName1, dishitem.portionName2, dishitem.portionName3, dishitem.portionName4, dishitem.portionName5];
        portionNames.forEach((portionName, index) => {
          if (portionName) { // Проверяем, что название порции не пустое
            const portionNumber = basketList.find(item => item.dishId === `${dishitem.id}-${portionName}`)?.portionNumber || 0;
            if (portionNumber != 0) {
              dishCard.classList.add('dishes-card_active');
            }
            const portionCost = dishitem[`portionCost${index + 1}`];
            const portionElement = document.createElement('div');
            portionElement.classList.add('portion-item');
            portionElement.innerHTML = `
                  <p class="portion-item__text"><span>${words[lang].portion} <span class="portion-name">${portionName}</span> - </span><span> <span class="portion-cost">${portionCost}${currencySymbol}</span></span></p>
                  <div class="portion-item__buttons">
                    <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
                    <span class="portion-number">${portionNumber}</span>
                    <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
                  </div>
              `;
            const buttonPortionPlus = portionElement.querySelector('.portion-plus');
            buttonPortionPlus.addEventListener('click', () => {
              dishCard.classList.add('dishes-card_active');
              basketUpdate('plus', dishitem.id, dishitem[`${lang}DishesName`], dishitem[`${mainLang}DishesName`], portionName, portionCost, dishitem.img, portionElement.querySelector('.portion-number'));
            });
            const buttonPortionMinus = portionElement.querySelector('.portion-minus');
            buttonPortionMinus.addEventListener('click', () => {
              if (portionElement.querySelector('.portion-number').textContent == 1) {
                dishCard.classList.remove('dishes-card_active');
              }
              basketUpdate('minus', dishitem.id, dishitem[`${lang}DishesName`], dishitem[`${mainLang}DishesName`], portionName, portionCost, dishitem.img, portionElement.querySelector('.portion-number'));
            });
            portionsContainer.appendChild(portionElement);
          }
        });
        dishCard.appendChild(portionsContainer);
        // Порции закончились


        dishesListContainer.appendChild(dishCard);
      }
    });
    dishesListContainer.scrollLeft = 0;
    dishesListContainer.classList.remove('dishes-list_loading');
  }, 500);

}


function basketUpdate(action, dishId, dishName, dishNameMainLang, portionName, portionCost, dishImg, portionNumberSpan) {
  if (action === 'plus') {
    basketButtonOpen.classList.add('basket_have');
    portionNumberSpan.textContent = parseInt(portionNumberSpan.textContent) + 1;
    if (basketList.find(item => item.dishId === `${dishId}-${portionName}`)) {
      ;
      basketList = basketList.map(item => item.dishId === `${dishId}-${portionName}` ? { ...item, portionNumber: parseInt(portionNumberSpan.textContent), totalCost: portionCost * parseInt(portionNumberSpan.textContent) } : item);
    } else {
      basketList.push({
        dishId: `${dishId}-${portionName}`,
        dishName: dishName,
        dishNameMainLang: dishNameMainLang,
        portionName: portionName,
        portionCost: portionCost,
        dishImg: dishImg,
        portionNumber: parseInt(portionNumberSpan.textContent),
        totalCost: portionCost,
      });
    }
    sendOrderButton.disabled = false;
  } else if (action === 'minus') {
    if (parseInt(portionNumberSpan.textContent) > 0) {
      portionNumberSpan.textContent = parseInt(portionNumberSpan.textContent) - 1;
      if (parseInt(portionNumberSpan.textContent) === 0) {
        if (confirm(`${words[lang].deletePortionMessage}`)) {
          basketList = basketList.filter(item => item.dishId !== `${dishId}-${portionName}`);
          if (basketList.length === 0) {
            basketButtonOpen.classList.remove('basket_have');
            sendOrderButton.disabled = true;
          }
        }
      } else {
        basketList = basketList.map(item => item.dishId === `${dishId}-${portionName}` ? { ...item, portionNumber: parseInt(portionNumberSpan.textContent), totalCost: portionCost * parseInt(portionNumberSpan.textContent) } : item);
      }
    }

  }
  renderBasketList();
}


function renderBasketList() {
  const basketListContainer = document.getElementById('basketList');
  basketListContainer.innerHTML = '';
  let totalCost = 0;
  basketList.forEach(item => {
    const basketItem = document.createElement('div');
    basketItem.classList.add('basket-item');
    basketItem.dataset.id = item.dishId;
    basketItem.innerHTML = `
    <div class="basket-item__img">
      <img src="${item.dishImg}" alt="">
      <div class="basket-item__manage">
        <div class="basket-item__buttons">
          <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
          <span class="portion-number">${item.portionNumber}</span>
          <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <p class="basket-item__total-cost">${item.totalCost}${currencySymbol}</p>
      </div>
    </div>
    <div class="basket-item__info">
      <h3>${item.dishName}</h3>
      <h4>${item.dishNameMainLang}</h4>
      <p><span>${words[lang].portion}<span class="portion-name">${item.portionName}</span> - </span><span> <span class="portion-cost">${item.portionCost}${currencySymbol}</span></span></p>
      
    </div>
    `;
    const buttonPortionPlus = basketItem.querySelector('.portion-plus');
    buttonPortionPlus.addEventListener('click', () => {
      basketUpdate('plus', item.dishId.split('-')[0], item.dishName, item.dishNameMainLang, item.portionName, item.portionCost, item.dishImg, basketItem.querySelector('.portion-number'));
      renderDishesList(currentCategory);
    });
    const buttonPortionMinus = basketItem.querySelector('.portion-minus');
    buttonPortionMinus.addEventListener('click', () => {
      basketUpdate('minus', item.dishId.split('-')[0], item.dishName, item.dishNameMainLang, item.portionName, item.portionCost, item.dishImg, basketItem.querySelector('.portion-number'));
      renderDishesList(currentCategory);
    });
    basketListContainer.appendChild(basketItem);
    totalCost += item.totalCost;
  });
  document.getElementById('totalCost').textContent = `${words[lang].totalCost} ${totalCost}${currencySymbol}`;
}


// открытие и закрытие корзины
function basketBoxOpenClouse() {
  basketButtonOpen.classList.toggle('button_moveLeft');
  basketButtonClouse.classList.toggle('basket-clouse_active');
  basketBox.classList.toggle('basket-box_open');
}
const basketButtonOpen = document.querySelector('.basket');
const basketButtonClouse = document.querySelector('.basket-clouse');
const basketBox = document.querySelector('.basket-box');

basketButtonOpen.onclick = function () {
  basketBoxOpenClouse()
}
basketButtonClouse.onclick = function () {
  basketBoxOpenClouse()
}

// отправка заказа
const sendOrderButton = document.getElementById('sendOrder');
sendOrderButton.disabled = true;
sendOrderButton.onclick = function () {
  let tableNumber = localStorage.getItem("table");

  
  if (tableNumber == 'null') {
    console.log(tableNumber);
    tableNumber = prompt('Пожалуйста укажите номер стола за которым вы ожидаете')
  }

  
  let totalCostMessage = 0;
  let orderMessage = `${lang}\n${words[mainLang].tableNumber}${tableNumber}\n\n${words[mainLang].orderMessage}`;
  let portionNumberMessage = 0;
  basketList.forEach(item => {
    portionNumberMessage += 1;
    orderMessage += `\n${portionNumberMessage}. ${item.dishName} - ${item.portionName}x${item.portionNumber} - ${item.totalCost}${currencySymbol}\n${item.dishNameMainLang}\n`;
    totalCostMessage += item.totalCost;
  });
  orderMessage += `\n\n${words[mainLang].totalCost}  ${totalCostMessage}${currencySymbol}`;

  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: orderMessage,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert(words[lang].textSendOrder);
      } else {
        alert(words[lang].textErrorSendOrder);
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert(words[lang].textErrorSendOrder);
    });
}
