import Layout from "../src/ui-components/layout";
import Dashboard from "../src/Pages/dashboard";

// Assign the arrow function to a variable
const dashboard = () => {
    return (
        <Layout>
            <Dashboard/>
        </Layout>
    );
};

// Export the variable as the default export
export default dashboard;

// Optionally, add a displayName for better debugging support
dashboard.displayName = 'dashboard';
