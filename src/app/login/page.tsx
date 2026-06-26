"use client";

import { useState } from "react";
import { Store, Eye, EyeOff, Lock, User, AlertCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Panggil mutasi tRPC login yang sudah kita buat sebelumnya
    const loginMutation = api.auth.loginAdmin.useMutation({
        onSuccess: () => {
            router.push("/dashboard");
        },
        onError: (err) => {
            setError(err.message);
        },
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        loginMutation.mutate({ username, password });
    }

    return (
        <div className="min-h-screen bg-[#f8fafb] flex items-center justify-center px-4">
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-6px); }
                    40%, 80% { transform: translateX(6px); }
                }
                .fade-up { animation: fadeUp 0.5s cubic-bezier(.22,.68,0,1.2) both; }
                .d1 { animation-delay: 0.05s; }
                .d2 { animation-delay: 0.15s; }
                .d3 { animation-delay: 0.25s; }
                .d4 { animation-delay: 0.35s; }
                .shake { animation: shake 0.4s ease; }
            `}</style>

            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="fade-up d1 flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                        <Store className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-medium text-gray-900">POLIBAN UKM</h1>
                    <p className="text-sm text-gray-400 mt-1">Admin Portal</p>
                </div>

                {/* Card */}
                <div className="fade-up d2 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <h2 className="text-base font-medium text-gray-900 mb-1">Masuk ke dashboard</h2>
                    <p className="text-sm text-gray-400 mb-6">Khusus administrator sistem</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error menggunakan Alert Shadcn */}
                        {error && (
                            <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-600 shake">
                                <AlertCircle className="w-4 h-4 text-red-600" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {/* Username menggunakan Label & Input Shadcn */}
                        <div className="fade-up d3 space-y-1.5">
                            <Label htmlFor="username">Username</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    id="username"
                                    type="text"
                                    required
                                    placeholder="admin_ukm"
                                    className="pl-9 bg-gray-50 focus-visible:bg-white focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password menggunakan Label & Input Shadcn */}
                        <div className="fade-up d3 space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className="pl-9 pr-10 bg-gray-50 focus-visible:bg-white focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button Shadcn */}
                        <div className="fade-up d4 pt-1">
                            <Button
                                type="submit"
                                disabled={loginMutation.isPending}
                                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-medium"
                            >
                                {loginMutation.isPending ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                        </svg>
                                        Memverifikasi...
                                    </>
                                ) : (
                                    "Masuk"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <p className="fade-up d4 text-center text-xs text-gray-400 mt-6">
                    Hanya untuk administrator yang terdaftar.{" "}
                    <a href="mailto:support@poliban.ac.id" className="text-teal-600 hover:underline">
                        Butuh akses?
                    </a>
                </p>
            </div>
        </div>
    );
}