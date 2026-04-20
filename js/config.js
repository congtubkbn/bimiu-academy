// Hosted on GitHub: /js/config.js
// Exporting configuration as an ES Module

export const AppConfig = {
    API_URL: "https://script.google.com/macros/s/AKfycbwCusdiaxXYhp-50VkQ8D3SxxylzptawGm9INizB3gD0pTUiZicUZZ91NrxaUEP1HQITg/exec",
    RANKS: [
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
    ],
    SUBJECTS: {
        addition: {
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
        },
        multiplication: {
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
        }
    }
};
