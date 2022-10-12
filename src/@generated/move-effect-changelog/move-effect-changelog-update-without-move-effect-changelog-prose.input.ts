import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateOneRequiredWithoutMove_effect_changelogNestedInput } from '../version-groups/version-groups-update-one-required-without-move-effect-changelog-nested.input';
import { move_effectsUpdateOneRequiredWithoutMove_effect_changelogNestedInput } from '../move-effects/move-effects-update-one-required-without-move-effect-changelog-nested.input';

@InputType()
export class move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput {

    @Field(() => version_groupsUpdateOneRequiredWithoutMove_effect_changelogNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutMove_effect_changelogNestedInput;

    @Field(() => move_effectsUpdateOneRequiredWithoutMove_effect_changelogNestedInput, {nullable:true})
    move_effects?: move_effectsUpdateOneRequiredWithoutMove_effect_changelogNestedInput;
}
