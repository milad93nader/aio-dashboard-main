import Layout from "../src/ui-components/layout";
import TestComponents from "../src/Pages/test-components";

// Assign the arrow function to a variable
const TestComponentsPage = () => {
    return (
        <Layout>
            <TestComponents />
        </Layout>
    );
};

// Export the variable as the default export
export default TestComponentsPage;

// Optionally, add a displayName for better debugging support
TestComponentsPage.displayName = 'TestComponentsPage';
