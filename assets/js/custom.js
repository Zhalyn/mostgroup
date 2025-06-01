function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Находим все ссылки в списке услуг
    var serviceLinks = document.querySelectorAll('.services-list a');

    // Функция для активации выбранного сервиса и показа соответствующего контента и деталей
    function activateService(serviceName) {
        serviceLinks.forEach(function(link) {
            if (link.textContent.trim() === serviceName) {
                link.classList.add('active');
                showContentAndDetails(serviceName);
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Функция для показа содержимого и деталей
    function showContentAndDetails(serviceName) {
        // Скрываем все блоки с содержимым и деталями
        document.querySelectorAll('.service-content').forEach(function(content) {
            content.style.display = 'none';
        });

        // Получаем ID нужного блока содержимого и деталей
        var contentId = serviceName + "-content";
        var detailsId = serviceName + "-details";

        // Отображаем нужный блок содержимого и деталей
        var contentBlock = document.getElementById(contentId);
        var detailsBlock = document.getElementById(detailsId);
        if (contentBlock) {
            contentBlock.style.display = 'block';
        }
        if (detailsBlock) {
            detailsBlock.style.display = 'block';
        }
    }

    // Обработчик клика по ссылкам
    serviceLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем переход по ссылке
            var serviceName = this.textContent.trim();
            activateService(serviceName);
        });
    });

    // Функция для получения параметров из URL
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Активация сервиса на основе параметра URL при загрузке страницы
    var serviceFromUrl = getParameterByName('service');
    if (serviceFromUrl) {
        activateService(serviceFromUrl);
    }
});

$(document).ready(function(){
    // Запускаем карусели
    $('#carouselExampleIndicators').carousel();
    $('#carouselExampleIndicators1').carousel();
    $('#carouselExampleIndicators2').carousel();
    $('#carouselExampleIndicators3').carousel();
    $('#carouselExampleIndicators4').carousel();
    $('#carouselExampleIndicators5').carousel();
    $('#carouselExampleIndicators6').carousel();
    $('#carouselExampleIndicators7').carousel();

    $('.carousel').carousel({
        interval: 5000,  // Changes every 5 seconds
        wrap: true       // Allows the carousel to loop back to the beginning
    });
});

function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openFullScreen(img) {
    var fullScreenDiv = document.getElementById('fullScreenImg');
    var fullScreenImg = document.getElementById('fullScreenImgSrc');
    fullScreenImg.src = img.src;
    fullScreenDiv.style.display = 'flex';
  }

  function closeFullScreen() {
    var fullScreenDiv = document.getElementById('fullScreenImg');
    fullScreenDiv.style.display = 'none';
  }