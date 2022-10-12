import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput } from '../experience/experience-unchecked-update-many-without-growth-rates-nested.input';
import { growth_rate_proseUncheckedUpdateManyWithoutGrowth_ratesNestedInput } from '../growth-rate-prose/growth-rate-prose-unchecked-update-many-without-growth-rates-nested.input';

@InputType()
export class growth_ratesUncheckedUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    experience?: experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput;

    @Field(() => growth_rate_proseUncheckedUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseUncheckedUpdateManyWithoutGrowth_ratesNestedInput;
}
