import Statistics from "../src/Pages/Statistics";
import Layout from "../src/ui-components/layout";

// Assign the arrow function to a variable
const statistics = () => {
    return (
        <Layout>
            <Statistics/>
        </Layout>
    );
};

// Export the variable as the default export
export default statistics;

// Optionally, add a displayName for better debugging support
statistics.displayName = 'statistics';
