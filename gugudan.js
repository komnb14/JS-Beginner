/*let word='날파리'

while(true)
{
    let new_word = prompt(word);
    if(word[word.length - 1] === new_word[0])
    {
        word = new_word;
        continue;
    }
    alert('첫글자가 다릅니다.')
} */
 let num1 = Math.floor(Math.random()*9) + 1
 let num2 = Math.floor(Math.random()*9) + 1
 let result = num1 * num2
while(true)
{
        
    let question = prompt(num1 + "곱하기" + num2 + "는?");
    if(result === question)
    {
        num1 = Math.floor(Math.random()*9) + 1
        num2 = Math.floor(Math.random()*9) + 1
        result = num1 * num2
        alert('정답입니다.')
        continue;
    }

    if(question === null) break;
    
    alert('오답입니다.')
}
