const json=require('./report.json')
const newarray=json.results;

const output=newarray.map((value)=>{
    var titles=value.suites[0].title
    var tests=value.suites[0].tests
    var time=value.suites[0].duration
    var passed = 0;
    var failed = 0;
    var skipped = 0;

    for(let status of tests){
        if (status.pass == true ) {
            passed += 1;
        } else {
            failed += 1;
        }

        if (status.skipped == true ) {
            skipped += 1;
        }
    }
    return {
        title:titles,
        passed: passed,
        failed: failed,
        skipped: skipped,
        time:time

    };
});
console.log(output);
