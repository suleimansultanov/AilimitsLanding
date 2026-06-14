// Bilingual content for the AILIMITS marketing site (main page).
// Founder page is English-only by product decision.

export const CONTACT_EMAIL = "founder@suleimansultanov.com";

export const content = {
  en: {
    nav: {
      product: "Product",
      how: "How it works",
      useCases: "Use cases",
      founder: "Founder",
      earlyAccess: "Get early access",
    },
    hero: {
      badge: "EARLY ACCESS · BUILDING IN PUBLIC",
      title: "AI agents that prove their work",
      sub: "Delegate business-critical operations to agents you can actually trust. Every action is verified against the source of truth before it commits — and logged with evidence.",
      ctaPrimary: "Get early access",
      ctaSecondary: "See how it works",
      meta: "Verification + audit layer for autonomous agents.",
    },
    logline: "Agents you can trust because they operate within the right limits.",
    problem: {
      overline: "THE PROBLEM",
      title: "Why you can't trust AI agents yet",
      lead: "Autonomous agents promise to run your back office. In practice, a human still has to check every output — so the savings evaporate.",
      items: [
        {
          tag: "HALLUCINATION",
          title: "They make things up",
          body: "Agents confidently produce numbers, references and decisions that aren't backed by your real data.",
        },
        {
          tag: "SILENT_FAILURE",
          title: "They fail silently",
          body: "When an agent is wrong, it doesn't raise its hand. The error flows downstream until someone catches it — usually too late.",
        },
        {
          tag: "NO_AUDIT",
          title: "They can't be audited",
          body: "There's no reliable record of what the agent saw, why it decided, or what evidence it used. Compliance can't sign off on a black box.",
        },
        {
          tag: "BABYSITTING",
          title: "So humans babysit them",
          body: "You end up reviewing everything by hand. The automation becomes another task to supervise instead of work taken off your plate.",
        },
      ],
    },
    solution: {
      overline: "HOW IT WORKS",
      title: "A verification and audit layer on top of your agents",
      lead: "AILIMITS sits between the agent and the action. Nothing commits until it checks out.",
      steps: [
        {
          n: "01",
          title: "Verify before commit",
          body: "Every agent action is cross-checked against the source data before it executes. If it doesn't reconcile, it doesn't run.",
          log: "[VERIFIED] Invoice #3292 matched against PO-1187 — totals reconcile",
        },
        {
          n: "02",
          title: "Escalate, don't guess",
          body: "Low-confidence actions are routed to a human for review instead of being executed blindly. The agent knows the limits of what it knows.",
          log: "[ESCALATED] Vendor mismatch on line 4 — routed to reviewer",
        },
        {
          n: "03",
          title: "Full audit trail",
          body: "Every decision, its inputs, and the evidence behind it are logged and reviewable. Hand your auditor a record, not a black box.",
          log: "[LOGGED] Decision #88a1 · 3 inputs · evidence attached",
        },
      ],
    },
    useCases: {
      overline: "BEACHHEAD",
      title: "Built for finance & back-office operations",
      lead: "Where errors are expensive and auditability is mandatory.",
      items: [
        {
          title: "Invoice processing",
          body: "Extract, match against POs and contracts, flag discrepancies — only post what reconciles.",
        },
        {
          title: "Data entry & reconciliation",
          body: "Move data between systems and reconcile balances with a verifiable trail for every field.",
        },
        {
          title: "Document compliance checks",
          body: "Check contracts and filings against your policy and source documents before approval.",
        },
        {
          title: "Back-office ops",
          body: "Automate repetitive operational workflows where every step needs to be provably correct.",
        },
      ],
    },
    track: {
      overline: "WHY US",
      title: "We've built the hard parts before",
      lead: "Early-stage and honest about it — but not starting from zero. Evidence the team can ship this.",
      items: [
        {
          tag: "PIPELINES",
          title: "Invoice-automation pipelines",
          body: "Production document-extraction and matching systems for finance workflows.",
        },
        {
          tag: "WORKFLOWS",
          title: "n8n workflow systems",
          body: "Reliable, observable automation orchestrating multi-step back-office processes.",
        },
        {
          tag: "AGENTS",
          title: "LLM agent systems",
          body: "Retrieval-grounded agents with tool use, guardrails and structured outputs.",
        },
        {
          tag: "COMPLIANCE",
          title: "Legal / compliance chatbot",
          body: "A grounded assistant answering from source documents with citations, not guesses.",
        },
      ],
    },
    earlyAccess: {
      overline: "EARLY ACCESS",
      title: "Join the waitlist",
      lead: "We're onboarding a small set of finance and operations teams. Tell us where it hurts.",
      emailLabel: "Work email",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Company (optional)",
      useCasePlaceholder: "What would you automate first? (optional)",
      submit: "Request access",
      submitting: "Submitting…",
      success: "You're on the list.",
      successBody: "Thanks — we'll reach out as we open up early access.",
      already: "You're already on the list.",
      invalid: "Please enter a valid email address.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Autonomous AI agents that prove their work.",
      contact: "Contact",
      founder: "Founder",
      rights: "© 2026 AILIMITS. All rights reserved.",
      builtIn: "Building in public · Based in Germany",
    },
  },

  ru: {
    nav: {
      product: "Продукт",
      how: "Как это работает",
      useCases: "Сценарии",
      founder: "Основатель",
      earlyAccess: "Ранний доступ",
    },
    hero: {
      badge: "РАННИЙ ДОСТУП · СТРОИМ ОТКРЫТО",
      title: "AI-агенты, которые доказывают свою работу",
      sub: "Делегируйте критически важные операции агентам, которым действительно можно доверять. Каждое действие проверяется по источнику истины до выполнения — и логируется с доказательствами.",
      ctaPrimary: "Получить ранний доступ",
      ctaSecondary: "Как это работает",
      meta: "Слой верификации и аудита для автономных агентов.",
    },
    logline: "Агенты, которым можно доверять, потому что они действуют в правильных границах.",
    problem: {
      overline: "ПРОБЛЕМА",
      title: "Почему AI-агентам пока нельзя доверять",
      lead: "Автономные агенты обещают вести ваш бэк-офис. На практике человеку всё равно приходится проверять каждый результат — и экономия исчезает.",
      items: [
        {
          tag: "ГАЛЛЮЦИНАЦИИ",
          title: "Они выдумывают",
          body: "Агенты уверенно выдают цифры, ссылки и решения, не подкреплённые вашими реальными данными.",
        },
        {
          tag: "ТИХИЙ_СБОЙ",
          title: "Они ошибаются молча",
          body: "Когда агент неправ, он не поднимает руку. Ошибка идёт дальше по процессу, пока её не заметят — обычно слишком поздно.",
        },
        {
          tag: "НЕТ_АУДИТА",
          title: "Их нельзя проверить",
          body: "Нет надёжной записи того, что агент видел, почему решил и на какие доказательства опирался. Комплаенс не подпишет «чёрный ящик».",
        },
        {
          tag: "НЯНЬЧИТЬ",
          title: "Поэтому за ними следят люди",
          body: "В итоге вы перепроверяете всё вручную. Автоматизация превращается в ещё одну задачу для контроля.",
        },
      ],
    },
    solution: {
      overline: "КАК ЭТО РАБОТАЕТ",
      title: "Слой верификации и аудита поверх ваших агентов",
      lead: "AILIMITS стоит между агентом и действием. Ничего не выполняется, пока не пройдёт проверку.",
      steps: [
        {
          n: "01",
          title: "Проверка до выполнения",
          body: "Каждое действие агента сверяется с исходными данными до выполнения. Не сходится — не выполняется.",
          log: "[ПРОВЕРЕНО] Счёт #3292 сверен с PO-1187 — суммы сходятся",
        },
        {
          n: "02",
          title: "Эскалация, а не догадки",
          body: "Действия с низкой уверенностью передаются человеку, а не выполняются вслепую. Агент знает границы своих знаний.",
          log: "[ЭСКАЛАЦИЯ] Несовпадение поставщика, строка 4 — на проверку",
        },
        {
          n: "03",
          title: "Полный аудит-трейл",
          body: "Каждое решение, его входные данные и доказательства логируются и доступны для проверки. Аудитору — запись, а не чёрный ящик.",
          log: "[ЗАПИСАНО] Решение #88a1 · 3 входа · доказательства приложены",
        },
      ],
    },
    useCases: {
      overline: "ТОЧКА ВХОДА",
      title: "Создано для финансов и бэк-офиса",
      lead: "Там, где ошибки дорого стоят, а аудит обязателен.",
      items: [
        {
          title: "Обработка счетов",
          body: "Извлечение, сверка с заказами и договорами, выявление расхождений — проводим только то, что сходится.",
        },
        {
          title: "Ввод данных и сверка",
          body: "Перенос данных между системами и сверка балансов с проверяемым следом по каждому полю.",
        },
        {
          title: "Проверка документов",
          body: "Сверка договоров и отчётности с вашей политикой и исходными документами до согласования.",
        },
        {
          title: "Операции бэк-офиса",
          body: "Автоматизация повторяющихся процессов, где каждый шаг должен быть доказуемо верным.",
        },
      ],
    },
    track: {
      overline: "ПОЧЕМУ МЫ",
      title: "Мы уже строили самое сложное",
      lead: "Ранняя стадия — и мы честны об этом, но не с нуля. Доказательства того, что команда это сделает.",
      items: [
        {
          tag: "ПАЙПЛАЙНЫ",
          title: "Пайплайны автоматизации счетов",
          body: "Боевые системы извлечения и сверки документов для финансовых процессов.",
        },
        {
          tag: "ВОРКФЛОУ",
          title: "Системы на n8n",
          body: "Надёжная наблюдаемая автоматизация многошаговых процессов бэк-офиса.",
        },
        {
          tag: "АГЕНТЫ",
          title: "LLM-агенты",
          body: "Агенты с опорой на данные, инструментами, ограничителями и структурированным выводом.",
        },
        {
          tag: "КОМПЛАЕНС",
          title: "Юридический / комплаенс-чатбот",
          body: "Ассистент, отвечающий из исходных документов со ссылками, а не догадками.",
        },
      ],
    },
    earlyAccess: {
      overline: "РАННИЙ ДОСТУП",
      title: "Запишитесь в лист ожидания",
      lead: "Мы подключаем небольшое число финансовых и операционных команд. Расскажите, где болит.",
      emailLabel: "Рабочая почта",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Компания (необязательно)",
      useCasePlaceholder: "Что автоматизировали бы первым? (необязательно)",
      submit: "Запросить доступ",
      submitting: "Отправка…",
      success: "Вы в списке.",
      successBody: "Спасибо — мы свяжемся с вами, когда откроем ранний доступ.",
      already: "Вы уже в списке.",
      invalid: "Введите корректный email.",
      error: "Что-то пошло не так. Попробуйте ещё раз.",
    },
    footer: {
      tagline: "Автономные AI-агенты, которые доказывают свою работу.",
      contact: "Контакт",
      founder: "Основатель",
      rights: "© 2026 AILIMITS. Все права защищены.",
      builtIn: "Строим открыто · Германия",
    },
  },
};
