import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutGeneration_namesNestedInput } from '../generations/generations-update-one-required-without-generation-names-nested.input';

@InputType()
export class generation_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutGeneration_namesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutGeneration_namesNestedInput;
}
