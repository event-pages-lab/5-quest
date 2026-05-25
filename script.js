const correctPassword = "1";

const passwordScreen = document.getElementById("passwordScreen");
const openingScreen = document.getElementById("openingScreen");
const titleScreen = document.getElementById("titleScreen");
const introScreen = document.getElementById("introScreen");
const questScreen = document.getElementById("questScreen");
const endingScreen = document.getElementById("endingScreen");

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");

const openingElement = document.getElementById("openingText");
const openingButton = document.getElementById("openingButton");

const startButton = document.getElementById("startButton");
const introNextButton = document.getElementById("introNextButton");
const messageText = document.getElementById("messageText");

const subQuestSection = document.getElementById("subQuestSection");
const secretQuestArea = document.getElementById("secretQuestArea");

const randomQuestTitle = document.getElementById("randomQuestTitle");
const randomQuestText = document.getElementById("randomQuestText");
const randomQuestButton = document.getElementById("randomQuestButton");
const randomQuestClearButton = document.getElementById("randomQuestClearButton");
const randomQuestHistory = document.getElementById("randomQuestHistory");
const randomQuestHistoryList = document.getElementById("randomQuestHistoryList");

const letterScreen = document.getElementById("letterScreen");
const closeLetterButton = document.getElementById("closeLetterButton");
const finalScreen = document.getElementById("finalScreen");

const endingButton = document.getElementById("endingButton");
const endingText = document.getElementById("endingText");
const nextDayButton = document.getElementById("nextDayButton");

const clearModal = document.getElementById("clearModal");
const clearModalText = clearModal.querySelector("p");

const days = [
  {
    day: "DAY 1──",
    intro: `
これは<br>
あたらしい冒険へ向かう<br>
とくべつなクエスト…
`,
    ending: `
DAY 1 CLEAR!

長いたたかいのあとは
まずはHPを回復するのだ。
`
  },
  {
    day: "DAY 2──",
    intro: `
旅は まだ つづく。<br>
きょうは<br>
うまいものと景色をめぐる<br>
クエスト…
`,
    ending: `
DAY 2 CLEAR!

うまいものと景色が
冒険者の心を満たした。
`
  },
  {
    day: "DAY 3──",
    intro: `
最後の朝がきた。<br>
しゅんを待つのは<br>
あたらしい冒険への<br>
クエスト…
`,
    ending: `
旅の終わりに<br>
しゅんは<br>
ダーマ神殿へたどりついた。<br><br>
ここは<br>
あたらしい職業と<br>
あたらしい冒険を選ぶ場所…
`
  }
];

const randomQuests = [
  {
    title: "いい景色を見つけよ",
    text: "しゅんが「おお…」となる景色を探せ。"
  },
  {
    title: "うまいものを発見せよ",
    text: "今日いちばんテンションが上がる一品を見つけよ。"
  },
  {
    title: "写真を1枚残せ",
    text: "この旅の記録として、思い出の写真を1枚撮ろう。"
  },
  {
    title: "乾杯せよ",
    text: "ここまでの冒険と、これからの冒険に乾杯しよう。"
  },
  {
    title: "のんびり歩け",
    text: "目的地に急がず、少しだけ寄り道してみよう。"
  }
];

let currentDay = 0;
let introStep = 0;
let openingIndex = 0;
let currentRandomQuest = null;

const openingText = `
2026年 5月──

長いたたかいを終えた
ひとりの戦士がいた。

これは
あたらしい冒険へ向かう
旅の記録である。
`;

function showModal(html, time = 1200) {
  clearModalText.innerHTML = html;
  clearModal.classList.remove("hidden");
  clearModal.classList.add("show");

  setTimeout(() => {
    clearModal.classList.remove("show");
    clearModal.classList.add("hidden");
    clearModalText.innerHTML = "QUEST CLEAR!";
  }, time);
}

function startOpening() {
  openingElement.innerHTML = "";
  openingButton.classList.add("hidden");
  openingIndex = 0;
  typeOpeningText();
}

function typeOpeningText() {
  if (openingIndex < openingText.length) {
    openingElement.innerHTML += openingText.charAt(openingIndex);
    openingIndex++;
    setTimeout(typeOpeningText, 70);
  } else {
    openingButton.classList.remove("hidden");
  }
}

passwordButton.addEventListener("click", () => {
  if (passwordInput.value === correctPassword) {
    passwordScreen.classList.add("hidden");
    openingScreen.classList.remove("hidden");
    startOpening();
  } else {
    alert("あいことばが ちがいます");
  }
});

openingButton.addEventListener("click", () => {
  openingScreen.classList.add("hidden");
  titleScreen.classList.remove("hidden");
});

startButton.addEventListener("click", () => {
  titleScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");

  messageText.classList.remove("day-text");
  messageText.innerHTML = days[currentDay].intro;
  introNextButton.textContent = "▶ つぎへ";
  introStep = 0;
});

introNextButton.addEventListener("click", () => {
  if (introStep === 0) {
    messageText.innerHTML = days[currentDay].day;
    messageText.classList.add("day-text");
    introNextButton.textContent = "▶ はじめる";
    introStep = 1;
    return;
  }

  resetQuestScreen();
  introScreen.classList.add("hidden");
  questScreen.classList.remove("hidden");
});

function resetQuestScreen() {
  endingButton.textContent = `▶ ${currentDay + 1}日目を終える`;
  subQuestSection.classList.add("hidden");

  document.querySelectorAll(".sub-quest-area").forEach(area => {
    area.classList.add("hidden");
  });

  secretQuestArea.classList.remove("hidden");

  document.querySelectorAll(".quest-card").forEach(card => {
    if (!card.classList.contains("random-quest")) {
      card.classList.remove("clear");
    }
  });

  document.querySelectorAll(".clear-button").forEach(button => {
    if (button.id !== "randomQuestClearButton") {
      button.disabled = false;
      button.textContent = "▶ CLEAR";
    }
  });

  currentRandomQuest = null;
  randomQuestTitle.textContent = "？？？";
  randomQuestText.textContent = "ボタンを押すと、今日のクエストが現れる…";
  randomQuestButton.textContent = "▶ クエストをひく";
  randomQuestClearButton.classList.add("hidden");
}

// 通常CLEARボタン
document.querySelectorAll(".clear-button").forEach(button => {
  if (button.id === "randomQuestClearButton") return;

  button.addEventListener("click", () => {
    if (button.disabled) return;

    const card = button.closest(".quest-card");

    card.classList.add("clear");
    button.disabled = true;
    button.textContent = "CLEAR済";

    if (card.classList.contains("main-quest")) {
      const targetId = card.dataset.unlock;

      if (targetId) {
        subQuestSection.classList.remove("hidden");
        document.getElementById(targetId).classList.remove("hidden");

        showModal(`
          CLEAR！<br>
          <span class="unlock-text">サブクエストが開放された！</span>
        `, 1400);

        return;
      }
    }

    showModal("QUEST CLEAR!");
  });
});

// ランダムクエストをひく
randomQuestButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * randomQuests.length);
  const quest = randomQuests[randomIndex];

  currentRandomQuest = quest;

  randomQuestTitle.textContent = quest.title;
  randomQuestText.textContent = quest.text;
  randomQuestButton.textContent = "▶ もう一度ひく";
  randomQuestClearButton.classList.remove("hidden");
});

// ランダムクエストCLEAR
randomQuestClearButton.addEventListener("click", () => {
  if (!currentRandomQuest) return;

  const dayLabel = days[currentDay].day.replace("──", "");

  const li = document.createElement("li");
  li.textContent = `${dayLabel}：${currentRandomQuest.title}`;
  randomQuestHistoryList.appendChild(li);

  randomQuestHistory.classList.remove("hidden");

  showModal("RANDOM QUEST CLEAR!");

  currentRandomQuest = null;
  randomQuestTitle.textContent = "？？？";
  randomQuestText.textContent = "ボタンを押すと、今日のクエストが現れる…";
  randomQuestButton.textContent = "▶ クエストをひく";
  randomQuestClearButton.classList.add("hidden");
});

endingButton.addEventListener("click", () => {
  questScreen.classList.add("hidden");
  endingScreen.classList.remove("hidden");

  endingText.innerHTML =
    days[currentDay].ending.replace(/\n/g, "<br>");
    nextDayButton.textContent = "▶ つぎへ";
});

nextDayButton.addEventListener("click", () => {
  if (currentDay === days.length - 1) {
    endingScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    return;
  }

  currentDay++;

  endingScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");

  messageText.classList.remove("day-text");
  messageText.innerHTML = days[currentDay].intro;

  introNextButton.textContent = "▶ つぎへ";
  introStep = 0;
});

closeLetterButton.addEventListener("click", () => {
  letterScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
});