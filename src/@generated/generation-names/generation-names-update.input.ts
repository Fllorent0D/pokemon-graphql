import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutGeneration_namesNestedInput } from '../languages/languages-update-one-required-without-generation-names-nested.input';
import { generationsUpdateOneRequiredWithoutGeneration_namesNestedInput } from '../generations/generations-update-one-required-without-generation-names-nested.input';

@InputType()
export class generation_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutGeneration_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutGeneration_namesNestedInput;

    @Field(() => generationsUpdateOneRequiredWithoutGeneration_namesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutGeneration_namesNestedInput;
}
