import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesScalarWhereInput } from './types-scalar-where.input';
import { Type } from 'class-transformer';
import { typesUpdateManyMutationInput } from './types-update-many-mutation.input';

@InputType()
export class typesUpdateManyWithWhereWithoutMove_damage_classesInput {

    @Field(() => typesScalarWhereInput, {nullable:false})
    @Type(() => typesScalarWhereInput)
    where!: typesScalarWhereInput;

    @Field(() => typesUpdateManyMutationInput, {nullable:false})
    @Type(() => typesUpdateManyMutationInput)
    data!: typesUpdateManyMutationInput;
}
