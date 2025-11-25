
export const theme = {
  primary: '#DC2626', // Red-600
  secondary: '#991B1B', // Red-800
  background: '#F3F4F6', // Gray-100
  surface: '#FFFFFF',
  text: '#1F2937', // Gray-800
  textLight: '#6B7280', // Gray-500
  border: '#E5E7EB', // Gray-200
};

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const header = `
  <div style="background-color: ${theme.primary}; padding: 24px; text-align: center;">
    <img src="${BASE_URL}/oasis-logo.jpg" alt="Oasis Group" style="height: 48px; margin-bottom: 12px; border-radius: 4px;">
    <h1 style="color: #FFFFFF; margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 28px; font-weight: 800; letter-spacing: 1px;">OASIS GROUP</h1>
    <p style="color: #FECACA; margin: 8px 0 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; letter-spacing: 0.5px;">Precision Engineering Since 1974</p>
  </div>
`;

const footer = `
  <div style="background-color: ${theme.surface}; padding: 32px 20px; text-align: center; border-top: 1px solid ${theme.border};">
    <p style="color: ${theme.textLight}; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; line-height: 1.6; margin: 0;">
      <strong>Oasis Group Headquarters</strong><br>
      Plot – 2, TSIIC Industrial Park, Genome Valley<br>
      Hyderabad, Telangana – 500078, India<br>
      <a href="mailto:office@oasis-group.co.in" style="color: ${theme.primary}; text-decoration: none; font-weight: 600;">office@oasis-group.co.in</a>
    </p>
    <div style="margin-top: 24px;">
      <a href="${BASE_URL}/products" style="color: ${theme.textLight}; text-decoration: none; font-size: 13px; margin: 0 10px;">Products</a>
      <a href="${BASE_URL}/industries" style="color: ${theme.textLight}; text-decoration: none; font-size: 13px; margin: 0 10px;">Industries</a>
      <a href="${BASE_URL}/contact" style="color: ${theme.textLight}; text-decoration: none; font-size: 13px; margin: 0 10px;">Contact</a>
    </div>
    <p style="color: #9CA3AF; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; margin-top: 24px;">
      &copy; ${new Date().getFullYear()} Oasis Group. All rights reserved.
    </p>
  </div>
`;

interface EmailData {
  email?: string;
  subject: string;
  message?: string;
  page?: string;
  productImage?: string;
  relatedProducts?: Array<{ id: string; title: string; image: string }>;
}

export const generateAdminEmail = (data: EmailData) => {
  const productImageHtml = data.productImage ? `
    <div style="margin-bottom: 24px; text-align: center;">
      <img src="${data.productImage}" alt="Product" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: ${theme.background}; font-family: 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      <div style="max-width: 600px; margin: 0 auto; background-color: ${theme.surface}; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        ${header}
        
        <div style="padding: 40px 32px;">
          <div style="border-bottom: 2px solid ${theme.border}; padding-bottom: 20px; margin-bottom: 30px;">
            <h2 style="color: ${theme.text}; margin: 0; font-size: 24px; font-weight: 700;">New Website Enquiry</h2>
            <p style="color: ${theme.textLight}; margin: 8px 0 0 0; font-size: 14px;">Received from <strong>${data.page}</strong></p>
          </div>

          ${productImageHtml}

          <div style="background-color: #FEF2F2; border-radius: 8px; padding: 24px; margin-bottom: 30px; border: 1px solid #FECACA;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: ${theme.textLight}; font-size: 14px; width: 80px; vertical-align: top;"><strong>From:</strong></td>
                <td style="padding: 8px 0; color: ${theme.text}; font-size: 14px; font-weight: 500;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: ${theme.textLight}; font-size: 14px; vertical-align: top;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: ${theme.text}; font-size: 14px; font-weight: 500;">${data.subject}</td>
              </tr>
            </table>
          </div>

          <div>
            <h3 style="color: ${theme.text}; font-size: 16px; font-weight: 700; margin: 0 0 12px 0;">Message Content:</h3>
            <div style="background-color: ${theme.background}; padding: 20px; border-radius: 8px; color: ${theme.text}; line-height: 1.6; font-size: 15px; border: 1px solid ${theme.border};">
              ${data.message?.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 40px; text-align: center;">
            <a href="mailto:${data.email}" style="background-color: ${theme.primary}; color: #FFFFFF; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block; transition: background-color 0.2s;">Reply to Customer</a>
          </div>
        </div>

        ${footer}
      </div>
    </body>
    </html>
  `;
};

export const generateCustomerEmail = (data: EmailData) => {
  const productImageHtml = data.productImage ? `
    <div style="margin: 0 auto 30px auto; max-width: 200px;">
      <img src="${data.productImage}" alt="Product" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    </div>
  ` : '';

  const relatedProductsHtml = data.relatedProducts && data.relatedProducts.length > 0 ? `
    <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid ${theme.border};">
      <h3 style="color: ${theme.text}; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; text-align: center;">You might also be interested in</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          ${data.relatedProducts.map(product => `
            <td style="width: 33.33%; padding: 0 8px; vertical-align: top;">
              <a href="${BASE_URL}/products/${product.id}" style="text-decoration: none; display: block;">
                <div style="background-color: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 8px; overflow: hidden; height: 100%;">
                  <div style="height: 100px; background-color: ${theme.background}; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 12px;">
                    <p style="color: ${theme.text}; font-size: 13px; font-weight: 600; margin: 0; text-align: center; line-height: 1.4;">${product.title}</p>
                    <p style="color: ${theme.primary}; font-size: 12px; margin: 8px 0 0 0; text-align: center;">View Details &rarr;</p>
                  </div>
                </div>
              </a>
            </td>
          `).join('')}
        </tr>
      </table>
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: ${theme.background}; font-family: 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      <div style="max-width: 600px; margin: 0 auto; background-color: ${theme.surface}; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        ${header}
        
        <div style="padding: 40px 32px;">
          <div style="text-align: center;">
            <div style="width: 64px; height: 64px; background-color: #DEF7EC; color: #03543F; border-radius: 50%; line-height: 64px; font-size: 32px; margin: 0 auto 24px auto;">✓</div>
            
            <h2 style="color: ${theme.text}; margin: 0 0 16px 0; font-size: 24px; font-weight: 800;">Enquiry Received</h2>
            
            <p style="color: ${theme.textLight}; font-size: 16px; line-height: 1.6; margin-bottom: 32px; max-width: 400px; margin-left: auto; margin-right: auto;">
              Thank you for contacting us regarding <strong>"${data.subject}"</strong>. Our engineering team is reviewing your requirements.
            </p>

            ${productImageHtml}

            <div style="background-color: ${theme.background}; padding: 24px; border-radius: 8px; text-align: left; border: 1px solid ${theme.border};">
              <p style="color: ${theme.text}; font-weight: 700; margin: 0 0 12px 0; font-size: 15px;">What happens next?</p>
              <ul style="margin: 0; padding-left: 20px; color: ${theme.textLight}; font-size: 14px; line-height: 1.6;">
                <li style="margin-bottom: 8px;">Our technical team will analyze your requirements.</li>
                <li style="margin-bottom: 8px;">We will prepare a detailed technical proposal or quote.</li>
                <li>You can expect a response within 24 business hours.</li>
              </ul>
            </div>
          </div>

          ${relatedProductsHtml}
        </div>

        ${footer}
      </div>
    </body>
    </html>
  `;
};
