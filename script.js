// JavaScript snippet to add/remove 'active' class on click
document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var activeItem = document.querySelector('.dropdown-item.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        this.classList.add('active');
      });
    });
  });