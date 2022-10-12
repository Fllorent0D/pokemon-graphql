import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { growth_ratesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput } from '../growth-rates/growth-rates-update-one-required-without-growth-rate-prose-nested.input';

@InputType()
export class growth_rate_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => growth_ratesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput, {nullable:true})
    growth_rates?: growth_ratesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput;
}
