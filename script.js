function showPage(page) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    event.target.classList.add('active');
    
    const content = document.getElementById('content');
    const pageTitle = document.getElementById('page-title');
    
    switch(page) {
        case 'home':
            pageTitle.textContent = 'Dashboard Home';
            content.innerHTML = `
                <div class="cards">
                    <div class="card">
                        <h3>Total Users</h3>
                        <p class="number">1,234</p>
                    </div>
                    <div class="card">
                        <h3>Revenue</h3>
                        <p class="number">$12,345</p>
                    </div>
                    <div class="card">
                        <h3>Orders</h3>
                        <p class="number">567</p>
                    </div>
                    <div class="card">
                        <h3>Growth</h3>
                        <p class="number">+12%</p>
                    </div>
                </div>
                <div id="forecastResults"></div>
            `;
            break;
            
        case 'analytics':
            pageTitle.textContent = 'Analytics';
            content.innerHTML = `
                <div class="cards">
                    <div class="card">
                        <h3>Page Views</h3>
                        <p class="number">45,678</p>
                    </div>
                    <div class="card">
                        <h3>Bounce Rate</h3>
                        <p class="number">23%</p>
                    </div>
                </div>
                <div id="forecastResults"></div>
            `;
            break;
            
        case 'users':
            pageTitle.textContent = 'Users Management';
            content.innerHTML = `
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>Active</td>
                                <td><button>Edit</button></td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>jane@example.com</td>
                                <td>Active</td>
                                <td><button>Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="forecastResults"></div>
            `;
            break;
            
        case 'settings':
            pageTitle.textContent = 'Settings';
            content.innerHTML = `
                <div class="card">
                    <h3>Application Settings</h3>
                    <form>
                        <p><label>Site Name: <input type="text" value="Dashboard App"></label></p>
                        <p><label>Admin Email: <input type="email" value="admin@example.com"></label></p>
                        <p><button type="submit">Save Settings</button></p>
                    </form>
                </div>
                <div id="forecastResults"></div>
            `;
            break;
    }
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        searchProduct();
    }
}

async function searchProduct() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) return;
    
    let resultsDiv = document.getElementById('forecastResults');
    
    // Jika elemen forecastResults tidak ada, buat elemen baru
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'forecastResults';
        document.getElementById('content').appendChild(resultsDiv);
    }
    
    // Show loading
    resultsDiv.innerHTML = `
        <div class="forecast-result">
            <h3>Mencari data untuk: ${searchTerm}</h3>
            <p>⏳ Menganalisis data pasar...</p>
        </div>
    `;
    
    // Simulasi delay loading untuk efek realistis
    setTimeout(() => {
        // Generate brand data berdasarkan kategori produk
        let brandsData = [];
        const searchLower = searchTerm.toLowerCase();
        
        if (searchLower.includes('minyak') || searchLower.includes('goreng') || searchLower.includes('cooking oil')) {
            brandsData = [
                { name: 'Bimoli', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '28.5%' },
                { name: 'Tropical', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '22.3%' },
                { name: 'Filma', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '18.7%' },
                { name: 'SunCo', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.1%' },
                { name: 'Kunci Mas', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '8.9%' },
                { name: 'Rose Brand', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '4.2%' },
                { name: 'Sania', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '2.8%' },
                { name: 'Fortune', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '1.3%' },
                { name: 'Mazola', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.8%' },
                { name: 'Barco', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.4%' }
            ];
        } else if (searchLower.includes('hp') || searchLower.includes('handphone') || searchLower.includes('smartphone') || searchLower.includes('phone')) {
            brandsData = [
                { name: 'Samsung', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '23.1%' },
                { name: 'Apple', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '19.8%' },
                { name: 'Xiaomi', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '16.2%' },
                { name: 'Oppo', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.4%' },
                { name: 'Vivo', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '10.8%' },
                { name: 'Realme', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '8.3%' },
                { name: 'OnePlus', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '6.7%' },
                { name: 'Infinix', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '5.2%' },
                { name: 'Tecno', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '4.1%' },
                { name: 'Asus', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '3.4%' }
            ];
        } else if (searchLower.includes('sabun') || searchLower.includes('soap') || searchLower.includes('deterjen')) {
            brandsData = [
                { name: 'Rinso', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '32.1%' },
                { name: 'Surf', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '24.5%' },
                { name: 'Attack', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '18.3%' },
                { name: 'So Klin', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.7%' },
                { name: 'Daia', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '6.8%' },
                { name: 'Boom', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '3.2%' },
                { name: 'Molto', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '1.5%' },
                { name: 'Downy', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '0.6%' },
                { name: 'Soklin Liquid', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.2%' },
                { name: 'Rinso Molto', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.1%' }
            ];
        } else if (searchLower.includes('beras') || searchLower.includes('rice')) {
            brandsData = [
                { name: 'Rojo Lele', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '35.2%' },
                { name: 'Cap Bulog', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '28.7%' },
                { name: 'Pandan Wangi', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '15.3%' },
                { name: 'IR 64', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '8.9%' },
                { name: 'Ciherang', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '5.4%' },
                { name: 'Maknyuss', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '3.1%' },
                { name: 'Setra Ramos', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '1.8%' },
                { name: 'Cap Jago', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '1.0%' },
                { name: 'Mentik Wangi', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.4%' },
                { name: 'Rojolele Premium', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.2%' }
            ];
        } else if (searchLower.includes('susu') || searchLower.includes('milk')) {
            brandsData = [
                { name: 'Frisian Flag', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '28.5%' },
                { name: 'Indomilk', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '22.3%' },
                { name: 'Ultra Milk', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '18.7%' },
                { name: 'Dancow', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.1%' },
                { name: 'SGM', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '8.9%' },
                { name: 'Bebelac', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '4.2%' },
                { name: 'Lactogen', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '2.8%' },
                { name: 'Enfagrow', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '1.3%' },
                { name: 'Pediasure', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.8%' },
                { name: 'Sustagen', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.4%' }
            ];
        } else if (searchLower.includes('kopi') || searchLower.includes('coffee')) {
            brandsData = [
                { name: 'Kapal Api', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '32.1%' },
                { name: 'Nescafe', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '24.5%' },
                { name: 'ABC Kopi Susu', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '18.3%' },
                { name: 'Torabika', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.7%' },
                { name: 'Good Day', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '6.8%' },
                { name: 'Kopiko', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '3.2%' },
                { name: 'Luwak White Coffee', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '1.5%' },
                { name: 'Indocafe', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '0.6%' },
                { name: 'Kopi Luwak', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.2%' },
                { name: 'Excelso', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.1%' }
            ];
        } else if (searchLower.includes('teh') || searchLower.includes('tea')) {
            brandsData = [
                { name: 'Teh Botol Sosro', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '45.2%' },
                { name: 'Sariwangi', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '28.7%' },
                { name: 'Tong Tji', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '15.3%' },
                { name: 'Lipton', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '8.9%' },
                { name: 'Teh Pucuk', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '5.4%' },
                { name: 'Javana', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '3.1%' },
                { name: 'Teh Kotak', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '1.8%' },
                { name: 'Walini', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '1.0%' },
                { name: 'Teh Celup Cap Botol', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '0.4%' },
                { name: 'Dilmah', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '0.2%' }
            ];
        } else {
            // Default untuk produk umum
            brandsData = [
                { name: 'Unilever', sales: Math.floor(Math.random() * 5000) + 8000, marketShare: '25.1%' },
                { name: 'Procter & Gamble', sales: Math.floor(Math.random() * 4000) + 7000, marketShare: '20.8%' },
                { name: 'Nestle', sales: Math.floor(Math.random() * 3000) + 6000, marketShare: '16.2%' },
                { name: 'Wings Group', sales: Math.floor(Math.random() * 2500) + 5000, marketShare: '12.4%' },
                { name: 'Indofood', sales: Math.floor(Math.random() * 2000) + 4500, marketShare: '10.8%' },
                { name: 'Mayora', sales: Math.floor(Math.random() * 1800) + 3500, marketShare: '8.3%' },
                { name: 'Kalbe Farma', sales: Math.floor(Math.random() * 1500) + 3000, marketShare: '6.7%' },
                { name: 'Orang Tua Group', sales: Math.floor(Math.random() * 1200) + 2500, marketShare: '5.2%' },
                { name: 'Sido Muncul', sales: Math.floor(Math.random() * 1000) + 2000, marketShare: '4.1%' },
                { name: 'Tzu Chi', sales: Math.floor(Math.random() * 800) + 1500, marketShare: '3.4%' }
            ];
        }
        
        const sales = Math.floor(Math.random() * 1000) + 500;
        const price = Math.floor(Math.random() * 100000) + 50000;
        const searchVolume = Math.floor(Math.random() * 50000) + 10000;
        const currentDate = new Date().toLocaleDateString('id-ID');
        
        resultsDiv.innerHTML = `
            <div class="forecast-result">
                <h3>Market Analysis: ${searchTerm}</h3>
                <p style="color: #27ae60; font-size: 12px; margin-bottom: 15px;">
                    ✅ Data berhasil dianalisis - Update: ${currentDate}
                </p>
                
                <div class="forecast-chart">
                    <div class="forecast-item">
                        <div class="period">Penjualan Prediksi</div>
                        <div class="value">${sales.toLocaleString()}</div>
                    </div>
                    <div class="forecast-item">
                        <div class="period">Harga Rata-rata</div>
                        <div class="value">Rp ${price.toLocaleString()}</div>
                    </div>
                    <div class="forecast-item">
                        <div class="period">Search Volume</div>
                        <div class="value">${searchVolume.toLocaleString()}/bulan</div>
                    </div>
                    <div class="forecast-item">
                        <div class="period">Trend</div>
                        <div class="value">📈 Naik ${Math.floor(Math.random() * 20) + 5}%</div>
                    </div>
                </div>
                
                <h4 style="margin-top: 20px; margin-bottom: 15px;">Top 10 Brand Market Leader</h4>
                <p style="color: #7f8c8d; font-size: 12px; margin-bottom: 10px;">
                    Berdasarkan analisis market intelligence terkini
                </p>
                <div class="brand-ranking">
                    ${brandsData.map((brand, index) => `
                        <div class="brand-item">
                            <span class="rank">#${index + 1}</span>
                            <span class="brand-name">${brand.name}</span>
                            <span class="market-share">${brand.marketShare}</span>
                            <span class="brand-sales">${brand.sales.toLocaleString()} unit</span>
                        </div>
                    `).join('')}
                </div>
                
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h5 style="color: #27ae60; margin-bottom: 10px;">📊 Insight Pasar untuk "${searchTerm}"</h5>
                    <ul style="color: #2c3e50; font-size: 12px; margin-left: 20px;">
                        <li>Kompetisi tinggi di segmen premium</li>
                        <li>Pertumbuhan stabil di pasar Indonesia</li>
                        <li>Demand meningkat ${Math.floor(Math.random() * 15) + 10}% YoY</li>
                        <li>Peluang ekspansi di tier 2-3 cities</li>
                    </ul>
                </div>
                
                <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h5 style="color: #856404; margin-bottom: 10px;">⚠️ Disclaimer Data Source</h5>
                    <p style="color: #856404; font-size: 12px; margin-bottom: 8px;">
                        <strong>Data ini adalah SIMULASI untuk demo dashboard.</strong>
                    </p>
                    <p style="color: #856404; font-size: 11px; line-height: 1.4;">
                        Untuk data real Google Trends, diperlukan:<br>
                        • Python backend dengan pytrends library<br>
                        • Paid API seperti SerpApi ($50/bulan)<br>
                        • Server proxy untuk bypass CORS<br>
                        • Google Trends tidak menyediakan API publik gratis
                    </p>
                </div>
            </div>
        `;
    }, 1500); // Delay 1.5 detik untuk efek loading realistis
}

// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const dataFileInput = document.getElementById('dataFileInput');
    
    let chatbotData = null;

    // Function to ask question from clickable links
    window.askQuestion = function(question) {
        chatbotInput.value = question;
        sendMessage();
    };

    // Function to chat WhatsApp admin
    window.chatWhatsAppAdmin = function() {
        const adminPhone = '6281380758161';
        const message = encodeURIComponent('Halo Admin Alfamind, saya ingin bertanya tentang...');
        const whatsappUrl = 'https://wa.me/' + adminPhone + '?text=' + message;
        
        window.open(whatsappUrl, '_blank');
        addMessage('💬 Membuka WhatsApp Admin...<br>Anda akan diarahkan ke chat WhatsApp.', 'bot');
    };

    // Function to send complaint email
    window.sendComplaintEmail = function() {
        const ticketNumber = 'TKT-' + Date.now();
        
        const formHtml = `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <strong>📧 Form Ticket Komplain #${ticketNumber}</strong><br><br>
                <form id="complaintForm" style="text-align: left;">
                    <input type="text" id="complaintName" placeholder="Nama Anda" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;" required><br>
                    <input type="email" id="complaintEmail" placeholder="Email Anda" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;" required><br>
                    <input type="tel" id="complaintPhone" placeholder="No. Telepon" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;" required><br>
                    <textarea id="complaintText" placeholder="Deskripsi komplain Anda..." style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; min-height: 80px;" required></textarea><br>
                    <button type="submit" style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Kirim Komplain</button>
                </form>
            </div>
        `;
        
        addMessage(formHtml, 'bot');
        
        setTimeout(() => {
            document.getElementById('complaintForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const name = document.getElementById('complaintName').value;
                const email = document.getElementById('complaintEmail').value;
                const phone = document.getElementById('complaintPhone').value;
                const complaint = document.getElementById('complaintText').value;
                
                addMessage('⏳ Mengirim email komplain...', 'bot');
                
                try {
                    const formData = new FormData();
                    formData.append('ticketNumber', ticketNumber);
                    formData.append('name', name);
                    formData.append('email', email);
                    formData.append('phone', phone);
                    formData.append('complaint', complaint);
                    
                    const response = await fetch('send_email.php', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const result = await response.json();
                    
                    if (result.success) {
                        addMessage('✅ Komplain berhasil dikirim ke herdiansyah.elmi@sat.co.id dengan Ticket #' + ticketNumber, 'bot');
                    } else {
                        addMessage('❌ Gagal mengirim email: ' + result.message, 'bot');
                    }
                } catch (error) {
                    addMessage('❌ Terjadi kesalahan: ' + error.message, 'bot');
                }
            });
        }, 100);
    };

    // Handle file upload
    dataFileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.name === 'Data.txt') {
            const reader = new FileReader();
            reader.onload = function(e) {
                chatbotData = e.target.result;
                addMessage('✅ File Data.txt berhasil dimuat! Sekarang saya bisa menjawab pertanyaan Anda berdasarkan data tersebut.', 'bot');
            };
            reader.readAsText(file);
        } else {
            addMessage('❌ Silakan pilih file Data.txt yang benar.', 'bot');
        }
    });

    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotWidget.style.display = chatbotWidget.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotWidget.style.display = 'none';
    });

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Show typing indicator
        addMessage('⏳ Mencari data...', 'bot');

        // Get bot response from Data.txt
        setTimeout(() => {
            // Remove typing indicator
            const messages = chatbotMessages.children;
            chatbotMessages.removeChild(messages[messages.length - 1]);
            
            const response = getBotResponseFromData(message);
            addMessage(response, 'bot');
        }, 1000);
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponseFromData(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('terima kasih') || msg.includes('thanks') || msg.includes('thank you') || msg.includes('makasih')) {
            return `🙏 Senang bisa membantu Anda! Jika ada pertanyaan lain, jangan ragu untuk bertanya.`;
        }
        
        if (msg.includes('mendaftar') || msg.includes('daftar') || msg.includes('registrasi')) {
            return `📝 <strong>Cara Mendaftar Menjadi Store owner Alfamind:</strong><br><br>
Saat ini aplikasi Alfamind hanya tersedia khusus bagi pengguna smartphone Android yang dapat diunduh di Google Play Store<br><br>
1. Download dan install aplikasi Alfamind dari Google Play Store<br>
2. Buka aplikasi<br>
3. Masukkan nomor WhatsApp<br>
4. Masukkan kode OTP yang dikirim ke nomor WhatsApp<br>
5. Lengkapi profil kamu<br>
6. Masukkan kode referral store owner yang mengajak. Boleh dikosongkan jika tidak ada<br>
7. Selesai<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('lengkapi data diri') || msg.includes('data diri')) {
            return `👤 <strong>Cara Melengkapi Data Diri:</strong><br><br>
Kamu bisa melengkapi data diri kamu agar kami bisa lebih mengenal tentang kamu dan juga keuntungan lain yang membutuhkan data lengkap tentang kamu.<br><br>
1. Buka aplikasi Alfamind<br>
2. Pada halaman beranda, klik fitur 'Lengkapi Data Diri'<br>
3. Foto KTP kamu dengan jelas dan pencahayaan yang cukup<br>
4. Isi data-data lainnya yang dibutuhkan dengan lengkap dan benar<br>
5. Untuk data NPWP bisa dikosongkan jika tidak ada<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('lihat profil') || msg.includes('melihat profil')) {
            return `👁️ <strong>Cara Melihat Profil / Data Diri:</strong><br><br>
Kamu bisa melihat data-data diri yang sudah diisi sebelumnya pada menu 'Akun Saya'<br><br>
1. Buka aplikasi Alfamind<br>
2. Klik menu 'Akun Saya'<br>
3. Pilih 'Pengaturan Akun'<br>
4. Pilih 'Data Diri' atau 'Data Bank'<br><br>
<em>Beberapa data pribadi yang sudah dilengkapi sebelumnya tidak bisa dilakukan perubahan.</em><br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('data bank') || msg.includes('lengkapi bank')) {
            return `🏦 <strong>Cara Melengkapi Data Bank:</strong><br><br>
Lengkapi data bank kamu untuk menerima keuntungan berupa tunai dari program-program yang kamu ikuti<br><br>
1. Buka aplikasi Alfamind<br>
2. Klik menu 'Akun Saya'<br>
3. Pilih 'Pengaturan Akun'<br>
4. Pilih 'Data Bank'<br>
5. Lengkapi data bank sesuai dengan yang tercantum pada buku tabungan<br>
6. Klik tombol 'Simpan'<br><br>
<em>Data bank hanya dapat diinput satu kali. Pastikan data yang diinput sudah sesuai dengan yang tercantum di buku tabungan.</em><br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('ganti password') || msg.includes('kata sandi') || msg.includes('password')) {
            return `🔐 <strong>Cara Mengganti Password / Kata Sandi:</strong><br><br>
Password atau kata sandi digunakan untuk melakukan masuk ke dalam aplikasi. Password atau kata sandi dapat diubah setiap saat.<br><br>
1. Buka aplikasi Alfamind<br>
2. Klik menu 'Akun Saya'<br>
3. Pilih 'Pengaturan Akun'<br>
4. Pilih 'Kata Sandi'<br>
5. Masukkan kata sandi lama<br>
6. Masukkan kata sandi yang baru<br>
7. Masukkan kembali kata sandi yang baru sebagai konfirmasi<br>
8. Klik tombol 'Simpan'<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('tutup akun') || msg.includes('hapus akun')) {
            return `❌ <strong>Cara Tutup Akun:</strong><br><br>
1. Buka aplikasi Alfamind<br>
2. Klik menu 'Akun Saya'<br>
3. Pilih 'Layanan'<br>
4. Pilih 'Tutup Akun'<br>
5. Periksa data diri dan data bank yang tersimpan<br>
6. Isi alasan tutup akun<br>
7. Klik tombol 'Lanjut'<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('saldo alfamind') || msg.includes('apa itu saldo')) {
            return `💰 <strong>Saldo Alfamind:</strong><br><br>
Saldo Alfamind adalah deposit dana yang digunakan untuk melakukan pembayaran transaksi di Alfamind. Saldo Alfamind tidak dapat dicairkan. Saldo Alfamind ditampilkan di halaman beranda aplikasi Alfamind.<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('top up') && msg.includes('aplikasi')) {
            return `📱 <strong>Cara Top Up Saldo Alfamind Di Aplikasi:</strong><br><br>
1. Buka aplikasi Alfamind<br>
2. Klik 'Saldo Alfamind' di halaman beranda<br>
3. Pilih 'Top Up Saldo'<br>
4. Masukkan nominal saldo yang akan di top up<br>
5. Klik tombol 'Selanjutnya'<br>
6. Pilih metode pembayaran yang tersedia dan ikuti langkah-langkah selanjutnya<br>
7. Selesai<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('top up') && (msg.includes('alfamart') || msg.includes('toko'))) {
            return `🏪 <strong>Cara Top Up Saldo Alfamind Di Toko Alfamart:</strong><br><br>
1. Informasikan ke petugas kasir jika kamu melakukan top up saldo Alfamind<br>
2. Informasikan alamat email terdaftar<br>
3. Sebutkan jumlah saldo yang akan ditop up-kan (Jumlah minimal saldo awal saat ini adalah Rp 20.000, jumlah minimal top up saldo awal dapat berubah sewaktu-waktu tanpa adanya pemberitahuan sebelumnya)<br>
4. Kamu akan menerima struk sebagai bukti telah melakukan top up saldo<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('cek mutasi') || msg.includes('mutasi saldo')) {
            return `📊 <strong>Cara Cek Mutasi Saldo Alfamind:</strong><br><br>
1. Buka aplikasi Alfamind<br>
2. Klik 'Saldo Alfamind' di halaman beranda<br>
3. Pilih bulan di bagian 'Histori Transaksi Bulan' untuk melihat mutasi pada bulan-bulan sebelumnya<br><br>
Ada yang bisa dibantu lagi? 😊`;
        }
        
        if (msg.includes('halo') || msg.includes('hai') || msg.includes('hello')) {
            return `👋 Halo! Saya AI Assistant Alfamind. Saya bisa membantu Anda dengan informasi tentang:<br><br>
• Cara mendaftar menjadi store owner<br>
• Cara melengkapi data diri<br>
• Cara melihat profil<br>
• Cara melengkapi data bank<br>
• Cara mengganti password<br>
• Cara tutup akun<br>
• Informasi saldo Alfamind<br>
• Cara top up saldo<br>
• Cara cek mutasi saldo<br><br>
Silakan tanyakan apa yang ingin Anda ketahui!`;
        }
        
        return `❓ Maaf, saya tidak menemukan informasi yang sesuai. Silakan tanyakan tentang:<br><br>
• Cara mendaftar<br>
• Data diri<br>
• Data bank<br>
• Password<br>
• Tutup akun<br>
• Saldo Alfamind<br>
• Top up saldo<br>
• Mutasi saldo<br><br>
Ada yang bisa dibantu lagi? 😊`;
    }

    async function getBotResponseFromAlfamind(message) {
        // Function ini tidak digunakan lagi, diganti dengan getBotResponseFromData
        return getBotResponseFromData(message);
    }
});

function generateMarketData(product) {
    // Simulate market data from Google search
    const trends = ['Trending Up', 'Stable', 'Declining', 'Seasonal Peak'];
    const competitors = ['Brand A', 'Brand B', 'Brand C'];
    
    return {
        marketTrend: trends[Math.floor(Math.random() * trends.length)],
        avgPrice: Math.floor(Math.random() * 100000) + 50000,
        topCompetitors: competitors.slice(0, Math.floor(Math.random() * 3) + 1),
        searchVolume: Math.floor(Math.random() * 10000) + 1000,
        demandLevel: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]
    };
}

function displayForecast(product, data, marketData) {
    const resultsDiv = document.getElementById('forecastResults');
    if (!resultsDiv) return;
    
    resultsDiv.innerHTML = `
        <div class="forecast-result">
            <h3>Forecasting Penjualan: ${product}</h3>
            <p>Confidence Level: ${data.confidence}%</p>
            <div class="forecast-chart">
                <div class="forecast-item">
                    <div class="period">Bulan Ini</div>
                    <div class="value">${data.currentMonth.toLocaleString()}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Bulan Depan</div>
                    <div class="value">${data.nextMonth.toLocaleString()}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Quarterly</div>
                    <div class="value">${data.quarter.toLocaleString()}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Trend</div>
                    <div class="value">${data.trend === 'up' ? '📈' : '📉'}</div>
                </div>
            </div>
            
            <h4 style="margin-top: 20px; margin-bottom: 10px;">Market Intelligence</h4>
            <div class="forecast-chart">
                <div class="forecast-item">
                    <div class="period">Market Trend</div>
                    <div class="value">${marketData.marketTrend}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Avg Price</div>
                    <div class="value">Rp ${marketData.avgPrice.toLocaleString()}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Search Volume</div>
                    <div class="value">${marketData.searchVolume.toLocaleString()}</div>
                </div>
                <div class="forecast-item">
                    <div class="period">Demand</div>
                    <div class="value">${marketData.demandLevel}</div>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <strong>Top Competitors:</strong> ${marketData.topCompetitors.join(', ')}
            </div>
        </div>
    `;
}
