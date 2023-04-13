    $('.kindred').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/Awakening/br/class-selector.php?action=kindred',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.dwarves').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/Awakening/br/class-selector.php?action=dwarves',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.humans').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/Awakening/br/class-selector.php?action=humans',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.elves').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/Awakening/br/class-selector.php?action=elves',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });
	
    $('.stoneman').click( function() {

        $.ajax({
          url: 'https://fwcalc.com/Awakening/br/class-selector.php?action=stoneman',
          success: function(data) {
            $('.class').html(data);
          }
        });

    });