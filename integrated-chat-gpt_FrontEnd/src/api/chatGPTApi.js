import axios from "axios";

export default async function getDescription(product) {
    const params = {
        prompt: generateDescription(product),
        model: "text-davinci-003",
        temperature: 0.8,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    };

    let response = await axios.post(
        "https://api.openai.com/v1/completions",
        params,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
            },
        }
    );

    return { result: response.data.choices[0].text };
}

function generateDescription(product) {
    const capitalizedProduct = product.split(" ");
    for (let i = 0; i < capitalizedProduct.length; i++) {
        capitalizedProduct[i] =
            capitalizedProduct[i][0].toUpperCase() +
            capitalizedProduct[i].substr(1);
    }
    let newCapitalizedProduct = capitalizedProduct.join(" ").toString();

    return `Role: Bạn là một nhà thiết kế sáng tạo.
    Goal: Tạo một mô tả thu hút và hấp dẫn cho sản phẩm dựa trên các thông số đã cho.
    Product Description Prompt:
    
    Bạn là một nhà thiết kế sáng tạo và bạn nhận nhiệm vụ tạo một mô tả sản phẩm độc đáo và hấp dẫn cho một sản phẩm mới. Đồng thời tạo ra các tiêu đề hỗ trợ SEO tốt. Dưới đây là các thông số kỹ thuật cho sản phẩm:
    
    Tên sản phẩm: ${newCapitalizedProduct}
    Danh mục sản phẩm: 
    Chất liệu:
    
    Với sự sáng tạo của bạn, hãy tạo một mô tả thu hút và độc đáo cho sản phẩm này, để khách hàng không chỉ muốn sở hữu nó mà còn muốn chia sẻ với bạn bè và gia đình. Hãy bắt đầu viết mô tả dài 500 từ và khi bạn cảm thấy đã hoàn thành, hãy gửi cho tôi để tôi kiểm tra.`;
}
