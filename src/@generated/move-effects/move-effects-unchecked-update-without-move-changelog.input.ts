import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../move-effect-changelog/move-effect-changelog-unchecked-update-many-without-move-effects-nested.input';
import { move_effect_proseUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../move-effect-prose/move-effect-prose-unchecked-update-many-without-move-effects-nested.input';
import { movesUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-move-effects-nested.input';

@InputType()
export class move_effectsUncheckedUpdateWithoutMove_changelogInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => move_effect_proseUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_effect_prose?: move_effect_proseUncheckedUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutMove_effectsNestedInput;
}
