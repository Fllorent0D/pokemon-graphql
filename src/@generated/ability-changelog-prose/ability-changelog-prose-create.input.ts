import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_changelog_proseInput } from '../languages/languages-create-nested-one-without-ability-changelog-prose.input';
import { ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput } from '../ability-changelog/ability-changelog-create-nested-one-without-ability-changelog-prose.input';

@InputType()
export class ability_changelog_proseCreateInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_changelog_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput, {nullable:false})
    ability_changelog!: ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput;
}
