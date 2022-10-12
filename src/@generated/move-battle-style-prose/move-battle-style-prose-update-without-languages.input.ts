import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_battle_stylesUpdateOneRequiredWithoutMove_battle_style_proseNestedInput } from '../move-battle-styles/move-battle-styles-update-one-required-without-move-battle-style-prose-nested.input';

@InputType()
export class move_battle_style_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => move_battle_stylesUpdateOneRequiredWithoutMove_battle_style_proseNestedInput, {nullable:true})
    move_battle_styles?: move_battle_stylesUpdateOneRequiredWithoutMove_battle_style_proseNestedInput;
}
