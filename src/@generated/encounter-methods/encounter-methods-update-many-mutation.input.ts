import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class encounter_methodsUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;
}