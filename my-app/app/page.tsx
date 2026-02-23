export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#af5c97] via-[#8e3f80] to-[#6b286f] px-4 py-8 sm:px-6 md:py-12">
      <section className="mx-auto flex w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(45,8,63,0.45)] lg:min-h-[720px]">
        <aside className="relative min-h-[560px] w-full overflow-hidden lg:w-[46%]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/68/2a/ad/682aade08821a7126fefc540605dbb50.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140b32]/35 via-transparent to-[#2d0f41]/45" />
          <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white sm:p-10">
            <div className="space-y-7 sm:space-y-10">
              <p className="text-2xl font-semibold tracking-wide">Astro</p>
              <h1 className="max-w-md text-2xl font-semibold leading-snug sm:text-[2rem]">
                Exploring new frontiers, one step at a Time.
              </h1>
            </div>
            <p className="text-sm font-medium text-white/85">Beyond Earth&apos;s grasp</p>
          </div>
        </aside>

        <div className="w-full bg-white px-6 py-7 sm:px-10 sm:py-9 lg:w-[54%] lg:px-14 lg:py-12">
          <p className="text-right text-sm font-medium text-[#8f8a99]">
            Already a member?{" "}
            <a href="#" className="font-semibold text-[#2d0f41]">
              Sign in
            </a>
            <span className="ml-1 inline-block align-middle text-base">&#8593;</span>
          </p>

          <div className="mx-auto mt-8 w-full max-w-[430px]">
            <h2 className="text-4xl font-semibold text-[#221536]">Create Account</h2>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#5c2cb6] px-4 text-sm font-medium text-white shadow-[0_8px_16px_rgba(92,44,182,0.35)] transition hover:bg-[#4a2294]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-xs font-semibold">
                  G
                </span>
                Sign up with Google
              </button>
              <button className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#f0ebf7] px-4 text-sm font-medium text-[#3f3950] transition hover:bg-[#e8e2f3]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-semibold text-[#2d0f41]">
                  f
                </span>
                with Facebook
              </button>
            </div>

            <div className="mt-8 border-t border-[#ece7f2] pt-4">
              <p className="text-sm font-medium text-[#9b93aa]">
                Or sign up using your email address
              </p>
            </div>

            <form className="mt-4 space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-[#342747]">Name</span>
                <input
                  type="text"
                  className="h-11 w-full rounded-full border border-transparent bg-[#f3eff8] px-4 text-sm outline-none transition placeholder:text-[#b6adc7] focus:border-[#c5b8df]"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-[#342747]">
                  Email or Phone no.
                </span>
                <input
                  type="text"
                  className="h-11 w-full rounded-full border border-transparent bg-[#f3eff8] px-4 text-sm outline-none transition placeholder:text-[#b6adc7] focus:border-[#c5b8df]"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-[#342747]">Username</span>
                <input
                  type="text"
                  className="h-11 w-full rounded-full border border-transparent bg-[#f3eff8] px-4 text-sm outline-none transition placeholder:text-[#b6adc7] focus:border-[#c5b8df]"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-[#342747]">Password</span>
                <input
                  type="password"
                  className="h-11 w-full rounded-full border border-transparent bg-[#f3eff8] px-4 text-sm outline-none transition placeholder:text-[#b6adc7] focus:border-[#c5b8df]"
                />
              </label>

              <label className="mt-1 flex items-center gap-2 text-sm font-medium text-[#756d85]">
                <input type="checkbox" className="h-4 w-4 accent-[#4a2294]" />
                I agree to all terms and Privacy Policy
              </label>

              <button className="mt-2 h-12 w-full rounded-full bg-[#210046] text-xl font-semibold text-white transition hover:bg-[#190035]">
                Sign up
              </button>
            </form>

            <p className="mt-4 text-center text-sm font-medium text-[#746f80]">
              Already have an account?{" "}
              <a href="#" className="font-semibold text-[#2d0f41]">
                Log in
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
