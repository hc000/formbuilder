/**
 * Created by hc000 on 3/6/14.
 */


    var template="<div>";
    var form = {"transfer": {
        "buttons": [],
        "fields": [
            {
                "field": "transfer",
                "title": "to transfer",
                "validate": [
                    {
                        "field": "transfer",
                        "value": "SUCCESS",
                        "logic": "equals"
                    }
                ]
            },{
                "field": "project",
                "title": "to project",
                "validate": [
                    {
                        "field": "transfer",
                        "value": "SUCCESS",
                        "logic": "equals"
                    }
                ]
            }
        ]
    }
    };

var field="<input type='text'>";
var body="";
for(var a=0;a<form.transfer.fields.length+1;a++){
    body+="<label>"+form.transfer.fields[a].title+"<label/>"+ field;

}
template+=body+"</div>";
$("#body").html(template);

