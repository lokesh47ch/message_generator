const msg_generator = () => {
    let messages = [
        "The world is constantly changing, and it can be both exciting and scary to think about what the future holds.",
        "I wish I had more time to pursue my hobbies and interests, but it can be difficult to balance everything.",
        "It's important to stay connected with friends and family, even if it's just through a quick text or phone call.",
        "There are so many amazing books out there that I want to read, but my to-read list keeps getting longer and longer.",
        "It's easy to get caught up in the negativity and chaos of the world, but I try to focus on the positive things and make a difference where I can.",
        "It's amazing to think about how much technology has advanced in such a short period of time, and I'm excited to see where it will go next.",
        "Sometimes it's the little things in life that can bring the most joy, like a good cup of coffee or a beautiful sunset.",
        "I believe that everyone has the power to make a difference in the world, no matter how small it may seem.",
        "It's important to take care of your mental health and well-being, even when life gets busy or stressful.",
        "Learning new things is one of the most rewarding experiences in life, and I try to challenge myself to do so as often as I can."
      ];

 let numbers =  [ 1,2,3,4,5,6,7,8,9]
 
let random_message = Math.floor(Math.random()*messages.length)
let random_number = Math.floor(Math.random()*numbers.length)

console.log(`Your message is ${messages[random_message]}  and messeage number is ${random_number}`)

}
msg_generator()