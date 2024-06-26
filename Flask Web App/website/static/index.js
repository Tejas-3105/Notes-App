function deleteNote(noteId) {
    // Send a POST request to delete the note with the specified ID
    fetch('/delete-note', {
        method:'POST',
        body: JSON.stringify({noteId: noteId}),  // Convert noteId to JSON format and send it in the request body
    }).then((_res) => {
        // Redirect to the home page after the note is deleted
        window.location.href = "/";  // Redirect to the home page
    });
}