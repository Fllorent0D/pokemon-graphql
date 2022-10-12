import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { move_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../move-changelog/move-changelog-unchecked-update-many-without-move-effects-nested.input';
import { move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../move-effect-changelog/move-effect-changelog-unchecked-update-many-without-move-effects-nested.input';
import { movesUncheckedUpdateManyWithoutMove_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-move-effects-nested.input';

@InputType()
export class move_effectsUncheckedUpdateWithoutMove_effect_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => move_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_changelog?: move_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutMove_effectsNestedInput;
}
