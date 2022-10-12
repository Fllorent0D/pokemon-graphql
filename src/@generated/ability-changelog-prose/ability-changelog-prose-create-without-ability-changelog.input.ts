import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_changelog_proseInput } from '../languages/languages-create-nested-one-without-ability-changelog-prose.input';

@InputType()
export class ability_changelog_proseCreateWithoutAbility_changelogInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_changelog_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_changelog_proseInput;
}
