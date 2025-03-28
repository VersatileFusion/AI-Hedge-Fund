# AI Hedge Fund | صندوق پوشش ریسک هوش مصنوعی

[English](#english) | [فارسی](#persian)

---

<a name="english"></a>
## English Documentation

### Overview

AI Hedge Fund is an intelligent financial system that leverages artificial intelligence to analyze market data, make trading decisions, and manage investment portfolios. The system uses machine learning algorithms to identify patterns in financial markets, optimize investment strategies, and minimize risk.

This system employs several AI agents working together to make trading decisions:

1. **Ben Graham Agent** - The godfather of value investing, only buys hidden gems with a margin of safety
2. **Bill Ackman Agent** - An activist investor who takes bold positions and pushes for change
3. **Cathie Wood Agent** - The queen of growth investing, believes in the power of innovation and disruption
4. **Charlie Munger Agent** - Warren Buffett's partner, only buys wonderful businesses at fair prices
5. **Phil Fisher Agent** - Legendary growth investor who mastered scuttlebutt analysis
6. **Stanley Druckenmiller Agent** - Macro legend who hunts for asymmetric opportunities with growth potential
7. **Warren Buffett Agent** - The oracle of Omaha, seeks wonderful companies at a fair price
8. **Valuation Agent** - Calculates the intrinsic value of a stock and generates trading signals
9. **Sentiment Agent** - Analyzes market sentiment and generates trading signals
10. **Fundamentals Agent** - Analyzes fundamental data and generates trading signals
11. **Technicals Agent** - Analyzes technical indicators and generates trading signals
12. **Risk Manager** - Calculates risk metrics and sets position limits
13. **Portfolio Manager** - Makes final trading decisions and generates orders

### Disclaimer

This project is for **educational and research purposes only**.

* Not intended for real trading or investment
* No warranties or guarantees provided
* Past performance does not indicate future results
* Creator assumes no liability for financial losses
* Consult a financial advisor for investment decisions

By using this software, you agree to use it solely for learning purposes.

### Features

- **Portfolio Management**: Create and manage multiple investment portfolios with different strategies
- **Automated Trading**: Execute buy and sell orders based on AI-driven analysis
- **Market Analysis**: Real-time analysis of market trends and stock performance
- **Backtesting**: Test investment strategies against historical market data
- **Risk Management**: Advanced algorithms to minimize risk and optimize returns
- **Performance Monitoring**: Track portfolio performance with detailed analytics
- **Multi-Agent System**: Uses multiple AI agents with different investment philosophies
- **Sentiment Analysis**: Analyzes market sentiment to guide investment decisions
- **Fundamental Analysis**: Evaluates company financials and economic indicators
- **Technical Analysis**: Uses price patterns and indicators to identify trading opportunities

### Tech Stack

- **Frontend**: React.js, Chart.js, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI/ML**: Python, TensorFlow, pandas, NumPy
- **Authentication**: JWT
- **API Documentation**: Swagger
- **LLM Integration**: Support for OpenAI, Groq, Anthropic, and DeepSeek models

### Installation

#### Prerequisites

- Node.js (v14+)
- MongoDB
- Python (v3.8+)
- pip or Poetry

#### Server Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-hedge-fund.git
   cd ai-hedge-fund/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

4. Start the server:
   ```bash
   npm start
   ```
   For development with auto-restart:
   ```bash
   npm run dev
   ```

#### Python ML Environment Setup

1. Navigate to the Python directory:
   ```bash
   cd ../python
   ```

2. Set up a virtual environment:
   ```bash
   # Using venv
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Or using Poetry (if installed)
   poetry install
   ```

3. Install Python dependencies:
   ```bash
   # If using venv
   pip install -r requirements.txt
   
   # If using Poetry
   poetry install
   ```

4. Set up your API keys in the `.env` file:
   ```
   # For running LLMs hosted by OpenAI (gpt-4o, gpt-4o-mini, etc.)
   OPENAI_API_KEY=your-openai-api-key

   # For running LLMs hosted by Groq (deepseek, llama3, etc.)
   GROQ_API_KEY=your-groq-api-key
   
   # For getting financial data
   FINANCIAL_DATASETS_API_KEY=your-financial-datasets-api-key
   ```

#### Client Setup (Coming Soon)

The client-side application is under development.

### Running the System

#### Running the Hedge Fund

```bash
# Using regular Python
python python/src/main.py --ticker AAPL,MSFT,NVDA

# Using Poetry
poetry run python src/main.py --ticker AAPL,MSFT,NVDA

# Show reasoning for each agent's decisions
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --show-reasoning

# Run for a specific time period
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --start-date 2024-01-01 --end-date 2024-03-01
```

#### Running the Backtester

```bash
# Using Poetry
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA

# Run for a specific time period
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA --start-date 2024-01-01 --end-date 2024-03-01
```

### API Documentation

API documentation is available at `/api-docs` when the server is running. You can access it via:
```
http://localhost:3000/api-docs
```

### Testing

To run tests:
```bash
cd server
npm test
```

### Project Structure

```
ai-hedge-fund/
├── server/              # Node.js backend
│   ├── config/          # Configuration files
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── tests/           # Test suites
├── python/              # Python ML models
│   ├── src/             # Source code
│   │   ├── agents/      # AI agent definitions
│   │   │   ├── bill_ackman.py
│   │   │   ├── warren_buffett.py
│   │   │   ├── fundamentals.py
│   │   │   ├── portfolio_manager.py
│   │   │   ├── risk_manager.py
│   │   │   └── ...
│   │   ├── tools/       # Agent tools
│   │   ├── backtester.py # Backtesting functionality
│   │   └── main.py      # Main entry point
│   └── notebooks/       # Jupyter notebooks for analysis
└── client/              # React.js frontend (coming soon)
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<a name="persian"></a>

<div dir="rtl">

## اسناد فارسی

### نمای کلی

صندوق سرمایه‌گذاری هوش مصنوعی یک سیستم مالی هوشمند است که از هوش مصنوعی برای تحلیل داده‌های بازار، تصمیم‌گیری معاملاتی و مدیریت سبد سرمایه‌گذاری استفاده می‌کند. این سیستم از الگوریتم‌های یادگیری ماشین برای شناسایی الگوها در بازارهای مالی، بهینه‌سازی استراتژی‌های سرمایه‌گذاری و کاهش ریسک استفاده می‌کند.

این سیستم از چندین عامل هوش مصنوعی استفاده می‌کند که با هم برای تصمیم‌گیری معاملاتی همکاری می‌کنند:

1. **عامل بن گراهام** - پدرخوانده سرمایه‌گذاری ارزشی، فقط گوهرهای پنهان را با حاشیه امنیت می‌خرد
2. **عامل بیل اکمن** - یک سرمایه‌گذار فعال که موقعیت‌های جسورانه می‌گیرد و برای تغییر تلاش می‌کند
3. **عامل کتی وود** - ملکه سرمایه‌گذاری رشد، به قدرت نوآوری و اختلال معتقد است
4. **عامل چارلی مانگر** - شریک وارن بافت، فقط کسب‌وکارهای عالی را با قیمت مناسب می‌خرد
5. **عامل فیل فیشر** - سرمایه‌گذار افسانه‌ای رشد که در تحلیل شایعات استاد شد
6. **عامل استنلی دراکنمیلر** - افسانه ماکرو که به دنبال فرصت‌های نامتقارن با پتانسیل رشد است
7. **عامل وارن بافت** - خبره اوماها، به دنبال شرکت‌های عالی با قیمت مناسب است
8. **عامل ارزش‌گذاری** - ارزش ذاتی سهام را محاسبه و سیگنال‌های معاملاتی تولید می‌کند
9. **عامل احساسات** - احساسات بازار را تحلیل و سیگنال‌های معاملاتی تولید می‌کند
10. **عامل بنیادی** - داده‌های بنیادی را تحلیل و سیگنال‌های معاملاتی تولید می‌کند
11. **عامل تکنیکال** - شاخص‌های تکنیکال را تحلیل و سیگنال‌های معاملاتی تولید می‌کند
12. **مدیر ریسک** - معیارهای ریسک را محاسبه و محدودیت‌های موقعیت را تعیین می‌کند
13. **مدیر پرتفولیو** - تصمیمات نهایی معاملاتی را می‌گیرد و سفارشات را تولید می‌کند

### سلب مسئولیت

این پروژه **فقط برای اهداف آموزشی و پژوهشی** است.

* برای معاملات واقعی یا سرمایه‌گذاری در نظر گرفته نشده است
* هیچ ضمانت یا تضمینی ارائه نمی‌شود
* عملکرد گذشته نشان‌دهنده نتایج آینده نیست
* سازنده هیچ مسئولیتی در قبال ضررهای مالی نمی‌پذیرد
* برای تصمیمات سرمایه‌گذاری با یک مشاور مالی مشورت کنید

با استفاده از این نرم‌افزار، موافقت می‌کنید که فقط برای اهداف یادگیری از آن استفاده کنید.

### ویژگی‌ها

- **مدیریت سبد سرمایه‌گذاری**: ایجاد و مدیریت چندین سبد سرمایه‌گذاری با استراتژی‌های مختلف
- **معاملات خودکار**: اجرای دستورات خرید و فروش بر اساس تحلیل‌های مبتنی بر هوش مصنوعی
- **تحلیل بازار**: تجزیه و تحلیل روندهای بازار و عملکرد سهام به صورت زنده
- **آزمون برگشتی**: آزمایش استراتژی‌های سرمایه‌گذاری با داده‌های تاریخی بازار
- **مدیریت ریسک**: الگوریتم‌های پیشرفته برای کاهش ریسک و بهینه‌سازی بازده
- **نظارت بر عملکرد**: پیگیری عملکرد سبد سرمایه‌گذاری با تحلیل‌های دقیق
- **سیستم چند عاملی**: استفاده از چندین عامل هوش مصنوعی با فلسفه‌های سرمایه‌گذاری مختلف
- **تحلیل احساسات**: تحلیل احساسات بازار برای هدایت تصمیمات سرمایه‌گذاری
- **تحلیل بنیادی**: ارزیابی وضعیت مالی شرکت‌ها و شاخص‌های اقتصادی
- **تحلیل تکنیکال**: استفاده از الگوهای قیمت و شاخص‌ها برای شناسایی فرصت‌های معاملاتی

### تکنولوژی‌های مورد استفاده

- **فرانت‌اند**: React.js، Chart.js، Material UI
- **بک‌اند**: Node.js، Express.js
- **پایگاه داده**: MongoDB
- **هوش مصنوعی/یادگیری ماشین**: Python، TensorFlow، pandas، NumPy
- **احراز هویت**: JWT
- **مستندات API**: Swagger
- **ادغام LLM**: پشتیبانی از مدل‌های OpenAI، Groq، Anthropic و DeepSeek

### نصب و راه‌اندازی

#### پیش‌نیازها

- Node.js (نسخه 14+)
- MongoDB
- Python (نسخه 3.8+)
- pip یا Poetry

#### راه‌اندازی سرور

1. کلون کردن مخزن:
   ```bash
   git clone https://github.com/yourusername/ai-hedge-fund.git
   cd ai-hedge-fund/server
   ```

2. نصب وابستگی‌ها:
   ```bash
   npm install
   ```

3. تنظیم متغیرهای محیطی:
   ```bash
   cp .env.example .env
   ```
   فایل `.env` را با تنظیمات خود ویرایش کنید.

4. شروع سرور:
   ```bash
   npm start
   ```
   برای توسعه با راه‌اندازی مجدد خودکار:
   ```bash
   npm run dev
   ```

#### راه‌اندازی محیط ML پایتون

1. رفتن به دایرکتوری پایتون:
   ```bash
   cd ../python
   ```

2. راه‌اندازی محیط مجازی:
   ```bash
   # با استفاده از venv
   python -m venv venv
   source venv/bin/activate  # در ویندوز: venv\Scripts\activate
   
   # یا با استفاده از Poetry (اگر نصب شده باشد)
   poetry install
   ```

3. نصب وابستگی‌های پایتون:
   ```bash
   # اگر از venv استفاده می‌کنید
   pip install -r requirements.txt
   
   # اگر از Poetry استفاده می‌کنید
   poetry install
   ```

4. تنظیم کلیدهای API در فایل `.env`:
   ```
   # برای اجرای LLM های میزبانی شده توسط OpenAI (gpt-4o، gpt-4o-mini و غیره)
   OPENAI_API_KEY=کلید-api-openai-شما

   # برای اجرای LLM های میزبانی شده توسط Groq (deepseek, llama3 و غیره)
   GROQ_API_KEY=کلید-api-groq-شما
   
   # برای دریافت داده‌های مالی
   FINANCIAL_DATASETS_API_KEY=کلید-api-financial-datasets-شما
   ```

#### راه‌اندازی کلاینت (به زودی)

اپلیکیشن سمت کلاینت در حال توسعه است.

### اجرای سیستم

#### اجرای صندوق پوشش ریسک

```bash
# با استفاده از Python معمولی
python python/src/main.py --ticker AAPL,MSFT,NVDA

# با استفاده از Poetry
poetry run python src/main.py --ticker AAPL,MSFT,NVDA

# نمایش استدلال برای تصمیمات هر عامل
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --show-reasoning

# اجرا برای یک دوره زمانی خاص
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --start-date 2024-01-01 --end-date 2024-03-01
```

#### اجرای آزمون برگشتی

```bash
# با استفاده از Poetry
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA

# اجرا برای یک دوره زمانی خاص
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA --start-date 2024-01-01 --end-date 2024-03-01
```

### مستندات API

مستندات API در آدرس `/api-docs` هنگام اجرای سرور در دسترس است. می‌توانید از طریق آدرس زیر به آن دسترسی پیدا کنید:
```
http://localhost:3000/api-docs
```

### تست

برای اجرای تست‌ها:
```bash
cd server
npm test
```

### ساختار پروژه

```
ai-hedge-fund/
├── server/              # بک‌اند Node.js
│   ├── config/          # فایل‌های پیکربندی
│   ├── models/          # مدل‌های MongoDB
│   ├── routes/          # مسیرهای API
│   ├── services/        # منطق کسب و کار
│   └── tests/           # مجموعه تست‌ها
├── python/              # مدل‌های ML پایتون
│   ├── src/             # کد منبع
│   │   ├── agents/      # تعاریف عامل‌های هوش مصنوعی
│   │   │   ├── bill_ackman.py
│   │   │   ├── warren_buffett.py
│   │   │   ├── fundamentals.py
│   │   │   ├── portfolio_manager.py
│   │   │   ├── risk_manager.py
│   │   │   └── ...
│   │   ├── tools/       # ابزارهای عامل
│   │   ├── backtester.py # عملکرد آزمون برگشتی
│   │   └── main.py      # نقطه ورود اصلی
│   └── notebooks/       # دفترچه‌های Jupyter برای تحلیل
└── client/              # فرانت‌اند React.js (به زودی)
```

### مشارکت

مشارکت‌ها مورد استقبال قرار می‌گیرند! لطفاً برای ارسال Pull Request اقدام کنید.

1. فورک کردن مخزن
2. ایجاد شاخه ویژگی خود (`git checkout -b feature/ویژگی_جدید`)
3. ثبت تغییرات خود (`git commit -m 'افزودن ویژگی جدید'`)
4. ارسال به شاخه (`git push origin feature/ویژگی_جدید`)
5. باز کردن یک Pull Request

### مجوز

این پروژه تحت مجوز MIT منتشر شده است - برای جزئیات به فایل LICENSE مراجعه کنید.

</div> 