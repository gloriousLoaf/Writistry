/* HOME VIEW */
import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { Col, Row } from 'react-bootstrap';

const HomeView = () => {
  return (
    <Wrapper>
      <h1>Terms and Conditions</h1>
      <Row className='my-4'>
        <Col className='my-2'>
          <p>
            By creating an account on Writistry, you are agreeing to a simple
            set of community guidelines. This set of rules is designed to keep
            Writistry fun and safe, without subjecting anyone to abuse.
          </p>
          <p>
            Hate speech will not be tolerated, nor will insighting violence
            against or doxing any individual or group. Any use of profanity or
            NSFW content that attempts to hurt, abuse, spread falsehoods about,
            or encourage the abuse of individuals or groups will be removed and
            flagged against the original poster.
          </p>
          <p>
            Generally profane language is permissible when it does not target
            any individual or group. NSFW topics and content that are meant as
            entertainment are allowed and will likewise not be censored.
          </p>
          <p>
            Bot-generated content, repeated postings of the same material, and
            any otherwise spammy behavior will not be tolerated.
          </p>
          <p>
            Content in violation of these Terms will be removed and flagged
            against the original poster &#40;author of the material&#41;. A
            warning will be issued, and being flagged for multiple violations
            will result in permanent banning of said author from the community.
            In extreme cases, particularly relating to violence or doxing, the
            maintainer of Writistry reserves the right to ban a user after one
            offense.
          </p>
          <p>
            What constitutes abuse or hate speech? The Writisry community will
            broadly define this as any words, phrases, symbols or gestures that
            have malicious connotations or intent, historic or recent, towards
            ethnic and religious minorities, women and the LGBTQIA+ community.
            Any abuses of these Terms should be reported. Additionally, all
            content is being actively monitored by software and the maintainer.
            If it is unclear why specific material was reported, the user who
            raised the alert may receive a follow up email from the maintainer
            of Writistry for clarity and potential improvements to these
            guidelines.
          </p>
          <p>
            For full disclosure, the maintainer of Writistry and author of these
            Terms is himself a white man from America. The scope of what is
            considered a violation is open to improvement and suggestions from
            all community members. Please send inquiries or questions to{' '}
            <a target='_blank' rel='noreferrer' href='mailto:hello@metcalf.dev'>
              hello@metcalf.dev
            </a>
            . As Writistry grows, additional volunteer help may be sought to
            keep the community fun, healthy, and safe.
          </p>
          <p>
            This platform is developed, maintained and managed by{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/gloriousLoaf'
            >
              David Metcalf
            </a>
            . For development-related issues, please visit the{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://gitub.com/gloriousLoaf/Writistry'
            >
              GitHub repo
            </a>
            . This is your community too, so jump in and contribute!
          </p>
        </Col>
      </Row>

      <Row className='my-4'>
        <Col xs={12} md={12} className='text-center'>
          <Link to='/signup' className='to-feed'>
            Got it, let's get signed in to Writistry.
          </Link>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomeView;
