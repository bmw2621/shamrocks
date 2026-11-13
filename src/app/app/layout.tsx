import { PropsWithChildren, type FC } from "react";
// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

const DashboardLayout: FC<PropsWithChildren> = async ({ children }) => {
  // const supabase = await createClient()
  // const { data: { user }, error } = await supabase.auth.getUser()
  // if(!user || error) redirect('/')
  return (
    <div>
      InApp
      <br />
      {children}
    </div>
  );
};

export default DashboardLayout;
