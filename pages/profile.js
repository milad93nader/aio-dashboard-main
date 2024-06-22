import Profile from "../src/Pages/Profile";
import Layout from "@aio/components/layout";

// Assign the arrow function to a variable
const profile = () => {
    return (
        <Layout>
            <Profile/>
        </Layout>
    );
};

// Export the variable as the default export
export default profile;

// Optionally, add a displayName for better debugging support
profile.displayName = 'Profile';
