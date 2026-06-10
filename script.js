// التمرير إلى الأقسام
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// الانتقال إلى الديسكورد
function goToDiscord() {
  const discordUrl = "https://discord.com/channels/1235670624823804046/1353626994415243284"; // عدل الرابط هنا
  window.open(discordUrl, "_blank");
}

// AI الحقيقي المبسط
function realAiReply() {
  const input = document.getElementById("aiInput");
  const log = document.getElementById("aiLog");
  const text = input.value.trim();
  if (!text) return;

  // إضافة رسالة المستخدم
  const userLine = document.createElement("div");
  userLine.textContent = "أنت: " + text;
  userLine.style.marginTop = "0.3rem";
  log.appendChild(userLine);

  // تجهيز الرد
  const replyLine = document.createElement("div");
  replyLine.style.color = "#e5e7eb";
  replyLine.style.marginTop = "0.15rem";

  const lower = text.toLowerCase();

  // ردود ذكية حسب الكلمات
  if (lower.includes("قوانين") || lower.includes("القيادة")) {
    replyLine.textContent =
      "AI: قوانين القيادة العامة للطيران تشمل منع المباشرة فوق المنتزة، إلزامية التصوير، المباشرة فقط في موجة الرئاسة، والطيرات المسموحة (هليكوبتر 1 و 3).";
  } else if (lower.includes("الطيرات") || lower.includes("مسموحة")) {
    replyLine.textContent =
      "AI: الطيرات المسموحة هي هليكوبتر 1 وهليكوبتر 3 فقط. الطيرات الحربية تحتاج إذن من مسؤول أفراد الطيران.";
  } else if (lower.includes("تسجيل") || lower.includes("دخول") || lower.includes("مباشرة")) {
    replyLine.textContent =
      "AI: يمنع المباشرة بدون تسجيل الدخول. يجب التوجه لتردد الرئاسة فقط وعدم المباشرة أثناء وجودك في قطاع آخر.";
  } else if (lower.includes("اكواد") || lower.includes("كود")) {
    replyLine.textContent =
      "AI: الكود الرسمي هو: ⚔️ شــاهــيــن - 00 | أفراد كتيبة طيران الأمن الجوي | رئاسة أمن الدولة ⚔️.";
  } else {
    replyLine.textContent =
      "AI: لم أفهم سؤالك بشكل كامل، لكن يمكنك الرجوع لقسم القوانين أو إعادة صياغة سؤالك.";
  }

  log.appendChild(replyLine);
  log.scrollTop = log.scrollHeight;
  input.value = "";
}

// الانتظار لمدة ثانية
function startWait() {
  const indicator = document.getElementById("waitIndicator");
  indicator.innerHTML = "";

  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const text = document.createElement("span");
  text.textContent = "انتظار جاري لمدة ثانية...";

  indicator.appendChild(spinner);
  indicator.appendChild(text);

  setTimeout(() => {
    indicator.innerHTML = "تم إنهاء الانتظار بنجاح.";
  }, 1000);
}
