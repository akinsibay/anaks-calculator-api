const {spawn} = require('child_process')

const sendDataToPython = (latex)=>{
    return new Promise((resolve,reject)=>{
        const childPython = spawn('python',['./Calculation/calculator.py',latex])
        childPython.on('close',(code)=>{ //kapanırken
            console.log('child process exited with code '+code)
        })
        childPython.stdout.on('data',(data)=>{ //stdout datası geldiğinde
            console.log('came from python: '+data)
            resolve(data)
        })
        childPython.stderr.on('data',(data)=>{ //error datası geldiğinde 
            console.error('stderr: '+data)
            reject(data)
        })
        childPython.stdin.on('data',(data)=>{ //stdout datası geldiğinde 
            console.error('stdinn: '+data)
        })
    })
}

module.exports = sendDataToPython;
