require 'rss'
require 'open-uri'
require 'date'

def fetch_episodes_info(rss_url)
  rss_content = URI.open(rss_url).read
  feed = RSS::Parser.parse(rss_content, false)

  feed.items.map do |episode|
    {
      title: episode.title,
      description: episode.description,
      pub_date: episode.pubDate,
      enclosure_url: episode.enclosure.url
    }
  end
end

require 'rss'
require 'open-uri'
require 'date'

def fetch_episodes_info(rss_url)
  rss_content = URI.open(rss_url).read
  feed = RSS::Parser.parse(rss_content, false)

  feed.items.map do |episode|
    {
      title: episode.title,
      description: episode.description,
      pub_date: episode.pubDate,
      enclosure_url: episode.enclosure.url
    }
  end
end

def create_markdown_files(episodes_info)
  episodes_info.each do |episode_info|
    filename_date = episode_info[:pub_date].strftime("%Y-%m-%d")
    title_slug = episode_info[:title].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    filename = "_posts/#{filename_date}-#{title_slug}.md"

    # 既にファイルが存在する場合はスキップ
    next if File.exist?(filename)

    content = <<~MARKDOWN
      ---
      title: "#{episode_info[:title]}"
      date: #{episode_info[:pub_date]}
      layout: post
      enclosure_url: #{episode_info[:enclosure_url]}
      ---
      #{episode_info[:description]}
    MARKDOWN

    File.open(filename, 'w') { |file| file.write(content) }
    puts "ファイルが生成されました: #{filename}"
  end
end

rss_url = "https://rss.art19.com/yancanfm"
episodes_info = fetch_episodes_info(rss_url)

create_markdown_files(episodes_info)

rss_url = "https://rss.art19.com/yancanfm"
episodes_info = fetch_episodes_info(rss_url)

create_markdown_files(episodes_info)
