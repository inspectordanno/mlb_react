library(pacman)
p_load(Lahman, tidyverse)

original_data <- read_csv('./baseball.csv')
data(People)
data("Batting")

People <- People %>%
  mutate(fullName = str_c(nameFirst, nameLast, sep = " "))

##get vector from data frame
names <- original_data$Name
names2 <- pull(original_data, Name) ##tidyverse equivalent
names_df <- select(original_data, Name)

joined <- semi_join(People, names_df, by = c("fullName" = "Name"))
not_found <- anti_join(names_df, People, by = c("Name" = "fullName"))

not_founds <- People %>%
  filter(playerID == 'ripkeca01' | playerID == 'griffke02' | playerID == 'kluszte01')

playerIDs <- full_join(joined, not_founds) %>%
  select(playerID, fullName)

playersBatting <- inner_join(Batting, playerIDs, by = "playerID")
