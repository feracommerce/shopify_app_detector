# Fera.ai Shopify App Detector
This is a Chrome extension that lets you detect what Shopify apps a store is running.


## Adding an app detection
To add an app detection, add an entry in the data/shopify_apps.js file. You can submit a pull request with the addition and one of the community contributers will update it.

## Support
It is supported by the community and [fera.ai](https://www.fera.ai?ref=fera_ai_shopify_app_detector), a real-time personalization and conversion rate optimization platform for Shopify. Please post questions or concerns about this chrome extension [here](https://github.com/feracommerce/shopify_app_detector/issues).


# Contributing to the Repo

### Setting Up Local Development
To work on the code simply:
1. Pull down the repo somewhere
2. Navigate to [chrome://extensions/](chrome://extensions/)
3. On the top right flip the switch to turn on developer mode.
4. Click on Load Unpacked Extension and select the directory that contains this repo's code.

### How to contribute
To contribute to the repository:

1. Fork the repository.
2. Clone the forked repository locally.
3. Create a branch descriptive of your work. For example "my_new_feature_xyz".
4. When you're done work, push up that branch to **your own forked repository** (not the feracommerce/shpoify_app_detector one).
5. Visit https://github.com/feracommerce/shpoify_app_detector and you'll see an option to create a pull request from your forked branch to the master. Create a pull request.
6. Fill out the pull request template with everything it asks for and assign the pull request to someone to review.
7. Set the reviewee as yourself and the requested reviewer as whomever you want to review your PR.
8. Once the PR merges into master then it is ready for production and should be treated as such. It will be deployed to staging within minutes.


Henceforth the root master repo (`feracommerce/shpoify_app_detector`) will be referred to as `upstream` and your own fork will be referred to as `origin`.

### When to push to upstream
We only push branches to upstream if you:
1. Want to let other developers test and run the code, or
2. You want to work with other developers on some code that needs to be branched from master.

For example if you're working on `some_large_feature_x` you could create the branch, push to `upstream/some_large_feature_x` and then developer A and developer B can both submit PRs against `upstream/some_large_feature_x`.
Then when that feature is ready for merge into master, you just submit a single PR from `upstream/some_large_feature_x` to `upstream/master`

### Getting your PR approved
A few key things to note:
* PRs must pass the test suite before they can be merged (using Side CI). It will tell you in the Pull Request whether it is OK to merge yet.
* PRs must be approved by at least one requested reviewers before you can merge.
* After you implement changes requested from a reviewer then post back with a :recycle: to say something like `:recyle: Ready for you to look again at it please.`. **Note:** If you do not do this then you PR may not ever get re-reviewed after comments are taken into acocunt.
* If a PR comment starts with a :beer: `:beer:` then it is just a suggestion and preference of the reviewer and the comment is NON-blocking. That is, your PR may still be approved with these comments.
* If a PR comment starts with a :tipping_hand_man: `:tipping_hand_man:` then it is just informative and requires no action. It's like a "FYI"
* All other PR comments probably need to be addressed unless otherwise agreed by the reviewer.
* After a PR has been approved then you are free to merge.
* For contractors, your PR must be approved and merged before you may bill for your work on that component.
* PR reviews will happen ASAP but generally within 24 hours.


## JavaScript Style Guide
We use an object-oriented approach to JavaScript (as object-oriented as we can).

Use four spaces for JavaScript. Use the following style guide: https://github.com/airbnb/javascript

Use [JSDoc](http://usejsdoc.org/about-getting-started.html) to document methods inside JavaScript classes.

