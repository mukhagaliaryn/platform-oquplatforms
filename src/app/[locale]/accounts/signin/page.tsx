import SignInForm from "@/components/app/accounts/SignIn";
import AccountLayout from "@/layouts/AccountLayout";


export default function SignInPage() {
    return (
        <AccountLayout>
            <div className="grid gap-4">
                <h1 className="text-2xl font-semibold">Қайта оралуыңызбен!</h1>
                <SignInForm />
            </div>
        </AccountLayout>
    )
}