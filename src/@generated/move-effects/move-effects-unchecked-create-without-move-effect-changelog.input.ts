import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_changelogUncheckedCreateNestedManyWithoutMove_effectsInput } from '../move-changelog/move-changelog-unchecked-create-nested-many-without-move-effects.input';
import { move_effect_proseUncheckedCreateNestedManyWithoutMove_effectsInput } from '../move-effect-prose/move-effect-prose-unchecked-create-nested-many-without-move-effects.input';
import { movesUncheckedCreateNestedManyWithoutMove_effectsInput } from '../moves/moves-unchecked-create-nested-many-without-move-effects.input';

@InputType()
export class move_effectsUncheckedCreateWithoutMove_effect_changelogInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => move_changelogUncheckedCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    move_changelog?: move_changelogUncheckedCreateNestedManyWithoutMove_effectsInput;

    @Field(() => move_effect_proseUncheckedCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    move_effect_prose?: move_effect_proseUncheckedCreateNestedManyWithoutMove_effectsInput;

    @Field(() => movesUncheckedCreateNestedManyWithoutMove_effectsInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutMove_effectsInput;
}
