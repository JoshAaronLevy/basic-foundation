var buttons = document.getElementsByClassName('button');
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', event => {
    console.log(event.target.id);
    document.getElementsByClassName('button').style.backgroundColor = '#111';
    if (event.target.id === 'stopButton') {
      document.getElementsByClassName('stopLight').style.backgroundColor =
        'red';
    } else if (event.target.id === 'slowButton') {
      document.getElementsByClassName('slowLight').style.backgroundColor =
        'yellow';
    } else if (event.target.id === 'goButton') {
      document.getElementsByClassName('goLight').style.backgroundColor =
        'green';
    }
  });
}
