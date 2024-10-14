/* widget vcw */
$.widget("ui.timeline", {
    _timeline: null,
    _data: null,
    getSelectedData: function() {
        var self = this;
        var row = undefined;
        var sel = self._timeline.getSelection();
        if (sel.length) {
            if (sel[0].row != undefined) {
                row = sel[0].row;
            }
        }
        return self._data[row];
    },
    getSelectedRow: function() {
        var self = this;
        var row = undefined;
        var sel = self._timeline.getSelection();
        if (sel.length) {
            if (sel[0].row != undefined) {
                row = sel[0].row;
            }
        }
        return row;
    },
    getSelectedKey: function() {
        var self = this;
        if (self.getSelectedData().ID == undefined) {
            return undefined;
        }
        else {
            return self.getSelectedData().ID.join(keySep);
        }
    },
    add: function() {
        var self = this;
        var range = self._timeline.getVisibleChartRange();
        var start = $("#txtDate").datepicker("getDate");
        var content = document.getElementById("txtContent").value;

        self._timeline.addItem({
            'start': start,
            'content': content
        });

        var count = data.length;
        self._timeline.setSelection([{ 'row': count - 1}]);
    },
    change: function() {
        var self = this;
        var sel = self._timeline.getSelection();
        if (sel.length) {
            if (sel[0].row != undefined) {
                var row = sel[0].row;
            }
        }
        if (row != undefined) {
            var content = document.getElementById("txtContent").value;
            self._timeline.changeItem(row, {
                'content': content
                // Note: start, end, and group can be added here too.
            });
        } else {
            alert("First select an event, then press remove again");
        }
    },
    cancelDelete: function() {
        var self = this;
        self._timeline.cancelDelete();
    },
    _create: function() {
        var self = this;
        // sobreescribir funciones del timeline original necesarias
        links.Timeline.prototype.screenToTime = function(x) {
            var conversion = this.conversion,
            time = new Date(parseFloat(x) / conversion.factor + conversion.offset);
            return time;
        };

        links.Timeline.StepDate.prototype.getLabelMinor = function(date) {
            /*
            var MONTHS_SHORT = new Array("Ene", "Feb", "Mar",
            "Abr", "May", "Jun",
            "Jul", "Ago", "Sep",
            "Oct", "Nov", "Dec");
            */
            var MONTHS_SHORT;
            if (idioma == '0')
            { MONTHS_SHORT = $.datepicker.regional['es'].monthNamesShort; }
            else
            { MONTHS_SHORT = $.datepicker.regional['eu'].monthNamesShort; }

            if (date == undefined) {
                date = this.current;
            }

            switch (this.scale) {
                case links.Timeline.StepDate.SCALE.MILLISECOND: return String(date.getMilliseconds());
                case links.Timeline.StepDate.SCALE.SECOND: return String(date.getSeconds());
                case links.Timeline.StepDate.SCALE.MINUTE: return this.addZeros(date.getHours(), 2) + ":" +
                this.addZeros(date.getMinutes(), 2);
                case links.Timeline.StepDate.SCALE.HOUR: return this.addZeros(date.getHours(), 2) + ":" +
                this.addZeros(date.getMinutes(), 2);
                case links.Timeline.StepDate.SCALE.DAY: return String(date.getDate());
                case links.Timeline.StepDate.SCALE.MONTH: return MONTHS_SHORT[date.getMonth()];   // month is zero based
                case links.Timeline.StepDate.SCALE.YEAR: return String(date.getFullYear());
                default: return "";
            }
        };


        links.Timeline.StepDate.prototype.getLabelMajor = function(date) {

            /*
            var MONTHS = new Array("Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre",
            "Octubre", "Noviembre", "Diciembre");
            var DAYS = new Array("Domingo", "Lunes", "Martes",
            "Miercoles", "Jueves", "Vierns", "Sábado");
            */

            var MONTHS;
            var DAYS;

            if (idioma == '0') {
                MONTHS = $.datepicker.regional['es'].monthNames;
                DAYS = $.datepicker.regional['es'].dayNames;
            }
            else {
                MONTHS = $.datepicker.regional['eu'].monthNames;
                DAYS = $.datepicker.regional['es'].dayNames;
            }

            if (date == undefined) {
                date = this.current;
            }

            switch (this.scale) {
                case links.Timeline.StepDate.SCALE.MILLISECOND:
                    return this.addZeros(date.getHours(), 2) + ":" +
                        this.addZeros(date.getMinutes(), 2) + ":" +
                        this.addZeros(date.getSeconds(), 2);
                case links.Timeline.StepDate.SCALE.SECOND:
                    return date.getDate() + " " +
                        MONTHS[date.getMonth()] + " " +
                        this.addZeros(date.getHours(), 2) + ":" +
                        this.addZeros(date.getMinutes(), 2);
                case links.Timeline.StepDate.SCALE.MINUTE:
                    return DAYS[date.getDay()] + " " +
                        date.getDate() + " " +
                        MONTHS[date.getMonth()] + " " +
                        date.getFullYear();
                case links.Timeline.StepDate.SCALE.HOUR:
                    return DAYS[date.getDay()] + " " +
                        date.getDate() + " " +
                        MONTHS[date.getMonth()] + " " +
                        date.getFullYear();
                case links.Timeline.StepDate.SCALE.DAY:
                    return MONTHS[date.getMonth()] + " " +
                        date.getFullYear();
                case links.Timeline.StepDate.SCALE.MONTH:
                    return String(date.getFullYear());
                default:
                    return "";
            }
        };
        // SOBREESCRIBIR METODOS DE PINTADO DE BOTONES
        links.Timeline.prototype.redrawDeleteButton = function() {
            var timeline = this,
              options = this.options,
              dom = this.dom,
              size = this.size,
              frame = dom.items.frame;

            if (!options.editable) {
                return;
            }

            var deleteButton = dom.items.deleteButton;
            if (!deleteButton) {
                // create a delete button
                deleteButton = document.createElement("DIV");
                deleteButton.className = "timeline-navigation-delete";
                deleteButton.style.position = "absolute";

                frame.appendChild(deleteButton);
                dom.items.deleteButton = deleteButton;
            }

            if (this.selection) {
                var index = this.selection.index,
                  item = this.items[index],
                  domItem = this.selection.item,
                  right,
                  top = item.top;

                switch (item.type) {
                    case 'range':
                        right = this.timeToScreen(item.end);
                        break;

                    case 'box':
                        //right = this.timeToScreen(item.start) + item.width / 2 + item.borderWidth; // TODO: borderWidth
                        right = this.timeToScreen(item.start) + item.width / 2;
                        break;

                    case 'dot':
                        right = this.timeToScreen(item.start) + item.dom.clientWidth;
                        break;
                }

                // limit the position
                if (right < -size.contentWidth) {
                    right = -size.contentWidth;
                }
                if (right > 2 * size.contentWidth) {
                    right = 2 * size.contentWidth;
                }

                deleteButton.style.left = right + 'px';
                deleteButton.style.top = top + 'px';
                deleteButton.style.display = '';
                frame.removeChild(deleteButton);
                frame.appendChild(deleteButton);
            }
            else {
                deleteButton.style.display = 'none';
            }

            this.redrawAdditionalButtons();
        };

        links.Timeline.prototype.redrawAdditionalButtons = function() {
            var timeline = this,
              options = this.options,
              dom = this.dom,
              size = this.size,
              frame = dom.items.frame;

            if (!options.editable) {
                return;
            }

            var additionalButtons = dom.items.additionalButtons;
            if (!additionalButtons) {
                // create a delete button
                additionalButtons = document.createElement("DIV");
                additionalButtons.className = "ui-icon ui-icon-info"
                additionalButtons.style.marginLeft = "2px"
                additionalButtons.style.position = "absolute";

                frame.appendChild(additionalButtons);
                dom.items.additionalButtons = additionalButtons;
            }

            if (this.selection) {
                var index = this.selection.index,
                  item = this.items[index],
                  domItem = this.selection.item,
                  right,
                  top = item.top;

                switch (item.type) {
                    case 'range':
                        right = this.timeToScreen(item.end);
                        break;

                    case 'box':
                        //right = this.timeToScreen(item.start) + item.width / 2 + item.borderWidth; // TODO: borderWidth
                        right = this.timeToScreen(item.start) + item.width / 2;
                        break;

                    case 'dot':
                        right = this.timeToScreen(item.start) + item.dom.clientWidth;
                        break;
                }

                // limit the position
                if (right < -size.contentWidth) {
                    right = -size.contentWidth;
                }
                if (right > 2 * size.contentWidth) {
                    right = 2 * size.contentWidth;
                }

                additionalButtons.style.left = right + 'px';
                additionalButtons.style.top = top + 16 + 'px';
                additionalButtons.style.display = '';
                additionalButtons.onclick = function(e) {
                    this.trigger("additionalbuttonclicked");
                }
                frame.removeChild(additionalButtons);
                frame.appendChild(additionalButtons);
            }
            else {
                additionalButtons.style.display = 'none';
            }
        };

        links.Timeline.prototype.updateData = function(index, values) {
            var data = this.data;

            if (google && google.visualization &&
        data instanceof google.visualization.DataTable) {
                // update the original google DataTable
                var missingRows = (index + 1) - data.getNumberOfRows();
                if (missingRows > 0) {
                    data.addRows(missingRows);
                }

                if (values.start) {
                    data.setValue(index, 0, values.start);
                }
                if (values.end) {
                    data.setValue(index, 1, values.end);
                }
                if (values.content) {
                    data.setValue(index, 2, values.content);
                }

                var groupCol = links.Timeline.findColumnId(data, 'group');
                if (values.group && groupCol != undefined) {
                    // TODO: append a column when needed?
                    data.setValue(index, groupCol, values.group);
                }

                var classNameCol = links.Timeline.findColumnId(data, 'className');
                if (values.className && classNameCol != undefined) {
                    data.setValue(index, classNameCol, values.className);
                }
            }
            else if (links.Timeline.isArray(data)) {
                // update the original JSON table
                var row = data[index];
                if (row == undefined) {
                    row = {};
                    data[index] = row;
                }

                if (values.ID) {
                    row.ID = values.ID;
                }
                if (values.start) {
                    row.start = values.start;
                }
                if (values.end) {
                    row.end = values.end;
                }
                if (values.content) {
                    row.content = values.content;
                }
                if (values.group) {
                    row.group = values.group;
                }
                if (values.className) {
                    row.className = values.className;
                }
            }
            else {
                throw "Cannot update data, unknown type of data";
            }
        };

        links.Timeline.prototype.createItem = function(itemData) {
            var item = {
                'id': itemData.ID,
                'start': itemData.start,
                'end': itemData.end,
                'content': itemData.content,
                'type': itemData.end && (itemData.start - itemData.end != 0) ? 'range' : this.options.style,
                'group': itemData.group != null ? this.getGroup(itemData.group) : undefined,
                'className': itemData.className != null ? itemData.className : undefined,
                'top': 0,
                'left': 0,
                'width': 0,
                'height': 0,
                'lineWidth': 0,
                'dotWidth': 0,
                'dotHeight': 0
            };
            return item;
        };

        links.Timeline.prototype.changeItem = function(index, itemData) {
            var item = this.items[index];
            if (!item) {
                throw "Cannot change item, index out of range";
            }

            // create new item
            var newItem = {
                'ID': itemData.hasOwnProperty('ID') ? itemData.ID : item.ID,
                'start': itemData.hasOwnProperty('start') ? itemData.start : item.start,
                'end': itemData.hasOwnProperty('end') ? itemData.end : item.end,
                'content': itemData.hasOwnProperty('content') ? itemData.content : item.content,
                'group': itemData.hasOwnProperty('group') ? itemData.group : this.getGroupName(item.group)
            };
            this.items[index] = this.createItem(newItem);

            // update the original data table
            this.updateData(index, itemData);

            // redraw timeline
            this.size.dataChanged = true;
            this.redrawFrame();
            this.recalcSize();
            this.stackEvents(false);
            this.redrawFrame();
            this.size.dataChanged = false;
        };
        links.Timeline.prototype.createEventDot = function(item) {
            // background box
            var divBox = document.createElement("DIV");
            if (item.id != undefined) {
                divBox.id = item.id.join(keySep);
            }
            divBox.style.position = "absolute";

            // contents box, right from the dot
            var divContent = document.createElement("DIV");
            divContent.className = "timeline-event-content";
            divBox.appendChild(divContent);

            // dot at start
            var divDot = document.createElement("DIV");
            divDot.style.position = "absolute";
            divDot.style.width = "0px";
            divDot.style.height = "0px";
            divBox.appendChild(divDot);

            divBox.content = divContent;
            divBox.dot = divDot;

            return divBox;
        };

        links.Timeline.prototype.createEventRange = function(item) {
            // background box
            var divBox = document.createElement("DIV");
            if (item.id != undefined) {
                divBox.id = item.id.join(keySep);
            }
            divBox.style.position = "absolute";

            // contents box
            var divContent = document.createElement("DIV");
            divContent.className = "timeline-event-content";
            divBox.appendChild(divContent);

            return divBox;
        };

        links.Timeline.prototype.onMouseUp = function(event) {
            var params = this.eventParams,
            options = this.options;
            event = event || window.event;
            this.dom.frame.style.cursor = 'auto';

            // remove event listeners here, important for Safari
            if (params.onMouseMove) {
                links.Timeline.removeEventListener(document, "mousemove", params.onMouseMove);
                delete params.onMouseMove;
            }
            if (params.onMouseUp) {
                links.Timeline.removeEventListener(document, "mouseup", params.onMouseUp);
                delete params.onMouseUp;
            }
            //links.Timeline.preventDefault(event);

            if (params.customTime) {
                // fire a timechanged event
                this.trigger('timechanged');
            }
            else if (params.editItem) {
                var item = this.items[params.itemIndex];

                if (params.moved || params.addItem) {
                    this.applyChange = true;
                    this.applyAdd = true;

                    this.updateData(params.itemIndex, {
                        'start': item.start,
                        'end': item.end
                    });

                    // fire an add or change event. 
                    // Note that the change can be canceled from within an event listener if 
                    // this listener calls the method cancelChange().
                    this.trigger(params.addItem ? 'add' : 'change');

                    if (params.addItem) {
                        if (this.applyAdd) {
                            this.updateData(params.itemIndex, {
                                'start': item.start,
                                'end': item.end,
                                'content': item.content,
                                'group': this.getGroupName(item.group)
                            });
                        }
                        else {
                            // undo an add
                            this.deleteItem(params.itemIndex);
                        }
                    }
                    else {
                        if (this.applyChange) {
                            this.updateData(params.itemIndex, {
                                'start': item.start,
                                'end': item.end
                            });
                        }
                        else {
                            // undo a change
                            delete this.applyChange;
                            delete this.applyAdd;

                            var item = this.items[params.itemIndex],
                        domItem = item.dom;

                            item.start = params.itemStart;
                            item.end = params.itemEnd;
                            item.group = params.itemGroup;
                            // TODO: original group hould be restored too
                            this.repositionItem(item, params.itemLeft, params.itemRight);
                        }
                    }

                    this.recalcSize();
                    this.stackEvents(options.animate);
                    if (!options.animate) {
                        this.redrawFrame();
                    }
                    this.redrawDeleteButton();
                    this.redrawDragAreas();
                }
            }
            else {
                if (!params.moved && !params.zoomed) {
                    // mouse did not move -> user has selected an item

                    if (options.editable && (params.target === this.dom.items.deleteButton)) {
                        // delete item
                        if (this.selection) {
                            this.confirmDeleteItem(this.selection.index);
                        }
                        this.redrawFrame();
                    }
                    else if (params.target === this.dom.items.additionalButtons) {
                        params.target.onclick.call(this);
                        this.redrawFrame();
                    }
                    else if (options.selectable) {
                        // select/unselect item
                        if (params.itemIndex !== undefined) {
                            if (!this.isSelected(params.itemIndex)) {
                                this.selectItem(params.itemIndex);
                                this.redrawDeleteButton();
                                this.redrawDragAreas();
                                this.trigger('select');
                            }
                        }
                        else {
                            this.unselectItem();
                            this.redrawDeleteButton();
                            this.redrawDragAreas();
                            this.trigger('select');
                        }
                    }
                }
                else {
                    // timeline is moved 
                    this.redrawFrame();

                    if ((params.moved && options.moveable) || (params.zoomed && options.zoomable)) {
                        // fire a rangechanged event
                        this.trigger('rangechanged');
                    }
                }
            }
        };

        links.Timeline.prototype.redrawNavigation = function() {
            var timeline = this,
        options = this.options,
        dom = this.dom,
        frame = dom.frame,
        navBar = dom.navBar;

            if (!navBar) {
                if (options.editable || options.showNavigation) {
                    // create a navigation bar containing the navigation buttons
                    navBar = document.createElement("DIV");
                    navBar.style.position = "absolute";
                    navBar.className = "timeline-navigation";
                    if (options.groupsOnRight) {
                        navBar.style.left = '10px';
                    }
                    else {
                        navBar.style.right = '10px';
                    }
                    if (options.axisOnTop) {
                        navBar.style.bottom = '10px';
                    }
                    else {
                        navBar.style.top = '10px';
                    }
                    dom.navBar = navBar;
                    frame.appendChild(navBar);
                }

                if (options.editable && options.showButtonAdd) {
                    // create a new in button
                    navBar.addButton = document.createElement("DIV");
                    navBar.addButton.className = "timeline-navigation-new";

                    //navBar.addButton.title = "Create new event";
                    navBar.addButton.title = self.options.newButtonText;

                    var onAdd = function(event) {
                        links.Timeline.preventDefault(event);
                        links.Timeline.stopPropagation(event);

                        // create a new event at the center of the frame
                        var w = timeline.size.contentWidth;
                        var x = w / 2;
                        var xstart = timeline.screenToTime(x - w / 10); // subtract 10% of timeline width
                        var xend = timeline.screenToTime(x + w / 10); // add 10% of timeline width
                        if (options.snapEvents) {
                            timeline.step.snap(xstart);
                            timeline.step.snap(xend);
                        }

                        var content = self.options.newItemText;
                        var group = timeline.groups.length ? timeline.groups[0].content : undefined;

                        timeline.addItem({
                            'start': xstart,
                            'end': xend,
                            'content': content,
                            'group': group
                        });
                        var index = (timeline.items.length - 1);
                        timeline.selectItem(index);

                        timeline.applyAdd = true;

                        // fire an add event. 
                        // Note that the change can be canceled from within an event listener if 
                        // this listener calls the method cancelAdd().
                        timeline.trigger('add');

                        if (!timeline.applyAdd) {
                            // undo an add
                            timeline.deleteItem(index);
                        }
                        timeline.redrawDeleteButton();
                        timeline.redrawDragAreas();
                    };
                    links.Timeline.addEventListener(navBar.addButton, "mousedown", onAdd);
                    navBar.appendChild(navBar.addButton);
                }

                if (options.editable && options.showButtonAdd && options.showNavigation) {
                    // create a separator line
                    navBar.addButton.style.borderRightWidth = "1px";
                    navBar.addButton.style.borderRightStyle = "solid";
                }

                if (options.showNavigation) {
                    // create a zoom in button
                    navBar.zoomInButton = document.createElement("DIV");
                    navBar.zoomInButton.className = "timeline-navigation-zoom-in";
                    //navBar.zoomInButton.title = "Zoom in";
                    navBar.zoomInButton.title = self.options.zoomInText;
                    var onZoomIn = function(event) {
                        links.Timeline.preventDefault(event);
                        links.Timeline.stopPropagation(event);
                        timeline.zoom(0.4);
                        timeline.trigger("rangechange");
                        timeline.trigger("rangechanged");
                    };
                    links.Timeline.addEventListener(navBar.zoomInButton, "mousedown", onZoomIn);
                    navBar.appendChild(navBar.zoomInButton);

                    // create a zoom out button
                    navBar.zoomOutButton = document.createElement("DIV");
                    navBar.zoomOutButton.className = "timeline-navigation-zoom-out";
                    //navBar.zoomOutButton.title = "Zoom out";
                    navBar.zoomOutButton.title = self.options.zoomOutText;
                    var onZoomOut = function(event) {
                        links.Timeline.preventDefault(event);
                        links.Timeline.stopPropagation(event);
                        timeline.zoom(-0.4);
                        timeline.trigger("rangechange");
                        timeline.trigger("rangechanged");
                    };
                    links.Timeline.addEventListener(navBar.zoomOutButton, "mousedown", onZoomOut);
                    navBar.appendChild(navBar.zoomOutButton);

                    // create a move left button
                    navBar.moveLeftButton = document.createElement("DIV");
                    navBar.moveLeftButton.className = "timeline-navigation-move-left";
                    //navBar.moveLeftButton.title = "Move left";
                    navBar.moveLeftButton.title = self.options.moveLeftText;
                    var onMoveLeft = function(event) {
                        links.Timeline.preventDefault(event);
                        links.Timeline.stopPropagation(event);
                        timeline.move(-0.2);
                        timeline.trigger("rangechange");
                        timeline.trigger("rangechanged");
                    };
                    links.Timeline.addEventListener(navBar.moveLeftButton, "mousedown", onMoveLeft);
                    navBar.appendChild(navBar.moveLeftButton);

                    // create a move right button
                    navBar.moveRightButton = document.createElement("DIV");
                    navBar.moveRightButton.className = "timeline-navigation-move-right";
                    //navBar.moveRightButton.title = "Move right";
                    navBar.moveRightButton.title = self.options.moveRightText;
                    var onMoveRight = function(event) {
                        links.Timeline.preventDefault(event);
                        links.Timeline.stopPropagation(event);
                        timeline.move(0.2);
                        timeline.trigger("rangechange");
                        timeline.trigger("rangechanged");
                    };
                    links.Timeline.addEventListener(navBar.moveRightButton, "mousedown", onMoveRight);
                    navBar.appendChild(navBar.moveRightButton);
                }
            }
        };

        links.Timeline.prototype.getItem = function(index) {
            if (index >= this.items.length) {
                throw "Cannot get item, index out of range";
            }

            var item = this.items[index];

            var properties = {};
            properties.id = item.id;
            properties.start = new Date(item.start);
            if (item.end) {
                properties.end = new Date(item.end);
            }
            properties.content = item.content;
            if (item.group) {
                properties.group = this.getGroupName(item.group);
            }

            return properties;
        };
    },
    _init: function() {    
        var self = this;
        var opt = {
            'width': '100%',
            'height': '100%',
            'editable': true,   // enable dragging and editing events
            'style': 'dot',
            showMajorLabels: true,
            showCustomTime: true,
            showNavigation: true,
            snapEvents: true,
            dragAreaWidth: 20,
            groupsOnRight: false,
            animate: true,
            animateZoom: true,
            stackEvents: true,
            scale: self.options.scale,
            step: self.options.step
        };

        Date.prototype.addDays = function(days) {
            this.setDate(this.getDate() + days);
        }

        if (self.options.timelineSpan != undefined) {
            var span = self.options.timelineSpan;
            var d1 = new Date();
            var start = d1.setDate(d1.getDate() - Math.round(span / 2));
            var d2 = new Date();
            var end = d2.setDate(d2.getDate() + Math.round(span / 2));
            opt.start = d1;
            opt.end = d2;
        }

        // Instantiate our timeline object.
        self._timeline = new links.Timeline(document.getElementById(self.element.attr("id")));

        // Make a callback function for the select event
        function onselect(event) {
            var row = undefined;
            var sel = self._timeline.getSelection();
            if (sel.length) {
                if (sel[0].row != undefined) {
                    var row = sel[0].row;
                }
            }

            if (row != undefined) {
                self.options.onselect.call(self, self._data[row])
            }
            else {
                // sin fila seleccionada
                if ($.isFunction(self.options.ondeselect)) {
                    self.options.ondeselect.call(self)
                }
            }
        }

        function onadd(event) {
            if ($.isFunction(self.options.onadd)) {
                self.options.onadd.call(self)
            }
        };

        function ondelete(event) {
            var sel = self.getSelectedRow();
            if ($.isFunction(self.options.ondelete)) {
                self.options.ondelete.call(self, sel)
            }
        }

        function onready(event) {
            if ($.isFunction(self.options.onready)) {
                self.options.onready.call(self);
            }
        }

        function onrangechanged(event) {
            if ($.isFunction(self.options.onrangechanged)) {
                self.options.onrangechanged.call(self);
            }
        }

        function onchange(event) {
            if ($.isFunction(self.options.onchange)) {
                self.options.onchange.call(self);
            }
        }

        function onadditionalbuttonclicked(event) {
            self.options.additionalbuttonclicked.call(self, self.getSelectedKey());
        }

        if ($.isFunction(self.options.onselect)) {
            links.events.addListener(self._timeline, 'select', onselect);
        }

        if ($.isFunction(self.options.onadd)) {
            links.events.addListener(self._timeline, 'add', onadd);
        }

        if ($.isFunction(self.options.ondelete)) {
            links.events.addListener(self._timeline, 'delete', ondelete);
        }

        if ($.isFunction(self.options.onrangechanged)) {
            links.events.addListener(self._timeline, 'rangechanged', onrangechanged);
        }

        if ($.isFunction(self.options.onchange)) {
            links.events.addListener(self._timeline, 'change', onchange);
        }

        if ($.isFunction(self.options.additionalbuttonclicked)) {
            links.events.addListener(self._timeline, 'additionalbuttonclicked', onadditionalbuttonclicked);
        }

        // Draw our timeline with the created data and options
        var objData = { 'prand': parURLAle(), 'hash': viewHash };

        if ($.isFunction(self.options.sourceDataExtra)) {
            objData = self.options.sourceDataExtra.call(this, objData);
        }

        objData = { 'data': objData };
        $.ajax({
            type: "POST",
            url: self.options.sourceURL,
            dataType: "json",
            data: JSON.stringify(objData),
            contentType: "application/json; charset=utf-8",
            async: false,
            success: function(data) {
                var data = data.d.eventList;
                // LAS FECHAS SON EN FORMATO UNIX TIME, CONVERTIRLAS A DATE
                $.map(data, function(element, index) {
                    var dS = new Date();
                    dS.setTime(element.start);
                    element.start = dS;

                    if (element.end == undefined || element.end == 0) {
                        delete element.end;
                    }
                    else {
                        var dE = new Date();
                        dE.setTime(element.end);
                        element.end = dE;
                    }
                    if (element.group == undefined) {
                        delete element.group;
                    }
                    if (element.className == undefined) {
                        delete element.className;
                    }

                    return element;
                });

                if ($.isFunction(self.options.onDataCallback)) {
                    data = self.options.onDataCallback.call(this, data);
                }
                self._data = data;
                self._timeline.draw(data, opt);

                onready.call(self);
            }
        });
    },
    setSize: function(width, height) {
        var self = this;
        self._timeline.setSize(width, height);
    },
    addItem: function(obj) {
        var self = this;
        self._timeline.addItem(obj);
        var index = (self._timeline.items.length - 1);
        self._timeline.selectItem(index);
    },
    removeItem: function(id) {
        var self = this;
        var underlyingEl = self.element;
        var itemindex = self.getItemIndexByKey(id)
        // buscar index, cambiar redraw items para anadir el id
        self._timeline.deleteItem(itemindex);
    },
    checkResize: function() {
        var self = this;
        self._timeline.checkResize();
    },
    redraw: function(keepSel) {
        var self = this;
        if (keepSel) {
            var selection = self._timeline.getSelection();
        }
        self._timeline.redraw();
        if (keepSel) {
            self._timeline.setSelection(selection);
        }
    },
    recalcSize: function() {
        var self = this;
        self._timeline.recalcSize();
    },
    redrawFrame: function() {
        var self = this;
        self._timeline.redrawFrame();
    },
    trigger: function(eventName) {
        var self = this;
        self._timeline.trigger(eventName);
    },
    changeItem: function(itemKey, properties) {
        var self = this;
        var elIndex = self.getItemIndexByKey(itemKey);
        var selection = self._timeline.getSelection();
        self._timeline.changeItem(elIndex, properties);
        self._timeline.setSelection(selection);
    },
    changeSelectedItem: function(properties) {
        var self = this;
        var elIndex = self.getSelectedRow();
        self._timeline.changeItem(elIndex, properties);
        self._timeline.setSelection(elIndex);
    },
    getItemIndexByKey: function(itemKey) {
        var self = this;
        var timeline = self._timeline;
        var data = timeline.getData();
        var item;
        var itemKey = self.getItemKeyArray(itemKey);
        for (i = 0; i < data.length; i++) {
            item = data[i];
            if (itemKey.length == item.ID.length) {
                if (self.arraysEqual(itemKey, item.ID)) return i;
            }
        }
        return false;
    },
    getItem: function(itemKey) {
        var self = this;
        var timeline = self._timeline;
        var itemIndex = self.getItemIndexByKey(itemKey);
        return timeline.getItem(itemIndex);
    },
    getSelectedItem: function() {
        var self = this;
        var timeline = self._timeline;
        var itemIndex = timeline.getSelection()[0].row;
        return timeline.getItem(itemIndex);
    },
    getItemKeyArray: function(itemKey) {
        return itemKey.split(keySep);
    },
    arraysEqual: function(a1, a2) {
        return JSON.stringify(a1) == JSON.stringify(a2);
    },
    cancelChange: function() {
        var self = this;
        self._timeline.cancelChange();
    },
    setScale: function(scale, step) {
        var self = this;
        self._timeline.setScale(scale, step);
    },
    deleteSelectedItem: function() {
        var self = this;
        self._timeline.deleteItem(self.getSelectedRow());
    },
    setVisibleChartRange: function(start, end) {
        var self = this;
        self._timeline.setVisibleChartRange(start, end);
    }
});

