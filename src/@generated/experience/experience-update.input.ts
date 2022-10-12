import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { growth_ratesUpdateOneRequiredWithoutExperienceNestedInput } from '../growth-rates/growth-rates-update-one-required-without-experience-nested.input';

@InputType()
export class experienceUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    experience?: IntFieldUpdateOperationsInput;

    @Field(() => growth_ratesUpdateOneRequiredWithoutExperienceNestedInput, {nullable:true})
    growth_rates?: growth_ratesUpdateOneRequiredWithoutExperienceNestedInput;
}
