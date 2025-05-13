document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const inputs = {
        noun: document.getElementById('noun'),
        adjective: document.getElementById('adjective'),
        person: document.getElementById('person'),
        verb: document.getElementById('verb'),
        place: document.getElementById('place')
    };

    // Array of story templates
    const stories = [
        (values) => `${values.person} was ${values.verb}ing in ${values.place} when they saw a ${values.adjective} ${values.noun}.`,
        (values) => `In ${values.place}, ${values.person} just found a ${values.adjective} ${values.noun} which could ${values.verb}!`,
        (values) => `A ${values.adjective} ${values.noun} helped ${values.person} ${values.verb} through ${values.place}.`
    ];

    // Function to get random story index different from current
    let currentStoryIndex = 0;
    function getRandomStoryIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * stories.length);
        } while (newIndex === currentStoryIndex);
        return newIndex;
    }

    // Function to validate inputs
    function validateInputs() {
        for (let key in inputs) {
            if (!inputs[key].value.trim()) {
                return false;
            }
        }
        return true;
    }

    // Function to get input values
    function getInputValues() {
        return {
            noun: inputs.noun.value.trim(),
            adjective: inputs.adjective.value.trim(),
            person: inputs.person.value.trim(),
            verb: inputs.verb.value.trim(),
            place: inputs.place.value.trim()
        };
    }

    // Function to display story
    function displayStory(values, storyIndex) {
        currentStoryIndex = storyIndex;
        storySpan.textContent = stories[storyIndex](values);
    }

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            storySpan.textContent = 'Please fill in all fields!';
            return;
        }
        
        const values = getInputValues();
        displayStory(values, 0); // Start with first story

        // Add shuffle button if not already present
        if (!document.getElementById('shuffle-button')) {
            const shuffleButton = document.createElement('button');
            shuffleButton.id = 'shuffle-button';
            shuffleButton.textContent = 'Shuffle Story';
            form.insertAdjacentElement('afterend', shuffleButton);

            // Shuffle button handler
            shuffleButton.addEventListener('click', () => {
                const values = getInputValues();
                const newStoryIndex = getRandomStoryIndex();
                displayStory(values, newStoryIndex);
            });
        }
    });
});