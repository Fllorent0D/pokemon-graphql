import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { experienceUpdateManyWithoutGrowth_ratesNestedInput } from '../experience/experience-update-many-without-growth-rates-nested.input';
import { growth_rate_proseUpdateManyWithoutGrowth_ratesNestedInput } from '../growth-rate-prose/growth-rate-prose-update-many-without-growth-rates-nested.input';

@InputType()
export class growth_ratesUpdateWithoutPokemon_speciesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => experienceUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    experience?: experienceUpdateManyWithoutGrowth_ratesNestedInput;

    @Field(() => growth_rate_proseUpdateManyWithoutGrowth_ratesNestedInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseUpdateManyWithoutGrowth_ratesNestedInput;
}
