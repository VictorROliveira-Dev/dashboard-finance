import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogIn } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Login = async () => {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex flex-col h-full max-w-[550px] justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Finance logo"
          height={39}
          width={173}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant={"outline"} className="border-2 font-bold">
            <LogIn className="mr-2" />
            Faça login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login-img.png"
          alt="Imagem login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
