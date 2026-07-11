const textElement = document.getElementById('dynamic-text');
// الكلمات التي ستظهر بالتتابع
const phrases = ['HTML', 'CSS', 'JavaScript'];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // حالة المسح
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        // حالة الكتابة
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    // منطق التبديل بين الكتابة والمسح
    if (!isDeleting && charIndex === currentPhrase.length) {
        // انتظر ثانيتين عند اكتمال الكلمة
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // انتقل للكلمة التالية بعد المسح
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// تشغيل الفنكشن عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});
