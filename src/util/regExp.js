/* eslint-disable no-useless-escape */
//이메일 주소의 시작은 숫자/알파베소문자/대문자
//첫자리뒤에는 -_.이 들어올 수 있다.
//@는 필수로 들어와야한다.
//@뒤에는 문자가 들어와야한다.
//.뒤에는 2또는 3 길이의 문자열이 들어와야한다.
// '^' 입력값의 시작과 일치
// 표현식? :표현식이 없거나 하나만 포함된다.
// * : 없거나 있음(여러개 포함)
//[내부] : 내부문자들중 하나.
//{2,3} 최소 2개 이상 최대3개 이하
export const emailRegExp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;