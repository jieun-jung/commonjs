var resultValue = "";
/*================================================================
Function명  : SetGridBind
내      용  : Grid 초기화.
================================================================*/
function SetGridBind(tbName, data) {
    //jQuery("#" + tbName).empty();
    //$('#' + tbName).jqGrid('GridUnload');
    RemoveGridData(tbName);
    if (data == null || data.length == 0)
        return;

    for (var i = 0; i <= data.length; i++) {
        jQuery("#" + tbName).jqGrid('addRowData', i + 1, data[i]);
    }
}

function RemoveGridData(tbName) {
    var rowIds = $('#' + tbName).jqGrid('getDataIDs');
    // iterate through the rows and delete each of them
    for (var i = 0, len = rowIds.length; i < len; i++) {
        $('#' + tbName).jqGrid('delRowData', rowIds[i]);
    }
}

function SetPager(pager, totCount, rowCount, pageCount, page) {
    // pager: divid,  totCount: 총 데이터 수, rowCount : 보여줄 row수 현재 페이지를 받는다
    // 그리드 데이터 전체의 페이지 수
    var totalPage = Math.ceil(totCount / rowCount);
    // 전체 페이지 수를 한화면에 보여줄 페이지로 나눈다.
    var totalPageList = Math.ceil(totalPage / pageCount);
    // 페이지 리스트가 몇번째 리스트인지
    var pageList = Math.ceil(page / pageCount);

    // 페이지 리스트가 1보다 작으면 1로 초기화
    if (pageList < 1) pageList = 1;
    // 페이지 리스트가 총 페이지 리스트보다 커지면 총 페이지 리스트로 설정
    if (pageList > totalPageList) pageList = totalPageList;
    // 시작 페이지
    var startPageList = ((pageList - 1) * pageCount) + 1;
    // 끝 페이지
    var endPageList = startPageList + pageCount - 1;


    //alert("startPageList="+startPageList+"/ endPageList="+endPageList);

    // 시작 페이지와 끝페이지가 1보다 작으면 1로 설정
    // 끝 페이지가 마지막 페이지보다 클 경우 마지막 페이지값으로 설정
    if (startPageList < 1) startPageList = 1;
    if (endPageList > totalPage) endPageList = totalPage;
    if (endPageList < 1) endPageList = 1;

    var perPage = 1;
    var nextPage = page + 1;

    if (page > 1)
        perPage = page - 1;


    // 페이징 DIV에 넣어줄 태그 생성변수
    var pageInner = '';
    pageInner += '<ul class="pagination float-right">';
    // 페이지 리스트가 1이나 데이터가 없을 경우 (링크 빼고 흐린 이미지로 변경)
    if (pageList < 2) {
        pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:Search(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";
    }
    // 이전 페이지 리스트가 있을 경우 (링크넣고 뚜렷한 이미지로 변경)
    if (pageList > 1) {
        pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:Search(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";

    }
    for (var i = startPageList; i <= endPageList; i++) {
        if (i == page) {
            pageInner = pageInner + "<li class='page-item active'><a class='page-link' href=\"javascript:void(0);\">" + i + "</a></li>";
        } else {
            pageInner = pageInner + "<li class='page-item'><a class='page-link' href=\"javascript:Search(" + i + ");\">" + i + "</a></li>";
        }
    }


    // 현재 페이지리스트가 마지막 페이지 리스트일 경우
    if (totalPage == page) {
        pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:void(0);\" aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>";
    }
    else {
        pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:Search(" + nextPage + ");\" aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>";
    }
    pageInner += " </ul>";

    $("#" + pager).html("");
    $("#" + pager).html(pageInner);
}

function SetPager2(pager, totCount, rowCount, pageCount, page) {
    // pager: divid,  totCount: 총 데이터 수, rowCount : 보여줄 row수 현재 페이지를 받는다
    // 그리드 데이터 전체의 페이지 수
    var totalPage = Math.ceil(totCount / rowCount);
    // 전체 페이지 수를 한화면에 보여줄 페이지로 나눈다.
    var totalPageList = Math.ceil(totalPage / pageCount);
    // 페이지 리스트가 몇번째 리스트인지
    var pageList = Math.ceil(page / pageCount);

    // 페이지 리스트가 1보다 작으면 1로 초기화
    if (pageList < 1) pageList = 1;
    // 페이지 리스트가 총 페이지 리스트보다 커지면 총 페이지 리스트로 설정
    if (pageList > totalPageList) pageList = totalPageList;
    // 시작 페이지
    var startPageList = ((pageList - 1) * pageCount) + 1;
    // 끝 페이지
    var endPageList = startPageList + pageCount - 1;
    
    //alert("startPageList="+startPageList+"/ endPageList="+endPageList);

    // 시작 페이지와 끝페이지가 1보다 작으면 1로 설정
    // 끝 페이지가 마지막 페이지보다 클 경우 마지막 페이지값으로 설정
    if (startPageList < 1) startPageList = 1;
    if (endPageList > totalPage) endPageList = totalPage;
    if (endPageList < 1) endPageList = 1;

    var perPage = 1;
    var nextPage = page + 1;

    if (page > 1)
        perPage = page - 1;


    // 페이징 DIV에 넣어줄 태그 생성변수
    var pageInner = '';
    pageInner += '<ul class="pagination float-right">';
    // 페이지 리스트가 1이나 데이터가 없을 경우 (링크 빼고 흐린 이미지로 변경)
    if (pageList < 2) {
        if (pager == "paging") {
            pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";
        }else{
        	 pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search"+pager.substr(-1)+"(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";
        }
        
    }
    // 이전 페이지 리스트가 있을 경우 (링크넣고 뚜렷한 이미지로 변경)
    if (pageList > 1) {
        if (pager == "paging") {
            pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";
        }else{
          	 pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search"+pager.substr(-1)+"(" + perPage + ");\" aria-label='Previous'> <span aria-hidden='true'>&laquo;</span> <span class='sr-only'>Previous</span> </a> </li>";
        }
    }
    for (var i = startPageList; i <= endPageList; i++) {
        if (i == page) {
            pageInner = pageInner + "<li class='page-item active'><a class='page-link' href=\"javascript:void(0);\">" + i + "</a></li>";
        } else {
            if (pager == "paging") {
                pageInner = pageInner + "<li class='page-item'><a class='page-link' href=\"javascript:fn_Search(" + i + ");\">" + i + "</a></li>";
            }else{
            	pageInner = pageInner + "<li class='page-item'><a class='page-link' href=\"javascript:fn_Search"+pager.substr(-1)+"(" + i + ");\">" + i + "</a></li>";
            }
        }
    }


    // 현재 페이지리스트가 마지막 페이지 리스트일 경우
    if (totalPage == page) {
        pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:void(0);\" aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>";
    }
    else {
        if (pager == "paging") {
            pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search(" + nextPage + ");\" aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>";
        }else{
        	pageInner += "<li class='page-item'> <a class='page-link' href=\"javascript:fn_Search"+pager.substr(-1)+"(" + nextPage + ");\" aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>";
        }
    }
    
    pageInner += " </ul>";

    $("#" + pager).html("");
    $("#" + pager).html(pageInner);
}
