<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CoreCircle | Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary: #ff758c;
      --secondary: #ff7eb3;
      --dark: #2d3436;
      --light: #f9f9f9;
      --success: #00b894;
      --warning: #fdcb6e;
      --info: #0984e3;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    body {
      background: linear-gradient(-45deg, #ff758c, #ff7eb3, #52acff, #52acff);
      background-size: 400% 400%;
      color: var(--dark);
      animation: gradientBG 15s ease infinite;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .dashboard-container {
      display: flex;
      min-height: 100vh;
    }

    /* Sidebar Styles */
    .sidebar {
      width: 280px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      padding: 2rem;
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      z-index: 100;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }

    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
      text-decoration: none;
    }

    .logo i {
      margin-right: 10px;
      font-size: 2rem;
      color: var(--primary);
    }

    .sidebar-nav {
      margin-top: 2rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 0.8rem 1rem;
      margin-bottom: 0.5rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--dark);
      text-decoration: none;
    }

    .nav-item:hover {
      background-color: rgba(255, 117, 140, 0.1);
      color: var(--primary);
      transform: translateX(5px);
    }

    .nav-item.active {
      background: linear-gradient(90deg, rgba(255,117,140,0.2) 0%, rgba(255,117,140,0.05) 100%);
      color: var(--primary);
      border-left: 4px solid var(--primary);
    }

    .nav-item i {
      margin-right: 10px;
      font-size: 1.1rem;
    }

    /* Main Content Styles */
    .main-content {
      flex: 1;
      padding: 2rem;
      animation: fadeIn 0.5s ease forwards;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .page-title h1 {
      font-size: 2rem;
      color: white;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .page-title p {
      color: rgba(255, 255, 255, 0.8);
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.9);
      padding: 0.8rem 1.2rem;
      border-radius: 50px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .user-profile:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    .profile-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary);
    }

    .username {
      font-weight: 600;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      animation: fadeIn 0.5s ease forwards;
      opacity: 0;
    }

    .card:nth-child(1) { animation-delay: 0.2s; }
    .card:nth-child(2) { animation-delay: 0.3s; }
    .card:nth-child(3) { animation-delay: 0.4s; }
    .card:nth-child(4) { animation-delay: 0.5s; }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .card-title {
      font-size: 1rem;
      color: #666;
    }

    .card-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: white;
    }

    .card-icon.users { background: linear-gradient(135deg, #52acff, #52acff); }
    .card-icon.revenue { background: linear-gradient(135deg, var(--success), #00e672); }
    .card-icon.engagement { background: linear-gradient(135deg, var(--warning), #ffeaa7); }
    .card-icon.retention { background: linear-gradient(135deg, var(--primary), #ff8a9e); }

    .card-value {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--dark);
    }

    .card-change {
      display: flex;
      align-items: center;
      font-size: 0.85rem;
      color: #666;
    }

    .card-change.up { color: var(--success); }
    .card-change.down { color: #ff7675; }

    .card-change i {
      margin-right: 5px;
    }

    /* Chart Section */
    .chart-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      margin-bottom: 2rem;
      animation: fadeIn 0.6s ease forwards;
      opacity: 0;
    }

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .chart-title {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .chart-period {
      display: flex;
      gap: 0.5rem;
    }

    .period-btn {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: none;
      background: #f1f1f1;
      color: #666;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .period-btn.active {
      background: var(--primary);
      color: white;
    }

    .chart-placeholder {
      height: 300px;
      background: #f9f9f9;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 1rem;
    }

    /* Recent Activity */
    .activity-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      animation: fadeIn 0.7s ease forwards;
      opacity: 0;
    }

    .activity-header {
      margin-bottom: 1rem;
    }

    .activity-title {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .activity-list {
      list-style: none;
    }

    .activity-item {
      display: flex;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
      transition: all 0.3s ease;
    }

    .activity-item:last-child {
      border-bottom: none;
    }

    .activity-item:hover {
      transform: translateX(5px);
    }

    .activity-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      color: white;
      font-size: 1rem;
    }

    .activity-icon.user { background: var(--info); }
    .activity-icon.payment { background: var(--success); }
    .activity-icon.message { background: var(--warning); }
    .activity-icon.settings { background: #a29bfe; }

    .activity-content {
      flex: 1;
    }

    .activity-text {
      font-size: 0.95rem;
      margin-bottom: 0.2rem;
    }

    .activity-time {
      font-size: 0.8rem;
      color: #999;
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .sidebar {
        transform: translateX(-100%);
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
      }
      
      .sidebar.active {
        transform: translateX(0);
      }
      
      .main-content {
        margin-left: 0;
      }
      
      .menu-toggle {
        display: flex;
      }
    }

    @media (max-width: 768px) {
      .cards-container {
        grid-template-columns: 1fr;
      }
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #ff5779;
    }
  </style>
</head>
<body>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <a href="#" class="logo">
          <i class="fas fa-circle-notch"></i>
          <span>CoreCircle</span>
        </a>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active">
          <i class="fas fa-home"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="nav-item">
          <i class="fas fa-user"></i>
          <span>Profile</span>
        </a>
        <a href="#" class="nav-item">
          <i class="fas fa-envelope"></i>
          <span>Messages</span>
          <span class="badge">12</span>
        </a>
        <a href="#" class="nav-item">
          <i class="fas fa-chart-line"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="nav-item">
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </a>
        <a href="#" class="nav-item">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="page-title">
          <h1>Dashboard</h1>
          <p>Welcome back, Abhizya!</p> <!-- Changed name -->
        </div>
        <div class="user-profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User " class="profile-img"> <!-- Female image -->
          <span class="username">Abhizya</span> <!-- Changed name -->
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="cards-container">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Total Users</span>
            <div class="card-icon users">
              <i class="fas fa-users"></i>
            </div>
          </div>
          <h3 class="card-value">8,742</h3>
          <div class="card-change up">
            <i class="fas fa-arrow-up"></i>
            <span>12.5% from last month</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="card-title">Monthly Revenue</span>
            <div class="card-icon revenue">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>
          <h3 class="card-value">$24,895</h3>
          <div class="card-change up">
            <i class="fas fa-arrow-up"></i>
            <span>8.3% from last month</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="card-title">Engagement</span>
            <div class="card-icon engagement">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <h3 class="card-value">83.6%</h3>
          <div class="card-change down">
            <i class="fas fa-arrow-down"></i>
            <span>1.2% from last month</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="card-title">Retention</span>
            <div class="card-icon retention">
              <i class="fas fa-chart-pie"></i>
            </div>
          </div>
          <h3 class="card-value">72.4%</h3>
          <div class="card-change up">
            <i class="fas fa-arrow-up"></i>
            <span>3.7% from last month</span>
          </div>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">User  Growth</h3>
          <div class="chart-period">
            <button class="period-btn">Daily</button>
            <button class="period-btn active">Weekly</button>
            <button class="period-btn">Monthly</button>
          </div>
        </div>
        <div class="chart-placeholder">
          User Growth Chart Visualization
        </div>
      </div>

      <!-- Recent Activity Section -->
      <div class="activity-container">
        <div class="activity-header">
          <h3 class="activity-title">Recent Activity</h3>
        </div>
        <ul class="activity-list">
          <li class="activity-item">
            <div class="activity-icon user">
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="activity-content">
              <p class="activity-text">New user "Sarah Miller" registered</p>
              <p class="activity-time">2 minutes ago</p>
            </div>
          </li>
          <li class="activity-item">
            <div class="activity-icon payment">
              <i class="fas fa-credit-card"></i>
            </div>
            <div class="activity-content">
              <p class="activity-text">Payment of $19.99 received from John Doe</p>
              <p class="activity-time">15 minutes ago</p>
            </div>
          </li>
          <li class="activity-item">
            <div class="activity-icon message">
              <i class="fas fa-comment"></i>
            </div>
            <div class="activity-content">
              <p class="activity-text">New message from Alex</p>
              <p class="activity-time">30 minutes ago</p>
            </div>
          </li>
          <li class="activity-item">
            <div class="activity-icon settings">
              <i class="fas fa-cog"></i