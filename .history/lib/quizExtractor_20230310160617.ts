export const quizExtractor = (question: Question[][]) => {
    let a = 0
    let b = 0
    let c = 0
    let len1 = question.length
    let len2 = question[0].length
    let quiz = []
    while (a < len1) {
        while (b < len2) {
            console.log("Inside quiz extractor",question[0][a]);
            quiz.push()
            b++
        }
        a++
    }
    
}