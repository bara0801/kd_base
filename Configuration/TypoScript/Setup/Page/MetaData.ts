/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:33:01
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
page.meta{
    description{
        data = page:description
        ifEmpty.data = levelfield: -1, description, slide
    }
    keywords{
        data = page:keywords
        ifEmpty.data = levelfield: -1, keywords, slide
    }
    abstract{
        data = page:abstract
        ifEmpty.data = levelfield: -1, abstract, slide
    }
    author{
        data = page:author
        ifEmpty.data = levelfield: -1, author, slide
    }
    robots{
        cObject = COA
        cObject{
            10 = TEXT
            10{
                data = page:robots_index
            }
            20 = TEXT
            20.value = ,
            30 = TEXT
            30{
                data = page:robots_follow
            }
            40 = TEXT
            40{
                if.isTrue.field = robots_nosnippet
                value = ,nosnippet
            }
            50 = TEXT
            50{
                if.isTrue.field = robots_noodp
                value = ,robots_noodp
            }
            60 = TEXT
            60{
                if.isTrue.field = robots_noarchive
                value = ,robots_noarchive
            }
            70 = TEXT
            70{
                if.isTrue.field = robots_noimageindex
                value = ,robots_noimageindex
            }
            80 = TEXT
            80{
                if.isTrue.field = robots_unavailable_after
                value.field = endtime
                wrap = ,unavailable_after:|
                date = r
            }
        }
        ifEmpty
    }
}