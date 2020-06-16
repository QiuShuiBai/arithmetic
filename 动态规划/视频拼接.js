// 你将会获得一系列视频片段，这些片段来自于一项持续时长为 T 秒的体育赛事。这些片段可能有所重叠，也可能长度不一。

// 视频片段 clips[i] 都用区间进行表示：开始于 clips[i][0] 并于 clips[i][1] 结束。我们甚至可以对这些片段自由地再剪辑，例如片段 [0, 7] 可以剪切成 [0, 1] + [1, 3] + [3, 7] 三部分。

// 我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（[0, T]）。返回所需片段的最小数目，如果无法完成该任务，则返回 -1 。

//  

// 示例 1：

// 输入：clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
// 输出：3
// 解释：
// 我们选中 [0,2], [8,10], [1,9] 这三个片段。
// 然后，按下面的方案重制比赛片段：
// 将 [1,9] 再剪辑为 [1,2] + [2,8] + [8,9] 。
// 现在我们手上有 [0,2] + [2,8] + [8,10]，而这些涵盖了整场比赛 [0, 10]。
// 示例 2：

// 输入：clips = [[0,1],[1,2]], T = 5
// 输出：-1
// 解释：
// 我们无法只用 [0,1] 和 [0,2] 覆盖 [0,5] 的整个过程。
// 示例 3：

// 输入：clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
// 输出：3
// 解释： 
// 我们选取片段 [0,4], [4,7] 和 [6,9] 。
// 示例 4：

// 输入：clips = [[0,4],[2,8]], T = 5
// 输出：2
// 解释：
// 注意，你可能录制超过比赛结束时间的视频。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/video-stitching
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function selection(arr) {
  let len = arr.length
  let minNum = null
  let minIndex = null
  for (let i = 1; i < len; i++) {
    minNum = arr[i - 1][1]
    minIndex = i - 1
    for (let j = i; j < len; j++) {
      if (minNum > arr[j][1]) {
        minIndex = j
        minNum = arr[j][1]
      }
    }
    [arr[i - 1], arr[minIndex]] = [arr[minIndex], arr[i-1]]
  }
  for (let i = 0; i < len; i++) {
    if (arr[i][0] === 0) {
      arr = arr.slice(i)
      break
    }
  }
  return arr
}

function videoStitching(clips, T) {
  if (T === 0) return 0
  clips = selection(clips)
  let dp = new Array(clips.length).fill(-1).map(() => new Array(T+1).fill(-1))
  if (clips[0][0] > 0) return -1
  if (clips[clips.length - 1][1] < 0) return -1
  for (let i = 0; i <= T; i++) {
    dp[0][i] = clips[0][1] >= i ? 1 : -1
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j <= T; j++) {
      if (dp[i][j-1] > 0) {
        if (clips[i][0] <= j - 1 && clips[i][1] >= j) {
          if (dp[i-1][j] > 0) {
            // 不用clips[i] 也能凑出T
            dp[i][j] = Math.min(dp[i-1][j], dp[i-1][clips[i][0]] + 1)
          } else {
            // 只有用了clips[i] 才能凑出T
            if (clips[i][0]=== 0) {
              dp[i][j] = 1
            } else {
              dp[i][j] = dp[i-1][clips[i][0]] + 1
            }
          }
        } else {
          dp[i][j] = dp[i-1][j]
        }
      }
    }
  }
  // console.log(dp)
  return dp[clips.length-1][T]
  // dp[n][T] 表示从前n个视频里找时间[0, T]的最少数目
  // dp[i][j] = Math.min(dp[i-1][j], dp[i-1][clips[i][0]] + 1)
}

// const clips = [[0,2], [1,5], [4,6], [1,9], [5,9], [8,10]], T = 10 // 3
// const clips = [[0,1],[1,2]], T = 5 // -1
// const clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9 // 3
// const clips = [[0,1], [0,2]], T = 2 // 1
// const clips = [[0,4],[2,8]], T = 5  // 2
// const clips = [[0,5],[6,8]], T = 7 // -1
// const clips = [[3,12],[7,14],[9,14],[12,15],[0,9],[4,14],[2,7],[1,11]], T = 10 // 2
console.log(videoStitching(clips, T))
