    $('.kindred').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=kindred',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.dwarves').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=dwarves',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.humans').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=humans',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.elves').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=elves',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.stoneman').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=stoneman',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.lycan').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=lycan',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.demon').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/freedom/ru/class-selector.php?action=demon',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });