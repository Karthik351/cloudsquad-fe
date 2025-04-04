export async function get_total_tests_taken(){
    try {
        //const response = await fetch ('https://aeb542xxee.execute-api.ap-south-1.amazonaws.com/prod/tests-taken');
        const response = await fetch ('https://c6iclcs9nh.execute-api.us-east-1.amazonaws.com/stage/tests-taken');
        const data = await response.json();
        const total_tests_taken = data.total_tests_taken;
        return total_tests_taken;
    } catch (error) {
        console.error(error);
        return 0;
    }  
}