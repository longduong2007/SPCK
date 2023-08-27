document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");

  logoutButton?.addEventListener("click", function () {

    localStorage.removeItem("isLogin");
    alert("Đăng xuất thành công");
    window.location.reload();
  });
});


const isLogin = localStorage.getItem("isLogin");

if (!isLogin) {
  document.getElementById("logout-button").style.display = "none";

} else {
  document.getElementById("login-button").style.display = "none";
}





const app = document.getElementById("app")
blogs.forEach((blog) => {
  app.insertAdjacentHTML("beforeend",
    `
    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style="width: 200px; height: 200px;"
                            src="${blog.image}"
                            alt="Bonnie Avatar">
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">${blog.name}</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400" style="
                        color:#e83a45;   
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 18px;
                        margin-bottom: 5px; ">${blog.price}</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">${blog.information}</p>
                    </div>
                </div>
      `
  );
});



tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }
}
