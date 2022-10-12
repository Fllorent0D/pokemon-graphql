import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput } from '../natures/natures-update-one-required-without-nature-battle-style-preferences-nested.input';

@InputType()
export class nature_battle_style_preferencesUpdateWithoutMove_battle_stylesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput, {nullable:true})
    natures?: naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput;
}
