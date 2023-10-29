import NavigationCard from "./NavigationCard";
import SuggestionCard from "./ProfileSuggestionCard";

export default function Layout({ children, hideNavigation }) {
  let rightColumnClasses = '';
  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12';
  }
  return (
    <div className="md:flex mt-6 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 bg-white">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <SuggestionCard />
        </div>
      )}
      <div className={rightColumnClasses}>
        {children}
      </div>
    </div>
  );
}