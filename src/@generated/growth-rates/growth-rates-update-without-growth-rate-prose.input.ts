import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { experienceUpdateManyWithoutGrowth_ratesNestedInput } from '../experience/experience-update-many-without-growth-rates-nested.input';
import { pokemon_speciesUpdateManyWithoutGrowth_ratesNestedInput } from '../pokemon-species/pokemon-species-update-many-without-growth-rates-nested.input';

@InputType()
export class growth_ratesUpdateWithoutGrowth_rate_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => experienceUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    experience?: experienceUpdateManyWithoutGrowth_ratesNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutGrowth_ratesNestedInput;
}
