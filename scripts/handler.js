var projectsDiv = document.getElementById("projects");

// روابط فيديوهات اليوتيوب
const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/embed/2oFYYWKKxGQ?si=lWbNtJ8vpQOjZ6AG",
    "https://www.youtube.com/embed/6RFUtEwA4uE?si=GoWVr8z-TvfmN_hY",
    "https://www.youtube.com/embed/-qc76E_18TI?si=bjlAWlH3yT5TrHR7"
];

for (let i = 0; i < PROJECTS.length; i++) {
    var currentProject = PROJECTS[i];

    var projectDiv = document.createElement("div");
    projectDiv.style.margin = "20px auto";
    projectDiv.style.textAlign = "center";

    var title = document.createElement("h2");
    title.textContent = currentProject.title;

    var iframe = document.createElement("iframe");
    iframe.src = YOUTUBE_VIDEOS[i];  // استخدم رابط اليوتيوب هنا
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.style.margin = "10px 0"; 

    var p = document.createElement("h3");
    p.textContent = currentProject.description;

    projectDiv.appendChild(title);
    projectDiv.appendChild(iframe);
    projectDiv.appendChild(p);

    projectsDiv.appendChild(projectDiv);
}
