const ending = document.querySelector(".Ending");
const input = document.querySelector('.EndingText');
const button = document.querySelector(".EndingButton");
const result = document.querySelector(".EndingResult");



button.addEventListener('click', function answer (){

   if(ending.textContent[ending.textContent.length - 1] === input.value[0])
    {
        ending.textContent = input.value;
        result.textContent = '맞았습니다.';
    }else {
        result.textContent = '틀렸습니다.';
    }      
})
// 아니
/*let word='날파리'

while(true)
{
    let new_word = prompt(word);
    if(word[word.length - 1] === new_word[0])
    {
        word = new_word;
        continue;g
    }
    alert('첫글자가 다릅니다.')
}*/