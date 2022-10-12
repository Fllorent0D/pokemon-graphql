import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateNestedManyWithoutMove_effectsInput } from '../move-changelog/move-changelog-create-nested-many-without-move-effects.input';
import { move_effect_changelogCreateNestedManyWithoutMove_effectsInput } from '../move-effect-changelog/move-effect-changelog-create-nested-many-without-move-effects.input';
import { move_effect_proseCreateNestedManyWithoutMove_effectsInput } from '../move-effect-prose/move-effect-prose-create-nested-many-without-move-effects.input';

@InputType()
export class move_effectsCreateWithoutMovesInput {

    @Field(() => move_changelogCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    move_changelog?: move_changelogCreateNestedManyWithoutMove_effectsInput;

    @Field(() => move_effect_changelogCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogCreateNestedManyWithoutMove_effectsInput;

    @Field(() => move_effect_proseCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    move_effect_prose?: move_effect_proseCreateNestedManyWithoutMove_effectsInput;
}
