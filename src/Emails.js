import React, { useState, useEffect } from 'react';
import {
  Window,
  WindowHeader,
  WindowContent,
  ListItem,
  Divider,
  Button,
  ScrollView,
} from 'react95';

const Emails = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showEmailList, setShowEmailList] = useState(true);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle email selection on mobile
  useEffect(() => {
    if (isMobile && selectedEmail) {
      setShowEmailList(false);
    }
  }, [selectedEmail, isMobile]);

  const emails = [
    { sender: 'Hillary Clinton', subject: 'Can We delete Those?', snippet: 'Just wanted to check in on the thing...', content: `Hey there,

Just following up on our previous conversation.

Can you please delete all data on me and Bill. I mean ever since Monica it's been all too much. The cheating the crossdressing, pizzagate.

I need some relief. PLEASE delete everything!

Best regards,
Hillary` },
    { sender: 'Diddy', subject: 'Party Plans?', snippet: "Yo! Let's plan the next big one, it's gonna be lit!", content: `Yo!

Hope you're ready for this! The next party is going to be absolutely incredible. I've got some amazing ideas that will blow everyone's minds.

Here's what I'm thinking:
- Live performances
- Special guest appearances
- VIP section with exclusive access
- Showcase on the new Pigeon Tech v6.9

Can we make the last one happen? I got everything else.

- Diddy` },
    { sender: 'Epstein', subject: 'Island Matters', snippet: 'We need to discuss the island security', content: `Hello,

I'd like to ramp up Pigeon Tech on the island by 500%.

Key points:
- Visitors has increased 1000% in last 5 years
- Pigeon Tech can help us gain data on frequent travelers and be proactive
- Security protocols

Best regards,
Jeffrey` },
    { sender: 'Oprah', subject: 'You Get a Pigeon!', snippet: "And guess what? You get one too! Let's talk charity.", content: `Hello!

I'm excited to discuss our next big charity initiative! The car giveaway was just the beginning, and I have even bigger plans for the next event.

Here's what we're planning:
- Pigeon Tech for everyone
- Secret hidden chips to spy on our audience
- Mass surveillance hidden behind charity!

Looking forward to your input!

Best wishes,
Oprah` },
    { sender: 'Bill Gates', subject: 'Tech Partnership', snippet: 'The world is chnaging. Willing to spend billions', content: `Hi there,

I wanted to reach out about a partnership for Pigeon Tech.

Thoughts:
- Pigeons are by far the best way to spy on the masses
- This data can help us stay in power
- FLOYDAI and Pigeon Tech put together would put us years ahead of the enemies

Let's schedule a call to discuss the details.

Regards,
Bill` },
  ];

  const handleBackToList = () => {
    setShowEmailList(true);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '16px' }}>
      <Window style={{ width: '100%', maxWidth: '64rem', margin: '0 auto', height: isMobile ? 'auto' : 'auto' }}>
        <WindowHeader style={{ background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Email Monitor</span>
          <div style={{ display: 'flex', gap: '2px' }}>
            <Button size="sm" square>_</Button>
            <Button size="sm" square>□</Button>
            <Button size="sm" square>X</Button>
          </div>
        </WindowHeader>
        <WindowContent style={{ height: isMobile ? 'calc(100% - 33px)' : 'auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <div style={{ 
              display: 'flex', 
              gap: '4px', 
              marginBottom: '8px',
              flexWrap: 'wrap'
            }}>
              {isMobile && !showEmailList && (
                <Button onClick={handleBackToList}>← Back</Button>
              )}
              {!isMobile && <Button>Print</Button>}
            </div>
            <Divider />
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '16px',
            height: isMobile ? 'calc(100% - 80px)' : '500px'
          }}>
            {/* Email List */}
            {(!isMobile || showEmailList) && (
              <div style={{ height: 'min', overflowY: 'auto' }}>
                {emails.map((email, index) => (
                  <div key={index}>
                    <ListItem 
                      style={{ 
                        padding: '8px', 
                        cursor: 'pointer',
                        backgroundColor: selectedEmail === email ? '#000080' : undefined,
                        color: selectedEmail === email ? 'white' : undefined,
                      }}
                      onClick={() => setSelectedEmail(email)}
                    >
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr 80px' : '140px 1fr 80px',
                        gap: '8px', 
                        width: '100%' 
                      }}>
                        <div style={{ 
                          fontWeight: 'bold', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap' 
                        }}>
                          {email.sender}
                        </div>
                        {!isMobile && (
                          <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap' 
                          }}>
                            {email.subject}
                          </div>
                        )}
                        <div style={{ textAlign: 'right', fontSize: '0.875rem' }}>
                          12:00 PM
                        </div>
                      </div>
                    </ListItem>
                    {index < emails.length - 1 && <Divider />}
                  </div>
                ))}
              </div>
            )}

            {/* Email Content */}
            {(!isMobile || !showEmailList) && (
              <div style={{ height: '100%', overflowY: 'auto', padding: '16px' }}>
                <ScrollView>
                  {selectedEmail ? (
                    <div>
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>From: </strong>{selectedEmail.sender}
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>Subject: </strong>{selectedEmail.subject}
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>Date: </strong>12:00 PM
                        </div>
                        <Divider />
                      </div>
                      <pre style={{ 
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit',
                        margin: 0,
                        fontSize: isMobile ? '14px' : 'inherit'
                      }}>
                        {selectedEmail.content}
                      </pre>
                    </div>
                  ) : (
                    <div style={{ color: 'gray' }}>
                      Select an email to view its content.
                    </div>
                  )}
                </ScrollView>
              </div>
            )}
          </div>

          {!isMobile && (
            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem' }}>5 messages</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <Button>Check Mail</Button>
                <Button>Settings</Button>
              </div>
            </div>
          )}
        </WindowContent>
      </Window>
    </div>
  );
};

export default Emails;
