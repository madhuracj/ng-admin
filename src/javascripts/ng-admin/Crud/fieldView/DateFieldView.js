module.exports = {
    getReadWidget:   () => '<ma-date-column field="::field" value="::entry.values[field.name()]"></ma-date-column>',
    getLinkWidget:   () => '<a ng-click="gotoDetail()">' + module.exports.getReadWidget() + '</a>',
    getFilterWidget: () => '<ma-date-field field="::field" value="values[field.name()]"></ma-date-field>',
    getWriteWidget:  () => '<div class="row"><div class="col-sm-5 col-lg-4"><ma-date-field field="::field" value="entry.values[field.name()]"></ma-date-field></div></div>'
};
