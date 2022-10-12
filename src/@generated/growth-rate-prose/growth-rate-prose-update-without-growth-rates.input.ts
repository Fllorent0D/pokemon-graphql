import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput } from '../languages/languages-update-one-required-without-growth-rate-prose-nested.input';

@InputType()
export class growth_rate_proseUpdateWithoutGrowth_ratesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput;
}
