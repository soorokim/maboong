export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-1 ">
      {children}
    </div>
  );
};
