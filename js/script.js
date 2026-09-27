document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.getElementById("langBtn");

    const indonesia = {
        navHome: "Home",
        navProfile: "Profile",
        navExperience: "Experience",
        navSkill: "Skill",
        navOrganization: "Organisasi",
        navCertification: "Sertifikasi",

        eyebrow: "STUDENT · PROGRAMMER · CREATOR",
        hero: "Pelajar yang tertarik pada programming, game development, web development, dan teknologi digital.",
        contact: "Hubungi Saya",
        cv: "Download CV",

        profileTitle: "Nama Lengkap & Profile",
        profileLead: "Student, programmer, creator, collaborator, dan gamer.",
        about1: "Saya adalah Ghifari Zakka Farelino. Saya sedang mengembangkan kemampuan di bidang programming, game development, web development, dan teknologi digital.",
        about2: "Saya menikmati proses belajar melalui project nyata dan kolaborasi, terutama ketika programming dapat digabungkan dengan kreativitas.",
        labelName: "Nama:",
        labelNickname: "Panggilan:",
        labelStatus: "Status:",
        labelFocus: "Fokus:",
        student: "Pelajar",
        focus: "Programming & Development",
        majorId: "Rekayasa Perangkat Lunak",
        majorEn: "Software Engineering",

        experienceTitle: "Experience",
        gameDevelopment: "GAME DEVELOPMENT",
        webDevelopment: "WEB DEVELOPMENT",
        internship: "INTERNSHIP",
        clawfangDesc: "Mengembangkan project game interaktif menggunakan Ren’Py dan Python dengan fokus pada storytelling, karakter, UI, Screen Language, dan gameplay.",
        portfolioDesc: "Membuat dan mengembangkan website portfolio pribadi menggunakan HTML dan CSS serta mempelajari dasar JavaScript.",
        pklDesc: "Mendapatkan pengalaman kerja nyata dan mempraktikkan keterampilan yang dipelajari di sekolah dalam lingkungan profesional.",

        skillsTitle: "Skill",
        programmingTitle: "Programming",
        programmingDesc: "Python, basic programming, logic, dan problem solving.",
        webTitle: "Web Development",
        webDesc: "HTML, CSS, dan dasar JavaScript.",
        gameTitle: "Game Development",
        gameDesc: "Ren’Py, Python, Screen Language, dan interactive storytelling.",
        creativeTitle: "Creative",
        creativeDesc: "Game concept, UI dasar, project development, dan teamwork.",

        organizationTitle: "Organisasi",
        collaboration: "PROJECT COLLABORATION",
        organizationDesc: "Tim kolaborasi dalam pengembangan project Clawfang yang berfokus pada pengembangan ide, karakter, cerita, dan pengalaman interaktif.",

        certificationTitle: "Sertifikasi",
        viewFolder: "View Folders →",
        ciscoDesc: "Sertifikat pembelajaran Cisco Dasar.",
        networkDesc: "Sertifikat pembelajaran dasar jaringan komputer.",
        oracleDesc: "Sertifikat Oracle Academy Database Foundations.",
        toeflDesc: "Sertifikat tes TOEFL Bahasa Inggris.",
        anvitaCertificateTitle: "Sertifikat PKL — Anvita",
        pklCertificateDesc: "Sertifikat Praktik Kerja Lapangan (PKL).",
        fiberDesc: "Sertifikat Pembelajaran Fiber Optic.",
        viewCertificate: "View Certificate →",

        contactLabel: "Contact",
        connectTitle: "Let’s Connect.",
        contactText: "Untuk kolaborasi, project, atau berdiskusi tentang teknologi dan game development.",
        footer: "© 2026 Ghifari Zakka Farelino."
    };

    const english = {
        navHome: "Home",
        navProfile: "Profile",
        navExperience: "Experience",
        navSkill: "Skills",
        navOrganization: "Organization",
        navCertification: "Certification",

        eyebrow: "STUDENT · PROGRAMMER · CREATOR",
        hero: "A student interested in programming, game development, web development, and digital technology.",
        contact: "Contact Me",
        cv: "Download CV",

        profileTitle: "Full Name & Profile",
        profileLead: "Student, programmer, creator, collaborator, and gamer.",
        about1: "I am Ghifari Zakka Farelino. I am developing my skills in programming, game development, web development, and digital technology.",
        about2: "I enjoy learning through real projects and collaboration, especially when programming can be combined with creativity.",
        labelName: "Name:",
        labelNickname: "Nickname:",
        labelStatus: "Status:",
        labelFocus: "Focus:",
        student: "Student",
        focus: "Programming & Development",
        majorId: "Software Engineering",
        majorEn: "Software Engineering",

        experienceTitle: "Experience",
        gameDevelopment: "GAME DEVELOPMENT",
        webDevelopment: "WEB DEVELOPMENT",
        internship: "INTERNSHIP",
        clawfangDesc: "Developing an interactive game project using Ren’Py and Python, focusing on storytelling, characters, UI, Screen Language, and gameplay.",
        portfolioDesc: "Creating and developing a personal portfolio website using HTML and CSS while learning the basics of JavaScript.",
        pklDesc: "Gaining real-world work experience and practicing skills learned at school in a professional environment.",

        skillsTitle: "Skills",
        programmingTitle: "Programming",
        programmingDesc: "Python, basic programming, logic, and problem solving.",
        webTitle: "Web Development",
        webDesc: "HTML, CSS, and basic JavaScript.",
        gameTitle: "Game Development",
        gameDesc: "Ren’Py, Python, Screen Language, and interactive storytelling.",
        creativeTitle: "Creative",
        creativeDesc: "Game concepts, basic UI, project development, and teamwork.",

        organizationTitle: "Organization",
        collaboration: "PROJECT COLLABORATION",
        organizationDesc: "A collaboration team for the Clawfang project, focusing on ideas, characters, story, and interactive experiences.",

        certificationTitle: "Certification",
        viewFolder: "View Folder →",
        ciscoDesc: "Cisco Basics learning certificate.",
        networkDesc: "Basic computer networking learning certificate.",
        oracleDesc: "Oracle Academy Database Foundations certificate.",
        toeflDesc: "English TOEFL test certificate.",
        anvitaCertificateTitle: "Internship Certificate — Anvita",
        pklCertificateDesc: "Internship (PKL) certificate.",
        fiberDesc: "Learning fiber optic certificate.",
        viewCertificate: "View Certificate →",

        contactLabel: "Contact",
        connectTitle: "Let’s Connect.",
        contactText: "For collaboration, projects, or discussions about technology and game development.",
        footer: "© 2026 Ghifari Zakka Farelino."
    };

    let language = localStorage.getItem("portfolioLanguage") || "id";

    function changeLanguage() {
        const data = language === "id" ? indonesia : english;

        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                element.textContent = data[key];
            }
        });

        if (langBtn) {
            langBtn.textContent = language === "id" ? "EN" : "ID";
            langBtn.setAttribute("aria-label", language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
        }

        localStorage.setItem("portfolioLanguage", language);
    }

    if (langBtn) {
        langBtn.addEventListener("click", function () {
            language = language === "id" ? "en" : "id";
            changeLanguage();
        });
    }

    changeLanguage();
});
