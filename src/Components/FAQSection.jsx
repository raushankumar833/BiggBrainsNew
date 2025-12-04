import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop:"50px",
    padding: '24px 16px',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '16px',
    marginBottom: '48px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '8px',
    },
  },
  categoryCard: {
    border: '1px solid rgba(145, 158, 171, 0.24)',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    '&:hover': {
      boxShadow: '0px 12px 24px rgba(145, 158, 171, 0.16)',
    },
  },
  categoryIcon: {
    width: '48px',
    height: '48px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  categoryTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#212B36',
    margin: 0,
  },
  mainTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#212B36',
    margin: '0 0 32px 0',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  faqSection: {
    marginBottom: '0',
  },
  accordion: {
    backgroundColor: '#fff',
    border: '1px solid rgba(145, 158, 171, 0.24)',
    borderRadius: '8px',
    marginBottom: '16px',
    overflow: 'hidden',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  accordionSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    cursor: 'pointer',
    minHeight: '72px',
    '@media (max-width: 768px)': {
      padding: '16px',
      minHeight: '64px',
    },
  },
  accordionQuestion: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#212B36',
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  expandIcon: {
    width: '20px',
    height: '20px',
    transition: 'transform 0.3s ease',
  },
  accordionDetails: {
    padding: '0 24px 24px 24px',
    borderTop: '1px solid rgba(145, 158, 171, 0.24)',
    '@media (max-width: 768px)': {
      padding: '0 16px 16px 16px',
    },
  },
  answerText: {
    fontSize: '16px',
    color: '#637381',
    lineHeight: 1.6,
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  contactSection: {
    backgroundColor: '#F4F6F8',
    borderRadius: '16px',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      padding: '24px',
    },
  },
  contactTitle: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#212B36',
    margin: '0 0 24px 0',
    '@media (max-width: 768px)': {
      fontSize: '20px',
      marginBottom: '20px',
    },
  },
  formGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '24px',
    flex: 1,
  },
  formField: {
    width: '100%',
  },
  inputLabel: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#212B36',
    textAlign: 'left',
  },
  textInput: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid rgba(145, 158, 171, 0.32)',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#2065D1',
    },
    '@media (max-width: 768px)': {
      padding: '10px 14px',
    },
  },
  textarea: {
    minHeight: '100px',
    resize: 'vertical',
    lineHeight: 1.5,
  },
  submitButton: {
    backgroundColor: '#2065D1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 32px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    '&:hover': {
      backgroundColor: '#103996',
    },
    '@media (max-width: 768px)': {
      padding: '12px 24px',
    },
  },
  sideBySideContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '64px',
    alignItems: 'start',
    '@media (max-width: 1024px)': {
      gap: '32px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
    },
  },
//   faqColumn: {
//     maxHeight: '600px',
//     overflowY: 'auto',
//     paddingRight: '16px',
//     '&::-webkit-scrollbar': {
//       width: '6px',
//     },
//     '&::-webkit-scrollbar-track': {
//       background: '#f1f1f1',
//       borderRadius: '10px',
//     },
//     '&::-webkit-scrollbar-thumb': {
//       background: '#888',
//       borderRadius: '10px',
//     },
//     '&::-webkit-scrollbar-thumb:hover': {
//       background: '#555',
//     },
//     '@media (max-width: 768px)': {
//       maxHeight: 'none',
//       overflowY: 'visible',
//       paddingRight: '0',
//     },
//   },
}));

const FAQSection = () => {
  const classes = useStyles();
  
  const [expanded, setExpanded] = useState(7);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // FAQ Data
  const categories = [
    { id: 1, icon: 'src/assets/avatar.jpg', title: 'Managing your account' },
    { id: 2, icon: 'src/assets/avatar.jpg', title: 'Payment' },
    { id: 3, icon: 'src/assets/avatar.jpg', title: 'Delivery' },
    { id: 4, icon: 'src/assets/avatar.jpg', title: 'Problem with the Product' },
    { id: 5, icon: 'src/assets/avatar.jpg', title: 'Return & Refund' },
    { id: 6, icon: 'src/assets/avatar.jpg', title: 'Guarantees and assurances' },
  ];

  const faqs = [
    {
      id: 1,
      question: 'Are You Want to join Us ?',
      answer: 'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.'
    },
    {
      id: 2,
      question: 'Questions 2',
      answer: 'Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.'
    },
    {
      id: 3,
      question: 'Questions 3',
      answer: 'Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.'
    },
    {
      id: 4,
      question: 'Questions 4',
      answer: 'Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.'
    },
    {
      id: 5,
      question: 'Questions 5',
      answer: 'Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.'
    },
    {
      id: 6,
      question: 'Questions 6',
      answer: 'Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.'
    },
    {
      id: 7,
      question: 'Questions 7',
      answer: 'Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.'
    },
    {
      id: 8,
      question: 'Questions 8',
      answer: 'Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.'
    },
  ];

  // Handlers
  const handleAccordionClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className={classes.container}>
      {/* Categories Section */}
      <div className={classes.categoriesGrid}>
        {categories.map((category) => (
          <div key={category.id} className={classes.categoryCard}>
            <div className={classes.categoryIcon}>
              <img 
                src={category.icon} 
                alt={category.title}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h6 className={classes.categoryTitle}>{category.title}</h6>
          </div>
        ))}
      </div>

      {/* Main Title */}
      <h3 className={classes.mainTitle}>Frequently asked questions</h3>

      {/* Side by Side Section - FAQ and Contact Form */}
      <div className={classes.sideBySideContainer}>
        {/* Left Column - FAQ Accordions */}
        <div className={classes.faqColumn}>
          <div className={classes.faqSection}>
            {faqs.map((faq) => (
              <div key={faq.id} className={classes.accordion}>
                <div 
                  className={classes.accordionSummary}
                  onClick={() => handleAccordionClick(faq.id)}
                >
                  <h6 className={classes.accordionQuestion}>{faq.question}</h6>
                  <svg 
                    className={classes.expandIcon}
                    style={{
                      transform: expanded === faq.id ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16" />
                  </svg>
                </div>
                {expanded === faq.id && (
                  <div className={classes.accordionDetails}>
                    <p className={classes.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className={classes.contactSection}>
          <h4 className={classes.contactTitle}>Haven't found the right help?</h4>
          
          <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className={classes.formGrid}>
              <div className={classes.formField}>
                <label className={classes.inputLabel} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={classes.textInput}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={classes.formField}>
                <label className={classes.inputLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={classes.textInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={classes.formField}>
                <label className={classes.inputLabel} htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={classes.textInput}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={classes.formField}>
                <label className={classes.inputLabel} htmlFor="message">Enter your message here.</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${classes.textInput} ${classes.textarea}`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className={classes.submitButton}>
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;