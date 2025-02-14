const http = require('http');

// Tạo server
const server = http.createServer((req, res) => {
  // Đặt header mặc định
  res.setHeader('Content-Type', 'text/plain');

  // Kiểm tra từng route
  if (req.url === '/') {
    res.writeHead(200); // Trả về status 200 (OK)
    res.end('Welcome to the Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('Welcome to the About Page');
  } else if (req.url === '/contact') {
    res.writeHead(200);
    res.end('Contact us at: contact@example.com');
  } else {
    // Xử lý trường hợp không tìm thấy (404)
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

// Lắng nghe trên cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
