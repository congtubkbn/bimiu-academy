        const CONFIG = {
    <script>

    </div>
        </div>
            </div>
                </div>
                <div id="text-feedback" style="font-size: 22px; font-weight: bold; margin-top: 20px; min-height: 30px;">
                <div id="box-options" class="options-grid"></div>
                <div id="box-visual" class="visual-box"></div>
                </div>
                    <div id="text-question" style="font-size: 24px; font-weight: bold; text-align: left;"></div>
                        style="width: 50px; height: 50px; font-size: 24px; background: var(--primary-color); box-shadow: 0 4px 0 var(--secondary-color); flex-shrink: 0;">🔊</button>
                    <button class="btn-opt" id="btn-read-question" onclick="SpeechService.speakQuestion()"
                    style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 15px;">
                <div
            <div class="play-zone">
            </div>
                </div>
                    <button class="btn-ui back-btn" onclick="App.switchTab('settings')">⚙️ Thay đổi</button>
                    </div>
                            style="font-weight: 600; background: #fff3e0; padding: 3px 8px; border-radius: 6px;"></span>
                        <span id="game-points"
                            style="font-weight: 600; background: #e8f5e9; padding: 3px 8px; border-radius: 6px;"></span>
                        <span id="game-level"
                            style="font-weight: 600; background: #e3f2fd; padding: 3px 8px; border-radius: 6px;"></span>
                        <span id="game-subject"
                        style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; margin-bottom: 8px;">
                    <div id="game-info-bar"
                <div style="flex: 1; text-align: left;">
                <div id="display-score" class="score-badge">Điểm: 0</div>
            <div class="game-header">
        <div id="view-game" class="tab-content">

        </div>
            </div>
                <button class="btn-next" onclick="App.switchTab('game')">🚀 Bắt Đầu Chơi Ngay!</button>
                <p style="color: #666; margin-bottom: 30px;">Chọn cấp độ phù hợp rồi nhấn nút bên dưới</p>
                <h3>✅ Sẵn sàng bắt đầu!</h3>
            <div style="text-align: center; margin: 40px 0;">
            </div>
                <select id="sel-level" class="dropdown" onchange="Game.setLevel(this.value)"></select>
                </div>
                    <b>Môn Học:</b> <span id="settings-subject"></span>
                    <b>Học Viên:</b> <span id="settings-player"></span><br>
                <div style="text-align: left; flex: 1;">
            <div class="game-header">
        <div id="view-settings" class="tab-content">

        </div>
            </div>
                </div>
                    <div class="subject-desc">Bảng cửu chương siêu tốc</div>
                    <div class="subject-title">Phép Nhân</div>
                    <div class="subject-icon">✖️</div>
                <div class="subject-card" onclick="Game.selectSubject('multiplication', event)">

                </div>
                    <div class="subject-desc">Luyện tập cộng số lớn</div>
                    <div class="subject-title">Phép Cộng</div>
                    <div class="subject-icon">➕</div>
                <div class="subject-card" onclick="Game.selectSubject('addition', event)">
            <div class="subjects-grid">
            <div class="category-title">🔢 Toán Cơ Bản</div>
            </div>
                <button class="btn-next" onclick="App.switchTab('settings')">Tiếp tục cấu hình ➡️</button>
                <div><b>Môn đã chọn:</b> <span id="selected-subject-name"></span></div>
                <div><b>Học Viên:</b> <span id="selected-player-name"></span></div>
            <div class="selected-summary" id="subject-summary" style="display: none;">
        <div id="view-subjects" class="tab-content">

        </div>
            </div>
                </div>
                <div id="rank-path" class="rank-scroll-container">
                <div class="category-title">🎖️ Con Đường Chinh Phục</div>

                </div>
                <div id="ach-dashboard" class="selected-summary">

                </div>
                    </select>
                    <select id="ach-player-select" class="dropdown" onchange="Achievement.changePlayer(this.value)">
                        Xem thành tích của:</label>
                    <label for="ach-player-select" style="font-weight: bold; margin-right: 10px; font-size: 16px;">👤
                    style="margin-bottom: 20px; text-align: left; background: #e8f4f8; padding: 15px; border-radius: 12px;">
                <div
            <div class="player-mgr">
        <div id="view-achievements" class="tab-content">

        </div>
            </div>
                </div>
                    <button class="btn-next" onclick="App.switchTab('subjects')">Tiếp tục chọn môn học ➡️</button>
                <div style="text-align: center; margin-top: 20px;">
                <div id="list-players"></div>
                </div>
                    <button class="btn-ui btn-save" onclick="Player.addNew()">Thêm Học Viên</button>
                        style="padding: 10px; border-radius: 8px; border: 1px solid #ddd; width: 60px;">
                    <input type="text" id="in-icon" placeholder="Icon (👦)"
                        style="padding: 10px; border-radius: 8px; border: 1px solid #ddd;">
                    <input type="text" id="in-name" placeholder="Tên bé..."
                <div style="margin-bottom: 20px;">
            <div class="player-mgr">
        <div id="view-players" class="tab-content active">

        </div>
            <button class="tab-btn" onclick="App.switchTab('game')">🎮 Chơi Game</button>
            <button class="tab-btn" onclick="App.switchTab('settings')">⚙️ Cấu Hình</button>
            <button class="tab-btn" onclick="App.switchTab('subjects')">📚 Môn Học</button>
            <button class="tab-btn active" onclick="App.switchTab('players')">👥 Học Viên</button>
            <button class="tab-btn" onclick="App.switchTab('achievements')">🏆 Thành Tích</button>
        <div class="tab-nav">


        </div>
            </div>
                <div class="progress-circle">🎮</div><span>Chơi</span>
            <div class="progress-step" id="step-4">
            </div>
                <div class="progress-circle">⚙️</div><span>Cấu Hình</span>
            <div class="progress-step" id="step-3">
            </div>
                <div class="progress-circle">📚</div><span>Môn Học</span>
            <div class="progress-step" id="step-2">
            </div>
                <div class="progress-circle">👥</div><span>Học Viên</span>
            <div class="progress-step active" id="step-1">
        <div class="progress-bar">

        </div>
            </div>
                </div>
                    <span>📚</span> DÀNH RIÊNG CHO BI & MIU <span>🎓</span>
                <div class="subtitle-badge">
                <h1 class="super-title-text">Biệt Đội Cú Mèo Thông Thái</h1>
                <div class="owl-mascot" id="main-owl">🦉</div>
            <div class="main-title-wrapper">
        <div class="academy-header">
        <div id="sync-loader">🔄 Đang đồng bộ...</div>
    <div class="main-container">

<body>

</head>
    </style>
        }
            transition: width 0.5s ease;
            background: var(--success-color);
            height: 100%;
        .progress-fill {

        }
            overflow: hidden;
            margin: 10px 0;
            border-radius: 10px;
            background: #eee;
            height: 12px;
        .progress-track {

        }
            background: #f9f9f9;
            opacity: 0.5;
        .rank-milestone.locked {

        }
            box-shadow: 0 5px 15px rgba(243, 156, 18, 0.2);
            transform: scale(1.05);
            background: #fff9e6;
            border-color: var(--warning-color);
        .rank-milestone.next {

        }
            background: #e8f8f0;
            border-color: var(--success-color);
        .rank-milestone.reached {

        }
            transition: all 0.3s ease;
            position: relative;
            border: 2px solid #eee;
            padding: 15px;
            border-radius: 15px;
            background: white;
            min-width: 140px;
        .rank-milestone {

        }
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
            margin-bottom: 20px;
            padding: 15px 5px;
            overflow-x: auto;
            gap: 15px;
            display: flex;
        .rank-scroll-container {
        /* Container cuộn ngang cho các cấp độ */

        }
            margin-right: 10px;
            box-shadow: 0 4px 0 #7f8c8d;
            background: #95a5a6;
        .back-btn {

        }
            gap: 10px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            display: flex;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 12px;
            background: #e8f4f8;
        .selected-summary {

        }
            border-left: 4px solid var(--primary-color);
            padding-left: 10px;
            margin: 25px 0 15px 0;
            font-weight: 600;
            font-size: 18px;
            text-align: left;
        .category-title {

        }
            color: #666;
            font-size: 12px;
        .subject-desc {

        }
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 700;
        .subject-title {

        }
            margin-bottom: 10px;
            font-size: 48px;
        .subject-icon {

        }
            transform: scale(1.03);
            background: #e8f8f0;
            border-color: var(--success-color);
        .subject-card.selected {

        }
            border-color: var(--primary-color);
            box-shadow: var(--card-shadow);
            transform: translateY(-5px);
        .subject-card:hover {

        }
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            padding: 20px;
            border-radius: 16px;
            border: 3px solid #eee;
            background: white;
        .subject-card {

        }
            padding: 20px 0;
            gap: 15px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            display: grid;
        .subjects-grid {

        }
            background: var(--success-color);
        .btn-save {

        }
            margin-left: 5px;
            font-family: inherit;
            cursor: pointer;
            font-weight: bold;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 16px;
        .btn-ui {

        }
            background: linear-gradient(90deg, #fef2e4, #ffffff);
            border-left-color: #cd7f32;
        .p-item.rank-3 {

        }
            background: linear-gradient(90deg, #f5f6f7, #ffffff);
            border-left-color: #bdc3c7;
        .p-item.rank-2 {

        }
            box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);
            transform: scale(1.02);
            background: linear-gradient(90deg, #fff9e6, #ffffff);
            border-left-color: #f1c40f;
        .p-item.rank-1 {

        }
            background: #e8f8f0;
            border-left-color: var(--success-color);
        .p-item.selected {

        }
            box-shadow: var(--card-shadow);
            transform: translateX(5px);
        .p-item:hover {

        }
            cursor: pointer;
            transition: all 0.2s;
            border-left: 6px solid var(--primary-color);
            margin-bottom: 10px;
            border-radius: 12px;
            padding: 12px 20px;
            background: white;
            align-items: center;
            justify-content: space-between;
            display: flex;
        .p-item {

        }
            border-radius: 15px;
            padding: 20px;
            background: #f8f9fa;
            text-align: left;
        .player-mgr {

        }
            box-shadow: none;
            transform: translateY(6px);
        .btn-opt:active {

        }
            transition: all 0.15s;
            box-shadow: 0 6px 0 #c0392b;
            cursor: pointer;
            color: white;
            background: #e74c3c;
            border: none;
            border-radius: 50%;
            height: 90px;
            width: 90px;
            font-size: 32px;
        .btn-opt {

        }
            flex-wrap: wrap;
            margin-top: 25px;
            gap: 20px;
            justify-content: center;
            display: flex;
        .options-grid {

        }
            border-radius: 15px;
            padding: 20px;
            background: white;
            margin: 20px 0;
            gap: 15px;
            align-items: center;
            flex-direction: column;
            display: flex;
        .visual-box {

        }
            min-height: 400px;
            border: 4px dashed #f39c12;
            border-radius: 20px;
            background: #fffde7;
            padding: 25px;
        .play-zone {

        }
            cursor: default !important;
            box-shadow: 0 6px 0 #219150 !important;
            background: var(--success-color) !important;
        .btn-correct-only {

        }
            box-shadow: 0 2px 0 #219150;
            transform: translateY(4px);
        .btn-next:active {

        }
            font-family: inherit;
            transition: all 0.2s;
            box-shadow: 0 6px 0 #219150;
            cursor: pointer;
            font-weight: bold;
            color: white;
            background: var(--success-color);
            border: none;
            border-radius: 50px;
            padding: 14px 32px;
            font-size: 20px;
        .btn-next {

        }
            color: var(--primary-color);
            font-weight: bold;
            font-size: 22px;
        .p-score-text {

        }
            gap: 5px;
            align-items: flex-start;
            flex-direction: column;
            display: flex;
        .p-info {

        }
            white-space: nowrap;
            display: inline-block;
            border: 2px solid #f1c40f;
            border-radius: 20px;
            padding: 3px 10px;
            background: #fff;
            color: #2c3e50;
            font-size: 13px;
        .rank-badge {

        }
            box-shadow: 0 4px 0 #f39c12;
            border-radius: 12px;
            padding: 12px 20px;
            background: #ffeaa7;
            color: #d35400;
            font-weight: bold;
            font-size: 20px;
            gap: 4px;
            align-items: center;
            flex-direction: column;
            display: flex;
        .score-badge {

        }
            min-width: 160px;
            font-family: inherit;
            border: 2px solid var(--secondary-color);
            border-radius: 10px;
            padding: 10px 14px;
            font-size: 16px;
        .dropdown {

        }
            flex-wrap: wrap;
            border-radius: 15px;
            padding: 15px;
            background: #e8f4f8;
            margin-bottom: 20px;
            gap: 15px;
            align-items: center;
            justify-content: center;
            display: flex;
        .game-header {

        }
            }
                transform: translateY(0);
                opacity: 1;
            to {

            }
                transform: translateY(10px);
                opacity: 0;
            from {
        @keyframes fadeIn {

        }
            display: block;
        .tab-content.active {

        }
            animation: fadeIn 0.3s ease;
            display: none;
        .tab-content {

        }
            background: #aeb6bf;
        .tab-btn:hover:not(.active) {

        }
            box-shadow: 0 4px 8px rgba(74, 144, 226, 0.3);
            transform: translateY(-2px);
            background: var(--primary-color);
        .tab-btn.active {

        }
            gap: 6px;
            align-items: center;
            display: flex;
            transition: all 0.3s ease;
            font-weight: 600;
            cursor: pointer;
            color: white;
            background: var(--tab-inactive);
            border: none;
            border-radius: 15px;
            padding: 12px 18px;
            font-size: 16px;
        .tab-btn {

        }
            flex-wrap: wrap;
            margin-bottom: 20px;
            gap: 8px;
            justify-content: center;
            display: flex;
        .tab-nav {

        }
            color: white;
            background: var(--success-color);
        .progress-step.completed .progress-circle {

        }
            color: white;
            background: var(--primary-color);
        .progress-step.active .progress-circle {

        }
            margin-bottom: 5px;
            font-size: 18px;
            justify-content: center;
            align-items: center;
            display: flex;
            background: #eee;
            border-radius: 50%;
            height: 40px;
            width: 40px;
        .progress-circle {

        }
            color: var(--success-color);
            opacity: 0.7;
        .progress-step.completed {

        }
            color: var(--primary-color);
            opacity: 1;
        .progress-step.active {

        }
            font-weight: 500;
            font-size: 12px;
            opacity: 0.4;
            align-items: center;
            flex-direction: column;
            display: flex;
        .progress-step {

        }
            padding: 0 20px;
            margin-bottom: 25px;
            justify-content: space-between;
            display: flex;
        .progress-bar {

        }
            }
                opacity: 1;
            100% {

            }
                opacity: 0.5;
            50% {

            }
                opacity: 1;
            0% {
        @keyframes pulse {

        }
            animation: pulse 1s infinite;
            display: none;
            /* Đảm bảo luôn nằm trên cùng */
            z-index: 9999;
            /* Thêm bóng đổ để tách khỏi nền */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            border: 2px solid #fff;
            border-radius: 20px;
            padding: 6px 15px;
            /* Chữ màu xanh đậm để tương phản mạnh */
            color: #1a2a6c !important;
            /* Màu vàng Gold giống logo Cú mèo */
            background: #f1c40f;
            /* Cho chữ đậm hẳn lên */
            font-weight: 700;
            font-size: 13px;
            right: 20px;
            top: 20px;
            position: absolute;
        #sync-loader {
        /* --- Loading Overlay --- */

        }
            position: relative;
            border: 6px solid var(--primary-color);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
            padding: 30px;
            border-radius: 25px;
            background: white;
            margin: 0 auto;
            max-width: 900px;
        .main-container {

        }
            padding: 20px;
            margin: 0;
            color: #222;
            text-align: center;
            background-color: var(--background-color);
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            font-synthesis: none;
            letter-spacing: 0.15px;
            line-height: 1.6;
            font-weight: 450;
            font-family: 'Be Vietnam Pro', Roboto, Arial, sans-serif;
        body {

        }
            box-sizing: border-box;
        * {

        }
            /* Đổ bóng cho thẻ */
            --card-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
            /* Màu xám cho các tab chưa được chọn */
            --tab-inactive: #95a5a6;
            /* Đỏ cho nút Sai */
            --error-color: #e74c3c;
            /* Cam vàng cho cảnh báo/câu hỏi */
            --warning-color: #f39c12;
            /* Xanh lá cây cho nút Đúng/Tiếp tục */
            --success-color: #27ae60;
            /* BỔ SUNG LẠI CÁC MÀU BỊ THIẾU ĐỂ CHỮ KHÔNG BỊ TÀNG HÌNH */

            /* Màu kem giấy nhẹ */
            --background-color: #fdfaf0;
            /* Xanh dương phụ */
            --secondary-color: #2980b9;
            /* Xanh đậm học viện */
            --primary-color: #1a2a6c;
        :root {
        /* Tinh chỉnh lại màu sắc các nút chính để hợp với chủ đề */

        }
            opacity: 0.7;
            animation: owl-sad-droop 1.5s ease-in-out !important;
        .owl-sad {

        }
            /* Hào quang xanh lá */
            filter: drop-shadow(0 0 20px rgba(46, 204, 113, 0.8)) !important;
            animation: owl-jump 0.6s ease-in-out infinite !important;
        .owl-happy {
        /* Các class trạng thái (Dùng !important để ghi đè hiệu ứng lơ lửng mặc định) */

        }
            }
                filter: grayscale(0.6);
                transform: translateY(15px) rotate(15deg) scale(0.9);
            80% {

            }
                filter: grayscale(0.6);
                transform: translateY(15px) rotate(-15deg) scale(0.9);
            20% {

            }
                filter: grayscale(0);
                transform: translateY(0) rotate(0deg) scale(1);
            100% {
            0%,

        @keyframes owl-sad-droop {
        /* Hiệu ứng ỉu xìu, buồn bã */

        }
            }
                transform: translateY(-12px) scale(1.05) rotate(-5deg);
            70% {

            }
                transform: translateY(0) scale(1);
            50% {

            }
                transform: translateY(-25px) scale(1.15) rotate(5deg);
            30% {

            }
                transform: translateY(0) scale(1);
            100% {
            0%,

        @keyframes owl-jump {
        /* Hiệu ứng nhảy nhót vui sướng */

        }
            }
                transform: translateY(-10px) rotate(2deg);
            50% {

            }
                transform: translateY(0) rotate(-2deg);
            100% {
            0%,

        @keyframes owl-float {

        }
            gap: 8px;
            align-items: center;
            display: flex;
            font-size: 14px;
            font-weight: 700;
            border-radius: 20px;
            padding: 4px 15px;
            color: #1a2a6c;
            background: #f1c40f;
        .subtitle-badge {

        }
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background: linear-gradient(to bottom, #ffffff 0%, #f1c40f 100%);
            /* Chữ chuyển màu vàng gold sang trắng */
            letter-spacing: 2px;
            text-transform: uppercase;
            margin: 0;
            font-weight: 850;
            font-size: 38px;
        .super-title-text {

        }
            animation: owl-float 3s ease-in-out infinite;
            filter: drop-shadow(0 0 10px rgba(241, 196, 15, 0.5));
            font-size: 60px;
        .owl-mascot {

        }
            gap: 10px;
            align-items: center;
            flex-direction: column;
            display: flex;
        .main-title-wrapper {

        }
            font-size: 20px;
            opacity: 0.3;
            left: 20px;
            top: 10px;
            position: absolute;
            content: "✨";
        .academy-header::before {
        /* Hiệu ứng lấp lánh như sao đêm phía sau */

        }
            overflow: hidden;
            position: relative;
            border-bottom: 5px solid #f1c40f;
            /* Tràn viền container chính */
            margin: -30px -30px 30px -30px;
            border-radius: 20px 20px 0 0;
            padding: 30px 20px;
            /* Màu xanh học viện */
            background: linear-gradient(135deg, #1a2a6c, #2a4858);
        .academy-header {
        /* Thiết kế tiêu đề Biệt Đội Cú Mèo */
    <style>

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
        rel="stylesheet">
