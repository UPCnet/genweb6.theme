/*  INICIO back_to_top.js */

$(document).ready(function(){

    var btt_offset = 250;
    var btt_duration = 300;

    $(window).scroll(function() {
        if($(this).scrollTop() > btt_offset){
            $('.back-to-top').fadeIn(btt_duration);
        }else{
            $('.back-to-top').fadeOut(btt_duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, btt_duration);
        return false;
    });
});

/*  FIN back_to_top.js */
$(document).ready(function(){

    $('#copy-universal-link').tooltip({
      animated: 'fade',
      placement: 'bottom',
      trigger: 'click',
    });

    $('#copy-universal-link').on('click', function(){
        event.preventDefault();

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#copy-universal-link').attr('data-url')).select();
        document.execCommand("copy");
        $temp.remove();

        setTimeout(function(){
            $('#copy-universal-link').tooltip('hide');
        }, 2000);

        return false;
    });

});
/*  INICIO footer.js */

$(document).ready(function(){

    $('#portal-footer').addClass($('#footer-complementary').data('class'));
    $('#portal-footer').attr('style', '--bg-img-url: url(' + $('#footer-complementary').data('img') + ')');

    /* Ocultar no-folders si no tiene elementos */
    if($("#portal-footer .no-folders").length > 0){
        if($("#portal-footer .no-folders > ul > li:not(.has_subtree)").length == 0){
            $("#portal-footer .no-folders").hide();
        }
    }
});

/*  FIN footer.js */
/*  INICIO header.js */

function checkNavbar() {
    if($('#portal-globalnav').outerWidth(true) >= $('#portal-navbar').outerWidth(true)){
        $('#header').addClass('mobile');
    }
}

$(document).ready(function(){

    var btt_offset = 1;

    $(window).scroll(function() {
        if($(this).scrollTop() > btt_offset){
            $('#header').addClass('shink');
            $('#hero').addClass('shink');
        }else{
            $('#header').removeClass('shink');
            $('#hero').removeClass('shink');
        }
    });

    $(window).resize(function() {
        checkNavbar();
    });

    checkNavbar();

    $('#portal-navbar-mobile nav.navbar li.has_subtree label').on('click', function(){
        $(this).closest('li.has_subtree').toggleClass('open');
    });

    var btt_duration = 300;

    $('#hero a.down-hero').on('click', function(){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#hero')[0].scrollHeight}, btt_duration);
        return false;
    });
});

/*  FIN header.js */
$(document).ready(function(){

    setTimeout(function(){
        $(".slide-track").each(function(){
            var width_track = 0;
            $(this).children('.slide').each(function(index) {
                width_track += parseInt($(this).width(), 10) + 50;
            });
            $(this).css("--size", width_track + "px");
            $(this).css("--nsize", "-" + width_track + "px");
        });
    }, 500);

});

/*  INICIO viewlet_gw_cookies.js */

function createCookie(name, value, days) {
    var date, expires;

    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    document.cookie = name + "=" + escape(value) + expires + "; path=/;";
}

function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i,
        c;

    for (i = 0; i < ca.length; i = i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return unescape(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
    if (c_start == -1) c_value = null;
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) c_end = c_value.length;
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

$(document).ready(function(){
    if (getCookie('cookieAccepted') != "1") {
        $("#cookies-gw").css("display", "block");
    } else {
        $("#cookies-gw").css("display", "none");
    }

    $("#cookies-accept").click(function() {
        setCookie('cookieAccepted', '1', 365);
        $("#cookies-gw").css("display", "none");
    });
});

/*  FIN viewlet_gw_cookies.js */
/*! DataTables 1.13.1
 * ©2008-2022 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.13.1
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
  "use strict";

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( ['jquery'], function ( $ ) {
      return factory( $, window, document );
    } );
  }
  else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = function (root, $) {
      if ( ! root ) {
        // CommonJS environments without a window global must pass a
        // root. This will give an error otherwise
        root = window;
      }

      if ( ! $ ) {
        $ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
          require('jquery') :
          require('jquery')( root );
      }

      return factory( $, root, root.document );
    };
  }
  else {
    // Browser
    window.DataTable = factory( jQuery, window, document );
  }
}
(function( $, window, document, undefined ) {
  "use strict";


  var DataTable = function ( selector, options )
  {
    // When creating with `new`, create a new DataTable, returning the API instance
    if (this instanceof DataTable) {
      return $(selector).DataTable(options);
    }
    else {
      // Argument switching
      options = selector;
    }

    /**
     * Perform a jQuery selector action on the table's TR elements (from the tbody) and
     * return the resulting jQuery object.
     *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
     *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
     *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
     *    criterion ("applied") or all TR elements (i.e. no filter).
     *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
     *    Can be either 'current', whereby the current sorting of the table is used, or
     *    'original' whereby the original order the data was read into the table is used.
     *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
     *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
     *    'current' and filter is 'applied', regardless of what they might be given as.
     *  @returns {object} jQuery object, filtered by the given selector.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Highlight every second row
     *      oTable.$('tr:odd').css('backgroundColor', 'blue');
     *    } );
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Filter to rows with 'Webkit' in them, add a background colour and then
     *      // remove the filter, thus highlighting the 'Webkit' rows only.
     *      oTable.fnFilter('Webkit');
     *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
     *      oTable.fnFilter('');
     *    } );
     */
    this.$ = function ( sSelector, oOpts )
    {
      return this.api(true).$( sSelector, oOpts );
    };


    /**
     * Almost identical to $ in operation, but in this case returns the data for the matched
     * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
     * rather than any descendants, so the data can be obtained for the row/cell. If matching
     * rows are found, the data returned is the original data array/object that was used to
     * create the row (or a generated array if from a DOM source).
     *
     * This method is often useful in-combination with $ where both functions are given the
     * same parameters and the array indexes will match identically.
     *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
     *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
     *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
     *    criterion ("applied") or all elements (i.e. no filter).
     *  @param {string} [oOpts.order=current] Order of the data in the processed array.
     *    Can be either 'current', whereby the current sorting of the table is used, or
     *    'original' whereby the original order the data was read into the table is used.
     *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
     *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
     *    'current' and filter is 'applied', regardless of what they might be given as.
     *  @returns {array} Data for the matched elements. If any elements, as a result of the
     *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
     *    entry in the array.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Get the data from the first row in the table
     *      var data = oTable._('tr:first');
     *
     *      // Do something useful with the data
     *      alert( "First cell is: "+data[0] );
     *    } );
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Filter to 'Webkit' and get all data for
     *      oTable.fnFilter('Webkit');
     *      var data = oTable._('tr', {"search": "applied"});
     *
     *      // Do something with the data
     *      alert( data.length+" rows matched the search" );
     *    } );
     */
    this._ = function ( sSelector, oOpts )
    {
      return this.api(true).rows( sSelector, oOpts ).data();
    };


    /**
     * Create a DataTables Api instance, with the currently selected tables for
     * the Api's context.
     * @param {boolean} [traditional=false] Set the API instance's context to be
     *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
     *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
     *   or if all tables captured in the jQuery object should be used.
     * @return {DataTables.Api}
     */
    this.api = function ( traditional )
    {
      return traditional ?
        new _Api(
          _fnSettingsFromNode( this[ _ext.iApiIndex ] )
        ) :
        new _Api( this );
    };


    /**
     * Add a single new row or multiple rows of data to the table. Please note
     * that this is suitable for client-side processing only - if you are using
     * server-side processing (i.e. "bServerSide": true), then to add data, you
     * must add it to the data source, i.e. the server-side, through an Ajax call.
     *  @param {array|object} data The data to be added to the table. This can be:
     *    <ul>
     *      <li>1D array of data - add a single row with the data provided</li>
     *      <li>2D array of arrays - add multiple rows in a single call</li>
     *      <li>object - data object when using <i>mData</i></li>
     *      <li>array of objects - multiple data objects when using <i>mData</i></li>
     *    </ul>
     *  @param {bool} [redraw=true] redraw the table or not
     *  @returns {array} An array of integers, representing the list of indexes in
     *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
     *    the table.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    // Global var for counter
     *    var giCount = 2;
     *
     *    $(document).ready(function() {
     *      $('#example').dataTable();
     *    } );
     *
     *    function fnClickAddRow() {
     *      $('#example').dataTable().fnAddData( [
     *        giCount+".1",
     *        giCount+".2",
     *        giCount+".3",
     *        giCount+".4" ]
     *      );
     *
     *      giCount++;
     *    }
     */
    this.fnAddData = function( data, redraw )
    {
      var api = this.api( true );

      /* Check if we want to add multiple rows or not */
      var rows = Array.isArray(data) && ( Array.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
        api.rows.add( data ) :
        api.row.add( data );

      if ( redraw === undefined || redraw ) {
        api.draw();
      }

      return rows.flatten().toArray();
    };


    /**
     * This function will make DataTables recalculate the column sizes, based on the data
     * contained in the table and the sizes applied to the columns (in the DOM, CSS or
     * through the sWidth parameter). This can be useful when the width of the table's
     * parent element changes (for example a window resize).
     *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable( {
     *        "sScrollY": "200px",
     *        "bPaginate": false
     *      } );
     *
     *      $(window).on('resize', function () {
     *        oTable.fnAdjustColumnSizing();
     *      } );
     *    } );
     */
    this.fnAdjustColumnSizing = function ( bRedraw )
    {
      var api = this.api( true ).columns.adjust();
      var settings = api.settings()[0];
      var scroll = settings.oScroll;

      if ( bRedraw === undefined || bRedraw ) {
        api.draw( false );
      }
      else if ( scroll.sX !== "" || scroll.sY !== "" ) {
        /* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
        _fnScrollDraw( settings );
      }
    };


    /**
     * Quickly and simply clear a table
     *  @param {bool} [bRedraw=true] redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
     *      oTable.fnClearTable();
     *    } );
     */
    this.fnClearTable = function( bRedraw )
    {
      var api = this.api( true ).clear();

      if ( bRedraw === undefined || bRedraw ) {
        api.draw();
      }
    };


    /**
     * The exact opposite of 'opening' a row, this function will close any rows which
     * are currently 'open'.
     *  @param {node} nTr the table row to 'close'
     *  @returns {int} 0 on success, or 1 if failed (can't find the row)
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */
    this.fnClose = function( nTr )
    {
      this.api( true ).row( nTr ).child.hide();
    };


    /**
     * Remove a row for the table
     *  @param {mixed} target The index of the row from aoData to be deleted, or
     *    the TR element you want to delete
     *  @param {function|null} [callBack] Callback function
     *  @param {bool} [redraw=true] Redraw the table or not
     *  @returns {array} The row that was deleted
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Immediately remove the first row
     *      oTable.fnDeleteRow( 0 );
     *    } );
     */
    this.fnDeleteRow = function( target, callback, redraw )
    {
      var api = this.api( true );
      var rows = api.rows( target );
      var settings = rows.settings()[0];
      var data = settings.aoData[ rows[0][0] ];

      rows.remove();

      if ( callback ) {
        callback.call( this, settings, data );
      }

      if ( redraw === undefined || redraw ) {
        api.draw();
      }

      return data;
    };


    /**
     * Restore the table to it's original state in the DOM by removing all of DataTables
     * enhancements, alterations to the DOM structure of the table and event listeners.
     *  @param {boolean} [remove=false] Completely remove the table from the DOM
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
     *      var oTable = $('#example').dataTable();
     *      oTable.fnDestroy();
     *    } );
     */
    this.fnDestroy = function ( remove )
    {
      this.api( true ).destroy( remove );
    };


    /**
     * Redraw the table
     *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
     *      oTable.fnDraw();
     *    } );
     */
    this.fnDraw = function( complete )
    {
      // Note that this isn't an exact match to the old call to _fnDraw - it takes
      // into account the new data, but can hold position.
      this.api( true ).draw( complete );
    };


    /**
     * Filter the input based on data
     *  @param {string} sInput String to filter the table on
     *  @param {int|null} [iColumn] Column to limit filtering to
     *  @param {bool} [bRegex=false] Treat as regular expression or not
     *  @param {bool} [bSmart=true] Perform smart filtering or not
     *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
     *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sometime later - filter...
     *      oTable.fnFilter( 'test string' );
     *    } );
     */
    this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
    {
      var api = this.api( true );

      if ( iColumn === null || iColumn === undefined ) {
        api.search( sInput, bRegex, bSmart, bCaseInsensitive );
      }
      else {
        api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
      }

      api.draw();
    };


    /**
     * Get the data for the whole table, an individual row or an individual cell based on the
     * provided parameters.
     *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
     *    a TR node then the data source for the whole row will be returned. If given as a
     *    TD/TH cell node then iCol will be automatically calculated and the data for the
     *    cell returned. If given as an integer, then this is treated as the aoData internal
     *    data index for the row (see fnGetPosition) and the data for that row used.
     *  @param {int} [col] Optional column index that you want the data of.
     *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
     *    returned. If mRow is defined, just data for that row, and is iCol is
     *    defined, only data for the designated cell is returned.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    // Row data
     *    $(document).ready(function() {
     *      oTable = $('#example').dataTable();
     *
     *      oTable.$('tr').click( function () {
     *        var data = oTable.fnGetData( this );
     *        // ... do something with the array / object of data for the row
     *      } );
     *    } );
     *
     *  @example
     *    // Individual cell data
     *    $(document).ready(function() {
     *      oTable = $('#example').dataTable();
     *
     *      oTable.$('td').click( function () {
     *        var sData = oTable.fnGetData( this );
     *        alert( 'The cell clicked on had the value of '+sData );
     *      } );
     *    } );
     */
    this.fnGetData = function( src, col )
    {
      var api = this.api( true );

      if ( src !== undefined ) {
        var type = src.nodeName ? src.nodeName.toLowerCase() : '';

        return col !== undefined || type == 'td' || type == 'th' ?
          api.cell( src, col ).data() :
          api.row( src ).data() || null;
      }

      return api.data().toArray();
    };


    /**
     * Get an array of the TR nodes that are used in the table's body. Note that you will
     * typically want to use the '$' API method in preference to this as it is more
     * flexible.
     *  @param {int} [iRow] Optional row index for the TR element you want
     *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
     *    in the table's body, or iRow is defined, just the TR element requested.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Get the nodes from the table
     *      var nNodes = oTable.fnGetNodes( );
     *    } );
     */
    this.fnGetNodes = function( iRow )
    {
      var api = this.api( true );

      return iRow !== undefined ?
        api.row( iRow ).node() :
        api.rows().nodes().flatten().toArray();
    };


    /**
     * Get the array indexes of a particular cell from it's DOM element
     * and column index including hidden columns
     *  @param {node} node this can either be a TR, TD or TH in the table's body
     *  @returns {int} If nNode is given as a TR, then a single index is returned, or
     *    if given as a cell, an array of [row index, column index (visible),
     *    column index (all)] is given.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      $('#example tbody td').click( function () {
     *        // Get the position of the current data from the node
     *        var aPos = oTable.fnGetPosition( this );
     *
     *        // Get the data array for this row
     *        var aData = oTable.fnGetData( aPos[0] );
     *
     *        // Update the data array and return the value
     *        aData[ aPos[1] ] = 'clicked';
     *        this.innerHTML = 'clicked';
     *      } );
     *
     *      // Init DataTables
     *      oTable = $('#example').dataTable();
     *    } );
     */
    this.fnGetPosition = function( node )
    {
      var api = this.api( true );
      var nodeName = node.nodeName.toUpperCase();

      if ( nodeName == 'TR' ) {
        return api.row( node ).index();
      }
      else if ( nodeName == 'TD' || nodeName == 'TH' ) {
        var cell = api.cell( node ).index();

        return [
          cell.row,
          cell.columnVisible,
          cell.column
        ];
      }
      return null;
    };


    /**
     * Check to see if a row is 'open' or not.
     *  @param {node} nTr the table row to check
     *  @returns {boolean} true if the row is currently open, false otherwise
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */
    this.fnIsOpen = function( nTr )
    {
      return this.api( true ).row( nTr ).child.isShown();
    };


    /**
     * This function will place a new row directly after a row which is currently
     * on display on the page, with the HTML contents that is passed into the
     * function. This can be used, for example, to ask for confirmation that a
     * particular record should be deleted.
     *  @param {node} nTr The table row to 'open'
     *  @param {string|node|jQuery} mHtml The HTML to put into the row
     *  @param {string} sClass Class to give the new TD cell
     *  @returns {node} The row opened. Note that if the table row passed in as the
     *    first parameter, is not found in the table, this method will silently
     *    return.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */
    this.fnOpen = function( nTr, mHtml, sClass )
    {
      return this.api( true )
        .row( nTr )
        .child( mHtml, sClass )
        .show()
        .child()[0];
    };


    /**
     * Change the pagination - provides the internal logic for pagination in a simple API
     * function. With this function you can have a DataTables table go to the next,
     * previous, first or last pages.
     *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
     *    or page number to jump to (integer), note that page 0 is the first page.
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      oTable.fnPageChange( 'next' );
     *    } );
     */
    this.fnPageChange = function ( mAction, bRedraw )
    {
      var api = this.api( true ).page( mAction );

      if ( bRedraw === undefined || bRedraw ) {
        api.draw(false);
      }
    };


    /**
     * Show a particular column
     *  @param {int} iCol The column whose display should be changed
     *  @param {bool} bShow Show (true) or hide (false) the column
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Hide the second column after initialisation
     *      oTable.fnSetColumnVis( 1, false );
     *    } );
     */
    this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
    {
      var api = this.api( true ).column( iCol ).visible( bShow );

      if ( bRedraw === undefined || bRedraw ) {
        api.columns.adjust().draw();
      }
    };


    /**
     * Get the settings for a particular table for external manipulation
     *  @returns {object} DataTables settings object. See
     *    {@link DataTable.models.oSettings}
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      var oSettings = oTable.fnSettings();
     *
     *      // Show an example parameter from the settings
     *      alert( oSettings._iDisplayStart );
     *    } );
     */
    this.fnSettings = function()
    {
      return _fnSettingsFromNode( this[_ext.iApiIndex] );
    };


    /**
     * Sort the table by a particular column
     *  @param {int} iCol the data index to sort on. Note that this will not match the
     *    'display index' if you have hidden data entries
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sort immediately with columns 0 and 1
     *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
     *    } );
     */
    this.fnSort = function( aaSort )
    {
      this.api( true ).order( aaSort ).draw();
    };


    /**
     * Attach a sort listener to an element for a given column
     *  @param {node} nNode the element to attach the sort listener to
     *  @param {int} iColumn the column that a click on this node will sort on
     *  @param {function} [fnCallback] callback function when sort is run
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sort on column 1, when 'sorter' is clicked on
     *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
     *    } );
     */
    this.fnSortListener = function( nNode, iColumn, fnCallback )
    {
      this.api( true ).order.listener( nNode, iColumn, fnCallback );
    };


    /**
     * Update a table cell or row - this method will accept either a single value to
     * update the cell with, an array of values with one element for each column or
     * an object in the same format as the original data source. The function is
     * self-referencing in order to make the multi column updates easier.
     *  @param {object|array|string} mData Data to update the cell/row with
     *  @param {node|int} mRow TR element you want to update or the aoData index
     *  @param {int} [iColumn] The column to update, give as null or undefined to
     *    update a whole row.
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @param {bool} [bAction=true] Perform pre-draw actions or not
     *  @returns {int} 0 on success, 1 on error
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
     *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
     *    } );
     */
    this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
    {
      var api = this.api( true );

      if ( iColumn === undefined || iColumn === null ) {
        api.row( mRow ).data( mData );
      }
      else {
        api.cell( mRow, iColumn ).data( mData );
      }

      if ( bAction === undefined || bAction ) {
        api.columns.adjust();
      }

      if ( bRedraw === undefined || bRedraw ) {
        api.draw();
      }
      return 0;
    };


    /**
     * Provide a common method for plug-ins to check the version of DataTables being used, in order
     * to ensure compatibility.
     *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
     *    formats "X" and "X.Y" are also acceptable.
     *  @returns {boolean} true if this version of DataTables is greater or equal to the required
     *    version, or false if this version of DataTales is not suitable
     *  @method
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      alert( oTable.fnVersionCheck( '1.9.0' ) );
     *    } );
     */
    this.fnVersionCheck = _ext.fnVersionCheck;


    var _that = this;
    var emptyInit = options === undefined;
    var len = this.length;

    if ( emptyInit ) {
      options = {};
    }

    this.oApi = this.internal = _ext.internal;

    // Extend with old style plug-in API methods
    for ( var fn in DataTable.ext.internal ) {
      if ( fn ) {
        this[fn] = _fnExternApiFunc(fn);
      }
    }

    this.each(function() {
      // For each initialisation we want to give it a clean initialisation
      // object that can be bashed around
      var o = {};
      var oInit = len > 1 ? // optimisation for single table case
        _fnExtend( o, options, true ) :
        options;

      /*global oInit,_that,emptyInit*/
      var i=0, iLen, j, jLen, k, kLen;
      var sId = this.getAttribute( 'id' );
      var bInitHandedOff = false;
      var defaults = DataTable.defaults;
      var $this = $(this);


      /* Sanity check */
      if ( this.nodeName.toLowerCase() != 'table' )
      {
        _fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
        return;
      }

      /* Backwards compatibility for the defaults */
      _fnCompatOpts( defaults );
      _fnCompatCols( defaults.column );

      /* Convert the camel-case defaults to Hungarian */
      _fnCamelToHungarian( defaults, defaults, true );
      _fnCamelToHungarian( defaults.column, defaults.column, true );

      /* Setting up the initialisation object */
      _fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ), true );



      /* Check to see if we are re-initialising a table */
      var allSettings = DataTable.settings;
      for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
      {
        var s = allSettings[i];

        /* Base check on table node */
        if (
          s.nTable == this ||
          (s.nTHead && s.nTHead.parentNode == this) ||
          (s.nTFoot && s.nTFoot.parentNode == this)
        ) {
          var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
          var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;

          if ( emptyInit || bRetrieve )
          {
            return s.oInstance;
          }
          else if ( bDestroy )
          {
            s.oInstance.fnDestroy();
            break;
          }
          else
          {
            _fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
            return;
          }
        }

        /* If the element we are initialising has the same ID as a table which was previously
         * initialised, but the table nodes don't match (from before) then we destroy the old
         * instance by simply deleting it. This is under the assumption that the table has been
         * destroyed by other methods. Anyone using non-id selectors will need to do this manually
         */
        if ( s.sTableId == this.id )
        {
          allSettings.splice( i, 1 );
          break;
        }
      }

      /* Ensure the table has an ID - required for accessibility */
      if ( sId === null || sId === "" )
      {
        sId = "DataTables_Table_"+(DataTable.ext._unique++);
        this.id = sId;
      }

      /* Create the settings object for this table and set some of the default parameters */
      var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
        "sDestroyWidth": $this[0].style.width,
        "sInstance":     sId,
        "sTableId":      sId
      } );
      oSettings.nTable = this;
      oSettings.oApi   = _that.internal;
      oSettings.oInit  = oInit;

      allSettings.push( oSettings );

      // Need to add the instance after the instance after the settings object has been added
      // to the settings array, so we can self reference the table instance if more than one
      oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();

      // Backwards compatibility, before we apply all the defaults
      _fnCompatOpts( oInit );
      _fnLanguageCompat( oInit.oLanguage );

      // If the length menu is given, but the init display length is not, use the length menu
      if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
      {
        oInit.iDisplayLength = Array.isArray( oInit.aLengthMenu[0] ) ?
          oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
      }

      // Apply the defaults and init options to make a single init object will all
      // options defined from defaults and instance options.
      oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );


      // Map the initialisation options onto the settings object
      _fnMap( oSettings.oFeatures, oInit, [
        "bPaginate",
        "bLengthChange",
        "bFilter",
        "bSort",
        "bSortMulti",
        "bInfo",
        "bProcessing",
        "bAutoWidth",
        "bSortClasses",
        "bServerSide",
        "bDeferRender"
      ] );
      _fnMap( oSettings, oInit, [
        "asStripeClasses",
        "ajax",
        "fnServerData",
        "fnFormatNumber",
        "sServerMethod",
        "aaSorting",
        "aaSortingFixed",
        "aLengthMenu",
        "sPaginationType",
        "sAjaxSource",
        "sAjaxDataProp",
        "iStateDuration",
        "sDom",
        "bSortCellsTop",
        "iTabIndex",
        "fnStateLoadCallback",
        "fnStateSaveCallback",
        "renderer",
        "searchDelay",
        "rowId",
        [ "iCookieDuration", "iStateDuration" ], // backwards compat
        [ "oSearch", "oPreviousSearch" ],
        [ "aoSearchCols", "aoPreSearchCols" ],
        [ "iDisplayLength", "_iDisplayLength" ]
      ] );
      _fnMap( oSettings.oScroll, oInit, [
        [ "sScrollX", "sX" ],
        [ "sScrollXInner", "sXInner" ],
        [ "sScrollY", "sY" ],
        [ "bScrollCollapse", "bCollapse" ]
      ] );
      _fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );

      /* Callback functions which are array driven */
      _fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
      _fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
      _fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
      _fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
      _fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
      _fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
      _fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
      _fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
      _fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
      _fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
      _fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );

      oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );

      /* Browser support detection */
      _fnBrowserDetect( oSettings );

      var oClasses = oSettings.oClasses;

      $.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
      $this.addClass( oClasses.sTable );


      if ( oSettings.iInitDisplayStart === undefined )
      {
        /* Display start point, taking into account the save saving */
        oSettings.iInitDisplayStart = oInit.iDisplayStart;
        oSettings._iDisplayStart = oInit.iDisplayStart;
      }

      if ( oInit.iDeferLoading !== null )
      {
        oSettings.bDeferLoading = true;
        var tmp = Array.isArray( oInit.iDeferLoading );
        oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
        oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
      }

      /* Language definitions */
      var oLanguage = oSettings.oLanguage;
      $.extend( true, oLanguage, oInit.oLanguage );

      if ( oLanguage.sUrl )
      {
        /* Get the language definitions from a file - because this Ajax call makes the language
         * get async to the remainder of this function we use bInitHandedOff to indicate that
         * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
         */
        $.ajax( {
          dataType: 'json',
          url: oLanguage.sUrl,
          success: function ( json ) {
            _fnCamelToHungarian( defaults.oLanguage, json );
            _fnLanguageCompat( json );
            $.extend( true, oLanguage, json, oSettings.oInit.oLanguage );

            _fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
            _fnInitialise( oSettings );
          },
          error: function () {
            // Error occurred loading language file, continue on as best we can
            _fnInitialise( oSettings );
          }
        } );
        bInitHandedOff = true;
      }
      else {
        _fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
      }

      /*
       * Stripes
       */
      if ( oInit.asStripeClasses === null )
      {
        oSettings.asStripeClasses =[
          oClasses.sStripeOdd,
          oClasses.sStripeEven
        ];
      }

      /* Remove row stripe classes if they are already on the table row */
      var stripeClasses = oSettings.asStripeClasses;
      var rowOne = $this.children('tbody').find('tr').eq(0);
      if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
        return rowOne.hasClass(el);
      } ) ) !== -1 ) {
        $('tbody tr', this).removeClass( stripeClasses.join(' ') );
        oSettings.asDestroyStripes = stripeClasses.slice();
      }

      /*
       * Columns
       * See if we should load columns automatically or use defined ones
       */
      var anThs = [];
      var aoColumnsInit;
      var nThead = this.getElementsByTagName('thead');
      if ( nThead.length !== 0 )
      {
        _fnDetectHeader( oSettings.aoHeader, nThead[0] );
        anThs = _fnGetUniqueThs( oSettings );
      }

      /* If not given a column array, generate one with nulls */
      if ( oInit.aoColumns === null )
      {
        aoColumnsInit = [];
        for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
        {
          aoColumnsInit.push( null );
        }
      }
      else
      {
        aoColumnsInit = oInit.aoColumns;
      }

      /* Add the columns */
      for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
      {
        _fnAddColumn( oSettings, anThs ? anThs[i] : null );
      }

      /* Apply the column definitions */
      _fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
        _fnColumnOptions( oSettings, iCol, oDef );
      } );

      /* HTML5 attribute detection - build an mData object automatically if the
       * attributes are found
       */
      if ( rowOne.length ) {
        var a = function ( cell, name ) {
          return cell.getAttribute( 'data-'+name ) !== null ? name : null;
        };

        $( rowOne[0] ).children('th, td').each( function (i, cell) {
          var col = oSettings.aoColumns[i];

          if (! col) {
            _fnLog( oSettings, 0, 'Incorrect column count', 18 );
          }

          if ( col.mData === i ) {
            var sort = a( cell, 'sort' ) || a( cell, 'order' );
            var filter = a( cell, 'filter' ) || a( cell, 'search' );

            if ( sort !== null || filter !== null ) {
              col.mData = {
                _:      i+'.display',
                sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
                type:   sort !== null   ? i+'.@data-'+sort   : undefined,
                filter: filter !== null ? i+'.@data-'+filter : undefined
              };

              _fnColumnOptions( oSettings, i );
            }
          }
        } );
      }

      var features = oSettings.oFeatures;
      var loadedInit = function () {
        /*
         * Sorting
         * @todo For modularisation (1.11) this needs to do into a sort start up handler
         */

        // If aaSorting is not defined, then we use the first indicator in asSorting
        // in case that has been altered, so the default sort reflects that option
        if ( oInit.aaSorting === undefined ) {
          var sorting = oSettings.aaSorting;
          for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
            sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
          }
        }

        /* Do a first pass on the sorting classes (allows any size changes to be taken into
         * account, and also will apply sorting disabled classes if disabled
         */
        _fnSortingClasses( oSettings );

        if ( features.bSort ) {
          _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
            if ( oSettings.bSorted ) {
              var aSort = _fnSortFlatten( oSettings );
              var sortedColumns = {};

              $.each( aSort, function (i, val) {
                sortedColumns[ val.src ] = val.dir;
              } );

              _fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
              _fnSortAria( oSettings );
            }
          } );
        }

        _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
          if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
            _fnSortingClasses( oSettings );
          }
        }, 'sc' );


        /*
         * Final init
         * Cache the header, body and footer as required, creating them if needed
         */

        // Work around for Webkit bug 83867 - store the caption-side before removing from doc
        var captions = $this.children('caption').each( function () {
          this._captionSide = $(this).css('caption-side');
        } );

        var thead = $this.children('thead');
        if ( thead.length === 0 ) {
          thead = $('<thead/>').appendTo($this);
        }
        oSettings.nTHead = thead[0];

        var tbody = $this.children('tbody');
        if ( tbody.length === 0 ) {
          tbody = $('<tbody/>').insertAfter(thead);
        }
        oSettings.nTBody = tbody[0];

        var tfoot = $this.children('tfoot');
        if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
          // If we are a scrolling table, and no footer has been given, then we need to create
          // a tfoot element for the caption element to be appended to
          tfoot = $('<tfoot/>').appendTo($this);
        }

        if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
          $this.addClass( oClasses.sNoFooter );
        }
        else if ( tfoot.length > 0 ) {
          oSettings.nTFoot = tfoot[0];
          _fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
        }

        /* Check if there is data passing into the constructor */
        if ( oInit.aaData ) {
          for ( i=0 ; i<oInit.aaData.length ; i++ ) {
            _fnAddData( oSettings, oInit.aaData[ i ] );
          }
        }
        else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
          /* Grab the data from the page - only do this when deferred loading or no Ajax
           * source since there is no point in reading the DOM data if we are then going
           * to replace it with Ajax data
           */
          _fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
        }

        /* Copy the data index array */
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

        /* Initialisation complete - table can be drawn */
        oSettings.bInitialised = true;

        /* Check if we need to initialise the table (it might not have been handed off to the
         * language processor)
         */
        if ( bInitHandedOff === false ) {
          _fnInitialise( oSettings );
        }
      };

      /* Must be done after everything which can be overridden by the state saving! */
      _fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );

      if ( oInit.bStateSave )
      {
        features.bStateSave = true;
        _fnLoadState( oSettings, oInit, loadedInit );
      }
      else {
        loadedInit();
      }

    } );
    _that = null;
    return this;
  };


  /*
   * It is useful to have variables which are scoped locally so only the
   * DataTables functions can access them and they don't leak into global space.
   * At the same time these functions are often useful over multiple files in the
   * core and API, so we list, or at least document, all variables which are used
   * by DataTables as private variables here. This also ensures that there is no
   * clashing of variable names and that they can easily referenced for reuse.
   */


  // Defined else where
  //  _selector_run
  //  _selector_opts
  //  _selector_first
  //  _selector_row_indexes

  var _ext; // DataTable.ext
  var _Api; // DataTable.Api
  var _api_register; // DataTable.Api.register
  var _api_registerPlural; // DataTable.Api.registerPlural

  var _re_dic = {};
  var _re_new_lines = /[\r\n\u2028]/g;
  var _re_html = /<.*?>/g;

  // This is not strict ISO8601 - Date.parse() is quite lax, although
  // implementations differ between browsers.
  var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;

  // Escape regular expression special characters
  var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );

  // http://en.wikipedia.org/wiki/Foreign_exchange_market
  // - \u20BD - Russian ruble.
  // - \u20a9 - South Korean Won
  // - \u20BA - Turkish Lira
  // - \u20B9 - Indian Rupee
  // - R - Brazil (R$) and South Africa
  // - fr - Swiss Franc
  // - kr - Swedish krona, Norwegian krone and Danish krone
  // - \u2009 is thin space and \u202F is narrow no-break space, both used in many
  // - Ƀ - Bitcoin
  // - Ξ - Ethereum
  //   standards as thousands separators.
  var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;


  var _empty = function ( d ) {
    return !d || d === true || d === '-' ? true : false;
  };


  var _intVal = function ( s ) {
    var integer = parseInt( s, 10 );
    return !isNaN(integer) && isFinite(s) ? integer : null;
  };

  // Convert from a formatted number with characters other than `.` as the
  // decimal place, to a Javascript number
  var _numToDecimal = function ( num, decimalPoint ) {
    // Cache created regular expressions for speed as this function is called often
    if ( ! _re_dic[ decimalPoint ] ) {
      _re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
    }
    return typeof num === 'string' && decimalPoint !== '.' ?
      num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
      num;
  };


  var _isNumber = function ( d, decimalPoint, formatted ) {
    var strType = typeof d === 'string';

    // If empty return immediately so there must be a number if it is a
    // formatted string (this stops the string "k", or "kr", etc being detected
    // as a formatted number for currency
    if ( _empty( d ) ) {
      return true;
    }

    if ( decimalPoint && strType ) {
      d = _numToDecimal( d, decimalPoint );
    }

    if ( formatted && strType ) {
      d = d.replace( _re_formatted_numeric, '' );
    }

    return !isNaN( parseFloat(d) ) && isFinite( d );
  };


  // A string without HTML in it can be considered to be HTML still
  var _isHtml = function ( d ) {
    return _empty( d ) || typeof d === 'string';
  };


  var _htmlNumeric = function ( d, decimalPoint, formatted ) {
    if ( _empty( d ) ) {
      return true;
    }

    var html = _isHtml( d );
    return ! html ?
      null :
      _isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
        true :
        null;
  };


  var _pluck = function ( a, prop, prop2 ) {
    var out = [];
    var i=0, ien=a.length;

    // Could have the test in the loop for slightly smaller code, but speed
    // is essential here
    if ( prop2 !== undefined ) {
      for ( ; i<ien ; i++ ) {
        if ( a[i] && a[i][ prop ] ) {
          out.push( a[i][ prop ][ prop2 ] );
        }
      }
    }
    else {
      for ( ; i<ien ; i++ ) {
        if ( a[i] ) {
          out.push( a[i][ prop ] );
        }
      }
    }

    return out;
  };


  // Basically the same as _pluck, but rather than looping over `a` we use `order`
  // as the indexes to pick from `a`
  var _pluck_order = function ( a, order, prop, prop2 )
  {
    var out = [];
    var i=0, ien=order.length;

    // Could have the test in the loop for slightly smaller code, but speed
    // is essential here
    if ( prop2 !== undefined ) {
      for ( ; i<ien ; i++ ) {
        if ( a[ order[i] ][ prop ] ) {
          out.push( a[ order[i] ][ prop ][ prop2 ] );
        }
      }
    }
    else {
      for ( ; i<ien ; i++ ) {
        out.push( a[ order[i] ][ prop ] );
      }
    }

    return out;
  };


  var _range = function ( len, start )
  {
    var out = [];
    var end;

    if ( start === undefined ) {
      start = 0;
      end = len;
    }
    else {
      end = start;
      start = len;
    }

    for ( var i=start ; i<end ; i++ ) {
      out.push( i );
    }

    return out;
  };


  var _removeEmpty = function ( a )
  {
    var out = [];

    for ( var i=0, ien=a.length ; i<ien ; i++ ) {
      if ( a[i] ) { // careful - will remove all falsy values!
        out.push( a[i] );
      }
    }

    return out;
  };


  var _stripHtml = function ( d ) {
    return d.replace( _re_html, '' );
  };


  /**
   * Determine if all values in the array are unique. This means we can short
   * cut the _unique method at the cost of a single loop. A sorted array is used
   * to easily check the values.
   *
   * @param  {array} src Source array
   * @return {boolean} true if all unique, false otherwise
   * @ignore
   */
  var _areAllUnique = function ( src ) {
    if ( src.length < 2 ) {
      return true;
    }

    var sorted = src.slice().sort();
    var last = sorted[0];

    for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
      if ( sorted[i] === last ) {
        return false;
      }

      last = sorted[i];
    }

    return true;
  };


  /**
   * Find the unique elements in a source array.
   *
   * @param  {array} src Source array
   * @return {array} Array of unique items
   * @ignore
   */
  var _unique = function ( src )
  {
    if ( _areAllUnique( src ) ) {
      return src.slice();
    }

    // A faster unique method is to use object keys to identify used values,
    // but this doesn't work with arrays or objects, which we must also
    // consider. See jsperf.com/compare-array-unique-versions/4 for more
    // information.
    var
      out = [],
      val,
      i, ien=src.length,
      j, k=0;

    again: for ( i=0 ; i<ien ; i++ ) {
      val = src[i];

      for ( j=0 ; j<k ; j++ ) {
        if ( out[j] === val ) {
          continue again;
        }
      }

      out.push( val );
      k++;
    }

    return out;
  };

  // Surprisingly this is faster than [].concat.apply
  // https://jsperf.com/flatten-an-array-loop-vs-reduce/2
  var _flatten = function (out, val) {
    if (Array.isArray(val)) {
      for (var i=0 ; i<val.length ; i++) {
        _flatten(out, val[i]);
      }
    }
    else {
      out.push(val);
    }

    return out;
  }

  var _includes = function (search, start) {
    if (start === undefined) {
      start = 0;
    }

    return this.indexOf(search, start) !== -1;
  };

  // Array.isArray polyfill.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  if (! Array.isArray) {
      Array.isArray = function(arg) {
          return Object.prototype.toString.call(arg) === '[object Array]';
      };
  }

  if (! Array.prototype.includes) {
    Array.prototype.includes = _includes;
  }

  // .trim() polyfill
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }

  if (! String.prototype.includes) {
    String.prototype.includes = _includes;
  }

  /**
   * DataTables utility methods
   *
   * This namespace provides helper methods that DataTables uses internally to
   * create a DataTable, but which are not exclusively used only for DataTables.
   * These methods can be used by extension authors to save the duplication of
   * code.
   *
   *  @namespace
   */
  DataTable.util = {
    /**
     * Throttle the calls to a function. Arguments and context are maintained
     * for the throttled function.
     *
     * @param {function} fn Function to be called
     * @param {integer} freq Call frequency in mS
     * @return {function} Wrapped function
     */
    throttle: function ( fn, freq ) {
      var
        frequency = freq !== undefined ? freq : 200,
        last,
        timer;

      return function () {
        var
          that = this,
          now  = +new Date(),
          args = arguments;

        if ( last && now < last + frequency ) {
          clearTimeout( timer );

          timer = setTimeout( function () {
            last = undefined;
            fn.apply( that, args );
          }, frequency );
        }
        else {
          last = now;
          fn.apply( that, args );
        }
      };
    },


    /**
     * Escape a string such that it can be used in a regular expression
     *
     *  @param {string} val string to escape
     *  @returns {string} escaped string
     */
    escapeRegex: function ( val ) {
      return val.replace( _re_escape_regex, '\\$1' );
    },

    /**
     * Create a function that will write to a nested object or array
     * @param {*} source JSON notation string
     * @returns Write function
     */
    set: function ( source ) {
      if ( $.isPlainObject( source ) ) {
        /* Unlike get, only the underscore (global) option is used for for
         * setting data since we don't know the type here. This is why an object
         * option is not documented for `mData` (which is read/write), but it is
         * for `mRender` which is read only.
         */
        return DataTable.util.set( source._ );
      }
      else if ( source === null ) {
        // Nothing to do when the data source is null
        return function () {};
      }
      else if ( typeof source === 'function' ) {
        return function (data, val, meta) {
          source( data, 'set', val, meta );
        };
      }
      else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
            source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
      {
        // Like the get, we need to get data from a nested object
        var setData = function (data, val, src) {
          var a = _fnSplitObjNotation( src ), b;
          var aLast = a[a.length-1];
          var arrayNotation, funcNotation, o, innerSrc;

          for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ ) {
            // Protect against prototype pollution
            if (a[i] === '__proto__' || a[i] === 'constructor') {
              throw new Error('Cannot set prototype values');
            }

            // Check if we are dealing with an array notation request
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);

            if ( arrayNotation ) {
              a[i] = a[i].replace(__reArray, '');
              data[ a[i] ] = [];

              // Get the remainder of the nested object to set so we can recurse
              b = a.slice();
              b.splice( 0, i+1 );
              innerSrc = b.join('.');

              // Traverse each entry in the array setting the properties requested
              if ( Array.isArray( val ) ) {
                for ( var j=0, jLen=val.length ; j<jLen ; j++ ) {
                  o = {};
                  setData( o, val[j], innerSrc );
                  data[ a[i] ].push( o );
                }
              }
              else {
                // We've been asked to save data to an array, but it
                // isn't array data to be saved. Best that can be done
                // is to just save the value.
                data[ a[i] ] = val;
              }

              // The inner call to setData has already traversed through the remainder
              // of the source and has set the data, thus we can exit here
              return;
            }
            else if ( funcNotation ) {
              // Function call
              a[i] = a[i].replace(__reFn, '');
              data = data[ a[i] ]( val );
            }

            // If the nested object doesn't currently exist - since we are
            // trying to set the value - create it
            if ( data[ a[i] ] === null || data[ a[i] ] === undefined ) {
              data[ a[i] ] = {};
            }
            data = data[ a[i] ];
          }

          // Last item in the input - i.e, the actual set
          if ( aLast.match(__reFn ) ) {
            // Function call
            data = data[ aLast.replace(__reFn, '') ]( val );
          }
          else {
            // If array notation is used, we just want to strip it and use the property name
            // and assign the value. If it isn't used, then we get the result we want anyway
            data[ aLast.replace(__reArray, '') ] = val;
          }
        };

        return function (data, val) { // meta is also passed in, but not used
          return setData( data, val, source );
        };
      }
      else {
        // Array or flat object mapping
        return function (data, val) { // meta is also passed in, but not used
          data[source] = val;
        };
      }
    },

    /**
     * Create a function that will read nested objects from arrays, based on JSON notation
     * @param {*} source JSON notation string
     * @returns Value read
     */
    get: function ( source ) {
      if ( $.isPlainObject( source ) ) {
        // Build an object of get functions, and wrap them in a single call
        var o = {};
        $.each( source, function (key, val) {
          if ( val ) {
            o[key] = DataTable.util.get( val );
          }
        } );

        return function (data, type, row, meta) {
          var t = o[type] || o._;
          return t !== undefined ?
            t(data, type, row, meta) :
            data;
        };
      }
      else if ( source === null ) {
        // Give an empty string for rendering / sorting etc
        return function (data) { // type, row and meta also passed, but not used
          return data;
        };
      }
      else if ( typeof source === 'function' ) {
        return function (data, type, row, meta) {
          return source( data, type, row, meta );
        };
      }
      else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
            source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
      {
        /* If there is a . in the source string then the data source is in a
         * nested object so we loop over the data for each level to get the next
         * level down. On each loop we test for undefined, and if found immediately
         * return. This allows entire objects to be missing and sDefaultContent to
         * be used if defined, rather than throwing an error
         */
        var fetchData = function (data, type, src) {
          var arrayNotation, funcNotation, out, innerSrc;

          if ( src !== "" ) {
            var a = _fnSplitObjNotation( src );

            for ( var i=0, iLen=a.length ; i<iLen ; i++ ) {
              // Check if we are dealing with special notation
              arrayNotation = a[i].match(__reArray);
              funcNotation = a[i].match(__reFn);

              if ( arrayNotation ) {
                // Array notation
                a[i] = a[i].replace(__reArray, '');

                // Condition allows simply [] to be passed in
                if ( a[i] !== "" ) {
                  data = data[ a[i] ];
                }
                out = [];

                // Get the remainder of the nested object to get
                a.splice( 0, i+1 );
                innerSrc = a.join('.');

                // Traverse each entry in the array getting the properties requested
                if ( Array.isArray( data ) ) {
                  for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
                    out.push( fetchData( data[j], type, innerSrc ) );
                  }
                }

                // If a string is given in between the array notation indicators, that
                // is used to join the strings together, otherwise an array is returned
                var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
                data = (join==="") ? out : out.join(join);

                // The inner call to fetchData has already traversed through the remainder
                // of the source requested, so we exit from the loop
                break;
              }
              else if ( funcNotation ) {
                // Function call
                a[i] = a[i].replace(__reFn, '');
                data = data[ a[i] ]();
                continue;
              }

              if ( data === null || data[ a[i] ] === undefined ) {
                return undefined;
              }

              data = data[ a[i] ];
            }
          }

          return data;
        };

        return function (data, type) { // row and meta also passed, but not used
          return fetchData( data, type, source );
        };
      }
      else {
        // Array or flat object mapping
        return function (data, type) { // row and meta also passed, but not used
          return data[source];
        };
      }
    }
  };



  /**
   * Create a mapping object that allows camel case parameters to be looked up
   * for their Hungarian counterparts. The mapping is stored in a private
   * parameter called `_hungarianMap` which can be accessed on the source object.
   *  @param {object} o
   *  @memberof DataTable#oApi
   */
  function _fnHungarianMap ( o )
  {
    var
      hungarian = 'a aa ai ao as b fn i m o s ',
      match,
      newKey,
      map = {};

    $.each( o, function (key, val) {
      match = key.match(/^([^A-Z]+?)([A-Z])/);

      if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
      {
        newKey = key.replace( match[0], match[2].toLowerCase() );
        map[ newKey ] = key;

        if ( match[1] === 'o' )
        {
          _fnHungarianMap( o[key] );
        }
      }
    } );

    o._hungarianMap = map;
  }


  /**
   * Convert from camel case parameters to Hungarian, based on a Hungarian map
   * created by _fnHungarianMap.
   *  @param {object} src The model object which holds all parameters that can be
   *    mapped.
   *  @param {object} user The object to convert from camel case to Hungarian.
   *  @param {boolean} force When set to `true`, properties which already have a
   *    Hungarian value in the `user` object will be overwritten. Otherwise they
   *    won't be.
   *  @memberof DataTable#oApi
   */
  function _fnCamelToHungarian ( src, user, force )
  {
    if ( ! src._hungarianMap ) {
      _fnHungarianMap( src );
    }

    var hungarianKey;

    $.each( user, function (key, val) {
      hungarianKey = src._hungarianMap[ key ];

      if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
      {
        // For objects, we need to buzz down into the object to copy parameters
        if ( hungarianKey.charAt(0) === 'o' )
        {
          // Copy the camelCase options over to the hungarian
          if ( ! user[ hungarianKey ] ) {
            user[ hungarianKey ] = {};
          }
          $.extend( true, user[hungarianKey], user[key] );

          _fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
        }
        else {
          user[hungarianKey] = user[ key ];
        }
      }
    } );
  }


  /**
   * Language compatibility - when certain options are given, and others aren't, we
   * need to duplicate the values over, in order to provide backwards compatibility
   * with older language files.
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnLanguageCompat( lang )
  {
    // Note the use of the Hungarian notation for the parameters in this method as
    // this is called after the mapping of camelCase to Hungarian
    var defaults = DataTable.defaults.oLanguage;

    // Default mapping
    var defaultDecimal = defaults.sDecimal;
    if ( defaultDecimal ) {
      _addNumericSort( defaultDecimal );
    }

    if ( lang ) {
      var zeroRecords = lang.sZeroRecords;

      // Backwards compatibility - if there is no sEmptyTable given, then use the same as
      // sZeroRecords - assuming that is given.
      if ( ! lang.sEmptyTable && zeroRecords &&
        defaults.sEmptyTable === "No data available in table" )
      {
        _fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
      }

      // Likewise with loading records
      if ( ! lang.sLoadingRecords && zeroRecords &&
        defaults.sLoadingRecords === "Loading..." )
      {
        _fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
      }

      // Old parameter name of the thousands separator mapped onto the new
      if ( lang.sInfoThousands ) {
        lang.sThousands = lang.sInfoThousands;
      }

      var decimal = lang.sDecimal;
      if ( decimal && defaultDecimal !== decimal ) {
        _addNumericSort( decimal );
      }
    }
  }


  /**
   * Map one parameter onto another
   *  @param {object} o Object to map
   *  @param {*} knew The new parameter name
   *  @param {*} old The old parameter name
   */
  var _fnCompatMap = function ( o, knew, old ) {
    if ( o[ knew ] !== undefined ) {
      o[ old ] = o[ knew ];
    }
  };


  /**
   * Provide backwards compatibility for the main DT options. Note that the new
   * options are mapped onto the old parameters, so this is an external interface
   * change only.
   *  @param {object} init Object to map
   */
  function _fnCompatOpts ( init )
  {
    _fnCompatMap( init, 'ordering',      'bSort' );
    _fnCompatMap( init, 'orderMulti',    'bSortMulti' );
    _fnCompatMap( init, 'orderClasses',  'bSortClasses' );
    _fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
    _fnCompatMap( init, 'order',         'aaSorting' );
    _fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
    _fnCompatMap( init, 'paging',        'bPaginate' );
    _fnCompatMap( init, 'pagingType',    'sPaginationType' );
    _fnCompatMap( init, 'pageLength',    'iDisplayLength' );
    _fnCompatMap( init, 'searching',     'bFilter' );

    // Boolean initialisation of x-scrolling
    if ( typeof init.sScrollX === 'boolean' ) {
      init.sScrollX = init.sScrollX ? '100%' : '';
    }
    if ( typeof init.scrollX === 'boolean' ) {
      init.scrollX = init.scrollX ? '100%' : '';
    }

    // Column search objects are in an array, so it needs to be converted
    // element by element
    var searchCols = init.aoSearchCols;

    if ( searchCols ) {
      for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
        if ( searchCols[i] ) {
          _fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
        }
      }
    }
  }


  /**
   * Provide backwards compatibility for column options. Note that the new options
   * are mapped onto the old parameters, so this is an external interface change
   * only.
   *  @param {object} init Object to map
   */
  function _fnCompatCols ( init )
  {
    _fnCompatMap( init, 'orderable',     'bSortable' );
    _fnCompatMap( init, 'orderData',     'aDataSort' );
    _fnCompatMap( init, 'orderSequence', 'asSorting' );
    _fnCompatMap( init, 'orderDataType', 'sortDataType' );

    // orderData can be given as an integer
    var dataSort = init.aDataSort;
    if ( typeof dataSort === 'number' && ! Array.isArray( dataSort ) ) {
      init.aDataSort = [ dataSort ];
    }
  }


  /**
   * Browser feature detection for capabilities, quirks
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnBrowserDetect( settings )
  {
    // We don't need to do this every time DataTables is constructed, the values
    // calculated are specific to the browser and OS configuration which we
    // don't expect to change between initialisations
    if ( ! DataTable.__browser ) {
      var browser = {};
      DataTable.__browser = browser;

      // Scrolling feature / quirks detection
      var n = $('<div/>')
        .css( {
          position: 'fixed',
          top: 0,
          left: $(window).scrollLeft()*-1, // allow for scrolling
          height: 1,
          width: 1,
          overflow: 'hidden'
        } )
        .append(
          $('<div/>')
            .css( {
              position: 'absolute',
              top: 1,
              left: 1,
              width: 100,
              overflow: 'scroll'
            } )
            .append(
              $('<div/>')
                .css( {
                  width: '100%',
                  height: 10
                } )
            )
        )
        .appendTo( 'body' );

      var outer = n.children();
      var inner = outer.children();

      // Numbers below, in order, are:
      // inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
      //
      // IE6 XP:                           100 100 100  83
      // IE7 Vista:                        100 100 100  83
      // IE 8+ Windows:                     83  83 100  83
      // Evergreen Windows:                 83  83 100  83
      // Evergreen Mac with scrollbars:     85  85 100  85
      // Evergreen Mac without scrollbars: 100 100 100 100

      // Get scrollbar width
      browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;

      // IE6/7 will oversize a width 100% element inside a scrolling element, to
      // include the width of the scrollbar, while other browsers ensure the inner
      // element is contained without forcing scrolling
      browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;

      // In rtl text layout, some browsers (most, but not all) will place the
      // scrollbar on the left, rather than the right.
      browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;

      // IE8- don't provide height and width for getBoundingClientRect
      browser.bBounding = n[0].getBoundingClientRect().width ? true : false;

      n.remove();
    }

    $.extend( settings.oBrowser, DataTable.__browser );
    settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
  }


  /**
   * Array.prototype reduce[Right] method, used for browsers which don't support
   * JS 1.6. Done this way to reduce code size, since we iterate either way
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnReduce ( that, fn, init, start, end, inc )
  {
    var
      i = start,
      value,
      isSet = false;

    if ( init !== undefined ) {
      value = init;
      isSet = true;
    }

    while ( i !== end ) {
      if ( ! that.hasOwnProperty(i) ) {
        continue;
      }

      value = isSet ?
        fn( value, that[i], i, that ) :
        that[i];

      isSet = true;
      i += inc;
    }

    return value;
  }

  /**
   * Add a column to the list used for the table with default values
   *  @param {object} oSettings dataTables settings object
   *  @param {node} nTh The th element for this column
   *  @memberof DataTable#oApi
   */
  function _fnAddColumn( oSettings, nTh )
  {
    // Add column to aoColumns array
    var oDefaults = DataTable.defaults.column;
    var iCol = oSettings.aoColumns.length;
    var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
      "nTh": nTh ? nTh : document.createElement('th'),
      "sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
      "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
      "mData": oDefaults.mData ? oDefaults.mData : iCol,
      idx: iCol
    } );
    oSettings.aoColumns.push( oCol );

    // Add search object for column specific search. Note that the `searchCols[ iCol ]`
    // passed into extend can be undefined. This allows the user to give a default
    // with only some of the parameters defined, and also not give a default
    var searchCols = oSettings.aoPreSearchCols;
    searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );

    // Use the default column options function to initialise classes etc
    _fnColumnOptions( oSettings, iCol, $(nTh).data() );
  }


  /**
   * Apply options for a column
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iCol column index to consider
   *  @param {object} oOptions object with sType, bVisible and bSearchable etc
   *  @memberof DataTable#oApi
   */
  function _fnColumnOptions( oSettings, iCol, oOptions )
  {
    var oCol = oSettings.aoColumns[ iCol ];
    var oClasses = oSettings.oClasses;
    var th = $(oCol.nTh);

    // Try to get width information from the DOM. We can't get it from CSS
    // as we'd need to parse the CSS stylesheet. `width` option can override
    if ( ! oCol.sWidthOrig ) {
      // Width attribute
      oCol.sWidthOrig = th.attr('width') || null;

      // Style attribute
      var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
      if ( t ) {
        oCol.sWidthOrig = t[1];
      }
    }

    /* User specified column options */
    if ( oOptions !== undefined && oOptions !== null )
    {
      // Backwards compatibility
      _fnCompatCols( oOptions );

      // Map camel case parameters to their Hungarian counterparts
      _fnCamelToHungarian( DataTable.defaults.column, oOptions, true );

      /* Backwards compatibility for mDataProp */
      if ( oOptions.mDataProp !== undefined && !oOptions.mData )
      {
        oOptions.mData = oOptions.mDataProp;
      }

      if ( oOptions.sType )
      {
        oCol._sManualType = oOptions.sType;
      }

      // `class` is a reserved word in Javascript, so we need to provide
      // the ability to use a valid name for the camel case input
      if ( oOptions.className && ! oOptions.sClass )
      {
        oOptions.sClass = oOptions.className;
      }
      if ( oOptions.sClass ) {
        th.addClass( oOptions.sClass );
      }

      var origClass = oCol.sClass;

      $.extend( oCol, oOptions );
      _fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );

      // Merge class from previously defined classes with this one, rather than just
      // overwriting it in the extend above
      if (origClass !== oCol.sClass) {
        oCol.sClass = origClass + ' ' + oCol.sClass;
      }

      /* iDataSort to be applied (backwards compatibility), but aDataSort will take
       * priority if defined
       */
      if ( oOptions.iDataSort !== undefined )
      {
        oCol.aDataSort = [ oOptions.iDataSort ];
      }
      _fnMap( oCol, oOptions, "aDataSort" );
    }

    /* Cache the data get and set functions for speed */
    var mDataSrc = oCol.mData;
    var mData = _fnGetObjectDataFn( mDataSrc );
    var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;

    var attrTest = function( src ) {
      return typeof src === 'string' && src.indexOf('@') !== -1;
    };
    oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
      attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
    );
    oCol._setter = null;

    oCol.fnGetData = function (rowData, type, meta) {
      var innerData = mData( rowData, type, undefined, meta );

      return mRender && type ?
        mRender( innerData, type, rowData, meta ) :
        innerData;
    };
    oCol.fnSetData = function ( rowData, val, meta ) {
      return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
    };

    // Indicate if DataTables should read DOM data as an object or array
    // Used in _fnGetRowElements
    if ( typeof mDataSrc !== 'number' ) {
      oSettings._rowReadObject = true;
    }

    /* Feature sorting overrides column specific when off */
    if ( !oSettings.oFeatures.bSort )
    {
      oCol.bSortable = false;
      th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
    }

    /* Check that the class assignment is correct for sorting */
    var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
    var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
    if ( !oCol.bSortable || (!bAsc && !bDesc) )
    {
      oCol.sSortingClass = oClasses.sSortableNone;
      oCol.sSortingClassJUI = "";
    }
    else if ( bAsc && !bDesc )
    {
      oCol.sSortingClass = oClasses.sSortableAsc;
      oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
    }
    else if ( !bAsc && bDesc )
    {
      oCol.sSortingClass = oClasses.sSortableDesc;
      oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
    }
    else
    {
      oCol.sSortingClass = oClasses.sSortable;
      oCol.sSortingClassJUI = oClasses.sSortJUI;
    }
  }


  /**
   * Adjust the table column widths for new data. Note: you would probably want to
   * do a redraw after calling this function!
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnAdjustColumnSizing ( settings )
  {
    /* Not interested in doing column width calculation if auto-width is disabled */
    if ( settings.oFeatures.bAutoWidth !== false )
    {
      var columns = settings.aoColumns;

      _fnCalculateColumnWidths( settings );
      for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
      {
        columns[i].nTh.style.width = columns[i].sWidth;
      }
    }

    var scroll = settings.oScroll;
    if ( scroll.sY !== '' || scroll.sX !== '')
    {
      _fnScrollDraw( settings );
    }

    _fnCallbackFire( settings, null, 'column-sizing', [settings] );
  }


  /**
   * Convert the index of a visible column to the index in the data array (take account
   * of hidden columns)
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iMatch Visible column index to lookup
   *  @returns {int} i the data index
   *  @memberof DataTable#oApi
   */
  function _fnVisibleToColumnIndex( oSettings, iMatch )
  {
    var aiVis = _fnGetColumns( oSettings, 'bVisible' );

    return typeof aiVis[iMatch] === 'number' ?
      aiVis[iMatch] :
      null;
  }


  /**
   * Convert the index of an index in the data array and convert it to the visible
   *   column index (take account of hidden columns)
   *  @param {int} iMatch Column index to lookup
   *  @param {object} oSettings dataTables settings object
   *  @returns {int} i the data index
   *  @memberof DataTable#oApi
   */
  function _fnColumnIndexToVisible( oSettings, iMatch )
  {
    var aiVis = _fnGetColumns( oSettings, 'bVisible' );
    var iPos = $.inArray( iMatch, aiVis );

    return iPos !== -1 ? iPos : null;
  }


  /**
   * Get the number of visible columns
   *  @param {object} oSettings dataTables settings object
   *  @returns {int} i the number of visible columns
   *  @memberof DataTable#oApi
   */
  function _fnVisbleColumns( oSettings )
  {
    var vis = 0;

    // No reduce in IE8, use a loop for now
    $.each( oSettings.aoColumns, function ( i, col ) {
      if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
        vis++;
      }
    } );

    return vis;
  }


  /**
   * Get an array of column indexes that match a given property
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sParam Parameter in aoColumns to look for - typically
   *    bVisible or bSearchable
   *  @returns {array} Array of indexes with matched properties
   *  @memberof DataTable#oApi
   */
  function _fnGetColumns( oSettings, sParam )
  {
    var a = [];

    $.map( oSettings.aoColumns, function(val, i) {
      if ( val[sParam] ) {
        a.push( i );
      }
    } );

    return a;
  }


  /**
   * Calculate the 'type' of a column
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnColumnTypes ( settings )
  {
    var columns = settings.aoColumns;
    var data = settings.aoData;
    var types = DataTable.ext.type.detect;
    var i, ien, j, jen, k, ken;
    var col, cell, detectedType, cache;

    // For each column, spin over the
    for ( i=0, ien=columns.length ; i<ien ; i++ ) {
      col = columns[i];
      cache = [];

      if ( ! col.sType && col._sManualType ) {
        col.sType = col._sManualType;
      }
      else if ( ! col.sType ) {
        for ( j=0, jen=types.length ; j<jen ; j++ ) {
          for ( k=0, ken=data.length ; k<ken ; k++ ) {
            // Use a cache array so we only need to get the type data
            // from the formatter once (when using multiple detectors)
            if ( cache[k] === undefined ) {
              cache[k] = _fnGetCellData( settings, k, i, 'type' );
            }

            detectedType = types[j]( cache[k], settings );

            // If null, then this type can't apply to this column, so
            // rather than testing all cells, break out. There is an
            // exception for the last type which is `html`. We need to
            // scan all rows since it is possible to mix string and HTML
            // types
            if ( ! detectedType && j !== types.length-1 ) {
              break;
            }

            // Only a single match is needed for html type since it is
            // bottom of the pile and very similar to string - but it
            // must not be empty
            if ( detectedType === 'html' && ! _empty(cache[k]) ) {
              break;
            }
          }

          // Type is valid for all data points in the column - use this
          // type
          if ( detectedType ) {
            col.sType = detectedType;
            break;
          }
        }

        // Fall back - if no type was detected, always use string
        if ( ! col.sType ) {
          col.sType = 'string';
        }
      }
    }
  }


  /**
   * Take the column definitions and static columns arrays and calculate how
   * they relate to column indexes. The callback function will then apply the
   * definition found for a column to a suitable configuration object.
   *  @param {object} oSettings dataTables settings object
   *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
   *  @param {array} aoCols The aoColumns array that defines columns individually
   *  @param {function} fn Callback function - takes two parameters, the calculated
   *    column index and the definition for that column.
   *  @memberof DataTable#oApi
   */
  function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
  {
    var i, iLen, j, jLen, k, kLen, def;
    var columns = oSettings.aoColumns;

    // Column definitions with aTargets
    if ( aoColDefs )
    {
      /* Loop over the definitions array - loop in reverse so first instance has priority */
      for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
      {
        def = aoColDefs[i];

        /* Each definition can target multiple columns, as it is an array */
        var aTargets = def.target !== undefined
          ? def.target
          : def.targets !== undefined
            ? def.targets
            : def.aTargets;

        if ( ! Array.isArray( aTargets ) )
        {
          aTargets = [ aTargets ];
        }

        for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
        {
          if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
          {
            /* Add columns that we don't yet know about */
            while( columns.length <= aTargets[j] )
            {
              _fnAddColumn( oSettings );
            }

            /* Integer, basic index */
            fn( aTargets[j], def );
          }
          else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
          {
            /* Negative integer, right to left column counting */
            fn( columns.length+aTargets[j], def );
          }
          else if ( typeof aTargets[j] === 'string' )
          {
            /* Class name matching on TH element */
            for ( k=0, kLen=columns.length ; k<kLen ; k++ )
            {
              if ( aTargets[j] == "_all" ||
                   $(columns[k].nTh).hasClass( aTargets[j] ) )
              {
                fn( k, def );
              }
            }
          }
        }
      }
    }

    // Statically defined columns array
    if ( aoCols )
    {
      for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
      {
        fn( i, aoCols[i] );
      }
    }
  }

  /**
   * Add a data array to the table, creating DOM node etc. This is the parallel to
   * _fnGatherData, but for adding rows from a Javascript source, rather than a
   * DOM source.
   *  @param {object} oSettings dataTables settings object
   *  @param {array} aData data array to be added
   *  @param {node} [nTr] TR element to add to the table - optional. If not given,
   *    DataTables will create a row automatically
   *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
   *    if nTr is.
   *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
   *  @memberof DataTable#oApi
   */
  function _fnAddData ( oSettings, aDataIn, nTr, anTds )
  {
    /* Create the object for storing information about this new row */
    var iRow = oSettings.aoData.length;
    var oData = $.extend( true, {}, DataTable.models.oRow, {
      src: nTr ? 'dom' : 'data',
      idx: iRow
    } );

    oData._aData = aDataIn;
    oSettings.aoData.push( oData );

    /* Create the cells */
    var nTd, sThisType;
    var columns = oSettings.aoColumns;

    // Invalidate the column types as the new data needs to be revalidated
    for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
    {
      columns[i].sType = null;
    }

    /* Add to the display array */
    oSettings.aiDisplayMaster.push( iRow );

    var id = oSettings.rowIdFn( aDataIn );
    if ( id !== undefined ) {
      oSettings.aIds[ id ] = oData;
    }

    /* Create the DOM information, or register it if already present */
    if ( nTr || ! oSettings.oFeatures.bDeferRender )
    {
      _fnCreateTr( oSettings, iRow, nTr, anTds );
    }

    return iRow;
  }


  /**
   * Add one or more TR elements to the table. Generally we'd expect to
   * use this for reading data from a DOM sourced table, but it could be
   * used for an TR element. Note that if a TR is given, it is used (i.e.
   * it is not cloned).
   *  @param {object} settings dataTables settings object
   *  @param {array|node|jQuery} trs The TR element(s) to add to the table
   *  @returns {array} Array of indexes for the added rows
   *  @memberof DataTable#oApi
   */
  function _fnAddTr( settings, trs )
  {
    var row;

    // Allow an individual node to be passed in
    if ( ! (trs instanceof $) ) {
      trs = $(trs);
    }

    return trs.map( function (i, el) {
      row = _fnGetRowElements( settings, el );
      return _fnAddData( settings, row.data, el, row.cells );
    } );
  }


  /**
   * Take a TR element and convert it to an index in aoData
   *  @param {object} oSettings dataTables settings object
   *  @param {node} n the TR element to find
   *  @returns {int} index if the node is found, null if not
   *  @memberof DataTable#oApi
   */
  function _fnNodeToDataIndex( oSettings, n )
  {
    return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
  }


  /**
   * Take a TD element and convert it into a column data index (not the visible index)
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iRow The row number the TD/TH can be found in
   *  @param {node} n The TD/TH element to find
   *  @returns {int} index if the node is found, -1 if not
   *  @memberof DataTable#oApi
   */
  function _fnNodeToColumnIndex( oSettings, iRow, n )
  {
    return $.inArray( n, oSettings.aoData[ iRow ].anCells );
  }


  /**
   * Get the data for a given cell from the internal cache, taking into account data mapping
   *  @param {object} settings dataTables settings object
   *  @param {int} rowIdx aoData row id
   *  @param {int} colIdx Column index
   *  @param {string} type data get type ('display', 'type' 'filter|search' 'sort|order')
   *  @returns {*} Cell data
   *  @memberof DataTable#oApi
   */
  function _fnGetCellData( settings, rowIdx, colIdx, type )
  {
    if (type === 'search') {
      type = 'filter';
    }
    else if (type === 'order') {
      type = 'sort';
    }

    var draw           = settings.iDraw;
    var col            = settings.aoColumns[colIdx];
    var rowData        = settings.aoData[rowIdx]._aData;
    var defaultContent = col.sDefaultContent;
    var cellData       = col.fnGetData( rowData, type, {
      settings: settings,
      row:      rowIdx,
      col:      colIdx
    } );

    if ( cellData === undefined ) {
      if ( settings.iDrawError != draw && defaultContent === null ) {
        _fnLog( settings, 0, "Requested unknown parameter "+
          (typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
          " for row "+rowIdx+", column "+colIdx, 4 );
        settings.iDrawError = draw;
      }
      return defaultContent;
    }

    // When the data source is null and a specific data type is requested (i.e.
    // not the original data), we can use default column data
    if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
      cellData = defaultContent;
    }
    else if ( typeof cellData === 'function' ) {
      // If the data source is a function, then we run it and use the return,
      // executing in the scope of the data object (for instances)
      return cellData.call( rowData );
    }

    if ( cellData === null && type === 'display' ) {
      return '';
    }

    if ( type === 'filter' ) {
      var fomatters = DataTable.ext.type.search;

      if ( fomatters[ col.sType ] ) {
        cellData = fomatters[ col.sType ]( cellData );
      }
    }

    return cellData;
  }


  /**
   * Set the value for a specific cell, into the internal data cache
   *  @param {object} settings dataTables settings object
   *  @param {int} rowIdx aoData row id
   *  @param {int} colIdx Column index
   *  @param {*} val Value to set
   *  @memberof DataTable#oApi
   */
  function _fnSetCellData( settings, rowIdx, colIdx, val )
  {
    var col     = settings.aoColumns[colIdx];
    var rowData = settings.aoData[rowIdx]._aData;

    col.fnSetData( rowData, val, {
      settings: settings,
      row:      rowIdx,
      col:      colIdx
    }  );
  }


  // Private variable that is used to match action syntax in the data property object
  var __reArray = /\[.*?\]$/;
  var __reFn = /\(\)$/;

  /**
   * Split string on periods, taking into account escaped periods
   * @param  {string} str String to split
   * @return {array} Split string
   */
  function _fnSplitObjNotation( str )
  {
    return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
      return s.replace(/\\\./g, '.');
    } );
  }


  /**
   * Return a function that can be used to get data from a source object, taking
   * into account the ability to use nested objects as a source
   *  @param {string|int|function} mSource The data source for the object
   *  @returns {function} Data get function
   *  @memberof DataTable#oApi
   */
  var _fnGetObjectDataFn = DataTable.util.get;


  /**
   * Return a function that can be used to set data from a source object, taking
   * into account the ability to use nested objects as a source
   *  @param {string|int|function} mSource The data source for the object
   *  @returns {function} Data set function
   *  @memberof DataTable#oApi
   */
  var _fnSetObjectDataFn = DataTable.util.set;


  /**
   * Return an array with the full table data
   *  @param {object} oSettings dataTables settings object
   *  @returns array {array} aData Master data array
   *  @memberof DataTable#oApi
   */
  function _fnGetDataMaster ( settings )
  {
    return _pluck( settings.aoData, '_aData' );
  }


  /**
   * Nuke the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnClearTable( settings )
  {
    settings.aoData.length = 0;
    settings.aiDisplayMaster.length = 0;
    settings.aiDisplay.length = 0;
    settings.aIds = {};
  }


   /**
   * Take an array of integers (index array) and remove a target integer (value - not
   * the key!)
   *  @param {array} a Index array to target
   *  @param {int} iTarget value to find
   *  @memberof DataTable#oApi
   */
  function _fnDeleteIndex( a, iTarget, splice )
  {
    var iTargetIndex = -1;

    for ( var i=0, iLen=a.length ; i<iLen ; i++ )
    {
      if ( a[i] == iTarget )
      {
        iTargetIndex = i;
      }
      else if ( a[i] > iTarget )
      {
        a[i]--;
      }
    }

    if ( iTargetIndex != -1 && splice === undefined )
    {
      a.splice( iTargetIndex, 1 );
    }
  }


  /**
   * Mark cached data as invalid such that a re-read of the data will occur when
   * the cached data is next requested. Also update from the data source object.
   *
   * @param {object} settings DataTables settings object
   * @param {int}    rowIdx   Row index to invalidate
   * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
   *     or 'data'
   * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
   *     row will be invalidated
   * @memberof DataTable#oApi
   *
   * @todo For the modularisation of v1.11 this will need to become a callback, so
   *   the sort and filter methods can subscribe to it. That will required
   *   initialisation options for sorting, which is why it is not already baked in
   */
  function _fnInvalidate( settings, rowIdx, src, colIdx )
  {
    var row = settings.aoData[ rowIdx ];
    var i, ien;
    var cellWrite = function ( cell, col ) {
      // This is very frustrating, but in IE if you just write directly
      // to innerHTML, and elements that are overwritten are GC'ed,
      // even if there is a reference to them elsewhere
      while ( cell.childNodes.length ) {
        cell.removeChild( cell.firstChild );
      }

      cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
    };

    // Are we reading last data from DOM or the data object?
    if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
      // Read the data from the DOM
      row._aData = _fnGetRowElements(
          settings, row, colIdx, colIdx === undefined ? undefined : row._aData
        )
        .data;
    }
    else {
      // Reading from data object, update the DOM
      var cells = row.anCells;

      if ( cells ) {
        if ( colIdx !== undefined ) {
          cellWrite( cells[colIdx], colIdx );
        }
        else {
          for ( i=0, ien=cells.length ; i<ien ; i++ ) {
            cellWrite( cells[i], i );
          }
        }
      }
    }

    // For both row and cell invalidation, the cached data for sorting and
    // filtering is nulled out
    row._aSortData = null;
    row._aFilterData = null;

    // Invalidate the type for a specific column (if given) or all columns since
    // the data might have changed
    var cols = settings.aoColumns;
    if ( colIdx !== undefined ) {
      cols[ colIdx ].sType = null;
    }
    else {
      for ( i=0, ien=cols.length ; i<ien ; i++ ) {
        cols[i].sType = null;
      }

      // Update DataTables special `DT_*` attributes for the row
      _fnRowAttributes( settings, row );
    }
  }


  /**
   * Build a data source object from an HTML row, reading the contents of the
   * cells that are in the row.
   *
   * @param {object} settings DataTables settings object
   * @param {node|object} TR element from which to read data or existing row
   *   object from which to re-read the data from the cells
   * @param {int} [colIdx] Optional column index
   * @param {array|object} [d] Data source object. If `colIdx` is given then this
   *   parameter should also be given and will be used to write the data into.
   *   Only the column in question will be written
   * @returns {object} Object with two parameters: `data` the data read, in
   *   document order, and `cells` and array of nodes (they can be useful to the
   *   caller, so rather than needing a second traversal to get them, just return
   *   them from here).
   * @memberof DataTable#oApi
   */
  function _fnGetRowElements( settings, row, colIdx, d )
  {
    var
      tds = [],
      td = row.firstChild,
      name, col, o, i=0, contents,
      columns = settings.aoColumns,
      objectRead = settings._rowReadObject;

    // Allow the data object to be passed in, or construct
    d = d !== undefined ?
      d :
      objectRead ?
        {} :
        [];

    var attr = function ( str, td  ) {
      if ( typeof str === 'string' ) {
        var idx = str.indexOf('@');

        if ( idx !== -1 ) {
          var attr = str.substring( idx+1 );
          var setter = _fnSetObjectDataFn( str );
          setter( d, td.getAttribute( attr ) );
        }
      }
    };

    // Read data from a cell and store into the data object
    var cellProcess = function ( cell ) {
      if ( colIdx === undefined || colIdx === i ) {
        col = columns[i];
        contents = (cell.innerHTML).trim();

        if ( col && col._bAttrSrc ) {
          var setter = _fnSetObjectDataFn( col.mData._ );
          setter( d, contents );

          attr( col.mData.sort, cell );
          attr( col.mData.type, cell );
          attr( col.mData.filter, cell );
        }
        else {
          // Depending on the `data` option for the columns the data can
          // be read to either an object or an array.
          if ( objectRead ) {
            if ( ! col._setter ) {
              // Cache the setter function
              col._setter = _fnSetObjectDataFn( col.mData );
            }
            col._setter( d, contents );
          }
          else {
            d[i] = contents;
          }
        }
      }

      i++;
    };

    if ( td ) {
      // `tr` element was passed in
      while ( td ) {
        name = td.nodeName.toUpperCase();

        if ( name == "TD" || name == "TH" ) {
          cellProcess( td );
          tds.push( td );
        }

        td = td.nextSibling;
      }
    }
    else {
      // Existing row object passed in
      tds = row.anCells;

      for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
        cellProcess( tds[j] );
      }
    }

    // Read the ID from the DOM if present
    var rowNode = row.firstChild ? row : row.nTr;

    if ( rowNode ) {
      var id = rowNode.getAttribute( 'id' );

      if ( id ) {
        _fnSetObjectDataFn( settings.rowId )( d, id );
      }
    }

    return {
      data: d,
      cells: tds
    };
  }
  /**
   * Create a new TR element (and it's TD children) for a row
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iRow Row to consider
   *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
   *    DataTables will create a row automatically
   *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
   *    if nTr is.
   *  @memberof DataTable#oApi
   */
  function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
  {
    var
      row = oSettings.aoData[iRow],
      rowData = row._aData,
      cells = [],
      nTr, nTd, oCol,
      i, iLen, create;

    if ( row.nTr === null )
    {
      nTr = nTrIn || document.createElement('tr');

      row.nTr = nTr;
      row.anCells = cells;

      /* Use a private property on the node to allow reserve mapping from the node
       * to the aoData array for fast look up
       */
      nTr._DT_RowIndex = iRow;

      /* Special parameters can be given by the data source to be used on the row */
      _fnRowAttributes( oSettings, row );

      /* Process each column */
      for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
      {
        oCol = oSettings.aoColumns[i];
        create = nTrIn ? false : true;

        nTd = create ? document.createElement( oCol.sCellType ) : anTds[i];

        if (! nTd) {
          _fnLog( oSettings, 0, 'Incorrect column count', 18 );
        }

        nTd._DT_CellIndex = {
          row: iRow,
          column: i
        };

        cells.push( nTd );

        // Need to create the HTML if new, or if a rendering function is defined
        if ( create || ((oCol.mRender || oCol.mData !== i) &&
           (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
        )) {
          nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
        }

        /* Add user defined class */
        if ( oCol.sClass )
        {
          nTd.className += ' '+oCol.sClass;
        }

        // Visibility - add or remove as required
        if ( oCol.bVisible && ! nTrIn )
        {
          nTr.appendChild( nTd );
        }
        else if ( ! oCol.bVisible && nTrIn )
        {
          nTd.parentNode.removeChild( nTd );
        }

        if ( oCol.fnCreatedCell )
        {
          oCol.fnCreatedCell.call( oSettings.oInstance,
            nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
          );
        }
      }

      _fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
    }
  }


  /**
   * Add attributes to a row based on the special `DT_*` parameters in a data
   * source object.
   *  @param {object} settings DataTables settings object
   *  @param {object} DataTables row object for the row to be modified
   *  @memberof DataTable#oApi
   */
  function _fnRowAttributes( settings, row )
  {
    var tr = row.nTr;
    var data = row._aData;

    if ( tr ) {
      var id = settings.rowIdFn( data );

      if ( id ) {
        tr.id = id;
      }

      if ( data.DT_RowClass ) {
        // Remove any classes added by DT_RowClass before
        var a = data.DT_RowClass.split(' ');
        row.__rowc = row.__rowc ?
          _unique( row.__rowc.concat( a ) ) :
          a;

        $(tr)
          .removeClass( row.__rowc.join(' ') )
          .addClass( data.DT_RowClass );
      }

      if ( data.DT_RowAttr ) {
        $(tr).attr( data.DT_RowAttr );
      }

      if ( data.DT_RowData ) {
        $(tr).data( data.DT_RowData );
      }
    }
  }


  /**
   * Create the HTML header for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnBuildHead( oSettings )
  {
    var i, ien, cell, row, column;
    var thead = oSettings.nTHead;
    var tfoot = oSettings.nTFoot;
    var createHeader = $('th, td', thead).length === 0;
    var classes = oSettings.oClasses;
    var columns = oSettings.aoColumns;

    if ( createHeader ) {
      row = $('<tr/>').appendTo( thead );
    }

    for ( i=0, ien=columns.length ; i<ien ; i++ ) {
      column = columns[i];
      cell = $( column.nTh ).addClass( column.sClass );

      if ( createHeader ) {
        cell.appendTo( row );
      }

      // 1.11 move into sorting
      if ( oSettings.oFeatures.bSort ) {
        cell.addClass( column.sSortingClass );

        if ( column.bSortable !== false ) {
          cell
            .attr( 'tabindex', oSettings.iTabIndex )
            .attr( 'aria-controls', oSettings.sTableId );

          _fnSortAttachListener( oSettings, column.nTh, i );
        }
      }

      if ( column.sTitle != cell[0].innerHTML ) {
        cell.html( column.sTitle );
      }

      _fnRenderer( oSettings, 'header' )(
        oSettings, cell, column, classes
      );
    }

    if ( createHeader ) {
      _fnDetectHeader( oSettings.aoHeader, thead );
    }

    /* Deal with the footer - add classes if required */
    $(thead).children('tr').children('th, td').addClass( classes.sHeaderTH );
    $(tfoot).children('tr').children('th, td').addClass( classes.sFooterTH );

    // Cache the footer cells. Note that we only take the cells from the first
    // row in the footer. If there is more than one row the user wants to
    // interact with, they need to use the table().foot() method. Note also this
    // allows cells to be used for multiple columns using colspan
    if ( tfoot !== null ) {
      var cells = oSettings.aoFooter[0];

      for ( i=0, ien=cells.length ; i<ien ; i++ ) {
        column = columns[i];

        if (column) {
          column.nTf = cells[i].cell;

          if ( column.sClass ) {
            $(column.nTf).addClass( column.sClass );
          }
        }
        else {
          _fnLog( oSettings, 0, 'Incorrect column count', 18 );
        }
      }
    }
  }


  /**
   * Draw the header (or footer) element based on the column visibility states. The
   * methodology here is to use the layout array from _fnDetectHeader, modified for
   * the instantaneous column visibility, to construct the new layout. The grid is
   * traversed over cell at a time in a rows x columns grid fashion, although each
   * cell insert can cover multiple elements in the grid - which is tracks using the
   * aApplied array. Cell inserts in the grid will only occur where there isn't
   * already a cell in that position.
   *  @param {object} oSettings dataTables settings object
   *  @param array {objects} aoSource Layout array from _fnDetectHeader
   *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
   *  @memberof DataTable#oApi
   */
  function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
  {
    var i, iLen, j, jLen, k, kLen, n, nLocalTr;
    var aoLocal = [];
    var aApplied = [];
    var iColumns = oSettings.aoColumns.length;
    var iRowspan, iColspan;

    if ( ! aoSource )
    {
      return;
    }

    if (  bIncludeHidden === undefined )
    {
      bIncludeHidden = false;
    }

    /* Make a copy of the master layout array, but without the visible columns in it */
    for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
    {
      aoLocal[i] = aoSource[i].slice();
      aoLocal[i].nTr = aoSource[i].nTr;

      /* Remove any columns which are currently hidden */
      for ( j=iColumns-1 ; j>=0 ; j-- )
      {
        if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
        {
          aoLocal[i].splice( j, 1 );
        }
      }

      /* Prep the applied array - it needs an element for each row */
      aApplied.push( [] );
    }

    for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
    {
      nLocalTr = aoLocal[i].nTr;

      /* All cells are going to be replaced, so empty out the row */
      if ( nLocalTr )
      {
        while( (n = nLocalTr.firstChild) )
        {
          nLocalTr.removeChild( n );
        }
      }

      for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
      {
        iRowspan = 1;
        iColspan = 1;

        /* Check to see if there is already a cell (row/colspan) covering our target
         * insert point. If there is, then there is nothing to do.
         */
        if ( aApplied[i][j] === undefined )
        {
          nLocalTr.appendChild( aoLocal[i][j].cell );
          aApplied[i][j] = 1;

          /* Expand the cell to cover as many rows as needed */
          while ( aoLocal[i+iRowspan] !== undefined &&
                  aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
          {
            aApplied[i+iRowspan][j] = 1;
            iRowspan++;
          }

          /* Expand the cell to cover as many columns as needed */
          while ( aoLocal[i][j+iColspan] !== undefined &&
                  aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
          {
            /* Must update the applied array over the rows for the columns */
            for ( k=0 ; k<iRowspan ; k++ )
            {
              aApplied[i+k][j+iColspan] = 1;
            }
            iColspan++;
          }

          /* Do the actual expansion in the DOM */
          $(aoLocal[i][j].cell)
            .attr('rowspan', iRowspan)
            .attr('colspan', iColspan);
        }
      }
    }
  }


  /**
   * Insert the required TR nodes into the table for display
   *  @param {object} oSettings dataTables settings object
   *  @param ajaxComplete true after ajax call to complete rendering
   *  @memberof DataTable#oApi
   */
  function _fnDraw( oSettings, ajaxComplete )
  {
    // Allow for state saving and a custom start position
    _fnStart( oSettings );

    /* Provide a pre-callback function which can be used to cancel the draw is false is returned */
    var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
    if ( $.inArray( false, aPreDraw ) !== -1 )
    {
      _fnProcessingDisplay( oSettings, false );
      return;
    }

    var anRows = [];
    var iRowCount = 0;
    var asStripeClasses = oSettings.asStripeClasses;
    var iStripes = asStripeClasses.length;
    var oLang = oSettings.oLanguage;
    var bServerSide = _fnDataSource( oSettings ) == 'ssp';
    var aiDisplay = oSettings.aiDisplay;
    var iDisplayStart = oSettings._iDisplayStart;
    var iDisplayEnd = oSettings.fnDisplayEnd();

    oSettings.bDrawing = true;

    /* Server-side processing draw intercept */
    if ( oSettings.bDeferLoading )
    {
      oSettings.bDeferLoading = false;
      oSettings.iDraw++;
      _fnProcessingDisplay( oSettings, false );
    }
    else if ( !bServerSide )
    {
      oSettings.iDraw++;
    }
    else if ( !oSettings.bDestroying && !ajaxComplete)
    {
      _fnAjaxUpdate( oSettings );
      return;
    }

    if ( aiDisplay.length !== 0 )
    {
      var iStart = bServerSide ? 0 : iDisplayStart;
      var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;

      for ( var j=iStart ; j<iEnd ; j++ )
      {
        var iDataIndex = aiDisplay[j];
        var aoData = oSettings.aoData[ iDataIndex ];
        if ( aoData.nTr === null )
        {
          _fnCreateTr( oSettings, iDataIndex );
        }

        var nRow = aoData.nTr;

        /* Remove the old striping classes and then add the new one */
        if ( iStripes !== 0 )
        {
          var sStripe = asStripeClasses[ iRowCount % iStripes ];
          if ( aoData._sRowStripe != sStripe )
          {
            $(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
            aoData._sRowStripe = sStripe;
          }
        }

        // Row callback functions - might want to manipulate the row
        // iRowCount and j are not currently documented. Are they at all
        // useful?
        _fnCallbackFire( oSettings, 'aoRowCallback', null,
          [nRow, aoData._aData, iRowCount, j, iDataIndex] );

        anRows.push( nRow );
        iRowCount++;
      }
    }
    else
    {
      /* Table is empty - create a row with an empty message in it */
      var sZero = oLang.sZeroRecords;
      if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
      {
        sZero = oLang.sLoadingRecords;
      }
      else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
      {
        sZero = oLang.sEmptyTable;
      }

      anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
        .append( $('<td />', {
          'valign':  'top',
          'colSpan': _fnVisbleColumns( oSettings ),
          'class':   oSettings.oClasses.sRowEmpty
        } ).html( sZero ) )[0];
    }

    /* Header and footer callbacks */
    _fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
      _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

    _fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
      _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

    var body = $(oSettings.nTBody);

    body.children().detach();
    body.append( $(anRows) );

    /* Call all required callback functions for the end of a draw */
    _fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );

    /* Draw is complete, sorting and filtering must be as well */
    oSettings.bSorted = false;
    oSettings.bFiltered = false;
    oSettings.bDrawing = false;
  }


  /**
   * Redraw the table - taking account of the various features which are enabled
   *  @param {object} oSettings dataTables settings object
   *  @param {boolean} [holdPosition] Keep the current paging position. By default
   *    the paging is reset to the first page
   *  @memberof DataTable#oApi
   */
  function _fnReDraw( settings, holdPosition )
  {
    var
      features = settings.oFeatures,
      sort     = features.bSort,
      filter   = features.bFilter;

    if ( sort ) {
      _fnSort( settings );
    }

    if ( filter ) {
      _fnFilterComplete( settings, settings.oPreviousSearch );
    }
    else {
      // No filtering, so we want to just use the display master
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }

    if ( holdPosition !== true ) {
      settings._iDisplayStart = 0;
    }

    // Let any modules know about the draw hold position state (used by
    // scrolling internally)
    settings._drawHold = holdPosition;

    _fnDraw( settings );

    settings._drawHold = false;
  }


  /**
   * Add the options to the page HTML for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnAddOptionsHtml ( oSettings )
  {
    var classes = oSettings.oClasses;
    var table = $(oSettings.nTable);
    var holding = $('<div/>').insertBefore( table ); // Holding element for speed
    var features = oSettings.oFeatures;

    // All DataTables are wrapped in a div
    var insert = $('<div/>', {
      id:      oSettings.sTableId+'_wrapper',
      'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
    } );

    oSettings.nHolding = holding[0];
    oSettings.nTableWrapper = insert[0];
    oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

    /* Loop over the user set positioning and place the elements as needed */
    var aDom = oSettings.sDom.split('');
    var featureNode, cOption, nNewNode, cNext, sAttr, j;
    for ( var i=0 ; i<aDom.length ; i++ )
    {
      featureNode = null;
      cOption = aDom[i];

      if ( cOption == '<' )
      {
        /* New container div */
        nNewNode = $('<div/>')[0];

        /* Check to see if we should append an id and/or a class name to the container */
        cNext = aDom[i+1];
        if ( cNext == "'" || cNext == '"' )
        {
          sAttr = "";
          j = 2;
          while ( aDom[i+j] != cNext )
          {
            sAttr += aDom[i+j];
            j++;
          }

          /* Replace jQuery UI constants @todo depreciated */
          if ( sAttr == "H" )
          {
            sAttr = classes.sJUIHeader;
          }
          else if ( sAttr == "F" )
          {
            sAttr = classes.sJUIFooter;
          }

          /* The attribute can be in the format of "#id.class", "#id" or "class" This logic
           * breaks the string into parts and applies them as needed
           */
          if ( sAttr.indexOf('.') != -1 )
          {
            var aSplit = sAttr.split('.');
            nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
            nNewNode.className = aSplit[1];
          }
          else if ( sAttr.charAt(0) == "#" )
          {
            nNewNode.id = sAttr.substr(1, sAttr.length-1);
          }
          else
          {
            nNewNode.className = sAttr;
          }

          i += j; /* Move along the position array */
        }

        insert.append( nNewNode );
        insert = $(nNewNode);
      }
      else if ( cOption == '>' )
      {
        /* End container div */
        insert = insert.parent();
      }
      // @todo Move options into their own plugins?
      else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
      {
        /* Length */
        featureNode = _fnFeatureHtmlLength( oSettings );
      }
      else if ( cOption == 'f' && features.bFilter )
      {
        /* Filter */
        featureNode = _fnFeatureHtmlFilter( oSettings );
      }
      else if ( cOption == 'r' && features.bProcessing )
      {
        /* pRocessing */
        featureNode = _fnFeatureHtmlProcessing( oSettings );
      }
      else if ( cOption == 't' )
      {
        /* Table */
        featureNode = _fnFeatureHtmlTable( oSettings );
      }
      else if ( cOption ==  'i' && features.bInfo )
      {
        /* Info */
        featureNode = _fnFeatureHtmlInfo( oSettings );
      }
      else if ( cOption == 'p' && features.bPaginate )
      {
        /* Pagination */
        featureNode = _fnFeatureHtmlPaginate( oSettings );
      }
      else if ( DataTable.ext.feature.length !== 0 )
      {
        /* Plug-in features */
        var aoFeatures = DataTable.ext.feature;
        for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
        {
          if ( cOption == aoFeatures[k].cFeature )
          {
            featureNode = aoFeatures[k].fnInit( oSettings );
            break;
          }
        }
      }

      /* Add to the 2D features array */
      if ( featureNode )
      {
        var aanFeatures = oSettings.aanFeatures;

        if ( ! aanFeatures[cOption] )
        {
          aanFeatures[cOption] = [];
        }

        aanFeatures[cOption].push( featureNode );
        insert.append( featureNode );
      }
    }

    /* Built our DOM structure - replace the holding div with what we want */
    holding.replaceWith( insert );
    oSettings.nHolding = null;
  }


  /**
   * Use the DOM source to create up an array of header cells. The idea here is to
   * create a layout grid (array) of rows x columns, which contains a reference
   * to the cell that that point in the grid (regardless of col/rowspan), such that
   * any column / row could be removed and the new grid constructed
   *  @param array {object} aLayout Array to store the calculated layout in
   *  @param {node} nThead The header/footer element for the table
   *  @memberof DataTable#oApi
   */
  function _fnDetectHeader ( aLayout, nThead )
  {
    var nTrs = $(nThead).children('tr');
    var nTr, nCell;
    var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
    var bUnique;
    var fnShiftCol = function ( a, i, j ) {
      var k = a[i];
                  while ( k[j] ) {
        j++;
      }
      return j;
    };

    aLayout.splice( 0, aLayout.length );

    /* We know how many rows there are in the layout - so prep it */
    for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
    {
      aLayout.push( [] );
    }

    /* Calculate a layout array */
    for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
    {
      nTr = nTrs[i];
      iColumn = 0;

      /* For every cell in the row... */
      nCell = nTr.firstChild;
      while ( nCell ) {
        if ( nCell.nodeName.toUpperCase() == "TD" ||
             nCell.nodeName.toUpperCase() == "TH" )
        {
          /* Get the col and rowspan attributes from the DOM and sanitise them */
          iColspan = nCell.getAttribute('colspan') * 1;
          iRowspan = nCell.getAttribute('rowspan') * 1;
          iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
          iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;

          /* There might be colspan cells already in this row, so shift our target
           * accordingly
           */
          iColShifted = fnShiftCol( aLayout, i, iColumn );

          /* Cache calculation for unique columns */
          bUnique = iColspan === 1 ? true : false;

          /* If there is col / rowspan, copy the information into the layout grid */
          for ( l=0 ; l<iColspan ; l++ )
          {
            for ( k=0 ; k<iRowspan ; k++ )
            {
              aLayout[i+k][iColShifted+l] = {
                "cell": nCell,
                "unique": bUnique
              };
              aLayout[i+k].nTr = nTr;
            }
          }
        }
        nCell = nCell.nextSibling;
      }
    }
  }


  /**
   * Get an array of unique th elements, one for each column
   *  @param {object} oSettings dataTables settings object
   *  @param {node} nHeader automatically detect the layout from this node - optional
   *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
   *  @returns array {node} aReturn list of unique th's
   *  @memberof DataTable#oApi
   */
  function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
  {
    var aReturn = [];
    if ( !aLayout )
    {
      aLayout = oSettings.aoHeader;
      if ( nHeader )
      {
        aLayout = [];
        _fnDetectHeader( aLayout, nHeader );
      }
    }

    for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
    {
      for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
      {
        if ( aLayout[i][j].unique &&
           (!aReturn[j] || !oSettings.bSortCellsTop) )
        {
          aReturn[j] = aLayout[i][j].cell;
        }
      }
    }

    return aReturn;
  }

  /**
   * Set the start position for draw
   *  @param {object} oSettings dataTables settings object
   */
  function _fnStart( oSettings )
  {
    var bServerSide = _fnDataSource( oSettings ) == 'ssp';
    var iInitDisplayStart = oSettings.iInitDisplayStart;

    // Check and see if we have an initial draw position from state saving
    if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
    {
      oSettings._iDisplayStart = bServerSide ?
        iInitDisplayStart :
        iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
          0 :
          iInitDisplayStart;

      oSettings.iInitDisplayStart = -1;
    }
  }

  /**
   * Create an Ajax call based on the table's settings, taking into account that
   * parameters can have multiple forms, and backwards compatibility.
   *
   * @param {object} oSettings dataTables settings object
   * @param {array} data Data to send to the server, required by
   *     DataTables - may be augmented by developer callbacks
   * @param {function} fn Callback function to run when data is obtained
   */
  function _fnBuildAjax( oSettings, data, fn )
  {
    // Compatibility with 1.9-, allow fnServerData and event to manipulate
    _fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );

    // Convert to object based for 1.10+ if using the old array scheme which can
    // come from server-side processing or serverParams
    if ( data && Array.isArray(data) ) {
      var tmp = {};
      var rbracket = /(.*?)\[\]$/;

      $.each( data, function (key, val) {
        var match = val.name.match(rbracket);

        if ( match ) {
          // Support for arrays
          var name = match[0];

          if ( ! tmp[ name ] ) {
            tmp[ name ] = [];
          }
          tmp[ name ].push( val.value );
        }
        else {
          tmp[val.name] = val.value;
        }
      } );
      data = tmp;
    }

    var ajaxData;
    var ajax = oSettings.ajax;
    var instance = oSettings.oInstance;
    var callback = function ( json ) {
      var status = oSettings.jqXHR
        ? oSettings.jqXHR.status
        : null;

      if ( json === null || (typeof status === 'number' && status == 204 ) ) {
        json = {};
        _fnAjaxDataSrc( oSettings, json, [] );
      }

      var error = json.error || json.sError;
      if ( error ) {
        _fnLog( oSettings, 0, error );
      }

      oSettings.json = json;

      _fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
      fn( json );
    };

    if ( $.isPlainObject( ajax ) && ajax.data )
    {
      ajaxData = ajax.data;

      var newData = typeof ajaxData === 'function' ?
        ajaxData( data, oSettings ) :  // fn can manipulate data or return
        ajaxData;                      // an object object or array to merge

      // If the function returned something, use that alone
      data = typeof ajaxData === 'function' && newData ?
        newData :
        $.extend( true, data, newData );

      // Remove the data property as we've resolved it already and don't want
      // jQuery to do it again (it is restored at the end of the function)
      delete ajax.data;
    }

    var baseAjax = {
      "data": data,
      "success": callback,
      "dataType": "json",
      "cache": false,
      "type": oSettings.sServerMethod,
      "error": function (xhr, error, thrown) {
        var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );

        if ( $.inArray( true, ret ) === -1 ) {
          if ( error == "parsererror" ) {
            _fnLog( oSettings, 0, 'Invalid JSON response', 1 );
          }
          else if ( xhr.readyState === 4 ) {
            _fnLog( oSettings, 0, 'Ajax error', 7 );
          }
        }

        _fnProcessingDisplay( oSettings, false );
      }
    };

    // Store the data submitted for the API
    oSettings.oAjaxData = data;

    // Allow plug-ins and external processes to modify the data
    _fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );

    if ( oSettings.fnServerData )
    {
      // DataTables 1.9- compatibility
      oSettings.fnServerData.call( instance,
        oSettings.sAjaxSource,
        $.map( data, function (val, key) { // Need to convert back to 1.9 trad format
          return { name: key, value: val };
        } ),
        callback,
        oSettings
      );
    }
    else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
    {
      // DataTables 1.9- compatibility
      oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
        url: ajax || oSettings.sAjaxSource
      } ) );
    }
    else if ( typeof ajax === 'function' )
    {
      // Is a function - let the caller define what needs to be done
      oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
    }
    else
    {
      // Object to extend the base settings
      oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );

      // Restore for next time around
      ajax.data = ajaxData;
    }
  }


  /**
   * Update the table using an Ajax call
   *  @param {object} settings dataTables settings object
   *  @returns {boolean} Block the table drawing or not
   *  @memberof DataTable#oApi
   */
  function _fnAjaxUpdate( settings )
  {
    settings.iDraw++;
    _fnProcessingDisplay( settings, true );

    _fnBuildAjax(
      settings,
      _fnAjaxParameters( settings ),
      function(json) {
        _fnAjaxUpdateDraw( settings, json );
      }
    );
  }


  /**
   * Build up the parameters in an object needed for a server-side processing
   * request. Note that this is basically done twice, is different ways - a modern
   * method which is used by default in DataTables 1.10 which uses objects and
   * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
   * the sAjaxSource option is used in the initialisation, or the legacyAjax
   * option is set.
   *  @param {object} oSettings dataTables settings object
   *  @returns {bool} block the table drawing or not
   *  @memberof DataTable#oApi
   */
  function _fnAjaxParameters( settings )
  {
    var
      columns = settings.aoColumns,
      columnCount = columns.length,
      features = settings.oFeatures,
      preSearch = settings.oPreviousSearch,
      preColSearch = settings.aoPreSearchCols,
      i, data = [], dataProp, column, columnSearch,
      sort = _fnSortFlatten( settings ),
      displayStart = settings._iDisplayStart,
      displayLength = features.bPaginate !== false ?
        settings._iDisplayLength :
        -1;

    var param = function ( name, value ) {
      data.push( { 'name': name, 'value': value } );
    };

    // DataTables 1.9- compatible method
    param( 'sEcho',          settings.iDraw );
    param( 'iColumns',       columnCount );
    param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
    param( 'iDisplayStart',  displayStart );
    param( 'iDisplayLength', displayLength );

    // DataTables 1.10+ method
    var d = {
      draw:    settings.iDraw,
      columns: [],
      order:   [],
      start:   displayStart,
      length:  displayLength,
      search:  {
        value: preSearch.sSearch,
        regex: preSearch.bRegex
      }
    };

    for ( i=0 ; i<columnCount ; i++ ) {
      column = columns[i];
      columnSearch = preColSearch[i];
      dataProp = typeof column.mData=="function" ? 'function' : column.mData ;

      d.columns.push( {
        data:       dataProp,
        name:       column.sName,
        searchable: column.bSearchable,
        orderable:  column.bSortable,
        search:     {
          value: columnSearch.sSearch,
          regex: columnSearch.bRegex
        }
      } );

      param( "mDataProp_"+i, dataProp );

      if ( features.bFilter ) {
        param( 'sSearch_'+i,     columnSearch.sSearch );
        param( 'bRegex_'+i,      columnSearch.bRegex );
        param( 'bSearchable_'+i, column.bSearchable );
      }

      if ( features.bSort ) {
        param( 'bSortable_'+i, column.bSortable );
      }
    }

    if ( features.bFilter ) {
      param( 'sSearch', preSearch.sSearch );
      param( 'bRegex', preSearch.bRegex );
    }

    if ( features.bSort ) {
      $.each( sort, function ( i, val ) {
        d.order.push( { column: val.col, dir: val.dir } );

        param( 'iSortCol_'+i, val.col );
        param( 'sSortDir_'+i, val.dir );
      } );

      param( 'iSortingCols', sort.length );
    }

    // If the legacy.ajax parameter is null, then we automatically decide which
    // form to use, based on sAjaxSource
    var legacy = DataTable.ext.legacy.ajax;
    if ( legacy === null ) {
      return settings.sAjaxSource ? data : d;
    }

    // Otherwise, if legacy has been specified then we use that to decide on the
    // form
    return legacy ? data : d;
  }


  /**
   * Data the data from the server (nuking the old) and redraw the table
   *  @param {object} oSettings dataTables settings object
   *  @param {object} json json data return from the server.
   *  @param {string} json.sEcho Tracking flag for DataTables to match requests
   *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
   *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
   *  @param {array} json.aaData The data to display on this page
   *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
   *  @memberof DataTable#oApi
   */
  function _fnAjaxUpdateDraw ( settings, json )
  {
    // v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
    // Support both
    var compat = function ( old, modern ) {
      return json[old] !== undefined ? json[old] : json[modern];
    };

    var data = _fnAjaxDataSrc( settings, json );
    var draw            = compat( 'sEcho',                'draw' );
    var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
    var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );

    if ( draw !== undefined ) {
      // Protect against out of sequence returns
      if ( draw*1 < settings.iDraw ) {
        return;
      }
      settings.iDraw = draw * 1;
    }

    // No data in returned object, so rather than an array, we show an empty table
    if ( ! data ) {
      data = [];
    }

    _fnClearTable( settings );
    settings._iRecordsTotal   = parseInt(recordsTotal, 10);
    settings._iRecordsDisplay = parseInt(recordsFiltered, 10);

    for ( var i=0, ien=data.length ; i<ien ; i++ ) {
      _fnAddData( settings, data[i] );
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();

    _fnDraw( settings, true );

    if ( ! settings._bInitComplete ) {
      _fnInitComplete( settings, json );
    }

    _fnProcessingDisplay( settings, false );
  }


  /**
   * Get the data from the JSON data source to use for drawing a table. Using
   * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
   * source object, or from a processing function.
   *  @param {object} oSettings dataTables settings object
   *  @param  {object} json Data source object / array from the server
   *  @return {array} Array of data to use
   */
   function _fnAjaxDataSrc ( oSettings, json, write )
   {
    var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
      oSettings.ajax.dataSrc :
      oSettings.sAjaxDataProp; // Compatibility with 1.9-.

    if ( ! write ) {
      if ( dataSrc === 'data' ) {
        // If the default, then we still want to support the old style, and safely ignore
        // it if possible
        return json.aaData || json[dataSrc];
      }

      return dataSrc !== "" ?
        _fnGetObjectDataFn( dataSrc )( json ) :
        json;
    }

    // set
    _fnSetObjectDataFn( dataSrc )( json, write );
  }

  /**
   * Generate the node required for filtering text
   *  @returns {node} Filter control element
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlFilter ( settings )
  {
    var classes = settings.oClasses;
    var tableId = settings.sTableId;
    var language = settings.oLanguage;
    var previousSearch = settings.oPreviousSearch;
    var features = settings.aanFeatures;
    var input = '<input type="search" class="'+classes.sFilterInput+'"/>';

    var str = language.sSearch;
    str = str.match(/_INPUT_/) ?
      str.replace('_INPUT_', input) :
      str+input;

    var filter = $('<div/>', {
        'id': ! features.f ? tableId+'_filter' : null,
        'class': classes.sFilter
      } )
      .append( $('<label/>' ).append( str ) );

    var searchFn = function(event) {
      /* Update all other filter input elements for the new display */
      var n = features.f;
      var val = !this.value ? "" : this.value; // mental IE8 fix :-(
      if(previousSearch.return && event.key !== "Enter") {
        return;
      }
      /* Now do the filter */
      if ( val != previousSearch.sSearch ) {
        _fnFilterComplete( settings, {
          "sSearch": val,
          "bRegex": previousSearch.bRegex,
          "bSmart": previousSearch.bSmart ,
          "bCaseInsensitive": previousSearch.bCaseInsensitive,
          "return": previousSearch.return
        } );

        // Need to redraw, without resorting
        settings._iDisplayStart = 0;
        _fnDraw( settings );
      }
    };

    var searchDelay = settings.searchDelay !== null ?
      settings.searchDelay :
      _fnDataSource( settings ) === 'ssp' ?
        400 :
        0;

    var jqFilter = $('input', filter)
      .val( previousSearch.sSearch )
      .attr( 'placeholder', language.sSearchPlaceholder )
      .on(
        'keyup.DT search.DT input.DT paste.DT cut.DT',
        searchDelay ?
          _fnThrottle( searchFn, searchDelay ) :
          searchFn
      )
      .on( 'mouseup', function(e) {
        // Edge fix! Edge 17 does not trigger anything other than mouse events when clicking
        // on the clear icon (Edge bug 17584515). This is safe in other browsers as `searchFn`
        // checks the value to see if it has changed. In other browsers it won't have.
        setTimeout( function () {
          searchFn.call(jqFilter[0], e);
        }, 10);
      } )
      .on( 'keypress.DT', function(e) {
        /* Prevent form submission */
        if ( e.keyCode == 13 ) {
          return false;
        }
      } )
      .attr('aria-controls', tableId);

    // Update the input elements whenever the table is filtered
    $(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
      if ( settings === s ) {
        // IE9 throws an 'unknown error' if document.activeElement is used
        // inside an iframe or frame...
        try {
          if ( jqFilter[0] !== document.activeElement ) {
            jqFilter.val( previousSearch.sSearch );
          }
        }
        catch ( e ) {}
      }
    } );

    return filter[0];
  }


  /**
   * Filter the table using both the global filter and column based filtering
   *  @param {object} oSettings dataTables settings object
   *  @param {object} oSearch search information
   *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
   *  @memberof DataTable#oApi
   */
  function _fnFilterComplete ( oSettings, oInput, iForce )
  {
    var oPrevSearch = oSettings.oPreviousSearch;
    var aoPrevSearch = oSettings.aoPreSearchCols;
    var fnSaveFilter = function ( oFilter ) {
      /* Save the filtering values */
      oPrevSearch.sSearch = oFilter.sSearch;
      oPrevSearch.bRegex = oFilter.bRegex;
      oPrevSearch.bSmart = oFilter.bSmart;
      oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
      oPrevSearch.return = oFilter.return;
    };
    var fnRegex = function ( o ) {
      // Backwards compatibility with the bEscapeRegex option
      return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
    };

    // Resolve any column types that are unknown due to addition or invalidation
    // @todo As per sort - can this be moved into an event handler?
    _fnColumnTypes( oSettings );

    /* In server-side processing all filtering is done by the server, so no point hanging around here */
    if ( _fnDataSource( oSettings ) != 'ssp' )
    {
      /* Global filter */
      _fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive, oInput.return );
      fnSaveFilter( oInput );

      /* Now do the individual column filter */
      for ( var i=0 ; i<aoPrevSearch.length ; i++ )
      {
        _fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
          aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
      }

      /* Custom filtering */
      _fnFilterCustom( oSettings );
    }
    else
    {
      fnSaveFilter( oInput );
    }

    /* Tell the draw function we have been filtering */
    oSettings.bFiltered = true;
    _fnCallbackFire( oSettings, null, 'search', [oSettings] );
  }


  /**
   * Apply custom filtering functions
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnFilterCustom( settings )
  {
    var filters = DataTable.ext.search;
    var displayRows = settings.aiDisplay;
    var row, rowIdx;

    for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
      var rows = [];

      // Loop over each row and see if it should be included
      for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
        rowIdx = displayRows[ j ];
        row = settings.aoData[ rowIdx ];

        if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
          rows.push( rowIdx );
        }
      }

      // So the array reference doesn't break set the results into the
      // existing array
      displayRows.length = 0;
      $.merge( displayRows, rows );
    }
  }


  /**
   * Filter the table on a per-column basis
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sInput string to filter on
   *  @param {int} iColumn column to filter
   *  @param {bool} bRegex treat search string as a regular expression or not
   *  @param {bool} bSmart use smart filtering or not
   *  @param {bool} bCaseInsensitive Do case insensitive matching or not
   *  @memberof DataTable#oApi
   */
  function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
  {
    if ( searchStr === '' ) {
      return;
    }

    var data;
    var out = [];
    var display = settings.aiDisplay;
    var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );

    for ( var i=0 ; i<display.length ; i++ ) {
      data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];

      if ( rpSearch.test( data ) ) {
        out.push( display[i] );
      }
    }

    settings.aiDisplay = out;
  }


  /**
   * Filter the data table based on user input and draw the table
   *  @param {object} settings dataTables settings object
   *  @param {string} input string to filter on
   *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
   *  @param {bool} regex treat as a regular expression or not
   *  @param {bool} smart perform smart filtering or not
   *  @param {bool} caseInsensitive Do case insensitive matching or not
   *  @memberof DataTable#oApi
   */
  function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
  {
    var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
    var prevSearch = settings.oPreviousSearch.sSearch;
    var displayMaster = settings.aiDisplayMaster;
    var display, invalidated, i;
    var filtered = [];

    // Need to take account of custom filtering functions - always filter
    if ( DataTable.ext.search.length !== 0 ) {
      force = true;
    }

    // Check if any of the rows were invalidated
    invalidated = _fnFilterData( settings );

    // If the input is blank - we just want the full data set
    if ( input.length <= 0 ) {
      settings.aiDisplay = displayMaster.slice();
    }
    else {
      // New search - start from the master array
      if ( invalidated ||
         force ||
         regex ||
         prevSearch.length > input.length ||
         input.indexOf(prevSearch) !== 0 ||
         settings.bSorted // On resort, the display master needs to be
                          // re-filtered since indexes will have changed
      ) {
        settings.aiDisplay = displayMaster.slice();
      }

      // Search the display array
      display = settings.aiDisplay;

      for ( i=0 ; i<display.length ; i++ ) {
        if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
          filtered.push( display[i] );
        }
      }

      settings.aiDisplay = filtered;
    }
  }


  /**
   * Build a regular expression object suitable for searching a table
   *  @param {string} sSearch string to search for
   *  @param {bool} bRegex treat as a regular expression or not
   *  @param {bool} bSmart perform smart filtering or not
   *  @param {bool} bCaseInsensitive Do case insensitive matching or not
   *  @returns {RegExp} constructed object
   *  @memberof DataTable#oApi
   */
  function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
  {
    search = regex ?
      search :
      _fnEscapeRegex( search );

    if ( smart ) {
      /* For smart filtering we want to allow the search to work regardless of
       * word order. We also want double quoted text to be preserved, so word
       * order is important - a la google. So this is what we want to
       * generate:
       *
       * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
       */
      var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
        if ( word.charAt(0) === '"' ) {
          var m = word.match( /^"(.*)"$/ );
          word = m ? m[1] : word;
        }

        return word.replace('"', '');
      } );

      search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
    }

    return new RegExp( search, caseInsensitive ? 'i' : '' );
  }


  /**
   * Escape a string such that it can be used in a regular expression
   *  @param {string} sVal string to escape
   *  @returns {string} escaped string
   *  @memberof DataTable#oApi
   */
  var _fnEscapeRegex = DataTable.util.escapeRegex;

  var __filter_div = $('<div>')[0];
  var __filter_div_textContent = __filter_div.textContent !== undefined;

  // Update the filtering data for each row if needed (by invalidation or first run)
  function _fnFilterData ( settings )
  {
    var columns = settings.aoColumns;
    var column;
    var i, j, ien, jen, filterData, cellData, row;
    var wasInvalidated = false;

    for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
      row = settings.aoData[i];

      if ( ! row._aFilterData ) {
        filterData = [];

        for ( j=0, jen=columns.length ; j<jen ; j++ ) {
          column = columns[j];

          if ( column.bSearchable ) {
            cellData = _fnGetCellData( settings, i, j, 'filter' );

            // Search in DataTables 1.10 is string based. In 1.11 this
            // should be altered to also allow strict type checking.
            if ( cellData === null ) {
              cellData = '';
            }

            if ( typeof cellData !== 'string' && cellData.toString ) {
              cellData = cellData.toString();
            }
          }
          else {
            cellData = '';
          }

          // If it looks like there is an HTML entity in the string,
          // attempt to decode it so sorting works as expected. Note that
          // we could use a single line of jQuery to do this, but the DOM
          // method used here is much faster http://jsperf.com/html-decode
          if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
            __filter_div.innerHTML = cellData;
            cellData = __filter_div_textContent ?
              __filter_div.textContent :
              __filter_div.innerText;
          }

          if ( cellData.replace ) {
            cellData = cellData.replace(/[\r\n\u2028]/g, '');
          }

          filterData.push( cellData );
        }

        row._aFilterData = filterData;
        row._sFilterRow = filterData.join('  ');
        wasInvalidated = true;
      }
    }

    return wasInvalidated;
  }


  /**
   * Convert from the internal Hungarian notation to camelCase for external
   * interaction
   *  @param {object} obj Object to convert
   *  @returns {object} Inverted object
   *  @memberof DataTable#oApi
   */
  function _fnSearchToCamel ( obj )
  {
    return {
      search:          obj.sSearch,
      smart:           obj.bSmart,
      regex:           obj.bRegex,
      caseInsensitive: obj.bCaseInsensitive
    };
  }



  /**
   * Convert from camelCase notation to the internal Hungarian. We could use the
   * Hungarian convert function here, but this is cleaner
   *  @param {object} obj Object to convert
   *  @returns {object} Inverted object
   *  @memberof DataTable#oApi
   */
  function _fnSearchToHung ( obj )
  {
    return {
      sSearch:          obj.search,
      bSmart:           obj.smart,
      bRegex:           obj.regex,
      bCaseInsensitive: obj.caseInsensitive
    };
  }

  /**
   * Generate the node required for the info display
   *  @param {object} oSettings dataTables settings object
   *  @returns {node} Information element
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlInfo ( settings )
  {
    var
      tid = settings.sTableId,
      nodes = settings.aanFeatures.i,
      n = $('<div/>', {
        'class': settings.oClasses.sInfo,
        'id': ! nodes ? tid+'_info' : null
      } );

    if ( ! nodes ) {
      // Update display on each draw
      settings.aoDrawCallback.push( {
        "fn": _fnUpdateInfo,
        "sName": "information"
      } );

      n
        .attr( 'role', 'status' )
        .attr( 'aria-live', 'polite' );

      // Table is described by our info div
      $(settings.nTable).attr( 'aria-describedby', tid+'_info' );
    }

    return n[0];
  }


  /**
   * Update the information elements in the display
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnUpdateInfo ( settings )
  {
    /* Show information about the table */
    var nodes = settings.aanFeatures.i;
    if ( nodes.length === 0 ) {
      return;
    }

    var
      lang  = settings.oLanguage,
      start = settings._iDisplayStart+1,
      end   = settings.fnDisplayEnd(),
      max   = settings.fnRecordsTotal(),
      total = settings.fnRecordsDisplay(),
      out   = total ?
        lang.sInfo :
        lang.sInfoEmpty;

    if ( total !== max ) {
      /* Record set after filtering */
      out += ' ' + lang.sInfoFiltered;
    }

    // Convert the macros
    out += lang.sInfoPostFix;
    out = _fnInfoMacros( settings, out );

    var callback = lang.fnInfoCallback;
    if ( callback !== null ) {
      out = callback.call( settings.oInstance,
        settings, start, end, max, total, out
      );
    }

    $(nodes).html( out );
  }


  function _fnInfoMacros ( settings, str )
  {
    // When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
    // internally
    var
      formatter  = settings.fnFormatNumber,
      start      = settings._iDisplayStart+1,
      len        = settings._iDisplayLength,
      vis        = settings.fnRecordsDisplay(),
      all        = len === -1;

    return str.
      replace(/_START_/g, formatter.call( settings, start ) ).
      replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
      replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
      replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
      replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
      replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
  }



  /**
   * Draw the table for the first time, adding all required features
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnInitialise ( settings )
  {
    var i, iLen, iAjaxStart=settings.iInitDisplayStart;
    var columns = settings.aoColumns, column;
    var features = settings.oFeatures;
    var deferLoading = settings.bDeferLoading; // value modified by the draw

    /* Ensure that the table data is fully initialised */
    if ( ! settings.bInitialised ) {
      setTimeout( function(){ _fnInitialise( settings ); }, 200 );
      return;
    }

    /* Show the display HTML options */
    _fnAddOptionsHtml( settings );

    /* Build and draw the header / footer for the table */
    _fnBuildHead( settings );
    _fnDrawHead( settings, settings.aoHeader );
    _fnDrawHead( settings, settings.aoFooter );

    /* Okay to show that something is going on now */
    _fnProcessingDisplay( settings, true );

    /* Calculate sizes for columns */
    if ( features.bAutoWidth ) {
      _fnCalculateColumnWidths( settings );
    }

    for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
      column = columns[i];

      if ( column.sWidth ) {
        column.nTh.style.width = _fnStringToCss( column.sWidth );
      }
    }

    _fnCallbackFire( settings, null, 'preInit', [settings] );

    // If there is default sorting required - let's do it. The sort function
    // will do the drawing for us. Otherwise we draw the table regardless of the
    // Ajax source - this allows the table to look initialised for Ajax sourcing
    // data (show 'loading' message possibly)
    _fnReDraw( settings );

    // Server-side processing init complete is done by _fnAjaxUpdateDraw
    var dataSrc = _fnDataSource( settings );
    if ( dataSrc != 'ssp' || deferLoading ) {
      // if there is an ajax source load the data
      if ( dataSrc == 'ajax' ) {
        _fnBuildAjax( settings, [], function(json) {
          var aData = _fnAjaxDataSrc( settings, json );

          // Got the data - add it to the table
          for ( i=0 ; i<aData.length ; i++ ) {
            _fnAddData( settings, aData[i] );
          }

          // Reset the init display for cookie saving. We've already done
          // a filter, and therefore cleared it before. So we need to make
          // it appear 'fresh'
          settings.iInitDisplayStart = iAjaxStart;

          _fnReDraw( settings );

          _fnProcessingDisplay( settings, false );
          _fnInitComplete( settings, json );
        }, settings );
      }
      else {
        _fnProcessingDisplay( settings, false );
        _fnInitComplete( settings );
      }
    }
  }


  /**
   * Draw the table for the first time, adding all required features
   *  @param {object} oSettings dataTables settings object
   *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
   *    with client-side processing (optional)
   *  @memberof DataTable#oApi
   */
  function _fnInitComplete ( settings, json )
  {
    settings._bInitComplete = true;

    // When data was added after the initialisation (data or Ajax) we need to
    // calculate the column sizing
    if ( json || settings.oInit.aaData ) {
      _fnAdjustColumnSizing( settings );
    }

    _fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
    _fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
  }


  function _fnLengthChange ( settings, val )
  {
    var len = parseInt( val, 10 );
    settings._iDisplayLength = len;

    _fnLengthOverflow( settings );

    // Fire length change event
    _fnCallbackFire( settings, null, 'length', [settings, len] );
  }


  /**
   * Generate the node required for user display length changing
   *  @param {object} settings dataTables settings object
   *  @returns {node} Display length feature node
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlLength ( settings )
  {
    var
      classes  = settings.oClasses,
      tableId  = settings.sTableId,
      menu     = settings.aLengthMenu,
      d2       = Array.isArray( menu[0] ),
      lengths  = d2 ? menu[0] : menu,
      language = d2 ? menu[1] : menu;

    var select = $('<select/>', {
      'name':          tableId+'_length',
      'aria-controls': tableId,
      'class':         classes.sLengthSelect
    } );

    for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
      select[0][ i ] = new Option(
        typeof language[i] === 'number' ?
          settings.fnFormatNumber( language[i] ) :
          language[i],
        lengths[i]
      );
    }

    var div = $('<div><label/></div>').addClass( classes.sLength );
    if ( ! settings.aanFeatures.l ) {
      div[0].id = tableId+'_length';
    }

    div.children().append(
      settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
    );

    // Can't use `select` variable as user might provide their own and the
    // reference is broken by the use of outerHTML
    $('select', div)
      .val( settings._iDisplayLength )
      .on( 'change.DT', function(e) {
        _fnLengthChange( settings, $(this).val() );
        _fnDraw( settings );
      } );

    // Update node value whenever anything changes the table's length
    $(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
      if ( settings === s ) {
        $('select', div).val( len );
      }
    } );

    return div[0];
  }



  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Note that most of the paging logic is done in
   * DataTable.ext.pager
   */

  /**
   * Generate the node required for default pagination
   *  @param {object} oSettings dataTables settings object
   *  @returns {node} Pagination feature node
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlPaginate ( settings )
  {
    var
      type   = settings.sPaginationType,
      plugin = DataTable.ext.pager[ type ],
      modern = typeof plugin === 'function',
      redraw = function( settings ) {
        _fnDraw( settings );
      },
      node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
      features = settings.aanFeatures;

    if ( ! modern ) {
      plugin.fnInit( settings, node, redraw );
    }

    /* Add a draw callback for the pagination on first instance, to update the paging display */
    if ( ! features.p )
    {
      node.id = settings.sTableId+'_paginate';

      settings.aoDrawCallback.push( {
        "fn": function( settings ) {
          if ( modern ) {
            var
              start      = settings._iDisplayStart,
              len        = settings._iDisplayLength,
              visRecords = settings.fnRecordsDisplay(),
              all        = len === -1,
              page = all ? 0 : Math.ceil( start / len ),
              pages = all ? 1 : Math.ceil( visRecords / len ),
              buttons = plugin(page, pages),
              i, ien;

            for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
              _fnRenderer( settings, 'pageButton' )(
                settings, features.p[i], i, buttons, page, pages
              );
            }
          }
          else {
            plugin.fnUpdate( settings, redraw );
          }
        },
        "sName": "pagination"
      } );
    }

    return node;
  }


  /**
   * Alter the display settings to change the page
   *  @param {object} settings DataTables settings object
   *  @param {string|int} action Paging action to take: "first", "previous",
   *    "next" or "last" or page number to jump to (integer)
   *  @param [bool] redraw Automatically draw the update or not
   *  @returns {bool} true page has changed, false - no change
   *  @memberof DataTable#oApi
   */
  function _fnPageChange ( settings, action, redraw )
  {
    var
      start     = settings._iDisplayStart,
      len       = settings._iDisplayLength,
      records   = settings.fnRecordsDisplay();

    if ( records === 0 || len === -1 )
    {
      start = 0;
    }
    else if ( typeof action === "number" )
    {
      start = action * len;

      if ( start > records )
      {
        start = 0;
      }
    }
    else if ( action == "first" )
    {
      start = 0;
    }
    else if ( action == "previous" )
    {
      start = len >= 0 ?
        start - len :
        0;

      if ( start < 0 )
      {
        start = 0;
      }
    }
    else if ( action == "next" )
    {
      if ( start + len < records )
      {
        start += len;
      }
    }
    else if ( action == "last" )
    {
      start = Math.floor( (records-1) / len) * len;
    }
    else
    {
      _fnLog( settings, 0, "Unknown paging action: "+action, 5 );
    }

    var changed = settings._iDisplayStart !== start;
    settings._iDisplayStart = start;

    if ( changed ) {
      _fnCallbackFire( settings, null, 'page', [settings] );

      if ( redraw ) {
        _fnDraw( settings );
      }
    }
    else {
      // No change event - paging was called, but no change
      _fnCallbackFire( settings, null, 'page-nc', [settings] );
    }

    return changed;
  }



  /**
   * Generate the node required for the processing node
   *  @param {object} settings dataTables settings object
   *  @returns {node} Processing element
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlProcessing ( settings )
  {
    return $('<div/>', {
        'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
        'class': settings.oClasses.sProcessing
      } )
      .html( settings.oLanguage.sProcessing )
      .append('<div><div></div><div></div><div></div><div></div></div>')
      .insertBefore( settings.nTable )[0];
  }


  /**
   * Display or hide the processing indicator
   *  @param {object} settings dataTables settings object
   *  @param {bool} show Show the processing indicator (true) or not (false)
   *  @memberof DataTable#oApi
   */
  function _fnProcessingDisplay ( settings, show )
  {
    if ( settings.oFeatures.bProcessing ) {
      $(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
    }

    _fnCallbackFire( settings, null, 'processing', [settings, show] );
  }

  /**
   * Add any control elements for the table - specifically scrolling
   *  @param {object} settings dataTables settings object
   *  @returns {node} Node to add to the DOM
   *  @memberof DataTable#oApi
   */
  function _fnFeatureHtmlTable ( settings )
  {
    var table = $(settings.nTable);

    // Scrolling from here on in
    var scroll = settings.oScroll;

    if ( scroll.sX === '' && scroll.sY === '' ) {
      return settings.nTable;
    }

    var scrollX = scroll.sX;
    var scrollY = scroll.sY;
    var classes = settings.oClasses;
    var caption = table.children('caption');
    var captionSide = caption.length ? caption[0]._captionSide : null;
    var headerClone = $( table[0].cloneNode(false) );
    var footerClone = $( table[0].cloneNode(false) );
    var footer = table.children('tfoot');
    var _div = '<div/>';
    var size = function ( s ) {
      return !s ? null : _fnStringToCss( s );
    };

    if ( ! footer.length ) {
      footer = null;
    }

    /*
     * The HTML structure that we want to generate in this function is:
     *  div - scroller
     *    div - scroll head
     *      div - scroll head inner
     *        table - scroll head table
     *          thead - thead
     *    div - scroll body
     *      table - table (master table)
     *        thead - thead clone for sizing
     *        tbody - tbody
     *    div - scroll foot
     *      div - scroll foot inner
     *        table - scroll foot table
     *          tfoot - tfoot
     */
    var scroller = $( _div, { 'class': classes.sScrollWrapper } )
      .append(
        $(_div, { 'class': classes.sScrollHead } )
          .css( {
            overflow: 'hidden',
            position: 'relative',
            border: 0,
            width: scrollX ? size(scrollX) : '100%'
          } )
          .append(
            $(_div, { 'class': classes.sScrollHeadInner } )
              .css( {
                'box-sizing': 'content-box',
                width: scroll.sXInner || '100%'
              } )
              .append(
                headerClone
                  .removeAttr('id')
                  .css( 'margin-left', 0 )
                  .append( captionSide === 'top' ? caption : null )
                  .append(
                    table.children('thead')
                  )
              )
          )
      )
      .append(
        $(_div, { 'class': classes.sScrollBody } )
          .css( {
            position: 'relative',
            overflow: 'auto',
            width: size( scrollX )
          } )
          .append( table )
      );

    if ( footer ) {
      scroller.append(
        $(_div, { 'class': classes.sScrollFoot } )
          .css( {
            overflow: 'hidden',
            border: 0,
            width: scrollX ? size(scrollX) : '100%'
          } )
          .append(
            $(_div, { 'class': classes.sScrollFootInner } )
              .append(
                footerClone
                  .removeAttr('id')
                  .css( 'margin-left', 0 )
                  .append( captionSide === 'bottom' ? caption : null )
                  .append(
                    table.children('tfoot')
                  )
              )
          )
      );
    }

    var children = scroller.children();
    var scrollHead = children[0];
    var scrollBody = children[1];
    var scrollFoot = footer ? children[2] : null;

    // When the body is scrolled, then we also want to scroll the headers
    if ( scrollX ) {
      $(scrollBody).on( 'scroll.DT', function (e) {
        var scrollLeft = this.scrollLeft;

        scrollHead.scrollLeft = scrollLeft;

        if ( footer ) {
          scrollFoot.scrollLeft = scrollLeft;
        }
      } );
    }

    $(scrollBody).css('max-height', scrollY);
    if (! scroll.bCollapse) {
      $(scrollBody).css('height', scrollY);
    }

    settings.nScrollHead = scrollHead;
    settings.nScrollBody = scrollBody;
    settings.nScrollFoot = scrollFoot;

    // On redraw - align columns
    settings.aoDrawCallback.push( {
      "fn": _fnScrollDraw,
      "sName": "scrolling"
    } );

    return scroller[0];
  }



  /**
   * Update the header, footer and body tables for resizing - i.e. column
   * alignment.
   *
   * Welcome to the most horrible function DataTables. The process that this
   * function follows is basically:
   *   1. Re-create the table inside the scrolling div
   *   2. Take live measurements from the DOM
   *   3. Apply the measurements to align the columns
   *   4. Clean up
   *
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnScrollDraw ( settings )
  {
    // Given that this is such a monster function, a lot of variables are use
    // to try and keep the minimised size as small as possible
    var
      scroll         = settings.oScroll,
      scrollX        = scroll.sX,
      scrollXInner   = scroll.sXInner,
      scrollY        = scroll.sY,
      barWidth       = scroll.iBarWidth,
      divHeader      = $(settings.nScrollHead),
      divHeaderStyle = divHeader[0].style,
      divHeaderInner = divHeader.children('div'),
      divHeaderInnerStyle = divHeaderInner[0].style,
      divHeaderTable = divHeaderInner.children('table'),
      divBodyEl      = settings.nScrollBody,
      divBody        = $(divBodyEl),
      divBodyStyle   = divBodyEl.style,
      divFooter      = $(settings.nScrollFoot),
      divFooterInner = divFooter.children('div'),
      divFooterTable = divFooterInner.children('table'),
      header         = $(settings.nTHead),
      table          = $(settings.nTable),
      tableEl        = table[0],
      tableStyle     = tableEl.style,
      footer         = settings.nTFoot ? $(settings.nTFoot) : null,
      browser        = settings.oBrowser,
      ie67           = browser.bScrollOversize,
      dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
      headerTrgEls, footerTrgEls,
      headerSrcEls, footerSrcEls,
      headerCopy, footerCopy,
      headerWidths=[], footerWidths=[],
      headerContent=[], footerContent=[],
      idx, correction, sanityWidth,
      zeroOut = function(nSizer) {
        var style = nSizer.style;
        style.paddingTop = "0";
        style.paddingBottom = "0";
        style.borderTopWidth = "0";
        style.borderBottomWidth = "0";
        style.height = 0;
      };

    // If the scrollbar visibility has changed from the last draw, we need to
    // adjust the column sizes as the table width will have changed to account
    // for the scrollbar
    var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;

    if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
      settings.scrollBarVis = scrollBarVis;
      _fnAdjustColumnSizing( settings );
      return; // adjust column sizing will call this function again
    }
    else {
      settings.scrollBarVis = scrollBarVis;
    }

    /*
     * 1. Re-create the table inside the scrolling div
     */

    // Remove the old minimised thead and tfoot elements in the inner table
    table.children('thead, tfoot').remove();

    if ( footer ) {
      footerCopy = footer.clone().prependTo( table );
      footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
      footerSrcEls = footerCopy.find('tr');
      footerCopy.find('[id]').removeAttr('id');
    }

    // Clone the current header and footer elements and then place it into the inner table
    headerCopy = header.clone().prependTo( table );
    headerTrgEls = header.find('tr'); // original header is in its own table
    headerSrcEls = headerCopy.find('tr');
    headerCopy.find('th, td').removeAttr('tabindex');
    headerCopy.find('[id]').removeAttr('id');


    /*
     * 2. Take live measurements from the DOM - do not alter the DOM itself!
     */

    // Remove old sizing and apply the calculated column widths
    // Get the unique column headers in the newly created (cloned) header. We want to apply the
    // calculated sizes to this header
    if ( ! scrollX )
    {
      divBodyStyle.width = '100%';
      divHeader[0].style.width = '100%';
    }

    $.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
      idx = _fnVisibleToColumnIndex( settings, i );
      el.style.width = settings.aoColumns[idx].sWidth;
    } );

    if ( footer ) {
      _fnApplyToChildren( function(n) {
        n.style.width = "";
      }, footerSrcEls );
    }

    // Size the table as a whole
    sanityWidth = table.outerWidth();
    if ( scrollX === "" ) {
      // No x scrolling
      tableStyle.width = "100%";

      // IE7 will make the width of the table when 100% include the scrollbar
      // - which is shouldn't. When there is a scrollbar we need to take this
      // into account.
      if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
        divBody.css('overflow-y') == "scroll")
      ) {
        tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
      }

      // Recalculate the sanity width
      sanityWidth = table.outerWidth();
    }
    else if ( scrollXInner !== "" ) {
      // legacy x scroll inner has been given - use it
      tableStyle.width = _fnStringToCss(scrollXInner);

      // Recalculate the sanity width
      sanityWidth = table.outerWidth();
    }

    // Hidden header should have zero height, so remove padding and borders. Then
    // set the width based on the real headers

    // Apply all styles in one pass
    _fnApplyToChildren( zeroOut, headerSrcEls );

    // Read all widths in next pass
    _fnApplyToChildren( function(nSizer) {
      var style = window.getComputedStyle ?
        window.getComputedStyle(nSizer).width :
        _fnStringToCss( $(nSizer).width() );

      headerContent.push( nSizer.innerHTML );
      headerWidths.push( style );
    }, headerSrcEls );

    // Apply all widths in final pass
    _fnApplyToChildren( function(nToSize, i) {
      nToSize.style.width = headerWidths[i];
    }, headerTrgEls );

    $(headerSrcEls).css('height', 0);

    /* Same again with the footer if we have one */
    if ( footer )
    {
      _fnApplyToChildren( zeroOut, footerSrcEls );

      _fnApplyToChildren( function(nSizer) {
        footerContent.push( nSizer.innerHTML );
        footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
      }, footerSrcEls );

      _fnApplyToChildren( function(nToSize, i) {
        nToSize.style.width = footerWidths[i];
      }, footerTrgEls );

      $(footerSrcEls).height(0);
    }


    /*
     * 3. Apply the measurements
     */

    // "Hide" the header and footer that we used for the sizing. We need to keep
    // the content of the cell so that the width applied to the header and body
    // both match, but we want to hide it completely. We want to also fix their
    // width to what they currently are
    _fnApplyToChildren( function(nSizer, i) {
      nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
      nSizer.childNodes[0].style.height = "0";
      nSizer.childNodes[0].style.overflow = "hidden";
      nSizer.style.width = headerWidths[i];
    }, headerSrcEls );

    if ( footer )
    {
      _fnApplyToChildren( function(nSizer, i) {
        nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
        nSizer.childNodes[0].style.height = "0";
        nSizer.childNodes[0].style.overflow = "hidden";
        nSizer.style.width = footerWidths[i];
      }, footerSrcEls );
    }

    // Sanity check that the table is of a sensible width. If not then we are going to get
    // misalignment - try to prevent this by not allowing the table to shrink below its min width
    if ( Math.round(table.outerWidth()) < Math.round(sanityWidth) )
    {
      // The min width depends upon if we have a vertical scrollbar visible or not */
      correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
        divBody.css('overflow-y') == "scroll")) ?
          sanityWidth+barWidth :
          sanityWidth;

      // IE6/7 are a law unto themselves...
      if ( ie67 && (divBodyEl.scrollHeight >
        divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
      ) {
        tableStyle.width = _fnStringToCss( correction-barWidth );
      }

      // And give the user a warning that we've stopped the table getting too small
      if ( scrollX === "" || scrollXInner !== "" ) {
        _fnLog( settings, 1, 'Possible column misalignment', 6 );
      }
    }
    else
    {
      correction = '100%';
    }

    // Apply to the container elements
    divBodyStyle.width = _fnStringToCss( correction );
    divHeaderStyle.width = _fnStringToCss( correction );

    if ( footer ) {
      settings.nScrollFoot.style.width = _fnStringToCss( correction );
    }


    /*
     * 4. Clean up
     */
    if ( ! scrollY ) {
      /* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
       * the scrollbar height from the visible display, rather than adding it on. We need to
       * set the height in order to sort this. Don't want to do it in any other browsers.
       */
      if ( ie67 ) {
        divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
      }
    }

    /* Finally set the width's of the header and footer tables */
    var iOuterWidth = table.outerWidth();
    divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
    divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );

    // Figure out if there are scrollbar present - if so then we need a the header and footer to
    // provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
    var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
    var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
    divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";

    if ( footer ) {
      divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
      divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
      divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
    }

    // Correct DOM ordering for colgroup - comes before the thead
    table.children('colgroup').insertBefore( table.children('thead') );

    /* Adjust the position of the header in case we loose the y-scrollbar */
    divBody.trigger('scroll');

    // If sorting or filtering has occurred, jump the scrolling back to the top
    // only if we aren't holding the position
    if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
      divBodyEl.scrollTop = 0;
    }
  }



  /**
   * Apply a given function to the display child nodes of an element array (typically
   * TD children of TR rows
   *  @param {function} fn Method to apply to the objects
   *  @param array {nodes} an1 List of elements to look through for display children
   *  @param array {nodes} an2 Another list (identical structure to the first) - optional
   *  @memberof DataTable#oApi
   */
  function _fnApplyToChildren( fn, an1, an2 )
  {
    var index=0, i=0, iLen=an1.length;
    var nNode1, nNode2;

    while ( i < iLen ) {
      nNode1 = an1[i].firstChild;
      nNode2 = an2 ? an2[i].firstChild : null;

      while ( nNode1 ) {
        if ( nNode1.nodeType === 1 ) {
          if ( an2 ) {
            fn( nNode1, nNode2, index );
          }
          else {
            fn( nNode1, index );
          }

          index++;
        }

        nNode1 = nNode1.nextSibling;
        nNode2 = an2 ? nNode2.nextSibling : null;
      }

      i++;
    }
  }



  var __re_html_remove = /<.*?>/g;


  /**
   * Calculate the width of columns for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnCalculateColumnWidths ( oSettings )
  {
    var
      table = oSettings.nTable,
      columns = oSettings.aoColumns,
      scroll = oSettings.oScroll,
      scrollY = scroll.sY,
      scrollX = scroll.sX,
      scrollXInner = scroll.sXInner,
      columnCount = columns.length,
      visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
      headerCells = $('th', oSettings.nTHead),
      tableWidthAttr = table.getAttribute('width'), // from DOM element
      tableContainer = table.parentNode,
      userInputs = false,
      i, column, columnIdx, width, outerWidth,
      browser = oSettings.oBrowser,
      ie67 = browser.bScrollOversize;

    var styleWidth = table.style.width;
    if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
      tableWidthAttr = styleWidth;
    }

    /* Convert any user input sizes into pixel sizes */
    for ( i=0 ; i<visibleColumns.length ; i++ ) {
      column = columns[ visibleColumns[i] ];

      if ( column.sWidth !== null ) {
        column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );

        userInputs = true;
      }
    }

    /* If the number of columns in the DOM equals the number that we have to
     * process in DataTables, then we can use the offsets that are created by
     * the web- browser. No custom sizes can be set in order for this to happen,
     * nor scrolling used
     */
    if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
         columnCount == _fnVisbleColumns( oSettings ) &&
         columnCount == headerCells.length
    ) {
      for ( i=0 ; i<columnCount ; i++ ) {
        var colIdx = _fnVisibleToColumnIndex( oSettings, i );

        if ( colIdx !== null ) {
          columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
        }
      }
    }
    else
    {
      // Otherwise construct a single row, worst case, table with the widest
      // node in the data, assign any user defined widths, then insert it into
      // the DOM and allow the browser to do all the hard work of calculating
      // table widths
      var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
        .css( 'visibility', 'hidden' )
        .removeAttr( 'id' );

      // Clean up the table body
      tmpTable.find('tbody tr').remove();
      var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );

      // Clone the table header and footer - we can't use the header / footer
      // from the cloned table, since if scrolling is active, the table's
      // real header and footer are contained in different table tags
      tmpTable.find('thead, tfoot').remove();
      tmpTable
        .append( $(oSettings.nTHead).clone() )
        .append( $(oSettings.nTFoot).clone() );

      // Remove any assigned widths from the footer (from scrolling)
      tmpTable.find('tfoot th, tfoot td').css('width', '');

      // Apply custom sizing to the cloned header
      headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );

      for ( i=0 ; i<visibleColumns.length ; i++ ) {
        column = columns[ visibleColumns[i] ];

        headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
          _fnStringToCss( column.sWidthOrig ) :
          '';

        // For scrollX we need to force the column width otherwise the
        // browser will collapse it. If this width is smaller than the
        // width the column requires, then it will have no effect
        if ( column.sWidthOrig && scrollX ) {
          $( headerCells[i] ).append( $('<div/>').css( {
            width: column.sWidthOrig,
            margin: 0,
            padding: 0,
            border: 0,
            height: 1
          } ) );
        }
      }

      // Find the widest cell for each column and put it into the table
      if ( oSettings.aoData.length ) {
        for ( i=0 ; i<visibleColumns.length ; i++ ) {
          columnIdx = visibleColumns[i];
          column = columns[ columnIdx ];

          $( _fnGetWidestNode( oSettings, columnIdx ) )
            .clone( false )
            .append( column.sContentPadding )
            .appendTo( tr );
        }
      }

      // Tidy the temporary table - remove name attributes so there aren't
      // duplicated in the dom (radio elements for example)
      $('[name]', tmpTable).removeAttr('name');

      // Table has been built, attach to the document so we can work with it.
      // A holding element is used, positioned at the top of the container
      // with minimal height, so it has no effect on if the container scrolls
      // or not. Otherwise it might trigger scrolling when it actually isn't
      // needed
      var holder = $('<div/>').css( scrollX || scrollY ?
          {
            position: 'absolute',
            top: 0,
            left: 0,
            height: 1,
            right: 0,
            overflow: 'hidden'
          } :
          {}
        )
        .append( tmpTable )
        .appendTo( tableContainer );

      // When scrolling (X or Y) we want to set the width of the table as
      // appropriate. However, when not scrolling leave the table width as it
      // is. This results in slightly different, but I think correct behaviour
      if ( scrollX && scrollXInner ) {
        tmpTable.width( scrollXInner );
      }
      else if ( scrollX ) {
        tmpTable.css( 'width', 'auto' );
        tmpTable.removeAttr('width');

        // If there is no width attribute or style, then allow the table to
        // collapse
        if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
          tmpTable.width( tableContainer.clientWidth );
        }
      }
      else if ( scrollY ) {
        tmpTable.width( tableContainer.clientWidth );
      }
      else if ( tableWidthAttr ) {
        tmpTable.width( tableWidthAttr );
      }

      // Get the width of each column in the constructed table - we need to
      // know the inner width (so it can be assigned to the other table's
      // cells) and the outer width so we can calculate the full width of the
      // table. This is safe since DataTables requires a unique cell for each
      // column, but if ever a header can span multiple columns, this will
      // need to be modified.
      var total = 0;
      for ( i=0 ; i<visibleColumns.length ; i++ ) {
        var cell = $(headerCells[i]);
        var border = cell.outerWidth() - cell.width();

        // Use getBounding... where possible (not IE8-) because it can give
        // sub-pixel accuracy, which we then want to round up!
        var bounding = browser.bBounding ?
          Math.ceil( headerCells[i].getBoundingClientRect().width ) :
          cell.outerWidth();

        // Total is tracked to remove any sub-pixel errors as the outerWidth
        // of the table might not equal the total given here (IE!).
        total += bounding;

        // Width for each column to use
        columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
      }

      table.style.width = _fnStringToCss( total );

      // Finished with the table - ditch it
      holder.remove();
    }

    // If there is a width attr, we want to attach an event listener which
    // allows the table sizing to automatically adjust when the window is
    // resized. Use the width attr rather than CSS, since we can't know if the
    // CSS is a relative value or absolute - DOM read is always px.
    if ( tableWidthAttr ) {
      table.style.width = _fnStringToCss( tableWidthAttr );
    }

    if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
      var bindResize = function () {
        $(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
          _fnAdjustColumnSizing( oSettings );
        } ) );
      };

      // IE6/7 will crash if we bind a resize event handler on page load.
      // To be removed in 1.11 which drops IE6/7 support
      if ( ie67 ) {
        setTimeout( bindResize, 1000 );
      }
      else {
        bindResize();
      }

      oSettings._reszEvt = true;
    }
  }


  /**
   * Throttle the calls to a function. Arguments and context are maintained for
   * the throttled function
   *  @param {function} fn Function to be called
   *  @param {int} [freq=200] call frequency in mS
   *  @returns {function} wrapped function
   *  @memberof DataTable#oApi
   */
  var _fnThrottle = DataTable.util.throttle;


  /**
   * Convert a CSS unit width to pixels (e.g. 2em)
   *  @param {string} width width to be converted
   *  @param {node} parent parent to get the with for (required for relative widths) - optional
   *  @returns {int} width in pixels
   *  @memberof DataTable#oApi
   */
  function _fnConvertToWidth ( width, parent )
  {
    if ( ! width ) {
      return 0;
    }

    var n = $('<div/>')
      .css( 'width', _fnStringToCss( width ) )
      .appendTo( parent || document.body );

    var val = n[0].offsetWidth;
    n.remove();

    return val;
  }


  /**
   * Get the widest node
   *  @param {object} settings dataTables settings object
   *  @param {int} colIdx column of interest
   *  @returns {node} widest table node
   *  @memberof DataTable#oApi
   */
  function _fnGetWidestNode( settings, colIdx )
  {
    var idx = _fnGetMaxLenString( settings, colIdx );
    if ( idx < 0 ) {
      return null;
    }

    var data = settings.aoData[ idx ];
    return ! data.nTr ? // Might not have been created when deferred rendering
      $('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
      data.anCells[ colIdx ];
  }


  /**
   * Get the maximum strlen for each data column
   *  @param {object} settings dataTables settings object
   *  @param {int} colIdx column of interest
   *  @returns {string} max string length for each column
   *  @memberof DataTable#oApi
   */
  function _fnGetMaxLenString( settings, colIdx )
  {
    var s, max=-1, maxIdx = -1;

    for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
      s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
      s = s.replace( __re_html_remove, '' );
      s = s.replace( /&nbsp;/g, ' ' );

      if ( s.length > max ) {
        max = s.length;
        maxIdx = i;
      }
    }

    return maxIdx;
  }


  /**
   * Append a CSS unit (only if required) to a string
   *  @param {string} value to css-ify
   *  @returns {string} value with css unit
   *  @memberof DataTable#oApi
   */
  function _fnStringToCss( s )
  {
    if ( s === null ) {
      return '0px';
    }

    if ( typeof s == 'number' ) {
      return s < 0 ?
        '0px' :
        s+'px';
    }

    // Check it has a unit character already
    return s.match(/\d$/) ?
      s+'px' :
      s;
  }



  function _fnSortFlatten ( settings )
  {
    var
      i, iLen, k, kLen,
      aSort = [],
      aiOrig = [],
      aoColumns = settings.aoColumns,
      aDataSort, iCol, sType, srcCol,
      fixed = settings.aaSortingFixed,
      fixedObj = $.isPlainObject( fixed ),
      nestedSort = [],
      add = function ( a ) {
        if ( a.length && ! Array.isArray( a[0] ) ) {
          // 1D array
          nestedSort.push( a );
        }
        else {
          // 2D array
          $.merge( nestedSort, a );
        }
      };

    // Build the sort array, with pre-fix and post-fix options if they have been
    // specified
    if ( Array.isArray( fixed ) ) {
      add( fixed );
    }

    if ( fixedObj && fixed.pre ) {
      add( fixed.pre );
    }

    add( settings.aaSorting );

    if (fixedObj && fixed.post ) {
      add( fixed.post );
    }

    for ( i=0 ; i<nestedSort.length ; i++ )
    {
      srcCol = nestedSort[i][0];
      aDataSort = aoColumns[ srcCol ].aDataSort;

      for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
      {
        iCol = aDataSort[k];
        sType = aoColumns[ iCol ].sType || 'string';

        if ( nestedSort[i]._idx === undefined ) {
          nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
        }

        aSort.push( {
          src:       srcCol,
          col:       iCol,
          dir:       nestedSort[i][1],
          index:     nestedSort[i]._idx,
          type:      sType,
          formatter: DataTable.ext.type.order[ sType+"-pre" ]
        } );
      }
    }

    return aSort;
  }

  /**
   * Change the order of the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   *  @todo This really needs split up!
   */
  function _fnSort ( oSettings )
  {
    var
      i, ien, iLen, j, jLen, k, kLen,
      sDataType, nTh,
      aiOrig = [],
      oExtSort = DataTable.ext.type.order,
      aoData = oSettings.aoData,
      aoColumns = oSettings.aoColumns,
      aDataSort, data, iCol, sType, oSort,
      formatters = 0,
      sortCol,
      displayMaster = oSettings.aiDisplayMaster,
      aSort;

    // Resolve any column types that are unknown due to addition or invalidation
    // @todo Can this be moved into a 'data-ready' handler which is called when
    //   data is going to be used in the table?
    _fnColumnTypes( oSettings );

    aSort = _fnSortFlatten( oSettings );

    for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
      sortCol = aSort[i];

      // Track if we can use the fast sort algorithm
      if ( sortCol.formatter ) {
        formatters++;
      }

      // Load the data needed for the sort, for each cell
      _fnSortData( oSettings, sortCol.col );
    }

    /* No sorting required if server-side or no sorting array */
    if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
    {
      // Create a value - key array of the current row positions such that we can use their
      // current position during the sort, if values match, in order to perform stable sorting
      for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
        aiOrig[ displayMaster[i] ] = i;
      }

      /* Do the sort - here we want multi-column sorting based on a given data source (column)
       * and sorting function (from oSort) in a certain direction. It's reasonably complex to
       * follow on it's own, but this is what we want (example two column sorting):
       *  fnLocalSorting = function(a,b){
       *    var iTest;
       *    iTest = oSort['string-asc']('data11', 'data12');
       *      if (iTest !== 0)
       *        return iTest;
       *    iTest = oSort['numeric-desc']('data21', 'data22');
       *    if (iTest !== 0)
       *      return iTest;
       *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
       *  }
       * Basically we have a test for each sorting column, if the data in that column is equal,
       * test the next column. If all columns match, then we use a numeric sort on the row
       * positions in the original data array to provide a stable sort.
       *
       * Note - I know it seems excessive to have two sorting methods, but the first is around
       * 15% faster, so the second is only maintained for backwards compatibility with sorting
       * methods which do not have a pre-sort formatting function.
       */
      if ( formatters === aSort.length ) {
        // All sort types have formatting functions
        displayMaster.sort( function ( a, b ) {
          var
            x, y, k, test, sort,
            len=aSort.length,
            dataA = aoData[a]._aSortData,
            dataB = aoData[b]._aSortData;

          for ( k=0 ; k<len ; k++ ) {
            sort = aSort[k];

            x = dataA[ sort.col ];
            y = dataB[ sort.col ];

            test = x<y ? -1 : x>y ? 1 : 0;
            if ( test !== 0 ) {
              return sort.dir === 'asc' ? test : -test;
            }
          }

          x = aiOrig[a];
          y = aiOrig[b];
          return x<y ? -1 : x>y ? 1 : 0;
        } );
      }
      else {
        // Depreciated - remove in 1.11 (providing a plug-in option)
        // Not all sort types have formatting methods, so we have to call their sorting
        // methods.
        displayMaster.sort( function ( a, b ) {
          var
            x, y, k, l, test, sort, fn,
            len=aSort.length,
            dataA = aoData[a]._aSortData,
            dataB = aoData[b]._aSortData;

          for ( k=0 ; k<len ; k++ ) {
            sort = aSort[k];

            x = dataA[ sort.col ];
            y = dataB[ sort.col ];

            fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
            test = fn( x, y );
            if ( test !== 0 ) {
              return test;
            }
          }

          x = aiOrig[a];
          y = aiOrig[b];
          return x<y ? -1 : x>y ? 1 : 0;
        } );
      }
    }

    /* Tell the draw function that we have sorted the data */
    oSettings.bSorted = true;
  }


  function _fnSortAria ( settings )
  {
    var label;
    var nextSort;
    var columns = settings.aoColumns;
    var aSort = _fnSortFlatten( settings );
    var oAria = settings.oLanguage.oAria;

    // ARIA attributes - need to loop all columns, to update all (removing old
    // attributes as needed)
    for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
    {
      var col = columns[i];
      var asSorting = col.asSorting;
      var sTitle = col.ariaTitle || col.sTitle.replace( /<.*?>/g, "" );
      var th = col.nTh;

      // IE7 is throwing an error when setting these properties with jQuery's
      // attr() and removeAttr() methods...
      th.removeAttribute('aria-sort');

      /* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
      if ( col.bSortable ) {
        if ( aSort.length > 0 && aSort[0].col == i ) {
          th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
          nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
        }
        else {
          nextSort = asSorting[0];
        }

        label = sTitle + ( nextSort === "asc" ?
          oAria.sSortAscending :
          oAria.sSortDescending
        );
      }
      else {
        label = sTitle;
      }

      th.setAttribute('aria-label', label);
    }
  }


  /**
   * Function to run on user sort request
   *  @param {object} settings dataTables settings object
   *  @param {node} attachTo node to attach the handler to
   *  @param {int} colIdx column sorting index
   *  @param {boolean} [append=false] Append the requested sort to the existing
   *    sort if true (i.e. multi-column sort)
   *  @param {function} [callback] callback function
   *  @memberof DataTable#oApi
   */
  function _fnSortListener ( settings, colIdx, append, callback )
  {
    var col = settings.aoColumns[ colIdx ];
    var sorting = settings.aaSorting;
    var asSorting = col.asSorting;
    var nextSortIdx;
    var next = function ( a, overflow ) {
      var idx = a._idx;
      if ( idx === undefined ) {
        idx = $.inArray( a[1], asSorting );
      }

      return idx+1 < asSorting.length ?
        idx+1 :
        overflow ?
          null :
          0;
    };

    // Convert to 2D array if needed
    if ( typeof sorting[0] === 'number' ) {
      sorting = settings.aaSorting = [ sorting ];
    }

    // If appending the sort then we are multi-column sorting
    if ( append && settings.oFeatures.bSortMulti ) {
      // Are we already doing some kind of sort on this column?
      var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );

      if ( sortIdx !== -1 ) {
        // Yes, modify the sort
        nextSortIdx = next( sorting[sortIdx], true );

        if ( nextSortIdx === null && sorting.length === 1 ) {
          nextSortIdx = 0; // can't remove sorting completely
        }

        if ( nextSortIdx === null ) {
          sorting.splice( sortIdx, 1 );
        }
        else {
          sorting[sortIdx][1] = asSorting[ nextSortIdx ];
          sorting[sortIdx]._idx = nextSortIdx;
        }
      }
      else {
        // No sort on this column yet
        sorting.push( [ colIdx, asSorting[0], 0 ] );
        sorting[sorting.length-1]._idx = 0;
      }
    }
    else if ( sorting.length && sorting[0][0] == colIdx ) {
      // Single column - already sorting on this column, modify the sort
      nextSortIdx = next( sorting[0] );

      sorting.length = 1;
      sorting[0][1] = asSorting[ nextSortIdx ];
      sorting[0]._idx = nextSortIdx;
    }
    else {
      // Single column - sort only on this column
      sorting.length = 0;
      sorting.push( [ colIdx, asSorting[0] ] );
      sorting[0]._idx = 0;
    }

    // Run the sort by calling a full redraw
    _fnReDraw( settings );

    // callback used for async user interaction
    if ( typeof callback == 'function' ) {
      callback( settings );
    }
  }


  /**
   * Attach a sort handler (click) to a node
   *  @param {object} settings dataTables settings object
   *  @param {node} attachTo node to attach the handler to
   *  @param {int} colIdx column sorting index
   *  @param {function} [callback] callback function
   *  @memberof DataTable#oApi
   */
  function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
  {
    var col = settings.aoColumns[ colIdx ];

    _fnBindAction( attachTo, {}, function (e) {
      /* If the column is not sortable - don't to anything */
      if ( col.bSortable === false ) {
        return;
      }

      // If processing is enabled use a timeout to allow the processing
      // display to be shown - otherwise to it synchronously
      if ( settings.oFeatures.bProcessing ) {
        _fnProcessingDisplay( settings, true );

        setTimeout( function() {
          _fnSortListener( settings, colIdx, e.shiftKey, callback );

          // In server-side processing, the draw callback will remove the
          // processing display
          if ( _fnDataSource( settings ) !== 'ssp' ) {
            _fnProcessingDisplay( settings, false );
          }
        }, 0 );
      }
      else {
        _fnSortListener( settings, colIdx, e.shiftKey, callback );
      }
    } );
  }


  /**
   * Set the sorting classes on table's body, Note: it is safe to call this function
   * when bSort and bSortClasses are false
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnSortingClasses( settings )
  {
    var oldSort = settings.aLastSort;
    var sortClass = settings.oClasses.sSortColumn;
    var sort = _fnSortFlatten( settings );
    var features = settings.oFeatures;
    var i, ien, colIdx;

    if ( features.bSort && features.bSortClasses ) {
      // Remove old sorting classes
      for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
        colIdx = oldSort[i].src;

        // Remove column sorting
        $( _pluck( settings.aoData, 'anCells', colIdx ) )
          .removeClass( sortClass + (i<2 ? i+1 : 3) );
      }

      // Add new column sorting
      for ( i=0, ien=sort.length ; i<ien ; i++ ) {
        colIdx = sort[i].src;

        $( _pluck( settings.aoData, 'anCells', colIdx ) )
          .addClass( sortClass + (i<2 ? i+1 : 3) );
      }
    }

    settings.aLastSort = sort;
  }


  // Get the data to sort a column, be it from cache, fresh (populating the
  // cache), or from a sort formatter
  function _fnSortData( settings, idx )
  {
    // Custom sorting function - provided by the sort data type
    var column = settings.aoColumns[ idx ];
    var customSort = DataTable.ext.order[ column.sSortDataType ];
    var customData;

    if ( customSort ) {
      customData = customSort.call( settings.oInstance, settings, idx,
        _fnColumnIndexToVisible( settings, idx )
      );
    }

    // Use / populate cache
    var row, cellData;
    var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];

    for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
      row = settings.aoData[i];

      if ( ! row._aSortData ) {
        row._aSortData = [];
      }

      if ( ! row._aSortData[idx] || customSort ) {
        cellData = customSort ?
          customData[i] : // If there was a custom sort function, use data from there
          _fnGetCellData( settings, i, idx, 'sort' );

        row._aSortData[ idx ] = formatter ?
          formatter( cellData ) :
          cellData;
      }
    }
  }



  /**
   * Save the state of a table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */
  function _fnSaveState ( settings )
  {
    if (settings._bLoadingState) {
      return;
    }

    /* Store the interesting variables */
    var state = {
      time:    +new Date(),
      start:   settings._iDisplayStart,
      length:  settings._iDisplayLength,
      order:   $.extend( true, [], settings.aaSorting ),
      search:  _fnSearchToCamel( settings.oPreviousSearch ),
      columns: $.map( settings.aoColumns, function ( col, i ) {
        return {
          visible: col.bVisible,
          search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
        };
      } )
    };

    settings.oSavedState = state;
    _fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );

    if ( settings.oFeatures.bStateSave && !settings.bDestroying )
    {
      settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
    }
  }


  /**
   * Attempt to load a saved table state
   *  @param {object} oSettings dataTables settings object
   *  @param {object} oInit DataTables init object so we can override settings
   *  @param {function} callback Callback to execute when the state has been loaded
   *  @memberof DataTable#oApi
   */
  function _fnLoadState ( settings, oInit, callback )
  {
    if ( ! settings.oFeatures.bStateSave ) {
      callback();
      return;
    }

    var loaded = function(state) {
      _fnImplementState(settings, state, callback);
    }

    var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );

    if ( state !== undefined ) {
      _fnImplementState( settings, state, callback );
    }
    // otherwise, wait for the loaded callback to be executed

    return true;
  }

  function _fnImplementState ( settings, s, callback) {
    var i, ien;
    var columns = settings.aoColumns;
    settings._bLoadingState = true;

    // When StateRestore was introduced the state could now be implemented at any time
    // Not just initialisation. To do this an api instance is required in some places
    var api = settings._bInitComplete ? new DataTable.Api(settings) : null;

    if ( ! s || ! s.time ) {
      settings._bLoadingState = false;
      callback();
      return;
    }

    // Allow custom and plug-in manipulation functions to alter the saved data set and
    // cancelling of loading by returning false
    var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
    if ( $.inArray( false, abStateLoad ) !== -1 ) {
      settings._bLoadingState = false;
      callback();
      return;
    }

    // Reject old data
    var duration = settings.iStateDuration;
    if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
      settings._bLoadingState = false;
      callback();
      return;
    }

    // Number of columns have changed - all bets are off, no restore of settings
    if ( s.columns && columns.length !== s.columns.length ) {
      settings._bLoadingState = false;
      callback();
      return;
    }

    // Store the saved state so it might be accessed at any time
    settings.oLoadedState = $.extend( true, {}, s );

    // Page Length
    if ( s.length !== undefined ) {
      // If already initialised just set the value directly so that the select element is also updated
      if (api) {
        api.page.len(s.length)
      }
      else {
        settings._iDisplayLength   = s.length;
      }
    }

    // Restore key features - todo - for 1.11 this needs to be done by
    // subscribed events
    if ( s.start !== undefined ) {
      if(api === null) {
        settings._iDisplayStart    = s.start;
        settings.iInitDisplayStart = s.start;
      }
      else {
        _fnPageChange(settings, s.start/settings._iDisplayLength);
      }
    }

    // Order
    if ( s.order !== undefined ) {
      settings.aaSorting = [];
      $.each( s.order, function ( i, col ) {
        settings.aaSorting.push( col[0] >= columns.length ?
          [ 0, col[1] ] :
          col
        );
      } );
    }

    // Search
    if ( s.search !== undefined ) {
      $.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
    }

    // Columns
    if ( s.columns ) {
      for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
        var col = s.columns[i];

        // Visibility
        if ( col.visible !== undefined ) {
          // If the api is defined, the table has been initialised so we need to use it rather than internal settings
          if (api) {
            // Don't redraw the columns on every iteration of this loop, we will do this at the end instead
            api.column(i).visible(col.visible, false);
          }
          else {
            columns[i].bVisible = col.visible;
          }
        }

        // Search
        if ( col.search !== undefined ) {
          $.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
        }
      }

      // If the api is defined then we need to adjust the columns once the visibility has been changed
      if (api) {
        api.columns.adjust();
      }
    }

    settings._bLoadingState = false;
    _fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
    callback();
  };


  /**
   * Return the settings object for a particular table
   *  @param {node} table table we are using as a dataTable
   *  @returns {object} Settings object - or null if not found
   *  @memberof DataTable#oApi
   */
  function _fnSettingsFromNode ( table )
  {
    var settings = DataTable.settings;
    var idx = $.inArray( table, _pluck( settings, 'nTable' ) );

    return idx !== -1 ?
      settings[ idx ] :
      null;
  }


  /**
   * Log an error message
   *  @param {object} settings dataTables settings object
   *  @param {int} level log error messages, or display them to the user
   *  @param {string} msg error message
   *  @param {int} tn Technical note id to get more information about the error.
   *  @memberof DataTable#oApi
   */
  function _fnLog( settings, level, msg, tn )
  {
    msg = 'DataTables warning: '+
      (settings ? 'table id='+settings.sTableId+' - ' : '')+msg;

    if ( tn ) {
      msg += '. For more information about this error, please see '+
      'http://datatables.net/tn/'+tn;
    }

    if ( ! level  ) {
      // Backwards compatibility pre 1.10
      var ext = DataTable.ext;
      var type = ext.sErrMode || ext.errMode;

      if ( settings ) {
        _fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
      }

      if ( type == 'alert' ) {
        alert( msg );
      }
      else if ( type == 'throw' ) {
        throw new Error(msg);
      }
      else if ( typeof type == 'function' ) {
        type( settings, tn, msg );
      }
    }
    else if ( window.console && console.log ) {
      console.log( msg );
    }
  }


  /**
   * See if a property is defined on one object, if so assign it to the other object
   *  @param {object} ret target object
   *  @param {object} src source object
   *  @param {string} name property
   *  @param {string} [mappedName] name to map too - optional, name used if not given
   *  @memberof DataTable#oApi
   */
  function _fnMap( ret, src, name, mappedName )
  {
    if ( Array.isArray( name ) ) {
      $.each( name, function (i, val) {
        if ( Array.isArray( val ) ) {
          _fnMap( ret, src, val[0], val[1] );
        }
        else {
          _fnMap( ret, src, val );
        }
      } );

      return;
    }

    if ( mappedName === undefined ) {
      mappedName = name;
    }

    if ( src[name] !== undefined ) {
      ret[mappedName] = src[name];
    }
  }


  /**
   * Extend objects - very similar to jQuery.extend, but deep copy objects, and
   * shallow copy arrays. The reason we need to do this, is that we don't want to
   * deep copy array init values (such as aaSorting) since the dev wouldn't be
   * able to override them, but we do want to deep copy arrays.
   *  @param {object} out Object to extend
   *  @param {object} extender Object from which the properties will be applied to
   *      out
   *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
   *      independent copy with the exception of the `data` or `aaData` parameters
   *      if they are present. This is so you can pass in a collection to
   *      DataTables and have that used as your data source without breaking the
   *      references
   *  @returns {object} out Reference, just for convenience - out === the return.
   *  @memberof DataTable#oApi
   *  @todo This doesn't take account of arrays inside the deep copied objects.
   */
  function _fnExtend( out, extender, breakRefs )
  {
    var val;

    for ( var prop in extender ) {
      if ( extender.hasOwnProperty(prop) ) {
        val = extender[prop];

        if ( $.isPlainObject( val ) ) {
          if ( ! $.isPlainObject( out[prop] ) ) {
            out[prop] = {};
          }
          $.extend( true, out[prop], val );
        }
        else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && Array.isArray(val) ) {
          out[prop] = val.slice();
        }
        else {
          out[prop] = val;
        }
      }
    }

    return out;
  }


  /**
   * Bind an event handers to allow a click or return key to activate the callback.
   * This is good for accessibility since a return on the keyboard will have the
   * same effect as a click, if the element has focus.
   *  @param {element} n Element to bind the action to
   *  @param {object} oData Data object to pass to the triggered function
   *  @param {function} fn Callback function for when the event is triggered
   *  @memberof DataTable#oApi
   */
  function _fnBindAction( n, oData, fn )
  {
    $(n)
      .on( 'click.DT', oData, function (e) {
          $(n).trigger('blur'); // Remove focus outline for mouse users
          fn(e);
        } )
      .on( 'keypress.DT', oData, function (e){
          if ( e.which === 13 ) {
            e.preventDefault();
            fn(e);
          }
        } )
      .on( 'selectstart.DT', function () {
          /* Take the brutal approach to cancelling text selection */
          return false;
        } );
  }


  /**
   * Register a callback function. Easily allows a callback function to be added to
   * an array store of callback functions that can then all be called together.
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sStore Name of the array storage for the callbacks in oSettings
   *  @param {function} fn Function to be called back
   *  @param {string} sName Identifying name for the callback (i.e. a label)
   *  @memberof DataTable#oApi
   */
  function _fnCallbackReg( oSettings, sStore, fn, sName )
  {
    if ( fn )
    {
      oSettings[sStore].push( {
        "fn": fn,
        "sName": sName
      } );
    }
  }


  /**
   * Fire callback functions and trigger events. Note that the loop over the
   * callback array store is done backwards! Further note that you do not want to
   * fire off triggers in time sensitive applications (for example cell creation)
   * as its slow.
   *  @param {object} settings dataTables settings object
   *  @param {string} callbackArr Name of the array storage for the callbacks in
   *      oSettings
   *  @param {string} eventName Name of the jQuery custom event to trigger. If
   *      null no trigger is fired
   *  @param {array} args Array of arguments to pass to the callback function /
   *      trigger
   *  @memberof DataTable#oApi
   */
  function _fnCallbackFire( settings, callbackArr, eventName, args )
  {
    var ret = [];

    if ( callbackArr ) {
      ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
        return val.fn.apply( settings.oInstance, args );
      } );
    }

    if ( eventName !== null ) {
      var e = $.Event( eventName+'.dt' );

      $(settings.nTable).trigger( e, args );

      ret.push( e.result );
    }

    return ret;
  }


  function _fnLengthOverflow ( settings )
  {
    var
      start = settings._iDisplayStart,
      end = settings.fnDisplayEnd(),
      len = settings._iDisplayLength;

    /* If we have space to show extra rows (backing up from the end point - then do so */
    if ( start >= end )
    {
      start = end - len;
    }

    // Keep the start record on the current page
    start -= (start % len);

    if ( len === -1 || start < 0 )
    {
      start = 0;
    }

    settings._iDisplayStart = start;
  }


  function _fnRenderer( settings, type )
  {
    var renderer = settings.renderer;
    var host = DataTable.ext.renderer[type];

    if ( $.isPlainObject( renderer ) && renderer[type] ) {
      // Specific renderer for this type. If available use it, otherwise use
      // the default.
      return host[renderer[type]] || host._;
    }
    else if ( typeof renderer === 'string' ) {
      // Common renderer - if there is one available for this type use it,
      // otherwise use the default
      return host[renderer] || host._;
    }

    // Use the default
    return host._;
  }


  /**
   * Detect the data source being used for the table. Used to simplify the code
   * a little (ajax) and to make it compress a little smaller.
   *
   *  @param {object} settings dataTables settings object
   *  @returns {string} Data source
   *  @memberof DataTable#oApi
   */
  function _fnDataSource ( settings )
  {
    if ( settings.oFeatures.bServerSide ) {
      return 'ssp';
    }
    else if ( settings.ajax || settings.sAjaxSource ) {
      return 'ajax';
    }
    return 'dom';
  }




  /**
   * Computed structure of the DataTables API, defined by the options passed to
   * `DataTable.Api.register()` when building the API.
   *
   * The structure is built in order to speed creation and extension of the Api
   * objects since the extensions are effectively pre-parsed.
   *
   * The array is an array of objects with the following structure, where this
   * base array represents the Api prototype base:
   *
   *     [
   *       {
   *         name:      'data'                -- string   - Property name
   *         val:       function () {},       -- function - Api method (or undefined if just an object
   *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
   *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
   *       },
   *       {
   *         name:     'row'
   *         val:       {},
   *         methodExt: [ ... ],
   *         propExt:   [
   *           {
   *             name:      'data'
   *             val:       function () {},
   *             methodExt: [ ... ],
   *             propExt:   [ ... ]
   *           },
   *           ...
   *         ]
   *       }
   *     ]
   *
   * @type {Array}
   * @ignore
   */
  var __apiStruct = [];


  /**
   * `Array.prototype` reference.
   *
   * @type object
   * @ignore
   */
  var __arrayProto = Array.prototype;


  /**
   * Abstraction for `context` parameter of the `Api` constructor to allow it to
   * take several different forms for ease of use.
   *
   * Each of the input parameter types will be converted to a DataTables settings
   * object where possible.
   *
   * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
   *   of:
   *
   *   * `string` - jQuery selector. Any DataTables' matching the given selector
   *     with be found and used.
   *   * `node` - `TABLE` node which has already been formed into a DataTable.
   *   * `jQuery` - A jQuery object of `TABLE` nodes.
   *   * `object` - DataTables settings object
   *   * `DataTables.Api` - API instance
   * @return {array|null} Matching DataTables settings objects. `null` or
   *   `undefined` is returned if no matching DataTable is found.
   * @ignore
   */
  var _toSettings = function ( mixed )
  {
    var idx, jq;
    var settings = DataTable.settings;
    var tables = $.map( settings, function (el, i) {
      return el.nTable;
    } );

    if ( ! mixed ) {
      return [];
    }
    else if ( mixed.nTable && mixed.oApi ) {
      // DataTables settings object
      return [ mixed ];
    }
    else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
      // Table node
      idx = $.inArray( mixed, tables );
      return idx !== -1 ? [ settings[idx] ] : null;
    }
    else if ( mixed && typeof mixed.settings === 'function' ) {
      return mixed.settings().toArray();
    }
    else if ( typeof mixed === 'string' ) {
      // jQuery selector
      jq = $(mixed);
    }
    else if ( mixed instanceof $ ) {
      // jQuery object (also DataTables instance)
      jq = mixed;
    }

    if ( jq ) {
      return jq.map( function(i) {
        idx = $.inArray( this, tables );
        return idx !== -1 ? settings[idx] : null;
      } ).toArray();
    }
  };


  /**
   * DataTables API class - used to control and interface with  one or more
   * DataTables enhanced tables.
   *
   * The API class is heavily based on jQuery, presenting a chainable interface
   * that you can use to interact with tables. Each instance of the API class has
   * a "context" - i.e. the tables that it will operate on. This could be a single
   * table, all tables on a page or a sub-set thereof.
   *
   * Additionally the API is designed to allow you to easily work with the data in
   * the tables, retrieving and manipulating it as required. This is done by
   * presenting the API class as an array like interface. The contents of the
   * array depend upon the actions requested by each method (for example
   * `rows().nodes()` will return an array of nodes, while `rows().data()` will
   * return an array of objects or arrays depending upon your table's
   * configuration). The API object has a number of array like methods (`push`,
   * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
   * `unique` etc) to assist your working with the data held in a table.
   *
   * Most methods (those which return an Api instance) are chainable, which means
   * the return from a method call also has all of the methods available that the
   * top level object had. For example, these two calls are equivalent:
   *
   *     // Not chained
   *     api.row.add( {...} );
   *     api.draw();
   *
   *     // Chained
   *     api.row.add( {...} ).draw();
   *
   * @class DataTable.Api
   * @param {array|object|string|jQuery} context DataTable identifier. This is
   *   used to define which DataTables enhanced tables this API will operate on.
   *   Can be one of:
   *
   *   * `string` - jQuery selector. Any DataTables' matching the given selector
   *     with be found and used.
   *   * `node` - `TABLE` node which has already been formed into a DataTable.
   *   * `jQuery` - A jQuery object of `TABLE` nodes.
   *   * `object` - DataTables settings object
   * @param {array} [data] Data to initialise the Api instance with.
   *
   * @example
   *   // Direct initialisation during DataTables construction
   *   var api = $('#example').DataTable();
   *
   * @example
   *   // Initialisation using a DataTables jQuery object
   *   var api = $('#example').dataTable().api();
   *
   * @example
   *   // Initialisation as a constructor
   *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
   */
  _Api = function ( context, data )
  {
    if ( ! (this instanceof _Api) ) {
      return new _Api( context, data );
    }

    var settings = [];
    var ctxSettings = function ( o ) {
      var a = _toSettings( o );
      if ( a ) {
        settings.push.apply( settings, a );
      }
    };

    if ( Array.isArray( context ) ) {
      for ( var i=0, ien=context.length ; i<ien ; i++ ) {
        ctxSettings( context[i] );
      }
    }
    else {
      ctxSettings( context );
    }

    // Remove duplicates
    this.context = _unique( settings );

    // Initial data
    if ( data ) {
      $.merge( this, data );
    }

    // selector
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };

    _Api.extend( this, this, __apiStruct );
  };

  DataTable.Api = _Api;

  // Don't destroy the existing prototype, just extend it. Required for jQuery 2's
  // isPlainObject.
  $.extend( _Api.prototype, {
    any: function ()
    {
      return this.count() !== 0;
    },


    concat:  __arrayProto.concat,


    context: [], // array of table settings objects


    count: function ()
    {
      return this.flatten().length;
    },


    each: function ( fn )
    {
      for ( var i=0, ien=this.length ; i<ien; i++ ) {
        fn.call( this, this[i], i, this );
      }

      return this;
    },


    eq: function ( idx )
    {
      var ctx = this.context;

      return ctx.length > idx ?
        new _Api( ctx[idx], this[idx] ) :
        null;
    },


    filter: function ( fn )
    {
      var a = [];

      if ( __arrayProto.filter ) {
        a = __arrayProto.filter.call( this, fn, this );
      }
      else {
        // Compatibility for browsers without EMCA-252-5 (JS 1.6)
        for ( var i=0, ien=this.length ; i<ien ; i++ ) {
          if ( fn.call( this, this[i], i, this ) ) {
            a.push( this[i] );
          }
        }
      }

      return new _Api( this.context, a );
    },


    flatten: function ()
    {
      var a = [];
      return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
    },


    join:    __arrayProto.join,


    indexOf: __arrayProto.indexOf || function (obj, start)
    {
      for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
        if ( this[i] === obj ) {
          return i;
        }
      }
      return -1;
    },

    iterator: function ( flatten, type, fn, alwaysNew ) {
      var
        a = [], ret,
        i, ien, j, jen,
        context = this.context,
        rows, items, item,
        selector = this.selector;

      // Argument shifting
      if ( typeof flatten === 'string' ) {
        alwaysNew = fn;
        fn = type;
        type = flatten;
        flatten = false;
      }

      for ( i=0, ien=context.length ; i<ien ; i++ ) {
        var apiInst = new _Api( context[i] );

        if ( type === 'table' ) {
          ret = fn.call( apiInst, context[i], i );

          if ( ret !== undefined ) {
            a.push( ret );
          }
        }
        else if ( type === 'columns' || type === 'rows' ) {
          // this has same length as context - one entry for each table
          ret = fn.call( apiInst, context[i], this[i], i );

          if ( ret !== undefined ) {
            a.push( ret );
          }
        }
        else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
          // columns and rows share the same structure.
          // 'this' is an array of column indexes for each context
          items = this[i];

          if ( type === 'column-rows' ) {
            rows = _selector_row_indexes( context[i], selector.opts );
          }

          for ( j=0, jen=items.length ; j<jen ; j++ ) {
            item = items[j];

            if ( type === 'cell' ) {
              ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
            }
            else {
              ret = fn.call( apiInst, context[i], item, i, j, rows );
            }

            if ( ret !== undefined ) {
              a.push( ret );
            }
          }
        }
      }

      if ( a.length || alwaysNew ) {
        var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
        var apiSelector = api.selector;
        apiSelector.rows = selector.rows;
        apiSelector.cols = selector.cols;
        apiSelector.opts = selector.opts;
        return api;
      }
      return this;
    },


    lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
    {
      // Bit cheeky...
      return this.indexOf.apply( this.toArray.reverse(), arguments );
    },


    length:  0,


    map: function ( fn )
    {
      var a = [];

      if ( __arrayProto.map ) {
        a = __arrayProto.map.call( this, fn, this );
      }
      else {
        // Compatibility for browsers without EMCA-252-5 (JS 1.6)
        for ( var i=0, ien=this.length ; i<ien ; i++ ) {
          a.push( fn.call( this, this[i], i ) );
        }
      }

      return new _Api( this.context, a );
    },


    pluck: function ( prop )
    {
      let fn = DataTable.util.get(prop);

      return this.map( function ( el ) {
        return fn(el);
      } );
    },

    pop:     __arrayProto.pop,


    push:    __arrayProto.push,


    // Does not return an API instance
    reduce: __arrayProto.reduce || function ( fn, init )
    {
      return _fnReduce( this, fn, init, 0, this.length, 1 );
    },


    reduceRight: __arrayProto.reduceRight || function ( fn, init )
    {
      return _fnReduce( this, fn, init, this.length-1, -1, -1 );
    },


    reverse: __arrayProto.reverse,


    // Object with rows, columns and opts
    selector: null,


    shift:   __arrayProto.shift,


    slice: function () {
      return new _Api( this.context, this );
    },


    sort:    __arrayProto.sort, // ? name - order?


    splice:  __arrayProto.splice,


    toArray: function ()
    {
      return __arrayProto.slice.call( this );
    },


    to$: function ()
    {
      return $( this );
    },


    toJQuery: function ()
    {
      return $( this );
    },


    unique: function ()
    {
      return new _Api( this.context, _unique(this) );
    },


    unshift: __arrayProto.unshift
  } );


  _Api.extend = function ( scope, obj, ext )
  {
    // Only extend API instances and static properties of the API
    if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
      return;
    }

    var
      i, ien,
      struct,
      methodScoping = function ( scope, fn, struc ) {
        return function () {
          var ret = fn.apply( scope, arguments );

          // Method extension
          _Api.extend( ret, ret, struc.methodExt );
          return ret;
        };
      };

    for ( i=0, ien=ext.length ; i<ien ; i++ ) {
      struct = ext[i];

      // Value
      obj[ struct.name ] = struct.type === 'function' ?
        methodScoping( scope, struct.val, struct ) :
        struct.type === 'object' ?
          {} :
          struct.val;

      obj[ struct.name ].__dt_wrapper = true;

      // Property extension
      _Api.extend( scope, obj[ struct.name ], struct.propExt );
    }
  };


  // @todo - Is there need for an augment function?
  // _Api.augment = function ( inst, name )
  // {
  //  // Find src object in the structure from the name
  //  var parts = name.split('.');

  //  _Api.extend( inst, obj );
  // };


  //     [
  //       {
  //         name:      'data'                -- string   - Property name
  //         val:       function () {},       -- function - Api method (or undefined if just an object
  //         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
  //         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
  //       },
  //       {
  //         name:     'row'
  //         val:       {},
  //         methodExt: [ ... ],
  //         propExt:   [
  //           {
  //             name:      'data'
  //             val:       function () {},
  //             methodExt: [ ... ],
  //             propExt:   [ ... ]
  //           },
  //           ...
  //         ]
  //       }
  //     ]

  _Api.register = _api_register = function ( name, val )
  {
    if ( Array.isArray( name ) ) {
      for ( var j=0, jen=name.length ; j<jen ; j++ ) {
        _Api.register( name[j], val );
      }
      return;
    }

    var
      i, ien,
      heir = name.split('.'),
      struct = __apiStruct,
      key, method;

    var find = function ( src, name ) {
      for ( var i=0, ien=src.length ; i<ien ; i++ ) {
        if ( src[i].name === name ) {
          return src[i];
        }
      }
      return null;
    };

    for ( i=0, ien=heir.length ; i<ien ; i++ ) {
      method = heir[i].indexOf('()') !== -1;
      key = method ?
        heir[i].replace('()', '') :
        heir[i];

      var src = find( struct, key );
      if ( ! src ) {
        src = {
          name:      key,
          val:       {},
          methodExt: [],
          propExt:   [],
          type:      'object'
        };
        struct.push( src );
      }

      if ( i === ien-1 ) {
        src.val = val;
        src.type = typeof val === 'function' ?
          'function' :
          $.isPlainObject( val ) ?
            'object' :
            'other';
      }
      else {
        struct = method ?
          src.methodExt :
          src.propExt;
      }
    }
  };

  _Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
    _Api.register( pluralName, val );

    _Api.register( singularName, function () {
      var ret = val.apply( this, arguments );

      if ( ret === this ) {
        // Returned item is the API instance that was passed in, return it
        return this;
      }
      else if ( ret instanceof _Api ) {
        // New API instance returned, want the value from the first item
        // in the returned array for the singular result.
        return ret.length ?
          Array.isArray( ret[0] ) ?
            new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
            ret[0] :
          undefined;
      }

      // Non-API return - just fire it back
      return ret;
    } );
  };


  /**
   * Selector for HTML tables. Apply the given selector to the give array of
   * DataTables settings objects.
   *
   * @param {string|integer} [selector] jQuery selector string or integer
   * @param  {array} Array of DataTables settings objects to be filtered
   * @return {array}
   * @ignore
   */
  var __table_selector = function ( selector, a )
  {
    if ( Array.isArray(selector) ) {
      return $.map( selector, function (item) {
        return __table_selector(item, a);
      } );
    }

    // Integer is used to pick out a table by index
    if ( typeof selector === 'number' ) {
      return [ a[ selector ] ];
    }

    // Perform a jQuery selector on the table nodes
    var nodes = $.map( a, function (el, i) {
      return el.nTable;
    } );

    return $(nodes)
      .filter( selector )
      .map( function (i) {
        // Need to translate back from the table node to the settings
        var idx = $.inArray( this, nodes );
        return a[ idx ];
      } )
      .toArray();
  };



  /**
   * Context selector for the API's context (i.e. the tables the API instance
   * refers to.
   *
   * @name    DataTable.Api#tables
   * @param {string|integer} [selector] Selector to pick which tables the iterator
   *   should operate on. If not given, all tables in the current context are
   *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
   *   select multiple tables or as an integer to select a single table.
   * @returns {DataTable.Api} Returns a new API instance if a selector is given.
   */
  _api_register( 'tables()', function ( selector ) {
    // A new instance is created if there was a selector specified
    return selector !== undefined && selector !== null ?
      new _Api( __table_selector( selector, this.context ) ) :
      this;
  } );


  _api_register( 'table()', function ( selector ) {
    var tables = this.tables( selector );
    var ctx = tables.context;

    // Truncate to the first matched table
    return ctx.length ?
      new _Api( ctx[0] ) :
      tables;
  } );


  _api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
    return this.iterator( 'table', function ( ctx ) {
      return ctx.nTable;
    }, 1 );
  } );


  _api_registerPlural( 'tables().body()', 'table().body()' , function () {
    return this.iterator( 'table', function ( ctx ) {
      return ctx.nTBody;
    }, 1 );
  } );


  _api_registerPlural( 'tables().header()', 'table().header()' , function () {
    return this.iterator( 'table', function ( ctx ) {
      return ctx.nTHead;
    }, 1 );
  } );


  _api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
    return this.iterator( 'table', function ( ctx ) {
      return ctx.nTFoot;
    }, 1 );
  } );


  _api_registerPlural( 'tables().containers()', 'table().container()' , function () {
    return this.iterator( 'table', function ( ctx ) {
      return ctx.nTableWrapper;
    }, 1 );
  } );



  /**
   * Redraw the tables in the current context.
   */
  _api_register( 'draw()', function ( paging ) {
    return this.iterator( 'table', function ( settings ) {
      if ( paging === 'page' ) {
        _fnDraw( settings );
      }
      else {
        if ( typeof paging === 'string' ) {
          paging = paging === 'full-hold' ?
            false :
            true;
        }

        _fnReDraw( settings, paging===false );
      }
    } );
  } );



  /**
   * Get the current page index.
   *
   * @return {integer} Current page index (zero based)
   *//**
   * Set the current page.
   *
   * Note that if you attempt to show a page which does not exist, DataTables will
   * not throw an error, but rather reset the paging.
   *
   * @param {integer|string} action The paging action to take. This can be one of:
   *  * `integer` - The page index to jump to
   *  * `string` - An action to take:
   *    * `first` - Jump to first page.
   *    * `next` - Jump to the next page
   *    * `previous` - Jump to previous page
   *    * `last` - Jump to the last page.
   * @returns {DataTables.Api} this
   */
  _api_register( 'page()', function ( action ) {
    if ( action === undefined ) {
      return this.page.info().page; // not an expensive call
    }

    // else, have an action to take on all tables
    return this.iterator( 'table', function ( settings ) {
      _fnPageChange( settings, action );
    } );
  } );


  /**
   * Paging information for the first table in the current context.
   *
   * If you require paging information for another table, use the `table()` method
   * with a suitable selector.
   *
   * @return {object} Object with the following properties set:
   *  * `page` - Current page index (zero based - i.e. the first page is `0`)
   *  * `pages` - Total number of pages
   *  * `start` - Display index for the first record shown on the current page
   *  * `end` - Display index for the last record shown on the current page
   *  * `length` - Display length (number of records). Note that generally `start
   *    + length = end`, but this is not always true, for example if there are
   *    only 2 records to show on the final page, with a length of 10.
   *  * `recordsTotal` - Full data set length
   *  * `recordsDisplay` - Data set length once the current filtering criterion
   *    are applied.
   */
  _api_register( 'page.info()', function ( action ) {
    if ( this.context.length === 0 ) {
      return undefined;
    }

    var
      settings   = this.context[0],
      start      = settings._iDisplayStart,
      len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
      visRecords = settings.fnRecordsDisplay(),
      all        = len === -1;

    return {
      "page":           all ? 0 : Math.floor( start / len ),
      "pages":          all ? 1 : Math.ceil( visRecords / len ),
      "start":          start,
      "end":            settings.fnDisplayEnd(),
      "length":         len,
      "recordsTotal":   settings.fnRecordsTotal(),
      "recordsDisplay": visRecords,
      "serverSide":     _fnDataSource( settings ) === 'ssp'
    };
  } );


  /**
   * Get the current page length.
   *
   * @return {integer} Current page length. Note `-1` indicates that all records
   *   are to be shown.
   *//**
   * Set the current page length.
   *
   * @param {integer} Page length to set. Use `-1` to show all records.
   * @returns {DataTables.Api} this
   */
  _api_register( 'page.len()', function ( len ) {
    // Note that we can't call this function 'length()' because `length`
    // is a Javascript property of functions which defines how many arguments
    // the function expects.
    if ( len === undefined ) {
      return this.context.length !== 0 ?
        this.context[0]._iDisplayLength :
        undefined;
    }

    // else, set the page length
    return this.iterator( 'table', function ( settings ) {
      _fnLengthChange( settings, len );
    } );
  } );



  var __reload = function ( settings, holdPosition, callback ) {
    // Use the draw event to trigger a callback
    if ( callback ) {
      var api = new _Api( settings );

      api.one( 'draw', function () {
        callback( api.ajax.json() );
      } );
    }

    if ( _fnDataSource( settings ) == 'ssp' ) {
      _fnReDraw( settings, holdPosition );
    }
    else {
      _fnProcessingDisplay( settings, true );

      // Cancel an existing request
      var xhr = settings.jqXHR;
      if ( xhr && xhr.readyState !== 4 ) {
        xhr.abort();
      }

      // Trigger xhr
      _fnBuildAjax( settings, [], function( json ) {
        _fnClearTable( settings );

        var data = _fnAjaxDataSrc( settings, json );
        for ( var i=0, ien=data.length ; i<ien ; i++ ) {
          _fnAddData( settings, data[i] );
        }

        _fnReDraw( settings, holdPosition );
        _fnProcessingDisplay( settings, false );
      } );
    }
  };


  /**
   * Get the JSON response from the last Ajax request that DataTables made to the
   * server. Note that this returns the JSON from the first table in the current
   * context.
   *
   * @return {object} JSON received from the server.
   */
  _api_register( 'ajax.json()', function () {
    var ctx = this.context;

    if ( ctx.length > 0 ) {
      return ctx[0].json;
    }

    // else return undefined;
  } );


  /**
   * Get the data submitted in the last Ajax request
   */
  _api_register( 'ajax.params()', function () {
    var ctx = this.context;

    if ( ctx.length > 0 ) {
      return ctx[0].oAjaxData;
    }

    // else return undefined;
  } );


  /**
   * Reload tables from the Ajax data source. Note that this function will
   * automatically re-draw the table when the remote data has been loaded.
   *
   * @param {boolean} [reset=true] Reset (default) or hold the current paging
   *   position. A full re-sort and re-filter is performed when this method is
   *   called, which is why the pagination reset is the default action.
   * @returns {DataTables.Api} this
   */
  _api_register( 'ajax.reload()', function ( callback, resetPaging ) {
    return this.iterator( 'table', function (settings) {
      __reload( settings, resetPaging===false, callback );
    } );
  } );


  /**
   * Get the current Ajax URL. Note that this returns the URL from the first
   * table in the current context.
   *
   * @return {string} Current Ajax source URL
   *//**
   * Set the Ajax URL. Note that this will set the URL for all tables in the
   * current context.
   *
   * @param {string} url URL to set.
   * @returns {DataTables.Api} this
   */
  _api_register( 'ajax.url()', function ( url ) {
    var ctx = this.context;

    if ( url === undefined ) {
      // get
      if ( ctx.length === 0 ) {
        return undefined;
      }
      ctx = ctx[0];

      return ctx.ajax ?
        $.isPlainObject( ctx.ajax ) ?
          ctx.ajax.url :
          ctx.ajax :
        ctx.sAjaxSource;
    }

    // set
    return this.iterator( 'table', function ( settings ) {
      if ( $.isPlainObject( settings.ajax ) ) {
        settings.ajax.url = url;
      }
      else {
        settings.ajax = url;
      }
      // No need to consider sAjaxSource here since DataTables gives priority
      // to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
      // value of `sAjaxSource` redundant.
    } );
  } );


  /**
   * Load data from the newly set Ajax URL. Note that this method is only
   * available when `ajax.url()` is used to set a URL. Additionally, this method
   * has the same effect as calling `ajax.reload()` but is provided for
   * convenience when setting a new URL. Like `ajax.reload()` it will
   * automatically redraw the table once the remote data has been loaded.
   *
   * @returns {DataTables.Api} this
   */
  _api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
    // Same as a reload, but makes sense to present it for easy access after a
    // url change
    return this.iterator( 'table', function ( ctx ) {
      __reload( ctx, resetPaging===false, callback );
    } );
  } );




  var _selector_run = function ( type, selector, selectFn, settings, opts )
  {
    var
      out = [], res,
      a, i, ien, j, jen,
      selectorType = typeof selector;

    // Can't just check for isArray here, as an API or jQuery instance might be
    // given with their array like look
    if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
      selector = [ selector ];
    }

    for ( i=0, ien=selector.length ; i<ien ; i++ ) {
      // Only split on simple strings - complex expressions will be jQuery selectors
      a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
        selector[i].split(',') :
        [ selector[i] ];

      for ( j=0, jen=a.length ; j<jen ; j++ ) {
        res = selectFn( typeof a[j] === 'string' ? (a[j]).trim() : a[j] );

        if ( res && res.length ) {
          out = out.concat( res );
        }
      }
    }

    // selector extensions
    var ext = _ext.selector[ type ];
    if ( ext.length ) {
      for ( i=0, ien=ext.length ; i<ien ; i++ ) {
        out = ext[i]( settings, opts, out );
      }
    }

    return _unique( out );
  };


  var _selector_opts = function ( opts )
  {
    if ( ! opts ) {
      opts = {};
    }

    // Backwards compatibility for 1.9- which used the terminology filter rather
    // than search
    if ( opts.filter && opts.search === undefined ) {
      opts.search = opts.filter;
    }

    return $.extend( {
      search: 'none',
      order: 'current',
      page: 'all'
    }, opts );
  };


  var _selector_first = function ( inst )
  {
    // Reduce the API instance to the first item found
    for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
      if ( inst[i].length > 0 ) {
        // Assign the first element to the first item in the instance
        // and truncate the instance and context
        inst[0] = inst[i];
        inst[0].length = 1;
        inst.length = 1;
        inst.context = [ inst.context[i] ];

        return inst;
      }
    }

    // Not found - return an empty instance
    inst.length = 0;
    return inst;
  };


  var _selector_row_indexes = function ( settings, opts )
  {
    var
      i, ien, tmp, a=[],
      displayFiltered = settings.aiDisplay,
      displayMaster = settings.aiDisplayMaster;

    var
      search = opts.search,  // none, applied, removed
      order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
      page   = opts.page;    // all, current

    if ( _fnDataSource( settings ) == 'ssp' ) {
      // In server-side processing mode, most options are irrelevant since
      // rows not shown don't exist and the index order is the applied order
      // Removed is a special case - for consistency just return an empty
      // array
      return search === 'removed' ?
        [] :
        _range( 0, displayMaster.length );
    }
    else if ( page == 'current' ) {
      // Current page implies that order=current and filter=applied, since it is
      // fairly senseless otherwise, regardless of what order and search actually
      // are
      for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
        a.push( displayFiltered[i] );
      }
    }
    else if ( order == 'current' || order == 'applied' ) {
      if ( search == 'none') {
        a = displayMaster.slice();
      }
      else if ( search == 'applied' ) {
        a = displayFiltered.slice();
      }
      else if ( search == 'removed' ) {
        // O(n+m) solution by creating a hash map
        var displayFilteredMap = {};

        for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
          displayFilteredMap[displayFiltered[i]] = null;
        }

        a = $.map( displayMaster, function (el) {
          return ! displayFilteredMap.hasOwnProperty(el) ?
            el :
            null;
        } );
      }
    }
    else if ( order == 'index' || order == 'original' ) {
      for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
        if ( search == 'none' ) {
          a.push( i );
        }
        else { // applied | removed
          tmp = $.inArray( i, displayFiltered );

          if ((tmp === -1 && search == 'removed') ||
            (tmp >= 0   && search == 'applied') )
          {
            a.push( i );
          }
        }
      }
    }

    return a;
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Rows
   *
   * {}          - no selector - use all available rows
   * {integer}   - row aoData index
   * {node}      - TR node
   * {string}    - jQuery selector to apply to the TR elements
   * {array}     - jQuery array of nodes, or simply an array of TR nodes
   *
   */
  var __row_selector = function ( settings, selector, opts )
  {
    var rows;
    var run = function ( sel ) {
      var selInt = _intVal( sel );
      var i, ien;
      var aoData = settings.aoData;

      // Short cut - selector is a number and no options provided (default is
      // all records, so no need to check if the index is in there, since it
      // must be - dev error if the index doesn't exist).
      if ( selInt !== null && ! opts ) {
        return [ selInt ];
      }

      if ( ! rows ) {
        rows = _selector_row_indexes( settings, opts );
      }

      if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
        // Selector - integer
        return [ selInt ];
      }
      else if ( sel === null || sel === undefined || sel === '' ) {
        // Selector - none
        return rows;
      }

      // Selector - function
      if ( typeof sel === 'function' ) {
        return $.map( rows, function (idx) {
          var row = aoData[ idx ];
          return sel( idx, row._aData, row.nTr ) ? idx : null;
        } );
      }

      // Selector - node
      if ( sel.nodeName ) {
        var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
        var cellIdx = sel._DT_CellIndex;

        if ( rowIdx !== undefined ) {
          // Make sure that the row is actually still present in the table
          return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
            [ rowIdx ] :
            [];
        }
        else if ( cellIdx ) {
          return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel.parentNode ?
            [ cellIdx.row ] :
            [];
        }
        else {
          var host = $(sel).closest('*[data-dt-row]');
          return host.length ?
            [ host.data('dt-row') ] :
            [];
        }
      }

      // ID selector. Want to always be able to select rows by id, regardless
      // of if the tr element has been created or not, so can't rely upon
      // jQuery here - hence a custom implementation. This does not match
      // Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
      // but to select it using a CSS selector engine (like Sizzle or
      // querySelect) it would need to need to be escaped for some characters.
      // DataTables simplifies this for row selectors since you can select
      // only a row. A # indicates an id any anything that follows is the id -
      // unescaped.
      if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
        // get row index from id
        var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
        if ( rowObj !== undefined ) {
          return [ rowObj.idx ];
        }

        // need to fall through to jQuery in case there is DOM id that
        // matches
      }

      // Get nodes in the order from the `rows` array with null values removed
      var nodes = _removeEmpty(
        _pluck_order( settings.aoData, rows, 'nTr' )
      );

      // Selector - jQuery selector string, array of nodes or jQuery object/
      // As jQuery's .filter() allows jQuery objects to be passed in filter,
      // it also allows arrays, so this will cope with all three options
      return $(nodes)
        .filter( sel )
        .map( function () {
          return this._DT_RowIndex;
        } )
        .toArray();
    };

    return _selector_run( 'row', selector, run, settings, opts );
  };


  _api_register( 'rows()', function ( selector, opts ) {
    // argument shifting
    if ( selector === undefined ) {
      selector = '';
    }
    else if ( $.isPlainObject( selector ) ) {
      opts = selector;
      selector = '';
    }

    opts = _selector_opts( opts );

    var inst = this.iterator( 'table', function ( settings ) {
      return __row_selector( settings, selector, opts );
    }, 1 );

    // Want argument shifting here and in __row_selector?
    inst.selector.rows = selector;
    inst.selector.opts = opts;

    return inst;
  } );

  _api_register( 'rows().nodes()', function () {
    return this.iterator( 'row', function ( settings, row ) {
      return settings.aoData[ row ].nTr || undefined;
    }, 1 );
  } );

  _api_register( 'rows().data()', function () {
    return this.iterator( true, 'rows', function ( settings, rows ) {
      return _pluck_order( settings.aoData, rows, '_aData' );
    }, 1 );
  } );

  _api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
    return this.iterator( 'row', function ( settings, row ) {
      var r = settings.aoData[ row ];
      return type === 'search' ? r._aFilterData : r._aSortData;
    }, 1 );
  } );

  _api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
    return this.iterator( 'row', function ( settings, row ) {
      _fnInvalidate( settings, row, src );
    } );
  } );

  _api_registerPlural( 'rows().indexes()', 'row().index()', function () {
    return this.iterator( 'row', function ( settings, row ) {
      return row;
    }, 1 );
  } );

  _api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
    var a = [];
    var context = this.context;

    // `iterator` will drop undefined values, but in this case we want them
    for ( var i=0, ien=context.length ; i<ien ; i++ ) {
      for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
        var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
        a.push( (hash === true ? '#' : '' )+ id );
      }
    }

    return new _Api( context, a );
  } );

  _api_registerPlural( 'rows().remove()', 'row().remove()', function () {
    var that = this;

    this.iterator( 'row', function ( settings, row, thatIdx ) {
      var data = settings.aoData;
      var rowData = data[ row ];
      var i, ien, j, jen;
      var loopRow, loopCells;

      data.splice( row, 1 );

      // Update the cached indexes
      for ( i=0, ien=data.length ; i<ien ; i++ ) {
        loopRow = data[i];
        loopCells = loopRow.anCells;

        // Rows
        if ( loopRow.nTr !== null ) {
          loopRow.nTr._DT_RowIndex = i;
        }

        // Cells
        if ( loopCells !== null ) {
          for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
            loopCells[j]._DT_CellIndex.row = i;
          }
        }
      }

      // Delete from the display arrays
      _fnDeleteIndex( settings.aiDisplayMaster, row );
      _fnDeleteIndex( settings.aiDisplay, row );
      _fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes

      // For server-side processing tables - subtract the deleted row from the count
      if ( settings._iRecordsDisplay > 0 ) {
        settings._iRecordsDisplay--;
      }

      // Check for an 'overflow' they case for displaying the table
      _fnLengthOverflow( settings );

      // Remove the row's ID reference if there is one
      var id = settings.rowIdFn( rowData._aData );
      if ( id !== undefined ) {
        delete settings.aIds[ id ];
      }
    } );

    this.iterator( 'table', function ( settings ) {
      for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
        settings.aoData[i].idx = i;
      }
    } );

    return this;
  } );


  _api_register( 'rows.add()', function ( rows ) {
    var newRows = this.iterator( 'table', function ( settings ) {
        var row, i, ien;
        var out = [];

        for ( i=0, ien=rows.length ; i<ien ; i++ ) {
          row = rows[i];

          if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
            out.push( _fnAddTr( settings, row )[0] );
          }
          else {
            out.push( _fnAddData( settings, row ) );
          }
        }

        return out;
      }, 1 );

    // Return an Api.rows() extended instance, so rows().nodes() etc can be used
    var modRows = this.rows( -1 );
    modRows.pop();
    $.merge( modRows, newRows );

    return modRows;
  } );





  /**
   *
   */
  _api_register( 'row()', function ( selector, opts ) {
    return _selector_first( this.rows( selector, opts ) );
  } );


  _api_register( 'row().data()', function ( data ) {
    var ctx = this.context;

    if ( data === undefined ) {
      // Get
      return ctx.length && this.length ?
        ctx[0].aoData[ this[0] ]._aData :
        undefined;
    }

    // Set
    var row = ctx[0].aoData[ this[0] ];
    row._aData = data;

    // If the DOM has an id, and the data source is an array
    if ( Array.isArray( data ) && row.nTr && row.nTr.id ) {
      _fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
    }

    // Automatically invalidate
    _fnInvalidate( ctx[0], this[0], 'data' );

    return this;
  } );


  _api_register( 'row().node()', function () {
    var ctx = this.context;

    return ctx.length && this.length ?
      ctx[0].aoData[ this[0] ].nTr || null :
      null;
  } );


  _api_register( 'row.add()', function ( row ) {
    // Allow a jQuery object to be passed in - only a single row is added from
    // it though - the first element in the set
    if ( row instanceof $ && row.length ) {
      row = row[0];
    }

    var rows = this.iterator( 'table', function ( settings ) {
      if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
        return _fnAddTr( settings, row )[0];
      }
      return _fnAddData( settings, row );
    } );

    // Return an Api.rows() extended instance, with the newly added row selected
    return this.row( rows[0] );
  } );


  $(document).on('plugin-init.dt', function (e, context) {
    var api = new _Api( context );

    const namespace = 'on-plugin-init';
    const stateSaveParamsEvent = `stateSaveParams.${namespace}`;
    const destroyEvent = `destroy.${namespace}`;

    api.on( stateSaveParamsEvent, function ( e, settings, d ) {
      // This could be more compact with the API, but it is a lot faster as a simple
      // internal loop
      var idFn = settings.rowIdFn;
      var data = settings.aoData;
      var ids = [];

      for (var i=0 ; i<data.length ; i++) {
        if (data[i]._detailsShow) {
          ids.push( '#' + idFn(data[i]._aData) );
        }
      }

      d.childRows = ids;
    });

    api.on( destroyEvent, function () {
      api.off(`${stateSaveParamsEvent} ${destroyEvent}`);
    });

    var loaded = api.state.loaded();

    if ( loaded && loaded.childRows ) {
      api
        .rows( $.map(loaded.childRows, function (id){
          return id.replace(/:/g, '\\:')
        }) )
        .every( function () {
          _fnCallbackFire( context, null, 'requestChild', [ this ] )
        });
    }
  });

  var __details_add = function ( ctx, row, data, klass )
  {
    // Convert to array of TR elements
    var rows = [];
    var addRow = function ( r, k ) {
      // Recursion to allow for arrays of jQuery objects
      if ( Array.isArray( r ) || r instanceof $ ) {
        for ( var i=0, ien=r.length ; i<ien ; i++ ) {
          addRow( r[i], k );
        }
        return;
      }

      // If we get a TR element, then just add it directly - up to the dev
      // to add the correct number of columns etc
      if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
        rows.push( r );
      }
      else {
        // Otherwise create a row with a wrapper
        var created = $('<tr><td></td></tr>').addClass( k );
        $('td', created)
          .addClass( k )
          .html( r )
          [0].colSpan = _fnVisbleColumns( ctx );

        rows.push( created[0] );
      }
    };

    addRow( data, klass );

    if ( row._details ) {
      row._details.detach();
    }

    row._details = $(rows);

    // If the children were already shown, that state should be retained
    if ( row._detailsShow ) {
      row._details.insertAfter( row.nTr );
    }
  };


  // Make state saving of child row details async to allow them to be batch processed
  var __details_state = DataTable.util.throttle(
    function (ctx) {
      _fnSaveState( ctx[0] )
    },
    500
  );


  var __details_remove = function ( api, idx )
  {
    var ctx = api.context;

    if ( ctx.length ) {
      var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];

      if ( row && row._details ) {
        row._details.remove();

        row._detailsShow = undefined;
        row._details = undefined;
        $( row.nTr ).removeClass( 'dt-hasChild' );
        __details_state( ctx );
      }
    }
  };


  var __details_display = function ( api, show ) {
    var ctx = api.context;

    if ( ctx.length && api.length ) {
      var row = ctx[0].aoData[ api[0] ];

      if ( row._details ) {
        row._detailsShow = show;

        if ( show ) {
          row._details.insertAfter( row.nTr );
          $( row.nTr ).addClass( 'dt-hasChild' );
        }
        else {
          row._details.detach();
          $( row.nTr ).removeClass( 'dt-hasChild' );
        }

        _fnCallbackFire( ctx[0], null, 'childRow', [ show, api.row( api[0] ) ] )

        __details_events( ctx[0] );
        __details_state( ctx );
      }
    }
  };


  var __details_events = function ( settings )
  {
    var api = new _Api( settings );
    var namespace = '.dt.DT_details';
    var drawEvent = 'draw'+namespace;
    var colvisEvent = 'column-sizing'+namespace;
    var destroyEvent = 'destroy'+namespace;
    var data = settings.aoData;

    api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );

    if ( _pluck( data, '_details' ).length > 0 ) {
      // On each draw, insert the required elements into the document
      api.on( drawEvent, function ( e, ctx ) {
        if ( settings !== ctx ) {
          return;
        }

        api.rows( {page:'current'} ).eq(0).each( function (idx) {
          // Internal data grab
          var row = data[ idx ];

          if ( row._detailsShow ) {
            row._details.insertAfter( row.nTr );
          }
        } );
      } );

      // Column visibility change - update the colspan
      api.on( colvisEvent, function ( e, ctx, idx, vis ) {
        if ( settings !== ctx ) {
          return;
        }

        // Update the colspan for the details rows (note, only if it already has
        // a colspan)
        var row, visible = _fnVisbleColumns( ctx );

        for ( var i=0, ien=data.length ; i<ien ; i++ ) {
          row = data[i];

          if ( row._details ) {
            row._details.children('td[colspan]').attr('colspan', visible );
          }
        }
      } );

      // Table destroyed - nuke any child rows
      api.on( destroyEvent, function ( e, ctx ) {
        if ( settings !== ctx ) {
          return;
        }

        for ( var i=0, ien=data.length ; i<ien ; i++ ) {
          if ( data[i]._details ) {
            __details_remove( api, i );
          }
        }
      } );
    }
  };

  // Strings for the method names to help minification
  var _emp = '';
  var _child_obj = _emp+'row().child';
  var _child_mth = _child_obj+'()';

  // data can be:
  //  tr
  //  string
  //  jQuery or array of any of the above
  _api_register( _child_mth, function ( data, klass ) {
    var ctx = this.context;

    if ( data === undefined ) {
      // get
      return ctx.length && this.length ?
        ctx[0].aoData[ this[0] ]._details :
        undefined;
    }
    else if ( data === true ) {
      // show
      this.child.show();
    }
    else if ( data === false ) {
      // remove
      __details_remove( this );
    }
    else if ( ctx.length && this.length ) {
      // set
      __details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
    }

    return this;
  } );


  _api_register( [
    _child_obj+'.show()',
    _child_mth+'.show()' // only when `child()` was called with parameters (without
  ], function ( show ) {   // it returns an object and this method is not executed)
    __details_display( this, true );
    return this;
  } );


  _api_register( [
    _child_obj+'.hide()',
    _child_mth+'.hide()' // only when `child()` was called with parameters (without
  ], function () {         // it returns an object and this method is not executed)
    __details_display( this, false );
    return this;
  } );


  _api_register( [
    _child_obj+'.remove()',
    _child_mth+'.remove()' // only when `child()` was called with parameters (without
  ], function () {           // it returns an object and this method is not executed)
    __details_remove( this );
    return this;
  } );


  _api_register( _child_obj+'.isShown()', function () {
    var ctx = this.context;

    if ( ctx.length && this.length ) {
      // _detailsShown as false or undefined will fall through to return false
      return ctx[0].aoData[ this[0] ]._detailsShow || false;
    }
    return false;
  } );



  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Columns
   *
   * {integer}           - column index (>=0 count from left, <0 count from right)
   * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
   * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
   * "{string}:name"     - column name
   * "{string}"          - jQuery selector on column header nodes
   *
   */

  // can be an array of these items, comma separated list, or an array of comma
  // separated lists

  var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;


  // r1 and r2 are redundant - but it means that the parameters match for the
  // iterator callback in columns().data()
  var __columnData = function ( settings, column, r1, r2, rows ) {
    var a = [];
    for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
      a.push( _fnGetCellData( settings, rows[row], column ) );
    }
    return a;
  };


  var __column_selector = function ( settings, selector, opts )
  {
    var
      columns = settings.aoColumns,
      names = _pluck( columns, 'sName' ),
      nodes = _pluck( columns, 'nTh' );

    var run = function ( s ) {
      var selInt = _intVal( s );

      // Selector - all
      if ( s === '' ) {
        return _range( columns.length );
      }

      // Selector - index
      if ( selInt !== null ) {
        return [ selInt >= 0 ?
          selInt : // Count from left
          columns.length + selInt // Count from right (+ because its a negative value)
        ];
      }

      // Selector = function
      if ( typeof s === 'function' ) {
        var rows = _selector_row_indexes( settings, opts );

        return $.map( columns, function (col, idx) {
          return s(
              idx,
              __columnData( settings, idx, 0, 0, rows ),
              nodes[ idx ]
            ) ? idx : null;
        } );
      }

      // jQuery or string selector
      var match = typeof s === 'string' ?
        s.match( __re_column_selector ) :
        '';

      if ( match ) {
        switch( match[2] ) {
          case 'visIdx':
          case 'visible':
            var idx = parseInt( match[1], 10 );
            // Visible index given, convert to column index
            if ( idx < 0 ) {
              // Counting from the right
              var visColumns = $.map( columns, function (col,i) {
                return col.bVisible ? i : null;
              } );
              return [ visColumns[ visColumns.length + idx ] ];
            }
            // Counting from the left
            return [ _fnVisibleToColumnIndex( settings, idx ) ];

          case 'name':
            // match by name. `names` is column index complete and in order
            return $.map( names, function (name, i) {
              return name === match[1] ? i : null;
            } );

          default:
            return [];
        }
      }

      // Cell in the table body
      if ( s.nodeName && s._DT_CellIndex ) {
        return [ s._DT_CellIndex.column ];
      }

      // jQuery selector on the TH elements for the columns
      var jqResult = $( nodes )
        .filter( s )
        .map( function () {
          return $.inArray( this, nodes ); // `nodes` is column index complete and in order
        } )
        .toArray();

      if ( jqResult.length || ! s.nodeName ) {
        return jqResult;
      }

      // Otherwise a node which might have a `dt-column` data attribute, or be
      // a child or such an element
      var host = $(s).closest('*[data-dt-column]');
      return host.length ?
        [ host.data('dt-column') ] :
        [];
    };

    return _selector_run( 'column', selector, run, settings, opts );
  };


  var __setColumnVis = function ( settings, column, vis ) {
    var
      cols = settings.aoColumns,
      col  = cols[ column ],
      data = settings.aoData,
      row, cells, i, ien, tr;

    // Get
    if ( vis === undefined ) {
      return col.bVisible;
    }

    // Set
    // No change
    if ( col.bVisible === vis ) {
      return;
    }

    if ( vis ) {
      // Insert column
      // Need to decide if we should use appendChild or insertBefore
      var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );

      for ( i=0, ien=data.length ; i<ien ; i++ ) {
        tr = data[i].nTr;
        cells = data[i].anCells;

        if ( tr ) {
          // insertBefore can act like appendChild if 2nd arg is null
          tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
        }
      }
    }
    else {
      // Remove column
      $( _pluck( settings.aoData, 'anCells', column ) ).detach();
    }

    // Common actions
    col.bVisible = vis;
  };


  _api_register( 'columns()', function ( selector, opts ) {
    // argument shifting
    if ( selector === undefined ) {
      selector = '';
    }
    else if ( $.isPlainObject( selector ) ) {
      opts = selector;
      selector = '';
    }

    opts = _selector_opts( opts );

    var inst = this.iterator( 'table', function ( settings ) {
      return __column_selector( settings, selector, opts );
    }, 1 );

    // Want argument shifting here and in _row_selector?
    inst.selector.cols = selector;
    inst.selector.opts = opts;

    return inst;
  } );

  _api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
    return this.iterator( 'column', function ( settings, column ) {
      return settings.aoColumns[column].nTh;
    }, 1 );
  } );

  _api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
    return this.iterator( 'column', function ( settings, column ) {
      return settings.aoColumns[column].nTf;
    }, 1 );
  } );

  _api_registerPlural( 'columns().data()', 'column().data()', function () {
    return this.iterator( 'column-rows', __columnData, 1 );
  } );

  _api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
    return this.iterator( 'column', function ( settings, column ) {
      return settings.aoColumns[column].mData;
    }, 1 );
  } );

  _api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
    return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
      return _pluck_order( settings.aoData, rows,
        type === 'search' ? '_aFilterData' : '_aSortData', column
      );
    }, 1 );
  } );

  _api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
    return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
      return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
    }, 1 );
  } );

  _api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
    var that = this;
    var ret = this.iterator( 'column', function ( settings, column ) {
      if ( vis === undefined ) {
        return settings.aoColumns[ column ].bVisible;
      } // else
      __setColumnVis( settings, column, vis );
    } );

    // Group the column visibility changes
    if ( vis !== undefined ) {
      this.iterator( 'table', function ( settings ) {
        // Redraw the header after changes
        _fnDrawHead( settings, settings.aoHeader );
        _fnDrawHead( settings, settings.aoFooter );

        // Update colspan for no records display. Child rows and extensions will use their own
        // listeners to do this - only need to update the empty table item here
        if ( ! settings.aiDisplay.length ) {
          $(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
        }

        _fnSaveState( settings );

        // Second loop once the first is done for events
        that.iterator( 'column', function ( settings, column ) {
          _fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
        } );

        if ( calc === undefined || calc ) {
          that.columns.adjust();
        }
      });
    }

    return ret;
  } );

  _api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
    return this.iterator( 'column', function ( settings, column ) {
      return type === 'visible' ?
        _fnColumnIndexToVisible( settings, column ) :
        column;
    }, 1 );
  } );

  _api_register( 'columns.adjust()', function () {
    return this.iterator( 'table', function ( settings ) {
      _fnAdjustColumnSizing( settings );
    }, 1 );
  } );

  _api_register( 'column.index()', function ( type, idx ) {
    if ( this.context.length !== 0 ) {
      var ctx = this.context[0];

      if ( type === 'fromVisible' || type === 'toData' ) {
        return _fnVisibleToColumnIndex( ctx, idx );
      }
      else if ( type === 'fromData' || type === 'toVisible' ) {
        return _fnColumnIndexToVisible( ctx, idx );
      }
    }
  } );

  _api_register( 'column()', function ( selector, opts ) {
    return _selector_first( this.columns( selector, opts ) );
  } );

  var __cell_selector = function ( settings, selector, opts )
  {
    var data = settings.aoData;
    var rows = _selector_row_indexes( settings, opts );
    var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
    var allCells = $(_flatten( [], cells ));
    var row;
    var columns = settings.aoColumns.length;
    var a, i, ien, j, o, host;

    var run = function ( s ) {
      var fnSelector = typeof s === 'function';

      if ( s === null || s === undefined || fnSelector ) {
        // All cells and function selectors
        a = [];

        for ( i=0, ien=rows.length ; i<ien ; i++ ) {
          row = rows[i];

          for ( j=0 ; j<columns ; j++ ) {
            o = {
              row: row,
              column: j
            };

            if ( fnSelector ) {
              // Selector - function
              host = data[ row ];

              if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
                a.push( o );
              }
            }
            else {
              // Selector - all
              a.push( o );
            }
          }
        }

        return a;
      }

      // Selector - index
      if ( $.isPlainObject( s ) ) {
        // Valid cell index and its in the array of selectable rows
        return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
          [s] :
          [];
      }

      // Selector - jQuery filtered cells
      var jqResult = allCells
        .filter( s )
        .map( function (i, el) {
          return { // use a new object, in case someone changes the values
            row:    el._DT_CellIndex.row,
            column: el._DT_CellIndex.column
          };
        } )
        .toArray();

      if ( jqResult.length || ! s.nodeName ) {
        return jqResult;
      }

      // Otherwise the selector is a node, and there is one last option - the
      // element might be a child of an element which has dt-row and dt-column
      // data attributes
      host = $(s).closest('*[data-dt-row]');
      return host.length ?
        [ {
          row: host.data('dt-row'),
          column: host.data('dt-column')
        } ] :
        [];
    };

    return _selector_run( 'cell', selector, run, settings, opts );
  };




  _api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
    // Argument shifting
    if ( $.isPlainObject( rowSelector ) ) {
      // Indexes
      if ( rowSelector.row === undefined ) {
        // Selector options in first parameter
        opts = rowSelector;
        rowSelector = null;
      }
      else {
        // Cell index objects in first parameter
        opts = columnSelector;
        columnSelector = null;
      }
    }
    if ( $.isPlainObject( columnSelector ) ) {
      opts = columnSelector;
      columnSelector = null;
    }

    // Cell selector
    if ( columnSelector === null || columnSelector === undefined ) {
      return this.iterator( 'table', function ( settings ) {
        return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
      } );
    }

    // The default built in options need to apply to row and columns
    var internalOpts = opts ? {
      page: opts.page,
      order: opts.order,
      search: opts.search
    } : {};

    // Row + column selector
    var columns = this.columns( columnSelector, internalOpts );
    var rows = this.rows( rowSelector, internalOpts );
    var i, ien, j, jen;

    var cellsNoOpts = this.iterator( 'table', function ( settings, idx ) {
      var a = [];

      for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
        for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
          a.push( {
            row:    rows[idx][i],
            column: columns[idx][j]
          } );
        }
      }

      return a;
    }, 1 );

    // There is currently only one extension which uses a cell selector extension
    // It is a _major_ performance drag to run this if it isn't needed, so this is
    // an extension specific check at the moment
    var cells = opts && opts.selected ?
      this.cells( cellsNoOpts, opts ) :
      cellsNoOpts;

    $.extend( cells.selector, {
      cols: columnSelector,
      rows: rowSelector,
      opts: opts
    } );

    return cells;
  } );


  _api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
    return this.iterator( 'cell', function ( settings, row, column ) {
      var data = settings.aoData[ row ];

      return data && data.anCells ?
        data.anCells[ column ] :
        undefined;
    }, 1 );
  } );


  _api_register( 'cells().data()', function () {
    return this.iterator( 'cell', function ( settings, row, column ) {
      return _fnGetCellData( settings, row, column );
    }, 1 );
  } );


  _api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
    type = type === 'search' ? '_aFilterData' : '_aSortData';

    return this.iterator( 'cell', function ( settings, row, column ) {
      return settings.aoData[ row ][ type ][ column ];
    }, 1 );
  } );


  _api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
    return this.iterator( 'cell', function ( settings, row, column ) {
      return _fnGetCellData( settings, row, column, type );
    }, 1 );
  } );


  _api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
    return this.iterator( 'cell', function ( settings, row, column ) {
      return {
        row: row,
        column: column,
        columnVisible: _fnColumnIndexToVisible( settings, column )
      };
    }, 1 );
  } );


  _api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
    return this.iterator( 'cell', function ( settings, row, column ) {
      _fnInvalidate( settings, row, src, column );
    } );
  } );



  _api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
    return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
  } );


  _api_register( 'cell().data()', function ( data ) {
    var ctx = this.context;
    var cell = this[0];

    if ( data === undefined ) {
      // Get
      return ctx.length && cell.length ?
        _fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
        undefined;
    }

    // Set
    _fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
    _fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );

    return this;
  } );



  /**
   * Get current ordering (sorting) that has been applied to the table.
   *
   * @returns {array} 2D array containing the sorting information for the first
   *   table in the current context. Each element in the parent array represents
   *   a column being sorted upon (i.e. multi-sorting with two columns would have
   *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
   *   the column index that the sorting condition applies to, the second is the
   *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
   *   index of the sorting order from the `column.sorting` initialisation array.
   *//**
   * Set the ordering for the table.
   *
   * @param {integer} order Column index to sort upon.
   * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
   * @returns {DataTables.Api} this
   *//**
   * Set the ordering for the table.
   *
   * @param {array} order 1D array of sorting information to be applied.
   * @param {array} [...] Optional additional sorting conditions
   * @returns {DataTables.Api} this
   *//**
   * Set the ordering for the table.
   *
   * @param {array} order 2D array of sorting information to be applied.
   * @returns {DataTables.Api} this
   */
  _api_register( 'order()', function ( order, dir ) {
    var ctx = this.context;

    if ( order === undefined ) {
      // get
      return ctx.length !== 0 ?
        ctx[0].aaSorting :
        undefined;
    }

    // set
    if ( typeof order === 'number' ) {
      // Simple column / direction passed in
      order = [ [ order, dir ] ];
    }
    else if ( order.length && ! Array.isArray( order[0] ) ) {
      // Arguments passed in (list of 1D arrays)
      order = Array.prototype.slice.call( arguments );
    }
    // otherwise a 2D array was passed in

    return this.iterator( 'table', function ( settings ) {
      settings.aaSorting = order.slice();
    } );
  } );


  /**
   * Attach a sort listener to an element for a given column
   *
   * @param {node|jQuery|string} node Identifier for the element(s) to attach the
   *   listener to. This can take the form of a single DOM node, a jQuery
   *   collection of nodes or a jQuery selector which will identify the node(s).
   * @param {integer} column the column that a click on this node will sort on
   * @param {function} [callback] callback function when sort is run
   * @returns {DataTables.Api} this
   */
  _api_register( 'order.listener()', function ( node, column, callback ) {
    return this.iterator( 'table', function ( settings ) {
      _fnSortAttachListener( settings, node, column, callback );
    } );
  } );


  _api_register( 'order.fixed()', function ( set ) {
    if ( ! set ) {
      var ctx = this.context;
      var fixed = ctx.length ?
        ctx[0].aaSortingFixed :
        undefined;

      return Array.isArray( fixed ) ?
        { pre: fixed } :
        fixed;
    }

    return this.iterator( 'table', function ( settings ) {
      settings.aaSortingFixed = $.extend( true, {}, set );
    } );
  } );


  // Order by the selected column(s)
  _api_register( [
    'columns().order()',
    'column().order()'
  ], function ( dir ) {
    var that = this;

    return this.iterator( 'table', function ( settings, i ) {
      var sort = [];

      $.each( that[i], function (j, col) {
        sort.push( [ col, dir ] );
      } );

      settings.aaSorting = sort;
    } );
  } );



  _api_register( 'search()', function ( input, regex, smart, caseInsen ) {
    var ctx = this.context;

    if ( input === undefined ) {
      // get
      return ctx.length !== 0 ?
        ctx[0].oPreviousSearch.sSearch :
        undefined;
    }

    // set
    return this.iterator( 'table', function ( settings ) {
      if ( ! settings.oFeatures.bFilter ) {
        return;
      }

      _fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
        "sSearch": input+"",
        "bRegex":  regex === null ? false : regex,
        "bSmart":  smart === null ? true  : smart,
        "bCaseInsensitive": caseInsen === null ? true : caseInsen
      } ), 1 );
    } );
  } );


  _api_registerPlural(
    'columns().search()',
    'column().search()',
    function ( input, regex, smart, caseInsen ) {
      return this.iterator( 'column', function ( settings, column ) {
        var preSearch = settings.aoPreSearchCols;

        if ( input === undefined ) {
          // get
          return preSearch[ column ].sSearch;
        }

        // set
        if ( ! settings.oFeatures.bFilter ) {
          return;
        }

        $.extend( preSearch[ column ], {
          "sSearch": input+"",
          "bRegex":  regex === null ? false : regex,
          "bSmart":  smart === null ? true  : smart,
          "bCaseInsensitive": caseInsen === null ? true : caseInsen
        } );

        _fnFilterComplete( settings, settings.oPreviousSearch, 1 );
      } );
    }
  );

  /*
   * State API methods
   */

  _api_register( 'state()', function () {
    return this.context.length ?
      this.context[0].oSavedState :
      null;
  } );


  _api_register( 'state.clear()', function () {
    return this.iterator( 'table', function ( settings ) {
      // Save an empty object
      settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
    } );
  } );


  _api_register( 'state.loaded()', function () {
    return this.context.length ?
      this.context[0].oLoadedState :
      null;
  } );


  _api_register( 'state.save()', function () {
    return this.iterator( 'table', function ( settings ) {
      _fnSaveState( settings );
    } );
  } );



  /**
   * Provide a common method for plug-ins to check the version of DataTables being
   * used, in order to ensure compatibility.
   *
   *  @param {string} version Version string to check for, in the format "X.Y.Z".
   *    Note that the formats "X" and "X.Y" are also acceptable.
   *  @returns {boolean} true if this version of DataTables is greater or equal to
   *    the required version, or false if this version of DataTales is not
   *    suitable
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
   */
  DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
  {
    var aThis = DataTable.version.split('.');
    var aThat = version.split('.');
    var iThis, iThat;

    for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
      iThis = parseInt( aThis[i], 10 ) || 0;
      iThat = parseInt( aThat[i], 10 ) || 0;

      // Parts are the same, keep comparing
      if (iThis === iThat) {
        continue;
      }

      // Parts are different, return immediately
      return iThis > iThat;
    }

    return true;
  };


  /**
   * Check if a `<table>` node is a DataTable table already or not.
   *
   *  @param {node|jquery|string} table Table node, jQuery object or jQuery
   *      selector for the table to test. Note that if more than more than one
   *      table is passed on, only the first will be checked
   *  @returns {boolean} true the table given is a DataTable, or false otherwise
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
   *      $('#example').dataTable();
   *    }
   */
  DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
  {
    var t = $(table).get(0);
    var is = false;

    if ( table instanceof DataTable.Api ) {
      return true;
    }

    $.each( DataTable.settings, function (i, o) {
      var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
      var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;

      if ( o.nTable === t || head === t || foot === t ) {
        is = true;
      }
    } );

    return is;
  };


  /**
   * Get all DataTable tables that have been initialised - optionally you can
   * select to get only currently visible tables.
   *
   *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
   *    or visible tables only.
   *  @returns {array} Array of `table` nodes (not DataTable instances) which are
   *    DataTables
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    $.each( $.fn.dataTable.tables(true), function () {
   *      $(table).DataTable().columns.adjust();
   *    } );
   */
  DataTable.tables = DataTable.fnTables = function ( visible )
  {
    var api = false;

    if ( $.isPlainObject( visible ) ) {
      api = visible.api;
      visible = visible.visible;
    }

    var a = $.map( DataTable.settings, function (o) {
      if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
        return o.nTable;
      }
    } );

    return api ?
      new _Api( a ) :
      a;
  };


  /**
   * Convert from camel case parameters to Hungarian notation. This is made public
   * for the extensions to provide the same ability as DataTables core to accept
   * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
   * parameters.
   *
   *  @param {object} src The model object which holds all parameters that can be
   *    mapped.
   *  @param {object} user The object to convert from camel case to Hungarian.
   *  @param {boolean} force When set to `true`, properties which already have a
   *    Hungarian value in the `user` object will be overwritten. Otherwise they
   *    won't be.
   */
  DataTable.camelToHungarian = _fnCamelToHungarian;



  /**
   *
   */
  _api_register( '$()', function ( selector, opts ) {
    var
      rows   = this.rows( opts ).nodes(), // Get all rows
      jqRows = $(rows);

    return $( [].concat(
      jqRows.filter( selector ).toArray(),
      jqRows.find( selector ).toArray()
    ) );
  } );


  // jQuery functions to operate on the tables
  $.each( [ 'on', 'one', 'off' ], function (i, key) {
    _api_register( key+'()', function ( /* event, handler */ ) {
      var args = Array.prototype.slice.call(arguments);

      // Add the `dt` namespace automatically if it isn't already present
      args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
        return ! e.match(/\.dt\b/) ?
          e+'.dt' :
          e;
        } ).join( ' ' );

      var inst = $( this.tables().nodes() );
      inst[key].apply( inst, args );
      return this;
    } );
  } );


  _api_register( 'clear()', function () {
    return this.iterator( 'table', function ( settings ) {
      _fnClearTable( settings );
    } );
  } );


  _api_register( 'settings()', function () {
    return new _Api( this.context, this.context );
  } );


  _api_register( 'init()', function () {
    var ctx = this.context;
    return ctx.length ? ctx[0].oInit : null;
  } );


  _api_register( 'data()', function () {
    return this.iterator( 'table', function ( settings ) {
      return _pluck( settings.aoData, '_aData' );
    } ).flatten();
  } );


  _api_register( 'destroy()', function ( remove ) {
    remove = remove || false;

    return this.iterator( 'table', function ( settings ) {
      var classes   = settings.oClasses;
      var table     = settings.nTable;
      var tbody     = settings.nTBody;
      var thead     = settings.nTHead;
      var tfoot     = settings.nTFoot;
      var jqTable   = $(table);
      var jqTbody   = $(tbody);
      var jqWrapper = $(settings.nTableWrapper);
      var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
      var i, ien;

      // Flag to note that the table is currently being destroyed - no action
      // should be taken
      settings.bDestroying = true;

      // Fire off the destroy callbacks for plug-ins etc
      _fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );

      // If not being removed from the document, make all columns visible
      if ( ! remove ) {
        new _Api( settings ).columns().visible( true );
      }

      // Blitz all `DT` namespaced events (these are internal events, the
      // lowercase, `dt` events are user subscribed and they are responsible
      // for removing them
      jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
      $(window).off('.DT-'+settings.sInstance);

      // When scrolling we had to break the table up - restore it
      if ( table != thead.parentNode ) {
        jqTable.children('thead').detach();
        jqTable.append( thead );
      }

      if ( tfoot && table != tfoot.parentNode ) {
        jqTable.children('tfoot').detach();
        jqTable.append( tfoot );
      }

      settings.aaSorting = [];
      settings.aaSortingFixed = [];
      _fnSortingClasses( settings );

      $( rows ).removeClass( settings.asStripeClasses.join(' ') );

      $('th, td', thead).removeClass( classes.sSortable+' '+
        classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
      );

      // Add the TR elements back into the table in their original order
      jqTbody.children().detach();
      jqTbody.append( rows );

      var orig = settings.nTableWrapper.parentNode;

      // Remove the DataTables generated nodes, events and classes
      var removedMethod = remove ? 'remove' : 'detach';
      jqTable[ removedMethod ]();
      jqWrapper[ removedMethod ]();

      // If we need to reattach the table to the document
      if ( ! remove && orig ) {
        // insertBefore acts like appendChild if !arg[1]
        orig.insertBefore( table, settings.nTableReinsertBefore );

        // Restore the width of the original table - was read from the style property,
        // so we can restore directly to that
        jqTable
          .css( 'width', settings.sDestroyWidth )
          .removeClass( classes.sTable );

        // If the were originally stripe classes - then we add them back here.
        // Note this is not fool proof (for example if not all rows had stripe
        // classes - but it's a good effort without getting carried away
        ien = settings.asDestroyStripes.length;

        if ( ien ) {
          jqTbody.children().each( function (i) {
            $(this).addClass( settings.asDestroyStripes[i % ien] );
          } );
        }
      }

      /* Remove the settings object from the settings array */
      var idx = $.inArray( settings, DataTable.settings );
      if ( idx !== -1 ) {
        DataTable.settings.splice( idx, 1 );
      }
    } );
  } );


  // Add the `every()` method for rows, columns and cells in a compact form
  $.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
    _api_register( type+'s().every()', function ( fn ) {
      var opts = this.selector.opts;
      var api = this;

      return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
        // Rows and columns:
        //  arg1 - index
        //  arg2 - table counter
        //  arg3 - loop counter
        //  arg4 - undefined
        // Cells:
        //  arg1 - row index
        //  arg2 - column index
        //  arg3 - table counter
        //  arg4 - loop counter
        fn.call(
          api[ type ](
            arg1,
            type==='cell' ? arg2 : opts,
            type==='cell' ? opts : undefined
          ),
          arg1, arg2, arg3, arg4
        );
      } );
    } );
  } );


  // i18n method for extensions to be able to use the language object from the
  // DataTable
  _api_register( 'i18n()', function ( token, def, plural ) {
    var ctx = this.context[0];
    var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );

    if ( resolved === undefined ) {
      resolved = def;
    }

    if ( plural !== undefined && $.isPlainObject( resolved ) ) {
      resolved = resolved[ plural ] !== undefined ?
        resolved[ plural ] :
        resolved._;
    }

    return resolved.replace( '%d', plural ); // nb: plural might be undefined,
  } );
  /**
   * Version string for plug-ins to check compatibility. Allowed format is
   * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
   * only for non-release builds. See http://semver.org/ for more information.
   *  @member
   *  @type string
   *  @default Version number
   */
  DataTable.version = "1.13.1";

  /**
   * Private data store, containing all of the settings objects that are
   * created for the tables on a given page.
   *
   * Note that the `DataTable.settings` object is aliased to
   * `jQuery.fn.dataTableExt` through which it may be accessed and
   * manipulated, or `jQuery.fn.dataTable.settings`.
   *  @member
   *  @type array
   *  @default []
   *  @private
   */
  DataTable.settings = [];

  /**
   * Object models container, for the various models that DataTables has
   * available to it. These models define the objects that are used to hold
   * the active state and configuration of the table.
   *  @namespace
   */
  DataTable.models = {};



  /**
   * Template object for the way in which DataTables holds information about
   * search information for the global filter and individual column filters.
   *  @namespace
   */
  DataTable.models.oSearch = {
    /**
     * Flag to indicate if the filtering should be case insensitive or not
     *  @type boolean
     *  @default true
     */
    "bCaseInsensitive": true,

    /**
     * Applied search term
     *  @type string
     *  @default <i>Empty string</i>
     */
    "sSearch": "",

    /**
     * Flag to indicate if the search term should be interpreted as a
     * regular expression (true) or not (false) and therefore and special
     * regex characters escaped.
     *  @type boolean
     *  @default false
     */
    "bRegex": false,

    /**
     * Flag to indicate if DataTables is to use its smart filtering or not.
     *  @type boolean
     *  @default true
     */
    "bSmart": true,

    /**
     * Flag to indicate if DataTables should only trigger a search when
     * the return key is pressed.
     *  @type boolean
     *  @default false
     */
    "return": false
  };




  /**
   * Template object for the way in which DataTables holds information about
   * each individual row. This is the object format used for the settings
   * aoData array.
   *  @namespace
   */
  DataTable.models.oRow = {
    /**
     * TR element for the row
     *  @type node
     *  @default null
     */
    "nTr": null,

    /**
     * Array of TD elements for each row. This is null until the row has been
     * created.
     *  @type array nodes
     *  @default []
     */
    "anCells": null,

    /**
     * Data object from the original data source for the row. This is either
     * an array if using the traditional form of DataTables, or an object if
     * using mData options. The exact type will depend on the passed in
     * data from the data source, or will be an array if using DOM a data
     * source.
     *  @type array|object
     *  @default []
     */
    "_aData": [],

    /**
     * Sorting data cache - this array is ostensibly the same length as the
     * number of columns (although each index is generated only as it is
     * needed), and holds the data that is used for sorting each column in the
     * row. We do this cache generation at the start of the sort in order that
     * the formatting of the sort data need be done only once for each cell
     * per sort. This array should not be read from or written to by anything
     * other than the master sorting methods.
     *  @type array
     *  @default null
     *  @private
     */
    "_aSortData": null,

    /**
     * Per cell filtering data cache. As per the sort data cache, used to
     * increase the performance of the filtering in DataTables
     *  @type array
     *  @default null
     *  @private
     */
    "_aFilterData": null,

    /**
     * Filtering data cache. This is the same as the cell filtering cache, but
     * in this case a string rather than an array. This is easily computed with
     * a join on `_aFilterData`, but is provided as a cache so the join isn't
     * needed on every search (memory traded for performance)
     *  @type array
     *  @default null
     *  @private
     */
    "_sFilterRow": null,

    /**
     * Cache of the class name that DataTables has applied to the row, so we
     * can quickly look at this variable rather than needing to do a DOM check
     * on className for the nTr property.
     *  @type string
     *  @default <i>Empty string</i>
     *  @private
     */
    "_sRowStripe": "",

    /**
     * Denote if the original data source was from the DOM, or the data source
     * object. This is used for invalidating data, so DataTables can
     * automatically read data from the original source, unless uninstructed
     * otherwise.
     *  @type string
     *  @default null
     *  @private
     */
    "src": null,

    /**
     * Index in the aoData array. This saves an indexOf lookup when we have the
     * object, but want to know the index
     *  @type integer
     *  @default -1
     *  @private
     */
    "idx": -1
  };


  /**
   * Template object for the column information object in DataTables. This object
   * is held in the settings aoColumns array and contains all the information that
   * DataTables needs about each individual column.
   *
   * Note that this object is related to {@link DataTable.defaults.column}
   * but this one is the internal data store for DataTables's cache of columns.
   * It should NOT be manipulated outside of DataTables. Any configuration should
   * be done through the initialisation options.
   *  @namespace
   */
  DataTable.models.oColumn = {
    /**
     * Column index. This could be worked out on-the-fly with $.inArray, but it
     * is faster to just hold it as a variable
     *  @type integer
     *  @default null
     */
    "idx": null,

    /**
     * A list of the columns that sorting should occur on when this column
     * is sorted. That this property is an array allows multi-column sorting
     * to be defined for a column (for example first name / last name columns
     * would benefit from this). The values are integers pointing to the
     * columns to be sorted on (typically it will be a single integer pointing
     * at itself, but that doesn't need to be the case).
     *  @type array
     */
    "aDataSort": null,

    /**
     * Define the sorting directions that are applied to the column, in sequence
     * as the column is repeatedly sorted upon - i.e. the first value is used
     * as the sorting direction when the column if first sorted (clicked on).
     * Sort it again (click again) and it will move on to the next index.
     * Repeat until loop.
     *  @type array
     */
    "asSorting": null,

    /**
     * Flag to indicate if the column is searchable, and thus should be included
     * in the filtering or not.
     *  @type boolean
     */
    "bSearchable": null,

    /**
     * Flag to indicate if the column is sortable or not.
     *  @type boolean
     */
    "bSortable": null,

    /**
     * Flag to indicate if the column is currently visible in the table or not
     *  @type boolean
     */
    "bVisible": null,

    /**
     * Store for manual type assignment using the `column.type` option. This
     * is held in store so we can manipulate the column's `sType` property.
     *  @type string
     *  @default null
     *  @private
     */
    "_sManualType": null,

    /**
     * Flag to indicate if HTML5 data attributes should be used as the data
     * source for filtering or sorting. True is either are.
     *  @type boolean
     *  @default false
     *  @private
     */
    "_bAttrSrc": false,

    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     *  @type function
     *  @param {element} nTd The TD node that has been created
     *  @param {*} sData The Data for the cell
     *  @param {array|object} oData The data for the whole row
     *  @param {int} iRow The row index for the aoData data store
     *  @default null
     */
    "fnCreatedCell": null,

    /**
     * Function to get data from a cell in a column. You should <b>never</b>
     * access data directly through _aData internally in DataTables - always use
     * the method attached to this property. It allows mData to function as
     * required. This function is automatically assigned by the column
     * initialisation method
     *  @type function
     *  @param {array|object} oData The data array/object for the array
     *    (i.e. aoData[]._aData)
     *  @param {string} sSpecific The specific data type you want to get -
     *    'display', 'type' 'filter' 'sort'
     *  @returns {*} The data for the cell from the given row's data
     *  @default null
     */
    "fnGetData": null,

    /**
     * Function to set data for a cell in the column. You should <b>never</b>
     * set the data directly to _aData internally in DataTables - always use
     * this method. It allows mData to function as required. This function
     * is automatically assigned by the column initialisation method
     *  @type function
     *  @param {array|object} oData The data array/object for the array
     *    (i.e. aoData[]._aData)
     *  @param {*} sValue Value to set
     *  @default null
     */
    "fnSetData": null,

    /**
     * Property to read the value for the cells in the column from the data
     * source array / object. If null, then the default content is used, if a
     * function is given then the return from the function is used.
     *  @type function|int|string|null
     *  @default null
     */
    "mData": null,

    /**
     * Partner property to mData which is used (only when defined) to get
     * the data - i.e. it is basically the same as mData, but without the
     * 'set' option, and also the data fed to it is the result from mData.
     * This is the rendering method to match the data method of mData.
     *  @type function|int|string|null
     *  @default null
     */
    "mRender": null,

    /**
     * Unique header TH/TD element for this column - this is what the sorting
     * listener is attached to (if sorting is enabled.)
     *  @type node
     *  @default null
     */
    "nTh": null,

    /**
     * Unique footer TH/TD element for this column (if there is one). Not used
     * in DataTables as such, but can be used for plug-ins to reference the
     * footer for each column.
     *  @type node
     *  @default null
     */
    "nTf": null,

    /**
     * The class to apply to all TD elements in the table's TBODY for the column
     *  @type string
     *  @default null
     */
    "sClass": null,

    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     *  @type string
     */
    "sContentPadding": null,

    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because mData
     * is set to null, or because the data source itself is null).
     *  @type string
     *  @default null
     */
    "sDefaultContent": null,

    /**
     * Name for the column, allowing reference to the column by name as well as
     * by index (needs a lookup to work by name).
     *  @type string
     */
    "sName": null,

    /**
     * Custom sorting data type - defines which of the available plug-ins in
     * afnSortData the custom sorting will use - if any is defined.
     *  @type string
     *  @default std
     */
    "sSortDataType": 'std',

    /**
     * Class to be applied to the header element when sorting on this column
     *  @type string
     *  @default null
     */
    "sSortingClass": null,

    /**
     * Class to be applied to the header element when sorting on this column -
     * when jQuery UI theming is used.
     *  @type string
     *  @default null
     */
    "sSortingClassJUI": null,

    /**
     * Title of the column - what is seen in the TH element (nTh).
     *  @type string
     */
    "sTitle": null,

    /**
     * Column sorting and filtering type
     *  @type string
     *  @default null
     */
    "sType": null,

    /**
     * Width of the column
     *  @type string
     *  @default null
     */
    "sWidth": null,

    /**
     * Width of the column when it was first "encountered"
     *  @type string
     *  @default null
     */
    "sWidthOrig": null
  };


  /*
   * Developer note: The properties of the object below are given in Hungarian
   * notation, that was used as the interface for DataTables prior to v1.10, however
   * from v1.10 onwards the primary interface is camel case. In order to avoid
   * breaking backwards compatibility utterly with this change, the Hungarian
   * version is still, internally the primary interface, but is is not documented
   * - hence the @name tags in each doc comment. This allows a Javascript function
   * to create a map from Hungarian notation to camel case (going the other direction
   * would require each property to be listed, which would add around 3K to the size
   * of DataTables, while this method is about a 0.5K hit).
   *
   * Ultimately this does pave the way for Hungarian notation to be dropped
   * completely, but that is a massive amount of work and will break current
   * installs (therefore is on-hold until v2).
   */

  /**
   * Initialisation options that can be given to DataTables at initialisation
   * time.
   *  @namespace
   */
  DataTable.defaults = {
    /**
     * An array of data to use for the table, passed in at initialisation which
     * will be used in preference to any data which is already in the DOM. This is
     * particularly useful for constructing tables purely in Javascript, for
     * example with a custom Ajax call.
     *  @type array
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.data
     *
     *  @example
     *    // Using a 2D array data source
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "data": [
     *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
     *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
     *        ],
     *        "columns": [
     *          { "title": "Engine" },
     *          { "title": "Browser" },
     *          { "title": "Platform" },
     *          { "title": "Version" },
     *          { "title": "Grade" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using an array of objects as a data source (`data`)
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "data": [
     *          {
     *            "engine":   "Trident",
     *            "browser":  "Internet Explorer 4.0",
     *            "platform": "Win 95+",
     *            "version":  4,
     *            "grade":    "X"
     *          },
     *          {
     *            "engine":   "Trident",
     *            "browser":  "Internet Explorer 5.0",
     *            "platform": "Win 95+",
     *            "version":  5,
     *            "grade":    "C"
     *          }
     *        ],
     *        "columns": [
     *          { "title": "Engine",   "data": "engine" },
     *          { "title": "Browser",  "data": "browser" },
     *          { "title": "Platform", "data": "platform" },
     *          { "title": "Version",  "data": "version" },
     *          { "title": "Grade",    "data": "grade" }
     *        ]
     *      } );
     *    } );
     */
    "aaData": null,


    /**
     * If ordering is enabled, then DataTables will perform a first pass sort on
     * initialisation. You can define which column(s) the sort is performed
     * upon, and the sorting direction, with this variable. The `sorting` array
     * should contain an array for each column to be sorted initially containing
     * the column's index and a direction string ('asc' or 'desc').
     *  @type array
     *  @default [[0,'asc']]
     *
     *  @dtopt Option
     *  @name DataTable.defaults.order
     *
     *  @example
     *    // Sort by 3rd column first, and then 4th column
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "order": [[2,'asc'], [3,'desc']]
     *      } );
     *    } );
     *
     *    // No initial sorting
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "order": []
     *      } );
     *    } );
     */
    "aaSorting": [[0,'asc']],


    /**
     * This parameter is basically identical to the `sorting` parameter, but
     * cannot be overridden by user interaction with the table. What this means
     * is that you could have a column (visible or hidden) which the sorting
     * will always be forced on first - any sorting after that (from the user)
     * will then be performed as required. This can be useful for grouping rows
     * together.
     *  @type array
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.orderFixed
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "orderFixed": [[0,'asc']]
     *      } );
     *    } )
     */
    "aaSortingFixed": [],


    /**
     * DataTables can be instructed to load data to display in the table from a
     * Ajax source. This option defines how that Ajax call is made and where to.
     *
     * The `ajax` property has three different modes of operation, depending on
     * how it is defined. These are:
     *
     * * `string` - Set the URL from where the data should be loaded from.
     * * `object` - Define properties for `jQuery.ajax`.
     * * `function` - Custom data get function
     *
     * `string`
     * --------
     *
     * As a string, the `ajax` property simply defines the URL from which
     * DataTables will load data.
     *
     * `object`
     * --------
     *
     * As an object, the parameters in the object are passed to
     * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
     * of the Ajax request. DataTables has a number of default parameters which
     * you can override using this option. Please refer to the jQuery
     * documentation for a full description of the options available, although
     * the following parameters provide additional options in DataTables or
     * require special consideration:
     *
     * * `data` - As with jQuery, `data` can be provided as an object, but it
     *   can also be used as a function to manipulate the data DataTables sends
     *   to the server. The function takes a single parameter, an object of
     *   parameters with the values that DataTables has readied for sending. An
     *   object may be returned which will be merged into the DataTables
     *   defaults, or you can add the items to the object that was passed in and
     *   not return anything from the function. This supersedes `fnServerParams`
     *   from DataTables 1.9-.
     *
     * * `dataSrc` - By default DataTables will look for the property `data` (or
     *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
     *   from an Ajax source or for server-side processing - this parameter
     *   allows that property to be changed. You can use Javascript dotted
     *   object notation to get a data source for multiple levels of nesting, or
     *   it my be used as a function. As a function it takes a single parameter,
     *   the JSON returned from the server, which can be manipulated as
     *   required, with the returned value being that used by DataTables as the
     *   data source for the table. This supersedes `sAjaxDataProp` from
     *   DataTables 1.9-.
     *
     * * `success` - Should not be overridden it is used internally in
     *   DataTables. To manipulate / transform the data returned by the server
     *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
     *
     * `function`
     * ----------
     *
     * As a function, making the Ajax call is left up to yourself allowing
     * complete control of the Ajax request. Indeed, if desired, a method other
     * than Ajax could be used to obtain the required data, such as Web storage
     * or an AIR database.
     *
     * The function is given four parameters and no return is required. The
     * parameters are:
     *
     * 1. _object_ - Data to send to the server
     * 2. _function_ - Callback function that must be executed when the required
     *    data has been obtained. That data should be passed into the callback
     *    as the only parameter
     * 3. _object_ - DataTables settings object for the table
     *
     * Note that this supersedes `fnServerData` from DataTables 1.9-.
     *
     *  @type string|object|function
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.ajax
     *  @since 1.10.0
     *
     * @example
     *   // Get JSON data from a file via Ajax.
     *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
     *   $('#example').dataTable( {
     *     "ajax": "data.json"
     *   } );
     *
     * @example
     *   // Get JSON data from a file via Ajax, using `dataSrc` to change
     *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": "tableData"
     *     }
     *   } );
     *
     * @example
     *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
     *   // from a plain array rather than an array in an object
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": ""
     *     }
     *   } );
     *
     * @example
     *   // Manipulate the data returned from the server - add a link to data
     *   // (note this can, should, be done using `render` for the column - this
     *   // is just a simple example of how the data can be manipulated).
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": function ( json ) {
     *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
     *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
     *         }
     *         return json;
     *       }
     *     }
     *   } );
     *
     * @example
     *   // Add data to the request
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "data": function ( d ) {
     *         return {
     *           "extra_search": $('#extra').val()
     *         };
     *       }
     *     }
     *   } );
     *
     * @example
     *   // Send request as POST
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "type": "POST"
     *     }
     *   } );
     *
     * @example
     *   // Get the data from localStorage (could interface with a form for
     *   // adding, editing and removing rows).
     *   $('#example').dataTable( {
     *     "ajax": function (data, callback, settings) {
     *       callback(
     *         JSON.parse( localStorage.getItem('dataTablesData') )
     *       );
     *     }
     *   } );
     */
    "ajax": null,


    /**
     * This parameter allows you to readily specify the entries in the length drop
     * down menu that DataTables shows when pagination is enabled. It can be
     * either a 1D array of options which will be used for both the displayed
     * option and the value, or a 2D array which will use the array in the first
     * position as the value, and the array in the second position as the
     * displayed options (useful for language strings such as 'All').
     *
     * Note that the `pageLength` property will be automatically set to the
     * first value given in this array, unless `pageLength` is also provided.
     *  @type array
     *  @default [ 10, 25, 50, 100 ]
     *
     *  @dtopt Option
     *  @name DataTable.defaults.lengthMenu
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
     *      } );
     *    } );
     */
    "aLengthMenu": [ 10, 25, 50, 100 ],


    /**
     * The `columns` option in the initialisation parameter allows you to define
     * details about the way individual columns behave. For a full list of
     * column options that can be set, please see
     * {@link DataTable.defaults.column}. Note that if you use `columns` to
     * define your columns, you must have an entry in the array for every single
     * column that you have in your table (these can be null if you don't which
     * to specify any options).
     *  @member
     *
     *  @name DataTable.defaults.column
     */
    "aoColumns": null,

    /**
     * Very similar to `columns`, `columnDefs` allows you to target a specific
     * column, multiple columns, or all columns, using the `targets` property of
     * each object in the array. This allows great flexibility when creating
     * tables, as the `columnDefs` arrays can be of any length, targeting the
     * columns you specifically want. `columnDefs` may use any of the column
     * options available: {@link DataTable.defaults.column}, but it _must_
     * have `targets` defined in each object in the array. Values in the `targets`
     * array may be:
     *   <ul>
     *     <li>a string - class name will be matched on the TH for the column</li>
     *     <li>0 or a positive integer - column index counting from the left</li>
     *     <li>a negative integer - column index counting from the right</li>
     *     <li>the string "_all" - all columns (i.e. assign a default)</li>
     *   </ul>
     *  @member
     *
     *  @name DataTable.defaults.columnDefs
     */
    "aoColumnDefs": null,


    /**
     * Basically the same as `search`, this parameter defines the individual column
     * filtering state at initialisation time. The array must be of the same size
     * as the number of columns, and each element be an object with the parameters
     * `search` and `escapeRegex` (the latter is optional). 'null' is also
     * accepted and the default will be used.
     *  @type array
     *  @default []
     *
     *  @dtopt Option
     *  @name DataTable.defaults.searchCols
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "searchCols": [
     *          null,
     *          { "search": "My filter" },
     *          null,
     *          { "search": "^[0-9]", "escapeRegex": false }
     *        ]
     *      } );
     *    } )
     */
    "aoSearchCols": [],


    /**
     * An array of CSS classes that should be applied to displayed rows. This
     * array may be of any length, and DataTables will apply each class
     * sequentially, looping when required.
     *  @type array
     *  @default null <i>Will take the values determined by the `oClasses.stripe*`
     *    options</i>
     *
     *  @dtopt Option
     *  @name DataTable.defaults.stripeClasses
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
     *      } );
     *    } )
     */
    "asStripeClasses": null,


    /**
     * Enable or disable automatic column width calculation. This can be disabled
     * as an optimisation (it takes some time to calculate the widths) if the
     * tables widths are passed in using `columns`.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.autoWidth
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "autoWidth": false
     *      } );
     *    } );
     */
    "bAutoWidth": true,


    /**
     * Deferred rendering can provide DataTables with a huge speed boost when you
     * are using an Ajax or JS data source for the table. This option, when set to
     * true, will cause DataTables to defer the creation of the table elements for
     * each row until they are needed for a draw - saving a significant amount of
     * time.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.deferRender
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajax": "sources/arrays.txt",
     *        "deferRender": true
     *      } );
     *    } );
     */
    "bDeferRender": false,


    /**
     * Replace a DataTable which matches the given selector and replace it with
     * one which has the properties of the new initialisation object passed. If no
     * table matches the selector, then the new DataTable will be constructed as
     * per normal.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.destroy
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "srollY": "200px",
     *        "paginate": false
     *      } );
     *
     *      // Some time later....
     *      $('#example').dataTable( {
     *        "filter": false,
     *        "destroy": true
     *      } );
     *    } );
     */
    "bDestroy": false,


    /**
     * Enable or disable filtering of data. Filtering in DataTables is "smart" in
     * that it allows the end user to input multiple words (space separated) and
     * will match a row containing those words, even if not in the order that was
     * specified (this allow matching across multiple columns). Note that if you
     * wish to use filtering in DataTables this must remain 'true' - to remove the
     * default filtering input box and retain filtering abilities, please use
     * {@link DataTable.defaults.dom}.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.searching
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "searching": false
     *      } );
     *    } );
     */
    "bFilter": true,


    /**
     * Enable or disable the table information display. This shows information
     * about the data that is currently visible on the page, including information
     * about filtered data if that action is being performed.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.info
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "info": false
     *      } );
     *    } );
     */
    "bInfo": true,


    /**
     * Allows the end user to select the size of a formatted page from a select
     * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.lengthChange
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "lengthChange": false
     *      } );
     *    } );
     */
    "bLengthChange": true,


    /**
     * Enable or disable pagination.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.paging
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "paging": false
     *      } );
     *    } );
     */
    "bPaginate": true,


    /**
     * Enable or disable the display of a 'processing' indicator when the table is
     * being processed (e.g. a sort). This is particularly useful for tables with
     * large amounts of data where it can take a noticeable amount of time to sort
     * the entries.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.processing
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "processing": true
     *      } );
     *    } );
     */
    "bProcessing": false,


    /**
     * Retrieve the DataTables object for the given selector. Note that if the
     * table has already been initialised, this parameter will cause DataTables
     * to simply return the object that has already been set up - it will not take
     * account of any changes you might have made to the initialisation object
     * passed to DataTables (setting this parameter to true is an acknowledgement
     * that you understand this). `destroy` can be used to reinitialise a table if
     * you need.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.retrieve
     *
     *  @example
     *    $(document).ready( function() {
     *      initTable();
     *      tableActions();
     *    } );
     *
     *    function initTable ()
     *    {
     *      return $('#example').dataTable( {
     *        "scrollY": "200px",
     *        "paginate": false,
     *        "retrieve": true
     *      } );
     *    }
     *
     *    function tableActions ()
     *    {
     *      var table = initTable();
     *      // perform API operations with oTable
     *    }
     */
    "bRetrieve": false,


    /**
     * When vertical (y) scrolling is enabled, DataTables will force the height of
     * the table's viewport to the given height at all times (useful for layout).
     * However, this can look odd when filtering data down to a small data set,
     * and the footer is left "floating" further down. This parameter (when
     * enabled) will cause DataTables to collapse the table's viewport down when
     * the result set will fit within the given Y height.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.scrollCollapse
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollY": "200",
     *        "scrollCollapse": true
     *      } );
     *    } );
     */
    "bScrollCollapse": false,


    /**
     * Configure DataTables to use server-side processing. Note that the
     * `ajax` parameter must also be given in order to give DataTables a
     * source to obtain the required data for each draw.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverSide
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "xhr.php"
     *      } );
     *    } );
     */
    "bServerSide": false,


    /**
     * Enable or disable sorting of columns. Sorting of individual columns can be
     * disabled by the `sortable` option for each column.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.ordering
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "ordering": false
     *      } );
     *    } );
     */
    "bSort": true,


    /**
     * Enable or display DataTables' ability to sort multiple columns at the
     * same time (activated by shift-click by the user).
     *  @type boolean
     *  @default true
     *
     *  @dtopt Options
     *  @name DataTable.defaults.orderMulti
     *
     *  @example
     *    // Disable multiple column sorting ability
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "orderMulti": false
     *      } );
     *    } );
     */
    "bSortMulti": true,


    /**
     * Allows control over whether DataTables should use the top (true) unique
     * cell that is found for a single column, or the bottom (false - default).
     * This is useful when using complex headers.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.orderCellsTop
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "orderCellsTop": true
     *      } );
     *    } );
     */
    "bSortCellsTop": false,


    /**
     * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
     * `sorting\_3` to the columns which are currently being sorted on. This is
     * presented as a feature switch as it can increase processing time (while
     * classes are removed and added) so for large data sets you might want to
     * turn this off.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.orderClasses
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "orderClasses": false
     *      } );
     *    } );
     */
    "bSortClasses": true,


    /**
     * Enable or disable state saving. When enabled HTML5 `localStorage` will be
     * used to save table display information such as pagination information,
     * display length, filtering and sorting. As such when the end user reloads
     * the page the display display will match what thy had previously set up.
     *
     * Due to the use of `localStorage` the default state saving is not supported
     * in IE6 or 7. If state saving is required in those browsers, use
     * `stateSaveCallback` to provide a storage solution such as cookies.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.stateSave
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "stateSave": true
     *      } );
     *    } );
     */
    "bStateSave": false,


    /**
     * This function is called when a TR element is created (and all TD child
     * elements have been inserted), or registered if using a DOM source, allowing
     * manipulation of the TR element (adding classes etc).
     *  @type function
     *  @param {node} row "TR" element for the current row
     *  @param {array} data Raw data array for this row
     *  @param {int} dataIndex The index of this row in the internal aoData array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.createdRow
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "createdRow": function( row, data, dataIndex ) {
     *          // Bold the grade for all 'A' grade browsers
     *          if ( data[4] == "A" )
     *          {
     *            $('td:eq(4)', row).html( '<b>A</b>' );
     *          }
     *        }
     *      } );
     *    } );
     */
    "fnCreatedRow": null,


    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify any aspect you want about the created DOM.
     *  @type function
     *  @param {object} settings DataTables settings object
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.drawCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "drawCallback": function( settings ) {
     *          alert( 'DataTables has redrawn the table' );
     *        }
     *      } );
     *    } );
     */
    "fnDrawCallback": null,


    /**
     * Identical to fnHeaderCallback() but for the table footer this function
     * allows you to modify the table footer on every 'draw' event.
     *  @type function
     *  @param {node} foot "TR" element for the footer
     *  @param {array} data Full table data (as derived from the original HTML)
     *  @param {int} start Index for the current display starting point in the
     *    display array
     *  @param {int} end Index for the current display ending point in the
     *    display array
     *  @param {array int} display Index array to translate the visual position
     *    to the full data array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.footerCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "footerCallback": function( tfoot, data, start, end, display ) {
     *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
     *        }
     *      } );
     *    } )
     */
    "fnFooterCallback": null,


    /**
     * When rendering large numbers in the information element for the table
     * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
     * to have a comma separator for the 'thousands' units (e.g. 1 million is
     * rendered as "1,000,000") to help readability for the end user. This
     * function will override the default method DataTables uses.
     *  @type function
     *  @member
     *  @param {int} toFormat number to be formatted
     *  @returns {string} formatted string for DataTables to show the number
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.formatNumber
     *
     *  @example
     *    // Format a number using a single quote for the separator (note that
     *    // this can also be done with the language.thousands option)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "formatNumber": function ( toFormat ) {
     *          return toFormat.toString().replace(
     *            /\B(?=(\d{3})+(?!\d))/g, "'"
     *          );
     *        };
     *      } );
     *    } );
     */
    "fnFormatNumber": function ( toFormat ) {
      return toFormat.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        this.oLanguage.sThousands
      );
    },


    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify the header row. This can be used to calculate and
     * display useful information about the table.
     *  @type function
     *  @param {node} head "TR" element for the header
     *  @param {array} data Full table data (as derived from the original HTML)
     *  @param {int} start Index for the current display starting point in the
     *    display array
     *  @param {int} end Index for the current display ending point in the
     *    display array
     *  @param {array int} display Index array to translate the visual position
     *    to the full data array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.headerCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "fheaderCallback": function( head, data, start, end, display ) {
     *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
     *        }
     *      } );
     *    } )
     */
    "fnHeaderCallback": null,


    /**
     * The information element can be used to convey information about the current
     * state of the table. Although the internationalisation options presented by
     * DataTables are quite capable of dealing with most customisations, there may
     * be times where you wish to customise the string further. This callback
     * allows you to do exactly that.
     *  @type function
     *  @param {object} oSettings DataTables settings object
     *  @param {int} start Starting position in data for the draw
     *  @param {int} end End position in data for the draw
     *  @param {int} max Total number of rows in the table (regardless of
     *    filtering)
     *  @param {int} total Total number of rows in the data set, after filtering
     *  @param {string} pre The string that DataTables has formatted using it's
     *    own rules
     *  @returns {string} The string to be displayed in the information element.
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.infoCallback
     *
     *  @example
     *    $('#example').dataTable( {
     *      "infoCallback": function( settings, start, end, max, total, pre ) {
     *        return start +" to "+ end;
     *      }
     *    } );
     */
    "fnInfoCallback": null,


    /**
     * Called when the table has been initialised. Normally DataTables will
     * initialise sequentially and there will be no need for this function,
     * however, this does not hold true when using external language information
     * since that is obtained using an async XHR call.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} json The JSON object request from the server - only
     *    present if client-side Ajax sourced data is used
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.initComplete
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "initComplete": function(settings, json) {
     *          alert( 'DataTables has finished its initialisation.' );
     *        }
     *      } );
     *    } )
     */
    "fnInitComplete": null,


    /**
     * Called at the very start of each table draw and can be used to cancel the
     * draw by returning false, any other return (including undefined) results in
     * the full draw occurring).
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @returns {boolean} False will cancel the draw, anything else (including no
     *    return) will allow it to complete.
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.preDrawCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "preDrawCallback": function( settings ) {
     *          if ( $('#test').val() == 1 ) {
     *            return false;
     *          }
     *        }
     *      } );
     *    } );
     */
    "fnPreDrawCallback": null,


    /**
     * This function allows you to 'post process' each row after it have been
     * generated for each table draw, but before it is rendered on screen. This
     * function might be used for setting the row class name etc.
     *  @type function
     *  @param {node} row "TR" element for the current row
     *  @param {array} data Raw data array for this row
     *  @param {int} displayIndex The display index for the current table draw
     *  @param {int} displayIndexFull The index of the data in the full list of
     *    rows (after filtering)
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.rowCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
     *          // Bold the grade for all 'A' grade browsers
     *          if ( data[4] == "A" ) {
     *            $('td:eq(4)', row).html( '<b>A</b>' );
     *          }
     *        }
     *      } );
     *    } );
     */
    "fnRowCallback": null,


    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * This parameter allows you to override the default function which obtains
     * the data from the server so something more suitable for your application.
     * For example you could use POST data, or pull information from a Gears or
     * AIR database.
     *  @type function
     *  @member
     *  @param {string} source HTTP source to obtain the data from (`ajax`)
     *  @param {array} data A key/value pair object containing the data to send
     *    to the server
     *  @param {function} callback to be called on completion of the data get
     *    process that will draw the data on the page.
     *  @param {object} settings DataTables settings object
     *
     *  @dtopt Callbacks
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverData
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    "fnServerData": null,


    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     *  It is often useful to send extra data to the server when making an Ajax
     * request - for example custom filtering information, and this callback
     * function makes it trivial to send extra information to the server. The
     * passed in parameter is the data set that has been constructed by
     * DataTables, and you can add to this or modify it as you require.
     *  @type function
     *  @param {array} data Data array (array of objects which are name/value
     *    pairs) that has been constructed by DataTables and will be sent to the
     *    server. In the case of Ajax sourced data with server-side processing
     *    this will be an empty array, for server-side processing there will be a
     *    significant number of parameters!
     *  @returns {undefined} Ensure that you modify the data array passed in,
     *    as this is passed by reference.
     *
     *  @dtopt Callbacks
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverParams
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    "fnServerParams": null,


    /**
     * Load the table state. With this function you can define from where, and how, the
     * state of a table is loaded. By default DataTables will load from `localStorage`
     * but you might wish to use a server-side database or cookies.
     *  @type function
     *  @member
     *  @param {object} settings DataTables settings object
     *  @param {object} callback Callback that can be executed when done. It
     *    should be passed the loaded state object.
     *  @return {object} The DataTables state object to be loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoadCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadCallback": function (settings, callback) {
     *          $.ajax( {
     *            "url": "/state_load",
     *            "dataType": "json",
     *            "success": function (json) {
     *              callback( json );
     *            }
     *          } );
     *        }
     *      } );
     *    } );
     */
    "fnStateLoadCallback": function ( settings ) {
      try {
        return JSON.parse(
          (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
            'DataTables_'+settings.sInstance+'_'+location.pathname
          )
        );
      } catch (e) {
        return {};
      }
    },


    /**
     * Callback which allows modification of the saved state prior to loading that state.
     * This callback is called when the table is loading state from the stored data, but
     * prior to the settings object being modified by the saved state. Note that for
     * plug-in authors, you should use the `stateLoadParams` event to load parameters for
     * a plug-in.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object that is to be loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoadParams
     *
     *  @example
     *    // Remove a saved filter, so filtering is never loaded
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadParams": function (settings, data) {
     *          data.oSearch.sSearch = "";
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Disallow state loading by returning false
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadParams": function (settings, data) {
     *          return false;
     *        }
     *      } );
     *    } );
     */
    "fnStateLoadParams": null,


    /**
     * Callback that is called when the state has been loaded from the state saving method
     * and the DataTables settings object has been modified as a result of the loaded state.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object that was loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoaded
     *
     *  @example
     *    // Show an alert with the filtering value that was saved
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoaded": function (settings, data) {
     *          alert( 'Saved filter was: '+data.oSearch.sSearch );
     *        }
     *      } );
     *    } );
     */
    "fnStateLoaded": null,


    /**
     * Save the table state. This function allows you to define where and how the state
     * information for the table is stored By default DataTables will use `localStorage`
     * but you might wish to use a server-side database or cookies.
     *  @type function
     *  @member
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object to be saved
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateSaveCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateSaveCallback": function (settings, data) {
     *          // Send an Ajax request to the server with the state object
     *          $.ajax( {
     *            "url": "/state_save",
     *            "data": data,
     *            "dataType": "json",
     *            "method": "POST"
     *            "success": function () {}
     *          } );
     *        }
     *      } );
     *    } );
     */
    "fnStateSaveCallback": function ( settings, data ) {
      try {
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
          'DataTables_'+settings.sInstance+'_'+location.pathname,
          JSON.stringify( data )
        );
      } catch (e) {}
    },


    /**
     * Callback which allows modification of the state to be saved. Called when the table
     * has changed state a new state save is required. This method allows modification of
     * the state saving object prior to actually doing the save, including addition or
     * other state properties or modification. Note that for plug-in authors, you should
     * use the `stateSaveParams` event to save parameters for a plug-in.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object to be saved
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateSaveParams
     *
     *  @example
     *    // Remove a saved filter, so filtering is never saved
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateSaveParams": function (settings, data) {
     *          data.oSearch.sSearch = "";
     *        }
     *      } );
     *    } );
     */
    "fnStateSaveParams": null,


    /**
     * Duration for which the saved state information is considered valid. After this period
     * has elapsed the state will be returned to the default.
     * Value is given in seconds.
     *  @type int
     *  @default 7200 <i>(2 hours)</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.stateDuration
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateDuration": 60*60*24; // 1 day
     *      } );
     *    } )
     */
    "iStateDuration": 7200,


    /**
     * When enabled DataTables will not make a request to the server for the first
     * page draw - rather it will use the data already on the page (no sorting etc
     * will be applied to it), thus saving on an XHR at load time. `deferLoading`
     * is used to indicate that deferred loading is required, but it is also used
     * to tell DataTables how many records there are in the full table (allowing
     * the information element and pagination to be displayed correctly). In the case
     * where a filtering is applied to the table on initial load, this can be
     * indicated by giving the parameter as an array, where the first element is
     * the number of records available after filtering and the second element is the
     * number of records without filtering (allowing the table information element
     * to be shown correctly).
     *  @type int | array
     *  @default null
     *
     *  @dtopt Options
     *  @name DataTable.defaults.deferLoading
     *
     *  @example
     *    // 57 records available in the table, no filtering applied
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "scripts/server_processing.php",
     *        "deferLoading": 57
     *      } );
     *    } );
     *
     *  @example
     *    // 57 records after filtering, 100 without filtering (an initial filter applied)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "scripts/server_processing.php",
     *        "deferLoading": [ 57, 100 ],
     *        "search": {
     *          "search": "my_filter"
     *        }
     *      } );
     *    } );
     */
    "iDeferLoading": null,


    /**
     * Number of rows to display on a single page when using pagination. If
     * feature enabled (`lengthChange`) then the end user will be able to override
     * this to a custom setting using a pop-up menu.
     *  @type int
     *  @default 10
     *
     *  @dtopt Options
     *  @name DataTable.defaults.pageLength
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "pageLength": 50
     *      } );
     *    } )
     */
    "iDisplayLength": 10,


    /**
     * Define the starting point for data display when using DataTables with
     * pagination. Note that this parameter is the number of records, rather than
     * the page number, so if you have 10 records per page and want to start on
     * the third page, it should be "20".
     *  @type int
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.displayStart
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "displayStart": 20
     *      } );
     *    } )
     */
    "iDisplayStart": 0,


    /**
     * By default DataTables allows keyboard navigation of the table (sorting, paging,
     * and filtering) by adding a `tabindex` attribute to the required elements. This
     * allows you to tab through the controls and press the enter key to activate them.
     * The tabindex is default 0, meaning that the tab follows the flow of the document.
     * You can overrule this using this parameter if you wish. Use a value of -1 to
     * disable built-in keyboard navigation.
     *  @type int
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.tabIndex
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "tabIndex": 1
     *      } );
     *    } );
     */
    "iTabIndex": 0,


    /**
     * Classes that DataTables assigns to the various components and features
     * that it adds to the HTML table. This allows classes to be configured
     * during initialisation in addition to through the static
     * {@link DataTable.ext.oStdClasses} object).
     *  @namespace
     *  @name DataTable.defaults.classes
     */
    "oClasses": {},


    /**
     * All strings that DataTables uses in the user interface that it creates
     * are defined in this object, allowing you to modified them individually or
     * completely replace them all as required.
     *  @namespace
     *  @name DataTable.defaults.language
     */
    "oLanguage": {
      /**
       * Strings that are used for WAI-ARIA labels and controls only (these are not
       * actually visible on the page, but will be read by screenreaders, and thus
       * must be internationalised as well).
       *  @namespace
       *  @name DataTable.defaults.language.aria
       */
      "oAria": {
        /**
         * ARIA label that is added to the table headers when the column may be
         * sorted ascending by activing the column (click or return when focused).
         * Note that the column header is prefixed to this string.
         *  @type string
         *  @default : activate to sort column ascending
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.aria.sortAscending
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "aria": {
         *            "sortAscending": " - click/return to sort ascending"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sSortAscending": ": activate to sort column ascending",

        /**
         * ARIA label that is added to the table headers when the column may be
         * sorted descending by activing the column (click or return when focused).
         * Note that the column header is prefixed to this string.
         *  @type string
         *  @default : activate to sort column ascending
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.aria.sortDescending
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "aria": {
         *            "sortDescending": " - click/return to sort descending"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sSortDescending": ": activate to sort column descending"
      },

      /**
       * Pagination string used by DataTables for the built-in pagination
       * control types.
       *  @namespace
       *  @name DataTable.defaults.language.paginate
       */
      "oPaginate": {
        /**
         * Text to use when using the 'full_numbers' type of pagination for the
         * button to take the user to the first page.
         *  @type string
         *  @default First
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.first
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "first": "First page"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sFirst": "First",


        /**
         * Text to use when using the 'full_numbers' type of pagination for the
         * button to take the user to the last page.
         *  @type string
         *  @default Last
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.last
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "last": "Last page"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sLast": "Last",


        /**
         * Text to use for the 'next' pagination button (to take the user to the
         * next page).
         *  @type string
         *  @default Next
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.next
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "next": "Next page"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sNext": "Next",


        /**
         * Text to use for the 'previous' pagination button (to take the user to
         * the previous page).
         *  @type string
         *  @default Previous
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.previous
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "previous": "Previous page"
         *          }
         *        }
         *      } );
         *    } );
         */
        "sPrevious": "Previous"
      },

      /**
       * This string is shown in preference to `zeroRecords` when the table is
       * empty of data (regardless of filtering). Note that this is an optional
       * parameter - if it is not given, the value of `zeroRecords` will be used
       * instead (either the default or given value).
       *  @type string
       *  @default No data available in table
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.emptyTable
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "emptyTable": "No data available in table"
       *        }
       *      } );
       *    } );
       */
      "sEmptyTable": "No data available in table",


      /**
       * This string gives information to the end user about the information
       * that is current on display on the page. The following tokens can be
       * used in the string and will be dynamically replaced as the table
       * display updates. This tokens can be placed anywhere in the string, or
       * removed as needed by the language requires:
       *
       * * `\_START\_` - Display index of the first record on the current page
       * * `\_END\_` - Display index of the last record on the current page
       * * `\_TOTAL\_` - Number of records in the table after filtering
       * * `\_MAX\_` - Number of records in the table without filtering
       * * `\_PAGE\_` - Current page number
       * * `\_PAGES\_` - Total number of pages of data in the table
       *
       *  @type string
       *  @default Showing _START_ to _END_ of _TOTAL_ entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.info
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "info": "Showing page _PAGE_ of _PAGES_"
       *        }
       *      } );
       *    } );
       */
      "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


      /**
       * Display information string for when the table is empty. Typically the
       * format of this string should match `info`.
       *  @type string
       *  @default Showing 0 to 0 of 0 entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoEmpty
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoEmpty": "No entries to show"
       *        }
       *      } );
       *    } );
       */
      "sInfoEmpty": "Showing 0 to 0 of 0 entries",


      /**
       * When a user filters the information in a table, this string is appended
       * to the information (`info`) to give an idea of how strong the filtering
       * is. The variable _MAX_ is dynamically updated.
       *  @type string
       *  @default (filtered from _MAX_ total entries)
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoFiltered
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoFiltered": " - filtering from _MAX_ records"
       *        }
       *      } );
       *    } );
       */
      "sInfoFiltered": "(filtered from _MAX_ total entries)",


      /**
       * If can be useful to append extra information to the info string at times,
       * and this variable does exactly that. This information will be appended to
       * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
       * being used) at all times.
       *  @type string
       *  @default <i>Empty string</i>
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoPostFix
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoPostFix": "All records shown are derived from real information."
       *        }
       *      } );
       *    } );
       */
      "sInfoPostFix": "",


      /**
       * This decimal place operator is a little different from the other
       * language options since DataTables doesn't output floating point
       * numbers, so it won't ever use this for display of a number. Rather,
       * what this parameter does is modify the sort methods of the table so
       * that numbers which are in a format which has a character other than
       * a period (`.`) as a decimal place will be sorted numerically.
       *
       * Note that numbers with different decimal places cannot be shown in
       * the same table and still be sortable, the table must be consistent.
       * However, multiple different tables on the page can use different
       * decimal place characters.
       *  @type string
       *  @default
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.decimal
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "decimal": ","
       *          "thousands": "."
       *        }
       *      } );
       *    } );
       */
      "sDecimal": "",


      /**
       * DataTables has a build in number formatter (`formatNumber`) which is
       * used to format large numbers that are used in the table information.
       * By default a comma is used, but this can be trivially changed to any
       * character you wish with this parameter.
       *  @type string
       *  @default ,
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.thousands
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "thousands": "'"
       *        }
       *      } );
       *    } );
       */
      "sThousands": ",",


      /**
       * Detail the action that will be taken when the drop down menu for the
       * pagination length option is changed. The '_MENU_' variable is replaced
       * with a default select list of 10, 25, 50 and 100, and can be replaced
       * with a custom select box if required.
       *  @type string
       *  @default Show _MENU_ entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.lengthMenu
       *
       *  @example
       *    // Language change only
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "lengthMenu": "Display _MENU_ records"
       *        }
       *      } );
       *    } );
       *
       *  @example
       *    // Language and options change
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "lengthMenu": 'Display <select>'+
       *            '<option value="10">10</option>'+
       *            '<option value="20">20</option>'+
       *            '<option value="30">30</option>'+
       *            '<option value="40">40</option>'+
       *            '<option value="50">50</option>'+
       *            '<option value="-1">All</option>'+
       *            '</select> records'
       *        }
       *      } );
       *    } );
       */
      "sLengthMenu": "Show _MENU_ entries",


      /**
       * When using Ajax sourced data and during the first draw when DataTables is
       * gathering the data, this message is shown in an empty row in the table to
       * indicate to the end user the the data is being loaded. Note that this
       * parameter is not used when loading data by server-side processing, just
       * Ajax sourced data with client-side processing.
       *  @type string
       *  @default Loading...
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.loadingRecords
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "loadingRecords": "Please wait - loading..."
       *        }
       *      } );
       *    } );
       */
      "sLoadingRecords": "Loading...",


      /**
       * Text which is displayed when the table is processing a user action
       * (usually a sort command or similar).
       *  @type string
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.processing
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "processing": "DataTables is currently busy"
       *        }
       *      } );
       *    } );
       */
      "sProcessing": "",


      /**
       * Details the actions that will be taken when the user types into the
       * filtering input text box. The variable "_INPUT_", if used in the string,
       * is replaced with the HTML text box for the filtering input allowing
       * control over where it appears in the string. If "_INPUT_" is not given
       * then the input box is appended to the string automatically.
       *  @type string
       *  @default Search:
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.search
       *
       *  @example
       *    // Input text box will be appended at the end automatically
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "search": "Filter records:"
       *        }
       *      } );
       *    } );
       *
       *  @example
       *    // Specify where the filter should appear
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "search": "Apply filter _INPUT_ to table"
       *        }
       *      } );
       *    } );
       */
      "sSearch": "Search:",


      /**
       * Assign a `placeholder` attribute to the search `input` element
       *  @type string
       *  @default
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.searchPlaceholder
       */
      "sSearchPlaceholder": "",


      /**
       * All of the language information can be stored in a file on the
       * server-side, which DataTables will look up if this parameter is passed.
       * It must store the URL of the language file, which is in a JSON format,
       * and the object has the same properties as the oLanguage object in the
       * initialiser object (i.e. the above parameters). Please refer to one of
       * the example language files to see how this works in action.
       *  @type string
       *  @default <i>Empty string - i.e. disabled</i>
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.url
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
       *        }
       *      } );
       *    } );
       */
      "sUrl": "",


      /**
       * Text shown inside the table records when the is no information to be
       * displayed after filtering. `emptyTable` is shown when there is simply no
       * information in the table at all (regardless of filtering).
       *  @type string
       *  @default No matching records found
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.zeroRecords
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "zeroRecords": "No records to display"
       *        }
       *      } );
       *    } );
       */
      "sZeroRecords": "No matching records found"
    },


    /**
     * This parameter allows you to have define the global filtering state at
     * initialisation time. As an object the `search` parameter must be
     * defined, but all other parameters are optional. When `regex` is true,
     * the search string will be treated as a regular expression, when false
     * (default) it will be treated as a straight string. When `smart`
     * DataTables will use it's smart filtering methods (to word match at
     * any point in the data), when false this will not be done.
     *  @namespace
     *  @extends DataTable.models.oSearch
     *
     *  @dtopt Options
     *  @name DataTable.defaults.search
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "search": {"search": "Initial search"}
     *      } );
     *    } )
     */
    "oSearch": $.extend( {}, DataTable.models.oSearch ),


    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * By default DataTables will look for the property `data` (or `aaData` for
     * compatibility with DataTables 1.9-) when obtaining data from an Ajax
     * source or for server-side processing - this parameter allows that
     * property to be changed. You can use Javascript dotted object notation to
     * get a data source for multiple levels of nesting.
     *  @type string
     *  @default data
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.ajaxDataProp
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    "sAjaxDataProp": "data",


    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * You can instruct DataTables to load data from an external
     * source using this parameter (use aData if you want to pass data in you
     * already have). Simply provide a url a JSON object can be obtained from.
     *  @type string
     *  @default null
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.ajaxSource
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    "sAjaxSource": null,


    /**
     * This initialisation variable allows you to specify exactly where in the
     * DOM you want DataTables to inject the various controls it adds to the page
     * (for example you might want the pagination controls at the top of the
     * table). DIV elements (with or without a custom class) can also be added to
     * aid styling. The follow syntax is used:
     *   <ul>
     *     <li>The following options are allowed:
     *       <ul>
     *         <li>'l' - Length changing</li>
     *         <li>'f' - Filtering input</li>
     *         <li>'t' - The table!</li>
     *         <li>'i' - Information</li>
     *         <li>'p' - Pagination</li>
     *         <li>'r' - pRocessing</li>
     *       </ul>
     *     </li>
     *     <li>The following constants are allowed:
     *       <ul>
     *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
     *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
     *       </ul>
     *     </li>
     *     <li>The following syntax is expected:
     *       <ul>
     *         <li>'&lt;' and '&gt;' - div elements</li>
     *         <li>'&lt;"class" and '&gt;' - div with a class</li>
     *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
     *       </ul>
     *     </li>
     *     <li>Examples:
     *       <ul>
     *         <li>'&lt;"wrapper"flipt&gt;'</li>
     *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
     *       </ul>
     *     </li>
     *   </ul>
     *  @type string
     *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
     *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.dom
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
     *      } );
     *    } );
     */
    "sDom": "lfrtip",


    /**
     * Search delay option. This will throttle full table searches that use the
     * DataTables provided search input element (it does not effect calls to
     * `dt-api search()`, providing a delay before the search is made.
     *  @type integer
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.searchDelay
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "searchDelay": 200
     *      } );
     *    } )
     */
    "searchDelay": null,


    /**
     * DataTables features six different built-in options for the buttons to
     * display for pagination control:
     *
     * * `numbers` - Page number buttons only
     * * `simple` - 'Previous' and 'Next' buttons only
     * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
     * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
     * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
     * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
     *
     * Further methods can be added using {@link DataTable.ext.oPagination}.
     *  @type string
     *  @default simple_numbers
     *
     *  @dtopt Options
     *  @name DataTable.defaults.pagingType
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "pagingType": "full_numbers"
     *      } );
     *    } )
     */
    "sPaginationType": "simple_numbers",


    /**
     * Enable horizontal scrolling. When a table is too wide to fit into a
     * certain layout, or you have a large number of columns in the table, you
     * can enable x-scrolling to show the table in a viewport, which can be
     * scrolled. This property can be `true` which will allow the table to
     * scroll horizontally when needed, or any CSS unit, or a number (in which
     * case it will be treated as a pixel measurement). Setting as simply `true`
     * is recommended.
     *  @type boolean|string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Features
     *  @name DataTable.defaults.scrollX
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollX": true,
     *        "scrollCollapse": true
     *      } );
     *    } );
     */
    "sScrollX": "",


    /**
     * This property can be used to force a DataTable to use more width than it
     * might otherwise do when x-scrolling is enabled. For example if you have a
     * table which requires to be well spaced, this parameter is useful for
     * "over-sizing" the table, and thus forcing scrolling. This property can by
     * any CSS unit, or a number (in which case it will be treated as a pixel
     * measurement).
     *  @type string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.scrollXInner
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollX": "100%",
     *        "scrollXInner": "110%"
     *      } );
     *    } );
     */
    "sScrollXInner": "",


    /**
     * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
     * to the given height, and enable scrolling for any data which overflows the
     * current viewport. This can be used as an alternative to paging to display
     * a lot of data in a small area (although paging and scrolling can both be
     * enabled at the same time). This property can be any CSS unit, or a number
     * (in which case it will be treated as a pixel measurement).
     *  @type string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Features
     *  @name DataTable.defaults.scrollY
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollY": "200px",
     *        "paginate": false
     *      } );
     *    } );
     */
    "sScrollY": "",


    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * Set the HTTP method that is used to make the Ajax call for server-side
     * processing or Ajax sourced data.
     *  @type string
     *  @default GET
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverMethod
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    "sServerMethod": "GET",


    /**
     * DataTables makes use of renderers when displaying HTML elements for
     * a table. These renderers can be added or modified by plug-ins to
     * generate suitable mark-up for a site. For example the Bootstrap
     * integration plug-in for DataTables uses a paging button renderer to
     * display pagination buttons in the mark-up required by Bootstrap.
     *
     * For further information about the renderers available see
     * DataTable.ext.renderer
     *  @type string|object
     *  @default null
     *
     *  @name DataTable.defaults.renderer
     *
     */
    "renderer": null,


    /**
     * Set the data property name that DataTables should use to get a row's id
     * to set as the `id` property in the node.
     *  @type string
     *  @default DT_RowId
     *
     *  @name DataTable.defaults.rowId
     */
    "rowId": "DT_RowId"
  };

  _fnHungarianMap( DataTable.defaults );



  /*
   * Developer note - See note in model.defaults.js about the use of Hungarian
   * notation and camel case.
   */

  /**
   * Column options that can be given to DataTables at initialisation time.
   *  @namespace
   */
  DataTable.defaults.column = {
    /**
     * Define which column(s) an order will occur on for this column. This
     * allows a column's ordering to take multiple columns into account when
     * doing a sort or use the data from a different column. For example first
     * name / last name columns make sense to do a multi-column sort over the
     * two columns.
     *  @type array|int
     *  @default null <i>Takes the value of the column index automatically</i>
     *
     *  @name DataTable.defaults.column.orderData
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
     *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
     *          { "orderData": 2, "targets": [ 2 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "orderData": [ 0, 1 ] },
     *          { "orderData": [ 1, 0 ] },
     *          { "orderData": 2 },
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    "aDataSort": null,
    "iDataSort": -1,


    /**
     * You can control the default ordering direction, and even alter the
     * behaviour of the sort handler (i.e. only allow ascending ordering etc)
     * using this parameter.
     *  @type array
     *  @default [ 'asc', 'desc' ]
     *
     *  @name DataTable.defaults.column.orderSequence
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
     *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
     *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          { "orderSequence": [ "asc" ] },
     *          { "orderSequence": [ "desc", "asc", "asc" ] },
     *          { "orderSequence": [ "desc" ] },
     *          null
     *        ]
     *      } );
     *    } );
     */
    "asSorting": [ 'asc', 'desc' ],


    /**
     * Enable or disable filtering on the data in this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.searchable
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "searchable": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "searchable": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    "bSearchable": true,


    /**
     * Enable or disable ordering on this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.orderable
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderable": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "orderable": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    "bSortable": true,


    /**
     * Enable or disable the display of this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.visible
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "visible": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "visible": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    "bVisible": true,


    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     *  @type function
     *  @param {element} td The TD node that has been created
     *  @param {*} cellData The Data for the cell
     *  @param {array|object} rowData The data for the whole row
     *  @param {int} row The row index for the aoData data store
     *  @param {int} col The column index for aoColumns
     *
     *  @name DataTable.defaults.column.createdCell
     *  @dtopt Columns
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [3],
     *          "createdCell": function (td, cellData, rowData, row, col) {
     *            if ( cellData == "1.7" ) {
     *              $(td).css('color', 'blue')
     *            }
     *          }
     *        } ]
     *      });
     *    } );
     */
    "fnCreatedCell": null,


    /**
     * This parameter has been replaced by `data` in DataTables to ensure naming
     * consistency. `dataProp` can still be used, as there is backwards
     * compatibility in DataTables for this option, but it is strongly
     * recommended that you use `data` in preference to `dataProp`.
     *  @name DataTable.defaults.column.dataProp
     */


    /**
     * This property can be used to read data from any data source property,
     * including deeply nested objects / properties. `data` can be given in a
     * number of different ways which effect its behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object. Note that
     *      function notation is recommended for use in `render` rather than
     *      `data` as it is much simpler to use as a renderer.
     * * `null` - use the original data source for the row rather than plucking
     *   data directly from it. This action has effects on two other
     *   initialisation options:
     *    * `defaultContent` - When null is given as the `data` option and
     *      `defaultContent` is specified for the column, the value defined by
     *      `defaultContent` will be used for the cell.
     *    * `render` - When null is used for the `data` option and the `render`
     *      option is specified for the column, the whole data source for the
     *      row is used for the renderer.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * `{array|object}` The data source for the row
     *      * `{string}` The type call data requested - this will be 'set' when
     *        setting data or 'filter', 'display', 'type', 'sort' or undefined
     *        when gathering data. Note that when `undefined` is given for the
     *        type DataTables expects to get the raw data for the object back<
     *      * `{*}` Data to set when the second parameter is 'set'.
     *    * Return:
     *      * The return value from the function is not required when 'set' is
     *        the type of call, but otherwise the return is what will be used
     *        for the data requested.
     *
     * Note that `data` is a getter and setter option. If you just require
     * formatting of data for output, you will likely want to use `render` which
     * is simply a getter and thus simpler to use.
     *
     * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
     * name change reflects the flexibility of this property and is consistent
     * with the naming of mRender. If 'mDataProp' is given, then it will still
     * be used by DataTables, as it automatically maps the old name to the new
     * if required.
     *
     *  @type string|int|function|null
     *  @default null <i>Use automatically calculated column index</i>
     *
     *  @name DataTable.defaults.column.data
     *  @dtopt Columns
     *
     *  @example
     *    // Read table data from objects
     *    // JSON structure for each row:
     *    //   {
     *    //      "engine": {value},
     *    //      "browser": {value},
     *    //      "platform": {value},
     *    //      "version": {value},
     *    //      "grade": {value}
     *    //   }
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/objects.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          { "data": "platform" },
     *          { "data": "version" },
     *          { "data": "grade" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Read information from deeply nested objects
     *    // JSON structure for each row:
     *    //   {
     *    //      "engine": {value},
     *    //      "browser": {value},
     *    //      "platform": {
     *    //         "inner": {value}
     *    //      },
     *    //      "details": [
     *    //         {value}, {value}
     *    //      ]
     *    //   }
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/deep.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          { "data": "platform.inner" },
     *          { "data": "details.0" },
     *          { "data": "details.1" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `data` as a function to provide different information for
     *    // sorting, filtering and display. In this case, currency (price)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": function ( source, type, val ) {
     *            if (type === 'set') {
     *              source.price = val;
     *              // Store the computed display and filter values for efficiency
     *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
     *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
     *              return;
     *            }
     *            else if (type === 'display') {
     *              return source.price_display;
     *            }
     *            else if (type === 'filter') {
     *              return source.price_filter;
     *            }
     *            // 'sort', 'type' and undefined all just use the integer
     *            return source.price;
     *          }
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using default content
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null,
     *          "defaultContent": "Click to edit"
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using array notation - outputting a list from an array
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": "name[, ]"
     *        } ]
     *      } );
     *    } );
     *
     */
    "mData": null,


    /**
     * This property is the rendering partner to `data` and it is suggested that
     * when you want to manipulate data for display (including filtering,
     * sorting etc) without altering the underlying data for the table, use this
     * property. `render` can be considered to be the the read only companion to
     * `data` which is read / write (then as such more complex). Like `data`
     * this option can be given in a number of different ways to effect its
     * behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object.
     * * `object` - use different data for the different data types requested by
     *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
     *   of the object is the data type the property refers to and the value can
     *   defined using an integer, string or function using the same rules as
     *   `render` normally does. Note that an `_` option _must_ be specified.
     *   This is the default value to use if you haven't specified a value for
     *   the data type requested by DataTables.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * {array|object} The data source for the row (based on `data`)
     *      * {string} The type call data requested - this will be 'filter',
     *        'display', 'type' or 'sort'.
     *      * {array|object} The full data source for the row (not based on
     *        `data`)
     *    * Return:
     *      * The return value from the function is what will be used for the
     *        data requested.
     *
     *  @type string|int|function|object|null
     *  @default null Use the data source value.
     *
     *  @name DataTable.defaults.column.render
     *  @dtopt Columns
     *
     *  @example
     *    // Create a comma separated list from an array of objects
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/deep.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          {
     *            "data": "platform",
     *            "render": "[, ].name"
     *          }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Execute a function to obtain data
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null, // Use the full data source object for the renderer's source
     *          "render": "browserName()"
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // As an object, extracting different data for the different types
     *    // This would be used with a data source such as:
     *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
     *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
     *    // (which has both forms) is used for filtering for if a user inputs either format, while
     *    // the formatted phone number is the one that is shown in the table.
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null, // Use the full data source object for the renderer's source
     *          "render": {
     *            "_": "phone",
     *            "filter": "phone_filter",
     *            "display": "phone_display"
     *          }
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Use as a function to create a link from the data source
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": "download_link",
     *          "render": function ( data, type, full ) {
     *            return '<a href="'+data+'">Download</a>';
     *          }
     *        } ]
     *      } );
     *    } );
     */
    "mRender": null,


    /**
     * Change the cell type created for the column - either TD cells or TH cells. This
     * can be useful as TH cells have semantic meaning in the table body, allowing them
     * to act as a header for a row (you may wish to add scope='row' to the TH elements).
     *  @type string
     *  @default td
     *
     *  @name DataTable.defaults.column.cellType
     *  @dtopt Columns
     *
     *  @example
     *    // Make the first column use TH cells
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "cellType": "th"
     *        } ]
     *      } );
     *    } );
     */
    "sCellType": "td",


    /**
     * Class to give to each cell in this column.
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @name DataTable.defaults.column.class
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "class": "my_class", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "class": "my_class" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    "sClass": "",

    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     * Generally you shouldn't need this!
     *  @type string
     *  @default <i>Empty string<i>
     *
     *  @name DataTable.defaults.column.contentPadding
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          null,
     *          {
     *            "contentPadding": "mmm"
     *          }
     *        ]
     *      } );
     *    } );
     */
    "sContentPadding": "",


    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because `data`
     * is set to null, or because the data source itself is null).
     *  @type string
     *  @default null
     *
     *  @name DataTable.defaults.column.defaultContent
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          {
     *            "data": null,
     *            "defaultContent": "Edit",
     *            "targets": [ -1 ]
     *          }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          null,
     *          {
     *            "data": null,
     *            "defaultContent": "Edit"
     *          }
     *        ]
     *      } );
     *    } );
     */
    "sDefaultContent": null,


    /**
     * This parameter is only used in DataTables' server-side processing. It can
     * be exceptionally useful to know what columns are being displayed on the
     * client side, and to map these to database fields. When defined, the names
     * also allow DataTables to reorder information from the server if it comes
     * back in an unexpected order (i.e. if you switch your columns around on the
     * client-side, your server-side code does not also need updating).
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @name DataTable.defaults.column.name
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "name": "engine", "targets": [ 0 ] },
     *          { "name": "browser", "targets": [ 1 ] },
     *          { "name": "platform", "targets": [ 2 ] },
     *          { "name": "version", "targets": [ 3 ] },
     *          { "name": "grade", "targets": [ 4 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "name": "engine" },
     *          { "name": "browser" },
     *          { "name": "platform" },
     *          { "name": "version" },
     *          { "name": "grade" }
     *        ]
     *      } );
     *    } );
     */
    "sName": "",


    /**
     * Defines a data source type for the ordering which can be used to read
     * real-time information from the table (updating the internally cached
     * version) prior to ordering. This allows ordering to occur on user
     * editable elements such as form inputs.
     *  @type string
     *  @default std
     *
     *  @name DataTable.defaults.column.orderDataType
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
     *          { "type": "numeric", "targets": [ 3 ] },
     *          { "orderDataType": "dom-select", "targets": [ 4 ] },
     *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          { "orderDataType": "dom-text" },
     *          { "orderDataType": "dom-text", "type": "numeric" },
     *          { "orderDataType": "dom-select" },
     *          { "orderDataType": "dom-checkbox" }
     *        ]
     *      } );
     *    } );
     */
    "sSortDataType": "std",


    /**
     * The title of this column.
     *  @type string
     *  @default null <i>Derived from the 'TH' value for this column in the
     *    original HTML table.</i>
     *
     *  @name DataTable.defaults.column.title
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "title": "My column title", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "title": "My column title" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    "sTitle": null,


    /**
     * The type allows you to specify how the data for this column will be
     * ordered. Four types (string, numeric, date and html (which will strip
     * HTML tags before ordering)) are currently available. Note that only date
     * formats understood by Javascript's Date() object will be accepted as type
     * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
     * 'numeric', 'date' or 'html' (by default). Further types can be adding
     * through plug-ins.
     *  @type string
     *  @default null <i>Auto-detected from raw data</i>
     *
     *  @name DataTable.defaults.column.type
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "type": "html", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "type": "html" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    "sType": null,


    /**
     * Defining the width of the column, this parameter may take any CSS value
     * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
     * been given a specific width through this interface ensuring that the table
     * remains readable.
     *  @type string
     *  @default null <i>Automatic</i>
     *
     *  @name DataTable.defaults.column.width
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "width": "20%", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "width": "20%" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    "sWidth": null
  };

  _fnHungarianMap( DataTable.defaults.column );



  /**
   * DataTables settings object - this holds all the information needed for a
   * given table, including configuration, data and current application of the
   * table options. DataTables does not have a single instance for each DataTable
   * with the settings attached to that instance, but rather instances of the
   * DataTable "class" are created on-the-fly as needed (typically by a
   * $().dataTable() call) and the settings object is then applied to that
   * instance.
   *
   * Note that this object is related to {@link DataTable.defaults} but this
   * one is the internal data store for DataTables's cache of columns. It should
   * NOT be manipulated outside of DataTables. Any configuration should be done
   * through the initialisation options.
   *  @namespace
   *  @todo Really should attach the settings object to individual instances so we
   *    don't need to create new instances on each $().dataTable() call (if the
   *    table already exists). It would also save passing oSettings around and
   *    into every single function. However, this is a very significant
   *    architecture change for DataTables and will almost certainly break
   *    backwards compatibility with older installations. This is something that
   *    will be done in 2.0.
   */
  DataTable.models.oSettings = {
    /**
     * Primary features of DataTables and their enablement state.
     *  @namespace
     */
    "oFeatures": {

      /**
       * Flag to say if DataTables should automatically try to calculate the
       * optimum table and columns widths (true) or not (false).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bAutoWidth": null,

      /**
       * Delay the creation of TR and TD elements until they are actually
       * needed by a driven page draw. This can give a significant speed
       * increase for Ajax source and Javascript source data, but makes no
       * difference at all for DOM and server-side processing tables.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bDeferRender": null,

      /**
       * Enable filtering on the table or not. Note that if this is disabled
       * then there is no filtering at all on the table, including fnFilter.
       * To just remove the filtering input use sDom and remove the 'f' option.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bFilter": null,

      /**
       * Table information element (the 'Showing x of y records' div) enable
       * flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bInfo": null,

      /**
       * Present a user control allowing the end user to change the page size
       * when pagination is enabled.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bLengthChange": null,

      /**
       * Pagination enabled or not. Note that if this is disabled then length
       * changing must also be disabled.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bPaginate": null,

      /**
       * Processing indicator enable flag whenever DataTables is enacting a
       * user request - typically an Ajax request for server-side processing.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bProcessing": null,

      /**
       * Server-side processing enabled flag - when enabled DataTables will
       * get all data from the server for every draw - there is no filtering,
       * sorting or paging done on the client-side.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bServerSide": null,

      /**
       * Sorting enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bSort": null,

      /**
       * Multi-column sorting
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bSortMulti": null,

      /**
       * Apply a class to the columns which are being sorted to provide a
       * visual highlight or not. This can slow things down when enabled since
       * there is a lot of DOM interaction.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bSortClasses": null,

      /**
       * State saving enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bStateSave": null
    },


    /**
     * Scrolling settings for a table.
     *  @namespace
     */
    "oScroll": {
      /**
       * When the table is shorter in height than sScrollY, collapse the
       * table container down to the height of the table (when true).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      "bCollapse": null,

      /**
       * Width of the scrollbar for the web-browser's platform. Calculated
       * during table initialisation.
       *  @type int
       *  @default 0
       */
      "iBarWidth": 0,

      /**
       * Viewport width for horizontal scrolling. Horizontal scrolling is
       * disabled if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       */
      "sX": null,

      /**
       * Width to expand the table to when using x-scrolling. Typically you
       * should not need to use this.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       *  @deprecated
       */
      "sXInner": null,

      /**
       * Viewport height for vertical scrolling. Vertical scrolling is disabled
       * if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       */
      "sY": null
    },

    /**
     * Language information for the table.
     *  @namespace
     *  @extends DataTable.defaults.oLanguage
     */
    "oLanguage": {
      /**
       * Information callback function. See
       * {@link DataTable.defaults.fnInfoCallback}
       *  @type function
       *  @default null
       */
      "fnInfoCallback": null
    },

    /**
     * Browser support parameters
     *  @namespace
     */
    "oBrowser": {
      /**
       * Indicate if the browser incorrectly calculates width:100% inside a
       * scrolling element (IE6/7)
       *  @type boolean
       *  @default false
       */
      "bScrollOversize": false,

      /**
       * Determine if the vertical scrollbar is on the right or left of the
       * scrolling container - needed for rtl language layout, although not
       * all browsers move the scrollbar (Safari).
       *  @type boolean
       *  @default false
       */
      "bScrollbarLeft": false,

      /**
       * Flag for if `getBoundingClientRect` is fully supported or not
       *  @type boolean
       *  @default false
       */
      "bBounding": false,

      /**
       * Browser scrollbar width
       *  @type integer
       *  @default 0
       */
      "barWidth": 0
    },


    "ajax": null,


    /**
     * Array referencing the nodes which are used for the features. The
     * parameters of this object match what is allowed by sDom - i.e.
     *   <ul>
     *     <li>'l' - Length changing</li>
     *     <li>'f' - Filtering input</li>
     *     <li>'t' - The table!</li>
     *     <li>'i' - Information</li>
     *     <li>'p' - Pagination</li>
     *     <li>'r' - pRocessing</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    "aanFeatures": [],

    /**
     * Store data information - see {@link DataTable.models.oRow} for detailed
     * information.
     *  @type array
     *  @default []
     */
    "aoData": [],

    /**
     * Array of indexes which are in the current display (after filtering etc)
     *  @type array
     *  @default []
     */
    "aiDisplay": [],

    /**
     * Array of indexes for display - no filtering
     *  @type array
     *  @default []
     */
    "aiDisplayMaster": [],

    /**
     * Map of row ids to data indexes
     *  @type object
     *  @default {}
     */
    "aIds": {},

    /**
     * Store information about each column that is in use
     *  @type array
     *  @default []
     */
    "aoColumns": [],

    /**
     * Store information about the table's header
     *  @type array
     *  @default []
     */
    "aoHeader": [],

    /**
     * Store information about the table's footer
     *  @type array
     *  @default []
     */
    "aoFooter": [],

    /**
     * Store the applied global search information in case we want to force a
     * research or compare the old search to a new one.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @namespace
     *  @extends DataTable.models.oSearch
     */
    "oPreviousSearch": {},

    /**
     * Store the applied search for each column - see
     * {@link DataTable.models.oSearch} for the format that is used for the
     * filtering information for each column.
     *  @type array
     *  @default []
     */
    "aoPreSearchCols": [],

    /**
     * Sorting that is applied to the table. Note that the inner arrays are
     * used in the following manner:
     * <ul>
     *   <li>Index 0 - column number</li>
     *   <li>Index 1 - current sorting direction</li>
     * </ul>
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @todo These inner arrays should really be objects
     */
    "aaSorting": null,

    /**
     * Sorting that is always applied to the table (i.e. prefixed in front of
     * aaSorting).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    "aaSortingFixed": [],

    /**
     * Classes to use for the striping of a table.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    "asStripeClasses": null,

    /**
     * If restoring a table - we should restore its striping classes as well
     *  @type array
     *  @default []
     */
    "asDestroyStripes": [],

    /**
     * If restoring a table - we should restore its width
     *  @type int
     *  @default 0
     */
    "sDestroyWidth": 0,

    /**
     * Callback functions array for every time a row is inserted (i.e. on a draw).
     *  @type array
     *  @default []
     */
    "aoRowCallback": [],

    /**
     * Callback functions for the header on each draw.
     *  @type array
     *  @default []
     */
    "aoHeaderCallback": [],

    /**
     * Callback function for the footer on each draw.
     *  @type array
     *  @default []
     */
    "aoFooterCallback": [],

    /**
     * Array of callback functions for draw callback functions
     *  @type array
     *  @default []
     */
    "aoDrawCallback": [],

    /**
     * Array of callback functions for row created function
     *  @type array
     *  @default []
     */
    "aoRowCreatedCallback": [],

    /**
     * Callback functions for just before the table is redrawn. A return of
     * false will be used to cancel the draw.
     *  @type array
     *  @default []
     */
    "aoPreDrawCallback": [],

    /**
     * Callback functions for when the table has been initialised.
     *  @type array
     *  @default []
     */
    "aoInitComplete": [],


    /**
     * Callbacks for modifying the settings to be stored for state saving, prior to
     * saving state.
     *  @type array
     *  @default []
     */
    "aoStateSaveParams": [],

    /**
     * Callbacks for modifying the settings that have been stored for state saving
     * prior to using the stored values to restore the state.
     *  @type array
     *  @default []
     */
    "aoStateLoadParams": [],

    /**
     * Callbacks for operating on the settings object once the saved state has been
     * loaded
     *  @type array
     *  @default []
     */
    "aoStateLoaded": [],

    /**
     * Cache the table ID for quick access
     *  @type string
     *  @default <i>Empty string</i>
     */
    "sTableId": "",

    /**
     * The TABLE node for the main table
     *  @type node
     *  @default null
     */
    "nTable": null,

    /**
     * Permanent ref to the thead element
     *  @type node
     *  @default null
     */
    "nTHead": null,

    /**
     * Permanent ref to the tfoot element - if it exists
     *  @type node
     *  @default null
     */
    "nTFoot": null,

    /**
     * Permanent ref to the tbody element
     *  @type node
     *  @default null
     */
    "nTBody": null,

    /**
     * Cache the wrapper node (contains all DataTables controlled elements)
     *  @type node
     *  @default null
     */
    "nTableWrapper": null,

    /**
     * Indicate if when using server-side processing the loading of data
     * should be deferred until the second draw.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     *  @default false
     */
    "bDeferLoading": false,

    /**
     * Indicate if all required information has been read in
     *  @type boolean
     *  @default false
     */
    "bInitialised": false,

    /**
     * Information about open rows. Each object in the array has the parameters
     * 'nTr' and 'nParent'
     *  @type array
     *  @default []
     */
    "aoOpenRows": [],

    /**
     * Dictate the positioning of DataTables' control elements - see
     * {@link DataTable.model.oInit.sDom}.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default null
     */
    "sDom": null,

    /**
     * Search delay (in mS)
     *  @type integer
     *  @default null
     */
    "searchDelay": null,

    /**
     * Which type of pagination should be used.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default two_button
     */
    "sPaginationType": "two_button",

    /**
     * The state duration (for `stateSave`) in seconds.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type int
     *  @default 0
     */
    "iStateDuration": 0,

    /**
     * Array of callback functions for state saving. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the JSON string to save that has been thus far created. Returns
     *       a JSON string to be inserted into a json object
     *       (i.e. '"param": [ 0, 1, 2]')</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    "aoStateSave": [],

    /**
     * Array of callback functions for state loading. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the object stored. May return false to cancel state loading</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    "aoStateLoad": [],

    /**
     * State that was saved. Useful for back reference
     *  @type object
     *  @default null
     */
    "oSavedState": null,

    /**
     * State that was loaded. Useful for back reference
     *  @type object
     *  @default null
     */
    "oLoadedState": null,

    /**
     * Source url for AJAX data for the table.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default null
     */
    "sAjaxSource": null,

    /**
     * Property from a given object from which to read the table data from. This
     * can be an empty string (when not server-side processing), in which case
     * it is  assumed an an array is given directly.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    "sAjaxDataProp": null,

    /**
     * The last jQuery XHR object that was used for server-side data gathering.
     * This can be used for working with the XHR information in one of the
     * callbacks
     *  @type object
     *  @default null
     */
    "jqXHR": null,

    /**
     * JSON returned from the server in the last Ajax request
     *  @type object
     *  @default undefined
     */
    "json": undefined,

    /**
     * Data submitted as part of the last Ajax request
     *  @type object
     *  @default undefined
     */
    "oAjaxData": undefined,

    /**
     * Function to get the server-side data.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type function
     */
    "fnServerData": null,

    /**
     * Functions which are called prior to sending an Ajax request so extra
     * parameters can easily be sent to the server
     *  @type array
     *  @default []
     */
    "aoServerParams": [],

    /**
     * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
     * required).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    "sServerMethod": null,

    /**
     * Format numbers for display.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type function
     */
    "fnFormatNumber": null,

    /**
     * List of options that can be used for the user selectable length menu.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    "aLengthMenu": null,

    /**
     * Counter for the draws that the table does. Also used as a tracker for
     * server-side processing
     *  @type int
     *  @default 0
     */
    "iDraw": 0,

    /**
     * Indicate if a redraw is being done - useful for Ajax
     *  @type boolean
     *  @default false
     */
    "bDrawing": false,

    /**
     * Draw index (iDraw) of the last error when parsing the returned data
     *  @type int
     *  @default -1
     */
    "iDrawError": -1,

    /**
     * Paging display length
     *  @type int
     *  @default 10
     */
    "_iDisplayLength": 10,

    /**
     * Paging start point - aiDisplay index
     *  @type int
     *  @default 0
     */
    "_iDisplayStart": 0,

    /**
     * Server-side processing - number of records in the result set
     * (i.e. before filtering), Use fnRecordsTotal rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     *  @type int
     *  @default 0
     *  @private
     */
    "_iRecordsTotal": 0,

    /**
     * Server-side processing - number of records in the current display set
     * (i.e. after filtering). Use fnRecordsDisplay rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     *  @type boolean
     *  @default 0
     *  @private
     */
    "_iRecordsDisplay": 0,

    /**
     * The classes to use for the table
     *  @type object
     *  @default {}
     */
    "oClasses": {},

    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if filtering has been done in the draw. Deprecated in favour of
     * events.
     *  @type boolean
     *  @default false
     *  @deprecated
     */
    "bFiltered": false,

    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if sorting has been done in the draw. Deprecated in favour of
     * events.
     *  @type boolean
     *  @default false
     *  @deprecated
     */
    "bSorted": false,

    /**
     * Indicate that if multiple rows are in the header and there is more than
     * one unique cell per column, if the top one (true) or bottom one (false)
     * should be used for sorting / title by DataTables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bSortCellsTop": null,

    /**
     * Initialisation object that is used for the table
     *  @type object
     *  @default null
     */
    "oInit": null,

    /**
     * Destroy callback functions - for plug-ins to attach themselves to the
     * destroy so they can clean up markup and events.
     *  @type array
     *  @default []
     */
    "aoDestroyCallback": [],


    /**
     * Get the number of records in the current record set, before filtering
     *  @type function
     */
    "fnRecordsTotal": function ()
    {
      return _fnDataSource( this ) == 'ssp' ?
        this._iRecordsTotal * 1 :
        this.aiDisplayMaster.length;
    },

    /**
     * Get the number of records in the current record set, after filtering
     *  @type function
     */
    "fnRecordsDisplay": function ()
    {
      return _fnDataSource( this ) == 'ssp' ?
        this._iRecordsDisplay * 1 :
        this.aiDisplay.length;
    },

    /**
     * Get the display end point - aiDisplay index
     *  @type function
     */
    "fnDisplayEnd": function ()
    {
      var
        len      = this._iDisplayLength,
        start    = this._iDisplayStart,
        calc     = start + len,
        records  = this.aiDisplay.length,
        features = this.oFeatures,
        paginate = features.bPaginate;

      if ( features.bServerSide ) {
        return paginate === false || len === -1 ?
          start + records :
          Math.min( start+len, this._iRecordsDisplay );
      }
      else {
        return ! paginate || calc>records || len===-1 ?
          records :
          calc;
      }
    },

    /**
     * The DataTables object for this table
     *  @type object
     *  @default null
     */
    "oInstance": null,

    /**
     * Unique identifier for each instance of the DataTables object. If there
     * is an ID on the table node, then it takes that value, otherwise an
     * incrementing internal counter is used.
     *  @type string
     *  @default null
     */
    "sInstance": null,

    /**
     * tabindex attribute value that is added to DataTables control elements, allowing
     * keyboard navigation of the table and its controls.
     */
    "iTabIndex": 0,

    /**
     * DIV container for the footer scrolling table if scrolling
     */
    "nScrollHead": null,

    /**
     * DIV container for the footer scrolling table if scrolling
     */
    "nScrollFoot": null,

    /**
     * Last applied sort
     *  @type array
     *  @default []
     */
    "aLastSort": [],

    /**
     * Stored plug-in instances
     *  @type object
     *  @default {}
     */
    "oPlugins": {},

    /**
     * Function used to get a row's id from the row's data
     *  @type function
     *  @default null
     */
    "rowIdFn": null,

    /**
     * Data location where to store a row's id
     *  @type string
     *  @default null
     */
    "rowId": null
  };

  /**
   * Extension object for DataTables that is used to provide all extension
   * options.
   *
   * Note that the `DataTable.ext` object is available through
   * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
   * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
   *  @namespace
   *  @extends DataTable.models.ext
   */


  /**
   * DataTables extensions
   *
   * This namespace acts as a collection area for plug-ins that can be used to
   * extend DataTables capabilities. Indeed many of the build in methods
   * use this method to provide their own capabilities (sorting methods for
   * example).
   *
   * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
   * reasons
   *
   *  @namespace
   */
  DataTable.ext = _ext = {
    /**
     * Buttons. For use with the Buttons extension for DataTables. This is
     * defined here so other extensions can define buttons regardless of load
     * order. It is _not_ used by DataTables core.
     *
     *  @type object
     *  @default {}
     */
    buttons: {},


    /**
     * Element class names
     *
     *  @type object
     *  @default {}
     */
    classes: {},


    /**
     * DataTables build type (expanded by the download builder)
     *
     *  @type string
     */
    builder: "-source-",


    /**
     * Error reporting.
     *
     * How should DataTables report an error. Can take the value 'alert',
     * 'throw', 'none' or a function.
     *
     *  @type string|function
     *  @default alert
     */
    errMode: "alert",


    /**
     * Feature plug-ins.
     *
     * This is an array of objects which describe the feature plug-ins that are
     * available to DataTables. These feature plug-ins are then available for
     * use through the `dom` initialisation option.
     *
     * Each feature plug-in is described by an object which must have the
     * following properties:
     *
     * * `fnInit` - function that is used to initialise the plug-in,
     * * `cFeature` - a character so the feature can be enabled by the `dom`
     *   instillation option. This is case sensitive.
     *
     * The `fnInit` function has the following input parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     *
     * And the following return is expected:
     *
     * * {node|null} The element which contains your feature. Note that the
     *   return may also be void if your plug-in does not require to inject any
     *   DOM elements into DataTables control (`dom`) - for example this might
     *   be useful when developing a plug-in which allows table control via
     *   keyboard entry
     *
     *  @type array
     *
     *  @example
     *    $.fn.dataTable.ext.features.push( {
     *      "fnInit": function( oSettings ) {
     *        return new TableTools( { "oDTSettings": oSettings } );
     *      },
     *      "cFeature": "T"
     *    } );
     */
    feature: [],


    /**
     * Row searching.
     *
     * This method of searching is complimentary to the default type based
     * searching, and a lot more comprehensive as it allows you complete control
     * over the searching logic. Each element in this array is a function
     * (parameters described below) that is called for every row in the table,
     * and your logic decides if it should be included in the searching data set
     * or not.
     *
     * Searching functions have the following input parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{array|object}` Data for the row to be processed (same as the
     *    original format that was passed in as the data source, or an array
     *    from a DOM data source
     * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
     *    can be useful to retrieve the `TR` element if you need DOM interaction.
     *
     * And the following return is expected:
     *
     * * {boolean} Include the row in the searched result set (true) or not
     *   (false)
     *
     * Note that as with the main search ability in DataTables, technically this
     * is "filtering", since it is subtractive. However, for consistency in
     * naming we call it searching here.
     *
     *  @type array
     *  @default []
     *
     *  @example
     *    // The following example shows custom search being applied to the
     *    // fourth column (i.e. the data[3] index) based on two input values
     *    // from the end-user, matching the data in a certain range.
     *    $.fn.dataTable.ext.search.push(
     *      function( settings, data, dataIndex ) {
     *        var min = document.getElementById('min').value * 1;
     *        var max = document.getElementById('max').value * 1;
     *        var version = data[3] == "-" ? 0 : data[3]*1;
     *
     *        if ( min == "" && max == "" ) {
     *          return true;
     *        }
     *        else if ( min == "" && version < max ) {
     *          return true;
     *        }
     *        else if ( min < version && "" == max ) {
     *          return true;
     *        }
     *        else if ( min < version && version < max ) {
     *          return true;
     *        }
     *        return false;
     *      }
     *    );
     */
    search: [],


    /**
     * Selector extensions
     *
     * The `selector` option can be used to extend the options available for the
     * selector modifier options (`selector-modifier` object data type) that
     * each of the three built in selector types offer (row, column and cell +
     * their plural counterparts). For example the Select extension uses this
     * mechanism to provide an option to select only rows, columns and cells
     * that have been marked as selected by the end user (`{selected: true}`),
     * which can be used in conjunction with the existing built in selector
     * options.
     *
     * Each property is an array to which functions can be pushed. The functions
     * take three attributes:
     *
     * * Settings object for the host table
     * * Options object (`selector-modifier` object type)
     * * Array of selected item indexes
     *
     * The return is an array of the resulting item indexes after the custom
     * selector has been applied.
     *
     *  @type object
     */
    selector: {
      cell: [],
      column: [],
      row: []
    },


    /**
     * Internal functions, exposed for used in plug-ins.
     *
     * Please note that you should not need to use the internal methods for
     * anything other than a plug-in (and even then, try to avoid if possible).
     * The internal function may change between releases.
     *
     *  @type object
     *  @default {}
     */
    internal: {},


    /**
     * Legacy configuration options. Enable and disable legacy options that
     * are available in DataTables.
     *
     *  @type object
     */
    legacy: {
      /**
       * Enable / disable DataTables 1.9 compatible server-side processing
       * requests
       *
       *  @type boolean
       *  @default null
       */
      ajax: null
    },


    /**
     * Pagination plug-in methods.
     *
     * Each entry in this object is a function and defines which buttons should
     * be shown by the pagination rendering method that is used for the table:
     * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
     * buttons are displayed in the document, while the functions here tell it
     * what buttons to display. This is done by returning an array of button
     * descriptions (what each button will do).
     *
     * Pagination types (the four built in options and any additional plug-in
     * options defined here) can be used through the `paginationType`
     * initialisation parameter.
     *
     * The functions defined take two parameters:
     *
     * 1. `{int} page` The current page index
     * 2. `{int} pages` The number of pages in the table
     *
     * Each function is expected to return an array where each element of the
     * array can be one of:
     *
     * * `first` - Jump to first page when activated
     * * `last` - Jump to last page when activated
     * * `previous` - Show previous page when activated
     * * `next` - Show next page when activated
     * * `{int}` - Show page of the index given
     * * `{array}` - A nested array containing the above elements to add a
     *   containing 'DIV' element (might be useful for styling).
     *
     * Note that DataTables v1.9- used this object slightly differently whereby
     * an object with two functions would be defined for each plug-in. That
     * ability is still supported by DataTables 1.10+ to provide backwards
     * compatibility, but this option of use is now decremented and no longer
     * documented in DataTables 1.10+.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Show previous, next and current page buttons only
     *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
     *      return [ 'previous', page, 'next' ];
     *    };
     */
    pager: {},


    renderer: {
      pageButton: {},
      header: {}
    },


    /**
     * Ordering plug-ins - custom data source
     *
     * The extension options for ordering of data available here is complimentary
     * to the default type based ordering that DataTables typically uses. It
     * allows much greater control over the the data that is being used to
     * order a column, but is necessarily therefore more complex.
     *
     * This type of ordering is useful if you want to do ordering based on data
     * live from the DOM (for example the contents of an 'input' element) rather
     * than just the static string that DataTables knows of.
     *
     * The way these plug-ins work is that you create an array of the values you
     * wish to be ordering for the column in question and then return that
     * array. The data in the array much be in the index order of the rows in
     * the table (not the currently ordering order!). Which order data gathering
     * function is run here depends on the `dt-init columns.orderDataType`
     * parameter that is used for the column (if any).
     *
     * The functions defined take two parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{int}` Target column index
     *
     * Each function is expected to return an array:
     *
     * * `{array}` Data for the column to be ordering upon
     *
     *  @type array
     *
     *  @example
     *    // Ordering using `input` node values
     *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
     *    {
     *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
     *        return $('input', td).val();
     *      } );
     *    }
     */
    order: {},


    /**
     * Type based plug-ins.
     *
     * Each column in DataTables has a type assigned to it, either by automatic
     * detection or by direct assignment using the `type` option for the column.
     * The type of a column will effect how it is ordering and search (plug-ins
     * can also make use of the column type if required).
     *
     * @namespace
     */
    type: {
      /**
       * Type detection functions.
       *
       * The functions defined in this object are used to automatically detect
       * a column's type, making initialisation of DataTables super easy, even
       * when complex data is in the table.
       *
       * The functions defined take two parameters:
       *
         *  1. `{*}` Data from the column cell to be analysed
         *  2. `{settings}` DataTables settings object. This can be used to
         *     perform context specific type detection - for example detection
         *     based on language settings such as using a comma for a decimal
         *     place. Generally speaking the options from the settings will not
         *     be required
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Data type detected, or null if unknown (and thus
       *   pass it on to the other type detection functions.
       *
       *  @type array
       *
       *  @example
       *    // Currency type detection plug-in:
       *    $.fn.dataTable.ext.type.detect.push(
       *      function ( data, settings ) {
       *        // Check the numeric part
       *        if ( ! data.substring(1).match(/[0-9]/) ) {
       *          return null;
       *        }
       *
       *        // Check prefixed by currency
       *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
       *          return 'currency';
       *        }
       *        return null;
       *      }
       *    );
       */
      detect: [],


      /**
       * Type based search formatting.
       *
       * The type based searching functions can be used to pre-format the
       * data to be search on. For example, it can be used to strip HTML
       * tags or to de-format telephone numbers for numeric only searching.
       *
       * Note that is a search is not defined for a column of a given type,
       * no search formatting will be performed.
       *
       * Pre-processing of searching data plug-ins - When you assign the sType
       * for a column (or have it automatically detected for you by DataTables
       * or a type detection plug-in), you will typically be using this for
       * custom sorting, but it can also be used to provide custom searching
       * by allowing you to pre-processing the data and returning the data in
       * the format that should be searched upon. This is done by adding
       * functions this object with a parameter name which matches the sType
       * for that target column. This is the corollary of <i>afnSortData</i>
       * for searching data.
       *
       * The functions defined take a single parameter:
       *
         *  1. `{*}` Data from the column cell to be prepared for searching
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Formatted string that will be used for the searching.
       *
       *  @type object
       *  @default {}
       *
       *  @example
       *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
       *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
       *    }
       */
      search: {},


      /**
       * Type based ordering.
       *
       * The column type tells DataTables what ordering to apply to the table
       * when a column is sorted upon. The order for each type that is defined,
       * is defined by the functions available in this object.
       *
       * Each ordering option can be described by three properties added to
       * this object:
       *
       * * `{type}-pre` - Pre-formatting function
       * * `{type}-asc` - Ascending order function
       * * `{type}-desc` - Descending order function
       *
       * All three can be used together, only `{type}-pre` or only
       * `{type}-asc` and `{type}-desc` together. It is generally recommended
       * that only `{type}-pre` is used, as this provides the optimal
       * implementation in terms of speed, although the others are provided
       * for compatibility with existing Javascript sort functions.
       *
       * `{type}-pre`: Functions defined take a single parameter:
       *
         *  1. `{*}` Data from the column cell to be prepared for ordering
       *
       * And return:
       *
       * * `{*}` Data to be sorted upon
       *
       * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
       * functions, taking two parameters:
       *
         *  1. `{*}` Data to compare to the second parameter
         *  2. `{*}` Data to compare to the first parameter
       *
       * And returning:
       *
       * * `{*}` Ordering match: <0 if first parameter should be sorted lower
       *   than the second parameter, ===0 if the two parameters are equal and
       *   >0 if the first parameter should be sorted height than the second
       *   parameter.
       *
       *  @type object
       *  @default {}
       *
       *  @example
       *    // Numeric ordering of formatted numbers with a pre-formatter
       *    $.extend( $.fn.dataTable.ext.type.order, {
       *      "string-pre": function(x) {
       *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
       *        return parseFloat( a );
       *      }
       *    } );
       *
       *  @example
       *    // Case-sensitive string ordering, with no pre-formatting method
       *    $.extend( $.fn.dataTable.ext.order, {
       *      "string-case-asc": function(x,y) {
       *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
       *      },
       *      "string-case-desc": function(x,y) {
       *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
       *      }
       *    } );
       */
      order: {}
    },

    /**
     * Unique DataTables instance counter
     *
     * @type int
     * @private
     */
    _unique: 0,


    //
    // Depreciated
    // The following properties are retained for backwards compatibility only.
    // The should not be used in new projects and will be removed in a future
    // version
    //

    /**
     * Version check function.
     *  @type function
     *  @depreciated Since 1.10
     */
    fnVersionCheck: DataTable.fnVersionCheck,


    /**
     * Index for what 'this' index API functions should use
     *  @type int
     *  @deprecated Since v1.10
     */
    iApiIndex: 0,


    /**
     * jQuery UI class container
     *  @type object
     *  @deprecated Since v1.10
     */
    oJUIClasses: {},


    /**
     * Software version
     *  @type string
     *  @deprecated Since v1.10
     */
    sVersion: DataTable.version
  };


  //
  // Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
  //
  $.extend( _ext, {
    afnFiltering: _ext.search,
    aTypes:       _ext.type.detect,
    ofnSearch:    _ext.type.search,
    oSort:        _ext.type.order,
    afnSortData:  _ext.order,
    aoFeatures:   _ext.feature,
    oApi:         _ext.internal,
    oStdClasses:  _ext.classes,
    oPagination:  _ext.pager
  } );


  $.extend( DataTable.ext.classes, {
    "sTable": "dataTable",
    "sNoFooter": "no-footer",

    /* Paging buttons */
    "sPageButton": "paginate_button",
    "sPageButtonActive": "current",
    "sPageButtonDisabled": "disabled",

    /* Striping classes */
    "sStripeOdd": "odd",
    "sStripeEven": "even",

    /* Empty row */
    "sRowEmpty": "dataTables_empty",

    /* Features */
    "sWrapper": "dataTables_wrapper",
    "sFilter": "dataTables_filter",
    "sInfo": "dataTables_info",
    "sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
    "sLength": "dataTables_length",
    "sProcessing": "dataTables_processing",

    /* Sorting */
    "sSortAsc": "sorting_asc",
    "sSortDesc": "sorting_desc",
    "sSortable": "sorting", /* Sortable in both directions */
    "sSortableAsc": "sorting_desc_disabled",
    "sSortableDesc": "sorting_asc_disabled",
    "sSortableNone": "sorting_disabled",
    "sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

    /* Filtering */
    "sFilterInput": "",

    /* Page length */
    "sLengthSelect": "",

    /* Scrolling */
    "sScrollWrapper": "dataTables_scroll",
    "sScrollHead": "dataTables_scrollHead",
    "sScrollHeadInner": "dataTables_scrollHeadInner",
    "sScrollBody": "dataTables_scrollBody",
    "sScrollFoot": "dataTables_scrollFoot",
    "sScrollFootInner": "dataTables_scrollFootInner",

    /* Misc */
    "sHeaderTH": "",
    "sFooterTH": "",

    // Deprecated
    "sSortJUIAsc": "",
    "sSortJUIDesc": "",
    "sSortJUI": "",
    "sSortJUIAscAllowed": "",
    "sSortJUIDescAllowed": "",
    "sSortJUIWrapper": "",
    "sSortIcon": "",
    "sJUIHeader": "",
    "sJUIFooter": ""
  } );


  var extPagination = DataTable.ext.pager;

  function _numbers ( page, pages ) {
    var
      numbers = [],
      buttons = extPagination.numbers_length,
      half = Math.floor( buttons / 2 ),
      i = 1;

    if ( pages <= buttons ) {
      numbers = _range( 0, pages );
    }
    else if ( page <= half ) {
      numbers = _range( 0, buttons-2 );
      numbers.push( 'ellipsis' );
      numbers.push( pages-1 );
    }
    else if ( page >= pages - 1 - half ) {
      numbers = _range( pages-(buttons-2), pages );
      numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
      numbers.splice( 0, 0, 0 );
    }
    else {
      numbers = _range( page-half+2, page+half-1 );
      numbers.push( 'ellipsis' );
      numbers.push( pages-1 );
      numbers.splice( 0, 0, 'ellipsis' );
      numbers.splice( 0, 0, 0 );
    }

    numbers.DT_el = 'span';
    return numbers;
  }


  $.extend( extPagination, {
    simple: function ( page, pages ) {
      return [ 'previous', 'next' ];
    },

    full: function ( page, pages ) {
      return [  'first', 'previous', 'next', 'last' ];
    },

    numbers: function ( page, pages ) {
      return [ _numbers(page, pages) ];
    },

    simple_numbers: function ( page, pages ) {
      return [ 'previous', _numbers(page, pages), 'next' ];
    },

    full_numbers: function ( page, pages ) {
      return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
    },

    first_last_numbers: function (page, pages) {
      return ['first', _numbers(page, pages), 'last'];
    },

    // For testing and plug-ins to use
    _numbers: _numbers,

    // Number of number buttons (including ellipsis) to show. _Must be odd!_
    numbers_length: 7
  } );


  $.extend( true, DataTable.ext.renderer, {
    pageButton: {
      _: function ( settings, host, idx, buttons, page, pages ) {
        var classes = settings.oClasses;
        var lang = settings.oLanguage.oPaginate;
        var aria = settings.oLanguage.oAria.paginate || {};
        var btnDisplay, btnClass;

        var attach = function( container, buttons ) {
          var i, ien, node, button, tabIndex;
          var disabledClass = classes.sPageButtonDisabled;
          var clickHandler = function ( e ) {
            _fnPageChange( settings, e.data.action, true );
          };

          for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
            button = buttons[i];

            if ( Array.isArray( button ) ) {
              var inner = $( '<'+(button.DT_el || 'div')+'/>' )
                .appendTo( container );
              attach( inner, button );
            }
            else {
              btnDisplay = null;
              btnClass = button;
              tabIndex = settings.iTabIndex;

              switch ( button ) {
                case 'ellipsis':
                  container.append('<span class="ellipsis">&#x2026;</span>');
                  break;

                case 'first':
                  btnDisplay = lang.sFirst;

                  if ( page === 0 ) {
                    tabIndex = -1;
                    btnClass += ' ' + disabledClass;
                  }
                  break;

                case 'previous':
                  btnDisplay = lang.sPrevious;

                  if ( page === 0 ) {
                    tabIndex = -1;
                    btnClass += ' ' + disabledClass;
                  }
                  break;

                case 'next':
                  btnDisplay = lang.sNext;

                  if ( pages === 0 || page === pages-1 ) {
                    tabIndex = -1;
                    btnClass += ' ' + disabledClass;
                  }
                  break;

                case 'last':
                  btnDisplay = lang.sLast;

                  if ( pages === 0 || page === pages-1 ) {
                    tabIndex = -1;
                    btnClass += ' ' + disabledClass;
                  }
                  break;

                default:
                  btnDisplay = settings.fnFormatNumber( button + 1 );
                  btnClass = page === button ?
                    classes.sPageButtonActive : '';
                  break;
              }

              if ( btnDisplay !== null ) {
                node = $('<a>', {
                    'class': classes.sPageButton+' '+btnClass,
                    'aria-controls': settings.sTableId,
                    'aria-label': aria[ button ],
                    'data-dt-idx': button,
                    'tabindex': tabIndex,
                    'id': idx === 0 && typeof button === 'string' ?
                      settings.sTableId +'_'+ button :
                      null
                  } )
                  .html( btnDisplay )
                  .appendTo( container );

                _fnBindAction(
                  node, {action: button}, clickHandler
                );
              }
            }
          }
        };

        // IE9 throws an 'unknown error' if document.activeElement is used
        // inside an iframe or frame. Try / catch the error. Not good for
        // accessibility, but neither are frames.
        var activeEl;

        try {
          // Because this approach is destroying and recreating the paging
          // elements, focus is lost on the select button which is bad for
          // accessibility. So we want to restore focus once the draw has
          // completed
          activeEl = $(host).find(document.activeElement).data('dt-idx');
        }
        catch (e) {}

        attach( $(host).empty(), buttons );

        if ( activeEl !== undefined ) {
          $(host).find( '[data-dt-idx='+activeEl+']' ).trigger('focus');
        }
      }
    }
  } );



  // Built in type detection. See model.ext.aTypes for information about
  // what is required from this methods.
  $.extend( DataTable.ext.type.detect, [
    // Plain numbers - first since V8 detects some plain numbers as dates
    // e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
    function ( d, settings )
    {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber( d, decimal ) ? 'num'+decimal : null;
    },

    // Dates (only those recognised by the browser's Date.parse)
    function ( d, settings )
    {
      // V8 tries _very_ hard to make a string passed into `Date.parse()`
      // valid, so we need to use a regex to restrict date formats. Use a
      // plug-in for anything other than ISO8601 style strings
      if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
        return null;
      }
      var parsed = Date.parse(d);
      return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
    },

    // Formatted numbers
    function ( d, settings )
    {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
    },

    // HTML numeric
    function ( d, settings )
    {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
    },

    // HTML numeric, formatted
    function ( d, settings )
    {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
    },

    // HTML (this is strict checking - there must be html)
    function ( d, settings )
    {
      return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
        'html' : null;
    }
  ] );



  // Filter formatting functions. See model.ext.ofnSearch for information about
  // what is required from these methods.
  //
  // Note that additional search methods are added for the html numbers and
  // html formatted numbers by `_addNumericSort()` when we know what the decimal
  // place is


  $.extend( DataTable.ext.type.search, {
    html: function ( data ) {
      return _empty(data) ?
        data :
        typeof data === 'string' ?
          data
            .replace( _re_new_lines, " " )
            .replace( _re_html, "" ) :
          '';
    },

    string: function ( data ) {
      return _empty(data) ?
        data :
        typeof data === 'string' ?
          data.replace( _re_new_lines, " " ) :
          data;
    }
  } );



  var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
    if ( d !== 0 && (!d || d === '-') ) {
      return -Infinity;
    }

    // If a decimal place other than `.` is used, it needs to be given to the
    // function so we can detect it and replace with a `.` which is the only
    // decimal place Javascript recognises - it is not locale aware.
    if ( decimalPlace ) {
      d = _numToDecimal( d, decimalPlace );
    }

    if ( d.replace ) {
      if ( re1 ) {
        d = d.replace( re1, '' );
      }

      if ( re2 ) {
        d = d.replace( re2, '' );
      }
    }

    return d * 1;
  };


  // Add the numeric 'deformatting' functions for sorting and search. This is done
  // in a function to provide an easy ability for the language options to add
  // additional methods if a non-period decimal place is used.
  function _addNumericSort ( decimalPlace ) {
    $.each(
      {
        // Plain numbers
        "num": function ( d ) {
          return __numericReplace( d, decimalPlace );
        },

        // Formatted numbers
        "num-fmt": function ( d ) {
          return __numericReplace( d, decimalPlace, _re_formatted_numeric );
        },

        // HTML numeric
        "html-num": function ( d ) {
          return __numericReplace( d, decimalPlace, _re_html );
        },

        // HTML numeric, formatted
        "html-num-fmt": function ( d ) {
          return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
        }
      },
      function ( key, fn ) {
        // Add the ordering method
        _ext.type.order[ key+decimalPlace+'-pre' ] = fn;

        // For HTML types add a search formatter that will strip the HTML
        if ( key.match(/^html\-/) ) {
          _ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
        }
      }
    );
  }


  // Default sort methods
  $.extend( _ext.type.order, {
    // Dates
    "date-pre": function ( d ) {
      var ts = Date.parse( d );
      return isNaN(ts) ? -Infinity : ts;
    },

    // html
    "html-pre": function ( a ) {
      return _empty(a) ?
        '' :
        a.replace ?
          a.replace( /<.*?>/g, "" ).toLowerCase() :
          a+'';
    },

    // string
    "string-pre": function ( a ) {
      // This is a little complex, but faster than always calling toString,
      // http://jsperf.com/tostring-v-check
      return _empty(a) ?
        '' :
        typeof a === 'string' ?
          a.toLowerCase() :
          ! a.toString ?
            '' :
            a.toString();
    },

    // string-asc and -desc are retained only for compatibility with the old
    // sort methods
    "string-asc": function ( x, y ) {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    },

    "string-desc": function ( x, y ) {
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    }
  } );


  // Numeric sorting types - order doesn't matter here
  _addNumericSort( '' );


  $.extend( true, DataTable.ext.renderer, {
    header: {
      _: function ( settings, cell, column, classes ) {
        // No additional mark-up required
        // Attach a sort listener to update on sort - note that using the
        // `DT` namespace will allow the event to be removed automatically
        // on destroy, while the `dt` namespaced event is the one we are
        // listening for
        $(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
          if ( settings !== ctx ) { // need to check this this is the host
            return;               // table, not a nested one
          }

          var colIdx = column.idx;

          cell
            .removeClass(
              classes.sSortAsc +' '+
              classes.sSortDesc
            )
            .addClass( columns[ colIdx ] == 'asc' ?
              classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                classes.sSortDesc :
                column.sSortingClass
            );
        } );
      },

      jqueryui: function ( settings, cell, column, classes ) {
        $('<div/>')
          .addClass( classes.sSortJUIWrapper )
          .append( cell.contents() )
          .append( $('<span/>')
            .addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
          )
          .appendTo( cell );

        // Attach a sort listener to update on sort
        $(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
          if ( settings !== ctx ) {
            return;
          }

          var colIdx = column.idx;

          cell
            .removeClass( classes.sSortAsc +" "+classes.sSortDesc )
            .addClass( columns[ colIdx ] == 'asc' ?
              classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                classes.sSortDesc :
                column.sSortingClass
            );

          cell
            .find( 'span.'+classes.sSortIcon )
            .removeClass(
              classes.sSortJUIAsc +" "+
              classes.sSortJUIDesc +" "+
              classes.sSortJUI +" "+
              classes.sSortJUIAscAllowed +" "+
              classes.sSortJUIDescAllowed
            )
            .addClass( columns[ colIdx ] == 'asc' ?
              classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
                classes.sSortJUIDesc :
                column.sSortingClassJUI
            );
        } );
      }
    }
  } );

  /*
   * Public helper functions. These aren't used internally by DataTables, or
   * called by any of the options passed into DataTables, but they can be used
   * externally by developers working with DataTables. They are helper functions
   * to make working with DataTables a little bit easier.
   */

  var __htmlEscapeEntities = function ( d ) {
    if (Array.isArray(d)) {
      d = d.join(',');
    }

    return typeof d === 'string' ?
      d
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;') :
      d;
  };

  // Common logic for moment, luxon or a date action
  function __mld( dt, momentFn, luxonFn, dateFn, arg1 ) {
    if (window.moment) {
      return dt[momentFn]( arg1 );
    }
    else if (window.luxon) {
      return dt[luxonFn]( arg1 );
    }

    return dateFn ? dt[dateFn]( arg1 ) : dt;
  }


  var __mlWarning = false;
  function __mldObj (d, format, locale) {
    var dt;

    if (window.moment) {
      dt = window.moment.utc( d, format, locale, true );

      if (! dt.isValid()) {
        return null;
      }
    }
    else if (window.luxon) {
      dt = format && typeof d === 'string'
        ? window.luxon.DateTime.fromFormat( d, format )
        : window.luxon.DateTime.fromISO( d );

      if (! dt.isValid) {
        return null;
      }

      dt.setLocale(locale);
    }
    else if (! format) {
      // No format given, must be ISO
      dt = new Date(d);
    }
    else {
      if (! __mlWarning) {
        alert('DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17');
      }

      __mlWarning = true;
    }

    return dt;
  }

  // Wrapper for date, datetime and time which all operate the same way with the exception of
  // the output string for auto locale support
  function __mlHelper (localeString) {
    return function ( from, to, locale, def ) {
      // Luxon and Moment support
      // Argument shifting
      if ( arguments.length === 0 ) {
        locale = 'en';
        to = null; // means toLocaleString
        from = null; // means iso8601
      }
      else if ( arguments.length === 1 ) {
        locale = 'en';
        to = from;
        from = null;
      }
      else if ( arguments.length === 2 ) {
        locale = to;
        to = from;
        from = null;
      }

      var typeName = 'datetime-' + to;

      // Add type detection and sorting specific to this date format - we need to be able to identify
      // date type columns as such, rather than as numbers in extensions. Hence the need for this.
      if (! DataTable.ext.type.order[typeName]) {
        // The renderer will give the value to type detect as the type!
        DataTable.ext.type.detect.unshift(function (d) {
          return d === typeName ? typeName : false;
        });

        // The renderer gives us Moment, Luxon or Date obects for the sorting, all of which have a
        // `valueOf` which gives milliseconds epoch
        DataTable.ext.type.order[typeName + '-asc'] = function (a, b) {
          var x = a.valueOf();
          var y = b.valueOf();

          return x === y
            ? 0
            : x < y
              ? -1
              : 1;
        }

        DataTable.ext.type.order[typeName + '-desc'] = function (a, b) {
          var x = a.valueOf();
          var y = b.valueOf();

          return x === y
            ? 0
            : x > y
              ? -1
              : 1;
        }
      }

      return function ( d, type ) {
        // Allow for a default value
        if (d === null || d === undefined) {
          if (def === '--now') {
            // We treat everything as UTC further down, so no changes are
            // made, as such need to get the local date / time as if it were
            // UTC
            var local = new Date();
            d = new Date( Date.UTC(
              local.getFullYear(), local.getMonth(), local.getDate(),
              local.getHours(), local.getMinutes(), local.getSeconds()
            ) );
          }
          else {
            d = '';
          }
        }

        if (type === 'type') {
          // Typing uses the type name for fast matching
          return typeName;
        }

        if (d === '') {
          return type !== 'sort'
            ? ''
            : __mldObj('0000-01-01 00:00:00', null, locale);
        }

        // Shortcut. If `from` and `to` are the same, we are using the renderer to
        // format for ordering, not display - its already in the display format.
        if ( to !== null && from === to && type !== 'sort' && type !== 'type' && ! (d instanceof Date) ) {
          return d;
        }

        var dt = __mldObj(d, from, locale);

        if (dt === null) {
          return d;
        }

        if (type === 'sort') {
          return dt;
        }

        var formatted = to === null
          ? __mld(dt, 'toDate', 'toJSDate', '')[localeString]()
          : __mld(dt, 'format', 'toFormat', 'toISOString', to);

        // XSS protection
        return type === 'display' ?
          __htmlEscapeEntities( formatted ) :
          formatted;
      };
    }
  }

  // Based on locale, determine standard number formatting
  // Fallback for legacy browsers is US English
  var __thousands = ',';
  var __decimal = '.';

  if (Intl) {
    try {
      var num = new Intl.NumberFormat().formatToParts(100000.1);

      for (var i=0 ; i<num.length ; i++) {
        if (num[i].type === 'group') {
          __thousands = num[i].value;
        }
        else if (num[i].type === 'decimal') {
          __decimal = num[i].value;
        }
      }
    }
    catch (e) {
      // noop
    }
  }

  // Formatted date time detection - use by declaring the formats you are going to use
  DataTable.datetime = function ( format, locale ) {
    var typeName = 'datetime-detect-' + format;

    if (! locale) {
      locale = 'en';
    }

    if (! DataTable.ext.type.order[typeName]) {
      DataTable.ext.type.detect.unshift(function (d) {
        var dt = __mldObj(d, format, locale);
        return d === '' || dt ? typeName : false;
      });

      DataTable.ext.type.order[typeName + '-pre'] = function (d) {
        return __mldObj(d, format, locale) || 0;
      }
    }
  }

  /**
   * Helpers for `columns.render`.
   *
   * The options defined here can be used with the `columns.render` initialisation
   * option to provide a display renderer. The following functions are defined:
   *
   * * `number` - Will format numeric data (defined by `columns.data`) for
   *   display, retaining the original unformatted data for sorting and filtering.
   *   It takes 5 parameters:
   *   * `string` - Thousands grouping separator
   *   * `string` - Decimal point indicator
   *   * `integer` - Number of decimal points to show
   *   * `string` (optional) - Prefix.
   *   * `string` (optional) - Postfix (/suffix).
   * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
   *   parameters.
   *
   * @example
   *   // Column definition using the number renderer
   *   {
   *     data: "salary",
   *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
   *   }
   *
   * @namespace
   */
  DataTable.render = {
    date: __mlHelper('toLocaleDateString'),
    datetime: __mlHelper('toLocaleString'),
    time: __mlHelper('toLocaleTimeString'),
    number: function ( thousands, decimal, precision, prefix, postfix ) {
      // Auto locale detection
      if (thousands === null || thousands === undefined) {
        thousands = __thousands;
      }

      if (decimal === null || decimal === undefined) {
        decimal = __decimal;
      }

      return {
        display: function ( d ) {
          if ( typeof d !== 'number' && typeof d !== 'string' ) {
            return d;
          }

          if (d === '' || d === null) {
            return d;
          }

          var negative = d < 0 ? '-' : '';
          var flo = parseFloat( d );

          // If NaN then there isn't much formatting that we can do - just
          // return immediately, escaping any HTML (this was supposed to
          // be a number after all)
          if ( isNaN( flo ) ) {
            return __htmlEscapeEntities( d );
          }

          flo = flo.toFixed( precision );
          d = Math.abs( flo );

          var intPart = parseInt( d, 10 );
          var floatPart = precision ?
            decimal+(d - intPart).toFixed( precision ).substring( 2 ):
            '';

          // If zero, then can't have a negative prefix
          if (intPart === 0 && parseFloat(floatPart) === 0) {
            negative = '';
          }

          return negative + (prefix||'') +
            intPart.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g, thousands
            ) +
            floatPart +
            (postfix||'');
        }
      };
    },

    text: function () {
      return {
        display: __htmlEscapeEntities,
        filter: __htmlEscapeEntities
      };
    }
  };


  /*
   * This is really a good bit rubbish this method of exposing the internal methods
   * publicly... - To be fixed in 2.0 using methods on the prototype
   */


  /**
   * Create a wrapper function for exporting an internal functions to an external API.
   *  @param {string} fn API function name
   *  @returns {function} wrapped function
   *  @memberof DataTable#internal
   */
  function _fnExternApiFunc (fn)
  {
    return function() {
      var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
        Array.prototype.slice.call(arguments)
      );
      return DataTable.ext.internal[fn].apply( this, args );
    };
  }


  /**
   * Reference to internal functions for use by plug-in developers. Note that
   * these methods are references to internal functions and are considered to be
   * private. If you use these methods, be aware that they are liable to change
   * between versions.
   *  @namespace
   */
  $.extend( DataTable.ext.internal, {
    _fnExternApiFunc: _fnExternApiFunc,
    _fnBuildAjax: _fnBuildAjax,
    _fnAjaxUpdate: _fnAjaxUpdate,
    _fnAjaxParameters: _fnAjaxParameters,
    _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
    _fnAjaxDataSrc: _fnAjaxDataSrc,
    _fnAddColumn: _fnAddColumn,
    _fnColumnOptions: _fnColumnOptions,
    _fnAdjustColumnSizing: _fnAdjustColumnSizing,
    _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
    _fnColumnIndexToVisible: _fnColumnIndexToVisible,
    _fnVisbleColumns: _fnVisbleColumns,
    _fnGetColumns: _fnGetColumns,
    _fnColumnTypes: _fnColumnTypes,
    _fnApplyColumnDefs: _fnApplyColumnDefs,
    _fnHungarianMap: _fnHungarianMap,
    _fnCamelToHungarian: _fnCamelToHungarian,
    _fnLanguageCompat: _fnLanguageCompat,
    _fnBrowserDetect: _fnBrowserDetect,
    _fnAddData: _fnAddData,
    _fnAddTr: _fnAddTr,
    _fnNodeToDataIndex: _fnNodeToDataIndex,
    _fnNodeToColumnIndex: _fnNodeToColumnIndex,
    _fnGetCellData: _fnGetCellData,
    _fnSetCellData: _fnSetCellData,
    _fnSplitObjNotation: _fnSplitObjNotation,
    _fnGetObjectDataFn: _fnGetObjectDataFn,
    _fnSetObjectDataFn: _fnSetObjectDataFn,
    _fnGetDataMaster: _fnGetDataMaster,
    _fnClearTable: _fnClearTable,
    _fnDeleteIndex: _fnDeleteIndex,
    _fnInvalidate: _fnInvalidate,
    _fnGetRowElements: _fnGetRowElements,
    _fnCreateTr: _fnCreateTr,
    _fnBuildHead: _fnBuildHead,
    _fnDrawHead: _fnDrawHead,
    _fnDraw: _fnDraw,
    _fnReDraw: _fnReDraw,
    _fnAddOptionsHtml: _fnAddOptionsHtml,
    _fnDetectHeader: _fnDetectHeader,
    _fnGetUniqueThs: _fnGetUniqueThs,
    _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
    _fnFilterComplete: _fnFilterComplete,
    _fnFilterCustom: _fnFilterCustom,
    _fnFilterColumn: _fnFilterColumn,
    _fnFilter: _fnFilter,
    _fnFilterCreateSearch: _fnFilterCreateSearch,
    _fnEscapeRegex: _fnEscapeRegex,
    _fnFilterData: _fnFilterData,
    _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
    _fnUpdateInfo: _fnUpdateInfo,
    _fnInfoMacros: _fnInfoMacros,
    _fnInitialise: _fnInitialise,
    _fnInitComplete: _fnInitComplete,
    _fnLengthChange: _fnLengthChange,
    _fnFeatureHtmlLength: _fnFeatureHtmlLength,
    _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
    _fnPageChange: _fnPageChange,
    _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
    _fnProcessingDisplay: _fnProcessingDisplay,
    _fnFeatureHtmlTable: _fnFeatureHtmlTable,
    _fnScrollDraw: _fnScrollDraw,
    _fnApplyToChildren: _fnApplyToChildren,
    _fnCalculateColumnWidths: _fnCalculateColumnWidths,
    _fnThrottle: _fnThrottle,
    _fnConvertToWidth: _fnConvertToWidth,
    _fnGetWidestNode: _fnGetWidestNode,
    _fnGetMaxLenString: _fnGetMaxLenString,
    _fnStringToCss: _fnStringToCss,
    _fnSortFlatten: _fnSortFlatten,
    _fnSort: _fnSort,
    _fnSortAria: _fnSortAria,
    _fnSortListener: _fnSortListener,
    _fnSortAttachListener: _fnSortAttachListener,
    _fnSortingClasses: _fnSortingClasses,
    _fnSortData: _fnSortData,
    _fnSaveState: _fnSaveState,
    _fnLoadState: _fnLoadState,
    _fnImplementState: _fnImplementState,
    _fnSettingsFromNode: _fnSettingsFromNode,
    _fnLog: _fnLog,
    _fnMap: _fnMap,
    _fnBindAction: _fnBindAction,
    _fnCallbackReg: _fnCallbackReg,
    _fnCallbackFire: _fnCallbackFire,
    _fnLengthOverflow: _fnLengthOverflow,
    _fnRenderer: _fnRenderer,
    _fnDataSource: _fnDataSource,
    _fnRowAttributes: _fnRowAttributes,
    _fnExtend: _fnExtend,
    _fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
                                    // in 1.10, so this dead-end function is
                                    // added to prevent errors
  } );


  // jQuery access
  $.fn.dataTable = DataTable;

  // Provide access to the host jQuery object (circular reference)
  DataTable.$ = $;

  // Legacy aliases
  $.fn.dataTableSettings = DataTable.settings;
  $.fn.dataTableExt = DataTable.ext;

  // With a capital `D` we return a DataTables API instance rather than a
  // jQuery object
  $.fn.DataTable = function ( opts ) {
    return $(this).dataTable( opts ).api();
  };

  // All properties that are available to $.fn.dataTable should also be
  // available on $.fn.DataTable
  $.each( DataTable, function ( prop, val ) {
    $.fn.DataTable[ prop ] = val;
  } );

  return DataTable;
}));

$(document).ready(function(){

  $('table.gw-datatable').DataTable({
    paging: false,
    info: false,
    searching: false,
  });

  $('html[lang="ca"] table.gw-datatable-search').DataTable({
    paging: false,
    info: false,
    language: {
      search: "Cercar:"
    }
  });

  $('html[lang="es"] table.gw-datatable-search').DataTable({
    paging: false,
    info: false,
    language: {
      search: "Cercar:"
    }
  });

  $('html[lang="en"] table.gw-datatable-search').DataTable({
    paging: false,
    info: false,
    language: {
      search: "Search:"
    }
  });

});
/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';
    this.$selection.find('.select2-selection__rendered').attr('id', id);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered').attr(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search.attr('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    $selection.addClass(selectionCssClass);

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
