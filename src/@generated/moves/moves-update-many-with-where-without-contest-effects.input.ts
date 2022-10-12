import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesScalarWhereInput } from './moves-scalar-where.input';
import { Type } from 'class-transformer';
import { movesUpdateManyMutationInput } from './moves-update-many-mutation.input';

@InputType()
export class movesUpdateManyWithWhereWithoutContest_effectsInput {

    @Field(() => movesScalarWhereInput, {nullable:false})
    @Type(() => movesScalarWhereInput)
    where!: movesScalarWhereInput;

    @Field(() => movesUpdateManyMutationInput, {nullable:false})
    @Type(() => movesUpdateManyMutationInput)
    data!: movesUpdateManyMutationInput;
}
