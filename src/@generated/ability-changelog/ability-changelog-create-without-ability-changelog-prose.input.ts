import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutAbility_changelogInput } from '../version-groups/version-groups-create-nested-one-without-ability-changelog.input';
import { abilitiesCreateNestedOneWithoutAbility_changelogInput } from '../abilities/abilities-create-nested-one-without-ability-changelog.input';

@InputType()
export class ability_changelogCreateWithoutAbility_changelog_proseInput {

    @Field(() => version_groupsCreateNestedOneWithoutAbility_changelogInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutAbility_changelogInput;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_changelogInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_changelogInput;
}
