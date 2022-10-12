import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutAbility_changelogInput } from '../version-groups/version-groups-create-nested-one-without-ability-changelog.input';
import { ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput } from '../ability-changelog-prose/ability-changelog-prose-create-nested-many-without-ability-changelog.input';

@InputType()
export class ability_changelogCreateWithoutAbilitiesInput {

    @Field(() => version_groupsCreateNestedOneWithoutAbility_changelogInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutAbility_changelogInput;

    @Field(() => ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput;
}
