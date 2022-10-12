import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsScalarWhereInput } from './stat-hints-scalar-where.input';
import { Type } from 'class-transformer';
import { stat_hintsUpdateManyMutationInput } from './stat-hints-update-many-mutation.input';

@InputType()
export class stat_hintsUpdateManyWithWhereWithoutStatsInput {

    @Field(() => stat_hintsScalarWhereInput, {nullable:false})
    @Type(() => stat_hintsScalarWhereInput)
    where!: stat_hintsScalarWhereInput;

    @Field(() => stat_hintsUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_hintsUpdateManyMutationInput)
    data!: stat_hintsUpdateManyMutationInput;
}
