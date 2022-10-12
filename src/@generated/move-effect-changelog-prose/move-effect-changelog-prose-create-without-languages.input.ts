import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput } from '../move-effect-changelog/move-effect-changelog-create-nested-one-without-move-effect-changelog-prose.input';

@InputType()
export class move_effect_changelog_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput, {nullable:false})
    move_effect_changelog!: move_effect_changelogCreateNestedOneWithoutMove_effect_changelog_proseInput;
}
