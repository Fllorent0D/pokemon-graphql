import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsScalarWhereInput } from './generations-scalar-where.input';
import { Type } from 'class-transformer';
import { generationsUpdateManyMutationInput } from './generations-update-many-mutation.input';

@InputType()
export class generationsUpdateManyWithWhereWithoutPokedexesInput {

    @Field(() => generationsScalarWhereInput, {nullable:false})
    @Type(() => generationsScalarWhereInput)
    where!: generationsScalarWhereInput;

    @Field(() => generationsUpdateManyMutationInput, {nullable:false})
    @Type(() => generationsUpdateManyMutationInput)
    data!: generationsUpdateManyMutationInput;
}
