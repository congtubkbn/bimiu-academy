const CONFIG = {
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwCusdiaxXYhp-50VkQ8D3SxxylzptawGm9INizB3gD0pTUiZicUZZ91NrxaUEP1HQITg/exec"
};

const RANKS_CONFIG = [
    // Giai đoạn 1: Làm quen & Thế giới động vật nhỏ (Từ 0 - 1000 điểm)
    { limit: 50, name: 'Hạt Đậu Nhỏ Xíu', icon: '🫘' },
    { limit: 150, name: 'Gà Chíp Đáng Yêu', icon: '🐣' },
    { limit: 350, name: 'Thỏ Trắng Lanh Lợi', icon: '🐇' },
    { limit: 600, name: 'Sóc Nâu Chăm Chỉ', icon: '🐿️' },
    { limit: 1000, name: 'Ong Nhí Tìm Mật', icon: '🐝' },

    // Giai đoạn 2: Lớn lên & Động vật thông minh (Từ 1000 - 4000 điểm)
    { limit: 1500, name: 'Cún Con Thông Minh', icon: '🐶' },
    { limit: 2200, name: 'Mèo Ú Bắn Cung', icon: '🐱' },
    { limit: 3000, name: 'Cá Heo Vui Nhộn', icon: '🐬' },
    { limit: 4000, name: 'Sư Tử Dũng Mãnh', icon: '🦁' },

    // Giai đoạn 3: Phép thuật & Siêu anh hùng (Từ 4000 - 13000 điểm)
    { limit: 5500, name: 'Hiệp Sĩ Áo Choàng', icon: '🦸' },
    { limit: 7500, name: 'Ngôi Sao Lấp Lánh', icon: '⭐' },
    { limit: 10000, name: 'Mặt Trăng Ngọt Ngào', icon: '🌙' },
    { limit: 13000, name: 'Thiên Thần Trí Tuệ', icon: '👼' },

    // Giai đoạn 4: Vươn ra Vũ trụ bao la (Từ 13000 - 45000 điểm)
    { limit: 17000, name: 'Phi Hành Gia Nhí', icon: '🧑‍🚀' },
    { limit: 22000, name: 'Tàu Vũ Trụ Thần Tốc', icon: '🚀' },
    { limit: 28000, name: 'Siêu Nhân Tia Chớp', icon: '⚡' },
    { limit: 35000, name: 'Phù Thủy Sấm Sét', icon: '🧙' },
    { limit: 45000, name: 'Chiến Binh Ngân Hà', icon: '🌌' },

    // Giai đoạn 5: Ánh sáng & Huyền thoại (Từ 45000 - 80000 điểm)
    { limit: 60000, name: 'Thủ Lĩnh Mặt Trời', icon: '☀️' },
    { limit: 80000, name: 'Vương Miện Ánh Sáng', icon: '👑' },

    // Giai đoạn 6: Thế giới Bánh Kẹo & Tráng Miệng (Từ 80000 - 150000 điểm)
    { limit: 95000, name: 'Kẹo Mút Sắc Màu', icon: '🍭' },
    { limit: 110000, name: 'Bánh Kem Dâu Tây', icon: '🍰' },
    { limit: 130000, name: 'Hoàng Tử Donut', icon: '🍩' },
    { limit: 150000, name: 'Vương Quốc Sô-cô-la', icon: '🍫' },

    // Giai đoạn 7: Kỷ Nguyên Khủng Long (Từ 150000 - 400000 điểm)
    { limit: 200000, name: 'Trứng Khủng Long', icon: '🥚' },
    { limit: 260000, name: 'Khủng Long Cổ Dài', icon: '🦕' },
    { limit: 320000, name: 'Khủng Long Bạo Chúa', icon: '🦖' },
    { limit: 400000, name: 'Rồng Lửa Ngộ Nghĩnh', icon: '🐉' },

    // Giai đoạn 8: Phương Tiện & Siêu Robot (Từ 400000 - 1 Triệu điểm)
    { limit: 500000, name: 'Tàu Hỏa Tu Tu', icon: '🚂' },
    { limit: 650000, name: 'Tàu Ngầm Khám Phá', icon: '🚤' },
    { limit: 800000, name: 'Robot Lắp Ráp', icon: '🤖' },
    { limit: 1000000, name: 'Siêu Robot Hợp Thể', icon: '🦾' },

    // Giai đoạn 9: Phép Thuật Nhiệm Màu (Từ 1 Triệu - 3 Triệu điểm)
    { limit: 1400000, name: 'Đũa Phép Ngôi Sao', icon: '🪄' },
    { limit: 1900000, name: 'Kỳ Lân Cầu Vồng', icon: '🦄' },
    { limit: 2500000, name: 'Lâu Đài Phép Thuật', icon: '🏰' },
    { limit: 3000000, name: 'Cây Thần Khổng Lồ', icon: '🌳' },

    // Giai đoạn 10: Tinh Tố Vũ Trụ & Vô Cực (Trên 3 Triệu điểm)
    { limit: 4000000, name: 'Đĩa Bay Xuyên Không', icon: '🛸' },
    { limit: 5500000, name: 'Sao Băng Lấp Lánh', icon: '☄️' },
    { limit: 8000000, name: 'Vũ Trụ Vạn Vật', icon: '🌌' },
    { limit: Infinity, name: 'Nhà Toán Học Vô Cực', icon: '♾️' }
];

const AppState = {
    selectedPlayerId: null,
    selectedSubject: null,
    currentLevel: 0,

    sessionId: 'sess_' + Date.now(), // Định danh phiên làm việc
    isAdventureMode: true,           // Mặc định bật chế độ thám hiểm cho chuyên nghiệp
    correctStreak: 0,                // Chuỗi đúng liên tiếp
    incorrectStreak: 0               // Chuỗi sai liên tiếp
};

/* --- THÊM CLASS TRACKING MỚI --- */
class TrackingService {
    static startTime = null;

    static startQuizTimer() {
        this.startTime = Date.now();
    }

    static async logAction(actionType, details = {}) {
        const payload = {
            type: 'ACTION_LOG',
            sessionId: AppState.sessionId,
            playerId: AppState.selectedPlayerId,
            action: actionType,
            details: JSON.stringify(details),
            timestamp: new Date().toISOString()
        };
        return CloudService.sendToCloud(payload);
    }

    static async logQuiz(question, userAnswer, correctAnswer, isCorrect) {
        const duration = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
        const payload = {
            type: 'QUIZ_LOG',
            sessionId: AppState.sessionId,
            playerId: AppState.selectedPlayerId,
            subject: AppState.selectedSubject,
            level: AppState.currentLevel + 1,
            question: question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
            duration: duration.toFixed(1),
            timestamp: new Date().toISOString()
        };
        return CloudService.sendToCloud(payload);
    }
}

class SoundService {
    static trueAudioUrls = [
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/true/be_thong_minh_that_day.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/true/dung_roi_gioi_qua.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/true/hoan_ho_chinh_xac.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/true/tuyet_voi_dung_roi.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/true/xuat_sac_tiep_tuc_nhe.ogg'
    ];

    static falseAudioUrls = [
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/false/gan_dung_roi_co_len_nao.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/false/sap_dung_roi_thu_lai_nhe.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/false/thu_lai_lan_nua_xem_sao_nao.ogg',
        'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/false/tiec_qua_hay_chon_lai_nha.ogg'
    ];

    static fireworkAudioUrl = 'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/nhac-5-cau-dung.ogg';

    // --- ĐƯỜNG DẪN BÁO LỖI NẾU CHƯA CÓ FILE TRÊN GITHUB ---
    static bgmAudioUrl = 'https://raw.githubusercontent.com/congtubkbn/audio-assets/main/toy-box-tune.mp3';

    static trueCache = [];
    static falseCache = [];
    static fireworkCache = null; // Cache riêng cho pháo hoa

    static currentAudio = null;

    // --- Biến cho Nhạc nền (BGM) ---
    static bgmAudio = null;
    static isBgmEnabled = true;

    static init() {
        // Tải trước (preload) âm thanh đúng
        this.trueAudioUrls.forEach(url => {
            const audio = new Audio(url);
            this.trueCache.push(audio);
        });
        // Tải trước (preload) âm thanh sai
        this.falseAudioUrls.forEach(url => {
            const audio = new Audio(url);
            this.falseCache.push(audio);
        });

        // Preload âm thanh pháo hoa
        this.fireworkCache = new Audio(this.fireworkAudioUrl);

        // Khởi tạo Nhạc nền
        this.bgmAudio = new Audio(this.bgmAudioUrl);
        this.bgmAudio.loop = true;      // Phát lặp đi lặp lại
        this.bgmAudio.volume = 0.15;    // Âm lượng siêu nhỏ (15%) để không ồn ào và lấn giọng đọc
    }

    static startBGM() {
        if (this.isBgmEnabled && this.bgmAudio) {
            this.bgmAudio.play().catch(e => console.log("Trình duyệt tạm chặn nhạc Autoplay:", e));
        }
    }

    static stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
    }

    static toggleBGM() {
        this.isBgmEnabled = !this.isBgmEnabled;
        const btn = document.getElementById('btn-toggle-bgm');
        if (this.isBgmEnabled) {
            this.startBGM();
            if (btn) btn.innerHTML = "🎵 Tắt Nhạc";
        } else {
            this.stopBGM();
            if (btn) btn.innerHTML = "🔇 Bật Nhạc";
        }
    }

    // Phương thức phát âm thanh pháo hoa
    static playFireworkSound() {
        this.stopAll();
        if (this.fireworkCache) {
            this.fireworkCache.currentTime = 0; // Chơi lại từ đầu
            this.currentAudio = this.fireworkCache;
            this.currentAudio.play().catch(e => console.log("Firework sound blocked:", e));
        }
    }
    // HÀM MỚI: Tắt toàn bộ âm thanh (kể cả giọng đọc)
    static stopAll() {
        // Tắt nhạc hiệu ứng nếu đang chạy
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }
        // Tắt giọng đọc (TTS) nếu đang đọc
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }

    static playTrueSound() {
        this.stopAll(); // Tắt mọi âm thanh trước khi phát
        if (this.trueCache.length === 0) return;
        const randomIndex = Math.floor(Math.random() * this.trueCache.length);
        this.currentAudio = this.trueCache[randomIndex];
        this.currentAudio.play().catch(e => console.log("Sound playback prevented:", e));
    }

    static playFalseSound() {
        this.stopAll(); // Tắt mọi âm thanh trước khi phát
        if (this.falseCache.length === 0) return;
        const randomIndex = Math.floor(Math.random() * this.falseCache.length);
        this.currentAudio = this.falseCache[randomIndex];
        this.currentAudio.play().catch(e => console.log("Sound playback prevented:", e));
    }
}

class SpeechService {
    static voice = null;

    static init() {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Lọc ra giọng Tiếng Việt
            const viVoices = voices.filter(v => v.lang.includes('vi'));
            if (viVoices.length > 0) {
                // Ưu tiên chọn giọng của Google vì nghe tự nhiên nhất
                this.voice = viVoices.find(v => v.name.includes('Google Tiếng Việt')) || viVoices[0];
            }
        };

        // Trình duyệt cần thời gian tải danh sách giọng đọc
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
        loadVoices();
    }

    static speakQuestion() {
        const textElement = document.getElementById('text-question');
        if (!textElement || !textElement.innerText) return;

        // Gọi hàm stopAll() để dập tắt các âm thanh/giọng đọc đang chạy dang dở
        SoundService.stopAll();

        const utterance = new SpeechSynthesisUtterance(textElement.innerText);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.9; // Tốc độ hơi chậm một chút để bé dễ nghe
        utterance.pitch = 1;

        if (this.voice) {
            utterance.voice = this.voice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

class CloudService {
    static LOCAL_DATA_KEY = 'hvt_players_backup';
    static SYNC_QUEUE_KEY = 'hvt_sync_queue';

    // 1. Tải dữ liệu từ Cloud (Có cơ chế Fallback)
    static async fetchAll() {
        this.toggleLoader(true, "Đang tải dữ liệu...");

        // Nếu đang offline, lấy luôn từ Local Storage
        if (!navigator.onLine) {
            this.toggleLoader(false);
            return this.getLocalBackup();
        }

        try {
            const response = await fetch(CONFIG.SCRIPT_URL);
            const data = await response.json();

            // Cập nhật lại bản sao lưu mới nhất vào Local Storage
            localStorage.setItem(this.LOCAL_DATA_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            console.error("Fetch failed, fallback to local:", error);
            // Lỗi mạng bất ngờ, dùng bản dự phòng
            return this.getLocalBackup();
        } finally {
            this.toggleLoader(false);
        }
    }

    // Hàm phụ: Lấy dữ liệu dự phòng
    static getLocalBackup() {
        const data = localStorage.getItem(this.LOCAL_DATA_KEY);
        return data ? JSON.parse(data) : [];
    }

    // 2. Đẩy dữ liệu lên Cloud (Có cơ chế Hàng đợi)
    static async sendToCloud(data) {
        // Nếu offline, đưa ngay vào hàng đợi và dừng lại
        if (!navigator.onLine) {
            this.addToQueue(data);
            return;
        }

        this.toggleLoader(true, "Đang lưu...");
        try {
            await fetch(CONFIG.SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data)
            });

            // Sau khi gửi thành công, cập nhật luôn bản backup ở local cho đồng bộ
            const currentBackup = this.getLocalBackup();
            if (data.type === 'PLAYER_SYNC') {
                const index = currentBackup.findIndex(p => p.id === data.id);
                if (index > -1) currentBackup[index] = data;
                else currentBackup.push(data);
                localStorage.setItem(this.LOCAL_DATA_KEY, JSON.stringify(currentBackup));
            }
        } catch (e) {
            console.error("Lỗi khi gửi, đưa vào hàng đợi", e);
            this.addToQueue(data);
        } finally {
            setTimeout(() => this.toggleLoader(false), 500);
        }
    }

    // 3. Quản lý hàng đợi (Sync Queue)
    static addToQueue(payload) {
        let queue = JSON.parse(localStorage.getItem(this.SYNC_QUEUE_KEY) || '[]');
        queue.push(payload);
        localStorage.setItem(this.SYNC_QUEUE_KEY, JSON.stringify(queue));

        // Hiển thị thông báo nhỏ cho người dùng biết
        const loader = document.getElementById('sync-loader');
        if (loader) {
            loader.innerText = "⚠️ Đã lưu nháp (Chờ mạng)";
            loader.style.color = "#f39c12";
            loader.style.display = 'block';
            setTimeout(() => { if (loader) loader.style.display = 'none'; }, 3000);
        }
    }

    static async processQueue() {
        if (!navigator.onLine) return; // Nếu gọi nhầm lúc offline thì hủy

        let queue = JSON.parse(localStorage.getItem(this.SYNC_QUEUE_KEY) || '[]');
        if (queue.length === 0) return; // Không có gì để đồng bộ

        this.toggleLoader(true, `🔄 Đang đồng bộ bù (${queue.length})...`);
        let remainingQueue = [];

        for (let payload of queue) {
            try {
                await fetch(CONFIG.SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(payload)
                });
            } catch (e) {
                // Nếu payload này gửi lỗi, giữ lại trong hàng đợi để lần sau gửi tiếp
                remainingQueue.push(payload);
            }
        }

        // Cập nhật lại hàng đợi (xóa những cái đã gửi thành công)
        localStorage.setItem(this.SYNC_QUEUE_KEY, JSON.stringify(remainingQueue));
        this.toggleLoader(false);
    }

    static async syncPlayer(player) {
        const payload = {
            type: 'PLAYER_SYNC',
            ...player
        };
        await this.sendToCloud(payload);
    }

    static toggleLoader(show, text = "🔄 Đang đồng bộ...") {
        const loader = document.getElementById('sync-loader');
        if (loader) {
            loader.innerText = text;
            //loader.style.color = "#333"; // Đặt lại màu chữ bình thường
            loader.style.display = show ? 'block' : 'none';
        }
    }
}

class Player {
    static data = [];

    static async init() {
        this.data = await CloudService.fetchAll();
        if (this.data.length === 0) {
            this.data = [
                { id: "p1", name: "Bi", icon: "👦", score: 0 },
                { id: "p2", name: "Miu", icon: "👧", score: 0 }
            ];
        }
        this.renderList();

        if (!AppState.selectedPlayerId && this.data.length > 0) {
            AppState.selectedPlayerId = this.data[0].id;
        }
    }

    static async addNew() {
        const name = document.getElementById('in-name').value;
        const icon = document.getElementById('in-icon').value || '⭐';
        if (!name) return alert("Nhập tên bé!");

        const newPlayer = { id: 'id_' + Date.now(), name, icon, score: 0 };
        this.data.push(newPlayer);
        await CloudService.syncPlayer(newPlayer);
        this.renderList();
    }
    static getPlayerRank(score) {
        // Tìm rank hiện tại: là rank đầu tiên có limit lớn hơn điểm số của bé
        const currentIndex = RANKS_CONFIG.findIndex(rank => score < rank.limit);

        // Nếu không tìm thấy (điểm cực cao), mặc định là rank cuối cùng
        const safeIndex = currentIndex === -1 ? RANKS_CONFIG.length - 1 : currentIndex;

        return {
            current: RANKS_CONFIG[safeIndex],
            // Rank tiếp theo là phần tử kế tiếp trong mảng
            next: RANKS_CONFIG[safeIndex + 1] || null,
            // Số điểm cần thiết để vượt qua mốc của rank hiện tại
            pointsNeeded: RANKS_CONFIG[safeIndex].limit === Infinity ? 0 : RANKS_CONFIG[safeIndex].limit - score
        };
    }

    static renderList() {
        const container = document.getElementById('list-players');

        // BẢN VÁ 1: Kiểm tra phần tử DOM. 
        // Tránh lỗi "Cannot read properties of null (reading 'innerHTML')" nếu tab chưa kịp render.
        if (!container) {
            console.warn("Element 'list-players' not found. Skipping render.");
            return;
        }

        // BẢN VÁ 2: Đảm bảo this.data luôn là một mảng hợp lệ trước khi Spread syntax (...).
        // Tránh lỗi "this.data is not iterable" nếu dữ liệu Cloud chưa về kịp.
        if (!Array.isArray(this.data)) {
            container.innerHTML = '<div style="text-align: center; color: #7f8c8d;">Đang tải danh sách...</div>';
            return;
        }

        // BẢN VÁ 3: Đảm bảo thuộc tính score luôn là số để hàm sort không bị lỗi NaN.
        const sortedPlayers = [...this.data].sort((a, b) => (b.score || 0) - (a.score || 0));

        container.innerHTML = sortedPlayers.map((player, index) => {
            // Đảm bảo score truyền vào getPlayerRank luôn an toàn
            const currentScore = player.score || 0;
            const rankData = this.getPlayerRank(currentScore);
            const rankPosition = index + 1;

            let rankIcon = '';
            let rankStyleClass = '';
            if (rankPosition === 1) {
                rankIcon = '🥇';
                rankStyleClass = 'rank-1';
            }
            else if (rankPosition === 2) {
                rankIcon = '🥈';
                rankStyleClass = 'rank-2';
            }
            else if (rankPosition === 3) {
                rankIcon = '🥉';
                rankStyleClass = 'rank-3';
            }
            else {
                rankIcon = `⭐ #${rankPosition}`;
                rankStyleClass = 'rank-normal';
            }

            let nextRankHtml = rankData.next ? `<div style="font-size: 13px; color: #7f8c8d; margin-top: 4px;">🎯 Cần <b>+${rankData.pointsNeeded}</b> điểm ➡️ ${rankData.next.icon} ${rankData.next.name}</div>` : '';
            const selectedClass = player.id === AppState.selectedPlayerId ? 'selected' : '';

            return `
    <div class="p-item ${selectedClass} ${rankStyleClass}" onclick="Player.select('${player.id}')">
        <div class="p-info">
            <span style="font-size: 18px; font-weight: bold;">${rankIcon} ${player.icon} ${player.name}</span>
            <span class="rank-badge">${rankData.current.icon} ${rankData.current.name}</span>
            ${nextRankHtml}
        </div>
        <div class="p-score-text">${currentScore} <span style="font-size: 14px; color: #666;">điểm</span></div>
    </div>`
        }).join('');
    }

    static select(playerId) {
        AppState.selectedPlayerId = playerId;
        this.renderList();

        const selectedPlayer = Player.data.find(p => p.id === playerId);
        const playerName = selectedPlayer?.name || '';

        // Safe update - chỉ cập nhật nếu element tồn tại
        const settingsPlayerEl = document.getElementById('settings-player');
        if (settingsPlayerEl) settingsPlayerEl.textContent = playerName;

        // Cập nhật thanh điều hướng nổi
        App.updateFloatingNav();
    }
}

class Game {
    static currentAnswer = 0;
    static currentPoints = 1;
    static lastMathExpression = "";

    static consecutiveCorrectCount = 0; // Biến lưu chuỗi đúng liên tiếp
    static trackPosition = 5; // % từ cạnh trái của đường đua

    static initTrack() {
        const player = Player.data.find(p => p.id === AppState.selectedPlayerId);
        const charEl = document.getElementById('track-character');
        if (charEl && player) charEl.textContent = player.icon;
        this.resetTrack();
    }

    static resetTrack() {
        this.trackPosition = 5;
        const charEl = document.getElementById('track-character');
        const fireEl = document.getElementById('track-fire');
        if (charEl) {
            charEl.style.left = '5%';
            charEl.classList.remove('stumble', 'level-complete', 'running-fast');
            charEl.classList.add('running');
        }
        if (fireEl) fireEl.classList.remove('active');
    }

    static updateTrack(isCorrect, leveledUp) {
        const charEl = document.getElementById('track-character');
        const fireEl = document.getElementById('track-fire');
        if (!charEl) return;

        if (isCorrect) {
            if (leveledUp) {
                this.trackPosition = 90;
                charEl.style.left = '90%';
                charEl.classList.remove('stumble', 'running', 'running-fast');
                charEl.classList.add('level-complete');
                if (fireEl) fireEl.classList.remove('active');
                setTimeout(() => {
                    charEl.classList.remove('level-complete');
                    this.resetTrack();
                }, 1000);
                return;
            }

            if (AppState.isAdventureMode) {
                this.trackPosition = 5 + (AppState.correctStreak / 3) * 78;
            } else {
                this.trackPosition = 5 + ((this.consecutiveCorrectCount % 10) / 10) * 78;
            }

            const onFire = this.consecutiveCorrectCount >= 3;
            charEl.classList.remove('stumble');
            charEl.classList.toggle('running-fast', onFire);
            charEl.classList.toggle('running', !onFire);
            if (fireEl) {
                fireEl.style.left = (this.trackPosition - 8) + '%';
                fireEl.classList.toggle('active', onFire);
            }
        } else {
            const step = AppState.isAdventureMode ? (78 / 3) : (78 / 10);
            this.trackPosition = Math.max(5, this.trackPosition - step * 0.5);
            charEl.classList.add('stumble');
            charEl.classList.remove('running', 'running-fast');
            if (fireEl) fireEl.classList.remove('active');
            setTimeout(() => {
                charEl.classList.remove('stumble');
                charEl.classList.add('running');
            }, 700);
        }

        charEl.style.left = this.trackPosition + '%';
        if (fireEl && isCorrect && this.consecutiveCorrectCount >= 3) {
            fireEl.style.left = (this.trackPosition - 8) + '%';
        }
    }

    static changeOwlMood(mood) {
        const owl = document.getElementById('main-owl');
        if (!owl) return;

        // Xóa các trạng thái cũ
        owl.classList.remove('owl-happy', 'owl-sad');

        if (mood === 'happy') {
            owl.classList.add('owl-happy');
        } else if (mood === 'sad') {
            owl.classList.add('owl-sad');
        }

        // Reset lại trạng thái lơ lửng bình thường sau 3.5 giây
        clearTimeout(this.owlTimeout);
        if (mood !== 'normal') {
            this.owlTimeout = setTimeout(() => {
                owl.classList.remove('owl-happy', 'owl-sad');
            }, 3500);
        }
    }

    // Hàm tạo hiệu ứng pháo hoa
    static triggerConfetti() {
        var duration = 10 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        function randomInRange(min, max) { return Math.random() * (max - min) + min; }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    static SUBJECT_NAMES = {
        'addition': '➕ Phép Cộng',
        'subtraction': '➖ Phép Trừ',
        'multiplication': '✖️ Phép Nhân',
        'logic': '🧠 Toán Tư Duy'
    };

    static ADDITION_CONFIG = {
        totalLevels: 50,
        levels: [
            { min: 1, max: 4, terms: 2, points: 1, desc: "Tập đếm 1 (Tổng < 5)" },
            { min: 2, max: 5, terms: 2, points: 2, desc: "Tập đếm 2 (Tổng <= 5)" },
            { min: 3, max: 6, terms: 2, points: 3, desc: "Vượt qua 5 (Tổng <= 6)" },
            { min: 4, max: 7, terms: 2, points: 4, desc: "Thử thách 7" },
            { min: 5, max: 8, terms: 2, points: 5, desc: "Tiệm cận 8" },
            { min: 5, max: 9, terms: 2, points: 6, desc: "Gần bằng 10" },
            { min: 6, max: 10, terms: 2, points: 7, desc: "Chạm mốc 10" },
            { min: 7, max: 10, terms: 2, points: 8, desc: "Hai bàn tay (1)" },
            { min: 8, max: 10, terms: 2, points: 9, desc: "Hai bàn tay (2)" },
            { min: 2, max: 10, terms: 2, points: 10, desc: "Bậc thầy mốc 10" },
            { min: 11, max: 13, terms: 2, points: 11, desc: "Khám phá số Teen" },
            { min: 12, max: 15, terms: 2, points: 12, desc: "Vượt qua 15" },
            { min: 14, max: 18, terms: 2, points: 13, desc: "Tiến lên 18" },
            { min: 15, max: 20, terms: 2, points: 14, desc: "Chạm mốc 20" },
            { min: 5, max: 10, terms: 3, points: 15, desc: "Làm quen 3 số (nhỏ)" },
            { min: 8, max: 15, terms: 3, points: 16, desc: "Cộng 3 số (tổng < 15)" },
            { min: 10, max: 18, terms: 3, points: 17, desc: "Cộng 3 số (tổng < 18)" },
            { min: 15, max: 20, terms: 3, points: 18, desc: "3 số mốc 20" },
            { min: 10, max: 20, terms: 2, points: 19, desc: "Cao thủ 2 số (mốc 20)" },
            { min: 10, max: 20, terms: 3, points: 20, desc: "Bậc thầy 3 số (mốc 20)" },
            { min: 20, max: 25, terms: 2, points: 21, desc: "Vượt mốc 20" },
            { min: 25, max: 30, terms: 2, points: 22, desc: "Tiến lên 30" },
            { min: 30, max: 40, terms: 2, points: 23, desc: "Chinh phục 40" },
            { min: 40, max: 50, terms: 2, points: 24, desc: "Chạm mốc 50" },
            { min: 20, max: 30, terms: 3, points: 25, desc: "3 số (phạm vi 30)" },
            { min: 30, max: 40, terms: 3, points: 26, desc: "3 số (phạm vi 40)" },
            { min: 40, max: 50, terms: 3, points: 27, desc: "3 số (phạm vi 50)" },
            { min: 10, max: 20, terms: 4, points: 28, desc: "Làm quen 4 số (nhỏ)" },
            { min: 20, max: 35, terms: 4, points: 29, desc: "4 số (phạm vi 35)" },
            { min: 30, max: 50, terms: 4, points: 30, desc: "Bậc thầy 4 số (mốc 50)" },
            { min: 50, max: 60, terms: 2, points: 31, desc: "Vượt mốc 50" },
            { min: 60, max: 80, terms: 2, points: 32, desc: "Chinh phục 80" },
            { min: 80, max: 100, terms: 2, points: 33, desc: "Chạm mốc 100" },
            { min: 50, max: 70, terms: 3, points: 34, desc: "3 số (phạm vi 70)" },
            { min: 70, max: 100, terms: 3, points: 35, desc: "3 số (phạm vi 100)" },
            { min: 40, max: 70, terms: 4, points: 36, desc: "4 số (phạm vi 70)" },
            { min: 60, max: 100, terms: 4, points: 37, desc: "4 số (phạm vi 100)" },
            { min: 20, max: 40, terms: 5, points: 38, desc: "Làm quen 5 số (nhỏ)" },
            { min: 40, max: 70, terms: 5, points: 39, desc: "5 số (phạm vi 70)" },
            { min: 60, max: 100, terms: 5, points: 40, desc: "Bậc thầy 5 số (mốc 100)" },
            { min: 100, max: 200, terms: 2, points: 41, desc: "Cộng số hàng trăm" },
            { min: 200, max: 400, terms: 2, points: 42, desc: "Tiến đến 400" },
            { min: 400, max: 800, terms: 2, points: 43, desc: "Khổng lồ 800" },
            { min: 800, max: 1000, terms: 2, points: 44, desc: "Chạm mốc 1000" },
            { min: 100, max: 300, terms: 3, points: 45, desc: "3 số hàng trăm" },
            { min: 300, max: 600, terms: 3, points: 46, desc: "3 số bùng nổ" },
            { min: 600, max: 1000, terms: 3, points: 47, desc: "Huyền thoại 3 số" },
            { min: 200, max: 500, terms: 4, points: 48, desc: "4 số hàng trăm" },
            { min: 500, max: 1000, terms: 4, points: 49, desc: "Huyền thoại 4 số" },
            { min: 500, max: 1000, terms: 5, points: 50, desc: "Vị Thần Vô Cực (5 số)" }
        ]
    };

    static MULTIPLICATION_CONFIG = {
        totalLevels: 30,
        levels: [
            // Giai đoạn 1: Siêu Dễ - Nhận diện quy luật (Điểm 1 - 7)
            { tables: [1], minM: 1, maxM: 10, points: 1, desc: "Làm quen: Nhân với 1" },
            { tables: [10], minM: 1, maxM: 10, points: 2, desc: "Thêm số 0 thần kỳ (Nhân 10)" },
            { tables: [2], minM: 1, maxM: 5, points: 3, desc: "Bảng nhân 2 (Từ 1 đến 5)" },
            { tables: [2], minM: 6, maxM: 10, points: 4, desc: "Bảng nhân 2 (Từ 6 đến 10)" },
            { tables: [5], minM: 1, maxM: 5, points: 5, desc: "Bảng nhân 5 (Từ 1 đến 5)" },
            { tables: [5], minM: 6, maxM: 10, points: 6, desc: "Bảng nhân 5 (Từ 6 đến 10)" },
            { tables: [1, 2, 5, 10], minM: 1, maxM: 10, points: 7, desc: "Khởi động nhẹ nhàng (1, 2, 5, 10)" },

            // Giai đoạn 2: Trung bình - Tập đếm cộng dồn (Điểm 8 - 12)
            { tables: [3], minM: 1, maxM: 5, points: 8, desc: "Bảng nhân 3 (Từ 1 đến 5)" },
            { tables: [3], minM: 6, maxM: 10, points: 9, desc: "Bảng nhân 3 (Từ 6 đến 10)" },
            { tables: [4], minM: 1, maxM: 5, points: 10, desc: "Bảng nhân 4 (Từ 1 đến 5)" },
            { tables: [4], minM: 6, maxM: 10, points: 11, desc: "Bảng nhân 4 (Từ 6 đến 10)" },
            { tables: [3, 4], minM: 1, maxM: 10, points: 12, desc: "Thử thách nhân 3 và 4" },

            // Giai đoạn 3: Hơi khó - Áp dụng mẹo và quy luật (Điểm 13 - 17)
            { tables: [9], minM: 1, maxM: 5, points: 13, desc: "Bảng nhân 9 (Từ 1 đến 5)" },
            { tables: [9], minM: 6, maxM: 10, points: 14, desc: "Bảng nhân 9 (Từ 6 đến 10)" },
            { tables: [6], minM: 1, maxM: 5, points: 15, desc: "Bảng nhân 6 (Từ 1 đến 5)" },
            { tables: [6], minM: 6, maxM: 10, points: 16, desc: "Bảng nhân 6 (Từ 6 đến 10)" },
            { tables: [6, 9], minM: 1, maxM: 10, points: 17, desc: "Trạm kiểm tra 6 và 9" },

            // Giai đoạn 4: Khó nhất - Thử thách trí nhớ (Điểm 18 - 24)
            { tables: [7], minM: 1, maxM: 5, points: 18, desc: "Bảng nhân 7 (Từ 1 đến 5)" },
            { tables: [7], minM: 6, maxM: 10, points: 19, desc: "Bảng nhân 7 (Từ 6 đến 10)" },
            { tables: [8], minM: 1, maxM: 5, points: 20, desc: "Bảng nhân 8 (Từ 1 đến 5)" },
            { tables: [8], minM: 6, maxM: 10, points: 21, desc: "Bảng nhân 8 (Từ 6 đến 10)" },
            { tables: [7, 8], minM: 1, maxM: 10, points: 22, desc: "Boss Cửu Chương (7 và 8)" },
            { tables: [6, 7, 8, 9], minM: 1, maxM: 10, points: 23, desc: "Tứ Đại Thiên Vương (6, 7, 8, 9)" },
            { tables: [2, 3, 4, 5, 6, 7, 8, 9], minM: 1, maxM: 10, points: 24, desc: "Tốt nghiệp Cửu Chương 🎓" },

            // Giai đoạn 5: Siêu cấp - Số Teen (Lớn hơn 10, Nhỏ hơn 20) (Điểm 25 - 30)
            { tables: [11], minM: 2, maxM: 9, points: 25, desc: "Nhân 11 Thần Tốc" },
            { tables: [12, 13, 14, 15], minM: 2, maxM: 4, points: 26, desc: "Số Teen Nhỏ x Số Nhỏ" },
            { tables: [16, 17, 18, 19], minM: 2, maxM: 4, points: 27, desc: "Số Teen Lớn x Số Nhỏ" },
            { tables: [12, 13, 14, 15], minM: 5, maxM: 9, points: 28, desc: "Số Teen Nhỏ x Số Lớn" },
            { tables: [16, 17, 18, 19], minM: 5, maxM: 9, points: 29, desc: "Số Teen Lớn x Số Lớn" },
            { tables: [11, 12, 13, 14, 15, 16, 17, 18, 19], minM: 2, maxM: 9, points: 30, desc: "Nhà Toán Học Nhí 🏆" }
        ]
    };

    static SUBTRACTION_CONFIG = {
        totalLevels: 50,
        levels: [
            { minA: 2, maxA: 3, minResult: 0, maxResult: 2, points: 1, desc: "Bé tập trừ (Trong 3)" },
            { minA: 3, maxA: 4, minResult: 0, maxResult: 3, points: 2, desc: "Trừ nhỏ (Trong 4)" },
            { minA: 4, maxA: 5, minResult: 0, maxResult: 3, points: 3, desc: "Vượt qua 4 (Trong 5)" },
            { minA: 3, maxA: 5, minResult: 0, maxResult: 4, points: 4, desc: "Tự tin trong 5" },
            { minA: 2, maxA: 5, minResult: 0, maxResult: 4, points: 5, desc: "Chinh phục phạm vi 5" },
            { minA: 4, maxA: 6, minResult: 0, maxResult: 4, points: 6, desc: "Khám phá (Trong 6)" },
            { minA: 5, maxA: 7, minResult: 0, maxResult: 5, points: 7, desc: "Tiến lên 7" },
            { minA: 6, maxA: 8, minResult: 0, maxResult: 6, points: 8, desc: "Chinh phục 8" },
            { minA: 7, maxA: 9, minResult: 0, maxResult: 7, points: 9, desc: "Tiệm cận 10" },
            { minA: 8, maxA: 10, minResult: 0, maxResult: 8, points: 10, desc: "Chạm mốc 10" },
            { minA: 5, maxA: 10, minResult: 0, maxResult: 7, points: 11, desc: "Cao thủ trong 10" },
            { minA: 2, maxA: 10, minResult: 0, maxResult: 9, points: 12, desc: "Bậc thầy trong 10 🎓" },
            { minA: 10, maxA: 13, minResult: 1, maxResult: 9, points: 13, desc: "Khám phá số Teen" },
            { minA: 11, maxA: 14, minResult: 1, maxResult: 10, points: 14, desc: "Teen bước 1" },
            { minA: 13, maxA: 16, minResult: 1, maxResult: 10, points: 15, desc: "Teen bước 2" },
            { minA: 15, maxA: 18, minResult: 1, maxResult: 12, points: 16, desc: "Teen bước 3" },
            { minA: 16, maxA: 20, minResult: 1, maxResult: 14, points: 17, desc: "Tiến đến 20" },
            { minA: 10, maxA: 15, minResult: 0, maxResult: 12, points: 18, desc: "Luyện Teen (Nhỏ)" },
            { minA: 15, maxA: 20, minResult: 0, maxResult: 14, points: 19, desc: "Luyện Teen (Lớn)" },
            { minA: 10, maxA: 20, minResult: 0, maxResult: 19, points: 20, desc: "Bậc thầy trong 20 🎓" },
            { minA: 20, maxA: 25, minResult: 1, maxResult: 15, points: 21, desc: "Vượt mốc 20" },
            { minA: 20, maxA: 25, minResult: 5, maxResult: 20, points: 22, desc: "Tập trừ lớn (1)" },
            { minA: 25, maxA: 30, minResult: 5, maxResult: 20, points: 23, desc: "Tiến đến 30" },
            { minA: 20, maxA: 30, minResult: 0, maxResult: 25, points: 24, desc: "Chinh phục 30" },
            { minA: 30, maxA: 35, minResult: 5, maxResult: 25, points: 25, desc: "Vượt mốc 30" },
            { minA: 30, maxA: 40, minResult: 5, maxResult: 30, points: 26, desc: "Chinh phục 40" },
            { minA: 40, maxA: 45, minResult: 5, maxResult: 30, points: 27, desc: "Vượt mốc 40" },
            { minA: 40, maxA: 50, minResult: 5, maxResult: 40, points: 28, desc: "Chạm mốc 50" },
            { minA: 20, maxA: 50, minResult: 0, maxResult: 40, points: 29, desc: "Cao thủ trong 50" },
            { minA: 20, maxA: 50, minResult: 0, maxResult: 45, points: 30, desc: "Bậc thầy trong 50 🎓" },
            { minA: 50, maxA: 60, minResult: 1, maxResult: 25, points: 31, desc: "Vượt mốc 50" },
            { minA: 50, maxA: 60, minResult: 10, maxResult: 40, points: 32, desc: "Trừ lớn trong 60" },
            { minA: 60, maxA: 70, minResult: 10, maxResult: 40, points: 33, desc: "Chinh phục 70" },
            { minA: 60, maxA: 80, minResult: 10, maxResult: 50, points: 34, desc: "Chinh phục 80" },
            { minA: 70, maxA: 80, minResult: 20, maxResult: 60, points: 35, desc: "Trừ lớn trong 80" },
            { minA: 80, maxA: 90, minResult: 20, maxResult: 70, points: 36, desc: "Chinh phục 90" },
            { minA: 80, maxA: 100, minResult: 20, maxResult: 75, points: 37, desc: "Chạm mốc 100" },
            { minA: 50, maxA: 80, minResult: 0, maxResult: 70, points: 38, desc: "Cao thủ trong 100 (1)" },
            { minA: 50, maxA: 100, minResult: 0, maxResult: 80, points: 39, desc: "Cao thủ trong 100 (2)" },
            { minA: 50, maxA: 100, minResult: 0, maxResult: 90, points: 40, desc: "Bậc thầy trong 100 🎓" },
            { minA: 100, maxA: 150, minResult: 10, maxResult: 80, points: 41, desc: "Trừ số hàng trăm" },
            { minA: 100, maxA: 200, minResult: 20, maxResult: 150, points: 42, desc: "Tiến đến 200" },
            { minA: 200, maxA: 300, minResult: 50, maxResult: 200, points: 43, desc: "Chinh phục 300" },
            { minA: 200, maxA: 300, minResult: 100, maxResult: 250, points: 44, desc: "Trừ lớn trong 300" },
            { minA: 300, maxA: 400, minResult: 100, maxResult: 300, points: 45, desc: "Vượt mốc 400" },
            { minA: 400, maxA: 500, minResult: 100, maxResult: 400, points: 46, desc: "Chinh phục 500" },
            { minA: 500, maxA: 700, minResult: 200, maxResult: 600, points: 47, desc: "Huyền thoại 700" },
            { minA: 700, maxA: 900, minResult: 300, maxResult: 800, points: 48, desc: "Huyền thoại 900" },
            { minA: 500, maxA: 1000, minResult: 100, maxResult: 800, points: 49, desc: "Huyền thoại 1000" },
            { minA: 500, maxA: 1000, minResult: 100, maxResult: 950, points: 50, desc: "Vị Thần Trừ Pháp 🏆" }
        ]
    };

    static LOGIC_CONFIG = {
        totalLevels: 20,
        levels: [
            { rows: 3, hiddenCount: 1, maxNum: 10, points: 100, desc: "Tháp 3 tầng (1 ô ẩn, số < 10)" },
            { rows: 3, hiddenCount: 1, maxNum: 15, points: 105, desc: "Tháp 3 tầng (1 ô ẩn, số < 15)" },
            { rows: 3, hiddenCount: 1, maxNum: 20, points: 110, desc: "Tháp 3 tầng (1 ô ẩn, số < 20)" },
            { rows: 3, hiddenCount: 2, maxNum: 25, points: 115, desc: "Tháp 3 tầng (2 ô ẩn, số < 25)" },
            { rows: 3, hiddenCount: 3, maxNum: 30, points: 120, desc: "Tháp 3 tầng (3 ô ẩn, số < 30)" },
            { rows: 4, hiddenCount: 1, maxNum: 50, points: 125, desc: "Tháp 4 tầng (1 ô ẩn, số < 50)" },
            { rows: 4, hiddenCount: 2, maxNum: 60, points: 130, desc: "Tháp 4 tầng (2 ô ẩn, số < 60)" },
            { rows: 4, hiddenCount: 3, maxNum: 80, points: 135, desc: "Tháp 4 tầng (3 ô ẩn, số < 80)" },
            { rows: 4, hiddenCount: 4, maxNum: 100, points: 140, desc: "Tháp 4 tầng (4 ô ẩn, số < 100)" },
            { rows: 4, hiddenCount: 5, maxNum: 120, points: 145, desc: "Tháp 4 tầng (5 ô ẩn, số < 120)" },
            { rows: 5, hiddenCount: 2, maxNum: 150, points: 150, desc: "Tháp 5 tầng (2 ô ẩn, số < 150)" },
            { rows: 5, hiddenCount: 4, maxNum: 200, points: 155, desc: "Tháp 5 tầng (4 ô ẩn, số < 200)" },
            { rows: 5, hiddenCount: 6, maxNum: 250, points: 160, desc: "Tháp 5 tầng (6 ô ẩn, số < 250)" },
            { rows: 5, hiddenCount: 8, maxNum: 300, points: 165, desc: "Tháp 5 tầng (8 ô ẩn, số < 300)" },
            { rows: 5, hiddenCount: 10, maxNum: 400, points: 170, desc: "Tháp 5 tầng (10 ô ẩn, số < 400)" },
            { rows: 6, hiddenCount: 3, maxNum: 500, points: 175, desc: "Tháp 6 tầng (3 ô ẩn, số < 500)" },
            { rows: 6, hiddenCount: 6, maxNum: 600, points: 180, desc: "Tháp 6 tầng (6 ô ẩn, số < 600)" },
            { rows: 6, hiddenCount: 9, maxNum: 800, points: 185, desc: "Tháp 6 tầng (9 ô ẩn, số < 800)" },
            { rows: 6, hiddenCount: 12, maxNum: 1000, points: 190, desc: "Tháp 6 tầng (12 ô ẩn, số < 1000)" },
            { rows: 6, hiddenCount: 15, maxNum: 1500, points: 200, desc: "Tháp 6 tầng (Boss, số < 1500)" }
        ]
    };

    static init() {
        if (!AppState.selectedSubject) AppState.selectedSubject = 'addition';
        this.updateLevelDropdown();
        if (AppState.selectedPlayerId) this.updateScoreUI();
        this.applyTheme();
    }

    static applyTheme() {
        const playZone = document.querySelector('.play-zone');
        if (!playZone) return;

        // Xóa các class theme cũ
        playZone.classList.remove('theme-jungle', 'theme-ocean', 'theme-universe', 'theme-logic');

        // Áp dụng theme mới dựa trên môn học
        if (AppState.selectedSubject === 'addition') {
            playZone.classList.add('theme-jungle');
        } else if (AppState.selectedSubject === 'subtraction') {
            playZone.classList.add('theme-ocean');
        } else if (AppState.selectedSubject === 'multiplication') {
            playZone.classList.add('theme-universe');
        } else if (AppState.selectedSubject === 'logic') {
            playZone.classList.add('theme-logic');
        }
    }

    static getConfig() {
        if (AppState.selectedSubject === 'multiplication') return this.MULTIPLICATION_CONFIG;
        if (AppState.selectedSubject === 'subtraction') return this.SUBTRACTION_CONFIG;
        if (AppState.selectedSubject === 'logic') return this.LOGIC_CONFIG;
        return this.ADDITION_CONFIG;
    }

    static selectSubject(subjectId, event) {
        AppState.selectedSubject = subjectId;
        AppState.currentLevel = 0;

        document.querySelectorAll('.subject-card').forEach(card => card.classList.remove('selected'));

        // Fix lỗi event: Sử dụng event.currentTarget để lấy đúng thẻ div.subject-card
        // kể cả khi bé click vào icon (div con)
        if (event) {
            const target = event.currentTarget || event.target.closest('.subject-card');
            if (target) target.classList.add('selected');
        }

        document.getElementById('selected-player-name').textContent = Player.data.find(p => p.id === AppState.selectedPlayerId)?.name || '';
        document.getElementById('selected-subject-name').textContent = this.SUBJECT_NAMES[subjectId];
        document.getElementById('subject-summary').style.display = 'flex';

        this.applyTheme();
        this.updateLevelDropdown();

        // Cập nhật thanh điều hướng nổi
        App.updateFloatingNav();
    }

    static updateLevelDropdown() {
        const levelSelect = document.getElementById('sel-level');
        const config = this.getConfig();
        levelSelect.innerHTML = config.levels.map((level, index) => {
            return `<option value="${index}">Cấp ${index + 1} | ${level.desc} | Điểm: ±${level.points}</option>`;
        }).join('');
        levelSelect.value = AppState.currentLevel;
    }

    static setLevel(lv) {
        AppState.currentLevel = parseInt(lv);
        AppState.correctStreak = 0; // Reset chuỗi khi đổi level thủ công
        AppState.incorrectStreak = 0;
        TrackingService.logAction('CHANGE_LEVEL', { level: AppState.currentLevel + 1 });
    }

    static toggleAdventureMode(enabled) {
        AppState.isAdventureMode = enabled;
        AppState.correctStreak = 0;
        AppState.incorrectStreak = 0;
        
        // Cập nhật UI nút chọn
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
        if (enabled) {
            document.getElementById('mode-adventure').classList.add('active');
        } else {
            document.getElementById('mode-manual').classList.add('active');
        }
        
        // Luôn cho phép chọn level (làm mốc bắt đầu cho Thám Hiểm)
        document.getElementById('sel-level').disabled = false;
        document.getElementById('sel-level').style.opacity = "1";

        TrackingService.logAction('TOGGLE_ADVENTURE', { enabled });
    }

    static showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `game-toast toast-${type}`;
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }

    static updateScoreUI() {
        const player = Player.data.find(x => x.id === AppState.selectedPlayerId);
        const scoreContainer = document.getElementById('display-score');

        if (player) {
            const rankData = Player.getPlayerRank(player.score);
            let encouragementHtml = "";
            
            if (rankData.next) {
                // Tính % hoàn thành rank hiện tại
                const currentIndex = RANKS_CONFIG.findIndex(r => r.name === rankData.current.name);
                const previousLimit = currentIndex > 0 ? RANKS_CONFIG[currentIndex - 1].limit : 0;
                const totalPointsForThisRank = rankData.current.limit - previousLimit;
                const pointsEarnedInThisRank = player.score - previousLimit;
                const progressPercent = Math.min(100, Math.max(0, (pointsEarnedInThisRank / totalPointsForThisRank) * 100));

                encouragementHtml = `
                    <div style="font-size: 11px; color: #666; margin-top: 8px; font-weight: 600;">Tiến trình tới: ${rankData.next.icon} ${rankData.next.name}</div>
                    <div class="rank-progress-bar">
                        <div class="rank-progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div style="font-size: 11px; color: #2980b9; font-weight: bold; margin-top: 2px;">Cần +${rankData.pointsNeeded} điểm nữa</div>
                `;
            } else {
                encouragementHtml = `<div style="font-size: 14px; color: #27ae60; margin-top: 6px; font-weight: bold;">🌟 Vô cực! Đỉnh cao!</div>`;
            }

            scoreContainer.innerHTML = `
                <div class="rank-badge" style="border-color: #e67e22; font-size: 14px; padding: 4px 10px;">${rankData.current.icon} ${rankData.current.name}</div>
                <div style="margin-top: 5px; color: var(--primary-color); font-size: 22px; font-weight: bold;">${player.score} <span style="font-size: 12px; color: #666; font-weight: normal;">điểm</span></div>
                ${encouragementHtml}
            `;
        } else {
            scoreContainer.innerHTML = 'Điểm: 0';
        }
    }

    static showRankUpCelebration(rank) {
        this.triggerConfetti();
        SoundService.playFireworkSound();

        const toast = document.createElement('div');
        toast.className = 'game-toast toast-rankup show';
        toast.innerHTML = `
            <div class="rankup-icon">${rank.icon}</div>
            <div class="rankup-title">THĂNG CẤP DANH HIỆU!</div>
            <div class="rankup-subtitle">Bé đã xuất sắc trở thành</div>
            <div class="rankup-name">${rank.name}</div>
        `;
        document.body.appendChild(toast);

        // Bấm vào để tắt sớm
        toast.onclick = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        };

        // Tự động tắt sau 5 giây
        setTimeout(() => {
            if (document.body.contains(toast)) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 500);
            }
        }, 5000);
    }

    static updateGameInfo() {
        const player = Player.data.find(p => p.id === AppState.selectedPlayerId);
        if (player) {
            document.getElementById('playing-player-icon').textContent = player.icon;
            document.getElementById('playing-player-name').textContent = player.name;
        }

        document.getElementById('game-subject').textContent = this.SUBJECT_NAMES[AppState.selectedSubject];
        document.getElementById('game-level').textContent = (AppState.isAdventureMode ? "🚀 " : "🎯 ") + `Cấp ${AppState.currentLevel + 1}`;
        document.getElementById('game-points').textContent = `✅ +${this.currentPoints} / ❌ -${this.currentPoints}`;
        
        // Hiển thị thanh năng lượng nếu ở chế độ thám hiểm
        const streakContainer = document.getElementById('streak-indicator');
        if (streakContainer) {
            if (AppState.isAdventureMode) {
                streakContainer.style.display = 'flex';
                let dots = "";
                for(let i=0; i<3; i++) {
                    dots += `<span class="streak-dot ${i < AppState.correctStreak ? 'active' : ''}">⭐</span>`;
                }
                streakContainer.innerHTML = dots;
            } else {
                streakContainer.style.display = 'none';
            }
        }
    }

    static getAdditionStoryQuestion(numbers) {
        const numCount = numbers.length;
        if (numCount === 2) {
            const stories = [
                `Heo Peppa làm được ${numbers[0]} cái bánh xèo, George làm thêm được ${numbers[1]} cái nữa. Hai chị em có tất cả bao nhiêu cái bánh xèo?`,
                `Elsa bằng phép thuật tạo ra ${numbers[0]} bông tuyết bay lơ lửng, Anna gom thêm được ${numbers[1]} bông nữa. Cả hai chị em có tất cả bao nhiêu bông tuyết?`,
                `Khủng long T-Rex ăn hết ${numbers[0]} cái đùi gà, rồi lại gọi thêm ${numbers[1]} cái burger khổng lồ. T-Rex đã ăn tổng cộng bao nhiêu món?`,
                `Người Nhện giải cứu được ${numbers[0]} chú mèo con và ${numbers[1]} chú cún con bị kẹt trên mái nhà. Người Nhện đã cứu được bao nhiêu bạn nhỏ?`,
                `Trong rương kho báu, hải tặc tìm thấy ${numbers[0]} đồng tiền vàng lấp lánh và ${numbers[1]} viên kim cương. Có tất cả bao nhiêu báu vật?`,
                `Bé có ${numbers[0]} quyển truyện tranh siêu anh hùng, mẹ mua tặng thêm ${numbers[1]} quyển nữa. Hỏi bé đang có bao nhiêu quyển truyện?`,
                `Doraemon lấy từ túi thần kỳ ra ${numbers[0]} cái bánh rán, Nobita mua thêm ${numbers[1]} cái nữa. Cả hai bạn có tất cả bao nhiêu cái bánh rán?`
            ];
            return stories[Math.floor(Math.random() * stories.length)];
        }
        else if (numCount === 3) {
            const stories = [
                `Đội chó cứu hộ Paw Patrol tìm được ${numbers[0]} khúc xương, Chase nhặt thêm ${numbers[1]} quả bóng rổ, và Rubble mang về ${numbers[2]} khối Lego. Biệt đội có tất cả bao nhiêu món đồ?`,
                `Trong khu rừng ma thuật, có ${numbers[0]} chú lùn hái nấm, ${numbers[1]} bà tiên đang bay và ${numbers[2]} con kỳ lân ăn cỏ. Có tất cả bao nhiêu nhân vật trong rừng?`,
                `Đoàn tàu hoạt hình gồm ${numbers[0]} toa chở kem, ${numbers[1]} toa chở dưa hấu và ${numbers[2]} toa chở kẹo mút. Hỏi đoàn tàu chở tất cả bao nhiêu toa đồ ăn vặt?`,
                `Gia đình nhà Gấu đi cắm trại mang theo: ${numbers[0]} hộp xúc xích, ${numbers[1]} gói kẹo dẻo và ${numbers[2]} hộp vỉ sữa dâu. Họ đã mang tổng cộng bao nhiêu món ăn?`,
                `Thám tử Pikachu tìm ra ${numbers[0]} dấu chân bí ẩn, ${numbers[1]} chiếc lá kẹp trong rương và ${numbers[2]} sợi lông vũ. Có tất cả bao nhiêu manh mối?`
            ];
            return stories[Math.floor(Math.random() * stories.length)];
        }
        else {
            let itemLists = [
                ["chiếc xe hơi đồ chơi", "khối Lego", "Robot biến hình", "lõi pin", "siêu xe đua"],
                ["cái kẹo mút", "bánh donut sô-cô-la", "cây kem ốc quế", "thanh kẹo dẻo", "cái bánh quy bơ"],
                ["quả dâu tây", "quả mâm xôi", "quả đào thơm", "quả việt quất", "quả kiwi"],
                ["chiếc kẹp tóc", "vòng cổ ngọc trai", "băng đô nơ", "chiếc nhẫn đồ chơi", "vòng tay xinh"]
            ];
            let items = itemLists[Math.floor(Math.random() * itemLists.length)];
            let story = "Chiếc túi ma thuật vừa rớt ra: ";
            for (let i = 0; i < numbers.length; i++) {
                let itemName = items[i % items.length];
                story += `${numbers[i]} ${itemName}`;
                if (i === numbers.length - 2) story += " và ";
                else if (i < numbers.length - 2) story += ", ";
            }
            story += ". Hỏi túi ma thuật đã rớt ra tổng cộng bao nhiêu đồ vật?";
            return story;
        }
    }

    static getMultiplicationStoryQuestion(num1, num2) {
        const stories = [
            `Bi xếp được ${num1} ngôi nhà bằng Lego, mỗi ngôi nhà Bi cắm thêm ${num2} lá cờ siêu nhân. Hỏi Bi đã dùng tất cả bao nhiêu lá cờ?`,
            `Mỗi ngày bé ngoan được cô giáo tặng ${num1} ngôi sao lấp lánh. Trải qua ${num2} ngày chăm ngoan, bé có tổng cộng bao nhiêu ngôi sao?`,
            `Công chúa Elsa đắp ${num1} người tuyết khổng lồ, mỗi người tuyết đội đúng ${num2} chiếc mũ len ấm áp. Hỏi Elsa đã dùng tất cả bao nhiêu chiếc mũ?`,
            `Một siêu xe địa hình hầm hố có ${num1} bánh xe. Nếu đội đua có ${num2} siêu xe giống vậy thì họ có tổng cộng bao nhiêu bánh xe chạy trên đường?`,
            `Mẹ làm món kẹo hồ lô nướng, mỗi xiên kẹo có đúng ${num1} quả dâu tây đỏ mọng. Mẹ làm tổng cộng ${num2} xiên. Hỏi mẹ đã dùng bao nhiêu quả dâu tây?`,
            `Người Nhện vừa giăng ra ${num1} cái mạng nhện siêu bự, trên mỗi mạng có ${num2} chú nhện con đang xích đu. Có tổng cộng bao nhiêu chú nhện con?`,
            `Ba mua cho nhà ${num1} hộp bánh pizza béo ngậy, mỗi hộp được chia đúng thành ${num2} miếng. Có tất cả bao nhiêu miếng pizza thơm ngon chờ bé ăn đây?`
        ];
        return stories[Math.floor(Math.random() * stories.length)];
    }

    static getSubtractionStoryQuestion(a, b) {
        const stories = [
            `Bi có ${a} viên kẹo sô-cô-la, Bi ăn mất ${b} viên ngon lành. Hỏi Bi còn mấy viên kẹo?`,
            `Miu hái được ${a} bông hoa hồng tặng mẹ, nhưng trên đường về bị rơi mất ${b} bông. Hỏi Miu còn mấy bông?`,
            `Trên cành cây có ${a} chú chim sẻ, bỗng có ${b} chú chim bay đi mất. Còn lại mấy chú chim trên cành?`,
            `Công chúa Elsa tạo ra ${a} cột băng, do trời nắng nên ${b} cột bị tan chảy. Còn lại bao nhiêu cột băng?`,
            `Người Nhện giăng được ${a} lớp mạng nhện, kẻ xấu đã dùng kiếm cắt đứt ${b} lớp. Còn lại bao nhiêu lớp mạng?`,
            `Trong rương kho báu có ${a} đồng tiền vàng, Bi đã lấy ${b} đồng để mua đồ chơi. Trong rương còn lại bao nhiêu?`,
            `Đoàn tàu hoạt hình có ${a} toa, đến ga đã tháo rời ${b} toa hàng. Hỏi đoàn tàu còn lại bao nhiêu toa?`
        ];
        return stories[Math.floor(Math.random() * stories.length)];
    }

    static newQuestion() {
        this.changeOwlMood('normal'); // Reset cú mèo về trạng thái bình thường khi sang câu mới
        TrackingService.startQuizTimer();
        document.getElementById('text-feedback').innerText = '';
        const config = this.getConfig();
        const levelConfig = config.levels[AppState.currentLevel];
        this.currentPoints = levelConfig.points;

        // Xử lý riêng cho môn Toán Tư Duy (Logic)
        if (AppState.selectedSubject === 'logic') {
            document.getElementById('standard-layout').style.display = 'none';
            document.getElementById('logic-layout').style.display = 'flex';
            document.getElementById('text-question').innerText = "Điền số thích hợp vào các ô trống trong tháp:";
            this.generatePyramid(levelConfig);
            this.updateGameInfo();
            return;
        }

        // Trở về giao diện cơ bản cho các môn khác
        document.getElementById('standard-layout').style.display = 'block';
        document.getElementById('logic-layout').style.display = 'none';
        document.getElementById('btn-finish-pyramid').style.display = 'none';

        let mathExpression = "";
        let attempts = 0; // Tránh treo trình duyệt nếu level đó chỉ có 1 câu hỏi duy nhất

        // 🌟 Thay đổi thuật toán: Dùng lặp Do-While để thử random nhiều nhất 5 lần nếu câu hỏi bị trùng với ván trước
        do {
            if (AppState.selectedSubject === 'multiplication') {
                const randomTable = levelConfig.tables[Math.floor(Math.random() * levelConfig.tables.length)];
                const randomMultiplier = Math.floor(Math.random() * (levelConfig.maxM - levelConfig.minM + 1)) + levelConfig.minM;

                this.currentAnswer = randomTable * randomMultiplier;

                const showReversed = Math.random() > 0.5;
                const num1 = showReversed ? randomMultiplier : randomTable;
                const num2 = showReversed ? randomTable : randomMultiplier;

                document.getElementById('text-question').innerText = this.getMultiplicationStoryQuestion(num1, num2);
                mathExpression = `${num1} <span style="color: #e74c3c;">✖️</span> ${num2}`;
            } else if (AppState.selectedSubject === 'subtraction') {
                const a = Math.floor(Math.random() * (levelConfig.maxA - levelConfig.minA + 1)) + levelConfig.minA;
                const maxRes = Math.min(levelConfig.maxResult, a);
                const result = Math.floor(Math.random() * (maxRes - levelConfig.minResult + 1)) + levelConfig.minResult;
                const b = a - result;

                this.currentAnswer = result;
                document.getElementById('text-question').innerText = this.getSubtractionStoryQuestion(a, b);
                mathExpression = `${a} <span style="color: #e74c3c;">➖</span> ${b}`;
            } else {
                const termsCount = levelConfig.terms || 2;
                const minTotal = Math.max(levelConfig.min, termsCount);
                const total = Math.floor(Math.random() * (levelConfig.max - minTotal + 1)) + minTotal;
                this.currentAnswer = total;

                let remaining = total;
                let numbersArray = [];

                for (let i = 0; i < termsCount - 1; i++) {
                    let maxVal = remaining - (termsCount - 1 - i);
                    if (maxVal < 1) maxVal = 1;
                    let val = Math.floor(Math.random() * maxVal) + 1;
                    numbersArray.push(val);
                    remaining -= val;
                }
                numbersArray.push(remaining);
                numbersArray.sort(() => Math.random() - 0.5);

                document.getElementById('text-question').innerText = this.getAdditionStoryQuestion(numbersArray);
                mathExpression = numbersArray.join(' <span style="color: #e74c3c;">➕</span> ');
            }

            attempts++;
        } while (mathExpression === this.lastMathExpression && attempts < 5);

        // Lưu lại biểu thức này cho vòng sau đem ra so sánh
        this.lastMathExpression = mathExpression;

        this.updateGameInfo();

        document.getElementById('box-visual').innerHTML = `
                <div style="font-size: 50px; font-weight: 800; color: var(--secondary-color); letter-spacing: 2px; padding: 20px; line-height: 1.2;">
                    ${mathExpression} = <span style="color: var(--warning-color);">?</span>
                </div>
            `;

        this.renderOptions(this.currentAnswer);
    }

        this.renderOptions(this.currentAnswer);
    }

    static currentPyramid = [];
    static hiddenCells = [];
    static selectedCell = null;
    static hasFirstSubmit = false; // Theo dõi việc gửi kết quả lần đầu (để tính streak)

    static generatePyramid(config) {
        this.hasFirstSubmit = false;
        const rows = config.rows;
        this.currentPyramid = [];
        this.hiddenCells = [];
        this.selectedCell = null;

        // 1. Sinh hàng đáy
        let bottomRow = [];
        for (let i = 0; i < rows; i++) {
            // maxNum là giới hạn tổng thể của level, ta nên chia ra cho các đáy nhỏ hơn
            const maxBottom = Math.max(1, Math.floor(config.maxNum / Math.pow(2, rows - 1)));
            bottomRow.push(Math.floor(Math.random() * maxBottom) + 1);
        }

        // 2. Tính toàn bộ tháp từ dưới lên
        let currentLevel = bottomRow;
        this.currentPyramid.push([...currentLevel]);

        for (let r = 1; r < rows; r++) {
            let nextLevel = [];
            for (let i = 0; i < currentLevel.length - 1; i++) {
                nextLevel.push(currentLevel[i] + currentLevel[i+1]);
            }
            this.currentPyramid.push([...nextLevel]);
            currentLevel = nextLevel;
        }

        // Đảo ngược lại để mảng có đỉnh ở index 0, đáy ở cuối
        this.currentPyramid.reverse();

        // 3. Chọn ngẫu nhiên các ô ẩn
        let allPositions = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < this.currentPyramid[r].length; c++) {
                allPositions.push({r, c});
            }
        }
        
        allPositions.sort(() => Math.random() - 0.5);
        for (let i = 0; i < config.hiddenCount && i < allPositions.length; i++) {
            const pos = allPositions[i];
            this.hiddenCells.push({
                r: pos.r, 
                c: pos.c, 
                correctValue: this.currentPyramid[pos.r][pos.c],
                currentValue: null
            });
        }

        this.renderPyramid();
    }

    static renderPyramid() {
        const container = document.getElementById('pyramid-container');
        let html = '';

        for (let r = 0; r < this.currentPyramid.length; r++) {
            html += '<div class="pyramid-row">';
            for (let c = 0; c < this.currentPyramid[r].length; c++) {
                const hiddenData = this.hiddenCells.find(h => h.r === r && h.c === c);
                
                if (hiddenData) {
                    const isSelected = this.selectedCell && this.selectedCell.r === r && this.selectedCell.c === c;
                    const classList = ['pyramid-cell', 'empty-cell'];
                    if (isSelected) classList.push('cell-selected');
                    if (hiddenData.currentValue !== null) classList.push('cell-filled');

                    const displayValue = hiddenData.currentValue !== null ? hiddenData.currentValue : '';
                    
                    html += `<div class="${classList.join(' ')}" id="cell-${r}-${c}" onclick="Game.selectPyramidCell(${r}, ${c})">${displayValue}</div>`;
                } else {
                    html += `<div class="pyramid-cell">${this.currentPyramid[r][c]}</div>`;
                }
            }
            html += '</div>';
        }
        container.innerHTML = html;
        this.checkPyramidCompletion();
    }

    static selectPyramidCell(r, c) {
        this.selectedCell = {r, c};
        this.renderPyramid();
        
        // Reset state classes on click
        const cellEl = document.getElementById(`cell-${r}-${c}`);
        if(cellEl) cellEl.classList.remove('cell-wrong');
    }

    static numpadInput(val) {
        if (!this.selectedCell) return;
        
        const hiddenData = this.hiddenCells.find(h => h.r === this.selectedCell.r && h.c === this.selectedCell.c);
        if (!hiddenData) return;

        if (val === 'del') {
            if (hiddenData.currentValue !== null) {
                let strVal = hiddenData.currentValue.toString();
                if (strVal.length > 1) {
                    hiddenData.currentValue = parseInt(strVal.slice(0, -1));
                } else {
                    hiddenData.currentValue = null;
                }
            }
        } else {
            let currentStr = hiddenData.currentValue !== null ? hiddenData.currentValue.toString() : "";
            // Giới hạn độ dài nhập (max 5 chữ số)
            if (currentStr.length < 5) {
                hiddenData.currentValue = parseInt(currentStr + val);
            }
        }
        this.renderPyramid();
    }

    static numpadConfirm() {
        this.selectedCell = null;
        this.renderPyramid();
    }

    static checkPyramidCompletion() {
        // Kiểm tra xem tất cả các ô đã được điền chưa
        const isComplete = this.hiddenCells.every(h => h.currentValue !== null);
        const btnFinish = document.getElementById('btn-finish-pyramid');
        if (isComplete) {
            btnFinish.style.display = 'inline-block';
        } else {
            btnFinish.style.display = 'none';
        }
    }

    static async checkPyramid() {
        const player = Player.data.find(p => p.id === AppState.selectedPlayerId);
        if (!player) return;

        let allCorrect = true;
        this.hiddenCells.forEach(h => {
            if (h.currentValue !== h.correctValue) {
                allCorrect = false;
                const cellEl = document.getElementById(`cell-${h.r}-${h.c}`);
                if (cellEl) cellEl.classList.add('cell-wrong');
            }
        });

        const isFirstSubmit = !this.hasFirstSubmit;
        this.hasFirstSubmit = true;
        
        const feedbackElement = document.getElementById('text-feedback');
        
        TrackingService.logQuiz("Tháp số tổ ong", "...", "...", allCorrect);
        
        // Lưu Rank cũ trước khi cộng điểm
        const oldRankName = Player.getPlayerRank(player.score).current.name;
        const prevLevel = AppState.currentLevel;

        if (allCorrect) {
            this.changeOwlMood('happy');
            
            // Chỉ tăng chuỗi đúng nếu trả lời đúng ngay lần gửi đầu tiên
            if (isFirstSubmit) {
                this.consecutiveCorrectCount++;
            }
            
            if (this.consecutiveCorrectCount > 0 && this.consecutiveCorrectCount % 5 === 0) {
                this.triggerConfetti();
                SoundService.playFireworkSound();
            } else {
                SoundService.playTrueSound();
            }
            
            player.score += this.currentPoints;
            let streakText = this.consecutiveCorrectCount >= 2 ? ` (🔥 Đang đúng ${this.consecutiveCorrectCount} câu liên tiếp!)` : '';
            feedbackElement.innerHTML = `<span style="color:var(--success-color)">🌟 Xuất sắc, ${player.name} ơi! Đúng rồi (+${this.currentPoints} điểm)! <br><span style="font-size: 16px; color: #d35400;">${streakText}</span></span>`;

            // Ẩn bàn phím và nút hoàn thành
            document.getElementById('numpad-container').style.display = 'none';
            document.getElementById('btn-finish-pyramid').style.display = 'none';
            
            this.selectedCell = null;
            this.hiddenCells.forEach(h => {
                const cellEl = document.getElementById(`cell-${h.r}-${h.c}`);
                if (cellEl) cellEl.classList.remove('empty-cell', 'cell-selected');
            });

            if (AppState.isAdventureMode && isFirstSubmit) {
                AppState.correctStreak++;
                AppState.incorrectStreak = 0;
                if (AppState.correctStreak >= 3) {
                    const config = this.getConfig();
                    if (AppState.currentLevel < config.levels.length - 1) {
                        AppState.currentLevel++;
                        AppState.correctStreak = 0;
                        this.showToast("🚀 TUYỆT VỜI! Bạn đã thăng lên Cấp " + (AppState.currentLevel + 1), "success");
                    }
                }
            }

            feedbackElement.innerHTML += `
            <div class="floating-next-container">
                <button class="btn-next floating-btn" onclick="Game.newQuestion()">Đi tiếp nào! 🚀</button>
            </div>
            `;
            
            this.updateTrack(true, AppState.currentLevel > prevLevel);
            
            // Cập nhật điểm lên UI
            this.updateScoreUI();
            
            const newRank = Player.getPlayerRank(player.score).current;
            if (newRank.name !== oldRankName) {
                this.showRankUpCelebration(newRank);
            }

            await CloudService.syncPlayer(player);
        } else {
            this.changeOwlMood('sad');
            SoundService.playFalseSound();
            feedbackElement.innerHTML = `<span style="color:var(--error-color)">❌ Có ô chưa chính xác rồi ${player.name} ơi! Sửa lại những ô màu đỏ nhé!</span>`;
            
            // Sai thì không reset streak hay lùi level theo yêu cầu mới, cũng không trừ điểm
            this.updateTrack(false, false);
        }
    }

    static renderOptions(correctAnswer) {
        const options = new Set([correctAnswer]);
        const maxOffset = Math.max(5, Math.floor(correctAnswer * 0.2));

        while (options.size < 3) {
            let offset = Math.floor(Math.random() * (maxOffset * 2 + 1)) - maxOffset;
            if (offset === 0) offset = 2;

            const wrongAnswer = correctAnswer + offset;
            if (wrongAnswer !== correctAnswer && wrongAnswer >= 0) {
                options.add(wrongAnswer);
            }
        }

        document.getElementById('box-options').innerHTML = Array.from(options)
            .sort(() => Math.random() - 0.5)
            .map(optionValue => `<button class="btn-opt" onclick="Game.check(${optionValue})">${optionValue}</button>`)
            .join('');
    }

    static async check(selectedValue) {
        const player = Player.data.find(p => p.id === AppState.selectedPlayerId);
        const feedbackElement = document.getElementById('text-feedback');
        const optionsContainer = document.getElementById('box-options');

        const isCorrect = (selectedValue === this.currentAnswer);
        const questionText = document.getElementById('text-question').innerText;

        TrackingService.logQuiz(questionText, selectedValue, this.currentAnswer, isCorrect);

        if (!player) return;

        // Lưu Rank cũ trước khi cộng điểm
        const oldRankName = Player.getPlayerRank(player.score).current.name;
        const prevLevel = AppState.currentLevel;

        if (selectedValue === this.currentAnswer) {

            this.changeOwlMood('happy'); // <--- THÊM DÒNG NÀY (Cú mèo vui sướng)

            // Tăng chuỗi
            this.consecutiveCorrectCount++;

            // --- ĐOẠN ĐIỀU CHỈNH ÂM THANH ---
            if (this.consecutiveCorrectCount % 5 === 0) {
                this.triggerConfetti();
                SoundService.playFireworkSound(); // Ưu tiên phát tiếng pháo hoa vui nhộn
            } else {
                SoundService.playTrueSound(); // Phát tiếng khen ngợi bình thường
            }
            // ------------------------------

            player.score += this.currentPoints;
            // Text khoe chuỗi
            let streakText = this.consecutiveCorrectCount >= 2 ? ` (🔥 Đang đúng ${this.consecutiveCorrectCount} câu liên tiếp!)` : '';
            feedbackElement.innerHTML = `<span style="color:var(--success-color)">🌟 Xuất sắc, ${player.name} ơi! Đúng rồi (+${this.currentPoints} điểm)! <br><span style="font-size: 16px; color: #d35400;">${streakText}</span></span>`;

            // --- ADVENTURE MODE LOGIC: THĂNG CẤP ---
            if (AppState.isAdventureMode) {
                AppState.correctStreak++;
                AppState.incorrectStreak = 0;
                if (AppState.correctStreak >= 3) {
                    const config = this.getConfig();
                    if (AppState.currentLevel < config.levels.length - 1) {
                        AppState.currentLevel++;
                        AppState.correctStreak = 0;
                        this.showToast("🚀 TUYỆT VỜI! Bạn đã thăng lên Cấp " + (AppState.currentLevel + 1), "success");
                    }
                }
            }

            optionsContainer.innerHTML = `
            <button class="btn-opt btn-correct-only">${this.currentAnswer}</button>
        `;

            feedbackElement.innerHTML += `
            <div class="floating-next-container">
                <button class="btn-next floating-btn" onclick="Game.newQuestion()">Đi tiếp nào! 🚀</button>
            </div>
        `;
        } else {

            this.changeOwlMood('sad'); // <--- THÊM DÒNG NÀY (Cú mèo ỉu xìu)

            // Trả lời sai mới reset chuỗi về 0
            this.consecutiveCorrectCount = 0;

            // --- ADVENTURE MODE LOGIC: HẠ CẤP ---
            if (AppState.isAdventureMode) {
                AppState.correctStreak = 0;
                AppState.incorrectStreak++;
                if (AppState.incorrectStreak >= 2) {
                    if (AppState.currentLevel > 0) {
                        AppState.currentLevel--;
                        AppState.incorrectStreak = 0;
                        this.showToast("🛡️ Cố lên! Chúng ta lùi lại Cấp " + (AppState.currentLevel + 1) + " để ôn tập nhé", "info");
                    }
                }
            }

            // PHÁT ÂM THANH SAI
            SoundService.playFalseSound();

            player.score -= this.currentPoints;
            if (player.score < 0) player.score = 0;
            feedbackElement.innerHTML = `<span style="color:var(--error-color)">❌ Tiếc quá ${player.name} ơi! Bị trừ ${this.currentPoints} điểm. Thử lại nhé!</span>`;
        }

        // Cập nhật điểm lên UI
        this.updateScoreUI();
        this.updateTrack(isCorrect, AppState.currentLevel > prevLevel);

        // Kiểm tra xem có được thăng cấp không
        if (isCorrect) {
            const newRank = Player.getPlayerRank(player.score).current;
            if (newRank.name !== oldRankName) {
                this.showRankUpCelebration(newRank);
            }
        }

        await CloudService.syncPlayer(player);
    }
}

class Achievement {
    // Biến lưu trữ ID người chơi đang được xem trong tab Thành tích
    static viewingPlayerId = null;

    static render() {
        // Nếu chưa chọn ai, mặc định lấy người chơi đang được chọn ở hệ thống
        if (!this.viewingPlayerId) {
            this.viewingPlayerId = AppState.selectedPlayerId;
        }

        const player = Player.data.find(p => p.id === this.viewingPlayerId);
        if (!player) return;

        // Render dropdown chọn người chơi
        const selectEl = document.getElementById('ach-player-select');
        if (selectEl) {
            selectEl.innerHTML = Player.data.map(p =>
                `<option value="${p.id}" ${p.id === this.viewingPlayerId ? 'selected' : ''}>${p.icon} ${p.name}</option>`
            ).join('');
        }

        const rankData = Player.getPlayerRank(player.score);

        // Cập nhật Dashboard tổng quan
        document.getElementById('ach-dashboard').innerHTML = `
                    <div style="text-align: left;">
                        <h2 style="margin:0">${player.icon} ${player.name}</h2>
                        <div class="p-score-text">${player.score} <span style="font-size:14px; color:#666">điểm tích lũy</span></div>
                    </div>
                    <div style="text-align: right;">
                        <div class="rank-badge" style="font-size:16px; border-color:var(--warning-color)">${rankData.current.icon} ${rankData.current.name}</div>
                    </div>
                `;

        this.renderRankPath(player.score);
    }

    // Hàm xử lý sự kiện khi chọn người chơi khác trong tab Thành tích
    static changePlayer(playerId) {
        this.viewingPlayerId = playerId;
        this.render();
    }

    static renderRankPath(currentScore) {
        const container = document.getElementById('rank-path');
        const currentRank = Player.getPlayerRank(currentScore).current;

        // Liệt kê toàn bộ cấp độ trong RANKS_CONFIG
        container.innerHTML = RANKS_CONFIG.map(r => {
            let status = 'locked';
            let note = '';
            let displayLimit = r.limit === Infinity ? 'Vô cực' : r.limit;

            if (currentScore >= r.limit) {
                status = 'reached';
                note = `✅ Đã đạt (${displayLimit})`;
            } else {
                // Xác định xem đây là mốc đang chinh phục (next) hay mốc chưa tới (locked)
                if (r.name === currentRank.name) {
                    status = 'next';
                }
                note = `🎯 ${currentScore} / ${displayLimit}`;
            }

            return `
                        <div class="rank-milestone ${status}">
                            <div style="font-size:32px">${r.icon}</div>
                            <div style="font-weight:bold; font-size:12px; margin:5px 0">${r.name}</div>
                            <div style="font-size:11px; color:#666; font-weight: 600;">${note}</div>
                        </div>
                    `;
        }).join('');
    }
}

class App {
    static async switchTab(tabId) {
        this.updateTabUI(tabId);
        this.updateProgressBar(tabId);
        
        // Ẩn/Hiện thanh điều hướng nổi tùy tab
        this.updateFloatingNav();

        // Log hành động chuyển tab
        TrackingService.logAction('SWITCH_TAB', { target: tabId });

        // --- THÊM ĐOẠN NÀY ---
        if (tabId === 'achievements') {
            Achievement.render();
        }
        if (tabId === 'about') {
            if (window.__BOOT_INFO__) {
                document.getElementById('about-version').innerText = window.__BOOT_INFO__.version;

                let sourceText = window.__BOOT_INFO__.source;
                let statusHtml = "✅ Đã đồng bộ";
                let statusColor = "#27ae60";
                let statusBg = "#e8f8f0";

                if (sourceText.includes("Ngoại tuyến")) {
                    statusHtml = "⚠️ Mất mạng (Chơi Offline)";
                    statusColor = "#d35400";
                    statusBg = "#ffeaa7";
                } else if (sourceText.includes("Tải gói dữ liệu mới")) {
                    statusHtml = "🌟 Vừa được cập nhật";
                    statusColor = "#8e44ad";
                    statusBg = "#f4f1fa";
                }

                const sourceEl = document.getElementById('about-source');
                sourceEl.innerHTML = statusHtml;
                sourceEl.style.color = statusColor;
                sourceEl.style.backgroundColor = statusBg;

            } else {
                document.getElementById('about-source').innerText = "🌐 Bản Web Tiêu Chuẩn";
            }
        }
        // ----------------------

        if (tabId === 'settings') {
            const selectedPlayer = Player.data.find(p => p.id === AppState.selectedPlayerId);
            document.getElementById('settings-player').textContent = selectedPlayer?.name || '';
            document.getElementById('settings-subject').textContent = Game.SUBJECT_NAMES[AppState.selectedSubject || 'addition'];
        }

        if (tabId === 'game') {
            Game.initTrack();
            Game.newQuestion();
            SoundService.startBGM(); // 🔊 Bật nhạc nền khi vào bàn chơi
        } else {
            SoundService.stopBGM();  // 🔇 Tắt nhạc nhạc khi thoát ra ngoài
        }

        await this.syncAndRefreshPlayers();
    }

    static updateTabUI(tabId) {
        document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`view-${tabId}`)?.classList.add('active');

        // Tìm đúng nút trên thanh Menu (dựa vào onclick) để sáng màu, tránh lỗi khi bấm nút "Tiếp tục"
        const activeTabBtn = document.querySelector(`.tab-btn[onclick*="${tabId}"]`);
        if (activeTabBtn) activeTabBtn.classList.add('active');
    }

    static updateProgressBar(tabId) {
        const stepMap = { 'players': 1, 'subjects': 2, 'settings': 3, 'game': 4, 'achievements': 1 }; // Gán achievements về bước 1 hoặc giữ nguyên
        const currentStep = stepMap[tabId];
        if (!currentStep) return; // Tránh lỗi nếu tabId không có trong map

        for (let i = 1; i <= 4; i++) {
            const el = document.getElementById(`step-${i}`);
            if (!el) continue;
            el.classList.remove('active', 'completed');
            if (i < currentStep) el.classList.add('completed');
            if (i === currentStep) el.classList.add('active');
        }
    }
    static async syncAndRefreshPlayers() {
        await CloudService.syncQueue();
        await Player.init();
        const remoteData = await CloudService.fetchAll();
        if (remoteData && remoteData.length > 0) {
            Player.data = remoteData;
            Player.renderList();
            Game.updateScoreUI();
            // BẢN VÁ: Kiểm tra xem user có đang ở tab Thành Tích không, nếu có thì vẽ lại dữ liệu mới
            const achievementsTab = document.getElementById('view-achievements');
            if (achievementsTab && achievementsTab.classList.contains('active')) {
                Achievement.render();
            }
        }
    }

    static updateFloatingNav() {
        const nav = document.getElementById('floating-nav');
        if (!nav) return;

        const currentTab = document.querySelector('.tab-content.active')?.id;
        const player = Player.data.find(p => p.id === AppState.selectedPlayerId);
        
        if (currentTab === 'view-players' && player) {
            nav.style.display = 'flex';
            nav.innerHTML = `
                <div class="info">👤 Bé: <b>${player.icon} ${player.name}</b></div>
                <button class="btn-go" onclick="App.switchTab('subjects')">Tiếp tục ➡️</button>
            `;
        } else if (currentTab === 'view-subjects' && player && AppState.selectedSubject) {
            const subjectName = Game.SUBJECT_NAMES[AppState.selectedSubject];
            nav.style.display = 'flex';
            nav.innerHTML = `
                <div class="info">📚 Bé <b>${player.name}</b> chơi <b>${subjectName}</b></div>
                <button class="btn-go" onclick="App.switchTab('settings')">Cấu hình ⚙️</button>
            `;
        } else {
            nav.style.display = 'none';
        }
    }
}

window.initApp = async () => {
    SoundService.init();
    SpeechService.init(); // Thêm dòng này để khởi tạo giọng đọc
    await Player.init();
    Game.init();

    // --- ĐOẠN MỚI CẦN THÊM VÀO ---
    window.addEventListener('online', () => {
        console.log("🟢 Đã kết nối mạng trở lại!");
        // Gọi hàm xử lý hàng đợi để đẩy điểm tồn đọng lên
        CloudService.processQueue();
    });

    window.addEventListener('offline', () => {
        console.log("🔴 Mất kết nối mạng!");
        CloudService.toggleLoader(true, "🚫 Đang chơi ngoại tuyến");
        setTimeout(() => CloudService.toggleLoader(false), 3000);
    });
    // ------------------------------
};
