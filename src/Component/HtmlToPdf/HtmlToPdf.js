import React from 'react'

function HtmlToPdf() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const getHTML = () => {
      return `
      <!-- Your dynamic HTML content here -->
  
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Styled Webpage</title>
        <link rel="stylesheet" href="d.css">
      </head>
      <body>
      <header>
      <h1> ${formData?.resume?.name}</h1>
      <nav>
        <ul>
          <li><a>${formData?.resume?.contact?.email}</a></li>
          <li><a>${formData?.resume?.contact?.phone}</a></li>
          <li><a >       ${formData?.resume?.address?.address},
          ${formData?.resume?.address?.postalCode}</a></li>
        
        </ul>
      </nav>
    </header>
      <div className="main">
      <div className="professional_summary">
      <h3>PROFESSIONAL SUMMARY</h3>
      <p>${formData?.resume?.summary}</p>
    </div>
    <br />
    <hr />
    <div className="work">
    <h3>WORK HISTORY</h3>
    <ul className="work_history">
      ${formData?.resume?.work
        ?.map(
          (item, id) => `
          <li key=${id}>
            <h3>${item?.title}</h3>
            <p>${item?.company} , ${item?.location}</p>
            <p>${item?.description}</p>
          </li>
        `
        )
        .join("")}
    </ul>
  </div>
    
        <br />
        <hr />
        <div className="education">
          <h3>Education</h3>
          ${formData?.resume?.education
            ?.map(
              (item, id) => `
              <div key=${id}>
                <h3>${item?.collegeName}</h3>
                <p>${item?.degree}</p>
                <p>${item?.startYear} - ${item?.endYear}</p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
      <div className="certifications">
      <h3>CERTIFICATIONS</h3>
      <ul>
        ${formData?.resume?.certifications
          ?.map(
            (item, id) => `
            <li key=${id}>
              <h5>${item?.title}</h5>
              <p>Organization: ${item?.issuingOrganization}</p>
            </li>
          `
          )
          .join("")}
      </ul>
    </div>
  
    <div className="skills">
    <h3>SKILLS</h3>
    <ul>
      ${formData?.resume?.skillsAndLevel
        ?.map((item, id) => `<li key=${id}>${item?.skills}</li>`)
        .join("")}
    </ul>
  </div>
  
    </div>
      
      </body>
      </html>
      `;
    };
  
    const getCSS = () => {
      return `
      /* d.css */
  
      /* Styling for header */
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
      header {
        background-color: #f2f2f2;
        padding: 20px;
        text-align: center;
      }
      
      header h1 {
        margin: 0;
        font-size: 36px;
      }
      
      nav ul {
        list-style-type: none;
        padding: 0;
      }
      
      nav ul li {
        display: inline;
        margin-right: 20px;
      }
      
      nav ul li a {
        text-decoration: none;
        color: #333;
      }
      
      nav ul li a:hover {
        color: #ff9900; /* Change color on hover */
      }
      
      /* Styling for sections */
      section {
        padding: 40px;
        background-color: #fff;
        margin-bottom: 20px;
      }
      
      section h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      section p {
        font-size: 16px;
        line-height: 1.6;
        color: #555;
      }
      
      /* Styling for footer */
      footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
      }
      `;
    };
  
    let data = {
      html: getHTML(),
      cssStyles: getCSS(),
    };
  
    const handleResume = async () => {
      setLoading(true);
      setError(" ");
  
      const axiosConfig = {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/json",
        },
      };
      axios
        .post(`https://htmltopdf-yf6w.onrender.com/convert`, data, axiosConfig)
        .then((response) => {
          setLoading(false);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "receipt.pdf");
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    };
  return (
    <div>
      <button onClick={handleResume}>Download</button>
    </div>
  )
}

export default HtmlToPdf
