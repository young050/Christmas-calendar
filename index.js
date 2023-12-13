// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "크리스마스 d-day 시작!" },
  { "number": 2, "message": "크리스마스에 무엇을 할 계획인가요?" },
  { "number": 3, "message": "올해가 가기전에 보고싶은 사람은?" },
  { "number": 4, "message": "당신은 어떤사람인가요?" },
  { "number": 5, "message": "오늘 먹고싶은 음식은?" },
  { "number": 6, "message": "내년에 하고싶은 버킷리스트는?" },
  { "number": 7, "message": "나를 한문장으로 표현한다면?" },
  { "number": 8, "message": "만약 당신이 한달뒤에 죽는다면?" },
  { "number": 9, "message": "평생 딱 한권의 책만 읽어야한다면?" },
  { "number": 10, "message": "나에게 가장 소중한 사람은?" },
  { "number": 11, "message": "내가 가장 싫어하는 사람은?" },
  { "number": 12, "message": "나한테 가장 소중한 물건은?" },
  { "number": 13, "message": "살면서 가장 행복했던 순간은?" },
  { "number": 14, "message": "살면서 가장 슬펐던 순간은?" },
  { "number": 15, "message": "살면서 가장 화가났던 순간은?" },
  { "number": 16, "message": "무인도에 딱 한사람만 데리고 갈수있다면?" },
  { "number": 17, "message": "평생 딱 한곡만 들을수있다면?" },
  { "number": 18, "message": "나에게 초능력이 하나 생긴다면?" },
  { "number": 19, "message": "만약 한달뒤 지구가 멸망한다면?" },
  { "number": 20, "message": "당신의 영혼이 누군가와 바뀐다면?" },
  { "number": 21, "message": "가장 기억에남는 드라마, 영화는?" },
  { "number": 22, "message": "이제 곧 크리스마스!" },
  { "number": 23, "message": "당신에게 행복이 가득하길!" },
  { "number": 24, "message": "메리 크리스마스!" }
];

