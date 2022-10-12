import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateNestedOneWithoutAbility_changelogInput } from '../abilities/abilities-create-nested-one-without-ability-changelog.input';
import { ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput } from '../ability-changelog-prose/ability-changelog-prose-create-nested-many-without-ability-changelog.input';

@InputType()
export class ability_changelogCreateWithoutVersion_groupsInput {

    @Field(() => abilitiesCreateNestedOneWithoutAbility_changelogInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_changelogInput;

    @Field(() => ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseCreateNestedManyWithoutAbility_changelogInput;
}
