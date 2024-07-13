// import {
//     Body,
//     Container,
//     Column,
//     Head,
//     Heading,
//     Html,
//     Img,
//     Preview,
//     Row,
//     Section,
//     Text,
// } from "@react-email/components";
//
// interface YelpRecentLoginEmailProps {
//     userFirstName?: string;
//     loginDevice?: string;
//     loginLocation?: string;
// }
//
// export const YelpRecentLoginEmail = ({
//                                          userFirstName,
//                                          loginDevice,
//                                          loginLocation,
//                                      }: YelpRecentLoginEmailProps) => {
//     const loginDate = new Date();
//
//     const formattedDate = new Intl.DateTimeFormat("en", {
//         dateStyle: "long",
//         timeStyle: "short",
//     }).format(loginDate);
//
//     const baseURL = `https://react-email-demo-dr9excyry-resend.vercel.app`
//
//     return (
//         <Html>
//             <Head />
//             <Preview>Yelp recent login</Preview>
//             <Body style={main}>
//                 <Container>
//                     <Section style={logo}>
//                         <Img src={"https://raw.githubusercontent.com/FPLHN-FACTORY/udpm-portal-sub-serivce/355e5c78ed56a1cae36e2619bebc7b81b7933cbf/src/assets/images/logo/bit/transparent/svg/logo-fpl/logo/logo-no-text.svg"} />
//                     </Section>
//
//                     <Section style={content}>
//                         <div>
//                             <Img
//                                 style={image}
//                                 width={620}
//                                 src={`${baseURL}/static/yelp-header.png`}
//                             />
//                         </div>
//
//                         <Row style={{ ...boxInfos, paddingBottom: "0" }}>
//                             <Column>
//                                 <Heading
//                                     style={{
//                                         fontSize: 32,
//                                         fontWeight: "bold",
//                                         textAlign: "center",
//                                     }}
//                                 >
//                                     Xin chào {userFirstName},
//                                 </Heading>
//                                 <Heading
//                                     as="h2"
//                                     style={{
//                                         fontSize: 26,
//                                         fontWeight: "bold",
//                                         textAlign: "center",
//                                     }}
//                                 >
//                                     Thư xác nhận ứng tuyển.
//                                 </Heading>
//
//                                 <Text style={paragraph}>
//                                     <b>Time: </b>
//                                     {formattedDate}
//                                 </Text>
//                                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                                     <b>Vị trí: </b>
//                                     {loginDevice}
//                                 </Text>
//                                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                                     <b>Thông tin: </b>
//                                     {loginLocation}
//                                 </Text>
//                                 <Text
//                                     style={{
//                                         color: "rgb(0,0,0, 0.5)",
//                                         fontSize: 14,
//                                         marginTop: -5,
//                                     }}
//                                 >
//                                     Hãy xem lại thông tin của bạn xem đã đúng chưa:
//                                     {/*{loginIp}*/}
//                                 </Text>
//
//                                 <Text style={paragraph}>
//                                     Nếu thông tin đã đúng chúng tôi sẽ sớm gửi mail trả lời cho bạn.
//                                 </Text>
//                                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                                     Nếu đây không phải là bạn, vui lòng bỏ qua
//                                     mail của chúng tôi.
//                                 </Text>
//                             </Column>
//                         </Row>
//                         <Row style={{ ...boxInfos, paddingTop: "0" }}>
//                             <Column style={containerButton} colSpan={2}>
//                                 {/*<Button style={button}>Learn More</Button>*/}
//                             </Column>
//                         </Row>
//                     </Section>
//
//                     <Section style={containerImageFooter}>
//                         <Img
//                             style={image}
//                             width={620}
//                             src={`${baseURL}/static/yelp-footer.png`}
//                         />
//                     </Section>
//
//                     <Text
//                         style={{
//                             textAlign: "center",
//                             fontSize: 12,
//                             color: "rgb(0,0,0, 0.7)",
//                         }}
//                     >
//                         © 2024 | Phố Kiều Mai., P.Phúc Diễn, Q.Bắc Từ Liêm, Hà Nội, T3 P308,
//                         FPLHN-FACTORY. | WorkShop
//                     </Text>
//                 </Container>
//             </Body>
//         </Html>
//     );
// };
//
// YelpRecentLoginEmail.PreviewProps = {
//     userFirstName: "Alan",
//     loginDate: new Date("September 7, 2022, 10:58 am"),
//     loginDevice: "Chrome on Mac OS X",
//     loginLocation: "Upland, California, United States",
//     loginIp: "47.149.53.167",
// } as YelpRecentLoginEmailProps;
//
// export default YelpRecentLoginEmail;
//
// const main = {
//     backgroundColor: "#fff",
//     fontFamily:
//         '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };
//
// const paragraph = {
//     fontSize: 16,
// };
//
// const logo = {
//     padding: "30px 20px",
// };
//
// const containerButton = {
//     display: "flex",
//     justifyContent: "center",
//     width: "100%",
// };
//
// // const button = {
// //     backgroundColor: "#e00707",
// //     borderRadius: 3,
// //     color: "#FFF",
// //     fontWeight: "bold",
// //     border: "1px solid rgb(0,0,0, 0.1)",
// //     cursor: "pointer",
// //     padding: "12px 30px",
// // };
//
// const content = {
//     border: "1px solid rgb(0,0,0, 0.1)",
//     borderRadius: "3px",
//     overflow: "hidden",
// };
//
// const image = {
//     maxWidth: "100%",
// };
//
// const boxInfos = {
//     padding: "20px",
// };
//
// const containerImageFooter = {
//     padding: "45px 0 0 0",
// };
