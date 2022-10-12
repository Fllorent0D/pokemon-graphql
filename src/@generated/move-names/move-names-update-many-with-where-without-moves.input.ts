import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesScalarWhereInput } from './move-names-scalar-where.input';
import { Type } from 'class-transformer';
import { move_namesUpdateManyMutationInput } from './move-names-update-many-mutation.input';

@InputType()
export class move_namesUpdateManyWithWhereWithoutMovesInput {

    @Field(() => move_namesScalarWhereInput, {nullable:false})
    @Type(() => move_namesScalarWhereInput)
    where!: move_namesScalarWhereInput;

    @Field(() => move_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_namesUpdateManyMutationInput)
    data!: move_namesUpdateManyMutationInput;
}
