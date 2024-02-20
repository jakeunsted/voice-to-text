# Voice to Text

This project is a simple voice to text converter using Python's `speech_recognition` library.

Currently set up to be used as part of a darts project.

Returns numbers as integers, or "double" followed by integers. Output can be customised.

## Features

- Converts speech to text using Google's Speech Recognition API.
- Listens for voice input continuously and prints the recognized text.
- Posts the recognized text to a local server if it's a number or a phrase starting with "double".

## How to Run

1. Ensure you have Python installed on your machine.
2. Install the required Python packages using pip:

```sh
pip install -r requirements.txt
```

3. Run the script:
```sh
python speech_to_text.py
```

## Note
This project uses the microphone as the audio source. Make sure your microphone is working and properly configured.

## License
This project is open source, under the MIT license.