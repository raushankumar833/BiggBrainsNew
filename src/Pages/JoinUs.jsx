// import { 
//   Container, 
//   Typography, 
//   Box, 
//   Stack, 
//   Card, 
//   Button,
//   Grid 
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ConnectUs from '../Components/ConnectUs';

// const JoinUs = () => {
//   const services = [
//     {
//       title: "PERSONILIZATION",
//       subtitle: "Unlock Your Online Potential",
//       features: [
//         "Development in React.js next.js",
//         "Secure, Fast, efficient, websites",
//         "highly responsive and SEO Friendly Websites",
//         "Server Side Rendering for peak performance",
//         "Modern take on web designs with the latest UI/UX"
//       ]
//     },
//     {
//       title: "Progressive webapp",
//       subtitle: "Next-gen web experience.",
//       features: [
//         "Compatible with all platforms",
//         "Design that adapts to all screens.",
//         "Lightning fast loading",
//         "Design that transcends your experience",
//         "Offline functionality"
//       ],
//       popular: true
//     },
//     {
//       title: "Mobile Applications",
//       subtitle: "Connect. Create. Inspire.",
//       features: [
//         "User Engagement",
//         "Enhances interaction",
//         "Push Notifications",
//         "Real-time updates",
//         "Permissions & workflows"
//       ]
//     }
//   ];

//   return (
//     <>
//     <Container 
//       maxWidth="lg" 
//       sx={{ 
//         py: { xs: 6, md: 10 },
//       }}
//     >
//       {/* Section Header */}
//       <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
//         <Typography
//           variant="h3"
//           sx={{
//             color: '#1d2d46',
//             fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//             fontWeight: 700,
//             mb: 2,
//             mt:10
//           }}
//         >
//           WHY JOIN BIGGBRAINS
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             color: '#5a6c7d',
//             fontSize: { xs: '1rem', md: '1.2rem' },
//             maxWidth: '600px',
//             mx: 'auto',
//           }}
//         >
//           Choose our service and make modern online conversation magic
//         </Typography>
//       </Box>

//       {/* Services Cards */}
//       <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6, justifyContent: "center" }}>
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 height: '100%',
//                  flexGrow: 1, 
//                  p: { xs: 2, sm: 2 },
//                 background: '#ffffff',
//                 borderRadius: '20px',
//                 border: '2px solid rgba(29, 45, 70, 0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'visible',
//                 boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
//                 '&:hover': {
//                   transform: 'translateY(-8px)',
//                   boxShadow: '0 20px 40px rgba(29, 45, 70, 0.15)',
//                   borderColor: '#1d2d46',
//                 },
//               }}
//             >
//               {/* Popular Badge */}
//               {service.popular && (
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: -12,
//                     right: 20,
//                     bgcolor: '#1d2d46',
//                     color: 'white',
//                     px: 2,
//                     py: 0.5,
//                     borderRadius: '20px',
//                     fontSize: '0.75rem',
//                     fontWeight: 600,
//                     letterSpacing: '0.5px',
//                     boxShadow: '0 4px 12px rgba(29, 45, 70, 0.3)',
//                   }}
//                 >
//                   POPULAR
//                 </Box>
//               )}

//               {/* Service Title */}
//               <Stack spacing={1} sx={{ mb: 2 }}>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontSize: { xs: '1.5rem', sm: '1.8rem' },
//                     fontWeight: 700,
//                     color: '#1d2d46',
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {service.title}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: '#3d5070',
//                     fontSize: '0.9rem',
//                     fontWeight: 500,
//                     display: 'block',
//                   }}
//                 >
//                   {service.subtitle}
//                 </Typography>
//               </Stack>

//               {/* Features List */}
//               <Stack spacing={2} component="ul" sx={{ pl: 0, m: 0 }}>
//                 {service.features.map((feature, idx) => (
//                   <Stack
//                     key={idx}
//                     direction="row"
//                     spacing={1.5}
//                     alignItems="flex-start"
//                     component="li"
//                     sx={{
//                       listStyle: 'none',
//                     }}
//                   >
//                     <CheckCircleIcon
//                       sx={{
//                         color: '#1d2d46',
//                         fontSize: '1.2rem',
//                         mt: 0.25,
//                         flexShrink: 0,
//                       }}
//                     />
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: '#5a6c7d',
//                         fontSize: { xs: '0.9rem', sm: '0.95rem' },
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {feature}
//                     </Typography>
//                   </Stack>
//                 ))}
//               </Stack>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* CTA Button */}
//       <Box sx={{ textAlign: 'center' }}>
//         <Button
//           variant="contained"
//           size="large"
//           type="submit"
//           sx={{
//             background: 'linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)',
//             color: 'white',
//             px: { xs: 4, sm: 6 },
//             py: 1.5,
//             borderRadius: '12px',
//             fontSize: { xs: '1rem', sm: '1.1rem' },
//             fontWeight: 600,
//             textTransform: 'none',
//             boxShadow: '0 10px 30px rgba(29, 45, 70, 0.3)',
//             transition: 'all 0.3s ease',
//             minWidth: { xs: '100%', sm: '200px' },
//             '&:hover': {
//               background: 'linear-gradient(135deg, #3d5070 0%, #1d2d46 100%)',
//               transform: 'translateY(-3px)',
//               boxShadow: '0 15px 35px rgba(29, 45, 70, 0.4)',
//             },
//             '&:active': {
//               transform: 'translateY(-1px)',
//             },
//           }}
//         >
//           Click to join
//         </Button>
        
//       </Box>
      
//     </Container>
//      <ConnectUs />
//     </>
//   );
// };

// export default JoinUs;
import React from "react";
import { Container, Box, Grid, Typography, Card, CardContent } from "@mui/material";

const JoinUs = () => {
  const features = [
    {
      title: "PERSONALIZATION",
      desc: "Tailoring the software to meet specific business requirements.",
    },
    {
      title: "SCALABILITY",
      desc: "Designing software that grows with your business.",
    },
    {
      title: "INTEGRATION",
      desc: "Seamlessly integrating with existing systems and processes.",
    },
    {
      title: "FLEXIBILITY",
      desc: "Adapting the software to evolving business needs.",
    },
    {
      title: "COMPETITIVE ADVANTAGE",
      desc: "Leveraging unique features to stand out in the market.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f7",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Center Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            color: "#2d2d2d",
            mb: 5,
            fontSize: { xs: "28px", md: "42px" },
            lineHeight: 1.2,
          }}
        >
          WHY CHOOSE <br /> BIGGBRAINS?
        </Typography>

        {/* Feature Cards */}
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  {/* Purple Bullet + Title */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#6a2c91",
                        mr: 1.2,
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#6a2c91",
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography sx={{ color: "#4b4b4b", fontSize: "14px" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinUs;

