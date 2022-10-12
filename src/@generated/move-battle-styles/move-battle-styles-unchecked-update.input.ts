import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_battle_style_proseUncheckedUpdateManyWithoutMove_battle_stylesNestedInput } from '../move-battle-style-prose/move-battle-style-prose-unchecked-update-many-without-move-battle-styles-nested.input';
import { nature_battle_style_preferencesUncheckedUpdateManyWithoutMove_battle_stylesNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-move-battle-styles-nested.input';

@InputType()
export class move_battle_stylesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_battle_style_proseUncheckedUpdateManyWithoutMove_battle_stylesNestedInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUncheckedUpdateManyWithoutMove_battle_stylesNestedInput;

    @Field(() => nature_battle_style_preferencesUncheckedUpdateManyWithoutMove_battle_stylesNestedInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesUncheckedUpdateManyWithoutMove_battle_stylesNestedInput;
}
