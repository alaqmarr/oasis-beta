import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button } from '../../components/ui';

const HeroSection = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  background-color: ${colors.primary};
  color: #FFFFFF;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  background-color: #FFFFFF;
  padding: 3rem;
  border: 1px solid #FECACA;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #FECACA;
  font-size: 1rem;
  color: ${colors.text};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #FECACA;
  font-size: 1rem;
  color: ${colors.text};
  outline: none;
  transition: border-color 0.2s;
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const InfoCard = styled.div`
  padding: 2rem;
  background-color: #FEF2F2;
  border: 1px solid #FECACA;
  margin-bottom: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.125rem;
  color: ${colors.text};
  line-height: 1.6;
`;

function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: `Name: ${formData.name}\n\n${formData.message}`,
          page: 'Contact Page'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };
  return (
    <main>
      <HeroSection>
        <Container>
          <Title>Contact Us</Title>
          <Subtitle>
            Get in touch with our engineering team for inquiries, quotes, or technical support.
          </Subtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <Grid lgCols={2} gap="6rem">
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Send us a Message</h2>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Inquiry about..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                {status === 'error' && (
                  <div style={{ color: '#DC2626', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#FEF2F2', borderRadius: '0.25rem' }}>
                    Failed to send message. Please try again or contact us directly via email.
                  </div>
                )}

                {status === 'success' ? (
                  <div style={{ color: '#059669', padding: '1rem', backgroundColor: '#ECFDF5', borderRadius: '0.5rem', textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p>Thank you for contacting us. We will get back to you shortly.</p>
                    <Button as="button" type="button" onClick={() => setStatus('idle')} style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Send Another</Button>
                  </div>
                ) : (
                  <Button
                    as="button"
                    type="submit"
                    disabled={status === 'loading'}
                    style={{ width: '100%', textAlign: 'center', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                )}
              </ContactForm>
            </div>

            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Contact Information</h2>
              <InfoCard>
                <InfoTitle>Oasis Group (Headquarters)</InfoTitle>
                <InfoText>
                  Plot – 2, TSIIC Industrial Park,<br />
                  Survey No. 226(P) & 227,<br />
                  Genome Valley, Turkapally Village,<br />
                  Medchal-Malkajgiri District,<br />
                  Telangana – 500078, India.
                </InfoText>
                <div style={{ marginTop: '1rem' }}>
                  <InfoText><strong>Phone:</strong> +91-91210 84141, +91-91007 89172</InfoText>
                  <InfoText><strong>Email:</strong> office@oasis-group.co.in</InfoText>
                </div>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Overseas Associates</InfoTitle>
                <InfoText><strong>Lucent Industrial Solutions LLC</strong></InfoText>
                <InfoText>
                  827, Business Village – A,<br />
                  Port Saeed, Dubai,<br />
                  United Arab Emirates.
                </InfoText>
                <div style={{ marginTop: '1rem' }}>
                  <InfoText><strong>Phone:</strong> +971 505750802</InfoText>
                  <InfoText><strong>Email:</strong> office@lucent-is.com</InfoText>
                </div>
              </InfoCard>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default ContactPage;
