import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_battle_style_proseUpdateManyWithoutMove_battle_stylesNestedInput } from '../move-battle-style-prose/move-battle-style-prose-update-many-without-move-battle-styles-nested.input';

@InputType()
export class move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_battle_style_proseUpdateManyWithoutMove_battle_stylesNestedInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUpdateManyWithoutMove_battle_stylesNestedInput;
}
