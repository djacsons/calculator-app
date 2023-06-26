const themeSelect1 = document.getElementById('themeSelect1')
const themeSelect2 = document.getElementById('themeSelect2')
const themeSelect3 = document.getElementById('themeSelect3')
const knob = document.getElementById('mainKnob')
const buttons = document.getElementsByClassName('buttons')
const screen = document.getElementById('screen')
const screenHolder = document.getElementsByClassName('screenHolder')[0]
const themeSelectBack = document.getElementsByClassName('themeSelectArea')[0]
const keypadBack = document.getElementsByClassName('keypad')[0]
const keypadNums = document.getElementsByClassName('keypadNums')
const equalBtn = document.getElementsByClassName('equalBtn')[0]
const toggle = document.getElementsByClassName('themeSelectKnob')[0]
const resetAndDel = document.getElementsByClassName('resetDel')
const headTheme = document.getElementsByClassName('headTheme')[0]
const attribution = document.getElementsByClassName('attribution')[0]
const attLinks = document.getElementsByClassName('attLinks')
let currentBtn
let seenArr = []
let hiddenArr = []
let firstArrNum = []
let nums = []
let opsArr = []
let arrTheme = [themeSelect1, themeSelect2, themeSelect3]
let currentOp=''
let previousOp=''
let newOp
let hidString
let displayStr=''
let delPressed
let errorState
let resetPressed
let maxLength = 8

//for default theme:
themeSelect1.click()

themeChanger = ()=>{
    for (let i = 0; i < 3; i++){
        if (arrTheme[i].children[0] == knob){
            currentTheme = arrTheme[i].id.split('Select').join('')
        }
    }
    for (let i = 0; i < 3; i++){
        arrTheme[i].addEventListener('click', ()=>{
            if (arrTheme[i].children[0] == knob){
            arrTheme[i].children[0].remove()
            }
            arrTheme[i].appendChild(knob)
            if (arrTheme[i] == themeSelect1) {
                theme1Apply()
                localStorage.clear()
                localStorage.setItem('color-scheme', 'themeSelect1')
            }
            else if (arrTheme[i] == themeSelect2) {
                theme2Apply()
                localStorage.clear()
                localStorage.setItem('color-scheme', 'themeSelect2')
            }
            else if (arrTheme[i] == themeSelect3) {
                theme3Apply()
                localStorage.clear()
                localStorage.setItem('color-scheme', 'themeSelect3')
            }
        })
    }
}
theme1Apply = ()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor = 'hsl(222, 26%, 31%)'
    themeSelectBack.style.backgroundColor = 'hsl(223, 31%, 20%)'
    keypadBack.style.backgroundColor = 'hsl(223, 31%, 20%)'
    screenHolder.style.backgroundColor = 'hsl(224, 36%, 15%)'
    for (let i=0; i<keypadNums.length;i++){
        keypadNums[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
        keypadNums[i].style.boxShadow = '1px 3px 1px hsl(210, 1%, 67%)'
        keypadNums[i].style.color = 'hsl(221, 14%, 31%)'
    }
    equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalBtn.style.boxShadow = '1px 3px 1px  hsl(6, 70%, 34%)'
    toggle.style.backgroundColor = 'hsl(6, 63%, 50%)'
    for (let i=0; i<resetAndDel.length;i++){
        resetAndDel[i].style.backgroundColor = 'hsl(225, 21%, 49%)'
        resetAndDel[i].style.boxShadow = '1px 3px 1px hsl(224, 28%, 35%)'
    }
    screenHolder.style.color = 'hsl(0, 0%, 100%)'
    headTheme.children[0].style.color = 'hsl(0, 0%, 100%)'
    headTheme.children[1].style.color = 'hsl(0, 0%, 100%)'
    attribution.style.color = 'hsl(0, 0%, 100%)'
    for (let i=0; i<attLinks.length;i++){
        attLinks[i].style.color = 'hsl(6, 63%, 50%)'
    }
}
theme2Apply = ()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor = 'hsl(0, 0%, 90%)'
    themeSelectBack.style.backgroundColor = 'hsl(0, 5%, 81%)'
    keypadBack.style.backgroundColor = 'hsl(0, 5%, 81%)'
    screenHolder.style.backgroundColor = 'hsl(0, 0%, 93%)'
    for (let i=0; i<keypadNums.length;i++){
        keypadNums[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
        keypadNums[i].style.boxShadow = '1px 3px 1px hsl(210, 1%, 67%)'
        keypadNums[i].style.color = 'hsl(221, 14%, 31%)'

    }
    equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalBtn.style.boxShadow = '1px 3px 1px  hsl(25, 99%, 27%)'
    toggle.style.backgroundColor = 'hsl(25, 98%, 40%)'
    for (let i=0;i<resetAndDel.length;i++){
        resetAndDel[i].style.backgroundColor = 'hsl(180, 29%, 44%)'
        resetAndDel[i].style.boxShadow = '1px 3px 1px hsl(180, 29%, 34%)'
    }
    screenHolder.style.color = 'hsl(60, 10%, 19%)'
    headTheme.children[0].style.color = 'hsl(221, 14%, 31%)'
    headTheme.children[1].style.color = 'hsl(221, 14%, 31%)'
    attribution.style.color = 'hsl(221, 14%, 31%)'
    for (let i=0; i<attLinks.length;i++){
        attLinks[i].style.color = 'hsl(25, 98%, 40%)'
    }
}
theme3Apply = ()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor = 'hsl(268, 75%, 9%)'
    themeSelectBack.style.backgroundColor = 'hsl(268, 71%, 12%)'
    keypadBack.style.backgroundColor = 'hsl(268, 71%, 12%)'
    screenHolder.style.backgroundColor = 'hsl(268, 71%, 12%)'
    for (let i=0; i<keypadNums.length;i++){
        keypadNums[i].style.backgroundColor = 'hsl(281, 89%, 26%)'
        keypadNums[i].style.boxShadow = '1px 3px 1px hsl(285, 91%, 52%)'
        keypadNums[i].style.color = 'hsl(52, 100%, 62%)'

    }
    equalBtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equalBtn.style.boxShadow = '1px 3px 1px  hsl(177, 92%, 70%)'
    toggle.style.backgroundColor = 'hsl(176, 100%, 44%)'
    for (let i=0;i<resetAndDel.length;i++){
        resetAndDel[i].style.backgroundColor = 'hsl(268, 47%, 43%)'
        resetAndDel[i].style.boxShadow = '1px 3px 1px hsl(290, 70%, 36%)'
    }
    screenHolder.style.color = 'hsl(52, 100%, 62%)'
    headTheme.children[0].style.color = 'hsl(52, 100%, 62%)'
    headTheme.children[1].style.color = 'hsl(52, 100%, 62%)'
    attribution.style.color = 'hsl(52, 100%, 62%)'
    for (let i=0; i<attLinks.length;i++){
        attLinks[i].style.color = 'hsl(176, 100%, 44%)'
    }
}
themeChanger()

//for saved theme:
const preferredTheme = localStorage.getItem('color-scheme')
if (preferredTheme!=null) {
    for (let i = 0; i < 3; i++){
        if (arrTheme[i].children[0] == knob){
        arrTheme[i].children[0].remove()
        }
    }
    if (preferredTheme == 'themeSelect1') {
        theme1Apply()
        themeSelect1.appendChild(knob)
    }
    else if (preferredTheme == 'themeSelect2') {
        theme2Apply()
        themeSelect2.appendChild(knob)
    }
    else if (preferredTheme == 'themeSelect3') {
        theme3Apply()
        themeSelect3.appendChild(knob)
    }
}

reset = ()=>{
    seenArr=[];hiddenArr=[];nums=[];currentOp='';displayStr='';opsArr=[]
}

//main functions:
isOperator =(something)=>{
    let arr1 = ['+', '-', 'x', '/']
    for (let i = 0; i < arr1.length; i++){
        if (something == arr1[i]) {
            return true
        }
    }
    return false
}
isFunctionKey = (something)=>{
    let arr1 = ['DEL', 'RESET']
    for (let i = 0; i < arr1.length; i++){
        if (something == arr1[i]) return true
    }
    return false
}
solve = (num1, op, num2)=>{
    let tempNum1 = Number(num1)
    let tempNum2 = Number(num2)
    let solution
    switch (op) {
        case '+':
            return (tempNum1+tempNum2).toString()
            break;
        case '-':
            return (tempNum1-tempNum2).toString()
            break;
        case '/':
            if (tempNum2!=0){
                let tempRound = (tempNum1/tempNum2).toString().length
                if (tempRound>=maxLength){
                    return (tempNum1/tempNum2).toFixed(maxLength)
                }
                else return tempNum1/tempNum2
            }
            return 'undefined'
            break;
        case 'x':
            return (tempNum1*tempNum2).toString()
            break;
        default:
            break;
    }
}
numCheck = ()=>{
    let firstNumEnd
    let firstNumEstab = false
    for (let i=0; i<hiddenArr.length;i++){
        //if op at the end with number before it:
        if (isOperator(hiddenArr[hiddenArr.length-1])||hiddenArr[hiddenArr.length-1]=='='){
            if (typeof Number(hiddenArr[hiddenArr.length-2])=='number'&&hiddenArr.length-1!=0&&!isOperator(hiddenArr[hiddenArr.length-2])){
                firstNumEnd=hiddenArr.length-2
                firstNumEstab = true
                if (currentBtn =='='){}
                else currentOp = hiddenArr[hiddenArr.length-1]
                //console.log('first num estab...')
                break
            }
        }
    }
    //starting at said number, going backwards...
    let j = firstNumEnd
    while(j>-1){
        if (isOperator(hiddenArr[j])){
            if (hiddenArr[j]=='-'){}
            else break
        }
        else if (hiddenArr[j]=='.'&&hiddenArr[j-1]=='.') {
            firstArrNum.push(hiddenArr[j])
            break
        }
        firstArrNum.push(hiddenArr[j])
        j--
    }
    firstArrNum=firstArrNum.reverse()
    //console.log(`firstArrNum = [${firstArrNum}]`)
    nums.push(firstArrNum.join(''))
    if (firstNumEstab) {
        hiddenArr=[];firstArrNum=[]
        //console.log(nums)
    }
}
arrayFilter = ()=>{
    //because of the bug I couldn't fix for nums array with the extra empty strings:
    let tempArr = []
    for (let i=0; i<nums.length;i++){
        if (nums[i]!=''){
            tempArr.push(nums[i])
        }
    }
    nums=tempArr
}
lastDisplay = ()=>{
    if (seenArr.join('')==NaN) {screen.innerHTML = 'ERROR';reset()}
    screen.innerHTML = seenArr.join('')
    if (seenArr.length>maxLength) screen.innerHTML = 'ERROR'
}
firstDisplay = ()=>{
    seenArr=hiddenArr
    if (hiddenArr.length!=0) displayStr = hiddenArr.join('')
    else if (hiddenArr.length==0) {
        if (!delPressed) seenArr=displayStr.split('')
        else if (delPressed) seenArr=hiddenArr
    }
    screen.innerHTML = seenArr.join('')
    //if (isOperator(currentBtn)&&hiddenArr.length==0) screen.innerHTML = displayStr
    if (errorState) screen.innerHTML = 'ERROR'
    if (resetPressed) screen.innerHTML = seenArr.join('')
}
needsSolved = ()=>{
    //if nums array has two numbers before more math can occur:
    if (nums.length==2) return true
    else return false
}
//keypad:
for (let i = 0; i < buttons.length; i++){
     buttons[i].addEventListener('click', ()=>{
        delPressed = false
        resetPressed = false
        errorState = false
        currentBtn = buttons[i].innerHTML

        if (isOperator(currentBtn)) opsArr.push(currentBtn)
        if (opsArr.length!=0){
            currentOp = opsArr[opsArr.length-1]
            if (opsArr.length>1) previousOp = opsArr[opsArr.length-2]
        }


        //special case where math continues after equal:
        if (hiddenArr.length>maxLength){errorState = true}
        if (hiddenArr.length==0&&isOperator(currentBtn)&&seenArr.length!=0) {
            displayStr=seenArr.join('')
            currentOp=currentBtn
            hiddenArr=seenArr
        }
        //equal removed from isFunctionKey()
        if (!isFunctionKey(currentBtn)) hiddenArr.push(currentBtn)

        if (currentBtn == 'RESET'){resetPressed = true;reset();lastDisplay();firstDisplay()}
        if (currentBtn == 'DEL'){
            delPressed = true
            if (isOperator(hiddenArr[hiddenArr.length-1])){}
            else if (!isOperator(hiddenArr[hiddenArr.length-1])){
                hiddenArr.pop()
            }
        }
        numCheck()
        arrayFilter()
        firstDisplay()

        if (currentBtn == '='){
            if (currentOp!=''){seenArr = (solve(nums[0], currentOp, nums[1])).toString().split('');lastDisplay()}
            else if (currentOp==''){seenArr=nums[0].split('');hiddenArr=nums[0].split('');lastDisplay()}
            nums=[]
        }
        if (needsSolved()){
            seenArr = (solve(nums[0], previousOp, nums[1])).toString().split('')
            lastDisplay()
            nums=[]
            if (hiddenArr.length==0&&isOperator(currentBtn)&&seenArr.length!=0){
                nums[0]=seenArr.join('')
            }
        }
        //console.log(`currentBtn is ${currentBtn}`)
        //console.log(`hiddenArr is [${hiddenArr}], currentBtn is ${currentBtn}`)
        //console.log(opsArr)
    })
}
