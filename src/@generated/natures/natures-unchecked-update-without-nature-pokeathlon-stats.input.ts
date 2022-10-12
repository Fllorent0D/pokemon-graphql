import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { nature_battle_style_preferencesUncheckedUpdateManyWithoutNaturesNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-natures-nested.input';
import { nature_namesUncheckedUpdateManyWithoutNaturesNestedInput } from '../nature-names/nature-names-unchecked-update-many-without-natures-nested.input';

@InputType()
export class naturesUncheckedUpdateWithoutNature_pokeathlon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    decreased_stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    increased_stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    hates_flavor_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes_flavor_id?: IntFieldUpdateOperationsInput;

    @Field(() => nature_battle_style_preferencesUncheckedUpdateManyWithoutNaturesNestedInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesUncheckedUpdateManyWithoutNaturesNestedInput;

    @Field(() => nature_namesUncheckedUpdateManyWithoutNaturesNestedInput, {nullable:true})
    nature_names?: nature_namesUncheckedUpdateManyWithoutNaturesNestedInput;
}
