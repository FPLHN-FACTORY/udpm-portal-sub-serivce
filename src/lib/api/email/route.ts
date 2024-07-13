// import {Resend} from 'resend';
// import {NextResponse} from 'next/server';
// import WelcomeEmail from '@/components/emails/welcome.tsx';
//
// const env = import.meta.env
// const resend = new Resend(env.RESEND_API_KEY);
//
//
// export async function GET() {
//     // await resend.emails.send({
//     //     from: 'email@fplhnfactory.workshop',
//     //     to: 'nghiabe.dev@gmail.com',
//     //     subject: 'hello world',
//     //     react: WelcomeEmail()
//     // });
//
//     await resend.emails.send({
//         from: 'email@fplhnfactory.workshop',
//         to: 'nghiabe.dev@gmail.com',
//         subject: 'hello world',
//         react: WelcomeEmail(
//             {
//                 userFirstName: 'Nghĩa Bé',
//                 loginDevice: 'development',
//                 loginLocation: 'Ha Noi'
//             }
//         ),
//     })
//
//     return NextResponse.json({
//         status: 200,
//         data: {},
//         0: 'Email sent successfully'
//     },);
// }