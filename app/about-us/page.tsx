import Navigation from "../../components/Navigation"

// 필수적으로 내보내야 하는 object
// page나 layout에서만 metadata export 가능
// 서버 컴포넌트에만 존재 가능
export const metadata = {
    title: 'Home | Next Movies',
    description: 'The best movie on the framework',
}

export default function AboutUs() {
    return (
        <h1>
            About Us!
        </h1>
    )
}
