import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateNestedOneWithoutMove_effect_changelogInput } from '../move-effects/move-effects-create-nested-one-without-move-effect-changelog.input';
import { move_effect_changelog_proseCreateNestedManyWithoutMove_effect_changelogInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-create-nested-many-without-move-effect-changelog.input';

@InputType()
export class move_effect_changelogCreateWithoutVersion_groupsInput {

    @Field(() => move_effectsCreateNestedOneWithoutMove_effect_changelogInput, {nullable:false})
    move_effects!: move_effectsCreateNestedOneWithoutMove_effect_changelogInput;

    @Field(() => move_effect_changelog_proseCreateNestedManyWithoutMove_effect_changelogInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseCreateNestedManyWithoutMove_effect_changelogInput;
}
