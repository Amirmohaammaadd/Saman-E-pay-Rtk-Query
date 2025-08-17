import { useState } from "react";
import { useGetProductsQuery } from "../store/store-api-slice";
import { Table } from "antd";
import { tablecolumns } from "../constant/table-col";
import { LoadingComponent } from "../components/loading-comp";

const RTKReactPage = () => {

    const [page, setPage] = useState(1);
    const limit = 10;
    const offset = (page - 1) * limit;

    const { data, error, isFetching, refetch } = useGetProductsQuery(offset);

    return (
        <div className='flex flex-col justify-center items-center h-screen gap-10'>

            <div className="p-4 w-full">

                {isFetching && <LoadingComponent />}

                {error && (
                    <div className="flex flex-col items-center gap-10 mb-5">
                        <p className="text-white p-5 bg-red-500 rounded-md shadow-lg">متاسفانه خطایی رخ داده است</p>
                        <button
                            onClick={() => refetch()}
                            className="px-4 py-2 bg-red-400 text-white rounded cursor-pointer"
                        >
                            تلاش دوباره
                        </button>
                    </div>
                )}

                <Table dataSource={data} columns={tablecolumns} rowKey="id" className={`w-[80%] mx-auto shadow-lg`} pagination={false} />


                {data && <div className="mt-4 flex justify-center items-center gap-5">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className={` ${page === 1 ? "cursor-not-allowed" : "cursor-pointer"} px-4 py-1 w-[60px] text-sm bg-blue-600 text-white rounded disabled:opacity-50`}
                    >
                        قبلی
                    </button>

                    <h1 className="font-bold">صفحه {page}</h1>

                    <button
                        disabled={!data || data?.length < limit}
                        onClick={() => setPage(page + 1)}
                        className={` ${!data || data?.length < limit ? "cursor-not-allowed" : "cursor-pointer"} px-4 py-1 w-[60px] bg-blue-600 text-white text-sm rounded disabled:opacity-50`}
                    >
                        بعدی
                    </button>
                </div>}

            </div>

        </div>);
}

export default RTKReactPage;