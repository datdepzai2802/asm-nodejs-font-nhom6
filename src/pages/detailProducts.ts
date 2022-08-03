import { CategoryGetId } from "../api/categorys"
import { ProductsGet } from "../api/products"
import Foodter from "../components/footer/footer"
import HeaderUser from "../components/Header/User"
import { ICategory } from "../Interface/ICategorys"
import { ListProducts } from "../Interface/IProducts"

const DetailProducts = {
    async render(id: string) {
        const productsData = await ProductsGet(id)
        const product: ListProducts = productsData.data
        console.log(product);

        const idCategories = product.categoryId
        const Productlienquan = await CategoryGetId(idCategories)
        console.log(Productlienquan.data.products);

        const total = ((product.price - product.sale) / product.price * 100).toFixed(0)
        console.log(total);
        return `
            ${HeaderUser.render()}

            <section class="max-w-[1240px] m-auto">
                    <div
                        class="py-[10px] flex flex-wrap justify-start items-center shadow-xl pl-[20px] rounded-sm"
                    >
                        <h3 class="capitalize text-[20px] font-semibold text-[#5c5c5c]">
                        ${product.name}
                        </h3>
                        
                    </div>

                    <div class="md:flex mt-[20px] bg-white pt-[20px]">
                        <div
                        class="mx-[20px] border-[1px] border-[#515151] px-[20px] py-[40px] rounded-lg"
                        >
                        <img
                            src="${product.image}"
                            alt=""
                            class="w-full m-auto"
                        />
                        </div>
                        <!--  -->
                        <div class="mx-[20px] md:mx-0 md:ml-[20px] md:max-w-[475px] w-full">
                        <div class="mt-[20px] md:mt-0">
                            <span class="text-[18px] font-bold text-red-500">${product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                            <span
                            class="text-[16px] text-[#4d4d4d] font-medium line-through ml-[10px]"
                            >${product.sale.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span
                            >
                            <span class="bg-red-500 ml-[10px] py-[5px] px-[15px] text-[14px] text-white rounded-md capitalize">
                                giảm ${total}%
                            </span>
                        </div>
                        <div class="mt-[15px]">
                            <h3 class="capitalize text-[16px] text-[#444] font-medium">
                                số lượng sản phẩm
                            </h3>
                            <div class="flex flex-wrap mt-[10px]">
                                <input type="number" class="outline-none text-[14px] text-[#333]" placeholder="1">
                            <!--  -->
                            </div>

                            <div
                            class="mt-[15px] text-[16px] text-[#444] font-medium capitalize py-[20px] border-[1px] border-[#b7b7b7] px-[10px]"
                            >
                            <h3>đặc điểm nổi bật</h3>
                            <div>
                                <ul>
                                    <li class="text-[#4a4a4a] text-[12px] ml-[20px]">
                                        ${product.descriptionShort}
                                    </li>
                                </ul>
                            </div>
                            </div>

                            <div class="hidden md:block">
                            <div
                                class="mt-[20px] text-center md:max-w-[475px] flex justify-between"
                            >
                                <button
                                class="w-full max-w-[260px] bg-red-700 hover:bg-red-600 rounded-lg py-[15px] text-[18px] font-medium text-white uppercase"
                                >
                                mua ngay
                                </button>
                                <div
                                class="border-red-600 border-[1px] py-[8px] px-[10px] rounded-lg hover:bg-red-100 cursor-pointer"
                                >
                                <button>
                                    <i class="fa-solid fa-cart-plus text-red-600"></i>
                                    <p class="capitalize text-red-600">thêm vào giỏ</p>
                                </button>
                                </div>
                            </div>
                            </div>

                            <div class="fixed bottom-0 left-0 w-full bg-[#fff] md:hidden">
                            <div
                                class=" text-center md:max-w-[475px] flex justify-between"
                            >
                                <button
                                class="w-full max-w-[400px] md:max-w-[350px] bg-red-700 hover:bg-red-600 rounded-lg py-[15px] text-[18px] font-medium text-white uppercase"
                                >
                                mua ngay
                                </button>
                                <div
                                class="border-red-600 border-[1px] py-[8px] px-[10px] rounded-lg hover:bg-red-100 cursor-pointer"
                                >
                                <button>
                                    <i class="fa-solid fa-cart-plus text-red-600"></i>
                                    <p class="capitalize text-red-600">thêm vào giỏ</p>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                        <div class="md:max-w-[400px] w-full px-[20px] mt-[20px]">
                        <select class="w-full capitalize py-[10px] pl-[20px] rounded-lg">
                            <option value="">miền trung</option>
                            <option value="">miền nam</option>
                            <option value="">miền bắc</option>
                        </select>

                        <div class="mt-[10px]">
                            <h3 class="capitalize text-[#777] text-[16px] font-medium">
                            có 3 cửa hàng
                            </h3>
                            <div class="border-[1px] border-[#777] rounded-lg mt-[5px]">
                            <div
                                class="mt-[15px] flex items-center p-[20px] md:p-[5px] md:justify-between"
                            >
                                <a
                                href="#!"
                                class="hover:underline text-red-600 inline-block text-[14px] text-center"
                                ><i class="fa-solid fa-phone"></i> 190008198</a
                                >
                                <span class="text-[13px] ml-[5px]"
                                >369 Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng
                                </span>
                            </div>
                            <div
                                class="mt-[15px] flex items-center p-[20px] md:p-[5px] md:justify-between"
                            >
                                <a
                                href="#!"
                                class="hover:underline text-red-600 inline-block text-[14px] text-center"
                                ><i class="fa-solid fa-phone"></i> 190008198</a
                                >
                                <span class="text-[13px] ml-[5px]"
                                >369 Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <!--san pham cung loai  -->
                    <section class="max-w-[1240px] w-full m-auto">
                    <div class="mx-[20px] md:mx-0">
                        <div class="mt-[40px]">
                        <h3 class="capitalize font-medium text-[23px] text-[#414141]">
                            sản phẩm cùng loại
                        </h3>
                        </div>
                        <div>
                        <div class="overflow-hidden flex items-start">
                            ${Productlienquan.data.products.map((item: any) => `
                                <a href="#" class="group hover:shadow-lg px-[15px] py-[25px] rounded-md">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="${item.image}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                            class="max-w-[180px] m-auto w-full h-full object-center object-cover group-hover:opacity-75"/>
                                    </div>
                                    <div class="pr-[10px]">
                                        <h3 class="mt-4 text-sm text-gray-700 capitalize">
                                            ${item.name}
                                        </h3>
                                    <div class="mt-[10px] flex justify-start items-center">
                                        <p class="text-red-500">${item.sale.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                                        <p class="text-gray-500 ml-2 line-through">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                                    </div>
                                    </div>
                                </a>
                            `).join("")}
                            
                        </div>
                        </div>
                    </div>
                    </section>
                    <section class="shadow-[#d4d4d4] mt-[30px] shadow-inner mb-[60px]">
                    <div class="max-w-[1240px] m-auto py-[30px] px-[20px]">
                      <h3 class="uppercase text-[20px] font-bold text-[#515151]">
                        thông tin chi tiết sản phẩm
                      </h3>
                      <div class="mt-[20px]">
                        ${product.descriptionLong}
                      </div>
                    </div>
                  </section>
                  ${Foodter.render()}
        `
    },
    afterRender() {

    }
}

export default DetailProducts