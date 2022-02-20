
window.addEventListener('scroll', () =>{
    
    const scrolled = window.scrollY;
    
    if (Math.ceil(scrolled) >= 1200){
        console.log(scrolled);
        const progressBar = document.getElementsByClassName('progress_bar')

        for(let i = 0; i < 6 ; i++){
        setInterval(()=> {
            const computedStyle = getComputedStyle(progressBar[i])
            const width =  parseFloat(computedStyle.getPropertyValue('--width')) || 0
            progressBar[i].style.setProperty('--width', width + .02)
        
        }, 5)
        }
    }
});


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jpblecher@gmail.com",
        Password : "ejlumqwxwzytwnyq",
        To : 'jpblecher@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "Name" + document.getElementById("name").value 
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message Sent Succesfully")
    );
}