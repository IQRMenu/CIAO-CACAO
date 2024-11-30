// Google Apps Script
function doGet() {
  var sheet = SpreadsheetApp.openById('1Ze6lbb7i05sbXAnkZWrDca2LfoHFb3-cdJzEEc0pHPU').getSheetByName('Sheet1');
  var data = sheet.getDataRange().getValues();
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}


//-----------------------------------//


// Функция fetchDishesList выполняет HTTP-запрос для получения данных о блюдах
export function fetchDishesList() {
  // Выполняем fetch-запрос к указанному URL
  return fetch('https://script.google.com/macros/s/AKfycbwAXs8zK4zfihh5Glv2R6z4kDcxO60kaXJHUo3oRMFpaw9e9Kk3yI5uxDC8KzbqNCXdlQ/exec')
    .then(response => {
      // Проверяем, успешен ли ответ
      if (!response.ok) {
        // Если ответ не успешен, выбрасываем ошибку с кодом статуса
        throw new Error('Сеть ответила с ошибкой: ' + response.status);
      }
      // Преобразуем ответ в JSON
      return response.json();
    })
    .then(data => {
      // Обрабатываем полученные данные и возвращаем массив объектов
      return processData(data);
    })
    .catch(error => {
      // Обрабатываем ошибки, которые могут возникнуть при выполнении запроса
      console.error('Ошибка:', error);
      // Возвращаем пустой массив в случае ошибки
      return [];
    });
}

// Функция processData преобразует данные из массива массивов в массив объектов
function processData(data) {
  // Первая строка данных используется как названия полей
  const keys = data[0];
  // Преобразуем каждую последующую строку в объект
  const objectsArray = data.slice(2).map(row => {
    let obj = {};
    // Заполняем объект, сопоставляя значения с ключами
    row.forEach((value, index) => {
      obj[keys[index]] = value;
    });

    return obj;
  });
  // Возвращаем массив объектов
  return objectsArray;
}
