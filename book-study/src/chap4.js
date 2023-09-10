const A = require('./chap3');
const crypto = require('crypto');
const path = require('path');


global.message = '테스트 용도';
A();
/**
 * global 객체의 속성에 값을 대입해 파일 간에 데이터를 고유할 수 있다.
 */

console.log("Base64",crypto.createHash('sha512').update('testPAssword').digest('base64'));
console.log('hex',crypto.createHash('sha512').update('testPAssword').digest('hex'));

/**
 * creatHash : 사용할 해시 알고리즘을 넣는다 
 * update : 변환할 문자열을 넣는다.
 * digest : 인코딩할 알고리즘을 넣는다.
 */
const fs = require('fs');
const filePath = path.join(__dirname+path.sep+'read.txt');
fs.readFile(filePath,(err, data) => {
    if(err) {
        throw err;
    }
    // console.log(data);
    // console.log(data.toString());
});

/**
 * readFile의 결과물은 Buffer라는 형식으로 제공한다 
 * 
 */
//위의 코드를 Promise로 변환

const asyncFile = async () => {
    try{
        const data = await fs.promises.readFile(filePath,'utf8');
        return data;
    }catch (err){
        console.error(err);
    }
}

asyncFile().then(data => {
    console.log(data);
})