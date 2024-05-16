function createUserProfiles(names, modifiedNames){
    let counter = 1
    return(
        names.map((name, index) => {
            return(
                {
                    originalName: name,
                    modifiedName: modifiedNames[index],
                    id: couter++s
                }
            )
        })
    )
}