## Litho webagency site
📌 웹에이젼시 사이트 클론 코딩 
📌 반응형 웹사이트 
📌 사이트 주소 : https://ginny-choi.github.io/portpolio2

## 프로젝트의 목적
* 마크업 숙련도를 높이기 위함
* 패럴럭스 효과 숙련도를 높이기 위함

## HTML ,CSS 코드 유효성 통과 
* 링크주소
* 링크주소

## 프로젝트 화면 및 소개
* 메인화면
![화면 기록 2021-07-21 오후 6 45 30](https://user-images.githubusercontent.com/77954029/126469389-63d87bb9-f70a-4577-ae39-51cb9f289113.gif)
- client X 값을 활용한 글자의 위치 정렬
- 헤더의 메뉴는 서브 메뉴와 서브서브 메뉴인 3뎁스 메뉴로 구성
- 스크롤 버튼 클릭시 하단의 화면으로 이동함 

---
* 우측 모달창 화면
![모달창](https://user-images.githubusercontent.com/77954029/126472745-c6992c9c-5d0b-48e3-97f8-295a660bd713.png)
- 우측의 Demo 버튼 클릭시 addClass가 되어 모달창 나타남 
- postion:fixed 설정 후 right 위치값을 조정하여 클래스 지정
- 모달창 등장시 메인 화면은 스크롤이 되지 않음 

+ 카드 회전 화면
![카드회전](https://user-images.githubusercontent.com/77954029/126472755-da1a12b4-cca8-4f67-b30a-0c8a0e54bd13.png)

```
.content ul li .content-gap .content-wrap .front-face{width:100%;position:relative;z-index:2;transform:perspective(700px) rotateY(0deg);transition:all 1.5s;}
.content ul li:hover .content-gap .content-wrap .front-face{z-index:1;transform:perspective(700px) rotateY(-180deg);backface-visibility: hidden;}

.content ul li .content-gap .content-wrap .back-face{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-image:linear-gradient(to bottom,#ffc996 0%,#faf6f3 50% ,#faf6f3 60% ,#ffd8a6 100%);transform: perspective(700px) rotateY(180deg);transition:all 1.5s;backface-visibility: hidden;}
.content ul li:hover .content-gap .content-wrap .back-face{z-index:2;transform: perspective(700px) rotateY(0deg);}
```
- 각 카드의 앞면과 뒷면에 z-index의 값과 perspective(), rotateY() 기본 값을 지정해둔 뒤, 카드 hover시 해당 값들을 수정하여 180도 회전 효과를 나타냄 

---
* active gallery 화면
![갤러리](https://user-images.githubusercontent.com/77954029/126472702-36e3b5ee-1164-4fb5-ab9e-06c5b938920a.png)
![갤러리2](https://user-images.githubusercontent.com/77954029/126472724-7c92b691-9949-44c8-8dfe-e53a6c8c2543.png)

- 각 버튼 주제에 맞게 이미지가 정렬되는 효과 ,scale 값을 0에서 1로 조정하여 zoom효과를 나타냄
- 가방 이미지는 다른 이미지 높이의 2배라 나열형으로 코딩 함 

