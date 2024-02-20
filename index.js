const { spawn } = require('child_process');

// Function to start the Python script
function startSpeechRecognition() {
    const pythonProcess = spawn('python3', ['speech_to_text.py']);

    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python stdout: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`Python stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
      console.log(`Python child process exited with code ${code}`);
  });
}

// Call the function to start the Python script
startSpeechRecognition();

module.exports = startSpeechRecognition;
