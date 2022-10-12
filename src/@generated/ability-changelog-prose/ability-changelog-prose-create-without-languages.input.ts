import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput } from '../ability-changelog/ability-changelog-create-nested-one-without-ability-changelog-prose.input';

@InputType()
export class ability_changelog_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput, {nullable:false})
    ability_changelog!: ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput;
}
