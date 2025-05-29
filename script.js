/* General Body Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Header Styles */
header {
    background-color: #004d99; /* Dark blue, similar to the original site */
    color: #fff;
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

header h1 {
    margin: 0;
    text-align: center;
    font-size: 2em;
    padding-bottom: 10px;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; /* Allow navigation items to wrap on smaller screens */
    justify-content: center;
}

header nav ul li {
    margin: 0 10px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}

header nav ul li a:hover {
    background-color: #003366; /* Slightly darker blue on hover */
    border-radius: 4px;
}

/* Main Content Area */
main {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 2fr 1fr; /* Two columns: main content and sidebar-like */
    gap: 30px;
}

@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }
}

section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

section h2, section h3 {
    color: #004d99;
    margin-top: 0;
}

.hero p {
    font-size: 1.1em;
    margin-bottom: 15px;
}

.announcements ul, .important-links ul {
    list-style: none;
    padding: 0;
}

.announcements ul li, .important-links ul li {
    margin-bottom: 10px;
}

.announcements ul li a, .important-links ul li a {
    color: #007bff; /* Blue link color */
    text-decoration: none;
}

.announcements ul li a:hover, .important-links ul li a:hover {
    text-decoration: underline;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    margin-top: 20px;
}

footer p {
    margin: 0;
    font-size: 0.9em;
}

footer a {
    color: #fff;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

.social-links {
    margin-top: 10px;
}
/* You can add icons here */
