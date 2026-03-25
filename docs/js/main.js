document.getElementById("year").textContent = String(new Date().getFullYear());

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function handleClick() {
    if (isMobile()) {
      // 모바일 → 전화 연결
      window.location.href = "tel:01041867415";
    } else {
      // PC → 팝업 열기
      document.getElementById("popup").style.display = "block";
    }
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
