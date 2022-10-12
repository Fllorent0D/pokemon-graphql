import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput } from '../experience/experience-unchecked-update-many-without-growth-rates-nested.input';
import { pokemon_speciesUncheckedUpdateManyWithoutGrowth_ratesNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-growth-rates-nested.input';

@InputType()
export class growth_ratesUncheckedUpdateWithoutGrowth_rate_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    experience?: experienceUncheckedUpdateManyWithoutGrowth_ratesNestedInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutGrowth_ratesNestedInput;
}
