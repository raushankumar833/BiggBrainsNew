import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  Stack,
  IconButton,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Tooltip,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

/**
 * TermAndCondition.jsx
 * Premium-styled Terms & Conditions page component built with MUI.
 * - Default export is a React component ready to drop into your site
 * - Props:
 *    - onAccept: () => void         // called when user accepts
 *    - lastUpdated: string          // e.g. "December 2, 2025"
 *    - compact: boolean             // slightly smaller layout when true
 *
 * Usage:
 * import TermAndCondition from "./TermAndCondition";
 * <TermAndCondition onAccept={() => console.log('accepted')} lastUpdated="Dec 2, 2025" />
 */

export default function TermAndCondition({ onAccept, lastUpdated = "December 4, 2025", compact = false }) {
  const theme = useTheme();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simple text download of T&C - you can replace with PDF generator if you prefer
    const el = document.createElement("a");
    const text = document.getElementById("terms-content").innerText;
    const blob = new Blob([text], { type: "text/plain" });
    el.href = URL.createObjectURL(blob);
    el.download = "BiggBrains-Terms-and-Conditions.txt";
    document.body.appendChild(el);
    el.click();
    el.remove();
  };

  return (
    <Box sx={{ background: theme.palette.mode === "light" ? "#f7f9fb" : "#0b1220", py: compact ? 6 : 10, minHeight: "100%", mt: 4 }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Paper elevation={8} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
                Terms &amp; Conditions
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                Welcome to BiggBrains — please read these terms carefully.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Tooltip title="Print">
                <IconButton onClick={handlePrint} size="large">
                  <PrintIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Download as text">
                <IconButton onClick={handleDownload} size="large">
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", flexDirection: { xs: "column", md: "row" } }}>
            {/* TOC */}
            <Box sx={{ flex: 1.1, maxWidth: { md: 140 }, display: { xs: "none", md: "block" } }}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, position: "sticky", top: 24 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  On this page
                </Typography>
                <List dense>
                  <ListItem component="a" href="#agreement" sx={{ cursor: "pointer", py: 0.5 }}>
                    Agreement
                  </ListItem>
                  <ListItem component="a" href="#cookies" sx={{ cursor: "pointer", py: 0.5 }}>
                    Cookies
                  </ListItem>
                  <ListItem component="a" href="#license" sx={{ cursor: "pointer", py: 0.5 }}>
                    License
                  </ListItem>
                  <ListItem component="a" href="#comments" sx={{ cursor: "pointer", py: 0.5 }}>
                    Comments
                  </ListItem>
                  <ListItem component="a" href="#linking" sx={{ cursor: "pointer", py: 0.5 }}>
                    Linking
                  </ListItem>
                  <ListItem component="a" href="#disclaimer" sx={{ cursor: "pointer", py: 0.5 }}>
                    Disclaimer
                  </ListItem>
                </List>
              </Paper>
            </Box>

            {/* Main content */}
            <Box id="terms-content" sx={{ flex: 2 }}>
              <Typography variant="caption" sx={{ display: "block", mb: 2, color: "text.secondary" }}>
                Last updated: {lastUpdated}
              </Typography>

              <section id="agreement">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Welcome To BiggBrains
                </Typography>
                <Typography paragraph>
                  These terms and conditions outline the rules and regulations for the use of BIGGBRAINS
                  SOLUTIONS PRIVATE LIMITED Website, located at BiggBrains.com. By accessing this website we
                  assume you accept these terms and conditions. Do not continue to use BiggBrains if you do
                  not agree to take all of the terms and conditions stated on this page.
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 2 }}>
                  Terminology
                </Typography>
                <Typography paragraph>
                  The following terminology applies to these Terms and Conditions, Privacy Statement and
                  Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person
                  logging on this website and compliant with the Company’s terms and conditions. "The Company",
                  "Ourselves", "We", "Our" and "Us" refers to our Company. "Party", "Parties", or "Us"
                  refers to both the Client and ourselves.
                </Typography>

                <Typography paragraph>
                  All terms refer to the offer, acceptance, and consideration of payment necessary to undertake
                  the process of our assistance to the Client in the most appropriate manner for the express
                  purpose of meeting the Client’s needs in respect of provision of the Company’s stated services,
                  in accordance with and subject to prevailing law of India.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="cookies">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Cookies
                </Typography>
                <Typography paragraph>
                  We employ the use of cookies. By accessing BiggBrains, you agreed to use cookies in agreement
                  with the BIGGBRAINS SOLUTIONS PRIVATE LIMITED Privacy Policy. Most interactive websites use
                  cookies to let us retrieve the user’s details for each visit.
                </Typography>

                <Typography paragraph>
                  Cookies are used by our website to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="license">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  License
                </Typography>
                <Typography paragraph>
                  Unless otherwise stated, BIGGBRAINS SOLUTIONS PRIVATE LIMITED and/or its licensors own the
                  intellectual property rights for all material on BiggBrains. All intellectual property rights
                  are reserved. You may access this from BiggBrains for your own personal use subjected to
                  restrictions set in these terms and conditions.
                </Typography>

                <Typography component="div" sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: 700, display: "block", mb: 1 }}>You must not:</Typography>
                  <List dense>
                    <ListItem>Republish material from BiggBrains</ListItem>
                    <ListItem>Sell, rent or sub-license material from BiggBrains</ListItem>
                    <ListItem>Reproduce, duplicate or copy material from BiggBrains</ListItem>
                    <ListItem>Redistribute content from BiggBrains</ListItem>
                  </List>
                </Typography>

                <Typography paragraph>
                  This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the
                  help of the TermsFeed Free Terms and Conditions Generator.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="comments">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  User Content &amp; Comments
                </Typography>

                <Typography paragraph>
                  Parts of this website offer an opportunity for users to post and exchange opinions and
                  information in certain areas of the website. BIGGBRAINS SOLUTIONS PRIVATE LIMITED does not filter,
                  edit, publish or review Comments prior to their presence on the website. Comments do not reflect
                  the views and opinions of BIGGBRAINS SOLUTIONS PRIVATE LIMITED, its agents and/or affiliates.
                </Typography>

                <Accordion elevation={0} sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>What we expect from commenters</AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        You warrant and represent that you are entitled to post the Comments and have all necessary
                        licenses and consents to do so.
                      </ListItem>
                      <ListItem>
                        The Comments do not invade any intellectual property right, including without limitation
                        copyright, patent or trademark of any third party.
                      </ListItem>
                      <ListItem>
                        The Comments do not contain defamatory, libelous, offensive, indecent or otherwise unlawful
                        material which is an invasion of privacy.
                      </ListItem>
                      <ListItem>
                        The Comments will not be used to solicit or promote business or custom or present commercial
                        activities or unlawful activity.
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Typography paragraph>
                  You hereby grant BIGGBRAINS SOLUTIONS PRIVATE LIMITED a non-exclusive license to use, reproduce,
                  edit and authorize others to use, reproduce and edit any of your Comments in any and all forms,
                  formats or media.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="linking">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Hyperlinking to our Content
                </Typography>

                <Typography paragraph>
                  The following organizations may link to our Website without prior written approval: Government
                  agencies, Search engines, News organizations, Online directory distributors and System-wide
                  Accredited Businesses. These organizations may link to our home page, to publications or to other
                  Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking party and its products and/or services;
                  and (c) fits within the context of the linking party’s site.
                </Typography>

                <Typography paragraph>
                  We may consider and approve other link requests from a range of organizations if we determine
                  the link is appropriate and beneficial. If you are interested in linking to our website, please
                  contact us via e-mail with your details, list of linking URLs and target URLs on our site.
                </Typography>

                <Typography paragraph>
                  Approved organizations may hyperlink to our Website by use of our corporate name, the URL being
                  linked to, or any other description that fits the linking party’s site context. No use of the
                  BIGGBRAINS SOLUTIONS PRIVATE LIMITED logo or artwork is permitted without a trademark license
                  agreement.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="iframes">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  iFrames
                </Typography>
                <Typography paragraph>
                  Without prior approval and written permission, you may not create frames around our Webpages
                  that alter in any way the visual presentation or appearance of our Website.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="content-liability">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Content Liability
                </Typography>
                <Typography paragraph>
                  We shall not be held responsible for any content that appears on your Website. You agree to
                  protect and defend us against all claims that are arising on your Website. No link(s) should appear
                  on any Website that may be interpreted as libelous, obscene or criminal, or which infringes,
                  otherwise violates, or advocates the infringement or other violation of, any third-party rights.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="privacy">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Your Privacy
                </Typography>
                <Typography paragraph>
                  Please read our Privacy Policy.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="reservation">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Reservation of Rights
                </Typography>
                <Typography paragraph>
                  We reserve the right to request that you remove all links or any particular link to our Website.
                  You agree to immediately remove all links to our Website upon request. We also reserve the right
                  to amend these terms and conditions and its linking policy at any time. By continuously linking to
                  our Website, you agree to be bound to and follow these linking terms and conditions.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="removal">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Removal of links from our website
                </Typography>
                <Typography paragraph>
                  If you find any link on our Website that is offensive for any reason, you are free to contact and
                  inform us at any moment. We will consider requests to remove links but we are not obligated to do
                  so or to respond to you directly. We do not ensure that the information on this website is correct,
                  we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains
                  available or that the material on the website is kept up to date.
                </Typography>
              </section>

              <Divider sx={{ my: 3 }} />

              <section id="disclaimer">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Disclaimer
                </Typography>
                <Typography paragraph>
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                  conditions relating to our website and the use of this website.
                </Typography>

                <Typography paragraph>
                  Nothing in this disclaimer will:
                </Typography>
                <List dense>
                  <ListItem>limit or exclude our or your liability for death or personal injury;</ListItem>
                  <ListItem>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</ListItem>
                  <ListItem>limit any of our or your liabilities in any way that is not permitted under applicable law; or</ListItem>
                  <ListItem>exclude any of our or your liabilities that may not be excluded under applicable law.</ListItem>
                </List>

                <Typography paragraph sx={{ mt: 2 }}>
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
                  (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the
                  disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. As
                  long as the website and the information and services on the website are provided free of charge, we
                  will not be liable for any loss or damage of any nature.
                </Typography>
              </section>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
