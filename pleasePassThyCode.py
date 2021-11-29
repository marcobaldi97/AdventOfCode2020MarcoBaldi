from itertools import combinations


def solution(l):
    l.sort(reverse=True)

    for i in reversed(range(1, len(l) + 1)):
        for tuple in list(combinations(l, i)):
            if sum(tuple) % 3 == 0:
                valueToReturn = ""
                for character in tuple:
                    valueToReturn = valueToReturn + str(character)

                return int(valueToReturn)
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
