import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAuth } from "./_core/hooks/useAuth";
import { startLogin } from "./const";
import { Booking, Concierge, Discover, Home, Onboarding, Profile, Staff, Venue } from "./pages/Maison";

function Gate({ admin=false, children }:{admin?:boolean;children:React.ReactNode}){
  const { user, loading } = useAuth();
  const role = user ? String(user.role) : '';
  if (loading) return <div className="empty"><h2>One moment.</h2><p>Checking your private access.</p></div>;
  if (!user) return <div className="empty"><h2>Private access.</h2><p>This view is reserved for MAISON LA staff.</p><button className="btn" onClick={() => startLogin()}>Sign in to continue</button></div>;
  if ((admin && role !== 'admin') || (!admin && role !== 'admin' && role !== 'venue_manager')) return <div className="empty"><h2>A considered boundary.</h2><p>Your current role does not include this view.</p><a className="btn" href="/">Return to member home</a></div>;
  return <>{children}</>;
}
export default function App(){return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster/><Switch><Route path="/"><Home/></Route><Route path="/onboarding"><Onboarding/></Route><Route path="/discover"><Discover/></Route><Route path="/venue/:id"><Venue/></Route><Route path="/booking/:id"><Booking/></Route><Route path="/concierge"><Concierge/></Route><Route path="/profile"><Profile/></Route><Route path="/venue-dashboard"><Gate><Staff/></Gate></Route><Route path="/admin"><Gate admin><Staff admin/></Gate></Route><Route path="/404" component={NotFound}/><Route><Redirect to="/404"/></Route></Switch></TooltipProvider></ThemeProvider></ErrorBoundary>}
