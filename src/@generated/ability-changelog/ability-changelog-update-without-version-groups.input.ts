import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateOneRequiredWithoutAbility_changelogNestedInput } from '../abilities/abilities-update-one-required-without-ability-changelog-nested.input';
import { ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput } from '../ability-changelog-prose/ability-changelog-prose-update-many-without-ability-changelog-nested.input';

@InputType()
export class ability_changelogUpdateWithoutVersion_groupsInput {

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_changelogNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_changelogNestedInput;

    @Field(() => ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput;
}
