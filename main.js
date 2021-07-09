// Class 28 Assignment


jQuery(document).ready(function(){

  // Draggable
  jQuery('#draggable').draggable({
    containment : 'parent',
    cursor      : 'move'
  });

  /* Drag & Drop */
  // Draggable Object
  jQuery('#first, #second').draggable({
    containment : 'parent',
    revert      : 'invalid'
  });

  // Droppable Object
  jQuery('.droppable').droppable({
    accept  : '#second',
    classes : {
      'ui-droppable-active' : 'droppable-box-active',
      'ui-droppable-hover'  : 'droppable-box-hover'
    },
    drop : function(){
      jQuery( this ).addClass( "ui-state" ).find( "p" ).html( "Successfully Dropped!!!" );
    }
  });

  /* Resizable */
  jQuery('#resizable').resizable({
    animate     : true
  });

  /* Selectable */
  jQuery('#selectable').selectable();

  /* Sortable */
  jQuery('#sortable').sortable({
    placeholder: "ui-state-highlight"
  });

});
