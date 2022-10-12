import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class move_meta_categoriesUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;
}
