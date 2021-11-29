def solution(l):
    def numbersToStrings(intlist):
        result = []
        for number in intlist:
            result.append(str(number))
        return result

    if len(l) == 0:
        return 0

    sum = 0
    for number in l:
        sum = sum + int(number)

    if sum % 3 == 0:  # positive case.
        l = numbersToStrings(l)

        l.sort(reverse=True)

        result = ""
        for number in l:
            result = result + number

        return int(result)
    else:  # time to work.
        solutions = []

        for i in range(len(l)):
            aux = list(l)
            l.__delitem__(i)
            sol = solution(l)
            if sol and sol != 0:
                solutions.append(sol)
            l = aux

        solutions.sort()

        if len(solutions) > 0:
            res = solutions.pop()
            return max([0, int(res)])
        else:
            return 0


print("----------------------------")
print("Result:")
print(solution([3, 1, 4, 1, 5, 9]))
print("Result:")
print(solution([3, 1, 4, 1]))
print("Result:")
print(solution([1, 1]))
print("Result:")
print(solution([3, 1, 4, 1]))
print("Result:")
print(solution([1]))
print("Result:")
print(solution([1, 1, 1, 1]))
