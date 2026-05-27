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
`,
    quests: [
    {
      mainTitle: "冒険の地へ向かえ",
      mainText: "未知なる旅が、いま始まる──",
      sub: [
        {
          title: "景色をながめよ",
          text: "旅の始まりを、目に焼き付けよう。"
        },
        {
          title: "飲み物を確保せよ",
          text: "冒険には回復アイテムが必要だ。"
        }
      ]
    },

    {
      mainTitle: "この地のうまいものを食べよ",
      mainText: "おいしいものは冒険者を強くする。",
      sub: [
        {
          title: "乾杯せよ",
          text: "新しい冒険のはじまりを祝おう。"
        },
        {
          title: "忘れられない味に出会え",
          text: "五感で忘れられない思い出を作ろう。"
        }
      ]
    },

    {
      mainTitle: "思い出を記録せよ",
      mainText: "今日の旅を未来のたからものにしよう。",
      sub: [
        {
          title: "少し寄り道せよ",
          text: "予定外の発見があるかもしれない。"
        },
        {
          title: "明日の作戦を立てよ",
          text: "次の冒険に備えて、のんびり作戦会議。"
        }
      ]
    }
  ],

  secret: {
    title: "ふたりの写真を撮れ",
    text: "旅のはじまりを、1枚の記録に残そう。"
  }
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
`,
  quests: [
    {
      mainTitle: "未知のスポットを探索せよ",
      mainText: "気になる場所へ突撃しよう。",
      sub: [
        {
          title: "気になった場所へ入れ",
          text: "直感を信じるのも冒険だ。"
        },
        {
          title: "ご当地アイテムを発見せよ",
          text: "その土地ならではの宝を探そう。"
        }
      ]
    },
    {
      mainTitle: "今日だけの思い出を作れ",
      mainText: "今しかない時間を楽しもう。",
      sub: [
        {
          title: "楽しく乾杯せよ",
          text: "今日の冒険について語り合おう。"
        },
        {
          title: "変な写真を撮れ",
          text: "旅のテンションを記録せよ。"
        }
      ]
    },

    {
      mainTitle: "宿屋でHPを回復せよ",
      mainText: "冒険者には休息も必要である。",
      sub: [
        {
          title: "温泉を楽しめ",
          text: "HPを全回復しよう。"
        },
        {
          title: "明日の作戦を立てよ",
          text: "冒険最終日に備えて、のんびり作戦会議。"
        }
      ]
    }
  ],

  secret: {
    title: "今日いちばんの景色を見つけよ",
    text: "心に残る景色を、ふたりで見届けよう。"
  }
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
`,
  quests: [
    {
      mainTitle: "旅のお気に入りを見つけよ",
      mainText: "最後に最高の思い出を作ろう。",
      sub: [
        {
          title: "おみやげを探せ",
          text: "旅の記録を持ち帰ろう。"
        },
        {
          title: "うまいものを食べよ",
          text: "最後まで全力で楽しむべし。"
        }
      ]
    },
    {
      mainTitle: "旅最終日を楽しもう",
      mainText: "終わりまで思いきり冒険しよう。",
      sub: [
        {
          title: "景色を目に焼き付けよ",
          text: "この旅の記憶を忘れないように。"
        },
        {
          title: "のんびり過ごせ",
          text: "焦らない時間も大切だ。"
        }
      ]
    },
    {
      mainTitle: "次の冒険への準備をせよ",
      mainText: "新しい旅は、もう始まっている。",
      sub: [
        {
          title: "これからの話をせよ",
          text: "次の冒険について語り合おう。"
        },
        {
          title: "未来への装備を整えよ",
          text: "ゆっくりでも、一歩ずつ進めばいい。"
        }
      ]
    }
  ],

  secret: {
    title: "次の冒険の作戦を立てよ",
    text: "旅の終わりに、これからの話を少しだけしよう。"
  }
}];


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
  secretQuestArea.classList.remove("hidden");
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
  secretQuestArea.querySelector(".secret-quest h3").textContent = "？？？？？？";
  secretQuestArea.querySelector(".secret-quest p:not(.quest-number)").textContent =
    "まだ条件を満たしていないようだ…";
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
    checkSecretUnlock();

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
  function checkSecretUnlock() {
    const clearedQuests =
      document.querySelectorAll(".quest-card.clear").length;

    const secretTitle =secretQuestArea.querySelector(".secret-quest h3");

    // 4つ以上CLEARで解放
    if (
      clearedQuests >= 4 &&
      secretTitle.textContent === "？？？？？？"
    ) {

      // SECRET内容を表示
      secretTitle.textContent =
        days[currentDay].secret.title;

      secretQuestArea
        .querySelector(".secret-quest p:not(.quest-number)")
        .textContent =
          days[currentDay].secret.text;

      // 解放演出
      showModal(`
        SECRET QUEST 解放！<br>
        <span class="unlock-text">
          特別なイベントが発生した！
        </span>
      `, 1600);
    }
  }
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

  endingText.innerHTML = "";
  nextDayButton.classList.add("hidden");

  if (currentDay === 2) {
    let endingIndex = 0;
    const text = days[currentDay].ending;
    function typeEndingText() {
      if (endingIndex < text.length) {
        if (text.substring(endingIndex, endingIndex + 4) === "<br>") {
          endingText.innerHTML += "<br>";
          endingIndex += 4;
        } else if (text.charAt(endingIndex) === "\n") {
          endingText.innerHTML += "<br>";
          endingIndex++;
        } else {
          endingText.innerHTML += text.charAt(endingIndex);
          endingIndex++;
        }
        setTimeout(typeEndingText, 70);
      } else {
        nextDayButton.classList.remove("hidden");
      }
    }
    typeEndingText();
  } else {
    endingText.innerHTML =
      days[currentDay].ending.replace(/\n/g, "<br>");
    nextDayButton.classList.remove("hidden");
  }
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

function typeText(element, text, speed = 60) {
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      if (text.substring(i, i + 4) === "<br>") {
        element.innerHTML += "<br>";
        i += 4;
      } else if (text[i] === "\n") {
        element.innerHTML += "<br>";
        i++;
      } else {
        element.innerHTML += text[i];
        i++;
      }
      setTimeout(typing, speed);
    }
  }
  typing();
}
