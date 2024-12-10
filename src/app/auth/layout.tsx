const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default AuthLayout;
