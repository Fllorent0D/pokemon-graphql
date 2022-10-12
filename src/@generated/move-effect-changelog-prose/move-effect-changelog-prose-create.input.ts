import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_effect_changelog_proseInput } from '../languages/languages-create-nested-one-without-move-effect-changelog-prose.input';
import { move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput } from '../move-effect-changelog/move-effect-changelog-create-nested-one-without-move-effect-changelog-prose.input';

@InputType()
export class move_effect_changelog_proseCreateInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_effect_changelog_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_effect_changelog_proseInput;

    @Field(() => move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput, {nullable:false})
    move_effect_changelog!: move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput;
}
