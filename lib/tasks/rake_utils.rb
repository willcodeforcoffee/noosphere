class RakeUtils
  class << self
    def default_no_prompt(question)
      print "\n#{question} [y/N] "
      yes_no = $stdin.gets.chomp
      yes_no.downcase == 'y'
    end

    def default_yes_prompt(question)
      print "\n#{question} [Y/n] "
      yes_no = $stdin.gets.chomp
      yes_no.downcase != 'n'
    end
  end
end
