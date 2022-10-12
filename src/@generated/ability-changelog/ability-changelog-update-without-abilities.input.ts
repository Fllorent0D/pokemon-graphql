import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateOneRequiredWithoutAbility_changelogNestedInput } from '../version-groups/version-groups-update-one-required-without-ability-changelog-nested.input';
import { ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput } from '../ability-changelog-prose/ability-changelog-prose-update-many-without-ability-changelog-nested.input';

@InputType()
export class ability_changelogUpdateWithoutAbilitiesInput {

    @Field(() => version_groupsUpdateOneRequiredWithoutAbility_changelogNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutAbility_changelogNestedInput;

    @Field(() => ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput;
}
