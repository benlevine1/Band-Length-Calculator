$(document).ready(addClickHandlers)

function addClickHandlers(){
  $('#calculate').click(calculateLength);
}

const calculateLength = () => {
  let initialLength = $('#length').val();
  let percentage = $('.mySelect option:selected').val();
  const result = (initialLength * 2 / percentage).toFixed(3);
  $('#result').val(`${result} in.`);
}