import React, {PropTypes} from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import appTheme from 'universal/styles/theme/appTheme';

import Type from 'universal/components/Type/Type';
import MeetingMain from 'universal/modules/meeting/components/MeetingMain/MeetingMain';
import MeetingSection from 'universal/modules/meeting/components/MeetingSection/MeetingSection';
import MeetingPhaseHeading from 'universal/modules/meeting/components/MeetingPhaseHeading/MeetingPhaseHeading';
import SummaryEmailPreview from 'universal/modules/meeting/components/SummaryEmailPreview/SummaryEmailPreview';
import SummaryFirstTime from 'universal/modules/meeting/components/SummaryFirstTime/SummaryFirstTime';
import SummaryQuickStats from 'universal/modules/meeting/components/SummaryQuickStats/SummaryQuickStats';
import {makeSuccessExpression} from 'universal/utils/makeSuccessCopy';

const MeetingSummary = (props) => {
  const {
    actionCount,
    agendaItemsCompleted,
    meetingNumber,
    projectCount,
    styles,
    teamMembers,
  } = props;
  return (
    <MeetingMain>
      <MeetingSection flexToFill paddingBottom="2rem">
        <MeetingSection paddingBottom="4rem" paddingTop="4rem">

          <MeetingPhaseHeading>
            Meeting Summary
          </MeetingPhaseHeading>

          <Type align="center" marginBottom="2rem" marginTop="2rem" scale="s5">
            <b>{makeSuccessExpression()}</b>! We worked on{' '}
            <span className={css(styles.highlight)}>{agendaItemsCompleted} Agenda Items</span><br />
            <span>resulting in </span>
            <span className={css(styles.highlight)}>{projectCount} New Projects </span>
            <span>and </span>
            <span className={css(styles.highlight)}>{actionCount} New Actions</span>
            <span>.</span>
          </Type>

          {meetingNumber === 1 &&
            <MeetingSection paddingBottom="2rem" paddingTop="2rem">
              <SummaryFirstTime />
            </MeetingSection>
          }

          <MeetingSection paddingBottom="2rem" paddingTop="2rem">
            <SummaryQuickStats
              actionCount={actionCount}
              projectCount={projectCount}
            />
          </MeetingSection>

          <MeetingSection paddingBottom="2rem" paddingTop="2rem">
            <SummaryEmailPreview teamMembers={teamMembers}/>
          </MeetingSection>

        </MeetingSection>
      </MeetingSection>
    </MeetingMain>
  );
};

MeetingSummary.propTypes = {
  styles: PropTypes.object,
};

const styleThunk = () => ({
  root: {
    width: '100%'
  },

  highlight: {
    color: appTheme.palette.warm,
    fontWeight: 700
  }
});

MeetingSummary.propTypes = {
  actionCount: PropTypes.number,
  agendaItemsCompleted: PropTypes.number,
  meetingNumber: PropTypes.number,
  projectCount: PropTypes.number,
  teamMembers: PropTypes.array,
};

export default withStyles(styleThunk)(MeetingSummary);
