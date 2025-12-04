import { CheckCircle } from "lucide-react";

export default function RegistrationStatus({ userRegistration }) {
  if (!userRegistration) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="bg-green-500/15 border-2 border-green-500 rounded-xl p-4 text-white flex items-center gap-3">
        <CheckCircle className="w-7 h-7 text-green-400" />
        <div>
          <p className="font-semibold">You&apos;re Registered!</p>
          <p className="text-sm text-green-100">
            Problem #{userRegistration.problemId} – Team: {userRegistration.team}
          </p>
        </div>
      </div>
    </div>
  );
}
