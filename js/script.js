/**
 * JavaScript is the life and blood of our application.
 *
 * Usually you put JavaScript in separate files,
 * but you can also include it into HTML itself.
 * This is often discouraged since it decreases manageability of your code.
 *
 * JavaScript in browser is usually driven by so called events.
 * Event can be a mouse click, mouse movement, keyboard stroke, network error,
 * browser tab switching etc. We will be interested in mouse click event.
 *
 * All events have their (unique) names. Mouse click event is called simply "click".
 *
 * All events take place in time and space and since we're in HTML now, space consists
 * of our website's HTML elements. Mouse click that we're interested in
 * will occur on our button element.
 *
 * To perform an action in reaction to an event, we need the place and the name of the event.
 * We already know the name - "click". To obtain the place, our button element,
 * we have to use on of the first features of JavaScript - a function called getElementById().
 * As the name suggests, this function allows us to find an HTML element by its id attribute.
 *
 * This function belongs to a special type of Object called document. document represents
 * our HTML document loaded in the browser window.
 */
var button = document.getElementById('button');

/**
 * Now that we have our button element stored in a variable called
 * (surprisingly) button, we can try waiting for mouse click events.
 * Since the action of waiting for an event is called "listening",
 * we are goin to be listening for an event. To do this, we have to create
 * a "listener".
 *
 * Listener is a function that will perform an action in reaction to an event.
 */
button.addEventListener('click', function() {
    console.log('button was clicked');

    /**
     * We now need to perform our action, that is we need to play the sound.
     * To do that, we have to find our <audio/> HTML element (guess how!)
     */
    var player = document.getElementById('sound');

    /**
     * The player variable now contains our <audio/> HTML element
     * This element is again a special type of HTML element that can play
     * sounds. To do that, we need to order him to do so.
     */
    player.play();
});
