type IOption={
    page?:number,
    limit?:number,
    sortBy?:string,
  
    sortOrder?:string
}

type IOptionResult={

    page:number,
    limit:number,
    skip:number,
    sortBy: string,
    sortOrder:string
}

// Node: Pagination Function , I have to Flowing Dont Repeat yourself functionality 
const calculatePagination=(options:IOption):IOptionResult=>{


    const page=Number(options?.page) || 1;
    const limit=Number(options?.limit) || 10;
    const skip=(page -1 ) * limit;
    const sortBy=options.sortBy || 'createdAt';
    const sortOrder=options.sortOrder || "desc"
    return {
        page,limit,skip,sortBy,sortOrder
    }


}

export default calculatePagination