import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { move_battle_stylesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput } from '../move-battle-styles/move-battle-styles-update-one-required-without-nature-battle-style-preferences-nested.input';
import { naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput } from '../natures/natures-update-one-required-without-nature-battle-style-preferences-nested.input';

@InputType()
export class nature_battle_style_preferencesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => move_battle_stylesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput, {nullable:true})
    move_battle_styles?: move_battle_stylesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput;

    @Field(() => naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput, {nullable:true})
    natures?: naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput;
}
