## Litho webagency site
📌 웹에이젼시 사이트 클론 코딩 

📌 반응형 웹사이트 

📌 사이트 주소 : http://oiokoo.dothome.co.kr/port2/

## 프로젝트의 목적
* 마크업 숙련도를 높이기 위함
* 패럴럭스 효과 숙련도를 높이기 위함


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

---
* 카드 회전 화면

![카드회전](https://user-images.githubusercontent.com/77954029/126484601-4483dba1-b39b-454c-82ea-ae07345eed71.gif)

```
.content ul li .content-gap .content-wrap .front-face{width:100%;position:relative;z-index:2;transform:perspective(700px) rotateY(0deg);transition:all 1.5s;}
.content ul li:hover .content-gap .content-wrap .front-face{z-index:1;transform:perspective(700px) rotateY(-180deg);backface-visibility: hidden;}

.content ul li .content-gap .content-wrap .back-face{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-image:linear-gradient(to bottom,#ffc996 0%,#faf6f3 50% ,#faf6f3 60% ,#ffd8a6 100%);transform: perspective(700px) rotateY(180deg);transition:all 1.5s;backface-visibility: hidden;}
.content ul li:hover .content-gap .content-wrap .back-face{z-index:2;transform: perspective(700px) rotateY(0deg);}
```
- 각 카드의 앞면과 뒷면에 z-index의 값과 perspective(), rotateY() 기본 값을 지정해둔 뒤, 카드 hover시 해당 값들을 수정하여 180도 회전 효과를 나타냄 

---
* active gallery 화면

![포폴2갤러리](https://user-images.githubusercontent.com/77954029/126484515-fe27eb63-b4b4-492d-a333-7e2572a2bbc3.gif)

- 각 버튼 주제에 맞게 이미지가 정렬되는 효과 ,scale 값을 0에서 1로 조정하여 zoom효과를 나타냄
- 가방 이미지는 다른 이미지 높이의 2배라 나열형으로 코딩

---
* 동영상 모달 화면

![동영상1](https://user-images.githubusercontent.com/77954029/126485155-b6cf815d-f7ea-4022-9504-c4affff986d2.gif)

- 이모티콘에 Hover시 색상 변경 효과
- 재생 버튼을 누르면 동영상 모달 창이 나타난다

---
* 이미지 대비 효과

![이미지대조](https://user-images.githubusercontent.com/77954029/126472749-bf1267b6-d9a9-41b5-8738-550804f52ee8.png)
- 기존 이미지는 filter: contrast(0) 적용 후 Hover시 conttast(150%) 로 조정함

---
* 이미지 슬라이드 화면 

![마스크](https://user-images.githubusercontent.com/77954029/126486067-d40befcb-65ca-46ba-9264-ee36e4ecb5cb.gif)

- 3개의 슬라이드 박스를 position:absolute로 설정하여 z-index를 지정한다. 각 슬라이드 박스 아래 4개의 자식 블록 요소를 만든 후 공통 배경화면을 fixed로 지정한다.
- 슬라이드의 박스의 z-index 값을 조정, 4가지 자식 박스들의 넓이는 0%에서 25%로 조정하는 방법을 통하여 마스크 효과를 낸다.
- 좌우 화살표 버튼 슬라이드와 터치 슬라이드를 구현함 

---
* 인스타그램 박스 화면

![인스타그램](https://user-images.githubusercontent.com/77954029/126472752-321d3ab8-fc8c-45dc-a572-a40b6a65b1be.png)

- 어플 인스타그램의 UI와 비슷한 박스들을 구성. 이미지에 마우스 올릴시 화면 확대 효과 

---
* footer 이메일폼 화면

![이메일폼](https://user-images.githubusercontent.com/77954029/126472747-02f52992-3c74-4f18-bd49-8c514c9a1fc1.png)


![스크린샷 2021-07-22 오후 3 22 58](https://user-images.githubusercontent.com/77954029/126598671-e20de08b-8304-4b3e-9a8a-bd3d6fb574ad.png)


- post 방법으로 php 파일을 활용하여 이메일 폼의 내용을 전달함
- 이메일 칸이 공백인 상태에서 전송 버튼을 누를시 경고창이 나타남 
- 메일 전송 성공시 하단에 내용을 알려줌 


