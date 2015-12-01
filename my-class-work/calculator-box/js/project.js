$(document).ready(function () {

	var total = 0
	// add 10 event
	$('#a10').click(add10)

	function add10 () {

		total = total + 10
		$('#out').text(total)
	}

})